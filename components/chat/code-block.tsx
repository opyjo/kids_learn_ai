"use client";

import { Check, Copy } from "lucide-react";
import { useTheme } from "next-themes";
import { memo, useState } from "react";
import python from "react-syntax-highlighter/dist/esm/languages/hljs/python";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/light";
import atomOneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";
import atomOneLight from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light";

// Register only the languages we need
SyntaxHighlighter.registerLanguage("python", python);

interface CodeBlockProps {
	code: string;
	language?: string | null;
}

export const CodeBlock = memo(({ code, language }: CodeBlockProps) => {
	const [copied, setCopied] = useState(false);
	const { theme } = useTheme();

	const normalizedLanguage =
		language?.trim().toLowerCase() === "python"
			? "python"
			: language?.trim().toLowerCase() || "python";

	const handleCopy = () => {
		navigator.clipboard.writeText(code);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="relative my-2 overflow-hidden rounded-lg border border-border/70 bg-muted/10">
			<div className="absolute right-3 top-3 z-10">
				<button
					onClick={handleCopy}
					aria-label={copied ? "Copied to clipboard" : "Copy code"}
					className="flex cursor-pointer items-center gap-1 rounded-md border border-border/50 bg-background px-1.5 py-0.5 text-[10px] font-medium transition-colors hover:bg-muted"
				>
					{copied ? (
						<>
							<Check className="h-3 w-3 text-green-600" />
							<span className="text-green-600">Copied!</span>
						</>
					) : (
						<>
							<Copy className="h-3 w-3" />
							<span>Copy</span>
						</>
					)}
				</button>
			</div>
			<SyntaxHighlighter
				language={normalizedLanguage}
				style={(theme === "dark" ? atomOneDark : atomOneLight) as any}
				customStyle={{
					margin: 0,
					padding: "0.75rem",
					paddingRight: "4.75rem",
					fontSize: "12px",
					lineHeight: "1.55",
					background: theme === "dark" ? "rgb(15 23 42)" : "rgb(248 250 252)",
				}}
				codeTagProps={{
					style: {
						fontFamily:
							'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
					},
				}}
			>
				{code}
			</SyntaxHighlighter>
		</div>
	);
});

CodeBlock.displayName = "CodeBlock";
