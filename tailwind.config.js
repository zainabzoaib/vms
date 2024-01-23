/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      display: ['responsive'],
    },
    screens: {
      'xs': '475px',
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '1200px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    container: {
      padding: {
        DEFAULT: '0.5rem',
        sm: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'dark-red': '#770906',
      'text-red':'#dc1351',
      'red': '#f28e3c',
      'margenta': '#a12b63',
      'lightGrey': '#bdbdbd',
      'Light-orange': '#ff33330a',
      'black': '#000000',
      'bermuda': '#E2E2EA',
      'gray':'#efefef',
    },

  },
  plugins: [require("@tailwindcss/forms")({
    strategy: 'base', // only generate global styles
    strategy: 'class', // only generate classes
  }),
],
}

