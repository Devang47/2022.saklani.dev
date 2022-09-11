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

export async function handle({ request, resolve }) {
	const response = await resolve(request);

	if (response.headers['content-type'] === 'text/html') {
		response.body = minify(response.body, minification_options); //Minifies the response.body
	}

	return response; //Finally, we return back the response
}
