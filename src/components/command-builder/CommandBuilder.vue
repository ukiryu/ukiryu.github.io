<template>
  <div class="command-builder">
    <!-- Toggle Button -->
    <button
      @click="expanded = !expanded"
      class="w-full flex items-center justify-between p-3 rounded-lg bg-brand-primary/5 hover:bg-brand-primary/10 border border-brand-primary/20 transition-colors mb-4"
    >
      <span class="flex items-center gap-2 text-brand-primary font-medium">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Interactive Builder
      </span>
      <svg
        :class="['w-5 h-5 text-brand-primary transition-transform', expanded ? 'rotate-180' : '']"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Builder Panel -->
    <div v-if="expanded" class="space-y-6">
      <!-- Format & Shell Selection -->
      <div class="flex flex-wrap gap-4 p-4 rounded-lg bg-light-surface dark:bg-dark-surface">
        <!-- Output Format -->
        <div class="flex-1 min-w-[200px]">
          <label class="block text-xs text-light-muted dark:text-dark-muted uppercase tracking-wider mb-2">
            Output Format
          </label>
          <div class="flex gap-2">
            <button
              v-for="format in outputFormats"
              :key="format.value"
              @click="selectedFormat = format.value"
              :class="[
                'px-3 py-1.5 rounded text-sm font-medium transition-all',
                selectedFormat === format.value
                  ? 'bg-brand-primary text-white'
                  : 'bg-light-bg dark:bg-dark-bg text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
              ]"
            >
              {{ format.label }}
            </button>
          </div>
        </div>

        <!-- Shell Selection (only for CLI) -->
        <div v-if="selectedFormat === 'cli'" class="flex-1 min-w-[200px]">
          <label class="block text-xs text-light-muted dark:text-dark-muted uppercase tracking-wider mb-2">
            Shell
          </label>
          <select
            v-model="selectedShell"
            class="w-full px-3 py-1.5 rounded bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text text-sm"
          >
            <optgroup label="Unix">
              <option value="bash">Bash</option>
              <option value="zsh">Zsh</option>
              <option value="sh">POSIX sh</option>
              <option value="fish">Fish</option>
            </optgroup>
            <optgroup label="Windows">
              <option value="powershell">PowerShell</option>
              <option value="cmd">CMD (cmd.exe)</option>
            </optgroup>
          </select>
        </div>
      </div>

      <!-- Arguments Section -->
      <div v-if="command.arguments && command.arguments.length" class="space-y-3">
        <h4 class="text-sm font-semibold text-light-text dark:text-dark-text uppercase tracking-wider">
          Arguments
        </h4>
        <div class="grid gap-3">
          <div v-for="arg in command.arguments" :key="arg.name" class="flex flex-col sm:flex-row gap-2">
            <div class="sm:w-40 flex-shrink-0">
              <label class="flex items-center gap-2 text-sm">
                <span class="font-mono text-brand-primary">{{ arg.name }}</span>
                <span v-if="arg.required !== false" class="text-red-400">*</span>
                <span class="text-xs text-light-muted dark:text-dark-muted">({{ arg.type }})</span>
              </label>
              <p v-if="arg.description" class="text-xs text-light-muted dark:text-dark-muted mt-0.5">
                {{ arg.description }}
              </p>
            </div>
            <div class="flex-1">
              <ArgumentInput
                :argument="arg"
                v-model="values.arguments[arg.name]"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Options Section -->
      <div v-if="command.options && command.options.length" class="space-y-3">
        <h4 class="text-sm font-semibold text-light-text dark:text-dark-text uppercase tracking-wider">
          Options
        </h4>
        <div class="grid gap-3">
          <div v-for="opt in command.options" :key="opt.name" class="flex flex-col sm:flex-row gap-2">
            <div class="sm:w-40 flex-shrink-0">
              <label class="flex items-center gap-2 text-sm">
                <span class="font-mono text-brand-primary">{{ opt.cli || `--${opt.name}` }}</span>
                <span v-if="opt.required" class="text-red-400">*</span>
              </label>
              <p v-if="opt.description" class="text-xs text-light-muted dark:text-dark-muted mt-0.5">
                {{ opt.description }}
              </p>
            </div>
            <div class="flex-1">
              <OptionInput
                :option="opt"
                v-model="values.options[opt.name]"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Flags Section -->
      <div v-if="command.flags && command.flags.length" class="space-y-3">
        <h4 class="text-sm font-semibold text-light-text dark:text-dark-text uppercase tracking-wider">
          Flags
        </h4>
        <div class="flex flex-wrap gap-3">
          <label
            v-for="flag in command.flags"
            :key="flag.name"
            class="flex items-center gap-2 px-3 py-2 rounded-lg bg-light-surface dark:bg-dark-surface cursor-pointer hover:bg-light-bg dark:hover:bg-dark-bg transition-colors"
          >
            <input
              type="checkbox"
              v-model="values.flags[flag.name]"
              class="w-4 h-4 rounded border-light-border dark:border-dark-border text-brand-primary focus:ring-brand-primary"
            />
            <span class="font-mono text-sm text-brand-primary">{{ flag.cli || `--${flag.name}` }}</span>
            <span class="text-xs text-light-muted dark:text-dark-muted">{{ flag.description }}</span>
          </label>
        </div>
      </div>

      <!-- Post-Options Section -->
      <div v-if="command.post_options && command.post_options.length" class="space-y-3">
        <h4 class="text-sm font-semibold text-light-text dark:text-dark-text uppercase tracking-wider">
          Post-Options
          <span class="text-xs font-normal text-light-muted dark:text-dark-muted">(after arguments)</span>
        </h4>
        <div class="grid gap-3">
          <div v-for="opt in command.post_options" :key="opt.name" class="flex flex-col sm:flex-row gap-2">
            <div class="sm:w-40 flex-shrink-0">
              <label class="flex items-center gap-2 text-sm">
                <span class="font-mono text-brand-primary">{{ opt.cli || `--${opt.name}` }}</span>
                <span v-if="opt.required" class="text-red-400">*</span>
              </label>
              <p v-if="opt.description" class="text-xs text-light-muted dark:text-dark-muted mt-0.5">
                {{ opt.description }}
              </p>
            </div>
            <div class="flex-1">
              <OptionInput
                :option="opt"
                v-model="values.postOptions[opt.name]"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Generated Output -->
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <h4 class="text-sm font-semibold text-light-text dark:text-dark-text uppercase tracking-wider">
            Generated {{ selectedFormat === 'ruby' ? 'Ruby Code' : 'Command' }}
          </h4>
          <button
            @click="copyToClipboard"
            class="flex items-center gap-1 px-2 py-1 text-xs rounded bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 transition-colors"
          >
            <svg v-if="!copied" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <svg v-else class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            {{ copied ? 'Copied!' : 'Copy' }}
          </button>
        </div>
        <div class="relative">
          <pre class="p-4 rounded-lg bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border overflow-x-auto text-sm"><code :class="codeClass">{{ generatedOutput }}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive, watch } from 'vue'
import { generateCliCommand, generateRubyCode, outputFormats } from '../../utils/commandGenerators'
import ArgumentInput from './ArgumentInput.vue'
import OptionInput from './OptionInput.vue'

const props = defineProps({
  tool: {
    type: Object,
    required: true
  },
  command: {
    type: Object,
    required: true
  }
})

const expanded = ref(false)
const selectedFormat = ref('cli')
const selectedShell = ref('bash')
const copied = ref(false)

// Initialize values with defaults
const values = reactive({
  arguments: {},
  options: {},
  flags: {},
  postOptions: {}
})

// Set default flag values
watch(() => props.command, (cmd) => {
  if (cmd?.flags) {
    for (const flag of cmd.flags) {
      values.flags[flag.name] = flag.default || false
    }
  }
}, { immediate: true })

// Generate the output
const generatedOutput = computed(() => {
  if (selectedFormat.value === 'ruby') {
    return generateRubyCode(props.tool, props.command, values)
  }
  return generateCliCommand(props.tool, props.command, values, selectedShell.value)
})

// Code highlighting class
const codeClass = computed(() => {
  return selectedFormat.value === 'ruby' ? 'language-ruby' : 'language-bash'
})

// Copy to clipboard
async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(generatedOutput.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>

<style scoped>
pre {
  white-space: pre-wrap;
  word-break: break-word;
}

@media (min-width: 640px) {
  pre {
    white-space: pre;
    word-break: normal;
  }
}
</style>
