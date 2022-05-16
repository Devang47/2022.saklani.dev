import { get, writable } from 'svelte/store';
import { animate } from 'motion';

export const observer = writable<IntersectionObserver>();

export const setItemActive = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			animate(
				entry.target,
				{
					opacity: 1
				},
				{
					duration: 0.4,
					easing: 'ease-in-out'
				}
			);
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
