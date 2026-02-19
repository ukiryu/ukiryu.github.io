<template>
  <div class="register-page">
    <!-- Hero -->
    <section class="min-h-[40vh] flex items-center justify-center relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-brand-deep/10 via-transparent to-brand-primary/10" />
      <div class="container-narrow relative z-10 py-20 text-center">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-light-text dark:text-dark-text">
          Tool <span class="gradient-text">Register</span>
        </h1>
        <p class="text-lg sm:text-xl text-light-muted dark:text-dark-muted mb-8 max-w-2xl mx-auto">
          Browse {{ toolsList.length }} CLI tools with declarative profiles for cross-platform execution.
        </p>
        <div class="max-w-xl mx-auto">
          <div class="relative">
            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-light-muted dark:text-dark-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search tools..."
              class="w-full pl-12 pr-4 py-3 rounded-xl bg-light-surface/80 dark:bg-dark-surface/80 backdrop-blur-sm border border-light-border dark:border-dark-border text-light-text dark:text-dark-text placeholder-light-muted/70 dark:placeholder-dark-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-8 border-y border-light-border dark:border-dark-border bg-light-surface/50 dark:bg-dark-surface/50">
      <div class="container-narrow">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div class="text-3xl font-bold text-brand-primary">{{ toolsList.length }}</div>
            <div class="text-sm text-light-muted dark:text-dark-muted">Tools</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-brand-primary">{{ totalCommands }}</div>
            <div class="text-sm text-light-muted dark:text-dark-muted">Commands</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-brand-primary">{{ categories.length }}</div>
            <div class="text-sm text-light-muted dark:text-dark-muted">Categories</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-brand-primary">v1.0-v1.3</div>
            <div class="text-sm text-light-muted dark:text-dark-muted">Schema Versions</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Filter -->
    <section class="py-6 border-b border-light-border dark:border-dark-border sticky top-16 z-30 bg-light-bg dark:bg-dark-bg/95 backdrop-blur">
      <div class="container-narrow">
        <div class="flex flex-wrap gap-2">
          <button
            :class="['px-3 py-1.5 rounded-full text-sm font-medium transition-all', selectedCategory === null ? 'bg-brand-primary text-white' : 'bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:border-brand-primary/50']"
            @click="selectedCategory = null"
          >
            All
          </button>
          <button
            v-for="category in categories"
            :key="category"
            :class="['px-3 py-1.5 rounded-full text-sm font-medium transition-all', selectedCategory === category ? 'bg-brand-primary text-white' : 'bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:border-brand-primary/50']"
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Tools Grid -->
    <section class="section-padding">
      <div class="container-narrow">
        <div v-if="filteredTools.length === 0" class="text-center py-12">
          <p class="text-light-muted dark:text-dark-muted">No tools found matching "{{ searchQuery }}"</p>
        </div>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <router-link
            v-for="tool in filteredTools"
            :key="tool.name"
            :to="`/register/${tool.name}`"
            class="glass-card p-4 hover:border-brand-primary/30 transition-all cursor-pointer group block"
          >
            <div class="flex items-start justify-between mb-2">
              <div>
                <h3 class="font-semibold text-light-text dark:text-dark-text group-hover:text-brand-primary transition-colors">
                  {{ tool.display_name }}
                </h3>
                <p class="text-xs text-light-muted dark:text-dark-muted">{{ tool.versions.length > 1 ? `${tool.versions.length} versions` : tool.versions[0] || 'Generic' }}</p>
              </div>
              <span class="px-2 py-0.5 text-xs rounded bg-brand-primary/10 text-brand-primary">
                {{ tool.commands.length }} cmd{{ tool.commands.length > 1 ? 's' : '' }}
              </span>
            </div>
            <p class="text-sm text-light-muted dark:text-dark-muted line-clamp-2 mb-3">
              {{ tool.description }}
            </p>
            <div class="flex flex-wrap gap-1">
              <span
                v-for="cmd in tool.commands.slice(0, 3)"
                :key="cmd"
                class="px-2 py-0.5 text-xs rounded bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border font-mono text-brand-primary"
              >
                {{ cmd }}
              </span>
              <span v-if="tool.commands.length > 3" class="px-2 py-0.5 text-xs rounded bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted">
                +{{ tool.commands.length - 3 }}
              </span>
            </div>
            <div class="mt-3 pt-3 border-t border-light-border dark:border-dark-border flex items-center justify-between">
              <span class="text-xs text-light-muted dark:text-dark-muted">{{ tool.category }}</span>
              <span class="text-xs text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity">
                View details →
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { toolsList, categories } from '../../data/tools-detail'

const searchQuery = ref('')
const selectedCategory = ref(null)

const totalCommands = computed(() => toolsList.reduce((acc, t) => acc + t.commands.length, 0))

const filteredTools = computed(() => {
  let tools = toolsList

  if (selectedCategory.value) {
    tools = tools.filter(t => t.category === selectedCategory.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    tools = tools.filter(t =>
      t.name.toLowerCase().includes(query) ||
      t.display_name.toLowerCase().includes(query) ||
      t.description.toLowerCase().includes(query) ||
      t.commands.some(c => c.toLowerCase().includes(query))
    )
  }

  return tools
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
