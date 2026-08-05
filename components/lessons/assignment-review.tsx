"use client";

import {
	BookOpenCheck,
	ChevronDown,
	ChevronUp,
	Clock3,
	Eye,
	EyeOff,
	MessageCircleQuestion,
} from "lucide-react";
import { useState } from "react";
import { ThemedMarkdown } from "@/components/lessons/viewer/lesson-markdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface AssignmentReviewData {
	lessonOrderIndex: number;
	lessonTitle: string;
	assignment: string;
	solutionCode: string;
	reviewNotes: string;
}

interface AssignmentReviewProps {
	review: AssignmentReviewData;
	embedded?: boolean;
	idPrefix?: string;
}

export function AssignmentReview({
	review,
	embedded = false,
	idPrefix = "previous-assignment",
}: Readonly<AssignmentReviewProps>) {
	const [showAssignment, setShowAssignment] = useState(false);
	const [showSolution, setShowSolution] = useState(false);

	const solutionMarkdown = `\`\`\`python\n${review.solutionCode.trim()}\n\`\`\``;

	const content = (
		<>
			{embedded ? (
				<div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200 bg-amber-50/70 px-4 py-3 dark:border-amber-900 dark:bg-amber-950/20">
					<p className="text-sm font-medium">
						Lesson {review.lessonOrderIndex}: {review.lessonTitle}
					</p>
					<Badge variant="outline" className="gap-1.5 bg-background/80">
						<Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
						8–10 min
					</Badge>
				</div>
			) : (
				<CardHeader className="border-b border-amber-200/80 bg-amber-50/80 px-4 py-4 dark:border-amber-900 dark:bg-amber-950/30 sm:px-5">
					<div className="flex flex-wrap items-start justify-between gap-3">
						<div className="flex min-w-0 items-start gap-3">
							<div className="rounded-lg bg-amber-500 p-2 text-white">
								<BookOpenCheck className="h-5 w-5" aria-hidden="true" />
							</div>
							<div className="min-w-0">
								<p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-700 dark:text-amber-300">
									Opening review
								</p>
								<h2 className="mt-1 text-lg font-semibold text-foreground">
									Previous assignment
								</h2>
								<p className="mt-1 text-sm text-muted-foreground">
									Lesson {review.lessonOrderIndex}: {review.lessonTitle}
								</p>
							</div>
						</div>
						<Badge variant="outline" className="gap-1.5 bg-background/80">
							<Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
							8–10 min
						</Badge>
					</div>
				</CardHeader>
			)}

			<CardContent className="space-y-3 px-4 py-4 sm:px-5">
				<div className="grid gap-3 md:grid-cols-[2rem_minmax(0,1fr)_auto] md:items-center">
					<div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-800 dark:bg-amber-900 dark:text-amber-100">
						1
					</div>
					<div>
						<p className="font-semibold">Recall the challenge</p>
						<p className="text-sm text-muted-foreground">
							Let students explain their approach before opening the prompt.
						</p>
					</div>
					<Button
						variant="outline"
						size="sm"
						onClick={() => setShowAssignment((visible) => !visible)}
						aria-expanded={showAssignment}
						aria-controls={`${idPrefix}-prompt`}
						className="w-full md:w-auto"
					>
						{showAssignment ? (
							<ChevronUp className="mr-1 h-4 w-4" />
						) : (
							<ChevronDown className="mr-1 h-4 w-4" />
						)}
						{showAssignment ? "Hide assignment" : "Show assignment"}
					</Button>
				</div>

				{showAssignment && (
					<div
						id={`${idPrefix}-prompt`}
						className="ml-0 rounded-xl border border-amber-200 bg-amber-50/60 p-4 dark:border-amber-900 dark:bg-amber-950/20 md:ml-11"
					>
						<ThemedMarkdown content={review.assignment} />
					</div>
				)}

				<div className="border-t border-border" />

				<div className="grid gap-3 md:grid-cols-[2rem_minmax(0,1fr)_auto] md:items-center">
					<div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-100">
						2
					</div>
					<div>
						<p className="font-semibold">Compare approaches</p>
						<p className="text-sm text-muted-foreground">
							Ask what worked, what was difficult, and what students changed.
						</p>
					</div>
					<MessageCircleQuestion
						className="hidden h-5 w-5 text-sky-600 md:block"
						aria-hidden="true"
					/>
				</div>

				<div className="border-t border-border" />

				<div className="grid gap-3 md:grid-cols-[2rem_minmax(0,1fr)_auto] md:items-center">
					<div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100">
						3
					</div>
					<div>
						<p className="font-semibold">Discuss one model solution</p>
						<p className="text-sm text-muted-foreground">
							Reveal it only after students have shared their thinking.
						</p>
					</div>
					<Button
						variant={showSolution ? "outline" : "default"}
						size="sm"
						onClick={() => setShowSolution((visible) => !visible)}
						aria-expanded={showSolution}
						aria-controls={`${idPrefix}-solution`}
						className={cn(
							"w-full md:w-auto",
							!showSolution && "bg-emerald-600 hover:bg-emerald-700",
						)}
					>
						{showSolution ? (
							<EyeOff className="mr-1 h-4 w-4" />
						) : (
							<Eye className="mr-1 h-4 w-4" />
						)}
						{showSolution ? "Hide solution" : "Reveal solution"}
					</Button>
				</div>

				{showSolution && (
					<div
						id={`${idPrefix}-solution`}
						className="ml-0 space-y-5 rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 dark:border-emerald-900 dark:bg-emerald-950/20 md:ml-11"
					>
						<ThemedMarkdown content={solutionMarkdown} />
						<div className="border-t border-emerald-200 pt-4 dark:border-emerald-900">
							<ThemedMarkdown content={review.reviewNotes} />
						</div>
					</div>
				)}
			</CardContent>
		</>
	);

	if (embedded) {
		return <div className="overflow-hidden rounded-xl border">{content}</div>;
	}

	return (
		<Card className="gap-0 overflow-hidden rounded-2xl border-amber-200 py-0 shadow-sm dark:border-amber-900">
			{content}
		</Card>
	);
}
