/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Frank: ["'Frank Ruhl Libre', serif;"],
        Lato: ["Lato"],
      },
      colors: {
        // Using modern `rgb`
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        secondary_white: "rgb(var(--color-white) / <alpha-value>)",
        section_bg: "rgb(var(--color-section-bg) / <alpha-value>)",
        footer_bg: "rgb(var(--color-footer-bg) / <alpha-value>)",
        gray_bg: "rgb(var(--color-gray-bg) / <alpha-value>)",
      },
      spacing: {
        "space-5.22": "22px",
        "space-7.22": "30px",
        "space-x-18": "75px",
      },
      fontSize: {
        "3.2xl": "2rem", //32px
      },
      lineHeight: {
        7.2: "1.875rem", //30px
        11: "5.375rem", //86px
      },
      dropShadow: {
        "3xl": "2px 2px 2px rgba(0, 0, 0, 0.16)",
      },
    },
  },
  plugins: [],
};
