/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class', // Enable dark mode support
  theme: {
    extend: {
      colors: {
  primary: {
    DEFAULT: "#fea928",
    50: "#fff8e6",
    100: "#ffedcc",
    200: "#ffdc99",
    300: "#ffcc66",
    400: "#feb84d",
    500: "#fea928",
    600: "#cc8800",
    700: "#996600",
    800: "#664400",
    900: "#332200"
  },
  secondary: "#ed8900" // ✅ fixed
}
,
    container: {
  center: true, 
  padding: {
    DEFAULT: "1rem", // ✅ applies to all screens
    sm: "3rem"        // ✅ applies at `sm` and up
  }
}