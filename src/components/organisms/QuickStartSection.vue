<template>
  <section class="quickstart-section section-padding bg-gradient-to-b from-transparent to-brand-deep/5 dark:to-brand-deep/10">
    <div class="container-narrow text-center">
      <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-light-text dark:text-dark-text">
        Get Started
      </h2>
      <p class="text-light-muted dark:text-dark-muted mb-8 max-w-xl mx-auto">
        Install the gem and start defining your CLI tools in minutes.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <BaseButton
          as="a"
          :href="config.docs.ukiryu"
          variant="primary"
          size="lg"
        >
          Read Documentation
        </BaseButton>
        <BaseButton
          as="a"
          :href="config.github.ukiryu"
          target="_blank"
          rel="noopener"
          variant="secondary"
          size="lg"
        >
          View on GitHub
        </BaseButton>
      </div>

      <!-- Installation steps -->
      <div class="max-w-2xl mx-auto text-left">
        <div class="glass-card p-6">
          <h3 class="text-lg font-semibold mb-4 text-light-text dark:text-dark-text">Quick Install</h3>
          <CodeBlock language="bash">
# Install the gem
gem install ukiryu

# Or add to your Gemfile
gem 'ukiryu'
          </CodeBlock>
        </div>
      </div>

      <!-- Supported tools -->
      <div class="mt-12">
        <p class="text-sm text-light-muted dark:text-dark-muted mb-6">
          Supported tools in the register
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <span class="px-3 py-1 text-sm rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-text dark:text-dark-text">
            ImageMagick
          </span>
          <span class="px-3 py-1 text-sm rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-text dark:text-dark-text">
            FFmpeg
          </span>
          <span class="px-3 py-1 text-sm rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-text dark:text-dark-text">
            Inkscape
          </span>
          <span class="px-3 py-1 text-sm rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-text dark:text-dark-text">
            Ghostscript
          </span>
          <span class="px-3 py-1 text-sm rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-text dark:text-dark-text">
            Pandoc
          </span>
          <span class="px-3 py-1 text-sm rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary">
            + More
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '../atoms/BaseButton.vue'
import CodeBlock from '../molecules/CodeBlock.vue'
import config from '../../config'
</script>
