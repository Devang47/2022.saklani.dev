import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(
		301,
		'https://docs.google.com/document/d/1tERbObbptuw8QVDyPfJ5FlSshtoeZVSgEBoSYUhlOC4/edit#'
	);
}
