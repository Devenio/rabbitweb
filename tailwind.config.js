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
        main: "#393586",
        secondary: "#6C63FF",
        dark: "#393E46"
      }
    },
  },
  variants: {},
  plugins: [],
}
