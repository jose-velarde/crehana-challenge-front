module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty:{
        'maxHeight': 'max-height',
        'flex' : 'flex',
      },
      maxWidth:{
        'screen': '100vw'
      }
    },
  },
  variants: {
    extend: {
      width: ['group-hover'],
    },
  },
  plugins: [],
}
