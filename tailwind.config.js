/** @type {import('tailwindcss').Config} */
export default {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ]
  },
  theme: {
    extend: {
      colors: {
        primary: '#A59D84',
        secondary: '#C1BAA1',
        accent: '#F0F0D7',
        background: '#EFEFEF'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('taos/plugin'),
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}

