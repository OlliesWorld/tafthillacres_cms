module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
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
  