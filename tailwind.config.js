module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: 'class',
  theme: {
      extend: {
        colors: {
          primary: 'var(--primary)',
          'text-main': 'var(--text-main)',
          'text-dark': 'var(--text-dark)',
          'bg-light': 'var(--bg-light)',
          'green': '#1b2911',
          'tan': '#d2d2c6d9',
          'dark-tan': '#6b6b44',
        }
      },
  },
  variants: {
      extend: {},
  },
  plugins: [],
}
  