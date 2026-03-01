import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

const markdownComponents: Components = {
	code(props) {
		const { children, className } = props;
		const match = /language-(\w+)/.exec(className || "");
		const codeString = String(children).replace(/\n$/, "");

		if (!match) {
			return <code className={className}>{children}</code>;
		}

		return (
			<div className="relative my-3">
				<SyntaxHighlighter
					PreTag="div"
					language={match[1]}
					style={vscDarkPlus as any}
					className="rounded-lg shadow-sm !mt-3 !mb-3 ring-1 ring-border"
					customStyle={{
						padding: "1rem",
						fontSize: "0.875rem",
						lineHeight: "1.6",
					}}
				>
					{codeString}
				</SyntaxHighlighter>
			</div>
		);
	},
	table: ({ children }) => (
		<div className="my-4 overflow-x-auto rounded-lg border border-border">
			<table className="w-full text-sm">{children}</table>
		</div>
	),
	thead: ({ children }) => (
		<thead className="bg-muted/50 border-b border-border">{children}</thead>
	),
	tbody: ({ children }) => (
		<tbody className="divide-y divide-border">{children}</tbody>
	),
	tr: ({ children }) => (
		<tr className="hover:bg-muted/20 transition-colors">{children}</tr>
	),
	th: ({ children }) => (
		<th className="px-4 py-2.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide">
			{children}
		</th>
	),
	td: ({ children }) => (
		<td className="px-4 py-2.5 text-foreground">{children}</td>
	),
};

interface LessonMarkdownProps {
	content: string;
	className?: string;
}

export function LessonMarkdown({ content, className }: LessonMarkdownProps) {
	return (
		<div
			className={cn(
				"lesson-content prose max-w-none dark:prose-invert prose-headings:tracking-tight prose-h1:text-xl prose-h2:text-lg prose-h3:text-base prose-p:text-sm prose-p:leading-7 prose-code:text-xs prose-code:font-semibold prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-a:text-primary hover:prose-a:text-accent prose-a:no-underline hover:prose-a:underline",
				className,
			)}
		>
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				components={markdownComponents}
			>
				{content}
			</ReactMarkdown>
		</div>
	);
}

interface ThemedMarkdownProps {
	content: string;
	className?: string;
	linkClassName?: string;
}

export function ThemedMarkdown({
	content,
	className,
	linkClassName,
}: ThemedMarkdownProps) {
	return (
		<div className={cn("text-sm leading-relaxed space-y-2", className)}>
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				components={{
					p: ({ children }) => (
						<p className="mb-2.5 leading-relaxed">{children}</p>
					),
					strong: ({ children }) => (
						<strong className="font-semibold">{children}</strong>
					),
					ul: ({ children }) => (
						<ul className="list-disc list-inside space-y-1.5 my-2.5 ml-2">
							{children}
						</ul>
					),
					ol: ({ children }) => (
						<ol className="list-decimal list-inside space-y-1.5 my-2.5 ml-2">
							{children}
						</ol>
					),
					li: ({ children }) => (
						<li className="leading-relaxed pl-1">{children}</li>
					),
					h1: ({ children }) => (
						<h1 className="text-base font-bold mt-3 mb-2 first:mt-0">
							{children}
						</h1>
					),
					h2: ({ children }) => (
						<h2 className="text-base font-bold mt-3 mb-2 first:mt-0">
							{children}
						</h2>
					),
					h3: ({ children }) => (
						<h3 className="text-sm font-semibold mt-2.5 mb-1.5 first:mt-0">
							{children}
						</h3>
					),
					a: ({ href, children }) => (
						<a
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className={cn("underline font-medium", linkClassName)}
						>
							{children}
						</a>
					),
				}}
			>
				{content}
			</ReactMarkdown>
		</div>
	);
}
