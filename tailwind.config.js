/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      flowbite.content(),
  ],
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
    import('flowbite/plugin'),
    flowbite.plugin(),
  ],
}

