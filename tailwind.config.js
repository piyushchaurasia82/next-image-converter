module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'Harmony': [
          'HarmonyOS_Sans_Regular',
          'HarmonyOS Sans',
          'sans-serif',
        ],
        'harmony-black': [
          'HarmonyOS_Sans_Black',
          'HarmonyOS Sans',
          'sans-serif',
        ],
        'harmony-bold': [
          'HarmonyOS_Sans_Bold',
          'HarmonyOS Sans',
          'sans-serif',
        ],
        'harmony-light': [
          'HarmonyOS_Sans_Light',
          'HarmonyOS Sans',
          'sans-serif',
        ],
        'harmony-medium': [
          'HarmonyOS_Sans_Medium',
          'HarmonyOS Sans',
          'sans-serif',
        ],
        'harmony-thin': [
          'HarmonyOS_Sans_Thin',
          'HarmonyOS Sans',
          'sans-serif',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}