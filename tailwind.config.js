/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F4F6F9',
        amber: {
          brand: '#F5A623',
          bright: '#FFB020',
          soft: '#FEF3C7',
          deep: '#92400E',
        },
        navy: {
          DEFAULT: '#0F172A',
          deep: '#121826',
          card: '#162033',
        },
        slate: {
          frost: '#334155',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Cairo"', '"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', '"Cairo"', 'system-ui', 'sans-serif'],
        arabic: ['"Cairo"', '"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        glass: '24px',
      },
      boxShadow: {
        glass: '0 20px 50px -15px rgba(15, 23, 42, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.92)',
        'glass-hover': '0 28px 60px -15px rgba(15, 23, 42, 0.14), inset 0 1px 0 0 rgba(255, 255, 255, 0.98)',
        amber: '0 14px 34px -8px rgba(245, 166, 35, 0.42)',
        navy: '0 24px 54px -14px rgba(15, 23, 42, 0.28)',
      },
    },
  },
  plugins: [],
};
