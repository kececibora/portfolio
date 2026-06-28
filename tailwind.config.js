/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0C10',
        'ink-2': '#0E1117',
        panel: '#12151C',
        'panel-2': '#171B24',
        line: '#232A36',
        text: '#E7ECF3',
        muted: '#8B95A7',
        faint: '#5A6473',
        accent: '#3FE0FF',
        'accent-2': '#8A6BFF',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        shell: '1180px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(63,224,255,0.18), 0 18px 60px -22px rgba(63,224,255,0.35)',
        'glow-violet': '0 0 0 1px rgba(138,107,255,0.20), 0 18px 60px -22px rgba(138,107,255,0.35)',
        card: '0 30px 60px -30px rgba(0,0,0,0.8)',
      },
      keyframes: {
        drift: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(4%,-6%,0) scale(1.08)' },
        },
        'drift-2': {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1.05)' },
          '50%': { transform: 'translate3d(-5%,5%,0) scale(1)' },
        },
        blink: {
          '0%,49%': { opacity: '1' },
          '50%,100%': { opacity: '0' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        drift: 'drift 22s ease-in-out infinite',
        'drift-2': 'drift-2 28s ease-in-out infinite',
        blink: 'blink 1.1s step-end infinite',
        scan: 'scan 6s linear infinite',
      },
    },
  },
  plugins: [],
}
