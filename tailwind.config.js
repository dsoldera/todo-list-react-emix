/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    color: {
      'green-dark': '#003331',
      'green-emix': '#3AD5CD',
    },
    extend: {},
  },
  plugins: [],
  safelist: [
    'green-dark',
    'green-emix',
  ]
}

