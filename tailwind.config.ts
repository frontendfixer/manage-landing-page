/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "704px",
      lg: "1007px",
      xl: "1280px",
      xxl: '1440px'
    },
    colors: {
      red: {
        50: "hsl(12, 88%, 59%)",
        30: "hsl(12, 88%, 90%)",
        10: "hsl(12, 88%, 96%)",
      },
      blue: {
        90: "hsl(233, 12%, 13%)",
        70: "hsl(228, 39%, 23%)",
        30: "hsl(227, 12%, 61%)",
      },
      gray: {
        30: "hsl(0, 0% ,98%)",
      },
      white: "hsl(0 0% 100%)",
    },
    extend: {
      container: {
        center: true,
      },
      spacing: {
        "gutter-l": "clamp(1.25rem, 2.25vw, 2rem)",
        "gutter-xl": "clamp(1.875rem, 3vw, 2.625rem)",
        "gutter-xxl": "clamp(2.5rem, 5vw, 3.52rem)",
      },
      fontSize: {
        xxl: "clamp(2.25rem, 3.33vw, 3rem)",
        xl: "clamp(1.625rem, 2.638vw, 2.375rem)",
        l: 'clamp(0.9375rem, 1.25vw, 1.125rem)'
      },
    },
  },
  plugins: [],
};
