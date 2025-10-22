/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-radial': 'radial-gradient(1200px_600px_at_10%_-10%, rgba(37,99,235,0.15), transparent_60%), radial-gradient(800px_400px_at_110%_10%, rgba(99,102,241,0.15), transparent_60%)',
      },
      colors: {
        bg: '#0f172a',
        card: '#0b1220',
      }
    },
  },
  plugins: [],
};