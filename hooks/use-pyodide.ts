"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Hook to manage Pyodide (Python in the browser) initialization and execution.
 */
export function usePyodide() {
    const [isReady, setIsReady] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const pyodideRef = useRef<any>(null);
    const mountedRef = useRef(true);

    const initPyodide = useCallback(async () => {
        if (typeof window === "undefined") return;

        // Check if already loaded
        if ((window as any).loadPyodide && pyodideRef.current) {
            setIsReady(true);
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            // 1. Add Pyodide script
            if (!(window as any).loadPyodide) {
                const script = document.createElement("script");
                script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js";
                script.async = true;

                const loadPromise = new Promise((resolve, reject) => {
                    script.onload = resolve;
                    script.onerror = reject;
                });

                document.head.appendChild(script);
                await loadPromise;
            }

            if (!mountedRef.current) return;

            // 2. Initialize Pyodide
            const { loadPyodide } = window as any;
            const pyodide = await loadPyodide({
                indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/",
            });

            if (!mountedRef.current) return;

            pyodideRef.current = pyodide;
            setIsReady(true);
            setIsLoading(false);
        } catch (err) {
            console.error("Pyodide initialization failed:", err);
            if (mountedRef.current) {
                setError("Failed to load Python environment");
                setIsLoading(false);
            }
        }
    }, []);

    useEffect(() => {
        mountedRef.current = true;
        initPyodide();

        return () => {
            mountedRef.current = false;
        };
    }, [initPyodide]);

    /**
     * Retries initialization after a failure (e.g. CDN blocked/offline).
     */
    const retry = useCallback(() => {
        initPyodide();
    }, [initPyodide]);

    /**
     * Runs Python code and returns the captured stdout.
     */
    const runCode = useCallback(async (code: string) => {
        if (!pyodideRef.current || !isReady) {
            throw new Error("Python environment is not ready");
        }

        try {
            // Redirect stdout to a StringIO object
            await pyodideRef.current.runPythonAsync(`
        import sys
        from io import StringIO
        sys.stdout = StringIO()
      `);

            // Execute user code
            await pyodideRef.current.runPythonAsync(code);

            // Extract stdout content
            const stdout = await pyodideRef.current.runPythonAsync("sys.stdout.getvalue()");
            return stdout as string;
        } catch (err: any) {
            // Format Python error messages for better readability
            const message = err.message || String(err);
            throw new Error(message);
        }
    }, [isReady]);

    return {
        isReady,
        isLoading,
        error,
        runCode,
        retry,
    };
}
