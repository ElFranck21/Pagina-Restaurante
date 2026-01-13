/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background: '#212121',
        primary: '#f6e7d8',
        secondary: '#452921'
      },
      fontFamily:{
        serif:['"Libre Baskerville"','serif'],
      }
    },
  },
  plugins: [],
}

