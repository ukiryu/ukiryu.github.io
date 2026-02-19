<template>
  <section class="architecture-section section-padding">
    <div class="container-wide">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-light-text dark:text-dark-text">
          Architecture
        </h2>
        <p class="text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
          Model-driven design separates concerns into distinct layers that work
          together to provide a unified CLI experience.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Layer diagram -->
        <div class="glass-card p-6">
          <h3 class="text-lg font-semibold mb-6 text-light-text dark:text-dark-text">Execution Flow</h3>
          <div class="space-y-4">
            <div class="layer-block p-4 rounded-lg bg-brand-deep/10 border-l-4 border-brand-deep">
              <div class="text-sm font-medium text-light-text dark:text-dark-text">User Application</div>
              <div class="text-xs text-light-muted dark:text-dark-muted mt-1">tool.execute(:command, params)</div>
            </div>
            <div class="flex justify-center">
              <svg class="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <div class="layer-block p-4 rounded-lg bg-brand-primary/10 border-l-4 border-brand-primary">
              <div class="text-sm font-medium text-light-text dark:text-dark-text">Tool Layer</div>
              <div class="text-xs text-light-muted dark:text-dark-muted mt-1">Load profile, detect version, find executable</div>
            </div>
            <div class="flex justify-center">
              <svg class="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <div class="layer-block p-4 rounded-lg bg-brand-light/10 border-l-4 border-brand-light">
              <div class="text-sm font-medium text-light-text dark:text-dark-text">Command Layer</div>
              <div class="text-xs text-light-muted dark:text-dark-muted mt-1">Validate, format arguments, execute</div>
            </div>
            <div class="flex justify-center">
              <svg class="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <div class="layer-block p-4 rounded-lg bg-brand-sage/10 border-l-4 border-brand-sage">
              <div class="text-sm font-medium text-light-text dark:text-dark-text">Shell Layer</div>
              <div class="text-xs text-light-muted dark:text-dark-muted mt-1">Platform paths, shell escaping, joining</div>
            </div>
            <div class="flex justify-center">
              <svg class="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <div class="layer-block p-4 rounded-lg bg-brand-foam/10 border-l-4 border-brand-foam">
              <div class="text-sm font-medium text-light-text dark:text-dark-text">Result Object</div>
              <div class="text-xs text-light-muted dark:text-dark-muted mt-1">CommandInfo + Output + Metadata</div>
            </div>
          </div>
        </div>

        <!-- Key concepts -->
        <div class="space-y-6">
          <div class="glass-card p-6">
            <h3 class="text-lg font-semibold mb-4 text-light-text dark:text-dark-text">Key Concepts</h3>
            <dl class="space-y-4">
              <div>
                <dt class="text-sm font-medium text-brand-primary">Package</dt>
                <dd class="text-sm text-light-muted dark:text-dark-muted mt-1">
                  Distribution unit (e.g., imagemagick via Homebrew, apt)
                </dd>
              </div>
              <div>
                <dt class="text-sm font-medium text-brand-primary">Tool</dt>
                <dd class="text-sm text-light-muted dark:text-dark-muted mt-1">
                  CLI command you run (e.g., convert, identify)
                </dd>
              </div>
              <div>
                <dt class="text-sm font-medium text-brand-primary">Interface</dt>
                <dd class="text-sm text-light-muted dark:text-dark-muted mt-1">
                  Abstract API contract multiple tools can implement
                </dd>
              </div>
              <div>
                <dt class="text-sm font-medium text-brand-primary">Profile</dt>
                <dd class="text-sm text-light-muted dark:text-dark-muted mt-1">
                  YAML file defining tool behavior across platforms/versions
                </dd>
              </div>
            </dl>
          </div>

          <div class="glass-card p-6">
            <h3 class="text-lg font-semibold mb-4 text-light-text dark:text-dark-text">Model-Driven Design</h3>
            <p class="text-sm text-light-muted dark:text-dark-muted leading-relaxed">
              Ukiryu manipulates Ruby objects that represent tools and commands, not command strings.
              The framework converts these models into shell-specific command syntax through the Shell layer.
            </p>
            <ul class="mt-4 space-y-2 text-sm text-light-muted dark:text-dark-muted">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-brand-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Zero runtime dependencies for core functionality
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-brand-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Optional thor gem for CLI only
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-brand-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                All YAML keys symbolized for Ruby consistency
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.layer-block {
  @apply transition-all duration-300;
}

.layer-block:hover {
  @apply translate-x-2;
}
</style>
