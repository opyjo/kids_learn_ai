"use client";

import {
	AlertTriangle,
	ExternalLink,
	Maximize2,
	Minimize2,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { parsePickcodeProjectUrl } from "@/lib/pickcode";

interface PickcodePreviewProps {
	projectUrl: string;
	title?: string;
	className?: string;
}

export function PickcodePreview({
	projectUrl,
	title,
	className = "",
}: Readonly<PickcodePreviewProps>) {
	const [isExpanded, setIsExpanded] = useState(false);
	const project = parsePickcodeProjectUrl(projectUrl);

	if (!project) {
		return (
			<Card className={className}>
				<CardContent className="flex min-h-[240px] flex-col items-center justify-center gap-3 p-6 text-center text-muted-foreground">
					<AlertTriangle
						className="h-8 w-8 text-amber-500"
						aria-hidden="true"
					/>
					<p className="font-medium text-foreground">
						This submission does not contain a current Pickcode project link.
					</p>
					<p className="max-w-md text-sm">
						Ask the student to update the submission with a Pickcode View Code
						link.
					</p>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card className={`overflow-hidden ${className}`}>
			{title ? (
				<div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b">
					<span className="text-sm font-medium">{title}</span>
					<div className="flex items-center gap-2">
						<Button
							variant="ghost"
							size="sm"
							onClick={() => setIsExpanded((expanded) => !expanded)}
							className="h-8 w-8 p-0"
							aria-label={isExpanded ? "Minimize preview" : "Expand preview"}
						>
							{isExpanded ? (
								<Minimize2 className="h-4 w-4" aria-hidden="true" />
							) : (
								<Maximize2 className="h-4 w-4" aria-hidden="true" />
							)}
						</Button>
						<Button
							variant="ghost"
							size="sm"
							onClick={() =>
								window.open(project.projectUrl, "_blank", "noopener,noreferrer")
							}
							className="h-8 w-8 p-0"
							aria-label="Open project in Pickcode"
						>
							<ExternalLink className="h-4 w-4" aria-hidden="true" />
						</Button>
					</div>
				</div>
			) : null}
			<CardContent className="p-0">
				<iframe
					src={project.projectUrl}
					width="100%"
					height={isExpanded ? "700" : "480"}
					allowFullScreen
					className="border-0 transition-all duration-300"
					title={title || "Pickcode project preview"}
					referrerPolicy="strict-origin-when-cross-origin"
					sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-downloads"
				/>
			</CardContent>
		</Card>
	);
}
