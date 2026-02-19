/// <reference types="astro/client" />
/// <reference types="astro/astro-jsx" />

declare global {
	interface Window {
		_hors: [string, string][];
	}
}

export {};
