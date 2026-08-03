"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ApplicationCopyButton({
	text,
	label = "Copy draft",
}: {
	text: string;
	label?: string;
}) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		await navigator.clipboard.writeText(text);
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1800);
	};

	return (
		<Button
			type="button"
			variant="outline"
			size="sm"
			onClick={handleCopy}
			aria-label={copied ? "Draft copied" : label}
			className="h-8 gap-1.5 text-xs"
		>
			{copied ? (
				<Check className="h-3.5 w-3.5" aria-hidden="true" />
			) : (
				<Copy className="h-3.5 w-3.5" aria-hidden="true" />
			)}
			{copied ? "Copied" : label}
		</Button>
	);
}
