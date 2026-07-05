"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const KEY_PREFIX = "kla:code:v1:";

/**
 * Code state with optional localStorage persistence. When `storageKey` is
 * undefined, behaves like plain useState (nothing is saved).
 *
 * Restore happens in an effect so server render and first client render
 * match (hydration-safe). Saves are debounced. All storage access is
 * try/catch'd: quota errors and private-mode restrictions degrade to
 * non-persistent editing instead of crashing.
 */
export function usePersistedCode(
	storageKey: string | undefined,
	initialCode: string,
) {
	const [code, setCodeState] = useState(initialCode);
	const [wasRestored, setWasRestored] = useState(false);
	const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const fullKey = storageKey ? `${KEY_PREFIX}${storageKey}` : null;

	// biome-ignore lint/correctness/useExhaustiveDependencies: restore once per storage key; initialCode is only a comparison baseline
	useEffect(() => {
		if (!fullKey) return;
		try {
			const saved = localStorage.getItem(fullKey);
			if (saved !== null && saved !== initialCode) {
				setCodeState(saved);
				setWasRestored(true);
			}
		} catch {
			// storage unavailable — keep initial code
		}
	}, [fullKey]);

	useEffect(() => {
		return () => {
			if (debounceRef.current) clearTimeout(debounceRef.current);
		};
	}, []);

	const setCode = useCallback(
		(newCode: string) => {
			setCodeState(newCode);
			if (!fullKey) return;
			if (debounceRef.current) clearTimeout(debounceRef.current);
			debounceRef.current = setTimeout(() => {
				try {
					localStorage.setItem(fullKey, newCode);
				} catch {
					// quota exceeded / private mode — silently skip saving
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
				// ignore
			}
		}
		if (debounceRef.current) clearTimeout(debounceRef.current);
		setWasRestored(false);
	}, [fullKey]);

	const dismissRestored = useCallback(() => setWasRestored(false), []);

	return { code, setCode, wasRestored, clearSaved, dismissRestored };
}
