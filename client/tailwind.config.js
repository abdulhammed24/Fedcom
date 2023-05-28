/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fedcom_blue: "#00aaaa",
        fedcom_blue200: "#66cccc",
        fedcom_blue300: "#80d5d5",
        fedcom_blue400: "#006666",
        fedcom_blue500: "#005555",
        fedcom_blue600: "#004444",
      },
    },
  },
  plugins: [],
};
