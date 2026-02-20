<template>
  <div class="interface-detail-page">
    <!-- Not found -->
    <section v-if="!iface" class="min-h-[60vh] flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4 text-light-text dark:text-dark-text">Interface Not Found</h1>
        <p class="text-light-muted dark:text-dark-muted mb-8">The interface "{{ interfaceName }}" was not found.</p>
        <BaseButton as="router-link" to="/register" variant="primary">
          Back to Register
        </BaseButton>
      </div>
    </section>

    <!-- Interface details -->
    <template v-else>
      <!-- Header -->
      <section class="pt-8 pb-6 border-b border-light-border dark:border-dark-border">
        <div class="container-narrow">
          <nav class="flex items-center gap-2 text-sm text-light-muted dark:text-dark-muted mb-4">
            <router-link to="/register" class="hover:text-brand-primary">Register</router-link>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            <router-link to="/register?tab=interfaces" class="hover:text-brand-primary">Interfaces</router-link>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            <span class="text-light-text dark:text-dark-text">{{ iface.display_name }}</span>
          </nav>

          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <div class="flex items-center gap-3 mb-2">
                <h1 class="text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text">{{ iface.display_name }}</h1>
                <span class="px-2 py-0.5 text-xs rounded-full bg-brand-light/20 text-brand-primary font-medium">
                  Interface
                </span>
              </div>
              <p class="text-light-muted dark:text-dark-muted max-w-2xl">{{ iface.description }}</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <a :href="`${config.github.register}/tree/${config.registerBranch}/interfaces/${iface.name}.yaml`" target="_blank" rel="noopener">
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
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <div class="text-xs text-light-muted dark:text-dark-muted uppercase tracking-wider mb-1">Version</div>
              <div class="text-lg font-semibold text-light-text dark:text-dark-text">{{ iface.version || '1.0' }}</div>
            </div>
            <div>
              <div class="text-xs text-light-muted dark:text-dark-muted uppercase tracking-wider mb-1">Actions</div>
              <div class="text-lg font-semibold text-light-text dark:text-dark-text">{{ actionsCount }}</div>
            </div>
            <div v-if="iface.aliases && iface.aliases.length">
              <div class="text-xs text-light-muted dark:text-dark-muted uppercase tracking-wider mb-1">Aliases</div>
              <div class="flex flex-wrap gap-1">
                <span v-for="alias in iface.aliases" :key="alias" class="text-sm font-mono text-brand-primary">
                  {{ alias }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Actions/Commands -->
      <section class="section-padding">
        <div class="container-narrow">
          <h2 class="text-2xl font-bold mb-8 text-light-text dark:text-dark-text">
            {{ hasActions ? 'Actions' : 'Commands' }}
          </h2>

          <div class="space-y-8">
            <div v-for="action in actions" :key="action.name" class="glass-card p-6">
              <div class="mb-4">
                <h3 class="text-lg font-semibold text-light-text dark:text-dark-text font-mono">
                  {{ action.display_name || action.name }}
                </h3>
                <p class="text-sm text-light-muted dark:text-dark-muted mt-1">{{ action.description }}</p>
              </div>

              <!-- Signature (for actions-based interfaces) -->
              <template v-if="action.signature">
                <!-- Inputs -->
                <div v-if="action.signature.inputs && action.signature.inputs.length" class="mb-6">
                  <h4 class="text-sm font-semibold text-light-text dark:text-dark-text mb-3 uppercase tracking-wider">Inputs</h4>
                  <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                      <thead>
                        <tr class="border-b border-light-border dark:border-dark-border">
                          <th class="text-left py-2 px-3 font-medium text-light-text dark:text-dark-text">Name</th>
                          <th class="text-left py-2 px-3 font-medium text-light-text dark:text-dark-text">Type</th>
                          <th class="text-left py-2 px-3 font-medium text-light-text dark:text-dark-text">Required</th>
                          <th class="text-left py-2 px-3 font-medium text-light-text dark:text-dark-text">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="input in action.signature.inputs" :key="input.name" class="border-b border-light-border/50 dark:border-dark-border/50">
                          <td class="py-2 px-3 font-mono text-brand-primary">{{ input.name }}</td>
                          <td class="py-2 px-3">
                            <span class="px-1.5 py-0.5 text-xs rounded bg-light-surface dark:bg-dark-surface">{{ input.type }}</span>
                            <span v-if="input.item_type" class="ml-1 text-xs text-light-muted dark:text-dark-muted">of {{ input.item_type }}</span>
                            <span v-if="input.variadic" class="ml-1 text-xs text-light-muted dark:text-dark-muted">(variadic)</span>
                          </td>
                          <td class="py-2 px-3">
                            <span v-if="input.required" class="text-green-500">✓</span>
                            <span v-else class="text-light-muted dark:text-dark-muted">-</span>
                          </td>
                          <td class="py-2 px-3 text-light-muted dark:text-dark-muted">{{ input.description || '-' }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Output -->
                <div v-if="action.signature.output" class="mb-6">
                  <h4 class="text-sm font-semibold text-light-text dark:text-dark-text mb-3 uppercase tracking-wider">Output</h4>
                  <div class="p-3 rounded-lg bg-light-bg dark:bg-dark-bg">
                    <span class="font-mono text-brand-primary">{{ action.signature.output.name }}</span>
                    <span class="ml-2 text-sm text-light-muted dark:text-dark-muted">
                      : {{ action.signature.output.type }}
                      <span v-if="action.signature.output.required === false">(optional)</span>
                    </span>
                    <span v-if="action.signature.output.description" class="ml-2 text-sm text-light-muted dark:text-dark-muted">
                      - {{ action.signature.output.description }}
                    </span>
                  </div>
                </div>

                <!-- Options -->
                <div v-if="action.signature.options && action.signature.options.length" class="mb-6">
                  <h4 class="text-sm font-semibold text-light-text dark:text-dark-text mb-3 uppercase tracking-wider">Options</h4>
                  <div class="space-y-2">
                    <div v-for="opt in action.signature.options" :key="opt.name" class="flex items-start gap-3 p-3 rounded-lg bg-light-bg dark:bg-dark-bg">
                      <span class="font-mono text-sm text-brand-primary">{{ opt.name }}</span>
                      <span class="px-1.5 py-0.5 text-xs rounded bg-light-surface dark:bg-dark-surface">{{ opt.type }}</span>
                    </div>
                  </div>
                </div>
              </template>

              <!-- Commands-based interface (arguments/options/flags) -->
              <template v-else>
                <!-- Arguments -->
                <div v-if="action.arguments && action.arguments.length" class="mb-6">
                  <h4 class="text-sm font-semibold text-light-text dark:text-dark-text mb-3 uppercase tracking-wider">Arguments</h4>
                  <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                      <thead>
                        <tr class="border-b border-light-border dark:border-dark-border">
                          <th class="text-left py-2 px-3 font-medium text-light-text dark:text-dark-text">Name</th>
                          <th class="text-left py-2 px-3 font-medium text-light-text dark:text-dark-text">Type</th>
                          <th class="text-left py-2 px-3 font-medium text-light-text dark:text-dark-text">Required</th>
                          <th class="text-left py-2 px-3 font-medium text-light-text dark:text-dark-text">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="arg in action.arguments" :key="arg.name" class="border-b border-light-border/50 dark:border-dark-border/50">
                          <td class="py-2 px-3 font-mono text-brand-primary">{{ arg.name }}</td>
                          <td class="py-2 px-3">
                            <span class="px-1.5 py-0.5 text-xs rounded bg-light-surface dark:bg-dark-surface">{{ arg.type }}</span>
                          </td>
                          <td class="py-2 px-3">
                            <span v-if="arg.required" class="text-green-500">✓</span>
                            <span v-else class="text-light-muted dark:text-dark-muted">-</span>
                          </td>
                          <td class="py-2 px-3 text-light-muted dark:text-dark-muted">{{ arg.description }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Options -->
                <div v-if="action.options && action.options.length" class="mb-6">
                  <h4 class="text-sm font-semibold text-light-text dark:text-dark-text mb-3 uppercase tracking-wider">Options</h4>
                  <div class="space-y-2">
                    <div v-for="opt in action.options" :key="opt.name" class="flex items-start gap-3 p-3 rounded-lg bg-light-bg dark:bg-dark-bg">
                      <span class="font-mono text-sm text-brand-primary">{{ opt.name }}</span>
                      <div>
                        <span class="px-1.5 py-0.5 text-xs rounded bg-light-surface dark:bg-dark-surface">{{ opt.type }}</span>
                        <span v-if="opt.required" class="ml-2 text-xs text-red-400">*required</span>
                        <p v-if="opt.description" class="text-sm text-light-muted dark:text-dark-muted mt-1">{{ opt.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Flags -->
                <div v-if="action.flags && action.flags.length">
                  <h4 class="text-sm font-semibold text-light-text dark:text-dark-text mb-3 uppercase tracking-wider">Flags</h4>
                  <div class="flex flex-wrap gap-2">
                    <div v-for="flag in action.flags" :key="flag.name" class="px-3 py-2 rounded-lg bg-light-bg dark:bg-dark-bg">
                      <span class="font-mono text-sm text-brand-primary">{{ flag.name }}</span>
                      <span class="text-sm text-light-muted dark:text-dark-muted ml-2">{{ flag.description }}</span>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </section>

      <!-- YAML Structure -->
      <section class="section-padding bg-light-surface dark:bg-dark-surface">
        <div class="container-narrow">
          <h2 class="text-2xl font-bold mb-6 text-light-text dark:text-dark-text">Interface Definition</h2>
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
import { getInterface } from '../../data/generated/interfaces'
import config from '../../config'

const route = useRoute()
const interfaceName = computed(() => route.params.interfaceName)
const iface = computed(() => getInterface(interfaceName.value))

const hasActions = computed(() => iface.value?.actions && iface.value.actions.length > 0)

const actions = computed(() => {
  if (!iface.value) return []
  return iface.value.actions || iface.value.commands || []
})

const actionsCount = computed(() => actions.value.length)

const yamlExample = computed(() => {
  if (!iface.value) return ''
  const actionSample = actions.value[0]
  return `ukiryu_schema: '1.0'
name: ${iface.value.name}
version: '${iface.value.version || '1.0'}'
display_name: ${iface.value.display_name}
description: |
  ${iface.value.description}
${iface.value.aliases ? `aliases:\n  - ${iface.value.aliases.join('\n  - ')}` : ''}
${hasActions.value ? `actions:
  - name: ${actionSample?.name || 'execute'}
    description: ${actionSample?.description || 'Execute action'}
    signature:
      inputs:
        - name: input
          type: file
          required: true` : `commands:
  - name: ${actionSample?.name || 'execute'}
    description: ${actionSample?.description || 'Execute command'}`}
`
})
</script>
