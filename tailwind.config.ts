import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-gold': '#D4AF37',
        'emerald-green': '#047857',
        'dark-tone': '#121212',
        'light-accent': '#F5F5F5',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(212, 175, 55, 0.6)',
      }
    },
  },
  plugins: [],
};
export default config;