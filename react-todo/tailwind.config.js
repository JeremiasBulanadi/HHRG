/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#211951',
        'purple': '#836FFF',
        'mint': '#15F5BA',
        'bleak': '#F0F3FF'
      }
    },
  },
  plugins: [],
}

