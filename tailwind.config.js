/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'verdeCitrico': '#C2CD23',
      'verdeCitricoLight': '#E3EE41',
      'azul': '#009FC2',
      'laranja': '#F37021',
      'azulClaro': '#F0F8FA',
      'linhaAzulClaro': '#F0F1F2',
      'verde': {
        100: '#74C7B8',
        400: '#3A8393',
        700: '#294E5F',
      },
      'branco': '#FFF',
      'preto': '#000',
      'bgBloco': '#F5F9FA',
      'azulBase': '#009FC2',
      'azulEscuro': '#005174',
      'azulEscuro88': '#005174e0',
      'cinza': {
        100: '#333130',
        200: '#4F4C4B',
        300: '#827F7D',
        400: '#B7BBBD',
        500: '#E0DDDC',
        600: '#F2F1F0',
        700: '#7D8082',
        800: '#4B4D4F'
      },
    },
    fontSize: {
      xs: ['1.2rem', {
        lineHeight: '1.4rem'
      }],
      base: ['1.2rem', {
        lineHeight: '1.6rem'
      }],
      lg: ['1.6rem', {
        lineHeight: '2.4rem'
      }],
      xl: ['2.8rem', {
        lineHeight: '3.2rem'
      }],
      '3xl': ['3.2rem', {
        lineHeight: '3.6rem'
      }],
      '4xl': ['4rem', {
        lineHeight: '4.4rem'
      }],
      '5xl': ['4.4rem', {
        lineHeight: '4.8rem'
      }],
    },
    extend: {
      screens: {
        xs: '360px',
      },
      fontSize: {
        'lgdt': ['2rem', {
          lineHeight: '1.8rem'
        }],
        '5xldt': ['7.2rem', {
          lineHeight: '7.2rem'
        }],
        'menu': ['1.6rem', {
          lineHeight: '1.8rem'
        }],
      }
    }
  },
  plugins: [],
}
