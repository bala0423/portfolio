// Theme colours are CSS variables (RGB triplets) defined per theme in src/index.css.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;
const tokens = [
  'surface', 'surface-alt', 'ink', 'body', 'soft', 'muted', 'line', 'line-strong',
  'primary', 'primary-strong', 'brand', 'brand-hover', 'on-brand', 'tint', 'tint-strong',
  'grad-from', 'grad-to', 'grad-end', 'blob1', 'blob2', 'blob3', 'glow',
];

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: Object.fromEntries(tokens.map((name) => [name, token(name)])),
      animation: {
        blob: 'blob 14s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.92)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
