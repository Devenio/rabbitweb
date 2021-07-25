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
        // main: "#393586",
        main: "#0e4f51",
        // secondary: "#6C63FF",
        secondary: "#298e8e",
        dark: "#393E46"
      }
    },
  },
  variants: {},
  plugins: [],
}
