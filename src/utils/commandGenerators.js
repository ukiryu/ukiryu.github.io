/**
 * Command generation utilities for different shells and Ruby API
 */

/**
 * Escape a value for bash/zsh/sh
 */
export function escapeBash(value) {
  if (value === null || value === undefined) return "''"
  const str = String(value)
  // If it contains single quotes, use the $'...' syntax or close-reopen
  if (str.includes("'")) {
    return "'" + str.replace(/'/g, "'\\''") + "'"
  }
  return `'${str}'`
}

/**
 * Escape a value for fish shell
 */
export function escapeFish(value) {
  if (value === null || value === undefined) return "''"
  const str = String(value)
  // Fish uses backslash escaping
  return "'" + str.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'"
}

/**
 * Escape a value for PowerShell
 */
export function escapePowerShell(value) {
  if (value === null || value === undefined) return "''"
  const str = String(value)
  // PowerShell uses backtick escaping and double quotes for variables
  if (str.includes('$') || str.includes('`') || str.includes('"') || str.includes("'")) {
    return '"' + str.replace(/"/g, '""').replace(/\$/g, '`$').replace(/`/g, '``') + '"'
  }
  return `'${str}'`
}

/**
 * Escape a value for Windows cmd.exe
 */
export function escapeWindows(value) {
  if (value === null || value === undefined) return '""'
  const str = String(value)
  // cmd.exe uses caret escaping and double quotes
  if (str.includes('"') || str.includes(' ') || str.includes('&') || str.includes('|')) {
    return '"' + str.replace(/"/g, '""').replace(/([&|<>^])/g, '^$1') + '"'
  }
  return str
}

/**
 * Get the appropriate escape function for a shell
 */
export function getEscaper(shell) {
  switch (shell) {
    case 'bash':
    case 'zsh':
    case 'sh':
    case 'dash':
    case 'unix':
      return escapeBash
    case 'fish':
      return escapeFish
    case 'powershell':
      return escapePowerShell
    case 'windows':
    case 'cmd':
      return escapeWindows
    default:
      return escapeBash
  }
}

/**
 * Format a CLI flag with its value
 */
export function formatCliOption(option, value, shell = 'bash') {
  const escaper = getEscaper(shell)
  const cli = option.cli || `--${option.name}`

  // Handle assignment delimiter
  const delimiter = option.assignment_delimiter || 'auto'
  let separator = ' ' // default: space

  if (delimiter === 'equals' || (delimiter === 'auto' && cli.startsWith('--'))) {
    separator = '='
  } else if (delimiter === 'colon') {
    separator = ':'
  } else if (delimiter === 'none') {
    separator = ''
  }

  // Handle different value types
  if (option.type === 'boolean') {
    // Boolean options are typically just the flag
    return value ? cli : null
  }

  if (value === null || value === undefined || value === '') {
    return null
  }

  // Handle arrays
  if (Array.isArray(value)) {
    const sep = option.separator || ' '
    const escapedValues = value.map(v => escaper(v)).join(sep)
    return `${cli}${separator}${escapedValues}`
  }

  return `${cli}${separator}${escaper(value)}`
}

/**
 * Generate a CLI command string
 */
export function generateCliCommand(tool, command, values, shell = 'bash') {
  const parts = []

  // Tool name (or executable)
  parts.push(tool.name)

  // Subcommand if present
  if (command.subcommand) {
    parts.push(command.subcommand)
  }

  // Add options (before arguments)
  if (command.options) {
    for (const opt of command.options) {
      const optValue = values.options?.[opt.name]
      if (optValue !== undefined && optValue !== null && optValue !== '') {
        const formatted = formatCliOption(opt, optValue, shell)
        if (formatted) parts.push(formatted)
      }
    }
  }

  // Add flags
  if (command.flags) {
    for (const flag of command.flags) {
      const flagValue = values.flags?.[flag.name]
      // Only include if explicitly enabled (not default)
      if (flagValue === true) {
        parts.push(flag.cli || `--${flag.name}`)
      }
    }
  }

  // Add arguments
  if (command.arguments) {
    for (const arg of command.arguments) {
      const argValue = values.arguments?.[arg.name]
      if (argValue !== undefined && argValue !== null) {
        if (Array.isArray(argValue)) {
          parts.push(...argValue.map(v => getEscaper(shell)(v)))
        } else {
          parts.push(getEscaper(shell)(argValue))
        }
      }
    }
  }

  // Add post-options (after arguments)
  if (command.post_options) {
    for (const opt of command.post_options) {
      const optValue = values.postOptions?.[opt.name]
      if (optValue !== undefined && optValue !== null && optValue !== '') {
        const formatted = formatCliOption(opt, optValue, shell)
        if (formatted) parts.push(formatted)
      }
    }
  }

  return parts.join(' ')
}

/**
 * Generate Ruby API code
 */
export function generateRubyCode(tool, command, values) {
  const lines = []
  const indent = '  '

  lines.push("require 'ukiryu'")
  lines.push('')
  lines.push(`tool = Ukiryu::Tool.get(:${tool.name})`)
  lines.push('')

  // Build the options hash
  const optionsHash = {}
  const hasOptions = []

  // Add arguments
  if (command.arguments) {
    for (const arg of command.arguments) {
      const argValue = values.arguments?.[arg.name]
      if (argValue !== undefined && argValue !== null && argValue !== '') {
        if (Array.isArray(argValue)) {
          optionsHash[arg.name] = argValue.map(v => rubyValue(v, arg.type))
        } else {
          optionsHash[arg.name] = rubyValue(argValue, arg.type)
        }
        hasOptions.push(arg.name)
      }
    }
  }

  // Add options
  if (command.options) {
    for (const opt of command.options) {
      const optValue = values.options?.[opt.name]
      if (optValue !== undefined && optValue !== null && optValue !== '') {
        optionsHash[opt.name] = rubyValue(optValue, opt.type)
        hasOptions.push(opt.name)
      }
    }
  }

  // Add flags
  if (command.flags) {
    for (const flag of command.flags) {
      const flagValue = values.flags?.[flag.name]
      if (flagValue === true) {
        optionsHash[flag.name] = true
        hasOptions.push(flag.name)
      }
    }
  }

  // Add post-options
  if (command.post_options) {
    for (const opt of command.post_options) {
      const optValue = values.postOptions?.[opt.name]
      if (optValue !== undefined && optValue !== null && optValue !== '') {
        optionsHash[opt.name] = rubyValue(optValue, opt.type)
        hasOptions.push(opt.name)
      }
    }
  }

  // Generate the execute call
  if (hasOptions.length === 0) {
    lines.push(`result = tool.execute(:${command.name})`)
  } else {
    lines.push(`result = tool.execute(:${command.name}, {`)
    for (const key of hasOptions) {
      const value = formatRubyValue(optionsHash[key])
      lines.push(`${indent}${key}: ${value},`)
    }
    lines.push('})')
  }

  lines.push('')
  lines.push('if result.success?')
  lines.push(`${indent}puts "Success!"`)
  lines.push(`${indent}puts result.output.stdout`)
  lines.push('else')
  lines.push(`${indent}puts "Error: \#{result.output.stderr}"`)
  lines.push('end')

  return lines.join('\n')
}

/**
 * Convert a value to Ruby representation
 */
function rubyValue(value, type) {
  if (value === null || value === undefined) return null

  switch (type) {
    case 'integer':
    case 'float':
      return Number(value)
    case 'boolean':
      return Boolean(value)
    case 'symbol':
      return String(value).toLowerCase().replace(/[^a-z0-9_]/g, '_')
    default:
      return String(value)
  }
}

/**
 * Format a Ruby value for display
 */
function formatRubyValue(value) {
  if (value === null || value === undefined) return 'nil'
  if (typeof value === 'boolean') return value ? 'true' : 'false'
  if (typeof value === 'number') return String(value)
  if (Array.isArray(value)) {
    return '[' + value.map(v => formatRubyValue(v)).join(', ') + ']'
  }
  return `"${String(value).replace(/"/g, '\\"')}"`
}

/**
 * Shell display names and groups
 */
export const shellOptions = [
  { value: 'bash', label: 'Bash', group: 'Unix' },
  { value: 'zsh', label: 'Zsh', group: 'Unix' },
  { value: 'sh', label: 'POSIX sh', group: 'Unix' },
  { value: 'fish', label: 'Fish', group: 'Unix' },
  { value: 'powershell', label: 'PowerShell', group: 'Windows' },
  { value: 'cmd', label: 'CMD (cmd.exe)', group: 'Windows' },
]

export const outputFormats = [
  { value: 'cli', label: 'CLI Command' },
  { value: 'ruby', label: 'Ruby API' },
]
