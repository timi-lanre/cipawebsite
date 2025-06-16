/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ['var(--font-lora)', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'bgMove': 'bgMove 30s infinite',
      },
      keyframes: {
        bgMove: {
          '0%, 100%': {
            'background-size': '120%',
            'background-position': 'bottom center',
          },
          '25%': {
            'background-size': '150%',
            'background-position': 'center center',
          },
          '35%': {
            'background-size': '120%',
            'background-position': 'right center',
          },
          '45%': {
            'background-size': '150%',
            'background-position': 'center center',
          },
          '65%': {
            'background-size': '120%',
            'background-position': 'top center',
          },
          '85%': {
            'background-size': '120%',
            'background-position': 'center center',
          },
          '100%': {
            'background-size': '120%',
            'background-position': 'left center',
          },
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}