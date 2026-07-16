import { act, renderHook, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

describe("usePyodide", () => {
	beforeEach(() => {
		vi.resetModules();
		delete window.loadPyodide;
	});

	afterEach(() => {
		delete window.loadPyodide;
	});

	it("does not load Python when an editor mounts", async () => {
		const loadPyodide = vi.fn();
		window.loadPyodide = loadPyodide;
		const { usePyodide } = await import("@/hooks/use-pyodide");

		const { result } = renderHook(() => usePyodide());

		expect(loadPyodide).not.toHaveBeenCalled();
		expect(result.current.isLoading).toBe(false);
		expect(result.current.isReady).toBe(false);
	});

	it("loads one shared runtime when multiple editors run code", async () => {
		const runtime = {
			runPythonAsync: vi
				.fn()
				.mockResolvedValueOnce(undefined)
				.mockResolvedValueOnce(undefined)
				.mockResolvedValueOnce("first")
				.mockResolvedValueOnce(undefined)
				.mockResolvedValueOnce(undefined)
				.mockResolvedValueOnce("second"),
		};
		const loadPyodide = vi.fn().mockResolvedValue(runtime);
		window.loadPyodide = loadPyodide;
		const { usePyodide } = await import("@/hooks/use-pyodide");
		const first = renderHook(() => usePyodide());
		const second = renderHook(() => usePyodide());

		let firstOutput = "";
		await act(async () => {
			firstOutput = await first.result.current.runCode("print('first')");
		});
		let secondOutput = "";
		await act(async () => {
			secondOutput = await second.result.current.runCode("print('second')");
		});

		expect(firstOutput).toBe("first");
		expect(secondOutput).toBe("second");
		expect(loadPyodide).toHaveBeenCalledTimes(1);
		await waitFor(() => expect(first.result.current.isReady).toBe(true));
		await waitFor(() => expect(second.result.current.isReady).toBe(true));
	});
});
