"use client";

import { FileText, List } from "lucide-react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Lesson {
	id: number;
	title: string;
	description: string;
	difficulty: string;
	order_index: number;
	is_premium: boolean;
}

interface TeacherNote {
	id: string;
	lesson_id: string;
	content: string;
	created_at: string;
	updated_at: string;
}

interface TeacherNotesViewerProps {
	lesson: Lesson;
	teacherNote: TeacherNote | null;
	courseSlug?: string;
}

interface TableOfContentsItem {
	id: string;
	text: string;
	level: number;
}

export const TeacherNotesViewer = ({
	lesson,
	teacherNote,
	courseSlug,
}: Readonly<TeacherNotesViewerProps>) => {
	const [tableOfContents, setTableOfContents] = useState<TableOfContentsItem[]>(
		[],
	);
	const [showToc, setShowToc] = useState(false);

	// Extract H1 and H2 headers from markdown content for table of contents
	useEffect(() => {
		if (teacherNote?.content) {
			const lines = teacherNote.content.split("\n");
			const headers: TableOfContentsItem[] = [];

			lines.forEach((line) => {
				const h1Match = line.match(/^#\s+(.+)$/);
				const h2Match = line.match(/^##\s+(.+)$/);

				if (h1Match) {
					const text = h1Match[1].trim();
					const id = text.toLowerCase().replace(/[^\w]+/g, "-");
					headers.push({ id, text, level: 1 });
				} else if (h2Match) {
					const text = h2Match[1].trim();
					const id = text.toLowerCase().replace(/[^\w]+/g, "-");
					headers.push({ id, text, level: 2 });
				}
			});

			setTableOfContents(headers);
		}
	}, [teacherNote]);

	const handleScrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
			setShowToc(false);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-fuchsia-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
			<SiteHeader />

			<div className="container mx-auto px-4 py-6">
				{/* Table of Contents */}
				{teacherNote && tableOfContents.length > 0 && (
					<Card className="mb-6 rounded-2xl border-0 shadow-lg ring-1 ring-primary/10 dark:ring-primary/20">
						<CardHeader
							className="cursor-pointer hover:bg-muted/50 transition-colors rounded-t-2xl"
							onClick={() => setShowToc(!showToc)}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault();
									setShowToc(!showToc);
								}
							}}
							tabIndex={0}
							role="button"
							aria-expanded={showToc}
							aria-label="Toggle table of contents"
						>
							<div className="flex items-center justify-between">
								<CardTitle className="flex items-center gap-2 text-base">
									<List className="h-4 w-4 text-primary" />
									<span>Quick Navigation</span>
								</CardTitle>
								<Badge variant="outline" className="text-xs">
									{showToc ? "Hide" : "Show"} ({tableOfContents.length}{" "}
									sections)
								</Badge>
							</div>
						</CardHeader>
						{showToc && (
							<>
								<Separator />
								<CardContent className="pt-4">
									<nav className="grid grid-cols-1 md:grid-cols-2 gap-1">
										{tableOfContents.map((item) => (
											<Button
												key={item.id}
												variant="ghost"
												className={`justify-start h-auto py-2 text-left transition-colors ${
													item.level === 1
														? "px-3 font-semibold text-primary"
														: "px-5 text-muted-foreground hover:text-foreground"
												}`}
												onClick={() => handleScrollToSection(item.id)}
												aria-label={`Jump to ${item.text}`}
											>
												<span
													className={`truncate ${item.level === 1 ? "text-sm" : "text-xs"}`}
												>
													{item.level === 2 && "→ "}
													{item.text}
												</span>
											</Button>
										))}
									</nav>
								</CardContent>
							</>
						)}
					</Card>
				)}

				{/* Main Content */}
				<div className="max-w-6xl mx-auto">
					{/* Teacher Notes Content */}
					<Card className="flex flex-col rounded-2xl border shadow-2xl">
						<CardHeader className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10 rounded-t-2xl border-b-2 border-border flex-shrink-0 py-4">
							<div className="flex items-center justify-between">
								<div>
									<CardTitle className="flex items-center gap-2 text-lg">
										<div
											className="p-1.5 bg-gradient-to-br from-primary to-accent rounded-xl"
											aria-hidden="true"
										>
											<FileText className="h-4 w-4 text-white" />
										</div>
										<span className="tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
											Lesson {lesson.order_index}: {lesson.title} ✨
										</span>
									</CardTitle>
									<CardDescription className="text-sm mt-2 ml-11">
										{lesson.description}
									</CardDescription>
								</div>
							</div>
						</CardHeader>

						<Separator />

						<CardContent className="p-6">
							{teacherNote ? (
								<div
									className="teacher-notes-content prose max-w-none dark:prose-invert
                    prose-headings:font-bold prose-headings:tracking-tight
                    prose-h1:text-2xl prose-h1:text-primary prose-h1:mt-6 prose-h1:mb-4 prose-h1:leading-tight prose-h1:first:mt-0
                    prose-h2:text-xl prose-h2:text-accent prose-h2:mt-8 prose-h2:mb-4 prose-h2:leading-snug prose-h2:first:mt-0
                    prose-h3:text-lg prose-h3:text-primary/90 prose-h3:mt-6 prose-h3:mb-3 prose-h3:leading-snug prose-h3:first:mt-0
                    prose-h4:text-base prose-h4:text-primary/80 prose-h4:mt-5 prose-h4:mb-2 prose-h4:leading-snug prose-h4:first:mt-0
                    prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4 prose-p:text-base prose-p:first:mt-0
                    prose-strong:text-primary prose-strong:font-bold prose-strong:text-[1.02em]
                    prose-code:text-primary prose-code:bg-primary/10 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-code:font-semibold
                    prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:my-6 prose-blockquote:italic
                    prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
                    prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
                    prose-li:my-2 prose-li:text-base prose-li:leading-relaxed
                    prose-img:rounded-xl prose-img:shadow-2xl prose-img:ring-2 prose-img:ring-border prose-img:my-6
                    prose-a:text-primary dark:prose-a:text-primary hover:prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-a:font-semibold prose-a:transition-colors
                    prose-hr:my-8 prose-hr:border-t-2 prose-hr:border-border"
								>
									<ReactMarkdown
										remarkPlugins={[remarkGfm]}
										components={{
											h1(props) {
												const { children } = props;
												const text = String(children);
												const id = text.toLowerCase().replace(/[^\w]+/g, "-");
												return (
													<h1 id={id} className="scroll-mt-24">
														{children}
													</h1>
												);
											},
											h2(props) {
												const { children } = props;
												const text = String(children);
												const id = text.toLowerCase().replace(/[^\w]+/g, "-");
												return (
													<h2 id={id} className="scroll-mt-24">
														{children}
													</h2>
												);
											},
											h3(props) {
												const { children } = props;
												const text = String(children);
												const id = text.toLowerCase().replace(/[^\w]+/g, "-");
												return (
													<h3 id={id} className="scroll-mt-24">
														{children}
													</h3>
												);
											},
											code(props) {
												const { children, className } = props;
												const match = /language-(\w+)/.exec(className || "");
												const codeString = String(children).replace(/\n$/, "");

												return match ? (
													<div className="relative my-4">
														<SyntaxHighlighter
															PreTag="div"
															language={match[1]}
															style={vscDarkPlus as any}
															className="rounded-xl shadow-lg !mt-4 !mb-4 ring-2 ring-border"
															customStyle={{
																padding: "1.25rem",
																fontSize: "0.9375rem",
																lineHeight: "1.6",
															}}
														>
															{codeString}
														</SyntaxHighlighter>
													</div>
												) : (
													<code className={className}>{children}</code>
												);
											},
											table: ({ children }) => (
												<div className="my-6 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
													<table className="w-full text-sm">{children}</table>
												</div>
											),
											thead: ({ children }) => (
												<thead className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
													{children}
												</thead>
											),
											tbody: ({ children }) => (
												<tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
													{children}
												</tbody>
											),
											tr: ({ children }) => (
												<tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
													{children}
												</tr>
											),
											th: ({ children }) => (
												<th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
													{children}
												</th>
											),
											td: ({ children }) => (
												<td className="px-4 py-3 text-gray-700 dark:text-gray-300">
													{children}
												</td>
											),
											ul: ({ children }) => (
												<ul className="my-4 space-y-2 list-disc pl-6 marker:text-primary">
													{children}
												</ul>
											),
											ol: ({ children }) => (
												<ol className="my-4 space-y-2 list-decimal pl-6 marker:text-primary marker:font-semibold">
													{children}
												</ol>
											),
											li: ({ children }) => (
												<li className="text-base leading-relaxed text-foreground pl-1">
													{children}
												</li>
											),
											blockquote: ({ children }) => (
												<blockquote className="my-6 border-l-4 border-primary bg-primary/5 py-4 px-6 rounded-r-lg italic text-foreground/90">
													{children}
												</blockquote>
											),
											p: ({ children }) => (
												<p className="mb-4 leading-relaxed text-base text-foreground">
													{children}
												</p>
											),
											strong: ({ children }) => (
												<strong className="font-bold text-primary">
													{children}
												</strong>
											),
											em: ({ children }) => (
												<em className="italic text-foreground/90">
													{children}
												</em>
											),
											a: ({ href, children }) => (
												<a
													href={href}
													target="_blank"
													rel="noopener noreferrer"
													className="text-primary hover:text-accent font-semibold underline underline-offset-2 transition-colors"
												>
													{children}
												</a>
											),
											hr: () => (
												<hr className="my-8 border-t-2 border-border" />
											),
										}}
									>
										{teacherNote.content}
									</ReactMarkdown>
								</div>
							) : (
								<div className="text-center py-12">
									<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
										<FileText className="h-8 w-8 text-muted-foreground" />
									</div>
									<h3 className="text-xl font-semibold text-foreground mb-2">
										No Teacher Notes Available
									</h3>
									<p className="text-muted-foreground max-w-md mx-auto">
										Teacher notes for this lesson have not been created yet.
										Check back later or contact an administrator.
									</p>
								</div>
							)}

							{teacherNote && (
								<div className="mt-8 pt-6 border-t-2 border-border">
									<div className="flex items-center justify-between text-sm text-muted-foreground">
										<span>
											Created:{" "}
											{new Date(teacherNote.created_at).toLocaleDateString(
												"en-CA",
												{
													year: "numeric",
													month: "long",
													day: "numeric",
												},
											)}
										</span>
										<span>
											Last updated:{" "}
											{new Date(teacherNote.updated_at).toLocaleDateString(
												"en-CA",
												{
													year: "numeric",
													month: "long",
													day: "numeric",
												},
											)}
										</span>
									</div>
								</div>
							)}
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};
