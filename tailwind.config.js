/** @type {import('tailwindcss').Config} */
export default {
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },
  content: [],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
}
