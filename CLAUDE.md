# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is the **official GitHub Pages website** for the Ukiryu project. Ukiryu is "OpenAPI for CLIs" - a framework for defining command-line interfaces as declarative APIs.

## Ukiryu Ecosystem Structure

The project consists of three interconnected repositories:

| Repository | Purpose |
|-----------|---------|
| `ukiryu/` | Core Ruby gem runtime - loads YAML profiles, executes commands |
| `register/` | YAML tool profiles for CLI tools (ImageMagick, FFmpeg, Inkscape, etc.) |
| `schemas/` | JSON Schema for validating tool profiles |

## Key Concepts

- **Package**: Distribution unit (e.g., `imagemagick` via Homebrew, apt)
- **Tool**: CLI command you run (e.g., `convert`, `identify`)
- **Interface**: Abstract API contract multiple tools can implement
- **Command**: Operation a tool performs (e.g., `export`, `convert`)
- **Profile**: YAML file defining tool behavior across platforms/versions

## What Ukiryu Solves

| Problem | Traditional CLI | Ukiryu Solution |
|---------|-----------------|-----------------|
| Argument fragility | Positional args break | Named parameters |
| Output parsing | `grep "success"` | `result.success?` |
| Platform divergence | Different quoting per OS | Same code everywhere |
| Version drift | Breaking changes | Version-specific profiles |
| Error ambiguity | Exit code 1 = ??? | Structured exceptions |

## Core Features

1. Platform-adaptive (macOS, Linux, Windows)
2. Shell-aware (bash, zsh, fish, PowerShell, cmd)
3. Type-safe parameter validation
4. Versioned APIs with Versionian library
5. Structured result objects
6. Headless mode for GUI tools

## Versionian Library

Ukiryu uses Versionian for version parsing with schemes:
- `semantic` - MAJOR.MINOR.PATCH
- `calver` - YYYY.MM.DD
- `solover` - N[+|-]postfix
- `wendtver` - MAJOR.MINOR.PATCH.BUILD

Range types: `equals`, `after`, `before`, `between`

## Schema Versioning

**CRITICAL**: All YAML profiles use `ukiryu_schema: '1.0'` - no other versions exist.

## Website Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Website Tech Stack

- Vue 3 with Composition API
- Vue Router for routing
- Tailwind CSS with custom theme colors
- Vite for bundling
- Dark mode support with localStorage persistence

## Website Sections

- HeroSection - Dragon-themed hero with animated logo
- FeaturesSection - 6 key feature cards
- ArchitectureSection - Execution flow diagram
- CodeSection - Before/after comparison
- EcosystemSection - 3-repository overview
- QuickStartSection - Installation guide

## Deployment

Built files deploy to GitHub Pages. The `dist/` folder contains production assets.

## Related Documentation

- Main documentation: `/Users/mulgogi/src/ukiryu/ukiryu/README.adoc`
- Register documentation: `/Users/mulgogi/src/ukiryu/register/README.adoc`
- Schema documentation: `/Users/mulgogi/src/ukiryu/schemas/README.adoc`
- Full architecture: `/Users/mulgogi/src/ukiryu/architecture.adoc`
