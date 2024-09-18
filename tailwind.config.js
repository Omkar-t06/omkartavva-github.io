/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {// Primary colors
        teal: '#008080',
        'sky-blue': '#87CEEB',
        'slate-gray': '#708090',
        ivory: '#FDF6E3',
        'soft-black': '#1C1C1C',
        'warm-gray': '#D3D3D3',
        'lime-green': '#32CD32',
        charcoal: '#333333',
        'off-white': '#F8F8F8',

        // Dark Mode Colors
        'dark-navy': '#0D1B2A',
        'light-cyan': '#E0FFFF',
        orange: '#FF6F00',
        white: '#FFFFFF',
      }
    },
  },
  plugins: [],
}

