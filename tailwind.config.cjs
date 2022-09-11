module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				"dark-primary": '#040407',
				"dark-secondary": '#1b1b1b',
				"dark-button": '#151515',
				"bright-primary": '#E7E7E9',
				"bright-secondary": '#D0D0D0',
				"teal-tint": '#1AF4FF',
			},
			backgroundImage: {
				"blue-gradient": 'linear-gradient(57deg, rgba(26, 244, 255, 1) 0%, rgba(0, 185, 236, 1) 100%);'
			}
		}
	},
};
