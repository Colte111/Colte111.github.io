/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-charcoal': {
          '50': '#f0f5ff',
          '100': '#e1ebfd',
          '200': '#bbd6fc',
          '300': '#80b4f9',
          '400': '#3c8df4',
          '500': '#136fe4',
          '600': '#0654c3',
          '700': '#06429e',
          '800': '#0a3a82',
          '900': '#0e316c',
          '950': '#030a17',
        },
      },
    },
  },
  plugins: [],
}

