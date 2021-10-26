module.exports = {
  mode: 'jit',
  purge: [
    ["./_includes/*.njk"],
    ["./*.njk"]
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
