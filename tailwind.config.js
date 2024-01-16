/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // 사용하려는 클래스 이름: '폰트 이름'
        'regular' :['regular'],
        'bold' :['bold'],
        'cat' :['cat'],
      },
    },
  },
  plugins: [],
}
