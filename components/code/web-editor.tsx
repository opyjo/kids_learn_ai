"use client";

import { indentWithTab } from "@codemirror/commands";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import CodeMirror, { keymap } from "@uiw/react-codemirror";
import {
	CheckCircle2,
	Code2,
	History,
	MonitorPlay,
	RefreshCw,
	RotateCcw,
	ShieldCheck,
	X,
} from "lucide-react";
import { useDeferredValue, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePersistedWebProject } from "@/hooks/use-persisted-web-project";
import { cn } from "@/lib/utils";
import {
	buildWebPreviewDocument,
	normalizeWebProjectFiles,
	type WebProjectFileKey,
	type WebProjectFiles,
} from "@/lib/web-project";

interface WebEditorProps {
	initialFiles?: WebProjectFiles;
	storageKey?: string;
	onProjectChange?: (files: WebProjectFiles) => void;
	className?: string;
}

const FILE_LABELS: Record<WebProjectFileKey, string> = {
	html: "HTML",
	css: "CSS",
	javascript: "JavaScript",
};

export function WebEditor({
	initialFiles,
	storageKey,
	onProjectChange,
	className,
}: Readonly<WebEditorProps>) {
	const starterFiles = useMemo(
		() => normalizeWebProjectFiles(initialFiles),
		[initialFiles],
	);
	const { files, setFiles, wasRestored, clearSaved, dismissRestored } =
		usePersistedWebProject(storageKey, starterFiles);
	const [activeFile, setActiveFile] = useState<WebProjectFileKey>("html");
	const [previewVersion, setPreviewVersion] = useState(0);
	const deferredFiles = useDeferredValue(files);
	const previewDocument = useMemo(
		() => buildWebPreviewDocument(deferredFiles),
		[deferredFiles],
	);

	const extensions = useMemo(() => {
		const language =
			activeFile === "html"
				? html()
				: activeFile === "css"
					? css()
					: javascript();
		return [language, keymap.of([indentWithTab])];
	}, [activeFile]);

	const updateActiveFile = (value: string) => {
		const nextFiles = { ...files, [activeFile]: value };
		setFiles(nextFiles);
		onProjectChange?.(nextFiles);
	};

	const resetProject = () => {
		setFiles(starterFiles);
		clearSaved();
		onProjectChange?.(starterFiles);
		setPreviewVersion((version) => version + 1);
	};

	return (
		<Card
			className={cn(
				"flex flex-col gap-0 overflow-hidden rounded-xl py-0 ring-1 ring-border/70 shadow-sm",
				className,
			)}
		>
			<CardHeader className="border-b bg-card px-4 py-3">
				<div className="flex flex-wrap items-center justify-between gap-2">
					<div className="flex items-center gap-2">
						<span className="flex size-7 items-center justify-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
							<Code2 className="size-4" aria-hidden="true" />
						</span>
						<div>
							<p className="text-sm font-semibold tracking-tight">
								Web Creator
							</p>
							<p className="text-[11px] text-muted-foreground">
								Private preview · autosaves on this device
							</p>
						</div>
					</div>
					<div className="flex items-center gap-1.5">
						<Button
							type="button"
							variant="outline"
							size="sm"
							onClick={resetProject}
							className="h-8"
						>
							<RotateCcw aria-hidden="true" />
							Reset
						</Button>
						<Button
							type="button"
							variant="outline"
							size="sm"
							onClick={() => setPreviewVersion((version) => version + 1)}
							className="h-8"
						>
							<RefreshCw aria-hidden="true" />
							Refresh
						</Button>
					</div>
				</div>
			</CardHeader>

			{wasRestored ? (
				<div className="flex items-center gap-2 border-b border-amber-200 bg-amber-50 px-4 py-2 text-xs text-amber-900 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100">
					<History className="size-4 shrink-0" aria-hidden="true" />
					<span className="flex-1">Your saved project was restored.</span>
					<Button
						type="button"
						variant="ghost"
						size="icon"
						onClick={dismissRestored}
						className="size-7"
						aria-label="Dismiss restored project notice"
					>
						<X aria-hidden="true" />
					</Button>
				</div>
			) : null}

			<CardContent className="grid gap-0 p-0">
				<div className="border-b bg-muted/20 p-2">
					<Tabs
						value={activeFile}
						onValueChange={(value) => setActiveFile(value as WebProjectFileKey)}
					>
						<TabsList className="grid w-full grid-cols-3">
							{Object.entries(FILE_LABELS).map(([key, label]) => (
								<TabsTrigger key={key} value={key}>
									{label}
								</TabsTrigger>
							))}
						</TabsList>
					</Tabs>
				</div>

				<div role="group" aria-label={`${FILE_LABELS[activeFile]} code editor`}>
					<CodeMirror
						value={files[activeFile]}
						height="300px"
						extensions={extensions}
						theme={oneDark}
						onChange={updateActiveFile}
						basicSetup={{
							lineNumbers: true,
							foldGutter: true,
							highlightActiveLine: true,
							bracketMatching: true,
							autocompletion: true,
						}}
					/>
				</div>

				<div className="border-y bg-muted/30 px-3 py-2">
					<div className="flex flex-wrap items-center justify-between gap-2">
						<div className="flex items-center gap-2 text-sm font-semibold">
							<MonitorPlay
								className="size-4 text-emerald-600"
								aria-hidden="true"
							/>
							Live Preview
						</div>
						<div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
							<ShieldCheck
								className="size-3.5 text-emerald-600"
								aria-hidden="true"
							/>
							Network and publishing blocked
						</div>
					</div>
				</div>

				<div className="relative h-[320px] bg-white">
					<iframe
						key={previewVersion}
						title="Website live preview"
						sandbox="allow-scripts"
						referrerPolicy="no-referrer"
						srcDoc={previewDocument}
						className="size-full border-0 bg-white"
					/>
					<div className="pointer-events-none absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-emerald-600/90 px-2 py-1 text-[10px] font-medium text-white shadow-sm">
						<CheckCircle2 className="size-3" aria-hidden="true" />
						Safe preview
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
