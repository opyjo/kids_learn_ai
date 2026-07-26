import { describe, expect, it } from "vitest";
import {
	buildPythonDebugInfo,
	normalizePythonRuntimeError,
} from "@/lib/python-debug";

describe("buildPythonDebugInfo", () => {
	it.each([
		{
			label: "syntax",
			code: "if ready\n    print('go')",
			error:
				"  File \"<exec>\", line 1\n    if ready\n            ^\nSyntaxError: expected ':'",
			kind: "syntax",
			type: "SyntaxError",
			line: 1,
			explanation: /expected a colon/i,
		},
		{
			label: "name",
			code: "print(score)",
			error:
				"Traceback (most recent call last):\n  File \"<exec>\", line 1, in <module>\nNameError: name 'score' is not defined",
			kind: "name",
			type: "NameError",
			line: 1,
			explanation: /score/i,
		},
		{
			label: "type",
			code: 'print("Score: " + 5)',
			error:
				'Traceback (most recent call last):\n  File "<exec>", line 1, in <module>\nTypeError: can only concatenate str (not "int") to str',
			kind: "type",
			type: "TypeError",
			line: 1,
			explanation: /kind of value/i,
		},
		{
			label: "indentation",
			code: "if True:\nprint('go')",
			error:
				"  File \"<exec>\", line 2\n    print('go')\n    ^\nIndentationError: expected an indented block after 'if' statement on line 1",
			kind: "indentation",
			type: "IndentationError",
			line: 2,
			explanation: /spaces/i,
		},
		{
			label: "runtime",
			code: "print(10 / 0)",
			error:
				'Traceback (most recent call last):\n  File "<exec>", line 1, in <module>\nZeroDivisionError: division by zero',
			kind: "runtime",
			type: "ZeroDivisionError",
			line: 1,
			explanation: /divide by zero/i,
		},
	])("creates grounded, child-friendly guidance for a $label error", ({
		code,
		error,
		kind,
		type,
		line,
		explanation,
	}) => {
		const result = buildPythonDebugInfo(code, new Error(error));

		expect(result).toMatchObject({
			kind,
			errorType: type,
			lineNumber: line,
		});
		expect(result.explanation).toMatch(explanation);
		expect(result.hints.length).toBeGreaterThan(0);
		expect(result.hints.every((hint) => hint.length < 220)).toBe(true);
	});

	it("uses a safe fallback for malformed runtime errors", () => {
		const result = buildPythonDebugInfo("print('hello')", {
			unexpected: "response",
		});

		expect(result).toMatchObject({
			kind: "unknown",
			errorType: "Unclear Python error",
			lineNumber: null,
		});
		expect(result.explanation).toMatch(/did not provide a clear/i);
	});

	it("does not blame the child's code when the runtime is unavailable", () => {
		const result = buildPythonDebugInfo(
			"print('hello')",
			"Failed to download the Python environment",
		);

		expect(result).toMatchObject({
			kind: "unavailable",
			errorType: "Runner unavailable",
			lineNumber: null,
		});
		expect(result.explanation).toMatch(/does not mean your code is wrong/i);
	});
});

describe("normalizePythonRuntimeError", () => {
	it("bounds runtime messages and handles non-error values", () => {
		expect(
			normalizePythonRuntimeError({ message: "  TypeError: nope  " }),
		).toBe("TypeError: nope");
		expect(normalizePythonRuntimeError({ nope: true })).toMatch(
			/unclear error/i,
		);
		expect(normalizePythonRuntimeError("x".repeat(5000))).toHaveLength(4000);
	});
});
