/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Outfit': ['Outfit', 'sans-serif'],
      },
      colors: {
        tomato: '#FF6347', // Add 'tomato' color with its hex value
      },
      
    }
  },
  plugins: [
  ],
}

