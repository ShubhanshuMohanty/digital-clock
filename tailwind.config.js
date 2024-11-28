/** @type {import('tailwindcss').Config} */
export default {
  "darkMode":"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: 'rgb(16,20,38)', // Name it `customDark` or any preferred name
      },
      boxShadow: {
        'green-radial': '0 0 20px 10px rgba(0, 255, 0, 0.5)',
      },
    },
  },
  plugins: [],
}

