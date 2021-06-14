module.exports = {
  mode: "jit",
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './**/*.vue'
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
