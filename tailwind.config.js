/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#1e40af",
        text: "#1f2937",
        "light-text": "#6b7280",
        background: "#ffffff",
        "section-bg": "#f3f4f6",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backdropFilter: {
        "blur-10": "blur(10px)",
      },
      animation: {
        fadeDown: "fadeDown 0.4s ease-in-out forwards",
        fadeUp: "fadeUp 0.4s ease-in-out forwards",
      },
      keyframes: {
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
