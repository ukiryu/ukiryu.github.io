// Interfaces data from ukiryu/register
// An interface defines the abstract contract for a tool's capabilities

export const interfacesList = [
  { name: 'ansible', display_name: 'Ansible Interface', description: 'Automation engine interface for system configuration', commands: ['playbook', 'adhoc'] },
  { name: 'awk', display_name: 'AWK Interface', description: 'Text processing and pattern scanning language', commands: ['awk'] },
  { name: 'bat', display_name: 'Bat Interface', description: 'Cat clone with syntax highlighting', commands: ['bat'] },
  { name: 'bzip2', display_name: 'Bzip2 Interface', description: 'High-quality data compression interface', commands: ['compress', 'decompress'] },
  { name: 'cat', display_name: 'Cat Interface', description: 'Concatenate and display files', commands: ['cat'] },
  { name: 'convert', display_name: 'ImageMagick Convert Interface', description: 'Image format conversion (ImageMagick 6)', commands: ['convert'] },
  { name: 'curl', display_name: 'cURL Interface', description: 'URL transfer library interface', commands: ['request', 'download', 'upload'] },
  { name: 'cut', display_name: 'Cut Interface', description: 'Remove sections from lines', commands: ['cut'] },
  { name: 'cwebp', display_name: 'cwebp Interface', description: 'WebP image encoder', commands: ['encode'] },
  { name: 'diff', display_name: 'Diff Interface', description: 'Compare files line by line', commands: ['diff', 'cmp'] },
  { name: 'dwebp', display_name: 'dwebp Interface', description: 'WebP image decoder', commands: ['decode'] },
  { name: 'exiftool', display_name: 'ExifTool Interface', description: 'Read, write, and manipulate image metadata', commands: ['read', 'write', 'copy'] },
  { name: 'fd', display_name: 'fd Interface', description: 'Simple, fast alternative to find', commands: ['fd'] },
  { name: 'ffmpeg', display_name: 'FFmpeg Interface', description: 'Audio/video processing interface', commands: ['convert', 'probe', 'extract'] },
  { name: 'find', display_name: 'Find Interface', description: 'Search for files in directory hierarchy', commands: ['find'] },
  { name: 'fzf', display_name: 'fzf Interface', description: 'Fuzzy finder for command-line', commands: ['fzf'] },
  { name: 'ghostscript', display_name: 'Ghostscript Interface', description: 'PostScript and PDF interpreter', commands: ['convert', 'merge', 'extract'] },
  { name: 'gifsicle', display_name: 'gifsicle Interface', description: 'GIF image manipulator', commands: ['optimize', 'edit'] },
  { name: 'git', display_name: 'Git Interface', description: 'Version control system interface', commands: ['clone', 'commit', 'push', 'pull', 'branch', 'checkout'] },
  { name: 'gl', display_name: 'gl Interface', description: 'Fuzzy path finder for git ls-files', commands: ['gl'] },
  { name: 'grep', display_name: 'Grep Interface', description: 'Pattern matching interface', commands: ['grep', 'egrep', 'fgrep'] },
  { name: 'gzip', display_name: 'Gzip Interface', description: 'GNU zip compression interface', commands: ['compress', 'decompress'] },
  { name: 'head', display_name: 'Head Interface', description: 'Output first part of files', commands: ['head'] },
  { name: 'htop', display_name: 'htop Interface', description: 'Interactive process viewer', commands: ['htop'] },
  { name: 'imagemagick', display_name: 'ImageMagick Interface', description: 'Image processing suite interface', commands: ['convert', 'identify', 'mogrify', 'composite'] },
  { name: 'inkscape', display_name: 'Inkscape Interface', description: 'Vector graphics editor', commands: ['export', 'convert'] },
  { name: 'jpegoptim', display_name: 'jpegoptim Interface', description: 'JPEG optimization tool', commands: ['optimize'] },
  { name: 'jq', display_name: 'jq Interface', description: 'JSON processor interface', commands: ['jq'] },
  { name: 'less', display_name: 'Less Interface', description: 'Pager program', commands: ['less'] },
  { name: 'libreoffice', display_name: 'LibreOffice Interface', description: 'Office suite conversion interface', commands: ['convert'] },
  { name: 'lsof', display_name: 'lsof Interface', description: 'List open files', commands: ['lsof'] },
  { name: 'magick', display_name: 'ImageMagick Magick Interface', description: 'ImageMagick 7 unified command', commands: ['magick'] },
  { name: 'make', display_name: 'Make Interface', description: 'Build automation interface', commands: ['make'] },
  { name: 'openssl', display_name: 'OpenSSL Interface', description: 'Cryptography toolkit interface', commands: ['encrypt', 'decrypt', 'cert'] },
  { name: 'optipng', display_name: 'OptiPNG Interface', description: 'PNG optimizer', commands: ['optimize'] },
  { name: 'p7zip', display_name: 'p7zip Interface', description: '7-Zip file archiver', commands: ['7z', '7za', '7zr'] },
  { name: 'pandoc', display_name: 'Pandoc Interface', description: 'Universal markup converter', commands: ['convert'] },
  { name: 'pdf2ps', display_name: 'pdf2ps Interface', description: 'PDF to PostScript converter', commands: ['convert'] },
  { name: 'pdftk', display_name: 'PDFtk Interface', description: 'PDF toolkit interface', commands: ['merge', 'split', 'rotate'] },
  { name: 'ping', display_name: 'Ping Interface', description: 'ICMP echo request interface', commands: ['ping'] },
  { name: 'pngquant', display_name: 'pngquant Interface', description: 'PNG lossy compression', commands: ['quantize'] },
  { name: 'rclone', display_name: 'rclone Interface', description: 'Cloud storage sync interface', commands: ['rclone'] },
  { name: 'restic', display_name: 'restic Interface', description: 'Backup program interface', commands: ['backup', 'restore'] },
  { name: 'rg', display_name: 'ripgrep Interface', description: 'Recursive pattern search', commands: ['rg'] },
  { name: 'ripgrep-all', display_name: 'ripgrep-all Interface', description: 'ripgrep with archive support', commands: ['rga'] },
  { name: 'rsync', display_name: 'rsync Interface', description: 'Fast incremental file transfer', commands: ['rsync'] },
  { name: 'scp', display_name: 'SCP Interface', description: 'Secure copy protocol', commands: ['scp'] },
  { name: 'sed', display_name: 'sed Interface', description: 'Stream editor interface', commands: ['sed'] },
  { name: 'sort', display_name: 'Sort Interface', description: 'Sort lines of text', commands: ['sort'] },
  { name: 'sox', display_name: 'SoX Interface', description: 'Audio processing interface', commands: ['convert', 'play', 'record'] },
  { name: 'ssh', display_name: 'SSH Interface', description: 'Secure shell interface', commands: ['ssh'] },
  { name: 'tail', display_name: 'Tail Interface', description: 'Output last part of files', commands: ['tail', 'follow'] },
  { name: 'tar', display_name: 'tar Interface', description: 'Archive utility interface', commands: ['create', 'extract', 'list'] },
  { name: 'tee', display_name: 'Tee Interface', description: 'Read stdin, write to stdout and files', commands: ['tee'] },
  { name: 'tree', display_name: 'Tree Interface', description: 'Directory tree listing', commands: ['tree'] },
  { name: 'ukiryu', display_name: 'Ukiryu Interface', description: 'Declarative CLI framework', commands: ['ukiryu'] },
  { name: 'unzip', display_name: 'Unzip Interface', description: 'ZIP archive extraction', commands: ['unzip', 'list', 'test'] },
  { name: 'vim', display_name: 'Vim Interface', description: 'Text editor interface', commands: ['vim', 'view', 'vimdiff'] },
  { name: 'wc', display_name: 'wc Interface', description: 'Word, line, byte count', commands: ['wc'] },
  { name: 'wget', display_name: 'wget Interface', description: 'Network downloader interface', commands: ['download'] },
  { name: 'xargs', display_name: 'xargs Interface', description: 'Build command lines from input', commands: ['xargs'] },
  { name: 'xz', display_name: 'XZ Interface', description: 'LZMA compression interface', commands: ['compress', 'decompress'] },
  { name: 'yq', display_name: 'yq Interface', description: 'YAML processor', commands: ['yq'] },
  { name: 'yq_jq', display_name: 'yq (jq) Interface', description: 'YAML processor using jq', commands: ['yq'] },
  { name: 'yt-dlp', display_name: 'yt-dlp Interface', description: 'Video downloader interface', commands: ['download'] },
  { name: 'zip', display_name: 'Zip Interface', description: 'ZIP archive creation', commands: ['zip'] },
  { name: 'zstd', display_name: 'zstd Interface', description: 'Zstandard compression', commands: ['compress', 'decompress'] },
]

// Detailed interface definitions (for interface detail pages)
export const interfacesDetail = {
  gzip: {
    name: 'gzip',
    display_name: 'Gzip Compression Interface',
    description: 'Interface for gzip compression and decompression tools.',
    version: '1.0',
    actions: [
      {
        name: 'compress',
        description: 'Compress files using gzip compression',
        signature: {
          inputs: [
            { name: 'files', type: 'array', item_type: 'file', variadic: true, required: true, description: 'File(s) to compress' },
          ],
          output: { name: 'file', type: 'file', required: false, description: 'Compressed output file' },
        },
      },
      {
        name: 'decompress',
        description: 'Decompress gzip files',
        signature: {
          inputs: [
            { name: 'files', type: 'array', item_type: 'file', variadic: true, required: true, description: 'File(s) to decompress' },
          ],
          output: { name: 'file', type: 'file', required: false, description: 'Decompressed output file' },
        },
      },
    ],
    aliases: ['gzip', 'gunzip', 'gzcat'],
  },

  tar: {
    name: 'tar',
    display_name: 'tar Archive Interface',
    description: 'Interface for tar archive creation, extraction, and listing tools.',
    version: '1.0',
    commands: [
      {
        name: 'create',
        display_name: 'Create archive',
        description: 'Create a tar archive from files/directories',
        required: true,
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
        required: true,
        arguments: [
          { name: 'inputs', type: 'file', variadic: false, min: 0, required: false, description: 'Specific files to extract' },
        ],
        options: [
          { name: 'file', type: 'file', required: true, description: 'Archive file name' },
          { name: 'directory', type: 'string', description: 'Change to directory before processing' },
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
        required: true,
        arguments: [
          { name: 'inputs', type: 'file', variadic: false, min: 0, required: false, description: 'Specific files to list' },
        ],
        options: [
          { name: 'file', type: 'file', required: true, description: 'Archive file name' },
        ],
        flags: [
          { name: 'verbose', description: 'Verbose mode' },
        ],
      },
    ],
  },

  imagemagick: {
    name: 'imagemagick',
    display_name: 'ImageMagick Interface',
    description: 'Interface for image processing operations.',
    version: '1.0',
    actions: [
      {
        name: 'convert',
        description: 'Convert between image formats and apply transformations',
        signature: {
          inputs: [
            { name: 'inputs', type: 'file', required: true },
            { name: 'output', type: 'file', required: true },
          ],
          options: [
            { name: 'resize', type: 'string' },
            { name: 'quality', type: 'integer' },
            { name: 'strip', type: 'boolean' },
            { name: 'flatten', type: 'boolean' },
            { name: 'grayscale', type: 'boolean' },
            { name: 'blur', type: 'string' },
            { name: 'sharpen', type: 'string' },
            { name: 'rotate', type: 'float' },
          ],
        },
      },
      {
        name: 'identify',
        description: 'Describe the format and characteristics of image files',
        signature: {
          inputs: [
            { name: 'input', type: 'file', required: true },
          ],
          options: [
            { name: 'format', type: 'string' },
            { name: 'verbose', type: 'boolean' },
            { name: 'ping', type: 'boolean' },
          ],
        },
      },
      {
        name: 'mogrify',
        description: 'Process image files (overwrites original)',
        signature: {
          inputs: [
            { name: 'inputs', type: 'file', required: true },
          ],
          options: [
            { name: 'resize', type: 'string' },
            { name: 'quality', type: 'integer' },
            { name: 'strip', type: 'boolean' },
          ],
        },
      },
    ],
    aliases: ['magick', 'convert', 'imagemagick'],
  },
}

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
      description: `Execute ${cmd} operation`,
    })),
  }
}

// Stats
export const interfaceStats = {
  totalInterfaces: interfacesList.length,
  totalCommands: interfacesList.reduce((acc, i) => acc + i.commands.length, 0),
}
