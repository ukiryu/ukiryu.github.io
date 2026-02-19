/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#377a82',
          dark: '#204153',
          light: '#548888',
          accent: '#5c8b8a',
          deep: '#215d6c',
        },
        dragon: {
          teal: '#377a82',
          deep: '#204153',
          ocean: '#215d6c',
          sage: '#5c8b8a',
          foam: '#8fb3a8',
        },
        dark: {
          bg: '#0a0f12',
          surface: '#11181c',
          border: '#1e2d36',
          text: '#e8eef0',
          muted: '#6b8088',
        },
        light: {
          bg: '#f8fafb',
          surface: '#ffffff',
          border: '#dce5e8',
          text: '#1a2228',
          muted: '#5a6870',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'glide': 'glide 8s ease-in-out infinite',
        'glide-delay': 'glide 8s ease-in-out 3s infinite',
        'unfold': 'unfold 1.2s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'scale-in': 'scale-in 0.3s ease-out forwards',
        'swoop': 'swoop 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glide: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(10px) translateY(-8px)' },
          '50%': { transform: 'translateX(0) translateY(-12px)' },
          '75%': { transform: 'translateX(-10px) translateY(-8px)' },
        },
        unfold: {
          '0%': { transform: 'scale(0.85) rotate(-3deg)', opacity: '0' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        'fade-in-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        swoop: {
          '0%': { transform: 'translateY(-30px) scale(0.9)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
