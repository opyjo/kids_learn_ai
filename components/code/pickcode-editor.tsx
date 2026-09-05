"use client";

import { Check, Code2, Copy, ExternalLink, Play } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PICKCODE_ORIGIN } from "@/lib/pickcode";

interface PickcodeEditorProps {
	initialCode?: string;
	className?: string;
}

export function PickcodeEditor({
	initialCode = "",
	className,
}: Readonly<PickcodeEditorProps>) {
	const [copied, setCopied] = useState(false);

	const handleCopyCode = async () => {
		await navigator.clipboard.writeText(initialCode);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const handleOpenPickcode = () => {
		window.open(`${PICKCODE_ORIGIN}/home`, "_blank", "noopener,noreferrer");
	};

	return (
		<Card className={`flex flex-col ${className || ""}`}>
			<CardContent className="p-0 flex-1 flex flex-col overflow-hidden">
				<div className="p-3 bg-gray-950 border-t border-gray-800">
					<p className="text-xs text-gray-400 text-center">
						💡 Save your Pickcode project, then share a View Code link with your
						teacher.
					</p>
				</div>

				{initialCode ? (
					<>
						<div className="p-3 bg-gray-50 dark:bg-gray-900/50 border-b">
							<div className="flex items-center justify-between gap-3">
								<p className="font-semibold text-sm text-gray-900 dark:text-gray-100 flex items-center gap-2">
									<Code2 className="h-4 w-4" aria-hidden="true" />
									Starter Code
								</p>
								<div className="flex flex-wrap items-center justify-end gap-2">
									<Button
										variant="outline"
										size="sm"
										onClick={handleOpenPickcode}
										className="rounded-full text-xs h-7"
									>
										<ExternalLink
											className="h-3 w-3 mr-1.5"
											aria-hidden="true"
										/>
										Open Pickcode
									</Button>
									<Button
										variant="outline"
										size="sm"
										onClick={handleCopyCode}
										className="rounded-full text-xs h-7"
										aria-label={copied ? "Code copied" : "Copy starter code"}
									>
										{copied ? (
											<>
												<Check
													className="h-3 w-3 mr-1.5 text-green-600"
													aria-hidden="true"
												/>
												Copied!
											</>
										) : (
											<>
												<Copy className="h-3 w-3 mr-1.5" aria-hidden="true" />
												Copy Code
											</>
										)}
									</Button>
								</div>
							</div>
						</div>
						<div className="relative bg-gray-900 text-gray-100 flex-1 overflow-hidden min-h-[300px]">
							<div className="p-4 h-full overflow-auto">
								<SyntaxHighlighter
									language="python"
									style={vscDarkPlus}
									customStyle={{
										margin: 0,
										padding: 0,
										background: "transparent",
										fontSize: "0.875rem",
										lineHeight: "1.6",
									}}
									PreTag="div"
								>
									{initialCode}
								</SyntaxHighlighter>
							</div>
						</div>
						<Separator />
					</>
				) : (
					<div className="flex items-center justify-center h-[200px] text-gray-500 border-b">
						<div className="text-center">
							<Code2 className="h-8 w-8 mx-auto mb-2 opacity-50" />
							<p className="text-sm">No starter code provided</p>
						</div>
					</div>
				)}

				<div className="p-4 bg-gray-50 dark:bg-gray-900/50 border-b">
					<div className="space-y-3">
						<p className="font-semibold text-sm text-gray-900 dark:text-gray-100 flex items-center gap-2">
							<Play className="h-4 w-4" aria-hidden="true" />
							Quick Start Guide
						</p>
						<ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
							<li>Copy the starter code above.</li>
							<li>Open Pickcode and create a Python project.</li>
							<li>Paste the code into main.py and press Play.</li>
							<li>Experiment, save, and share a View Code project link.</li>
						</ol>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
