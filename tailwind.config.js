/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'beije': '#F9F5F2',
        'tabFocused': '#343131',
        'bg-beije': '#F9F5FF',
      },
    },
    fontFamily: {
      gordita: ['Gordita', 'sans-serif'],
    },

 
  },
  
  plugins: [],
}
