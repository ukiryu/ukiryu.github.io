<template>
  <!-- Enum/Values Selection -->
  <select
    v-if="option.values && option.values.length"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="w-full px-3 py-1.5 rounded bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text text-sm"
  >
    <option value="">-- Not set --</option>
    <option v-for="val in option.values" :key="val" :value="val">{{ val }}</option>
  </select>

  <!-- Boolean -->
  <select
    v-else-if="option.type === 'boolean'"
    :value="String(modelValue || false)"
    @input="$emit('update:modelValue', $event.target.value === 'true')"
    class="w-full px-3 py-1.5 rounded bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text text-sm"
  >
    <option value="false">false</option>
    <option value="true">true</option>
  </select>

  <!-- Integer with range -->
  <div v-else-if="option.type === 'integer' && option.range" class="flex items-center gap-3">
    <input
      type="range"
      :min="option.range[0]"
      :max="option.range[1]"
      :value="modelValue || option.range[0]"
      @input="$emit('update:modelValue', parseInt($event.target.value, 10))"
      class="flex-1"
    />
    <span class="text-sm font-mono text-light-text dark:text-dark-text w-12 text-center">
      {{ modelValue || option.range[0] }}
    </span>
  </div>

  <!-- Integer -->
  <input
    v-else-if="option.type === 'integer'"
    type="number"
    step="1"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value ? parseInt($event.target.value, 10) : null)"
    :placeholder="placeholder"
    class="w-full px-3 py-1.5 rounded bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text text-sm"
  />

  <!-- Float -->
  <input
    v-else-if="option.type === 'float'"
    type="number"
    step="0.01"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value ? parseFloat($event.target.value) : null)"
    :placeholder="placeholder"
    class="w-full px-3 py-1.5 rounded bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text text-sm"
  />

  <!-- File -->
  <input
    v-else-if="option.type === 'file'"
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    placeholder="path/to/file"
    class="w-full px-3 py-1.5 rounded bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text text-sm font-mono"
  />

  <!-- Array -->
  <textarea
    v-else-if="option.type === 'array'"
    :value="Array.isArray(modelValue) ? modelValue.join('\n') : modelValue"
    @input="handleArrayInput"
    rows="2"
    placeholder="One value per line"
    class="w-full px-3 py-1.5 rounded bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text text-sm font-mono resize-y"
  />

  <!-- Default: String -->
  <input
    v-else
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
    class="w-full px-3 py-1.5 rounded bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text text-sm"
  />
</template>

<script setup>
const props = defineProps({
  option: {
    type: Object,
    required: true
  },
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: null
  }
})

const emit = defineEmits(['update:modelValue'])

const placeholder = `Enter ${props.option.type || 'value'}...`

function handleArrayInput(event) {
  const value = event.target.value
  const lines = value.split('\n').filter(line => line.trim())
  emit('update:modelValue', lines.length > 0 ? lines : null)
}
</script>
