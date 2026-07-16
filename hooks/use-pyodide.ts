"use client";

import { useCallback, useRef, useState } from "react";

const PYODIDE_BASE_URL = "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/";

interface PyodideRuntime {
	runPythonAsync: (code: string) => Promise<unknown>;
}

declare global {
	interface Window {
		loadPyodide?: (options: { indexURL: string }) => Promise<PyodideRuntime>;
	}
}

let sharedRuntime: PyodideRuntime | null = null;
let sharedLoadPromise: Promise<PyodideRuntime> | null = null;

function loadPyodideScript(): Promise<void> {
	if (window.loadPyodide) return Promise.resolve();

	const src = `${PYODIDE_BASE_URL}pyodide.js`;
	const existingScript = document.querySelector<HTMLScriptElement>(
		`script[src="${src}"]`,
	);

	return new Promise((resolve, reject) => {
		const script = existingScript ?? document.createElement("script");
		script.addEventListener("load", () => resolve(), { once: true });
		script.addEventListener(
			"error",
			() => reject(new Error("Failed to download the Python environment")),
			{ once: true },
		);

		if (!existingScript) {
			script.src = src;
			script.async = true;
			document.head.appendChild(script);
		}
	});
}

async function getSharedRuntime(): Promise<PyodideRuntime> {
	if (sharedRuntime) return sharedRuntime;
	if (sharedLoadPromise) return sharedLoadPromise;

	sharedLoadPromise = (async () => {
		await loadPyodideScript();
		if (!window.loadPyodide) {
			throw new Error("Python environment loaded incorrectly");
		}

		const runtime = await window.loadPyodide({ indexURL: PYODIDE_BASE_URL });
		sharedRuntime = runtime;
		return runtime;
	})().catch((error) => {
		sharedLoadPromise = null;
		throw error;
	});

	return sharedLoadPromise;
}

/** Manage lazy, shared Pyodide initialization and Python execution. */
export function usePyodide() {
	const [isReady, setIsReady] = useState(sharedRuntime !== null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const runtimeRef = useRef<PyodideRuntime | null>(sharedRuntime);

	const initialize = useCallback(async () => {
		if (runtimeRef.current) return runtimeRef.current;

		setIsLoading(true);
		setError(null);
		try {
			const runtime = await getSharedRuntime();
			runtimeRef.current = runtime;
			setIsReady(true);
			return runtime;
		} catch (err) {
			console.error("Pyodide initialization failed:", err);
			setError("Failed to load Python environment");
			throw err;
		} finally {
			setIsLoading(false);
		}
	}, []);

	const retry = useCallback(async () => {
		try {
			await initialize();
		} catch {
			// The error state is displayed by the editor.
		}
	}, [initialize]);

	const runCode = useCallback(
		async (code: string) => {
			const runtime = await initialize();
			try {
				await runtime.runPythonAsync(`
        import sys
        from io import StringIO
        sys.stdout = StringIO()
      `);
				await runtime.runPythonAsync(code);
				return (await runtime.runPythonAsync("sys.stdout.getvalue()")) as string;
			} catch (err) {
				const message = err instanceof Error ? err.message : String(err);
				throw new Error(message);
			}
		},
		[initialize],
	);

	return { isReady, isLoading, error, runCode, retry };
}
