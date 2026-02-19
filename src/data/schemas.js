// Schema data extracted from v1/tool.schema.yaml and v1/interface.schema.yaml

export const schemas = {
  tool: {
    id: 'tool',
    name: 'Tool Profile Schema',
    version: 'v1',
    description: 'YAML Schema for Ukiryu Tool Profiles. This schema defines the structure for tool profile YAML files.',
    uri: '/schemas/v1/tool.schema.yaml',
    githubUrl: 'https://github.com/ukiryu/ukiryu/blob/main/schemas/v1/tool.schema.yaml',

    rootProperties: [
      { name: 'ukiryu_schema', type: 'string', required: false, description: 'Ukiryu schema format version (e.g., "1.0", "1.1", "1.2"). Indicates which schema version this profile conforms to.' },
      { name: '$self', type: 'string (uri)', required: false, description: 'Self-assigned URI of this document. Format: https://www.ukiryu.com/register/{schema_ver}/{tool-name}/{tool-ver}' },
      { name: 'name', type: 'string', required: true, description: 'The tool name (e.g., "inkscape", "ghostscript")' },
      { name: 'display_name', type: 'string', required: false, description: 'Human-readable display name for the tool' },
      { name: 'homepage', type: 'string (uri)', required: false, description: 'URL to the tool\'s homepage' },
      { name: 'description', type: 'string', required: false, description: 'Human-readable description of what this tool does. Recommended length: 1-3 sentences.' },
      { name: 'version', type: 'string', required: true, description: 'The version of this profile (e.g., "1.0", "10.0", "2.47.1")' },
      { name: 'aliases', type: 'array of strings', required: false, description: 'Alternative names for the tool' },
      { name: 'version_detection', type: 'object', required: false, description: 'Configuration for detecting the tool version' },
      { name: 'components', type: 'object', required: false, description: 'Registry of reusable definitions (v1.2+). Enables sharing common option/argument/flag definitions.' },
      { name: 'profiles', type: 'array', required: true, description: 'Command execution profiles for different platforms/shells' },
      { name: 'smoke_tests', type: 'array', required: false, description: 'Smoke tests to verify tool functionality (v1.3+)' },
    ],

    definitions: [
      {
        name: 'command_profile',
        description: 'Command execution profile for a specific platform/shell combination',
        properties: [
          { name: 'name', type: 'string', required: true, description: 'Profile name (e.g., "modern_unix", "windows_powershell")' },
          { name: 'display_name', type: 'string', required: false, description: 'Human-readable profile name' },
          { name: 'platforms', type: 'array', required: true, values: ['windows', 'macos', 'linux'], description: 'Supported platforms' },
          { name: 'shells', type: 'array', required: true, values: ['unix', 'windows', 'powershell'], description: 'Shell types by platform compatibility' },
          { name: 'version', type: 'string', required: false, description: 'Version constraint (e.g., ">= 1.0")' },
          { name: 'option_style', type: 'string', required: false, values: ['double_dash_equals', 'double_dash_space', 'single_dash_equals', 'single_dash_space', 'slash_colon', 'slash_space'], description: 'Default option style' },
          { name: 'inherits', type: 'string', required: false, description: 'Name of parent profile to inherit from' },
          { name: 'routing', type: 'object', required: false, description: 'Command routing table' },
          { name: 'commands', type: 'array', required: false, description: 'Command definitions for this profile' },
        ],
      },
      {
        name: 'command',
        description: 'Individual command definition',
        properties: [
          { name: 'name', type: 'string', required: true, description: 'Command name (e.g., "convert", "compress")' },
          { name: 'description', type: 'string', required: false, description: 'What this command does' },
          { name: 'usage', type: 'string', required: false, description: 'Usage string' },
          { name: 'subcommand', type: 'string', required: false, description: 'Subcommand phrase (e.g., "convert" for "magick convert")' },
          { name: 'arguments', type: 'array', required: false, description: 'Argument definitions' },
          { name: 'options', type: 'array', required: false, description: 'Option definitions' },
          { name: 'flags', type: 'array', required: false, description: 'Flag definitions' },
        ],
      },
      {
        name: 'argument',
        description: 'Positional argument definition',
        properties: [
          { name: 'name', type: 'string', required: true, description: 'Argument name' },
          { name: 'type', type: 'string', required: true, values: ['file', 'string', 'integer', 'float', 'symbol', 'boolean', 'uri', 'datetime', 'hash', 'array'], description: 'Data type' },
          { name: 'variadic', type: 'boolean', required: false, description: 'Whether this argument can accept multiple values' },
          { name: 'position', type: 'integer or string', required: false, values: ['first', 'last', 'not_last', 'sources'], description: 'Position in command line' },
          { name: 'min', type: 'integer', required: false, description: 'Minimum number of values for variadic arguments' },
          { name: 'required', type: 'boolean', required: false, description: 'Whether this argument is required' },
        ],
      },
      {
        name: 'option',
        description: 'Named option definition',
        properties: [
          { name: 'name', type: 'string', required: true, description: 'Option name (without CLI prefix)' },
          { name: 'type', type: 'string', required: false, values: ['file', 'string', 'integer', 'float', 'symbol', 'boolean', 'uri', 'datetime', 'hash', 'array'], description: 'Data type' },
          { name: 'cli', type: 'string', required: true, description: 'CLI flag including prefix (e.g., "--output", "-o")' },
          { name: 'assignment_delimiter', type: 'string', required: false, values: ['equals', 'space', 'colon', 'none', 'auto'], description: 'How the option value is attached' },
          { name: 'values', type: 'array', required: false, description: 'Valid values for symbol/enums' },
        ],
      },
      {
        name: 'flag',
        description: 'Boolean flag definition',
        properties: [
          { name: 'name', type: 'string', required: true, description: 'Flag name' },
          { name: 'cli', type: 'string', required: true, description: 'CLI flag including prefix' },
          { name: 'cli_short', type: 'string', required: false, description: 'Short form of the CLI flag' },
          { name: 'default', type: 'boolean', required: false, description: 'Default value' },
          { name: 'position_constraint', type: 'string', required: false, values: ['any', 'prefix', 'after_argument', 'between_expressions'], description: 'Positional constraint' },
        ],
      },
      {
        name: 'smoke_test',
        description: 'Test definition for verifying tool functionality',
        properties: [
          { name: 'name', type: 'string', required: true, description: 'Unique test name' },
          { name: 'description', type: 'string', required: false, description: 'What this test verifies' },
          { name: 'command', type: 'string or array', required: true, description: 'Command to run' },
          { name: 'expect', type: 'object', required: false, description: 'Expected results (exit_code, output_match, etc.)' },
        ],
      },
    ],

    example: `ukiryu_schema: '1.0'
name: imagemagick
display_name: ImageMagick
homepage: https://imagemagick.org/
version: '7.1'
aliases:
  - magick
  - convert

version_detection:
  command: "-version"
  pattern: 'Version: ImageMagick (\\d+\\.\\d+)'

profiles:
  - name: modern_unix
    platforms: [macos, linux]
    shells: [unix]
    commands:
      - name: convert
        description: Convert between image formats
        arguments:
          - name: inputs
            type: file
            variadic: true
            position: 1
          - name: output
            type: file
            required: true
            position: last
        options:
          - name: resize
            type: string
            cli: "-resize"
        flags:
          - name: verbose
            cli: "-verbose"`,
  },

  interface: {
    id: 'interface',
    name: 'Interface Schema',
    version: 'v1',
    description: 'YAML Schema for Ukiryu Interface Definitions. This schema defines the structure for interface YAML files - abstract contracts that multiple tools can implement.',
    uri: '/schemas/v1/interface.schema.yaml',
    githubUrl: 'https://github.com/ukiryu/ukiryu/blob/main/schemas/v1/interface.schema.yaml',

    rootProperties: [
      { name: 'ukiryu_schema', type: 'string', required: false, description: 'Ukiryu schema format version (e.g., "1.0")' },
      { name: 'name', type: 'string', required: true, description: 'Interface name (e.g., "grep", "tar", "wget"). This identifies the abstract interface.' },
      { name: 'version', type: 'string', required: true, description: 'Interface version (e.g., "1.0", "2.0")' },
      { name: 'display_name', type: 'string', required: false, description: 'Human-readable display name for the interface' },
      { name: 'description', type: 'string', required: false, description: 'Description of what this interface defines. Should explain the contract and purpose.' },
      { name: 'commands', type: 'array', required: true, description: 'Command definitions for this interface. These define the contract that implementing tools must support.' },
    ],

    definitions: [
      {
        name: 'interface_command',
        description: 'Command contract definition',
        properties: [
          { name: 'name', type: 'string', required: true, description: 'Command name (e.g., "search", "create", "download")' },
          { name: 'display_name', type: 'string', required: true, description: 'Human-readable command name' },
          { name: 'description', type: 'string', required: true, description: 'Description of what this command does' },
          { name: 'required', type: 'boolean', required: false, description: 'Whether this command is required for interface compliance' },
          { name: 'abstract', type: 'boolean', required: false, default: false, description: 'If true, this is a namespace-only grouping' },
          { name: 'default_action', type: 'string', required: false, description: 'Default sub-action when invoked without sub-action' },
          { name: 'arguments', type: 'array', required: false, description: 'Argument definitions' },
          { name: 'options', type: 'array', required: false, description: 'Option definitions' },
          { name: 'flags', type: 'array', required: false, description: 'Flag definitions' },
        ],
      },
      {
        name: 'interface_argument',
        description: 'Interface argument contract',
        properties: [
          { name: 'name', type: 'string', required: true, description: 'Argument name' },
          { name: 'type', type: 'string', required: true, values: ['file', 'string', 'integer', 'float', 'symbol', 'boolean', 'uri', 'datetime', 'hash', 'array'], description: 'Data type' },
          { name: 'required', type: 'boolean', required: false, description: 'Whether this argument is required' },
          { name: 'variadic', type: 'boolean', required: false, description: 'Whether this argument can accept multiple values' },
          { name: 'min', type: 'integer', required: false, description: 'Minimum number of values for variadic arguments' },
        ],
      },
      {
        name: 'interface_option',
        description: 'Interface option contract',
        properties: [
          { name: 'name', type: 'string', required: true, description: 'Option name (without CLI prefix)' },
          { name: 'type', type: 'string', required: false, values: ['file', 'string', 'integer', 'float', 'symbol', 'boolean', 'uri', 'datetime', 'hash', 'array'], description: 'Data type' },
          { name: 'required', type: 'boolean', required: false, description: 'Whether this option is required' },
        ],
      },
      {
        name: 'interface_flag',
        description: 'Interface flag contract',
        properties: [
          { name: 'name', type: 'string', required: true, description: 'Flag name (without CLI prefix)' },
        ],
      },
    ],

    example: `ukiryu_schema: '1.0'
name: tar
version: '1.0'
display_name: tar archive interface
description: |
  Interface for tar archive creation, extraction, and listing.
  Defines the contract for tar-compatible implementations.

commands:
  - name: create
    display_name: Create archive
    description: Create a tar archive from files/directories
    required: true
    arguments:
      - name: inputs
        type: file
        variadic: true
        min: 1
        required: true
        description: Files/directories to archive
    options:
      - name: file
        type: file
        required: true
        description: Archive file name
    flags:
      - name: verbose
        description: Verbose mode
      - name: gzip
        description: Compress with gzip`,
  },
}

export const schemaList = [
  { id: 'tool', name: 'Tool Profile Schema', description: 'Defines the structure for tool profile YAML files' },
  { id: 'interface', name: 'Interface Schema', description: 'Defines the structure for interface YAML files' },
]

export function getSchema(id) {
  return schemas[id] || null
}
