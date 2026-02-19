<template>
  <section class="ecosystem-section section-padding">
    <div class="container-wide">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-light-text dark:text-dark-text">
          The Ukiryu Ecosystem
        </h2>
        <p class="text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
          Three interconnected repositories working together to provide a complete CLI framework solution.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Ukiryu Core -->
        <div class="interactive-card p-6 bg-gradient-to-br from-brand-deep/20 to-brand-deep/5 rounded-2xl border border-brand-deep/20">
          <div class="w-12 h-12 rounded-lg bg-brand-deep flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2 text-light-text dark:text-dark-text">Ukiryu (Runtime)</h3>
          <p class="text-sm text-light-muted dark:text-dark-muted mb-4">
            Ruby gem that loads YAML profiles, executes commands, validates input, and provides the runtime API.
          </p>
          <ul class="text-sm space-y-1 text-light-muted dark:text-dark-muted mb-4">
            <li>Command execution</li>
            <li>Type validation</li>
            <li>Platform adaptation</li>
          </ul>
          <a :href="config.github.ukiryu" target="_blank" rel="noopener" class="text-sm text-brand-primary hover:text-brand-light font-medium">
            github.com/ukiryu/ukiryu →
          </a>
        </div>

        <!-- Register -->
        <div class="interactive-card p-6 bg-gradient-to-br from-brand-primary/20 to-brand-primary/5 rounded-2xl border border-brand-primary/20">
          <div class="w-12 h-12 rounded-lg bg-brand-primary flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2 text-light-text dark:text-dark-text">Register (Profiles)</h3>
          <p class="text-sm text-light-muted dark:text-dark-muted mb-4">
            Curated collection of YAML tool profiles for popular CLI tools with version-specific configurations.
          </p>
          <ul class="text-sm space-y-1 text-light-muted dark:text-dark-muted mb-4">
            <li>ImageMagick, FFmpeg, Inkscape</li>
            <li>Ghostscript, Pandoc</li>
            <li>Version routing</li>
          </ul>
          <a :href="config.github.register" target="_blank" rel="noopener" class="text-sm text-brand-primary hover:text-brand-light font-medium">
            github.com/ukiryu/register →
          </a>
        </div>

        <!-- Schemas -->
        <div class="interactive-card p-6 bg-gradient-to-br from-brand-light/20 to-brand-light/5 rounded-2xl border border-brand-light/20">
          <div class="w-12 h-12 rounded-lg bg-brand-light flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2 text-light-text dark:text-dark-text">Schemas</h3>
          <p class="text-sm text-light-muted dark:text-dark-muted mb-4">
            JSON Schema files for validating YAML tool profiles with comprehensive validation rules.
          </p>
          <ul class="text-sm space-y-1 text-light-muted dark:text-dark-muted mb-4">
            <li>Tool profile validation</li>
            <li>Interface definitions</li>
            <li>Schema linting</li>
          </ul>
          <a :href="config.github.schemas" target="_blank" rel="noopener" class="text-sm text-brand-primary hover:text-brand-light font-medium">
            github.com/ukiryu/schemas →
          </a>
        </div>
      </div>

      <!-- Data flow diagram -->
      <div class="mt-16 glass-card p-8">
        <h3 class="text-lg font-semibold mb-6 text-center text-light-text dark:text-dark-text">How It Works</h3>
        <div class="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <div class="text-center">
            <div class="w-24 h-24 rounded-xl bg-brand-deep flex items-center justify-center mx-auto mb-2">
              <span class="text-white font-semibold">YAML</span>
            </div>
            <div class="text-xs text-light-muted dark:text-dark-muted">Profiles</div>
          </div>
          <svg class="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <div class="text-center">
            <div class="w-24 h-24 rounded-xl bg-brand-primary flex items-center justify-center mx-auto mb-2">
              <span class="text-white font-semibold">Ruby</span>
            </div>
            <div class="text-xs text-light-muted dark:text-dark-muted">Runtime</div>
          </div>
          <svg class="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <div class="text-center">
            <div class="w-24 h-24 rounded-xl bg-brand-light flex items-center justify-center mx-auto mb-2">
              <span class="text-white font-semibold">CLI</span>
            </div>
            <div class="text-xs text-light-muted dark:text-dark-muted">Commands</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import config from '../../config'
</script>
