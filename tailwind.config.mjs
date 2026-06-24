/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink:     '#202020',
        muted:   '#6b6b6b',
        accent:  '#bcaf9f',
        border:  '#e6e2de',
        bglight: '#f9f8f6',
        bgbar:   '#e6e2de',
        bgdark:  '#202020',
        bgcard:  '#2a2a2a',
        burgundy:'#601c2b',
        ondarkt: '#d9d4cd',
        ondarkm: '#9a948c',
      },
      fontFamily: {
        heading: ["'Playfair Display'", "'Times New Roman'", 'serif'],
        body:    ["'Lato'", "'Helvetica Neue'", 'sans-serif'],
      },
      maxWidth: {
        container: '1140px',
      },
    },
  },
  plugins: [],
};
