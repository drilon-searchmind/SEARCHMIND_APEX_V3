/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4262FF', // Primary brand blue
          dark: '#23272F',    // Dark background
          light: '#F5F6FA',   // Light background
          accent: '#12B76A',  // Accent green
          warning: '#F04438', // Accent red
          info: '#8B5CF6',    // Accent purple
        },
        card: '#181A20',
        border: '#23272F',
        text: {
          DEFAULT: '#FFFFFF',
          muted: '#A3AED0',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
