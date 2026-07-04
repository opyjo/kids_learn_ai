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
	const {
		isReady: pyodideReady,
		isLoading: pyodideLoading,
		error: pyodideError,
		runCode,
		retry: retryPyodide,
	} = usePyodide();

	const handleCodeChange = (newCode: string) => {
		setCode(newCode);
		onCodeChange?.(newCode);
	};

	const handleRunCode = async () => {
		if (!pyodideReady) {
			setOutput("Python environment is still loading...");
			return;
		}

		if (INPUT_CALL_PATTERN.test(code)) {
			setOutput(
				"Heads up: input() isn't supported in the browser editor.\n" +
					'Give your variables values directly (e.g. name = "Ada"), or run this program in Trinket or Thonny instead.',
			);
			setError("");
			setIsSuccess(false);
			return;
		}

		setIsRunning(true);
		setOutput("");
		setError("");
		setIsSuccess(false);

		try {
			const stdout = await runCode(code);
			setOutput(stdout || "Code executed successfully (no output)");
			setIsSuccess(true);
			onRunComplete?.(stdout || "Code executed successfully (no output)", true);
		} catch (err) {
			const errorMessage =
				err instanceof Error ? err.message : "Unknown error occurred";
			setOutput(`Error: ${errorMessage}`);
			setError(errorMessage);
			setIsSuccess(false);
			onRunComplete?.(errorMessage, false);
		} finally {
			setIsRunning(false);
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
		setCode(initialCode);
		clearSaved();
		setOutput("");
		setError("");
		setIsSuccess(false);
		onCodeChange?.(initialCode);
	};

	const handleClear = () => {
		setCode("");
		setOutput("");
		setError("");
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
						) : pyodideReady ? (
							<div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
						) : (
							<div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse" />
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
							disabled={isRunning || !pyodideReady}
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
						autocompletion: true,
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
			</CardContent>
		</Card>
	);
}
