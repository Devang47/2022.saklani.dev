import { minify } from 'html-minifier'; //Imports the module

const minification_options = {
	collapseBooleanAttributes: true,
	collapseWhitespace: true,
	conservativeCollapse: true,
	decodeEntities: true,
	html5: true,
	ignoreCustomComments: [/^#/],
	minifyCSS: true,
	minifyJS: true,
	removeAttributeQuotes: true,
	removeComments: true,
	removeOptionalTags: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	sortAttributes: true,
	sortClassName: true,
	removeEmptyElements: true
};

export async function handle({ event, resolve }) {
	const response = await resolve(event);

	if (response.headers.get('content-type').startsWith('text/html')) {
		const body = await response.text();
		return new Response(minify(body, minification_options), response);
	}

	return response; //Finally, we return back the response
}
