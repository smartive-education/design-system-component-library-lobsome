/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            spacing: {
                xxs: '4px',
                xs: '8px',
                s: '16px',
                m: '24px',
                l: '32px',
                xl: '48px',
                xxl: '64px',
            },
            transitionDuration: {
                '350': '350ms'
            }
        },
    },
    plugins: [],
};
