module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: false, // or 'media' or 'class' => use depending on dark mode approach
	theme: {
		colors: {
			...require('tailwindcss/colors'),
			dark_primary: '#040407',
			dark_secondary: '#1b1b1b',
			dark_button: '#151515',
			bright_primary: '#E7E7E9',
			bright_secondary: '#D0D0D0',
			purple_tint: '#4158D6',
			blue_tint: '#0053B1',
			teal_tint: '#1AF4FF'
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
