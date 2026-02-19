<template>
  <section class="philosophy-section section-padding bg-gradient-to-b from-brand-deep/5 to-transparent">
    <div class="container-narrow text-center">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-bold mb-6 text-light-text dark:text-dark-text">
          The Way of Ukiryu
        </h2>

        <p class="text-3xl mb-8 font-serif italic text-brand-primary">
          浮き流
        </p>

        <div class="prose prose-lg mx-auto text-left">
          <p class="text-lg text-light-muted dark:text-dark-muted leading-relaxed mb-6">
            <strong>Ukiryu</strong> (pronounced oo-kee-ryoo) derives from the Japanese
            <strong>浮き流</strong>, meaning <em>"floating flow"</em> or <em>"drifting current"</em>.
          </p>

          <p class="text-light-muted dark:text-dark-muted leading-relaxed mb-6">
            But there is a deliberate wordplay at work. <strong>流 (ryu)</strong> sounds identical to
            <strong>龍 (ryu)</strong>, meaning <em>"dragon"</em>. So Ukiryu whispers of
            <strong>浮き龍</strong>—the <em>"floating dragon"</em>—a mythical creature that
            glides between earth and sky, between water and wind.
          </p>

          <p class="text-light-muted dark:text-dark-muted leading-relaxed mb-6">
            In Eastern philosophy, the dragon is a <em>water spirit</em>—not fire-breathing destruction,
            but life-giving currents. The dragon controls rivers, summons rain, and swims through
            oceans. It adapts to the flow of nature rather than fighting against it.
          </p>

          <p class="text-light-muted dark:text-dark-muted leading-relaxed mb-6">
            This is Ukiryu's philosophy. Your commands are water—declarative, pure, expressing their
            intent. The framework is the dragon that carries those commands through any environment:
            bash, zsh, fish, dash, tcsh, PowerShell, cmd. Each shell is a different realm, and
            the dragon glides through them all with equal grace.
          </p>

          <p class="text-light-muted dark:text-dark-muted leading-relaxed mb-8">
            <strong>浮 (Uki)</strong> — to float, to rise, to be buoyant. The framework is light,
            with zero runtime dependencies. It does not weigh down your application.<br/><br/>
            <strong>流 (Ryu)</strong> — to flow, to stream, to drift. Commands flow through the
            framework like water through a riverbed, adapting to each platform's contours.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          <div class="text-center">
            <div class="text-4xl mb-3">🌊</div>
            <div class="text-sm font-semibold text-light-text dark:text-dark-text mb-1">Flow</div>
            <div class="text-xs text-light-muted dark:text-dark-muted">Commands adapt like water through any channel</div>
          </div>
          <div class="text-center">
            <div class="text-4xl mb-3">🐉</div>
            <div class="text-sm font-semibold text-light-text dark:text-dark-text mb-1">Dragon</div>
            <div class="text-xs text-light-muted dark:text-dark-muted">Powerful transformation across realms</div>
          </div>
          <div class="text-center">
            <div class="text-4xl mb-3">☁️</div>
            <div class="text-sm font-semibold text-light-text dark:text-dark-text mb-1">Float</div>
            <div class="text-xs text-light-muted dark:text-dark-muted">Light, buoyant, zero-weight abstractions</div>
          </div>
        </div>

        <div class="mt-12 p-6 glass-card max-w-lg mx-auto">
          <p class="text-sm font-serif italic text-light-muted dark:text-dark-muted">
            "The dragon does not fight the river.<br/>
            The dragon <em>becomes</em> the river."
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.prose strong {
  font-weight: 600;
  color: var(--color-brand-primary, #377a82);
}

.prose em {
  font-style: italic;
  color: var(--color-brand-primary, #377a82);
}
</style>
