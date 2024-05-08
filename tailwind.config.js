/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./wp-templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Primary */
        primary: {
          50: "#FFD1D7",
          100: "#FFA4B0",
          200: "#FF7587",
          300: "#E45467",
          500: "#C63649",
          600: "#BC2C3F",
          800: "#9E0E21",
          900: "#7D0010",
        },

        /* Secondary */
        secondary: {
          50: "#F5CAC2",
          100: "#CDA29A",
          200: "#A37870",
          300: "#7C5149",
          400: "#532820",
          500: "#4E231B",
          600: "#3E130B",
          700: "#340901",
          900: "#1B0400",
        },

        /* Tertiary */
        tertiary: {
          50: "#F2F2F2",
          100: "#E5E5E5",
          200: "#CCCCCC",
          300: "#B2B2B2",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4D4D4D",
          900: "#1A1A1A",
        },

        /* Neutral */
        neutral: {
          50: "#FFF9EF",
          100: "#FDF3E4",
          200: "#F8EEDF",
          300: "#F3E9DA",
          400: "#EEE4D5",
          500: "#D8CEBF",
          700: "#A99F90",
          800: "#645A4B",
          900: "#372D1E",
        },

        "acc-blue": "#A1D0F2",
        "acc-blue-lt": "#D4EAF6",
        "acc-green": "#B2D4AF",
        "acc-brown": "#532820",
        "bg-primary": "#fff7ec",
        "bd-overlay": "rgba(0, 0, 0, 0.08)",
      },
      fontWeight: {
        normal: 500,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
