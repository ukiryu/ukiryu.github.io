<template>
  <div class="code-block glass-card overflow-hidden">
    <div class="flex items-center justify-between px-4 py-2 border-b border-light-border dark:border-dark-border bg-light-surface/50 dark:bg-dark-surface/50">
      <div class="flex items-center gap-2">
        <div class="flex gap-1.5">
          <div class="w-3 h-3 rounded-full bg-red-400/60" />
          <div class="w-3 h-3 rounded-full bg-yellow-400/60" />
          <div class="w-3 h-3 rounded-full bg-green-400/60" />
        </div>
        <span class="text-xs text-light-muted dark:text-dark-muted ml-2">{{ language }}</span>
      </div>
      <button
        class="text-xs text-light-muted dark:text-dark-muted hover:text-brand-primary transition-colors"
        @click="copyCode"
      >
        {{ copied ? 'Copied!' : 'Copy' }}
      </button>
    </div>
    <pre class="p-4 overflow-x-auto text-sm m-0 whitespace-pre"><code ref="codeElement" :class="`language-${language}`"><slot /></code></pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  language: {
    type: String,
    default: 'ruby',
  },
})

const copied = ref(false)
const codeElement = ref(null)

const copyCode = async () => {
  if (codeElement.value) {
    await navigator.clipboard.writeText(codeElement.value.textContent)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
}
</script>

<style scoped>
.code-block code {
  @apply font-mono text-light-text dark:text-dark-text;
}
</style>
