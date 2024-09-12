/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Amiri",
    },
    extend: {
      fontSize: {
        huge: ["8rem", { lineHeight: "1" }],
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
