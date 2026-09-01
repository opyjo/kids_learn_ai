"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
	normalizeWebProjectFiles,
	type WebProjectFiles,
} from "@/lib/web-project";

const KEY_PREFIX = "kla:web-project:v1:";

export function usePersistedWebProject(
	storageKey: string | undefined,
	initialFiles: WebProjectFiles,
) {
	const [files, setFilesState] = useState(() =>
		normalizeWebProjectFiles(initialFiles),
	);
	const [wasRestored, setWasRestored] = useState(false);
	const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const fullKey = storageKey ? `${KEY_PREFIX}${storageKey}` : null;

	// biome-ignore lint/correctness/useExhaustiveDependencies: restore once per storage key; initial files are the reset baseline
	useEffect(() => {
		if (!fullKey) return;
		try {
			const saved = localStorage.getItem(fullKey);
			if (!saved) return;
			const restored = normalizeWebProjectFiles(JSON.parse(saved));
			if (JSON.stringify(restored) !== JSON.stringify(initialFiles)) {
				setFilesState(restored);
				setWasRestored(true);
			}
		} catch {
			// Invalid or unavailable storage falls back to the lesson starter files.
		}
	}, [fullKey]);

	useEffect(() => {
		return () => {
			if (debounceRef.current) clearTimeout(debounceRef.current);
		};
	}, []);

	const setFiles = useCallback(
		(nextFiles: WebProjectFiles) => {
			const normalized = normalizeWebProjectFiles(nextFiles);
			setFilesState(normalized);
			if (!fullKey) return;
			if (debounceRef.current) clearTimeout(debounceRef.current);
			debounceRef.current = setTimeout(() => {
				try {
					localStorage.setItem(fullKey, JSON.stringify(normalized));
				} catch {
					// Storage restrictions should never prevent a learner from coding.
				}
			}, 500);
		},
		[fullKey],
	);

	const clearSaved = useCallback(() => {
		if (fullKey) {
			try {
				localStorage.removeItem(fullKey);
			} catch {
				// Ignore storage restrictions.
			}
		}
		if (debounceRef.current) clearTimeout(debounceRef.current);
		setWasRestored(false);
	}, [fullKey]);

	const dismissRestored = useCallback(() => setWasRestored(false), []);

	return { files, setFiles, wasRestored, clearSaved, dismissRestored };
}
