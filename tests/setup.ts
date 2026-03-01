import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach } from "vitest";

class ResizeObserverMock {
	observe() {}
	unobserve() {}
	disconnect() {}
}

// Radix ScrollArea relies on ResizeObserver, which jsdom does not provide.
if (typeof window !== "undefined" && !window.ResizeObserver) {
	window.ResizeObserver = ResizeObserverMock as typeof ResizeObserver;
}

if (typeof window !== "undefined" && !window.matchMedia) {
	window.matchMedia = ((query: string) => ({
		matches: false,
		media: query,
		onchange: null,
		addEventListener: () => {},
		removeEventListener: () => {},
		addListener: () => {},
		removeListener: () => {},
		dispatchEvent: () => false,
	})) as typeof window.matchMedia;
}

// Suppress act() warnings from react-hook-form
const originalError = console.error;
beforeEach(() => {
	console.error = (...args: unknown[]) => {
		if (
			typeof args[0] === "string" &&
			args[0].includes("not wrapped in act(...)")
		) {
			return;
		}
		originalError.call(console, ...args);
	};
});

afterEach(() => {
	console.error = originalError;
	cleanup();
});
