/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['12px', '18px'],
      sm: ['14px', '20px'],
      base: ['16px', '26px'],
      lg: ['20px', '28px'],
      xl: ['30px', '36px'],
      '2xl': ['80px', '88px'],
      '3xl': ['100px', '90px'],
      '4xl': ['120px', '100px']
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      bootybold: 1200,
      black: 900
    },
    fontFamily: {
      montserrat: ['Montserrat'], // Ensure fonts with spaces have " " surrounding it.
      poppins: ['Poppins'],
      domine: ['Domine'],
      'playfair-display': ['Playfair Display'],
      'martian-mono': ['Martian Mono'],
      'gloria-hallelujah': ['"Gloria Hallelujah"', 'cursive']
    },
    extend: {}
  },
  plugins: []
};
