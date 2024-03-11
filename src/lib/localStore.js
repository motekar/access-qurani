import { browser } from '$app/environment';
import { writable } from 'svelte/store';

/**
 *
 * @param {string} key
 * @param {any} initialValue
 * @returns {import('svelte/store').Writable<any>}
 */
export function localStore(key, initialValue) {
	const storedValue = browser ? localStorage.getItem(key) : JSON.stringify(initialValue);
	const initial = storedValue ? JSON.parse(storedValue) : initialValue;

	// @ts-expect-error any
	const store = writable(initial, () => {
		// @ts-expect-error any
		const unsubscribe = store.subscribe((value) => {
			browser && localStorage.setItem(key, JSON.stringify(value));
		});
		return unsubscribe;
	});

	return store;
}
