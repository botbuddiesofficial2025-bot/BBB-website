/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bbb: {
          green: "#008A5A",
          "green-dark": "#006B46",
          red: "#E8494D",
          ink: "#050505",
          bg: "#E4EEE6",
          "bg-soft": "#D7E8DC",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
