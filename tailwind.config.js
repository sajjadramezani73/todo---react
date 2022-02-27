const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '600px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'var(--white)',
      yellow: 'var(--yellow)',
      teal: 'var(--teal)',
      blue: 'var(--blue)',
      red: 'var(--red)',
      silver: 'var(--silver)',
      grayLight: 'var(--grayLight)',
      gray: colors.gray,
    },
    extends: {}
  },
  plugins: [],
}
