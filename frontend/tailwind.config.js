/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ingenia:{
          primario: '#316878',          
          secundario: '#5B9F9F',
        },
      },
    },
  },
  plugins: [],
}

