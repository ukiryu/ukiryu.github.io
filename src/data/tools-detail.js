// Comprehensive tools data extracted from ukiryu/register
// Register branch configurable via config.js

// Tool categories for filtering
export const categories = [
  'Archive & Compression',
  'Image Processing',
  'Video & Audio',
  'Document Conversion',
  'System Utilities',
  'Network',
  'Development',
  'Text Processing',
  'File Management',
  'Version Control',
]

// All tools from the register with basic info
export const toolsList = [
  // Archive & Compression
  { name: 'tar', display_name: 'tar', description: 'Archive utility for creating and extracting tape archives', versions: ['gnu', 'bsd'], commands: ['create', 'extract', 'list'], category: 'Archive & Compression' },
  { name: 'zip', display_name: 'zip', description: 'Package and compress files into archives', versions: ['generic'], commands: ['zip'], category: 'Archive & Compression' },
  { name: 'unzip', display_name: 'unzip', description: 'List, test, and extract ZIP archives', versions: ['generic'], commands: ['unzip', 'list', 'test'], category: 'Archive & Compression' },
  { name: 'gzip', display_name: 'gzip', description: 'GNU zip compression utility', versions: ['generic'], commands: ['gzip', 'gunzip', 'gzcat'], category: 'Archive & Compression' },
  { name: 'bzip2', display_name: 'bzip2', description: 'High-quality data compression program', versions: ['generic'], commands: ['bzip2', 'bunzip2', 'bzcat'], category: 'Archive & Compression' },
  { name: 'xz', display_name: 'XZ', description: 'LZMA compression utility', versions: ['generic'], commands: ['xz', 'unxz', 'xzcat'], category: 'Archive & Compression' },
  { name: 'zstd', display_name: 'zstd', description: 'Zstandard compression', versions: ['generic'], commands: ['zstd', 'unzstd', 'zstdcat'], category: 'Archive & Compression' },
  { name: 'p7zip', display_name: 'p7zip', description: '7-Zip file archiver', versions: ['generic'], commands: ['7z', '7za', '7zr'], category: 'Archive & Compression' },

  // Image Processing
  { name: 'imagemagick', display_name: 'ImageMagick', description: 'Image Processing Suite for creating, editing, and converting images', versions: ['7.1', '6.9'], commands: ['convert', 'identify', 'mogrify', 'composite'], category: 'Image Processing' },
  { name: 'convert', display_name: 'ImageMagick Convert', description: 'Image format conversion (ImageMagick 6)', versions: ['6.9'], commands: ['convert'], category: 'Image Processing' },
  { name: 'magick', display_name: 'ImageMagick Magick', description: 'ImageMagick 7 unified command', versions: ['7.1'], commands: ['magick'], category: 'Image Processing' },
  { name: 'inkscape', display_name: 'Inkscape', description: 'Vector graphics editor', versions: ['1.3', '1.2'], commands: ['export', 'convert'], category: 'Image Processing' },
  { name: 'optipng', display_name: 'OptiPNG', description: 'PNG optimizer', versions: ['generic'], commands: ['optimize'], category: 'Image Processing' },
  { name: 'jpegoptim', display_name: 'jpegoptim', description: 'JPEG optimization tool', versions: ['generic'], commands: ['optimize'], category: 'Image Processing' },
  { name: 'pngquant', display_name: 'pngquant', description: 'PNG image optimizer with lossy compression', versions: ['generic'], commands: ['quantize'], category: 'Image Processing' },
  { name: 'gifsicle', display_name: 'gifsicle', description: 'GIF image manipulator', versions: ['generic'], commands: ['optimize', 'edit'], category: 'Image Processing' },
  { name: 'cwebp', display_name: 'cwebp', description: 'WebP image encoder', versions: ['generic'], commands: ['encode'], category: 'Image Processing' },
  { name: 'dwebp', display_name: 'dwebp', description: 'WebP image decoder', versions: ['generic'], commands: ['decode'], category: 'Image Processing' },
  { name: 'exiftool', display_name: 'ExifTool', description: 'Read, write, and manipulate image metadata', versions: ['generic'], commands: ['read', 'write', 'copy'], category: 'Image Processing' },

  // Video & Audio
  { name: 'ffmpeg', display_name: 'FFmpeg', description: 'Complete solution to record, convert, and stream audio and video', versions: ['8.0', '7.0', '6.1'], commands: ['convert', 'probe', 'extract'], category: 'Video & Audio' },
  { name: 'sox', display_name: 'SoX', description: 'Sound eXchange - audio processing tool', versions: ['generic'], commands: ['convert', 'play', 'record'], category: 'Video & Audio' },

  // Document Conversion
  { name: 'ghostscript', display_name: 'Ghostscript', description: 'Interpreter for PostScript and PDF', versions: ['10.0', '9.56'], commands: ['convert', 'merge', 'extract'], category: 'Document Conversion' },
  { name: 'pandoc', display_name: 'Pandoc', description: 'Universal markup converter', versions: ['3.1'], commands: ['convert'], category: 'Document Conversion' },
  { name: 'libreoffice', display_name: 'LibreOffice', description: 'Office suite with command-line conversion', versions: ['generic'], commands: ['convert'], category: 'Document Conversion' },
  { name: 'pdf2ps', display_name: 'pdf2ps', description: 'PDF to PostScript converter', versions: ['generic'], commands: ['convert'], category: 'Document Conversion' },
  { name: 'pdftk', display_name: 'PDFtk', description: 'PDF toolkit for manipulation', versions: ['generic'], commands: ['merge', 'split', 'rotate'], category: 'Document Conversion' },

  // System Utilities
  { name: 'cat', display_name: 'cat', description: 'Concatenate and display files', versions: ['generic'], commands: ['cat'], category: 'System Utilities' },
  { name: 'cut', display_name: 'cut', description: 'Remove sections from each line of files', versions: ['generic'], commands: ['cut'], category: 'System Utilities' },
  { name: 'head', display_name: 'head', description: 'Output the first part of files', versions: ['generic'], commands: ['head'], category: 'System Utilities' },
  { name: 'tail', display_name: 'tail', description: 'Output the last part of files', versions: ['generic'], commands: ['tail', 'follow'], category: 'System Utilities' },
  { name: 'sort', display_name: 'sort', description: 'Sort lines of text', versions: ['gnu', 'bsd'], commands: ['sort'], category: 'System Utilities' },
  { name: 'wc', display_name: 'wc', description: 'Print newline, word, and byte counts', versions: ['generic'], commands: ['wc'], category: 'System Utilities' },
  { name: 'tee', display_name: 'tee', description: 'Read from stdin and write to stdout and files', versions: ['generic'], commands: ['tee'], category: 'System Utilities' },
  { name: 'diff', display_name: 'diff', description: 'Compare files line by line', versions: ['generic'], commands: ['diff', 'cmp'], category: 'System Utilities' },
  { name: 'xargs', display_name: 'xargs', description: 'Build and execute command lines from input', versions: ['gnu', 'bsd'], commands: ['xargs'], category: 'System Utilities' },
  { name: 'make', display_name: 'make', description: 'Build automation tool', versions: ['gnu', 'bsd'], commands: ['make'], category: 'System Utilities' },
  { name: 'htop', display_name: 'htop', description: 'Interactive process viewer', versions: ['generic'], commands: ['htop'], category: 'System Utilities' },
  { name: 'lsof', display_name: 'lsof', description: 'List open files', versions: ['generic'], commands: ['lsof'], category: 'System Utilities' },
  { name: 'tree', display_name: 'tree', description: 'List files in directory tree format', versions: ['generic'], commands: ['tree'], category: 'System Utilities' },
  { name: 'ping', display_name: 'ping', description: 'Send ICMP echo requests', versions: ['gnu', 'bsd'], commands: ['ping'], category: 'System Utilities' },

  // Text Processing
  { name: 'grep', display_name: 'grep', description: 'Print lines matching a pattern', versions: ['gnu', 'bsd'], commands: ['grep', 'egrep', 'fgrep'], category: 'Text Processing' },
  { name: 'sed', display_name: 'sed', description: 'Stream editor for filtering and transforming text', versions: ['gnu', 'bsd'], commands: ['sed'], category: 'Text Processing' },
  { name: 'awk', display_name: 'AWK', description: 'Domain-specific language for text processing', versions: ['gnu', 'bsd'], commands: ['awk'], category: 'Text Processing' },
  { name: 'jq', display_name: 'jq', description: 'Lightweight command-line JSON processor', versions: ['generic'], commands: ['jq'], category: 'Text Processing' },
  { name: 'yq', display_name: 'yq', description: 'YAML processor', versions: ['generic'], commands: ['yq'], category: 'Text Processing' },
  { name: 'yq_jq', display_name: 'yq (jq backend)', description: 'YAML processor using jq', versions: ['generic'], commands: ['yq'], category: 'Text Processing' },
  { name: 'less', display_name: 'less', description: 'Pager program similar to more', versions: ['generic'], commands: ['less'], category: 'Text Processing' },
  { name: 'bat', display_name: 'Bat', description: 'Cat clone with syntax highlighting', versions: ['generic'], commands: ['bat'], category: 'Text Processing' },

  // File Management
  { name: 'find', display_name: 'find', description: 'Search for files in a directory hierarchy', versions: ['gnu', 'bsd'], commands: ['find'], category: 'File Management' },
  { name: 'fd', display_name: 'fd', description: 'Simple, fast alternative to find', versions: ['generic'], commands: ['fd'], category: 'File Management' },
  { name: 'fzf', display_name: 'fzf', description: 'Fuzzy finder for command-line', versions: ['generic'], commands: ['fzf'], category: 'File Management' },
  { name: 'gl', display_name: 'gl', description: 'Fuzzy path finder for git ls-files', versions: ['generic'], commands: ['gl'], category: 'File Management' },
  { name: 'rg', display_name: 'ripgrep', description: 'Recursively search directories for regex patterns', versions: ['generic'], commands: ['rg'], category: 'File Management' },
  { name: 'ripgrep-all', display_name: 'ripgrep-all', description: 'ripgrep with searchable archives support', versions: ['generic'], commands: ['rga'], category: 'File Management' },
  { name: 'rsync', display_name: 'rsync', description: 'Fast incremental file transfer', versions: ['generic'], commands: ['rsync'], category: 'File Management' },
  { name: 'rclone', display_name: 'rclone', description: 'Rsync for cloud storage', versions: ['generic'], commands: ['rclone'], category: 'File Management' },
  { name: 'restic', display_name: 'restic', description: 'Fast, secure backup program', versions: ['generic'], commands: ['backup', 'restore'], category: 'File Management' },

  // Network
  { name: 'curl', display_name: 'cURL', description: 'Command-line tool for transferring data with URLs', versions: ['generic'], commands: ['request', 'download', 'upload'], category: 'Network' },
  { name: 'wget', display_name: 'wget', description: 'Network downloader', versions: ['generic'], commands: ['download'], category: 'Network' },
  { name: 'ssh', display_name: 'SSH', description: 'Secure shell protocol client', versions: ['generic'], commands: ['ssh'], category: 'Network' },
  { name: 'scp', display_name: 'scp', description: 'Secure copy protocol', versions: ['generic'], commands: ['scp'], category: 'Network' },
  { name: 'yt-dlp', display_name: 'yt-dlp', description: 'Command-line audio/video downloader', versions: ['generic'], commands: ['download'], category: 'Network' },

  // Development
  { name: 'git', display_name: 'Git', description: 'Distributed version control system', versions: ['generic'], commands: ['clone', 'commit', 'push', 'pull', 'branch', 'checkout'], category: 'Development' },
  { name: 'ansible', display_name: 'Ansible', description: 'Automation engine for configuring systems', versions: ['generic'], commands: ['playbook', 'adhoc'], category: 'Development' },
  { name: 'openssl', display_name: 'OpenSSL', description: 'Cryptography toolkit', versions: ['generic'], commands: ['encrypt', 'decrypt', 'cert'], category: 'Development' },
  { name: 'vim', display_name: 'Vim', description: 'Vi IMproved text editor', versions: ['generic'], commands: ['vim', 'view', 'vimdiff'], category: 'Development' },
  { name: 'ukiryu', display_name: 'Ukiryu', description: 'Declarative CLI framework', versions: ['generic'], commands: ['ukiryu'], category: 'Development' },
]

// Detailed tool information for tool detail pages
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
        ],
        flags: [
          { name: 'verbose', cli: '-verbose', description: 'Print detailed information' },
          { name: 'strip', cli: '-strip', description: 'Strip image of all profiles and comments' },
          { name: 'flatten', cli: '-flatten', description: 'Flatten a sequence of images' },
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
        ],
        flags: [
          { name: 'nopause', cli: '-dNOPAUSE', description: 'Disable pause after each page' },
          { name: 'batch', cli: '-dBATCH', description: 'Exit after processing' },
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
        ],
        flags: [
          { name: 'silent', cli: '-s', description: 'Silent mode' },
          { name: 'location', cli: '-L', description: 'Follow redirects' },
        ],
      },
    ],
    platforms: ['macos', 'linux', 'windows'],
    shells: ['unix', 'powershell', 'windows'],
    category: 'Network',
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
    ],
    platforms: ['macos', 'linux', 'windows'],
    shells: ['unix', 'powershell', 'windows'],
    category: 'Development',
  },
}

// Get tool by name
export function getTool(name) {
  return toolsDetail[name] || null
}

// Stats
export const stats = {
  totalTools: toolsList.length,
  totalCommands: toolsList.reduce((acc, t) => acc + t.commands.length, 0),
  categories: categories.length,
}
