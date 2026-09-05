"use client";

import { indentWithTab } from "@codemirror/commands";
import { python } from "@codemirror/lang-python";
import { indentUnit } from "@codemirror/language";
import { oneDark } from "@codemirror/theme-one-dark";
import CodeMirror, { keymap, Prec } from "@uiw/react-codemirror";
import {
	AlertCircle,
	CheckCircle,
	History,
	Lightbulb,
	Loader2,
	MessageSquare,
	Play,
	RotateCcw,
	Trash2,
	X,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { usePersistedCode } from "@/hooks/use-persisted-code";
import { usePyodide } from "@/hooks/use-pyodide";
import { buildPythonDebugInfo, type PythonDebugInfo } from "@/lib/python-debug";

interface PythonEditorProps {
	initialCode?: string;
	onCodeChange?: (code: string) => void;
	onRunComplete?: (output: string, isSuccess: boolean) => void;
	onAskAboutCode?: () => void;
	className?: string;
	/**
	 * When set, the student's code is persisted to localStorage under this key
	 * and restored on the next visit. Reset returns to the starter code and
	 * clears the saved copy.
	 */
	storageKey?: string;
}

const INPUT_CALL_PATTERN = /\binput\s*\(/;

/**
 * Remove Python comments and string literals so an input() that only
 * appears in a commented-out line (or inside a string) doesn't trigger
 * the "input() isn't supported" warning.
 */
function stripCommentsAndStrings(code: string): string {
	let result = "";
	let i = 0;
	while (i < code.length) {
		const ch = code[i];
		if (ch === "#") {
			while (i < code.length && code[i] !== "\n") i++;
			continue;
		}
		if (ch === '"' || ch === "'") {
			const triple = code.slice(i, i + 3) === ch.repeat(3);
			const delim = triple ? ch.repeat(3) : ch;
			i += delim.length;
			while (i < code.length) {
				if (code[i] === "\\") {
					i += 2;
					continue;
				}
				if (code.startsWith(delim, i)) {
					i += delim.length;
					break;
				}
				if (!triple && code[i] === "\n") break;
				i++;
			}
			result += " ";
			continue;
		}
		result += ch;
		i++;
	}
	return result;
}

function codeCallsInput(code: string): boolean {
	return INPUT_CALL_PATTERN.test(stripCommentsAndStrings(code));
}

export function PythonEditor({
	initialCode = "",
	onCodeChange,
	onRunComplete,
	onAskAboutCode,
	className,
	storageKey,
}: PythonEditorProps) {
	const { code, setCode, wasRestored, clearSaved, dismissRestored } =
		usePersistedCode(storageKey, initialCode);
	const [output, setOutput] = useState("");
	const [isRunning, setIsRunning] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState("");
	const [debugInfo, setDebugInfo] = useState<PythonDebugInfo | null>(null);
	const [hintIndex, setHintIndex] = useState(-1);
	const activeRunIdRef = useRef(0);
	const {
		isReady: pyodideReady,
		isLoading: pyodideLoading,
		error: pyodideError,
		runCode,
		retry: retryPyodide,
	} = usePyodide();

	const handleCodeChange = (newCode: string) => {
		activeRunIdRef.current += 1;
		setCode(newCode);
		setDebugInfo(null);
		setHintIndex(-1);
		setIsRunning(false);
		onCodeChange?.(newCode);
	};

	const handleRunCode = async () => {
		const submittedCode = code;
		const runId = activeRunIdRef.current + 1;
		activeRunIdRef.current = runId;

		if (codeCallsInput(submittedCode)) {
			setOutput(
				"Heads up: input() isn't supported in the browser editor.\n" +
					'Give your variables values directly (e.g. name = "Ada"), or run this program in Pickcode or Thonny instead.',
			);
			setError("");
			setDebugInfo(null);
			setHintIndex(-1);
			setIsRunning(false);
			setIsSuccess(false);
			return;
		}

		setIsRunning(true);
		setOutput("");
		setError("");
		setDebugInfo(null);
		setHintIndex(-1);
		setIsSuccess(false);

		try {
			const stdout = await runCode(submittedCode);
			if (activeRunIdRef.current !== runId) return;
			setOutput(stdout || "Code executed successfully (no output)");
			setIsSuccess(true);
			onRunComplete?.(stdout || "Code executed successfully (no output)", true);
		} catch (err) {
			if (activeRunIdRef.current !== runId) return;
			const debug = buildPythonDebugInfo(submittedCode, err);
			const errorMessage =
				err instanceof Error && err.message.trim()
					? err.message
					: "The Python runner returned an unclear error.";
			setOutput(`Error: ${errorMessage}`);
			setError(errorMessage);
			setDebugInfo(debug);
			setHintIndex(-1);
			setIsSuccess(false);
			onRunComplete?.(errorMessage, false);
		} finally {
			if (activeRunIdRef.current === runId) setIsRunning(false);
		}
	};

	// Keep the CodeMirror keymap stable across renders while always invoking
	// the latest run handler.
	const runRef = useRef(handleRunCode);
	runRef.current = handleRunCode;

	const extensions = useMemo(
		() => [
			python(),
			indentUnit.of("    "),
			Prec.highest(
				keymap.of([
					{
						key: "Mod-Enter",
						run: () => {
							runRef.current();
							return true;
						},
					},
				]),
			),
			// Tab indents; Esc then Tab moves focus (keyboard-trap escape hatch)
			keymap.of([indentWithTab]),
		],
		[],
	);

	const handleReset = () => {
		activeRunIdRef.current += 1;
		setCode(initialCode);
		clearSaved();
		setOutput("");
		setError("");
		setDebugInfo(null);
		setHintIndex(-1);
		setIsRunning(false);
		setIsSuccess(false);
		onCodeChange?.(initialCode);
	};

	const handleClear = () => {
		activeRunIdRef.current += 1;
		setCode("");
		setOutput("");
		setError("");
		setDebugInfo(null);
		setHintIndex(-1);
		setIsRunning(false);
		setIsSuccess(false);
		onCodeChange?.("");
	};

	return (
		<Card className={`flex flex-col ${className}`}>
			<CardHeader className="bg-card border-b shrink-0 px-4 py-2">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						{pyodideError ? (
							<div
								className="w-2.5 h-2.5 bg-red-500 rounded-full"
								title="Python failed to load"
							/>
						) : pyodideLoading ? (
							<div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse" />
						) : pyodideReady ? (
							<div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
						) : (
							<div
								className="w-2.5 h-2.5 bg-gray-400 rounded-full"
								title="Python loads when you run code"
							/>
						)}
						<span className="font-semibold tracking-tight text-sm">
							Python Code Editor
						</span>
						<span className="text-xs text-gray-500 hidden sm:inline">
							<kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[10px]">
								Ctrl+Enter
							</kbd>{" "}
							to run
						</span>
					</div>
					<div className="flex items-center gap-1.5">
						{onAskAboutCode && (
							<Button
								variant="outline"
								size="sm"
								onClick={onAskAboutCode}
								className="rounded-full border-primary/40 hover:bg-primary/10 hover:border-primary h-7 px-2 text-xs"
								disabled={!code.trim()}
							>
								<MessageSquare
									className="h-3.5 w-3.5 mr-1"
									aria-hidden="true"
								/>
								Ask BrightByte
							</Button>
						)}
						<Button
							variant="outline"
							size="sm"
							onClick={handleReset}
							className="rounded-full h-7 w-7 p-0"
							aria-label="Reset code"
						>
							<RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
						</Button>
						<Button
							variant="outline"
							size="sm"
							onClick={handleClear}
							className="rounded-full h-7 w-7 p-0"
							aria-label="Clear code"
							disabled={!code.trim()}
						>
							<Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
						</Button>
						<Button
							onClick={handleRunCode}
							disabled={isRunning || pyodideLoading}
							className="rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 hover:from-emerald-600 hover:to-lime-600 h-7 w-7 p-0"
							aria-label={isRunning ? "Running code" : "Run code"}
						>
							{isRunning ? (
								<Loader2
									className="h-3.5 w-3.5 animate-spin"
									aria-hidden="true"
								/>
							) : (
								<Play className="h-3.5 w-3.5" aria-hidden="true" />
							)}
						</Button>
					</div>
				</div>
			</CardHeader>

			<CardContent className="p-0 flex-1 flex flex-col overflow-y-auto min-h-0">
				{/* Restored-work hint */}
				{wasRestored && (
					<div className="flex items-center justify-between gap-2 bg-primary/10 px-4 py-1.5 text-xs text-foreground">
						<span className="flex items-center gap-1.5">
							<History
								className="h-3.5 w-3.5 text-primary"
								aria-hidden="true"
							/>
							Restored your saved work
						</span>
						<span className="flex items-center gap-2">
							<button
								type="button"
								onClick={handleReset}
								className="underline hover:text-primary"
							>
								Reset to start over
							</button>
							<button
								type="button"
								onClick={dismissRestored}
								aria-label="Dismiss"
								className="hover:text-primary"
							>
								<X className="h-3.5 w-3.5" aria-hidden="true" />
							</button>
						</span>
					</div>
				)}

				{/* Code Editor */}
				<CodeMirror
					value={code}
					onChange={handleCodeChange}
					extensions={extensions}
					theme={oneDark}
					minHeight="200px"
					placeholder="Write your Python code here..."
					basicSetup={{
						lineNumbers: true,
						highlightActiveLine: true,
						autocompletion: false,
						bracketMatching: true,
						closeBrackets: true,
						foldGutter: false,
					}}
					style={{ fontSize: "13px" }}
				/>

				<Separator />

				{/* Output */}
				<div className="bg-gray-950 text-green-400 font-mono text-sm flex-shrink-0">
					<div className="flex items-center justify-between p-3 border-b border-gray-800">
						<div className="flex items-center gap-2">
							<span className="text-gray-400">Output:</span>
							{isSuccess && (
								<CheckCircle
									className="h-4 w-4 text-green-400"
									aria-hidden="true"
								/>
							)}
							{error && (
								<AlertCircle
									className="h-4 w-4 text-red-400"
									aria-hidden="true"
								/>
							)}
						</div>
						{output && (
							<Button
								variant="ghost"
								size="sm"
								onClick={() => setOutput("")}
								className="text-gray-400 hover:text-white h-6 px-2 rounded-full"
							>
								Clear
							</Button>
						)}
					</div>
					<div className="p-4 min-h-[60px] max-h-[300px] overflow-auto">
						{output ? (
							<pre className="whitespace-pre-wrap text-sm">
								{error ? (
									<span className="text-red-400">{output}</span>
								) : (
									<span className="text-green-400">{output}</span>
								)}
							</pre>
						) : pyodideError ? (
							<div className="space-y-2 not-italic">
								<p className="text-red-400">
									We couldn't load the Python engine. This can happen on slow or
									restricted networks (like school wifi).
								</p>
								<Button
									variant="outline"
									size="sm"
									onClick={retryPyodide}
									className="rounded-full h-7 px-3 text-xs"
								>
									<RotateCcw className="h-3.5 w-3.5 mr-1" aria-hidden="true" />
									Try again
								</Button>
							</div>
						) : pyodideLoading ? (
							<span className="flex items-center gap-2 text-gray-500 italic">
								<Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
								Warming up the Python engine… first load can take ~10 seconds
							</span>
						) : (
							<span className="text-gray-500 italic">
								Click 'Run Code' to see the output here...
							</span>
						)}
					</div>
				</div>

				{debugInfo && (
					<section
						aria-label="BrightByte debugging help"
						className="border-t border-amber-200 bg-amber-50 p-4 text-amber-950 dark:border-amber-900/70 dark:bg-amber-950/40 dark:text-amber-100"
					>
						<div className="flex items-start gap-3">
							<div
								className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-200 dark:bg-amber-900"
								aria-hidden="true"
							>
								🐞
							</div>
							<div className="min-w-0 flex-1 space-y-2">
								<div>
									<p className="font-semibold">BrightByte spotted a clue</p>
									<p className="text-sm">
										{debugInfo.explanation}{" "}
										{debugInfo.lineNumber && (
											<span className="font-medium">
												Focus on line {debugInfo.lineNumber}.
											</span>
										)}
									</p>
								</div>

								{hintIndex >= 0 && debugInfo.hints[hintIndex] && (
									<div
										aria-live="polite"
										className="rounded-lg border border-amber-300 bg-white/70 p-3 text-sm dark:border-amber-800 dark:bg-black/20"
									>
										<p className="flex items-start gap-2">
											<Lightbulb
												className="mt-0.5 h-4 w-4 shrink-0"
												aria-hidden="true"
											/>
											<span>{debugInfo.hints[hintIndex]}</span>
										</p>
										<p className="mt-1 text-xs text-amber-800 dark:text-amber-300">
											Try one change, then run your code again. Your code was
											not changed.
										</p>
									</div>
								)}

								{hintIndex < debugInfo.hints.length - 1 && (
									<Button
										type="button"
										variant="outline"
										size="sm"
										onClick={() => setHintIndex((current) => current + 1)}
										className="rounded-full border-amber-400 bg-white/70 text-amber-950 hover:bg-amber-100 dark:border-amber-700 dark:bg-black/20 dark:text-amber-100"
									>
										<Lightbulb className="h-3.5 w-3.5" aria-hidden="true" />
										{hintIndex < 0 ? "Help me debug" : "Show another hint"}
									</Button>
								)}
							</div>
						</div>
					</section>
				)}
			</CardContent>
		</Card>
	);
}
