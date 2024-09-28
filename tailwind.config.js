/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        info:"#EAEDED",
        texto:"#FF5733"
      }
    },
  },
  plugins: [],
}