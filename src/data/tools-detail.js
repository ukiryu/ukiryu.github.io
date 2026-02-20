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
]

// All tools from the register
// Each tool implements an interface (usually with the same name)
// Each tool can have multiple implementations (gnu, bsd, busybox, etc.)
export const toolsList = [
  // Archive & Compression
  { name: 'tar', display_name: 'tar', description: 'Archive utility for creating and extracting tape archives', interface: 'tar', implementations: ['gnu', 'busybox'], versions: ['1.35', '1.36.1'], commands: ['create', 'extract', 'list'], category: 'Archive & Compression' },
  { name: 'zip', display_name: 'zip', description: 'Package and compress files into archives', interface: 'zip', implementations: ['default'], versions: ['generic'], commands: ['zip'], category: 'Archive & Compression' },
  { name: 'unzip', display_name: 'unzip', description: 'List, test, and extract ZIP archives', interface: 'unzip', implementations: ['default'], versions: ['generic'], commands: ['unzip', 'list', 'test'], category: 'Archive & Compression' },
  { name: 'gzip', display_name: 'gzip', description: 'GNU zip compression utility', interface: 'gzip', implementations: ['gnu', 'busybox'], versions: ['1.10', '1.12', '1.36.1'], commands: ['compress', 'decompress'], category: 'Archive & Compression' },
  { name: 'bzip2', display_name: 'bzip2', description: 'High-quality data compression program', interface: 'bzip2', implementations: ['gnu', 'busybox'], versions: ['generic'], commands: ['compress', 'decompress'], category: 'Archive & Compression' },
  { name: 'xz', display_name: 'XZ', description: 'LZMA compression utility', interface: 'xz', implementations: ['default'], versions: ['generic'], commands: ['compress', 'decompress'], category: 'Archive & Compression' },
  { name: 'zstd', display_name: 'zstd', description: 'Zstandard compression', interface: 'zstd', implementations: ['default'], versions: ['generic'], commands: ['compress', 'decompress'], category: 'Archive & Compression' },
  { name: 'p7zip', display_name: 'p7zip', description: '7-Zip file archiver', interface: 'p7zip', implementations: ['default'], versions: ['generic'], commands: ['compress', 'decompress', 'list'], category: 'Archive & Compression' },

  // Image Processing
  { name: 'imagemagick', display_name: 'ImageMagick', description: 'Image Processing Suite for creating, editing, and converting images', interface: 'imagemagick', implementations: ['default'], versions: ['7.1', '6.9'], commands: ['convert', 'identify', 'mogrify', 'composite'], category: 'Image Processing' },
  { name: 'convert', display_name: 'ImageMagick Convert', description: 'Image format conversion (ImageMagick 6)', interface: 'convert', implementations: ['default'], versions: ['6.9'], commands: ['convert'], category: 'Image Processing' },
  { name: 'magick', display_name: 'ImageMagick Magick', description: 'ImageMagick 7 unified command', interface: 'magick', implementations: ['default'], versions: ['7.1'], commands: ['magick'], category: 'Image Processing' },
  { name: 'inkscape', display_name: 'Inkscape', description: 'Vector graphics editor', interface: 'inkscape', implementations: ['default'], versions: ['1.3', '1.2'], commands: ['export', 'convert'], category: 'Image Processing' },
  { name: 'optipng', display_name: 'OptiPNG', description: 'PNG optimizer', interface: 'optipng', implementations: ['default'], versions: ['generic'], commands: ['optimize'], category: 'Image Processing' },
  { name: 'jpegoptim', display_name: 'jpegoptim', description: 'JPEG optimization tool', interface: 'jpegoptim', implementations: ['default'], versions: ['generic'], commands: ['optimize'], category: 'Image Processing' },
  { name: 'pngquant', display_name: 'pngquant', description: 'PNG image optimizer with lossy compression', interface: 'pngquant', implementations: ['default'], versions: ['generic'], commands: ['quantize'], category: 'Image Processing' },
  { name: 'gifsicle', display_name: 'gifsicle', description: 'GIF image manipulator', interface: 'gifsicle', implementations: ['default'], versions: ['generic'], commands: ['optimize', 'edit'], category: 'Image Processing' },
  { name: 'cwebp', display_name: 'cwebp', description: 'WebP image encoder', interface: 'cwebp', implementations: ['default'], versions: ['generic'], commands: ['encode'], category: 'Image Processing' },
  { name: 'dwebp', display_name: 'dwebp', description: 'WebP image decoder', interface: 'dwebp', implementations: ['default'], versions: ['generic'], commands: ['decode'], category: 'Image Processing' },
  { name: 'exiftool', display_name: 'ExifTool', description: 'Read, write, and manipulate image metadata', interface: 'exiftool', implementations: ['default'], versions: ['generic'], commands: ['read', 'write', 'copy'], category: 'Image Processing' },

  // Video & Audio
  { name: 'ffmpeg', display_name: 'FFmpeg', description: 'Complete solution to record, convert, and stream audio and video', interface: 'ffmpeg', implementations: ['default'], versions: ['8.0', '7.0', '6.1'], commands: ['convert', 'probe', 'extract'], category: 'Video & Audio' },
  { name: 'sox', display_name: 'SoX', description: 'Sound eXchange - audio processing tool', interface: 'sox', implementations: ['default'], versions: ['generic'], commands: ['convert', 'play', 'record'], category: 'Video & Audio' },

  // Document Conversion
  { name: 'ghostscript', display_name: 'Ghostscript', description: 'Interpreter for PostScript and PDF', interface: 'ghostscript', implementations: ['default'], versions: ['10.0', '9.56'], commands: ['convert', 'merge', 'extract'], category: 'Document Conversion' },
  { name: 'pandoc', display_name: 'Pandoc', description: 'Universal markup converter', interface: 'pandoc', implementations: ['default'], versions: ['3.1'], commands: ['convert'], category: 'Document Conversion' },
  { name: 'libreoffice', display_name: 'LibreOffice', description: 'Office suite with command-line conversion', interface: 'libreoffice', implementations: ['default'], versions: ['generic'], commands: ['convert'], category: 'Document Conversion' },
  { name: 'pdf2ps', display_name: 'pdf2ps', description: 'PDF to PostScript converter', interface: 'pdf2ps', implementations: ['default'], versions: ['generic'], commands: ['convert'], category: 'Document Conversion' },
  { name: 'pdftk', display_name: 'PDFtk', description: 'PDF toolkit for manipulation', interface: 'pdftk', implementations: ['default'], versions: ['generic'], commands: ['merge', 'split', 'rotate'], category: 'Document Conversion' },

  // System Utilities
  { name: 'cat', display_name: 'cat', description: 'Concatenate and display files', interface: 'cat', implementations: ['default'], versions: ['generic'], commands: ['cat'], category: 'System Utilities' },
  { name: 'cut', display_name: 'cut', description: 'Remove sections from each line of files', interface: 'cut', implementations: ['default'], versions: ['generic'], commands: ['cut'], category: 'System Utilities' },
  { name: 'head', display_name: 'head', description: 'Output the first part of files', interface: 'head', implementations: ['default'], versions: ['generic'], commands: ['head'], category: 'System Utilities' },
  { name: 'tail', display_name: 'tail', description: 'Output the last part of files', interface: 'tail', implementations: ['default'], versions: ['generic'], commands: ['tail', 'follow'], category: 'System Utilities' },
  { name: 'sort', display_name: 'sort', description: 'Sort lines of text', interface: 'sort', implementations: ['default'], versions: ['generic'], commands: ['sort'], category: 'System Utilities' },
  { name: 'wc', display_name: 'wc', description: 'Print newline, word, and byte counts', interface: 'wc', implementations: ['default'], versions: ['generic'], commands: ['wc'], category: 'System Utilities' },
  { name: 'tee', display_name: 'tee', description: 'Read from stdin and write to stdout and files', interface: 'tee', implementations: ['default'], versions: ['generic'], commands: ['tee'], category: 'System Utilities' },
  { name: 'diff', display_name: 'diff', description: 'Compare files line by line', interface: 'diff', implementations: ['default'], versions: ['generic'], commands: ['diff', 'cmp'], category: 'System Utilities' },
  { name: 'xargs', display_name: 'xargs', description: 'Build and execute command lines from input', interface: 'xargs', implementations: ['default'], versions: ['generic'], commands: ['xargs'], category: 'System Utilities' },
  { name: 'make', display_name: 'make', description: 'Build automation tool', interface: 'make', implementations: ['default'], versions: ['generic'], commands: ['make'], category: 'System Utilities' },
  { name: 'htop', display_name: 'htop', description: 'Interactive process viewer', interface: 'htop', implementations: ['default'], versions: ['generic'], commands: ['htop'], category: 'System Utilities' },
  { name: 'lsof', display_name: 'lsof', description: 'List open files', interface: 'lsof', implementations: ['default'], versions: ['generic'], commands: ['lsof'], category: 'System Utilities' },
  { name: 'tree', display_name: 'tree', description: 'List files in directory tree format', interface: 'tree', implementations: ['default'], versions: ['generic'], commands: ['tree'], category: 'System Utilities' },
  { name: 'ping', display_name: 'ping', description: 'Send ICMP echo requests', interface: 'ping', implementations: ['bsd', 'gnu', 'windows'], versions: ['generic'], commands: ['ping'], category: 'System Utilities' },

  // Text Processing
  { name: 'grep', display_name: 'grep', description: 'Print lines matching a pattern', interface: 'grep', implementations: ['gnu', 'busybox'], versions: ['generic'], commands: ['grep', 'egrep', 'fgrep'], category: 'Text Processing' },
  { name: 'sed', display_name: 'sed', description: 'Stream editor for filtering and transforming text', interface: 'sed', implementations: ['gnu', 'busybox'], versions: ['generic'], commands: ['sed'], category: 'Text Processing' },
  { name: 'awk', display_name: 'AWK', description: 'Domain-specific language for text processing', interface: 'awk', implementations: ['bsd', 'gnu', 'busybox'], versions: ['generic'], commands: ['awk'], category: 'Text Processing' },
  { name: 'jq', display_name: 'jq', description: 'Lightweight command-line JSON processor', interface: 'jq', implementations: ['default'], versions: ['generic'], commands: ['jq'], category: 'Text Processing' },
  { name: 'yq', display_name: 'yq', description: 'YAML processor', interface: 'yq', implementations: ['default'], versions: ['generic'], commands: ['yq'], category: 'Text Processing' },
  { name: 'yq_jq', display_name: 'yq (jq backend)', description: 'YAML processor using jq', interface: 'yq_jq', implementations: ['default'], versions: ['generic'], commands: ['yq'], category: 'Text Processing' },
  { name: 'less', display_name: 'less', description: 'Pager program similar to more', interface: 'less', implementations: ['default'], versions: ['generic'], commands: ['less'], category: 'Text Processing' },
  { name: 'bat', display_name: 'Bat', description: 'Cat clone with syntax highlighting', interface: 'bat', implementations: ['default'], versions: ['generic'], commands: ['bat'], category: 'Text Processing' },

  // File Management
  { name: 'find', display_name: 'find', description: 'Search for files in a directory hierarchy', interface: 'find', implementations: ['gnu', 'busybox'], versions: ['generic'], commands: ['find'], category: 'File Management' },
  { name: 'fd', display_name: 'fd', description: 'Simple, fast alternative to find', interface: 'fd', implementations: ['default'], versions: ['generic'], commands: ['fd'], category: 'File Management' },
  { name: 'fzf', display_name: 'fzf', description: 'Fuzzy finder for command-line', interface: 'fzf', implementations: ['default'], versions: ['generic'], commands: ['fzf'], category: 'File Management' },
  { name: 'gl', display_name: 'gl', description: 'Fuzzy path finder for git ls-files', interface: 'gl', implementations: ['default'], versions: ['generic'], commands: ['gl'], category: 'File Management' },
  { name: 'rg', display_name: 'ripgrep', description: 'Recursively search directories for regex patterns', interface: 'rg', implementations: ['default'], versions: ['generic'], commands: ['rg'], category: 'File Management' },
  { name: 'ripgrep-all', display_name: 'ripgrep-all', description: 'ripgrep with searchable archives support', interface: 'ripgrep-all', implementations: ['default'], versions: ['generic'], commands: ['rga'], category: 'File Management' },
  { name: 'rsync', display_name: 'rsync', description: 'Fast incremental file transfer', interface: 'rsync', implementations: ['default'], versions: ['generic'], commands: ['rsync'], category: 'File Management' },
  { name: 'rclone', display_name: 'rclone', description: 'Rsync for cloud storage', interface: 'rclone', implementations: ['default'], versions: ['generic'], commands: ['rclone'], category: 'File Management' },
  { name: 'restic', display_name: 'restic', description: 'Fast, secure backup program', interface: 'restic', implementations: ['default'], versions: ['generic'], commands: ['backup', 'restore'], category: 'File Management' },

  // Network
  { name: 'curl', display_name: 'cURL', description: 'Command-line tool for transferring data with URLs', interface: 'curl', implementations: ['default'], versions: ['generic'], commands: ['request', 'download', 'upload'], category: 'Network' },
  { name: 'wget', display_name: 'wget', description: 'Network downloader', interface: 'wget', implementations: ['gnu', 'busybox'], versions: ['generic'], commands: ['download'], category: 'Network' },
  { name: 'ssh', display_name: 'SSH', description: 'Secure shell protocol client', interface: 'ssh', implementations: ['default'], versions: ['generic'], commands: ['ssh'], category: 'Network' },
  { name: 'scp', display_name: 'scp', description: 'Secure copy protocol', interface: 'scp', implementations: ['default'], versions: ['generic'], commands: ['scp'], category: 'Network' },
  { name: 'yt-dlp', display_name: 'yt-dlp', description: 'Command-line audio/video downloader', interface: 'yt-dlp', implementations: ['default'], versions: ['generic'], commands: ['download'], category: 'Network' },

  // Development
  { name: 'git', display_name: 'Git', description: 'Distributed version control system', interface: 'git', implementations: ['default'], versions: ['generic'], commands: ['clone', 'commit', 'push', 'pull', 'branch', 'checkout'], category: 'Development' },
  { name: 'ansible', display_name: 'Ansible', description: 'Automation engine for configuring systems', interface: 'ansible', implementations: ['default'], versions: ['generic'], commands: ['playbook', 'adhoc'], category: 'Development' },
  { name: 'openssl', display_name: 'OpenSSL', description: 'Cryptography toolkit', interface: 'openssl', implementations: ['default'], versions: ['generic'], commands: ['encrypt', 'decrypt', 'cert'], category: 'Development' },
  { name: 'vim', display_name: 'Vim', description: 'Vi IMproved text editor', interface: 'vim', implementations: ['default'], versions: ['generic'], commands: ['vim', 'view', 'vimdiff'], category: 'Development' },
  { name: 'ukiryu', display_name: 'Ukiryu', description: 'Declarative CLI framework', interface: 'ukiryu', implementations: ['default'], versions: ['generic'], commands: ['ukiryu'], category: 'Development' },
]

// Detailed tool information for tool detail pages
// These tools have comprehensive documentation
export const toolsDetail = {
  imagemagick: {
    name: 'imagemagick',
    display_name: 'ImageMagick Image Processing Suite',
    interface: 'imagemagick',
    homepage: 'https://imagemagick.org/',
    description: 'ImageMagick is a software suite to create, edit, compose, or convert bitmap images. It can read and write over 200 image formats.',
    version: '7.1',
    versions: ['7.1', '6.9'],
    implementations: ['default'],
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
    interface: 'ffmpeg',
    homepage: 'https://ffmpeg.org/',
    description: 'Complete solution to record, convert, and stream audio and video.',
    version: '8.0',
    versions: ['8.0', '7.0', '6.1'],
    implementations: ['default'],
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
    interface: 'ghostscript',
    homepage: 'https://ghostscript.com/',
    description: 'Interpreter for PostScript and PDF with conversion capabilities.',
    version: '10.0',
    versions: ['10.0', '9.56'],
    implementations: ['default'],
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
    interface: 'pandoc',
    homepage: 'https://pandoc.org/',
    description: 'Universal markup converter supporting dozens of formats.',
    version: '3.1',
    versions: ['3.1'],
    implementations: ['default'],
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
    interface: 'curl',
    homepage: 'https://curl.se/',
    description: 'Command-line tool for transferring data with URLs.',
    version: 'generic',
    versions: ['generic'],
    implementations: ['default'],
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
    interface: 'git',
    homepage: 'https://git-scm.com/',
    description: 'Distributed version control system.',
    version: 'generic',
    versions: ['generic'],
    implementations: ['default'],
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

  gzip: {
    name: 'gzip',
    display_name: 'gzip',
    interface: 'gzip',
    homepage: 'https://www.gnu.org/software/gzip/',
    description: 'GNU zip compression utility. Supports multiple implementations including GNU gzip and BusyBox gzip.',
    version: '1.12',
    versions: ['1.10', '1.12', '1.36.1'],
    implementations: ['gnu', 'busybox'],
    commands: [
      { name: 'compress', description: 'Compress files using gzip compression' },
      { name: 'decompress', description: 'Decompress gzip files (gunzip)' },
    ],
    platforms: ['macos', 'linux'],
    shells: ['unix'],
    category: 'Archive & Compression',
  },

  tar: {
    name: 'tar',
    display_name: 'tar',
    interface: 'tar',
    homepage: 'https://www.gnu.org/software/tar/',
    description: 'Archive utility. Supports multiple implementations including GNU tar and BusyBox tar.',
    version: '1.36.1',
    versions: ['1.35', '1.36.1'],
    implementations: ['gnu', 'busybox'],
    commands: [
      { name: 'create', description: 'Create a tar archive from files/directories' },
      { name: 'extract', description: 'Extract files from a tar archive' },
      { name: 'list', description: 'List contents of a tar archive' },
    ],
    platforms: ['macos', 'linux'],
    shells: ['unix'],
    category: 'Archive & Compression',
  },
}

// Get tool by name (returns detailed info if available, otherwise basic info)
export function getTool(name) {
  // First check if we have detailed info
  if (toolsDetail[name]) {
    return toolsDetail[name]
  }

  // Otherwise, find in toolsList and create a basic detail object
  const basicTool = toolsList.find(t => t.name === name)
  if (!basicTool) return null

  // Create a detail object from basic info
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
      description: `Execute ${cmd} operation`,
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
