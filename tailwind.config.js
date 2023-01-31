/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				// lg: '4rem',
				// xl: '5rem',
				// '2xl': '6rem',
			},
		},

		extend: {
			fontFamily: {
				sans: ['inter', ...defaultTheme.fontFamily.sans],
			},

			colors: {
				dark: '#000000',
				white: '#ffffff',
				light: '#B3B3B3',
				gray: '#121212',
			},
		},
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
