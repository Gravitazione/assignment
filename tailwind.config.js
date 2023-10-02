/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      bgprimary: '#191F37',
      bgsecondary: '#272C53',
      bgpopup: '#444A81',
      fontsecondary: '#9D9EAF',
      bglight: '#5966DA',
      black: '#000000',
      white: '#FFFFFF',
      ci: '#8655D1',
      glassy: '#272C5380',
    },
    extend: {
      fontFamily: {
        normal: 'OverpassRegular',
        medium: 'OverpassMedium',
        semibold: 'OverpassSemiBold',
        bold: 'OverpassBold'
      }
    },
  },
  plugins: [],
}

