module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  media: false,
  theme: {
    extend: {
      colors: {
        // メインのカラー
        based: '#676772',
        primary: '#f34f39',
        secondary: '#00a0f0',
        attention: '#E45542',
        smoke: '#F6F6F6'
      },
      boxShadow: {
        origin: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
      }
    },
    fontFamily: {
      inter: ['Inter'],
      noto: ['Noto Sans JP']
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
