// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p

//vào file tailwind.config.js
// content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],

// import vào index.css ( nếu lỗi Unknown => vào setting và search unknown và chọn css>lint và chọn ignore)
//@tailwind base;
// @tailwind components;
// @tailwind utilities;

// vào https://github.com/tailwindlabs/prettier-plugin-tailwindcss để config tailwind : tự đông sắp xếp thứ tự tên class
// theo cách tailwind đề xuất
//  npm install -D prettier prettier-plugin-tailwindcss
// tạo 1 file mới prettier.config.cjs
//  module.exports = {
//   plugins: [require('prettier-plugin-tailwindcss')],
// }

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Roboto Mono', 'sans-serif'],
        },
        extend: {
            backgroundImage: {
                'hero-banner': "url('./asset/banner1.jpg')",
            },
        },
    },
    plugins: [],
};
