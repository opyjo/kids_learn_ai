"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Hook to manage Pyodide (Python in the browser) initialization and execution.
 */
export function usePyodide() {
    const [isReady, setIsReady] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const pyodideRef = useRef<any>(null);

    useEffect(() => {
        let mounted = true;

        const initPyodide = async () => {
            if (typeof window === "undefined") return;

            // Check if already loaded
            if ((window as any).loadPyodide && pyodideRef.current) {
                setIsReady(true);
                setIsLoading(false);
                return;
            }

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

                if (!mounted) return;

                // 2. Initialize Pyodide
                const { loadPyodide } = window as any;
                const pyodide = await loadPyodide({
                    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/",
                });

                if (!mounted) return;

                pyodideRef.current = pyodide;
                setIsReady(true);
                setIsLoading(false);
            } catch (err) {
                console.error("Pyodide initialization failed:", err);
                if (mounted) {
                    setError("Failed to load Python environment");
                    setIsLoading(false);
                }
            }
        };

        initPyodide();

        return () => {
            mounted = false;
        };
    }, []);

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
    };
}
