export type PythonDebugKind =
	| "syntax"
	| "name"
	| "type"
	| "indentation"
	| "runtime"
	| "unavailable"
	| "unknown";

export interface PythonDebugInfo {
	kind: PythonDebugKind;
	errorType: string;
	lineNumber: number | null;
	explanation: string;
	hints: string[];
}

const FALLBACK_ERROR_MESSAGE = "The Python runner returned an unclear error.";
const MAX_ERROR_MESSAGE_LENGTH = 4000;

function cleanErrorMessage(value: string): string {
	const cleaned = value.trim().slice(0, MAX_ERROR_MESSAGE_LENGTH);
	return cleaned && cleaned !== "[object Object]"
		? cleaned
		: FALLBACK_ERROR_MESSAGE;
}

/** Convert browser/runtime failures to a bounded message without serializing data. */
export function normalizePythonRuntimeError(error: unknown): string {
	if (error instanceof Error) return cleanErrorMessage(error.message);
	if (typeof error === "string") return cleanErrorMessage(error);

	if (
		error &&
		typeof error === "object" &&
		"message" in error &&
		typeof error.message === "string"
	) {
		return cleanErrorMessage(error.message);
	}

	return FALLBACK_ERROR_MESSAGE;
}

function getSubmittedCodeLine(code: string, lineNumber: number | null): string {
	if (!lineNumber || lineNumber < 1) return "";
	return code.split(/\r?\n/)[lineNumber - 1]?.trim() ?? "";
}

function getLineNumber(message: string): number | null {
	const submittedFramePattern = /File ["'](?:<exec>|<string>)["'], line (\d+)/g;
	let submittedLine: number | null = null;
	for (const match of message.matchAll(submittedFramePattern)) {
		const parsed = Number(match[1]);
		if (Number.isSafeInteger(parsed) && parsed > 0) submittedLine = parsed;
	}
	return submittedLine;
}

function getErrorDetails(message: string): {
	errorType: string;
	detail: string;
} {
	const matches = [
		...message.matchAll(
			/(?:^|\n)([A-Za-z_][\w.]*(?:Error|Exception)):\s*([^\n]*)/g,
		),
	];
	const match = matches.at(-1);
	return {
		errorType: match?.[1] ?? "Python error",
		detail: match?.[2]?.trim() ?? "",
	};
}

function locationText(lineNumber: number | null): string {
	return lineNumber ? ` near line ${lineNumber}` : "";
}

function syntaxGuidance(
	detail: string,
	lineNumber: number | null,
): Pick<PythonDebugInfo, "explanation" | "hints"> {
	const location = locationText(lineNumber);
	if (/never closed|unterminated/i.test(detail)) {
		return {
			explanation: `Python found an opening quote or bracket that was not closed${location}.`,
			hints: [
				`Check the brackets and quotes${location}; each opening one needs a matching closing one.`,
				"Look at the line just before the marker too—Python sometimes notices the problem one line late.",
			],
		};
	}
	if (/expected ':'/i.test(detail)) {
		return {
			explanation: `Python expected a colon${location} before the next block of code.`,
			hints: [
				`Check the end of the statement${location}. Blocks such as if, for, while, and def end with a colon.`,
				"After the colon, make sure the code inside the block is indented.",
			],
		};
	}
	return {
		explanation: `Python could not understand the code${location}. A small punctuation or word-order mistake is likely nearby.`,
		hints: [
			`Read the line${lineNumber ? ` ${lineNumber}` : ""} slowly and check its quotes, brackets, and colons.`,
			"Also check the line just above it—an unfinished statement can make the next line look wrong.",
		],
	};
}

function indentationGuidance(
	lineNumber: number | null,
): Pick<PythonDebugInfo, "explanation" | "hints"> {
	const location = locationText(lineNumber);
	return {
		explanation: `Python found spaces at the start of a line that do not match the code block${location}.`,
		hints: [
			`Compare the spaces${location} with the lines around it. Code inside the same block should line up.`,
			"Use one consistent indent level (the editor uses four spaces) after if, for, while, and def lines.",
		],
	};
}

function nameGuidance(
	detail: string,
	lineNumber: number | null,
): Pick<PythonDebugInfo, "explanation" | "hints"> {
	const missingName = detail.match(
		/name ['"]([A-Za-z_]\w*)['"] is not defined/i,
	)?.[1];
	const location = locationText(lineNumber);
	return {
		explanation: missingName
			? `Python could not find a value named “${missingName}”${location}.`
			: `Python could not find one of the names used${location}.`,
		hints: [
			missingName
				? `Find where “${missingName}” should get its first value, then check that its spelling matches exactly.`
				: `Check that each name${location} was given a value before it was used.`,
			"Python names are case-sensitive, so score and Score count as different names.",
		],
	};
}

function typeGuidance(
	lineNumber: number | null,
): Pick<PythonDebugInfo, "explanation" | "hints"> {
	const location = locationText(lineNumber);
	return {
		explanation: `Python received a kind of value that the operation could not use${location}.`,
		hints: [
			`Check what kind of value each name holds${location} (for example, text, a number, or a list).`,
			"Try printing type(your_value) for one value at a time to find which kind does not match.",
		],
	};
}

function runtimeGuidance(
	errorType: string,
	lineNumber: number | null,
): Pick<PythonDebugInfo, "explanation" | "hints"> {
	const location = locationText(lineNumber);
	const guidance: Record<
		string,
		Pick<PythonDebugInfo, "explanation" | "hints">
	> = {
		ZeroDivisionError: {
			explanation: `Python tried to divide by zero${location}, which is not possible.`,
			hints: [
				`Find the value used after the division sign${location} and work out when it becomes zero.`,
				"Think about a small check that could handle zero before the division happens.",
			],
		},
		IndexError: {
			explanation: `Python tried to use a position that is outside a list or string${location}.`,
			hints: [
				`Compare the position used${location} with the number of items. Python starts counting positions at 0.`,
				"Print len(your_list) and the position to see which one is too large or too small.",
			],
		},
		KeyError: {
			explanation: `Python looked for a dictionary key that is not there${location}.`,
			hints: [
				`Check the key's spelling${location} and compare it with the dictionary's keys.`,
				"Print your_dictionary.keys() to see the keys that are available.",
			],
		},
		ValueError: {
			explanation: `Python received a value it could not use for that operation${location}.`,
			hints: [
				`Inspect the value being converted or used${location}; its contents may not match what the operation expects.`,
				"Print the value just before the failing line so you can see what Python received.",
			],
		},
		AttributeError: {
			explanation: `Python looked for an action or property that this value does not have${location}.`,
			hints: [
				`Check the value before the dot${location}, then check the spelling of the name after the dot.`,
				"Try printing type(the_value) to learn which actions that kind of value supports.",
			],
		},
	};

	return (
		guidance[errorType] ?? {
			explanation: `Python stopped with ${errorType}${location}. The last line of the error names what went wrong.`,
			hints: [
				`Start at the reported line${lineNumber ? ` ${lineNumber}` : ""} and trace the values used there.`,
				"Add one small print just before that line to check the value you expected.",
			],
		}
	);
}

/**
 * Build bounded, deterministic guidance from the submitted code and Pyodide
 * traceback. This runs locally and never sends a child's code anywhere.
 */
export function buildPythonDebugInfo(
	submittedCode: string,
	runtimeError: unknown,
): PythonDebugInfo {
	const message = normalizePythonRuntimeError(runtimeError);
	const unavailable =
		/failed to (?:download|load)|python environment|loadpyodide|networkerror|webassembly|failed to fetch/i.test(
			message,
		);

	if (unavailable) {
		return {
			kind: "unavailable",
			errorType: "Runner unavailable",
			lineNumber: null,
			explanation:
				"The Python runner did not start, so this does not mean your code is wrong.",
			hints: [
				"Check your connection, then use Try again and run the same code once more.",
			],
		};
	}

	const lineNumber = getLineNumber(message);
	const { errorType, detail } = getErrorDetails(message);
	const submittedLine = getSubmittedCodeLine(submittedCode, lineNumber);
	const malformed =
		message === FALLBACK_ERROR_MESSAGE || errorType === "Python error";

	if (malformed) {
		return {
			kind: "unknown",
			errorType: "Unclear Python error",
			lineNumber,
			explanation:
				"Python stopped, but the runner did not provide a clear error description.",
			hints: [
				submittedLine
					? `Start with the reported line ${lineNumber} and check the values used there.`
					: "Run the code once more. If it repeats, check the last line you changed.",
				"Add one small print before the suspected line to see how far the program gets.",
			],
		};
	}

	if (errorType === "IndentationError" || errorType === "TabError") {
		return {
			kind: "indentation",
			errorType,
			lineNumber,
			...indentationGuidance(lineNumber),
		};
	}
	if (errorType === "SyntaxError") {
		return {
			kind: "syntax",
			errorType,
			lineNumber,
			...syntaxGuidance(detail, lineNumber),
		};
	}
	if (errorType === "NameError" || errorType === "UnboundLocalError") {
		return {
			kind: "name",
			errorType,
			lineNumber,
			...nameGuidance(detail, lineNumber),
		};
	}
	if (errorType === "TypeError") {
		return {
			kind: "type",
			errorType,
			lineNumber,
			...typeGuidance(lineNumber),
		};
	}

	return {
		kind: "runtime",
		errorType,
		lineNumber,
		...runtimeGuidance(errorType, lineNumber),
	};
}
