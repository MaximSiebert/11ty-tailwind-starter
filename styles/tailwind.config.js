module.exports = {
  mode: 'jit',
  purge: [
    ["../_site/**/*.html"],
    ["../_site/*.html"]
    ["../_includes/*.njk"],
    ["../*.njk"]
  ],
  theme: {
    extend: {
      colors: {
      },
    },
  },
  variants: {},
  plugins: [],
}