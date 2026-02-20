<template>
  <!-- Enum/Values Selection -->
  <select
    v-if="argument.values && argument.values.length"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="w-full px-3 py-1.5 rounded bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text text-sm"
  >
    <option value="">-- Select --</option>
    <option v-for="val in argument.values" :key="val" :value="val">{{ val }}</option>
  </select>

  <!-- Boolean -->
  <select
    v-else-if="argument.type === 'boolean'"
    :value="String(modelValue)"
    @input="$emit('update:modelValue', $event.target.value === 'true')"
    class="w-full px-3 py-1.5 rounded bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text text-sm"
  >
    <option value="false">false</option>
    <option value="true">true</option>
  </select>

  <!-- Integer -->
  <input
    v-else-if="argument.type === 'integer'"
    type="number"
    step="1"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value ? parseInt($event.target.value, 10) : null)"
    :placeholder="placeholder"
    class="w-full px-3 py-1.5 rounded bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text text-sm"
  />

  <!-- Float -->
  <input
    v-else-if="argument.type === 'float'"
    type="number"
    step="0.01"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value ? parseFloat($event.target.value) : null)"
    :placeholder="placeholder"
    class="w-full px-3 py-1.5 rounded bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text text-sm"
  />

  <!-- File -->
  <input
    v-else-if="argument.type === 'file'"
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="argument.variadic ? 'file1.txt, file2.txt, ...' : 'path/to/file'"
    class="w-full px-3 py-1.5 rounded bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text text-sm font-mono"
  />

  <!-- Array (variadic) -->
  <textarea
    v-else-if="argument.variadic"
    :value="Array.isArray(modelValue) ? modelValue.join('\n') : modelValue"
    @input="handleArrayInput"
    rows="3"
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
  argument: {
    type: Object,
    required: true
  },
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: null
  }
})

const emit = defineEmits(['update:modelValue'])

const placeholder = `Enter ${props.argument.type || 'value'}...`

function handleArrayInput(event) {
  const value = event.target.value
  const lines = value.split('\n').filter(line => line.trim())
  emit('update:modelValue', lines.length > 0 ? lines : null)
}
</script>
