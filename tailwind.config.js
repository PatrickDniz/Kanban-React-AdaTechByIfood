/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
      'primary': "var(--primary)",
      'primary-dark':"var(--primary-dark)",
      'primary-light':"var(--primary-light)",
      'secondary': "var(--secondary)",
      'background': "var(--background)",
      'task-bg': "var(--task-bg)",
      'tag-bg': "var(--tag-bg)",
      'tag-color': "var(--tag-color)",
      'alert': 'var(--alert)'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      inter: ['Inter', 'serif'],
    },
    },
  },
  plugins: [],
}

