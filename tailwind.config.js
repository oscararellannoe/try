/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/sections/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        night: '#05060a',
        aurora: '#3de0ff',
        blush: '#ff8ac3',
        mint: '#00f5a0'
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'var(--font-geist-sans)', 'sans-serif']
      },
      boxShadow: {
        glow: '0 20px 80px rgba(61, 224, 255, 0.35)'
      },
      backgroundImage: {
        'grid-radial':
          'radial-gradient(circle at top, rgba(61,224,255,0.25), transparent 60%)'
      }
    }
  },
  plugins: []
};
