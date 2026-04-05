/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This links the CSS variable from layout.tsx to Tailwind classes
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-playfair)", "ui-serif", "Georgia"],
      },
    },
  },
  plugins: [],
};
