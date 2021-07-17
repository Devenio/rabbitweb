module.exports = {
  mode: "jit",
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        main: "#000000"
      }
    },
  },
  variants: {},
  plugins: [],
}
