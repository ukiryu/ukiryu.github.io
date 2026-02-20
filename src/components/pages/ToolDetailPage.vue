<template>
  <div class="tool-detail-page">
    <!-- Not found -->
    <section v-if="!tool" class="min-h-[60vh] flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4 text-light-text dark:text-dark-text">Tool Not Found</h1>
        <p class="text-light-muted dark:text-dark-muted mb-8">The tool "{{ toolName }}" was not found in the register.</p>
        <BaseButton as="router-link" to="/register" variant="primary">
          Back to Register
        </BaseButton>
      </div>
    </section>

    <!-- Tool details -->
    <template v-else>
      <!-- Header -->
      <section class="pt-8 pb-6 border-b border-light-border dark:border-dark-border">
        <div class="container-narrow">
          <nav class="flex items-center gap-2 text-sm text-light-muted dark:text-dark-muted mb-4">
            <router-link to="/register" class="hover:text-brand-primary">Register</router-link>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            <span class="text-light-text dark:text-dark-text">{{ tool.display_name }}</span>
          </nav>

          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <div class="flex items-center gap-3 mb-2">
                <h1 class="text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text">{{ tool.display_name }}</h1>
                <span class="px-2 py-0.5 text-xs rounded-full bg-brand-primary/10 text-brand-primary font-medium">
                  {{ tool.category }}
                </span>
              </div>
              <p class="text-light-muted dark:text-dark-muted max-w-2xl">{{ tool.description }}</p>
              <a v-if="tool.homepage" :href="tool.homepage" target="_blank" rel="noopener" class="inline-flex items-center gap-1 text-sm text-brand-primary hover:text-brand-light mt-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {{ tool.homepage }}
              </a>
            </div>
            <div class="flex flex-wrap gap-2">
              <a v-if="config.github.register" :href="`${config.github.register}/tree/${config.registerBranch}/tools/${tool.name}`" target="_blank" rel="noopener">
                <BaseButton variant="secondary" size="sm">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                  </svg>
                  View Source
                </BaseButton>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick info -->
      <section class="py-6 border-b border-light-border dark:border-dark-border bg-light-surface/50 dark:bg-dark-surface/50">
        <div class="container-narrow">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div class="text-xs text-light-muted dark:text-dark-muted uppercase tracking-wider mb-1">Interface</div>
              <router-link :to="`/register/interfaces/${tool.interface}`" class="text-brand-primary hover:text-brand-light font-medium">
                {{ tool.interface }}
              </router-link>
            </div>
            <div>
              <div class="text-xs text-light-muted dark:text-dark-muted uppercase tracking-wider mb-1">Implementations</div>
              <div class="flex flex-wrap gap-1">
                <span v-for="impl in tool.implementations" :key="impl" class="px-2 py-0.5 text-sm rounded bg-brand-primary/10 text-brand-primary">
                  {{ impl }}
                </span>
              </div>
            </div>
            <div>
              <div class="text-xs text-light-muted dark:text-dark-muted uppercase tracking-wider mb-1">Versions</div>
              <div class="flex flex-wrap gap-1">
                <span v-for="v in tool.versions" :key="v" class="px-2 py-0.5 text-sm rounded bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text">
                  {{ v }}
                </span>
              </div>
            </div>
            <div>
              <div class="text-xs text-light-muted dark:text-dark-muted uppercase tracking-wider mb-1">Commands</div>
              <div class="text-lg font-semibold text-light-text dark:text-dark-text">{{ tool.commands.length }}</div>
            </div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-4">
            <div>
              <div class="text-xs text-light-muted dark:text-dark-muted uppercase tracking-wider mb-1">Platforms</div>
              <div class="flex flex-wrap gap-1">
                <span v-for="p in allPlatforms" :key="p" class="text-sm text-light-text dark:text-dark-text">
                  {{ p }}
                </span>
              </div>
            </div>
            <div>
              <div class="text-xs text-light-muted dark:text-dark-muted uppercase tracking-wider mb-1">Shells</div>
              <div class="flex flex-wrap gap-1">
                <span v-for="s in allShells" :key="s" class="text-sm text-light-text dark:text-dark-text">
                  {{ s }}
                </span>
              </div>
            </div>
          </div>
          <div v-if="tool.aliases && tool.aliases.length" class="mt-4">
            <span class="text-xs text-light-muted dark:text-dark-muted uppercase tracking-wider">Aliases: </span>
            <span class="text-sm font-mono text-brand-primary">{{ tool.aliases.join(', ') }}</span>
          </div>
        </div>
      </section>

      <!-- Profiles -->
      <section v-if="tool.profiles && tool.profiles.length" class="py-6 border-b border-light-border dark:border-dark-border">
        <div class="container-narrow">
          <h2 class="text-xl font-bold mb-4 text-light-text dark:text-dark-text">Profiles</h2>
          <div class="grid gap-4 sm:grid-cols-2">
            <div v-for="profile in tool.profiles" :key="profile.name" class="p-4 rounded-lg bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
              <div class="font-semibold text-light-text dark:text-dark-text mb-2">{{ profile.display_name || profile.name }}</div>
              <div class="text-sm space-y-1">
                <div v-if="profile.platforms" class="text-light-muted dark:text-dark-muted">
                  <span class="font-medium">Platforms:</span> {{ profile.platforms.join(', ') }}
                </div>
                <div v-if="profile.shells" class="text-light-muted dark:text-dark-muted">
                  <span class="font-medium">Shells:</span> {{ profile.shells.join(', ') }}
                </div>
                <div v-if="profile.version" class="text-light-muted dark:text-dark-muted">
                  <span class="font-medium">Version:</span> {{ profile.version }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Commands -->
      <section class="section-padding">
        <div class="container-narrow">
          <h2 class="text-2xl font-bold mb-8 text-light-text dark:text-dark-text">Commands</h2>

          <div class="space-y-8">
            <div v-for="cmd in tool.commands" :key="cmd.name" class="glass-card p-6">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h3 class="text-lg font-semibold text-light-text dark:text-dark-text font-mono">
                    {{ cmd.display_name || cmd.name }}
                  </h3>
                  <p class="text-sm text-light-muted dark:text-dark-muted mt-1">{{ cmd.description }}</p>
                </div>
                <span v-if="cmd.subcommand" class="px-2 py-0.5 text-xs rounded bg-brand-light/20 text-brand-primary">
                  subcommand: {{ cmd.subcommand }}
                </span>
              </div>

              <!-- Usage -->
              <div v-if="cmd.usage" class="mb-6 p-3 rounded-lg bg-light-bg dark:bg-dark-bg font-mono text-sm text-light-text dark:text-dark-text overflow-x-auto">
                {{ cmd.usage }}
              </div>

              <!-- Arguments -->
              <div v-if="cmd.arguments && cmd.arguments.length" class="mb-6">
                <h4 class="text-sm font-semibold text-light-text dark:text-dark-text mb-3 uppercase tracking-wider">Arguments</h4>
                <div class="overflow-x-auto">
                  <table class="w-full text-sm">
                    <thead>
                      <tr class="border-b border-light-border dark:border-dark-border">
                        <th class="text-left py-2 px-3 font-medium text-light-text dark:text-dark-text">Name</th>
                        <th class="text-left py-2 px-3 font-medium text-light-text dark:text-dark-text">Type</th>
                        <th class="text-left py-2 px-3 font-medium text-light-text dark:text-dark-text">Position</th>
                        <th class="text-left py-2 px-3 font-medium text-light-text dark:text-dark-text">Required</th>
                        <th class="text-left py-2 px-3 font-medium text-light-text dark:text-dark-text">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="arg in cmd.arguments" :key="arg.name" class="border-b border-light-border/50 dark:border-dark-border/50">
                        <td class="py-2 px-3 font-mono text-brand-primary">{{ arg.name }}</td>
                        <td class="py-2 px-3">
                          <span class="px-1.5 py-0.5 text-xs rounded bg-light-surface dark:bg-dark-surface">{{ arg.type }}</span>
                          <span v-if="arg.variadic" class="ml-1 text-xs text-purple-400">variadic{{ arg.min ? ` (min: ${arg.min})` : '' }}</span>
                        </td>
                        <td class="py-2 px-3 text-light-muted dark:text-dark-muted">
                          {{ arg.position || '-' }}
                        </td>
                        <td class="py-2 px-3">
                          <span v-if="arg.required !== false" class="text-green-500">✓</span>
                          <span v-else class="text-light-muted dark:text-dark-muted">-</span>
                        </td>
                        <td class="py-2 px-3 text-light-muted dark:text-dark-muted">{{ arg.description }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Options -->
              <div v-if="cmd.options && cmd.options.length" class="mb-6">
                <h4 class="text-sm font-semibold text-light-text dark:text-dark-text mb-3 uppercase tracking-wider">Options</h4>
                <div class="space-y-2">
                  <div v-for="opt in cmd.options" :key="opt.name" class="flex flex-col sm:flex-row sm:items-start gap-2 p-3 rounded-lg bg-light-bg dark:bg-dark-bg">
                    <div class="sm:w-48 flex-shrink-0">
                      <span class="font-mono text-sm text-brand-primary">{{ opt.cli || `--${opt.name}` }}</span>
                      <span v-if="opt.required" class="ml-2 text-xs text-red-400">*required</span>
                    </div>
                    <div class="flex-1">
                      <div class="text-sm text-light-text dark:text-dark-text">{{ opt.description }}</div>
                      <div class="flex flex-wrap gap-2 mt-1">
                        <span class="px-1.5 py-0.5 text-xs rounded bg-light-surface dark:bg-dark-surface">type: {{ opt.type }}</span>
                        <span v-if="opt.assignment_delimiter" class="px-1.5 py-0.5 text-xs rounded bg-blue-500/20 text-blue-400">
                          delimiter: {{ opt.assignment_delimiter }}
                        </span>
                        <span v-if="opt.separator" class="px-1.5 py-0.5 text-xs rounded bg-orange-500/20 text-orange-400">
                          separator: "{{ opt.separator }}"
                        </span>
                        <span v-if="opt.format" class="px-1.5 py-0.5 text-xs rounded bg-purple-500/20 text-purple-400">
                          format: {{ opt.format }}
                        </span>
                        <span v-if="opt.values" class="px-1.5 py-0.5 text-xs rounded bg-brand-primary/10 text-brand-primary">
                          values: {{ opt.values.join(', ') }}
                        </span>
                        <span v-if="opt.range" class="px-1.5 py-0.5 text-xs rounded bg-brand-primary/10 text-brand-primary">
                          range: {{ opt.range[0] }}-{{ opt.range[1] }}
                        </span>
                        <span v-if="opt.default !== undefined" class="px-1.5 py-0.5 text-xs rounded bg-green-500/20 text-green-400">
                          default: {{ opt.default }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Post Options (options that come after arguments) -->
              <div v-if="cmd.post_options && cmd.post_options.length" class="mb-6">
                <h4 class="text-sm font-semibold text-light-text dark:text-dark-text mb-3 uppercase tracking-wider">
                  Post-Options
                  <span class="text-xs font-normal text-light-muted dark:text-dark-muted ml-2">(options after arguments)</span>
                </h4>
                <div class="space-y-2">
                  <div v-for="opt in cmd.post_options" :key="opt.name" class="flex flex-col sm:flex-row sm:items-start gap-2 p-3 rounded-lg bg-light-bg dark:bg-dark-bg border-l-2 border-brand-primary">
                    <div class="sm:w-48 flex-shrink-0">
                      <span class="font-mono text-sm text-brand-primary">{{ opt.cli || `--${opt.name}` }}</span>
                      <span v-if="opt.required" class="ml-2 text-xs text-red-400">*required</span>
                    </div>
                    <div class="flex-1">
                      <div class="text-sm text-light-text dark:text-dark-text">{{ opt.description }}</div>
                      <div class="flex flex-wrap gap-2 mt-1">
                        <span class="px-1.5 py-0.5 text-xs rounded bg-light-surface dark:bg-dark-surface">type: {{ opt.type }}</span>
                        <span v-if="opt.assignment_delimiter" class="px-1.5 py-0.5 text-xs rounded bg-blue-500/20 text-blue-400">
                          delimiter: {{ opt.assignment_delimiter }}
                        </span>
                        <span v-if="opt.separator" class="px-1.5 py-0.5 text-xs rounded bg-orange-500/20 text-orange-400">
                          separator: "{{ opt.separator }}"
                        </span>
                        <span v-if="opt.format" class="px-1.5 py-0.5 text-xs rounded bg-purple-500/20 text-purple-400">
                          format: {{ opt.format }}
                        </span>
                        <span v-if="opt.values" class="px-1.5 py-0.5 text-xs rounded bg-brand-primary/10 text-brand-primary">
                          values: {{ opt.values.join(', ') }}
                        </span>
                        <span v-if="opt.range" class="px-1.5 py-0.5 text-xs rounded bg-brand-primary/10 text-brand-primary">
                          range: {{ opt.range[0] }}-{{ opt.range[1] }}
                        </span>
                        <span v-if="opt.default !== undefined" class="px-1.5 py-0.5 text-xs rounded bg-green-500/20 text-green-400">
                          default: {{ opt.default }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Flags -->
              <div v-if="cmd.flags && cmd.flags.length">
                <h4 class="text-sm font-semibold text-light-text dark:text-dark-text mb-3 uppercase tracking-wider">Flags</h4>
                <div class="space-y-2">
                  <div v-for="flag in cmd.flags" :key="flag.name" class="p-3 rounded-lg bg-light-bg dark:bg-dark-bg">
                    <div class="flex items-start justify-between">
                      <div>
                        <span class="font-mono text-sm text-brand-primary">{{ flag.cli || `--${flag.name}` }}</span>
                        <span v-if="flag.cli_short" class="font-mono text-sm text-brand-primary/70 ml-2">({{ flag.cli_short }})</span>
                      </div>
                      <span v-if="flag.default !== undefined" class="px-1.5 py-0.5 text-xs rounded bg-green-500/20 text-green-400">
                        default: {{ flag.default }}
                      </span>
                    </div>
                    <p class="text-sm text-light-muted dark:text-dark-muted mt-1">{{ flag.description }}</p>
                    <div v-if="flag.position_constraint || flag.conflicts_with" class="flex flex-wrap gap-2 mt-2">
                      <span v-if="flag.position_constraint" class="px-1.5 py-0.5 text-xs rounded bg-yellow-500/20 text-yellow-400">
                        position: {{ flag.position_constraint }}
                      </span>
                      <span v-if="flag.conflicts_with" class="px-1.5 py-0.5 text-xs rounded bg-red-500/20 text-red-400">
                        conflicts: {{ flag.conflicts_with.join(', ') }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Interactive Command Builder -->
              <CommandBuilder :tool="tool" :command="cmd" />
            </div>
          </div>
        </div>
      </section>

      <!-- Smoke Tests -->
      <section v-if="tool.smoke_tests && tool.smoke_tests.length" class="section-padding bg-light-surface/50 dark:bg-dark-surface/50">
        <div class="container-narrow">
          <h2 class="text-2xl font-bold mb-6 text-light-text dark:text-dark-text">Smoke Tests</h2>
          <div class="space-y-3">
            <div v-for="(test, idx) in tool.smoke_tests" :key="idx" class="p-4 rounded-lg bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border">
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-0.5 text-xs rounded bg-brand-primary/10 text-brand-primary font-mono">{{ test.command }}</span>
                <span class="text-sm text-light-muted dark:text-dark-muted">{{ test.description || `Test ${idx + 1}` }}</span>
              </div>
              <div v-if="test.arguments" class="text-sm font-mono text-light-text dark:text-dark-text">
                <span class="text-light-muted dark:text-dark-muted">args:</span> {{ test.arguments.join(' ') }}
              </div>
              <div v-if="test.options" class="text-sm font-mono text-light-text dark:text-dark-text mt-1">
                <span class="text-light-muted dark:text-dark-muted">opts:</span> {{ JSON.stringify(test.options) }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Usage Example -->
      <section class="section-padding bg-light-surface dark:bg-dark-surface">
        <div class="container-narrow">
          <h2 class="text-2xl font-bold mb-6 text-light-text dark:text-dark-text">Usage Example</h2>
          <CodeBlock language="ruby">{{ usageExample }}</CodeBlock>
        </div>
      </section>

      <!-- YAML Profile -->
      <section class="section-padding">
        <div class="container-narrow">
          <h2 class="text-2xl font-bold mb-6 text-light-text dark:text-dark-text">Profile Structure</h2>
          <CodeBlock language="yaml">{{ yamlExample }}</CodeBlock>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseButton from '../atoms/BaseButton.vue'
import CodeBlock from '../molecules/CodeBlock.vue'
import CommandBuilder from '../command-builder/CommandBuilder.vue'
import { getTool } from '../../data/generated/tools'
import config from '../../config'

const route = useRoute()
const toolName = computed(() => route.params.toolName)
const tool = computed(() => getTool(toolName.value))

// Aggregate platforms and shells from profiles if available
const allPlatforms = computed(() => {
  if (!tool.value) return []
  if (tool.value.profiles && tool.value.profiles.length) {
    const platforms = new Set()
    tool.value.profiles.forEach(p => {
      if (p.platforms) p.platforms.forEach(pl => platforms.add(pl))
    })
    return Array.from(platforms)
  }
  return tool.value.platforms || []
})

const allShells = computed(() => {
  if (!tool.value) return []
  if (tool.value.profiles && tool.value.profiles.length) {
    const shells = new Set()
    tool.value.profiles.forEach(p => {
      if (p.shells) p.shells.forEach(s => shells.add(s))
    })
    return Array.from(shells)
  }
  return tool.value.shells || []
})

const usageExample = computed(() => {
  if (!tool.value) return ''
  const cmd = tool.value.commands[0]
  return `require 'ukiryu'

# Get the tool
tool = Ukiryu::Tool.get(:${tool.value.name})

# Execute a command
result = tool.execute(:${cmd?.name || 'convert'}, {
  input: 'input.${tool.value.category === 'Image Processing' ? 'png' : 'txt'}',
  output: 'output.${tool.value.category === 'Image Processing' ? 'jpg' : tool.value.category === 'Document Conversion' ? 'pdf' : 'out'}',
  ${cmd?.options?.[0] ? `${cmd.options[0].name}: ${cmd.options[0].type === 'integer' ? '80' : cmd.options[0].type === 'string' ? '"value"' : 'true'}` : ''}
})

if result.success?
  puts "Success! Duration: \#{result.metadata.formatted_duration}"
else
  puts "Error: \#{result.output.stderr}"
end`
})

const yamlExample = computed(() => {
  if (!tool.value) return ''
  return `ukiryu_schema: '1.0'
name: ${tool.value.name}
interface: ${tool.value.interface}
display_name: ${tool.value.display_name}
homepage: ${tool.value.homepage || 'https://example.com'}

implementations:
  - name: ${tool.value.implementations?.[0] || 'default'}
    display_name: ${tool.value.display_name}
    detection:
      executable: ${tool.value.name}
    versions:
      - equals: "${tool.value.versions?.[0] || '1.0'}"
        file: "${tool.value.versions?.[0] || '1.0'}.yaml"

profiles:
  - name: default
    platforms: [${tool.value.platforms?.join(', ') || 'macos, linux'}]
    shells: [${tool.value.shells?.[0] || 'unix'}]
    commands:
      - name: ${tool.value.commands[0]?.name || 'execute'}
        description: ${tool.value.commands[0]?.description || 'Execute command'}`
})
</script>
