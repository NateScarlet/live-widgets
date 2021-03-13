module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        64: "8rem",
        128: "16rem",
      },
      cursor: {
        "zoom-in": "zoom-in",
        "zoom-out": "zoom-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
