/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js"
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
    import('flowbite/plugin')
  ],
}

