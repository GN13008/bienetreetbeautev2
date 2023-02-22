/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        //     blue: "#1fb6ff",
        indigo: {
          // 100: "#cffafe",
          // 200: "#a5f3fc",
          // 300: "#67e8f9",
          400: "#FF0000",
          // 500: "#06b6d4",
          // 600: "#0891b2",
          // 700: "#0e7490",
          // 800: "#155e75",
          // 900: "#164e63",
        },
        //     pink: "#ff49db",
        //     orange: "#ff7849",
        //     green: "#13ce66",
        //     yellow: "#ffc82c",
        //     "gray-dark": "#273444",
        //     gray: "#8492a6",
        //     "gray-light": "#d3dce6",
      },
      fontFamily: {
        sans: ["Old Standard TT", "Graphik", "sans-serif"],
        //     serif: ["Merriweather", "serif"],
      },
      // fontFamily: {
      //     sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [],
};
