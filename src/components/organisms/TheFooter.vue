<template>
  <footer class="footer section-padding border-t border-light-border dark:border-dark-border">
    <div class="container-wide">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <!-- Brand -->
        <div class="md:col-span-2">
          <router-link to="/" class="inline-block mb-4">
            <div class="w-32">
              <Logo class="w-full h-auto" />
            </div>
          </router-link>
          <p class="text-light-muted dark:text-dark-muted text-sm max-w-md">
            OpenAPI for CLI Tools. A declarative framework for defining command-line
            interfaces with platform-adaptive execution and type safety.
          </p>
        </div>

        <!-- Repositories -->
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider text-light-text dark:text-dark-text mb-4">
            Repositories
          </h4>
          <ul class="space-y-2">
            <li>
              <a :href="config.github.ukiryu" target="_blank" rel="noopener" class="text-sm text-light-muted dark:text-dark-muted hover:text-brand-primary transition-colors">
                Ukiryu (Runtime)
              </a>
            </li>
            <li>
              <a :href="config.github.register" target="_blank" rel="noopener" class="text-sm text-light-muted dark:text-dark-muted hover:text-brand-primary transition-colors">
                Register (Profiles)
              </a>
            </li>
            <li>
              <a :href="config.github.schemas" target="_blank" rel="noopener" class="text-sm text-light-muted dark:text-dark-muted hover:text-brand-primary transition-colors">
                Schemas
              </a>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider text-light-text dark:text-dark-text mb-4">
            Resources
          </h4>
          <ul class="space-y-2">
            <li>
              <router-link to="/register" class="text-sm text-light-muted dark:text-dark-muted hover:text-brand-primary transition-colors">
                Tool Register
              </router-link>
            </li>
            <li>
              <router-link to="/schemas" class="text-sm text-light-muted dark:text-dark-muted hover:text-brand-primary transition-colors">
                Schemas
              </router-link>
            </li>
            <li>
              <a :href="config.github.organization" target="_blank" rel="noopener" class="text-sm text-light-muted dark:text-dark-muted hover:text-brand-primary transition-colors">
                GitHub
              </a>
            </li>
            <li>
              <a :href="config.rubygems.ukiryu" target="_blank" rel="noopener" class="text-sm text-light-muted dark:text-dark-muted hover:text-brand-primary transition-colors">
                RubyGems
              </a>
            </li>
            <li>
              <a :href="config.github.ukiryu + '/issues'" target="_blank" rel="noopener" class="text-sm text-light-muted dark:text-dark-muted hover:text-brand-primary transition-colors">
                Issue Tracker
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="pt-8 border-t border-light-border dark:border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm text-light-muted dark:text-dark-muted">
          &copy; {{ currentYear }} Ribose Inc. All rights reserved.
        </p>
        <div class="flex items-center gap-4">
          <a :href="config.ribose" target="_blank" rel="noopener" class="text-sm text-light-muted dark:text-dark-muted hover:text-brand-primary transition-colors">
            Ribose
          </a>
          <span class="text-light-border dark:text-dark-border">|</span>
          <a :href="config.github.ukiryu + '/blob/main/LICENSE'" target="_blank" rel="noopener" class="text-sm text-light-muted dark:text-dark-muted hover:text-brand-primary transition-colors">
            License
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import Logo from '../atoms/Logo.vue'
import config from '../../config'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  @apply bg-light-surface dark:bg-dark-surface;
}
</style>
