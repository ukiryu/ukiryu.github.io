import { ref, watch } from 'vue'

// Singleton state - created once, shared across all components
const isDark = ref(false)
let isInitialized = false

/**
 * Initialize theme from localStorage or system preference.
 * Safe to call multiple times - only initializes once.
 */
function initializeTheme() {
  if (isInitialized || typeof window === 'undefined') return
  isInitialized = true

  const stored = localStorage.getItem('ukiryu-theme')
  if (stored) {
    isDark.value = stored === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  applyTheme()
}

/**
 * Apply the current theme to the document.
 */
function applyTheme() {
  if (typeof document === 'undefined') return

  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Set up watcher to persist and apply theme changes
watch(isDark, (newValue) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('ukiryu-theme', newValue ? 'dark' : 'light')
  }
  applyTheme()
})

/**
 * Composable for theme management.
 * All components share the same singleton state.
 */
export function useTheme() {
  // Auto-initialize on first use if in browser
  if (typeof window !== 'undefined' && !isInitialized) {
    initializeTheme()
  }

  const initTheme = () => {
    initializeTheme()
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    // The watcher will handle applyTheme and localStorage
  }

  return {
    isDark,
    initTheme,
    toggleTheme,
  }
}
