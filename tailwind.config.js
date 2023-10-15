/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Cairo"],
    },
    extend: {
      colors: {
        "bosta-red": "#e30613",
        "bosta-dark-red": "#d9534f",
        "bosta-gray": "#111619",
        "bosta-secondaryGray": "#475467",
        "bosta-green": "#5cb86e",
        "bosta-warning": "#ffa500",
      },
      rotate: {
        270: "270deg",
      },
    },
  },
  plugins: [],
});
