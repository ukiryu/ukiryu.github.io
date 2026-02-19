<template>
  <div class="schemas-page">
    <!-- Hero -->
    <section class="min-h-[40vh] flex items-center justify-center relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-brand-light/10 via-transparent to-brand-deep/10" />
      <div class="container-narrow relative z-10 py-20 text-center">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-light-text dark:text-dark-text">
          <span class="gradient-text">Schemas</span>
        </h1>
        <p class="text-lg sm:text-xl text-light-muted dark:text-dark-muted mb-8 max-w-2xl mx-auto">
          JSON Schema files for validating YAML tool profiles. Ensure your definitions are correct before deployment.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <BaseButton as="a" :href="config.github.schemas" target="_blank" rel="noopener" variant="primary" size="lg">
            View on GitHub
          </BaseButton>
          <BaseButton as="a" :href="config.github.register" target="_blank" rel="noopener" variant="secondary" size="lg">
            Browse Register
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- Schema Cards -->
    <section class="section-padding bg-light-surface/50 dark:bg-dark-surface/50">
      <div class="container-narrow">
        <h2 class="text-2xl sm:text-3xl font-bold mb-8 text-light-text dark:text-dark-text text-center">
          Available Schemas
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <router-link
            v-for="schema in schemaList"
            :key="schema.id"
            :to="`/schemas/${schema.id}`"
            class="glass-card p-6 hover:border-brand-primary/30 transition-all cursor-pointer group block"
          >
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-lg bg-brand-primary flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="font-semibold text-light-text dark:text-dark-text group-hover:text-brand-primary transition-colors mb-2">
                  {{ schema.name }}
                </h3>
                <p class="text-sm text-light-muted dark:text-dark-muted mb-4">
                  {{ schema.description }}
                </p>
                <span class="text-sm text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  View schema documentation →
                </span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Validation Section -->
    <section class="section-padding bg-gradient-to-b from-transparent to-brand-deep/5 dark:to-brand-deep/10">
      <div class="container-narrow text-center">
        <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-light-text dark:text-dark-text">
          Validate Your Profiles
        </h2>
        <p class="text-light-muted dark:text-dark-muted mb-8 max-w-xl mx-auto">
          Use the Ukiryu gem to validate your tool profiles against the JSON schemas before deployment.
        </p>
        <CodeBlock language="ruby">
# Validate a tool profile
tool = Ukiryu::Tool.get(:imagemagick)
result = tool.validate

if result.valid?
  puts "Profile is valid!"
else
  puts "Validation errors:"
  result.errors.each { |e| puts "  - #{e}" }
end
        </CodeBlock>
      </div>
    </section>
  </div>
</template>

<script setup>
import BaseButton from '../atoms/BaseButton.vue'
import CodeBlock from '../molecules/CodeBlock.vue'
import config from '../../config'
import { schemaList } from '../../data/schemas'
</script>
