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
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      }
    },
    fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}