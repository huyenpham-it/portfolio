/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./app/**/*.{html,js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}'
	],
	// safelist: [
	// 	{
	// 		pattern: /from-\[#f07167\]/
	// 	}
	// ],
	theme: {
		extend: {}
	},
	plugins: []
};