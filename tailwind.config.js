/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-slide-in-left': {
          '0%': { opacity: 0, transform: 'translateX(-100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'fade-slide-in-right': {
          '0%': { opacity: 0, transform: 'translateX(100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-slide-in-left': 'fade-slide-in-left 2s ease-out',
        'fade-slide-in-right': 'fade-slide-in-right 2s ease-out',
      },
    },
  },
  plugins: [],
}
