<template>
  <section class="code-section section-padding bg-light-surface dark:bg-dark-surface">
    <div class="container-narrow">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-light-text dark:text-dark-text">
          Declarative CLI Definition
        </h2>
        <p class="text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
          Define your CLI once, execute reliably everywhere. No more fragile string concatenation.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Before -->
        <div class="code-panel">
          <div class="flex items-center gap-2 mb-3">
            <div class="flex gap-1.5">
              <div class="w-3 h-3 rounded-full bg-red-400/60" />
              <div class="w-3 h-3 rounded-full bg-yellow-400/60" />
              <div class="w-3 h-3 rounded-full bg-green-400/60" />
            </div>
            <span class="text-xs text-light-muted dark:text-dark-muted">Traditional Approach</span>
          </div>
          <CodeBlock language="ruby">
require 'open3'

# Fragile, error-prone approach
cmd = "convert input.png -resize 50% -quality 85 output.jpg"
stdout, stderr, status = Open3.capture3(cmd)

if status.success?
  puts "Done!"
else
  puts "Error: #{stderr}"
end
          </CodeBlock>
          <ul class="mt-4 space-y-2 text-sm">
            <li class="flex items-center gap-2 text-red-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Platform-specific quoting issues
            </li>
            <li class="flex items-center gap-2 text-red-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Manual output parsing required
            </li>
            <li class="flex items-center gap-2 text-red-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              No type validation
            </li>
          </ul>
        </div>

        <!-- After -->
        <div class="code-panel">
          <div class="flex items-center gap-2 mb-3">
            <div class="flex gap-1.5">
              <div class="w-3 h-3 rounded-full bg-red-400/60" />
              <div class="w-3 h-3 rounded-full bg-yellow-400/60" />
              <div class="w-3 h-3 rounded-full bg-green-400/60" />
            </div>
            <span class="text-xs text-brand-primary font-medium">Ukiryu Approach</span>
          </div>
          <CodeBlock language="ruby">
require 'ukiryu'

# Declarative, type-safe approach
tool = Ukiryu::Tool.get(:imagemagick)
result = tool.execute(:convert, {
  inputs: ['input.png'],
  resize: '50%',
  quality: 85,
  output: 'output.jpg'
})

if result.success?
  puts "Duration: #{result.metadata.formatted_duration}"
else
  puts "Error: #{result.output.stderr}"
end
          </CodeBlock>
          <ul class="mt-4 space-y-2 text-sm">
            <li class="flex items-center gap-2 text-brand-primary">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Platform-adaptive execution
            </li>
            <li class="flex items-center gap-2 text-brand-primary">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Structured result objects
            </li>
            <li class="flex items-center gap-2 text-brand-primary">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Automatic type coercion
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CodeBlock from '../molecules/CodeBlock.vue'
</script>

<style scoped>
.code-panel {
  @apply bg-light-bg dark:bg-dark-bg rounded-xl p-4;
}
</style>
