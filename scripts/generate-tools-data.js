#!/usr/bin/env node
/**
 * Generate tools data from register YAML files.
 * Run: node scripts/generate-tools-data.js
 */

import { readdir, readFile, writeFile } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REGISTER_PATH = join(__dirname, '../../../register')
const OUTPUT_PATH = join(__dirname, '../src/data/tools-detail.json')

// Simple YAML parser for our needs
function parseYaml(content) {
  const lines = content.split('\n')
  const result = {}
  let currentKey = null
  let currentArray = null
  let currentObj = null
  let indent = 0
  const stack = [{ obj: result, indent: -1 }]

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (!line.trim() || line.trim().startsWith('#')) continue

    const lineIndent = line.search(/\S/)
    const trimmed = line.trim()

    // Handle array items
    if (trimmed.startsWith('- ')) {
      const value = trimmed.slice(2)
      const top = stack[stack.length - 1]

      if (!Array.isArray(top.obj)) {
        // Convert to array if needed
        if (currentKey && !top.obj[currentKey]) {
          top.obj[currentKey] = []
        }
        currentArray = top.obj[currentKey] || top.obj
        if (!Array.isArray(currentArray)) {
          top.obj[currentKey] = []
          currentArray = top.obj[currentKey]
        }
      }

      // Parse value
      if (value.includes(': ')) {
        // Object in array
        const obj = {}
        const [k, v] = value.split(': ')
        obj[k] = parseValue(v)
        currentArray.push(obj)
        stack.push({ obj, indent: lineIndent })
        currentObj = obj
      } else {
        currentArray.push(parseValue(value))
      }
      continue
    }

    // Handle key-value pairs
    if (trimmed.includes(': ')) {
      const colonIdx = trimmed.indexOf(': ')
      const key = trimmed.slice(0, colonIdx)
      const value = trimmed.slice(colonIdx + 2)

      // Pop stack if indent decreased
      while (stack.length > 1 && stack[stack.length - 1].indent >= lineIndent) {
        stack.pop()
      }

      const top = stack[stack.length - 1].obj
      currentKey = key

      if (value === '' || value === '|') {
        // Multi-line or nested object
        if (value === '|') {
          // Multi-line string
          let mlContent = ''
          i++
          while (i < lines.length && (lines[i].startsWith('  ') || lines[i].trim() === '')) {
            mlContent += (mlContent ? '\n' : '') + lines[i].trim()
            i++
          }
          i--
          top[key] = mlContent
        } else {
          top[key] = {}
          stack.push({ obj: top[key], indent: lineIndent })
          currentObj = top[key]
        }
      } else {
        top[key] = parseValue(value)
      }
    }
  }

  return result
}

function parseValue(value) {
  if (!value) return null
  if (value === 'true') return true
  if (value === 'false') return false
  if (value === 'null') return null
  if (/^-?\d+$/.test(value)) return parseInt(value)
  if (/^-?\d+\.\d+$/.test(value)) return parseFloat(value)
  if (value.startsWith("'") && value.endsWith("'")) return value.slice(1, -1)
  if (value.startsWith('"') && value.endsWith('"')) return value.slice(1, -1)
  if (value.startsWith('[') && value.endsWith(']')) {
    return value.slice(1, -1).split(',').map(s => parseValue(s.trim()))
  }
  return value
}

async function* walkDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      yield* walkDir(path)
    } else if (entry.isFile() && (entry.name.endsWith('.yaml') || entry.name.endsWith('.yml'))) {
      yield path
    }
  }
}

async function loadToolData(toolName) {
  const toolDir = join(REGISTER_PATH, 'tools', toolName)
  const data = {
    name: toolName,
    versions: [],
    commands: [],
    profiles: [],
  }

  try {
    const entries = await readdir(toolDir, { withFileTypes: true })

    for (const entry of entries) {
      if (entry.isFile() && (entry.name.endsWith('.yaml') || entry.name.endsWith('.yml'))) {
        const content = await readFile(join(toolDir, entry.name), 'utf-8')
        const parsed = parseYaml(content)

        if (entry.name === 'index.yaml') {
          data.index = parsed
        } else {
          // Version file
          data.versions.push(parsed.version || 'generic')
          if (parsed.display_name) data.display_name = parsed.display_name
          if (parsed.homepage) data.homepage = parsed.homepage
          if (parsed.description) data.description = parsed.description
          if (parsed.aliases) data.aliases = parsed.aliases
          if (parsed.profiles) {
            data.profiles.push(...parsed.profiles)
          }
        }
      }
    }
  } catch (e) {
    // Tool directory not found or other error
  }

  return data
}

async function main() {
  console.log('Loading tools from register...')

  const tools = []
  const toolDirs = await readdir(join(REGISTER_PATH, 'tools'))

  for (const toolName of toolDirs) {
    console.log(`Loading ${toolName}...`)
    const data = await loadToolData(toolName)
    if (data.versions.length > 0 || data.index) {
      tools.push(data)
    }
  }

  // Sort by name
  tools.sort((a, b) => a.name.localeCompare(b.name))

  // Write output
  await writeFile(OUTPUT_PATH, JSON.stringify(tools, null, 2))
  console.log(`Generated ${tools.length} tools to ${OUTPUT_PATH}`)
}

main().catch(console.error)
