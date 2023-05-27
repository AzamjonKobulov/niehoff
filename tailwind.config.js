/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        xxl: '90rem',
      },
      width: {
        90: '21.875rem',
        210: '13.125rem',
      },
      maxWidth: {
        base: '122.5rem',
        poppup: '85rem',
      },
      spacing: {
        90: '21.875rem',
      },
      fontSize: {
        10: '0.625rem',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        tabac: ['Tabac', 'serif'],
      },
      colors: {
        brand: {
          dark: '#3F403D',
          light: '#FAFAFA',
          lightGray: '#F3F3F3',
          gray: '#EDEDED',
          green: '#56AE31',
          orange: '#CC603C',
          oldvine: '#6A7861',
          grey: '#AAAAAA',
        },
      },
      boxShadow: {
        btn: '0px 2px 11px rgba(0, 0, 0, 0.1)',
        base: '0px 0px 6px rgba(0, 0, 0, 0.15)',
        card: '0px 4px 50px -5px rgba(32, 32, 32, 0.1)',
        poppup: '0px 0px 4px rgba(0, 0, 0, 0.15)',
      },
      backgroundColor: {
        radial:
          'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)',
        linear:
          'linear-gradient(180deg, rgba(250, 250, 250, 0.8) 0%, rgba(250, 250, 250, 0) 0.01%, rgba(248, 248, 248, 0.8) 100%, rgba(250, 250, 250, 0.8) 100%)',
      },
      zIndex: {
        99: 99,
        100: 100,
      },
    },
  },
  plugins: [],
};
