<template>
  <section class="features-section section-padding bg-light-surface dark:bg-dark-surface">
    <div class="container-wide">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-light-text dark:text-dark-text">
          Why Ukiryu?
        </h2>
        <p class="text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
          Transform fragile command-line invocations into robust, type-safe APIs
          with declarative YAML profiles and platform-adaptive execution.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          title="Platform-Adaptive"
          description="Same code works seamlessly across macOS, Linux, and Windows with automatic shell-specific quoting and escaping."
          color="primary"
        >
          <template #icon>
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </template>
        </FeatureCard>

        <FeatureCard
          title="Type-Safe Parameters"
          description="Automatic parameter validation and type coercion. Catch errors before command execution with comprehensive type checking."
          color="ocean"
        >
          <template #icon>
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </template>
        </FeatureCard>

        <FeatureCard
          title="Structured Responses"
          description="Rich result objects instead of parsing stdout/stderr. Access success status, output, timing metadata, and error details programmatically."
          color="sage"
        >
          <template #icon>
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          </template>
        </FeatureCard>

        <FeatureCard
          title="Version Management"
          description="Support multiple tool versions with automatic selection. Version-specific YAML profiles handle API differences gracefully."
          color="foam"
        >
          <template #icon>
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          </template>
        </FeatureCard>

        <FeatureCard
          title="Shell-Aware"
          description="Proper quoting and escaping for bash, zsh, fish, dash, tcsh, PowerShell, and cmd. Write once, run correctly everywhere."
          color="primary"
        >
          <template #icon>
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </template>
        </FeatureCard>

        <FeatureCard
          title="Declarative Profiles"
          description="Define CLI behavior in YAML, not code. Schema-driven with validation, documentation generation, and best practice linting."
          color="ocean"
        >
          <template #icon>
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </template>
        </FeatureCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import FeatureCard from '../molecules/FeatureCard.vue'
</script>
