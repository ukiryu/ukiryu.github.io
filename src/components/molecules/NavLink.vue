<template>
  <component
    :is="componentType"
    :to="to"
    :href="href"
    :target="target"
    :rel="rel"
    :class="linkClasses"
    @click="$emit('click', $event)"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  to: {
    type: String,
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
  target: {
    type: String,
    default: null,
  },
  rel: {
    type: String,
    default: null,
  },
  active: {
    type: Boolean,
    default: false,
  },
  as: {
    type: Object,
    default: null,
  },
})

defineEmits(['click'])

const componentType = computed(() => {
  if (props.as) return props.as
  if (props.to) return RouterLink
  return 'a'
})

const linkClasses = computed(() => [
  'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
  props.active
    ? 'text-brand-primary bg-brand-primary/10'
    : 'text-light-muted dark:text-white hover:text-light-text hover:bg-light-surface dark:hover:bg-dark-surface',
])
</script>
