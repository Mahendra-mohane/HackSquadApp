/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-teal': '#2b6777',
        'custom-blue':'#c8d8e4',
        'custom-green':'#52ab98'
      },
      textColor: {
        'custom-teal': '#2b6777',
        'custom-blue': '#c8d8e4',
        'custom-green': '#52ab98',
      },
    },
  },
  plugins: [],
}
