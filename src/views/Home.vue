<template>
  <div class="home-page">
    <HeroSection />
    <PhilosophySection />
    <FeaturesSection />
    <ArchitectureSection />
    <CodeSection />
    <EcosystemSection />
    <QuickStartSection />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'
import HeroSection from '../components/organisms/HeroSection.vue'
import PhilosophySection from '../components/organisms/PhilosophySection.vue'
import FeaturesSection from '../components/organisms/FeaturesSection.vue'
import ArchitectureSection from '../components/organisms/ArchitectureSection.vue'
import CodeSection from '../components/organisms/CodeSection.vue'
import EcosystemSection from '../components/organisms/EcosystemSection.vue'
import QuickStartSection from '../components/organisms/QuickStartSection.vue'

const { initScrollAnimation } = useScrollAnimation()

onMounted(() => {
  initScrollAnimation()
})
</script>
