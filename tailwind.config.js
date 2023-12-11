/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#10101A',
        mydark: '#000000',
        light: '#fcfcfc',
        secondary: '#05B19A',
        mybg: '#0F172A',
        neutral: colors.slate,
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#b9e5fe',
          300: '#7cd1fd',
          400: '#36bbfa',
          500: '#0ca3eb',
          600: '#0082c9',
          700: '#0168a3',
          800: '#065786',
          900: '#06283d',
        },
      },
      fontFamily: {
        mysignature: ["Great Vibes"],
      },
    },
  },
  plugins: [],
}