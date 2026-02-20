#!/usr/bin/env node

/**
 * Generate data files from ukiryu/register and ukiryu/schemas
 * This script reads YAML files and generates JavaScript data for the Vue app.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import yaml from 'js-yaml'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const REGISTER_PATH = process.env.REGISTER_PATH || path.join(__dirname, '../../register')
const SCHEMAS_PATH = process.env.SCHEMAS_PATH || path.join(__dirname, '../../schemas')
const OUTPUT_PATH = path.join(__dirname, '../src/data/generated')

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_PATH)) {
  fs.mkdirSync(OUTPUT_PATH, { recursive: true })
}

/**
 * Read all YAML files from a directory (non-recursive)
 */
function readYamlFiles(dir) {
  const result = []
  if (!fs.existsSync(dir)) {
    console.warn(`Directory not found: ${dir}`)
    return result
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith('.yaml')) {
      const filePath = path.join(dir, entry.name)
      try {
        const content = yaml.load(fs.readFileSync(filePath, 'utf8'))
        result.push({
          file: entry.name,
          path: filePath,
          data: content
        })
      } catch (e) {
        console.error(`Error parsing ${filePath}:`, e.message)
      }
    }
  }
  return result
}

/**
 * Read all tool directories and their YAML files
 */
function readTools() {
  const tools = []
  const toolsDir = path.join(REGISTER_PATH, 'tools')

  if (!fs.existsSync(toolsDir)) {
    console.warn(`Tools directory not found: ${toolsDir}`)
    return tools
  }

  const toolDirs = fs.readdirSync(toolsDir, { withFileTypes: true })
    .filter(d => d.isDirectory() && !d.name.startsWith('.'))

  for (const toolDir of toolDirs) {
    const toolName = toolDir.name
    const toolPath = path.join(toolsDir, toolName)

    // Read index.yaml first
    const indexPath = path.join(toolPath, 'index.yaml')
    let indexData = {}
    if (fs.existsSync(indexPath)) {
      try {
        indexData = yaml.load(fs.readFileSync(indexPath, 'utf8'))
      } catch (e) {
        console.error(`Error parsing ${indexPath}:`, e.message)
      }
    }

    // Find all version YAML files (not in subdirectories)
    const versionFiles = []
    const entries = fs.readdirSync(toolPath, { withFileTypes: true })
    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.yaml') && entry.name !== 'index.yaml') {
        const filePath = path.join(toolPath, entry.name)
        try {
          const content = yaml.load(fs.readFileSync(filePath, 'utf8'))
          versionFiles.push({
            version: entry.name.replace('.yaml', ''),
            data: content
          })
        } catch (e) {
          console.error(`Error parsing ${filePath}:`, e.message)
        }
      }
    }

    // Read implementation subdirectories
    const implementations = {}
    const implDirs = entries.filter(d => d.isDirectory() && !d.name.startsWith('.'))
    for (const implDir of implDirs) {
      const implName = implDir.name
      const implPath = path.join(toolPath, implName)
      const implFiles = []

      const implEntries = fs.readdirSync(implPath, { withFileTypes: true })
      for (const implEntry of implEntries) {
        if (implEntry.isFile() && implEntry.name.endsWith('.yaml')) {
          const filePath = path.join(implPath, implEntry.name)
          try {
            const content = yaml.load(fs.readFileSync(filePath, 'utf8'))
            implFiles.push({
              version: implEntry.name.replace('.yaml', ''),
              data: content
            })
          } catch (e) {
            console.error(`Error parsing ${filePath}:`, e.message)
          }
        }
      }

      if (implFiles.length > 0) {
        implementations[implName] = implFiles
      }
    }

    tools.push({
      name: toolName,
      index: indexData,
      versions: versionFiles,
      implementations
    })
  }

  return tools
}

/**
 * Read all interface YAML files
 */
function readInterfaces() {
  const interfacesDir = path.join(REGISTER_PATH, 'interfaces')
  return readYamlFiles(interfacesDir)
}

/**
 * Read schema files
 */
function readSchemas() {
  const schemas = {}

  // Read v1 schemas
  const v1Dir = path.join(SCHEMAS_PATH, 'v1')
  if (fs.existsSync(v1Dir)) {
    schemas.v1 = readYamlFiles(v1Dir)
  }

  return schemas
}

/**
 * Generate tools list for the register page
 */
function generateToolsList(tools) {
  const toolsList = []
  const categories = new Set()

  for (const tool of tools) {
    // Get the best available data
    const indexData = tool.index || {}
    const versionData = tool.versions[0]?.data || {}
    const implData = Object.values(tool.implementations)[0]?.[0]?.data || {}

    // Merge data
    const merged = {
      name: tool.name,
      display_name: indexData.display_name || versionData.display_name || tool.name,
      description: indexData.description || versionData.description || '',
      interface: indexData.interface || versionData.implements || versionData.interface || tool.name,
      implementations: Object.keys(tool.implementations).length > 0
        ? Object.keys(tool.implementations)
        : (indexData.implementations?.map(i => i.name) || ['default']),
      versions: tool.versions.map(v => v.version),
      commands: extractCommands(versionData) || extractCommands(implData) || [],
      category: indexData.category || categorizeTool(tool.name)
    }

    categories.add(merged.category)
    toolsList.push(merged)
  }

  return { toolsList, categories: Array.from(categories).filter(Boolean) }
}

/**
 * Extract commands from profile data
 */
function extractCommands(data) {
  if (!data) return null

  // Check execution_profiles first (old format)
  if (data.execution_profiles && data.execution_profiles.length > 0) {
    const profile = data.execution_profiles[0]
    if (profile.commands) {
      return profile.commands.map(cmd => cmd.name)
    }
  }

  // Check profiles (new format)
  if (data.profiles && data.profiles.length > 0) {
    const profile = data.profiles[0]
    if (profile.commands) {
      return profile.commands.map(cmd => cmd.name)
    }
  }

  return null
}

/**
 * Categorize a tool based on its name
 */
function categorizeTool(name) {
  const categories = {
    'Archive & Compression': ['tar', 'zip', 'unzip', 'gzip', 'bzip2', 'xz', 'zstd', 'p7zip'],
    'Image Processing': ['imagemagick', 'convert', 'magick', 'inkscape', 'optipng', 'jpegoptim', 'pngquant', 'gifsicle', 'cwebp', 'dwebp', 'exiftool'],
    'Video & Audio': ['ffmpeg', 'sox'],
    'Document Conversion': ['ghostscript', 'pandoc', 'libreoffice', 'pdf2ps', 'pdftk'],
    'System Utilities': ['cat', 'cut', 'head', 'tail', 'sort', 'wc', 'tee', 'diff', 'xargs', 'make', 'htop', 'lsof', 'tree', 'ping'],
    'Text Processing': ['grep', 'sed', 'awk', 'jq', 'yq', 'yq_jq', 'less', 'bat'],
    'File Management': ['find', 'fd', 'fzf', 'gl', 'rg', 'ripgrep-all', 'rsync', 'rclone', 'restic'],
    'Network': ['curl', 'wget', 'ssh', 'scp', 'yt-dlp'],
    'Development': ['git', 'ansible', 'openssl', 'vim', 'ukiryu']
  }

  for (const [category, tools] of Object.entries(categories)) {
    if (tools.includes(name)) {
      return category
    }
  }

  return 'System Utilities'
}

/**
 * Generate detailed tool data
 */
function generateToolsDetail(tools) {
  const details = {}

  for (const tool of tools) {
    // Collect all data from all versions and implementations
    // Prioritize implementation data (more detailed) over version data
    const versionData = tool.versions.map(v => v.data)
    const implementationData = Object.values(tool.implementations).flat().map(i => i.data)

    // Process implementation data first (more detailed), then version data
    const allData = [
      ...implementationData,
      ...versionData,
      tool.index
    ].filter(Boolean)

    // Merge profiles from all sources
    const profiles = []
    const commands = new Map()

    for (const data of allData) {
      // Execution profiles (old format - more detailed)
      if (data.execution_profiles) {
        for (const profile of data.execution_profiles) {
          profiles.push({
            name: profile.name,
            display_name: profile.display_name,
            platforms: profile.platforms || [],
            shells: profile.shells || [],
            option_style: profile.option_style,
            version: profile.version
          })

          if (profile.commands) {
            for (const cmd of profile.commands) {
              // Merge command: prefer detailed over simple
              mergeCommand(commands, cmd)
            }
          }
        }
      }

      // Profiles (new format)
      if (data.profiles) {
        for (const profile of data.profiles) {
          profiles.push({
            name: profile.name,
            display_name: profile.display_name,
            platforms: profile.platforms || [],
            shells: profile.shells || [],
            option_style: profile.option_style,
            version: profile.version || profile.version_requirement
          })

          if (profile.commands) {
            for (const cmd of profile.commands) {
              mergeCommand(commands, cmd)
            }
          }
        }
      }
    }

    // Build the detail object
    const firstData = implementationData[0] || versionData[0] || tool.index || {}

    details[tool.name] = {
      name: tool.name,
      display_name: firstData.display_name || tool.index?.display_name || tool.name,
      interface: firstData.implements || firstData.interface || tool.index?.interface || tool.name,
      homepage: firstData.homepage || tool.index?.homepage || '',
      description: firstData.description || tool.index?.description || '',
      version: versionData[0]?.version || tool.versions[0]?.version || 'generic',
      versions: tool.versions.map(v => v.version),
      implementations: Object.keys(tool.implementations).length > 0
        ? Object.keys(tool.implementations)
        : ['default'],
      aliases: firstData.aliases || tool.index?.aliases || [],
      profiles: profiles.length > 0 ? profiles : undefined,
      commands: Array.from(commands.values()),
      smoke_tests: firstData.smoke_tests || tool.index?.smoke_tests || [],
      category: tool.index?.category || categorizeTool(tool.name)
    }
  }

  return details
}

/**
 * Merge a command into the commands map, preferring more detailed versions
 */
function mergeCommand(commandsMap, cmd) {
  if (!cmd || !cmd.name) return

  const existing = commandsMap.get(cmd.name)

  if (!existing) {
    // New command, add it
    commandsMap.set(cmd.name, cmd)
  } else {
    // Command exists - merge if new one has more details
    const existingDetail = countDetails(existing)
    const newDetail = countDetails(cmd)

    if (newDetail > existingDetail) {
      // New command is more detailed, replace
      commandsMap.set(cmd.name, cmd)
    } else if (newDetail === existingDetail && newDetail > 0) {
      // Same detail level - merge missing properties
      const merged = { ...cmd, ...existing }
      // Ensure we keep arrays from the more detailed version
      if (cmd.arguments?.length > (existing.arguments?.length || 0)) {
        merged.arguments = cmd.arguments
      }
      if (cmd.options?.length > (existing.options?.length || 0)) {
        merged.options = cmd.options
      }
      if (cmd.flags?.length > (existing.flags?.length || 0)) {
        merged.flags = cmd.flags
      }
      commandsMap.set(cmd.name, merged)
    }
  }
}

/**
 * Count the level of detail in a command
 */
function countDetails(cmd) {
  let count = 0
  if (cmd.arguments?.length) count += cmd.arguments.length
  if (cmd.options?.length) count += cmd.options.length
  if (cmd.flags?.length) count += cmd.flags.length
  if (cmd.post_options?.length) count += cmd.post_options.length
  if (cmd.usage) count += 1
  if (cmd.description) count += 1
  return count
}

/**
 * Generate interfaces data
 */
function generateInterfacesData(interfaces) {
  const interfacesList = []
  const interfacesDetail = {}

  for (const iface of interfaces) {
    const data = iface.data
    const name = data.name || iface.file.replace('.yaml', '')

    interfacesList.push({
      name,
      display_name: data.display_name || name,
      description: data.description || '',
      commands: (data.commands || data.actions || []).map(c => c.name)
    })

    interfacesDetail[name] = data
  }

  return { interfacesList, interfacesDetail }
}

/**
 * Main function
 */
function main() {
  console.log('Reading tools from register...')
  const tools = readTools()
  console.log(`Found ${tools.length} tools`)

  console.log('Reading interfaces from register...')
  const interfaces = readInterfaces()
  console.log(`Found ${interfaces.length} interfaces`)

  console.log('Reading schemas...')
  const schemas = readSchemas()
  console.log(`Found ${Object.values(schemas).flat().length} schema files`)

  console.log('Generating tools list...')
  const { toolsList, categories } = generateToolsList(tools)

  console.log('Generating tools detail...')
  const toolsDetail = generateToolsDetail(tools)

  console.log('Generating interfaces data...')
  const { interfacesList, interfacesDetail } = generateInterfacesData(interfaces)

  // Write output files
  console.log('Writing output files...')

  // Tools list and categories
  const toolsOutput = `// Auto-generated from ukiryu/register
// Do not edit manually - run npm run generate-data to update

export const categories = ${JSON.stringify(categories, null, 2)}

export const toolsList = ${JSON.stringify(toolsList, null, 2)}

export const toolsDetail = ${JSON.stringify(toolsDetail, null, 2)}

// Get tool by name
export function getTool(name) {
  if (toolsDetail[name]) {
    return toolsDetail[name]
  }

  const basicTool = toolsList.find(t => t.name === name)
  if (!basicTool) return null

  return {
    name: basicTool.name,
    display_name: basicTool.display_name,
    description: basicTool.description,
    interface: basicTool.interface,
    version: basicTool.versions[0] || 'generic',
    versions: basicTool.versions,
    implementations: basicTool.implementations,
    commands: basicTool.commands.map(cmd => ({
      name: cmd,
      description: \`Execute \${cmd} operation\`,
    })),
    platforms: ['macos', 'linux', 'windows'],
    shells: ['unix', 'powershell', 'windows'],
    category: basicTool.category,
  }
}

// Get tools that implement a given interface
export function getToolsByInterface(interfaceName) {
  return toolsList.filter(t => t.interface === interfaceName)
}

// Count total implementations
export function getTotalImplementations() {
  return toolsList.reduce((acc, t) => acc + t.implementations.length, 0)
}

// Stats
export const stats = {
  totalTools: toolsList.length,
  totalImplementations: getTotalImplementations(),
  totalCommands: toolsList.reduce((acc, t) => acc + t.commands.length, 0),
  categories: categories.length,
}
`
  fs.writeFileSync(path.join(OUTPUT_PATH, 'tools.js'), toolsOutput)
  console.log('  - tools.js')

  // Interfaces
  const interfacesOutput = `// Auto-generated from ukiryu/register
// Do not edit manually - run npm run generate-data to update

export const interfacesList = ${JSON.stringify(interfacesList, null, 2)}

export const interfacesDetail = ${JSON.stringify(interfacesDetail, null, 2)}

// Get interface by name
export function getInterface(name) {
  if (interfacesDetail[name]) {
    return interfacesDetail[name]
  }

  const basicInterface = interfacesList.find(i => i.name === name)
  if (!basicInterface) return null

  return {
    name: basicInterface.name,
    display_name: basicInterface.display_name,
    description: basicInterface.description,
    version: '1.0',
    commands: basicInterface.commands.map(cmd => ({
      name: cmd,
      description: \`Execute \${cmd} operation\`,
    })),
  }
}

// Stats
export const interfaceStats = {
  totalInterfaces: interfacesList.length,
  totalCommands: interfacesList.reduce((acc, i) => acc + i.commands.length, 0),
}
`
  fs.writeFileSync(path.join(OUTPUT_PATH, 'interfaces.js'), interfacesOutput)
  console.log('  - interfaces.js')

  // Schemas (just copy the raw YAML as JSON for now)
  const schemasOutput = `// Auto-generated from ukiryu/schemas
// Do not edit manually - run npm run generate-data to update

export const schemas = ${JSON.stringify(schemas, null, 2)}

export function getSchema(version, name) {
  return schemas[version]?.find(s => s.file === \`\${name}.yaml\`)?.data || null
}

export function getSchemaVersions() {
  return Object.keys(schemas)
}
`
  fs.writeFileSync(path.join(OUTPUT_PATH, 'schemas.js'), schemasOutput)
  console.log('  - schemas.js')

  console.log('Done!')
}

main()
