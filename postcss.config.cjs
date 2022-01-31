const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const postcssNesting = require('postcss-nesting');
const cssnano = require('cssnano');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
	plugins: [
		postcssImport(),
		postcssNesting(),
		tailwindcss(),
		autoprefixer(),
		!dev &&
			cssnano({
				preset: 'default'
			})
	]
};
