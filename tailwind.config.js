module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        'maxHeight-opacity-transform': 'max-height, opacity, transform',
      },
      maxWidth: {
        screen: '100vw',
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
