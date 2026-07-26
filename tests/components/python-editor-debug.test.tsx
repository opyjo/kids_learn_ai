import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { PythonEditor } from "@/components/code/python-editor";

const editorMocks = vi.hoisted(() => ({
	runCode: vi.fn(),
	retry: vi.fn(),
	runShortcut: null as null | (() => boolean),
}));

vi.mock("@/hooks/use-pyodide", () => ({
	usePyodide: () => ({
		isReady: true,
		isLoading: false,
		error: null,
		runCode: editorMocks.runCode,
		retry: editorMocks.retry,
	}),
}));

vi.mock("@codemirror/commands", () => ({ indentWithTab: {} }));
vi.mock("@codemirror/lang-python", () => ({ python: () => ({}) }));
vi.mock("@codemirror/language", () => ({
	indentUnit: { of: () => ({}) },
}));
vi.mock("@codemirror/theme-one-dark", () => ({ oneDark: {} }));
vi.mock("@uiw/react-codemirror", () => ({
	default: ({
		value,
		onChange,
	}: {
		value: string;
		onChange: (value: string) => void;
	}) => (
		<textarea
			aria-label="Python code"
			value={value}
			onChange={(event) => onChange(event.target.value)}
		/>
	),
	keymap: {
		of: (bindings: { key: string; run: () => boolean }[]) => {
			const runBinding = bindings.find(
				(binding) => binding.key === "Mod-Enter",
			);
			if (runBinding) editorMocks.runShortcut = runBinding.run;
			return bindings;
		},
	},
	Prec: { highest: (extension: unknown) => extension },
}));

function deferred<T>() {
	let resolve!: (value: T) => void;
	let reject!: (reason: unknown) => void;
	const promise = new Promise<T>((resolvePromise, rejectPromise) => {
		resolve = resolvePromise;
		reject = rejectPromise;
	});
	return { promise, resolve, reject };
}

const NAME_ERROR =
	"Traceback (most recent call last):\n  File \"<exec>\", line 1, in <module>\nNameError: name 'score' is not defined";

describe("PythonEditor automatic debugging", () => {
	beforeEach(() => {
		editorMocks.runCode.mockReset();
		editorMocks.retry.mockReset();
		editorMocks.runShortcut = null;
	});

	it("explains the actual error and reveals only one guided hint at a time", async () => {
		const user = userEvent.setup();
		editorMocks.runCode.mockRejectedValueOnce(new Error(NAME_ERROR));
		render(<PythonEditor initialCode="print(score)" />);

		await user.click(screen.getByRole("button", { name: "Run code" }));

		const help = await screen.findByRole("region", {
			name: "BrightByte debugging help",
		});
		expect(help).toHaveTextContent(/could not find a value named “score”/i);
		expect(help).toHaveTextContent(/focus on line 1/i);
		expect(screen.getByRole("textbox", { name: "Python code" })).toHaveValue(
			"print(score)",
		);

		await user.click(screen.getByRole("button", { name: "Help me debug" }));
		expect(help).toHaveTextContent(/where “score” should get its first value/i);
		expect(help).not.toHaveTextContent(/case-sensitive/i);

		await user.click(screen.getByRole("button", { name: "Show another hint" }));
		expect(help).not.toHaveTextContent(/first value/i);
		expect(help).toHaveTextContent(/case-sensitive/i);
		expect(help).toHaveTextContent(/your code was not changed/i);
	});

	it("clears debugging guidance after a successful run", async () => {
		const user = userEvent.setup();
		editorMocks.runCode
			.mockRejectedValueOnce(new Error(NAME_ERROR))
			.mockResolvedValueOnce("Score: 5\n");
		render(<PythonEditor initialCode="print(score)" />);

		await user.click(screen.getByRole("button", { name: "Run code" }));
		expect(
			await screen.findByRole("region", {
				name: "BrightByte debugging help",
			}),
		).toBeInTheDocument();

		await user.click(screen.getByRole("button", { name: "Run code" }));
		expect(await screen.findByText("Score: 5")).toBeInTheDocument();
		expect(
			screen.queryByRole("region", { name: "BrightByte debugging help" }),
		).not.toBeInTheDocument();
	});

	it("keeps only the newest result when runs finish out of order", async () => {
		const first = deferred<string>();
		const second = deferred<string>();
		editorMocks.runCode
			.mockReturnValueOnce(first.promise)
			.mockReturnValueOnce(second.promise);
		render(<PythonEditor initialCode="print(score)" />);

		expect(editorMocks.runShortcut).not.toBeNull();
		act(() => {
			editorMocks.runShortcut?.();
			editorMocks.runShortcut?.();
		});
		expect(editorMocks.runCode).toHaveBeenCalledTimes(2);

		await act(async () => {
			second.resolve("Newest output\n");
			await second.promise;
		});
		expect(await screen.findByText("Newest output")).toBeInTheDocument();

		await act(async () => {
			first.reject(new Error(NAME_ERROR));
			try {
				await first.promise;
			} catch {
				// The editor handles the rejected run.
			}
		});
		await waitFor(() =>
			expect(screen.getByText("Newest output")).toBeInTheDocument(),
		);
		expect(
			screen.queryByRole("region", { name: "BrightByte debugging help" }),
		).not.toBeInTheDocument();
	});
});
