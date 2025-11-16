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
        deepGreen: '#031f14',
        mangoGreen: '#00ff84',
        mangoYellow: '#ffd700',
        mangoOrange: '#ff6b35',
        mangoRed: '#ff004d',
        mangoPeach: '#ffe6c7',
        mangoBlush: '#fff6eb'
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'sans-serif']
      },
      boxShadow: {
        glow: '0 15px 60px rgba(255, 107, 53, 0.35)',
        neon: '0 25px 120px rgba(0, 255, 132, 0.35)',
        card: '0 25px 80px rgba(5, 6, 10, 0.07)'
      },
      backgroundImage: {
        'grid-radial':
          'radial-gradient(circle at top, rgba(0,255,132,0.25), transparent 55%)',
        'hero-gradient': 'linear-gradient(135deg, #00ff84 0%, #ffd700 50%, #ff6b35 100%)',
        'glass-gradient':
          'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,246,235,0.75))',
        'mango-noise':
          'linear-gradient(120deg, rgba(255,107,53,0.08), rgba(0,255,132,0.08)), radial-gradient(circle at 20% 20%, rgba(255,215,0,0.25), transparent 45%)'
      }
    }
  },
  plugins: []
};
