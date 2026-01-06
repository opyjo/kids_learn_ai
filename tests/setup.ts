import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach } from "vitest";

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
