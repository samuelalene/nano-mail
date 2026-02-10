/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Matching the Indigo/Violet shades from your design
        primary: {
          50: '#f5f7ff',
          100: '#ebf0fe',
          600: '#5e5adb', // The brand color in your image
          700: '#4a45c5',
        }
      }
    },
  },
  plugins: [],
}