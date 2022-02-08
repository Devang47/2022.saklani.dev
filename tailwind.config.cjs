module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: false, // or 'media' or 'class' => use depending on dark mode approach
	theme: {
		colors: {
			...require('tailwindcss/colors'),
			dark_primary: '#040407',
			dark_secondary: '#151515',
			bright_primary: '#E7E7E9',
			bright_secondary: '#D0D0D0',
			purple_tint: '#6A52FF',
			red_tint: '#9D2B34'
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
