/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': 'url("/src/assets/Banner.png")',
      },
      keyframes: {
        scroll: {
          '0%, 20%, 100%': { transform: 'translateY(0)' },
          '25%, 45%': { transform: 'translateY(-75px)' },
          '50%, 70%': { transform: 'translateY(-150px)' },
          '75%, 95%': { transform: 'translateY(-230px)' },
        },
      },
      animation: {
        scroll: 'scroll 12s infinite',
      },
    },
    fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}