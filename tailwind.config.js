/** @type {import('tailwindcss').Config} */

// ⚠️ [PLACEHOLDER] لوحة ألوان مؤقتة لكمبيوتك (مفيش ألوان لوجو رسمية متاحة).
// بدل ما نغيّر مئات الكلاسات في الكود، بنعيد تعريف الـ palettes اللي كانت مستخدمة
// (purple / violet / indigo / blue) عشان تشير للهوية الجديدة. غيّر القيم هنا مرة واحدة.
// (لازم تتطابق مع app/colors.css)
const primary = {
  50: '#ecfeff', 100: '#cffafe', 200: '#a5f3fc', 300: '#67e8f9', 400: '#22d3ee',
  500: '#06b6d4', 600: '#0891b2', 700: '#0e7490', 800: '#155e75', 900: '#164e63',
  950: '#083344',
};
const accent = {
  50: '#f0f5fb', 100: '#dbe7f5', 200: '#b9d0eb', 300: '#8db1dd', 400: '#5a8bc9',
  500: '#3a6cb0', 600: '#2b5590', 700: '#234575', 800: '#1e3a5f', 900: '#162a47',
  950: '#0e1b2e',
};

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: primary,
        violet: primary,
        indigo: primary,
        blue: accent,
        primary: primary[600],
        brand: {
          blue: accent[700],
          "blue-dark": accent[800],
          "blue-light": accent[50],
          gold: "#ffc531",
        },
      },
    },
  },
  plugins: [],
};
