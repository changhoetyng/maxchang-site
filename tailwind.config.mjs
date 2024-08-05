/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "main-purple": "#B8A4C9",
        "main-blue": "#C9DEF4",
        "main-color": "#1E1E1E",
        "main-pink": "#F5CCD4",
      },
    },
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
      "andale-mono": ["Andale Mono", "monospace"],
    },
  },
  plugins: [],
};
