/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0B0F19',
          panel: '#121826',
          card: '#161E2E',
          line: '#232B3D',
        },
        ink: {
          DEFAULT: '#E7E9EE',
          muted: '#8A93A6',
          faint: '#5B6478',
        },
        amber: {
          DEFAULT: '#F2A65A',
          dim: '#C7863F',
        },
        teal: {
          DEFAULT: '#5EEAD4',
          dim: '#3FAF9E',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        scanline: 'scanline 6s linear infinite',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(242, 166, 90, 0.35)',
      },
    },
  },
  plugins: [],
};
