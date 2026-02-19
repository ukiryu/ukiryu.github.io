// Comprehensive tools data with all details for display
// Each tool includes full profile information from the register

export const toolsDetail = {
  imagemagick: {
    name: 'imagemagick',
    display_name: 'ImageMagick Image Processing Suite',
    homepage: 'https://imagemagick.org/',
    description: 'ImageMagick is a software suite to create, edit, compose, or convert bitmap images. It can read and write over 200 image formats.',
    version: '7.1',
    versions: ['7.1', '6.9'],
    aliases: ['magick', 'convert', 'im'],
    commands: [
      {
        name: 'convert',
        description: 'Convert between image formats and apply transformations',
        usage: 'magick [input-options] input-file [processing-options] output-file',
        arguments: [
          { name: 'inputs', type: 'file', variadic: true, min: 1, position: 1, description: 'Input file(s)' },
          { name: 'output', type: 'file', required: true, position: 'last', description: 'Output file' },
        ],
        options: [
          { name: 'density', type: 'string', cli: '-density', description: 'Horizontal and vertical density for input' },
          { name: 'colorspace', type: 'symbol', cli: '-colorspace', values: ['RGB', 'sRGB', 'Gray', 'CMYK', 'LAB', 'XYZ'], description: 'Alternate image colorspace' },
          { name: 'resize', type: 'string', cli: '-resize', description: 'Resize image (e.g., "50%", "800x600")' },
          { name: 'quality', type: 'integer', cli: '-quality', range: [1, 100], description: 'JPEG/MIFF/PNG compression level (1-100)' },
          { name: 'format', type: 'string', cli: '-format', description: 'Output format type' },
          { name: 'background', type: 'string', cli: '-background', description: 'Background color' },
          { name: 'rotate', type: 'float', cli: '-rotate', description: 'Rotate image by degrees' },
          { name: 'blur', type: 'string', cli: '-blur', description: 'Blur image (e.g., "0x5" for radiusxsigma)' },
          { name: 'sharpen', type: 'string', cli: '-sharpen', description: 'Sharpen image' },
          { name: 'crop', type: 'string', cli: '-crop', description: 'Cut out rectangular region' },
          { name: 'gravity', type: 'symbol', cli: '-gravity', values: ['north', 'south', 'east', 'west', 'center', 'northwest', 'northeast', 'southwest', 'southeast'], description: 'Text placement' },
        ],
        flags: [
          { name: 'verbose', cli: '-verbose', description: 'Print detailed information' },
          { name: 'strip', cli: '-strip', description: 'Strip image of all profiles and comments' },
          { name: 'flatten', cli: '-flatten', description: 'Flatten a sequence of images' },
        ],
      },
      {
        name: 'identify',
        description: 'Describe the format and characteristics of image files',
        usage: 'magick identify [options] input-file',
        subcommand: 'identify',
        arguments: [
          { name: 'input', type: 'file', variadic: true, min: 1, position: 'last', description: 'Input file(s) to identify' },
        ],
        options: [
          { name: 'format', type: 'string', cli: '-format', description: 'Output formatted image characteristics' },
        ],
        flags: [
          { name: 'verbose', cli: '-verbose', description: 'Print detailed information' },
          { name: 'ping', cli: '-ping', description: 'Efficiently determine image attributes' },
        ],
      },
      {
        name: 'mogrify',
        description: 'Process image files (overwrites original file)',
        usage: 'magick mogrify [options] input-file',
        subcommand: 'mogrify',
        arguments: [
          { name: 'inputs', type: 'file', variadic: true, min: 1, position: 'last', description: 'Input file(s) to modify in place' },
        ],
        options: [
          { name: 'resize', type: 'string', cli: '-resize', description: 'Resize image' },
          { name: 'quality', type: 'integer', cli: '-quality', range: [1, 100], description: 'Compression level' },
          { name: 'format', type: 'string', cli: '-format', description: 'Output format type' },
        ],
        flags: [
          { name: 'verbose', cli: '-verbose', description: 'Print detailed information' },
        ],
      },
    ],
    platforms: ['macos', 'linux', 'windows'],
    shells: ['unix', 'powershell', 'windows'],
    category: 'Image Processing',
  },

  ffmpeg: {
    name: 'ffmpeg',
    display_name: 'FFmpeg',
    homepage: 'https://ffmpeg.org/',
    description: 'Complete solution to record, convert, and stream audio and video.',
    version: '8.0',
    versions: ['8.0', '7.0', '6.1'],
    aliases: ['ffprobe'],
    commands: [
      {
        name: 'convert',
        description: 'Convert media files between formats',
        usage: 'ffmpeg -i input.mp4 output.avi',
        arguments: [
          { name: 'input', type: 'file', required: true, description: 'Input media file' },
          { name: 'output', type: 'file', required: true, description: 'Output file' },
        ],
        options: [
          { name: 'codec:v', type: 'string', cli: '-c:v', description: 'Video codec (e.g., libx264, libvpx)' },
          { name: 'codec:a', type: 'string', cli: '-c:a', description: 'Audio codec (e.g., aac, mp3)' },
          { name: 'bitrate', type: 'string', cli: '-b:v', description: 'Video bitrate (e.g., 1M)' },
          { name: 'resolution', type: 'string', cli: '-s', description: 'Resolution (e.g., 1920x1080)' },
          { name: 'fps', type: 'integer', cli: '-r', description: 'Frame rate' },
          { name: 'start_time', type: 'float', cli: '-ss', description: 'Start time in seconds' },
          { name: 'duration', type: 'float', cli: '-t', description: 'Duration in seconds' },
        ],
        flags: [
          { name: 'overwrite', cli: '-y', description: 'Overwrite output files' },
          { name: 'quiet', cli: '-v quiet', description: 'Suppress output' },
        ],
      },
    ],
    platforms: ['macos', 'linux', 'windows'],
    shells: ['unix', 'powershell', 'windows'],
    category: 'Video & Audio',
  },

  ghostscript: {
    name: 'ghostscript',
    display_name: 'Ghostscript',
    homepage: 'https://ghostscript.com/',
    description: 'Interpreter for PostScript and PDF with conversion capabilities.',
    version: '10.0',
    versions: ['10.0', '9.56'],
    aliases: ['gs'],
    commands: [
      {
        name: 'convert',
        description: 'Convert PDF/PostScript files',
        usage: 'gs -dNOPAUSE -sDEVICE=pdfwrite -sOutputFile=output.pdf input.pdf',
        arguments: [
          { name: 'input', type: 'file', variadic: true, min: 1, description: 'Input file(s)' },
        ],
        options: [
          { name: 'device', type: 'string', cli: '-sDEVICE', description: 'Output device (pdfwrite, png16m, etc.)' },
          { name: 'output', type: 'file', cli: '-sOutputFile', description: 'Output file' },
          { name: 'resolution', type: 'integer', cli: '-r', description: 'Resolution in DPI' },
          { name: 'papersize', type: 'string', cli: '-sPAPERSIZE', description: 'Paper size (a4, letter, etc.)' },
        ],
        flags: [
          { name: 'nopause', cli: '-dNOPAUSE', description: 'Disable pause after each page' },
          { name: 'batch', cli: '-dBATCH', description: 'Exit after processing' },
          { name: 'quiet', cli: '-dQUIET', description: 'Suppress output' },
        ],
      },
    ],
    platforms: ['macos', 'linux', 'windows'],
    shells: ['unix', 'powershell', 'windows'],
    category: 'Document Conversion',
  },

  pandoc: {
    name: 'pandoc',
    display_name: 'Pandoc',
    homepage: 'https://pandoc.org/',
    description: 'Universal markup converter supporting dozens of formats.',
    version: '3.1',
    versions: ['3.1'],
    commands: [
      {
        name: 'convert',
        description: 'Convert documents between formats',
        usage: 'pandoc input.md -o output.pdf',
        arguments: [
          { name: 'input', type: 'file', variadic: true, min: 1, description: 'Input file(s)' },
        ],
        options: [
          { name: 'output', type: 'file', cli: '-o', description: 'Output file' },
          { name: 'from', type: 'string', cli: '-f', description: 'Input format (markdown, html, docx, etc.)' },
          { name: 'to', type: 'string', cli: '-t', description: 'Output format' },
          { name: 'template', type: 'file', cli: '--template', description: 'Template file' },
          { name: 'pdf_engine', type: 'string', cli: '--pdf-engine', description: 'PDF engine (pdflatex, wkhtmltopdf, etc.)' },
        ],
        flags: [
          { name: 'standalone', cli: '-s', description: 'Produce standalone output' },
          { name: 'toc', cli: '--toc', description: 'Generate table of contents' },
        ],
      },
    ],
    platforms: ['macos', 'linux', 'windows'],
    shells: ['unix', 'powershell', 'windows'],
    category: 'Document Conversion',
  },

  inkscape: {
    name: 'inkscape',
    display_name: 'Inkscape',
    homepage: 'https://inkscape.org/',
    description: 'Vector graphics editor with powerful command-line capabilities.',
    version: '1.3',
    versions: ['1.3', '1.2'],
    commands: [
      {
        name: 'export',
        description: 'Export SVG to various formats',
        usage: 'inkscape input.svg -o output.png',
        arguments: [
          { name: 'input', type: 'file', required: true, description: 'Input SVG file' },
        ],
        options: [
          { name: 'output', type: 'file', cli: '-o', description: 'Output file' },
          { name: 'type', type: 'string', cli: '--export-type', values: ['png', 'pdf', 'ps', 'eps', 'svg'], description: 'Export format' },
          { name: 'width', type: 'integer', cli: '-w', description: 'Export width in pixels' },
          { name: 'height', type: 'integer', cli: '-h', description: 'Export height in pixels' },
          { name: 'dpi', type: 'integer', cli: '--export-dpi', description: 'Export DPI' },
        ],
        flags: [
          { name: 'export_area_drawing', cli: '--export-area-drawing', description: 'Export drawing area only' },
          { name: 'export_area_page', cli: '--export-area-page', description: 'Export page area' },
        ],
      },
    ],
    platforms: ['macos', 'linux', 'windows'],
    shells: ['unix', 'powershell', 'windows'],
    category: 'Image Processing',
  },

  curl: {
    name: 'curl',
    display_name: 'cURL',
    homepage: 'https://curl.se/',
    description: 'Command-line tool for transferring data with URLs.',
    version: 'generic',
    versions: ['generic'],
    commands: [
      {
        name: 'request',
        description: 'Make HTTP requests',
        usage: 'curl [options] URL',
        arguments: [
          { name: 'url', type: 'uri', required: true, description: 'Target URL' },
        ],
        options: [
          { name: 'output', type: 'file', cli: '-o', description: 'Write output to file' },
          { name: 'request', type: 'string', cli: '-X', values: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], description: 'HTTP method' },
          { name: 'header', type: 'string', cli: '-H', description: 'HTTP header' },
          { name: 'data', type: 'string', cli: '-d', description: 'Request body data' },
          { name: 'user', type: 'string', cli: '-u', description: 'Username:password for auth' },
          { name: 'max_time', type: 'integer', cli: '--max-time', description: 'Maximum time in seconds' },
        ],
        flags: [
          { name: 'silent', cli: '-s', description: 'Silent mode' },
          { name: 'location', cli: '-L', description: 'Follow redirects' },
          { name: 'insecure', cli: '-k', description: 'Skip SSL verification' },
          { name: 'verbose', cli: '-v', description: 'Verbose output' },
        ],
      },
    ],
    platforms: ['macos', 'linux', 'windows'],
    shells: ['unix', 'powershell', 'windows'],
    category: 'Network',
  },

  tar: {
    name: 'tar',
    display_name: 'tar',
    homepage: 'https://www.gnu.org/software/tar/',
    description: 'Archive utility for creating and extracting tape archives.',
    version: 'generic',
    versions: ['gnu', 'bsd'],
    commands: [
      {
        name: 'create',
        display_name: 'Create archive',
        description: 'Create a tar archive from files/directories',
        arguments: [
          { name: 'inputs', type: 'file', variadic: true, min: 1, required: true, description: 'Files/directories to archive' },
        ],
        options: [
          { name: 'file', type: 'file', required: true, description: 'Archive file name' },
          { name: 'directory', type: 'string', description: 'Change to directory before processing' },
        ],
        flags: [
          { name: 'verbose', description: 'Verbose mode' },
          { name: 'gzip', description: 'Compress with gzip' },
          { name: 'bzip2', description: 'Compress with bzip2' },
        ],
      },
      {
        name: 'extract',
        display_name: 'Extract archive',
        description: 'Extract files from a tar archive',
        arguments: [
          { name: 'inputs', type: 'file', description: 'Specific files to extract (empty = all)' },
        ],
        options: [
          { name: 'file', type: 'file', required: true, description: 'Archive file name' },
          { name: 'directory', type: 'string', description: 'Extract to directory' },
        ],
        flags: [
          { name: 'verbose', description: 'Verbose mode' },
          { name: 'gzip', description: 'Archive is gzipped' },
          { name: 'bzip2', description: 'Archive is bzipped' },
          { name: 'keep_old', description: 'Keep existing files' },
        ],
      },
      {
        name: 'list',
        display_name: 'List archive',
        description: 'List contents of a tar archive',
        arguments: [
          { name: 'inputs', type: 'file', description: 'Specific files to list (empty = all)' },
        ],
        options: [
          { name: 'file', type: 'file', required: true, description: 'Archive file name' },
        ],
        flags: [
          { name: 'verbose', description: 'Verbose mode' },
        ],
      },
    ],
    platforms: ['macos', 'linux', 'windows'],
    shells: ['unix', 'powershell', 'windows'],
    category: 'Archive & Compression',
  },

  git: {
    name: 'git',
    display_name: 'Git',
    homepage: 'https://git-scm.com/',
    description: 'Distributed version control system.',
    version: 'generic',
    versions: ['generic'],
    commands: [
      {
        name: 'clone',
        description: 'Clone a repository',
        arguments: [
          { name: 'url', type: 'uri', required: true, description: 'Repository URL' },
          { name: 'directory', type: 'string', description: 'Target directory' },
        ],
        options: [
          { name: 'branch', type: 'string', cli: '-b', description: 'Branch to checkout' },
          { name: 'depth', type: 'integer', cli: '--depth', description: 'Create shallow clone' },
        ],
        flags: [
          { name: 'recursive', cli: '--recursive', description: 'Initialize submodules' },
        ],
      },
      {
        name: 'commit',
        description: 'Record changes to the repository',
        options: [
          { name: 'message', type: 'string', cli: '-m', required: true, description: 'Commit message' },
        ],
        flags: [
          { name: 'all', cli: '-a', description: 'Commit all changed files' },
          { name: 'amend', cli: '--amend', description: 'Amend previous commit' },
        ],
      },
      {
        name: 'push',
        description: 'Update remote refs',
        options: [
          { name: 'remote', type: 'string', description: 'Remote name' },
          { name: 'branch', type: 'string', description: 'Branch name' },
        ],
        flags: [
          { name: 'force', cli: '-f', description: 'Force push' },
          { name: 'set_upstream', cli: '-u', description: 'Set upstream' },
        ],
      },
    ],
    platforms: ['macos', 'linux', 'windows'],
    shells: ['unix', 'powershell', 'windows'],
    category: 'Development',
  },
}

// Tool list for the register page
export const toolsList = Object.values(toolsDetail).map(tool => ({
  name: tool.name,
  display_name: tool.display_name,
  description: tool.description,
  versions: tool.versions,
  commands: tool.commands.map(c => c.name),
  category: tool.category,
}))

// Categories
export const categories = [
  'Archive & Compression',
  'Image Processing',
  'Video & Audio',
  'Document Conversion',
  'System Utilities',
  'Network',
  'Development',
]

// Get tool by name
export function getTool(name) {
  return toolsDetail[name] || null
}
