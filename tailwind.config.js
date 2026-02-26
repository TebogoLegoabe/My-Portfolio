/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#38bdf8',
          dim: 'rgba(56,189,248,0.15)',
          glow: 'rgba(56,189,248,0.4)',
        },
        accent: {
          purple: '#818cf8',
          green: '#00ff88',
        },
        surface: {
          DEFAULT: '#0b0d11',
          card: 'rgba(15,23,42,0.5)',
          elevated: 'rgba(15,23,42,0.8)',
        },
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'SF Mono', 'monospace'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s infinite',
        'bounce-slow': 'bounceSlow 2s infinite',
        'blink': 'blink 1s infinite',
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
