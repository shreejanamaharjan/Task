module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-background": "rgba(0, 0, 0, 0.5)",
      },
      screens: {
        xs: "600px",
      },
    },
  },
  plugins: [],
};
