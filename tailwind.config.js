/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primaryText': "#374151",
        'secondaryText': "#4b5563"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

