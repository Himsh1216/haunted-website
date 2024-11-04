module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a1a2e',
        text: '#e94560',
        primary: '#0f3460',
      },
      fontFamily: {
        spooky: ['Creepster', 'cursive'],
      },
    },
  },
  plugins: [],
};
