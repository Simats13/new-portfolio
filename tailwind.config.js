/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#1e40af',
        text: '#1f2937',
        'light-text': '#6b7280',
        background: '#ffffff',
        'section-bg': '#f3f4f6',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backdropFilter: {
        'blur-10': 'blur(10px)',
      },
    },
  },
  plugins: [],
} 