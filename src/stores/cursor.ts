import { get, writable } from 'svelte/store';
import { animate } from 'motion';

export const observer = writable<IntersectionObserver>();

export const setItemActive = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible-animate');
		}
	});
};

const getObserver = () => {
	if (get(observer)) {
		return get(observer);
	}

	observer.set(
		new IntersectionObserver(setItemActive, {
			rootMargin: '0px',
			threshold: 0.15
		})
	);

	return get(observer);
};

export const addObserver = (elem) => {
	getObserver().observe(elem);
};
