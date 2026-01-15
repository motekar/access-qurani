import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';

export function localStore<T>(key: string, initialValue: T): Writable<T> {
	const storedValue = browser ? localStorage.getItem(key) : JSON.stringify(initialValue);
	const initial = storedValue ? (JSON.parse(storedValue) as T) : initialValue;

	let internalStore: Writable<T>;

	internalStore = writable<T>(initial, () => {
		const unsubscribe = internalStore.subscribe((value: T) => {
			if (browser) {
				localStorage.setItem(key, JSON.stringify(value));
			}
		});
		return unsubscribe;
	});

	return internalStore;
}
