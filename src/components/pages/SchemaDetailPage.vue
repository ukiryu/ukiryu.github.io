<template>
  <div class="schema-detail-page">
    <!-- Not found -->
    <section v-if="!schema" class="min-h-[60vh] flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4 text-light-text dark:text-dark-text">Schema Not Found</h1>
        <p class="text-light-muted dark:text-dark-muted mb-8">The schema "{{ schemaId }}" was not found.</p>
        <BaseButton as="router-link" to="/schemas" variant="primary">
          Back to Schemas
        </BaseButton>
      </div>
    </section>

    <!-- Schema details -->
    <template v-else>
      <!-- Header -->
      <section class="pt-8 pb-6 border-b border-light-border dark:border-dark-border">
        <div class="container-narrow">
          <nav class="flex items-center gap-2 text-sm text-light-muted dark:text-dark-muted mb-4">
            <router-link to="/schemas" class="hover:text-brand-primary">Schemas</router-link>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            <span class="text-light-text dark:text-dark-text">{{ schema.name }}</span>
          </nav>

          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 class="text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text">{{ schema.name }}</h1>
              <p class="text-light-muted dark:text-dark-muted mt-2 max-w-2xl">{{ schema.description }}</p>
            </div>
            <div class="flex gap-2">
              <a v-if="schema.githubUrl" :href="schema.githubUrl" target="_blank" rel="noopener">
                <BaseButton variant="secondary" size="sm">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                  </svg>
                  View on GitHub
                </BaseButton>
              </a>
              <a :href="schema.uri" target="_blank" rel="noopener">
                <BaseButton variant="secondary" size="sm">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Download Schema
                </BaseButton>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Navigation Tabs -->
      <section class="border-b border-light-border dark:border-dark-border bg-light-surface/50 dark:bg-dark-surface/50">
        <div class="container-narrow">
          <nav class="flex gap-6 overflow-x-auto">
            <button
              v-for="def in schema.definitions"
              :key="def.name"
              :class="['py-4 px-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap', activeSection === def.name ? 'border-brand-primary text-brand-primary' : 'border-transparent text-light-muted hover:text-light-text dark:text-dark-muted dark:hover:text-dark-text']"
              @click="activeSection = def.name"
            >
              {{ def.name }}
            </button>
            <button
              :class="['py-4 px-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap', activeSection === 'root' ? 'border-brand-primary text-brand-primary' : 'border-transparent text-light-muted hover:text-light-text dark:text-dark-muted dark:hover:text-dark-text']"
              @click="activeSection = 'root'"
            >
              Root Properties
            </button>
            <button
              :class="['py-4 px-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap', activeSection === 'example' ? 'border-brand-primary text-brand-primary' : 'border-transparent text-light-muted hover:text-light-text dark:text-dark-muted dark:hover:text-dark-text']"
              @click="activeSection = 'example'"
            >
              Example
            </button>
          </nav>
        </div>
      </section>

      <!-- Content -->
      <section class="section-padding">
        <div class="container-narrow">
          <!-- Root Properties -->
          <div v-if="activeSection === 'root'" class="max-w-4xl">
            <h2 class="text-2xl font-bold mb-6 text-light-text dark:text-dark-text">Root Properties</h2>
            <p class="text-light-muted dark:text-dark-muted mb-8">
              These are the top-level properties that can appear at the root of a {{ schema.name }} document.
            </p>

            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b-2 border-light-border dark:border-dark-border">
                    <th class="text-left py-3 px-4 font-semibold text-light-text dark:text-dark-text">Property</th>
                    <th class="text-left py-3 px-4 font-semibold text-light-text dark:text-dark-text">Type</th>
                    <th class="text-left py-3 px-4 font-semibold text-light-text dark:text-dark-text">Required</th>
                    <th class="text-left py-3 px-4 font-semibold text-light-text dark:text-dark-text">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="prop in schema.rootProperties" :key="prop.name" class="border-b border-light-border/50 dark:border-dark-border/50">
                    <td class="py-3 px-4 font-mono text-brand-primary">{{ prop.name }}</td>
                    <td class="py-3 px-4">
                      <span class="px-2 py-0.5 text-xs rounded bg-brand-primary/10 text-brand-primary">{{ prop.type }}</span>
                    </td>
                    <td class="py-3 px-4">
                      <span v-if="prop.required" class="text-red-400">Required</span>
                      <span v-else class="text-light-muted dark:text-dark-muted">Optional</span>
                    </td>
                    <td class="py-3 px-4 text-light-muted dark:text-dark-muted">{{ prop.description }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Definitions -->
          <div v-for="def in schema.definitions" :key="def.name" v-show="activeSection === def.name" class="max-w-4xl">
            <h2 class="text-2xl font-bold mb-2 text-light-text dark:text-dark-text">{{ def.name }}</h2>
            <p class="text-light-muted dark:text-dark-muted mb-8">{{ def.description }}</p>

            <div v-if="def.properties" class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b-2 border-light-border dark:border-dark-border">
                    <th class="text-left py-3 px-4 font-semibold text-light-text dark:text-dark-text">Property</th>
                    <th class="text-left py-3 px-4 font-semibold text-light-text dark:text-dark-text">Type</th>
                    <th class="text-left py-3 px-4 font-semibold text-light-text dark:text-dark-text">Required</th>
                    <th class="text-left py-3 px-4 font-semibold text-light-text dark:text-dark-text">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="prop in def.properties" :key="prop.name" class="border-b border-light-border/50 dark:border-dark-border/50">
                    <td class="py-3 px-4 font-mono text-brand-primary">{{ prop.name }}</td>
                    <td class="py-3 px-4">
                      <span class="px-2 py-0.5 text-xs rounded bg-brand-primary/10 text-brand-primary">{{ prop.type }}</span>
                      <span v-if="prop.values" class="ml-1 text-xs text-light-muted dark:text-dark-muted">({{ prop.values.join(', ') }})</span>
                    </td>
                    <td class="py-3 px-4">
                      <span v-if="prop.required" class="text-red-400">Required</span>
                      <span v-else-if="prop.default !== undefined" class="text-light-muted dark:text-dark-muted">Default: {{ prop.default }}</span>
                      <span v-else class="text-light-muted dark:text-dark-muted">Optional</span>
                    </td>
                    <td class="py-3 px-4 text-light-muted dark:text-dark-muted">{{ prop.description }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Example -->
          <div v-if="activeSection === 'example'" class="max-w-4xl">
            <h2 class="text-2xl font-bold mb-6 text-light-text dark:text-dark-text">Example</h2>
            <CodeBlock language="yaml">{{ schema.example }}</CodeBlock>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseButton from '../atoms/BaseButton.vue'
import CodeBlock from '../molecules/CodeBlock.vue'
import { getSchema } from '../../data/schemas'

const route = useRoute()
const schemaId = computed(() => route.params.schemaId)
const schema = computed(() => getSchema(schemaId.value))
const activeSection = ref('root')
</script>
