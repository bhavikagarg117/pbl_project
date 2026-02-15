// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#e6f0ff',
        muted: '#8ca6d3',
        bgMain: '#070f25',
        panel: '#101f44',
        line: '#223a70',
        primary: '#3b82f6',
        primaryLight: '#5ca6ff',
      },
    },
  },
  plugins: [],
}
