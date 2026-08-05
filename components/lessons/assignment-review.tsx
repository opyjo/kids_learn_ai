"use client";

import {
	BookOpenCheck,
	ChevronDown,
	ChevronUp,
	Eye,
	EyeOff,
} from "lucide-react";
import { useState } from "react";
import { ThemedMarkdown } from "@/components/lessons/viewer/lesson-markdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface AssignmentReviewData {
	lessonOrderIndex: number;
	lessonTitle: string;
	assignment: string;
	solutionCode: string;
	reviewNotes: string;
}

interface AssignmentReviewProps {
	review: AssignmentReviewData;
}

export function AssignmentReview({ review }: Readonly<AssignmentReviewProps>) {
	const [showAssignment, setShowAssignment] = useState(false);
	const [showSolution, setShowSolution] = useState(false);

	const solutionMarkdown = `\`\`\`python\n${review.solutionCode.trim()}\n\`\`\``;

	return (
		<Card className="mb-6 overflow-hidden rounded-2xl border-2 border-amber-300 bg-amber-50/60 shadow-xl dark:border-amber-700 dark:bg-amber-950/20">
			<CardHeader className="border-b border-amber-200 bg-gradient-to-r from-amber-100 via-orange-50 to-amber-100 py-4 dark:border-amber-800 dark:from-amber-950/70 dark:via-orange-950/30 dark:to-amber-950/70">
				<div className="flex flex-wrap items-start justify-between gap-3">
					<div className="flex items-start gap-3">
						<div className="rounded-xl bg-amber-500 p-2 text-white shadow-sm">
							<BookOpenCheck className="h-5 w-5" aria-hidden="true" />
						</div>
						<div>
							<CardTitle className="text-lg text-amber-950 dark:text-amber-100">
								Review Previous Assignment
							</CardTitle>
							<p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
								Lesson {review.lessonOrderIndex}: {review.lessonTitle}
							</p>
						</div>
					</div>
					<Badge className="bg-amber-500 text-white hover:bg-amber-500">
						Suggested: 8–10 minutes
					</Badge>
				</div>
			</CardHeader>

			<CardContent className="space-y-4 p-4 sm:p-5">
				<div className="rounded-xl border border-amber-200 bg-background/80 p-3 dark:border-amber-900">
					<div className="flex flex-wrap items-center justify-between gap-2">
						<div>
							<p className="font-semibold">1. Recall the challenge</p>
							<p className="text-sm text-muted-foreground">
								Ask students how they approached it before showing an answer.
							</p>
						</div>
						<Button
							variant="outline"
							size="sm"
							onClick={() => setShowAssignment((visible) => !visible)}
							aria-expanded={showAssignment}
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
						<div className="mt-4 border-t border-amber-200 pt-4 dark:border-amber-900">
							<ThemedMarkdown content={review.assignment} />
						</div>
					)}
				</div>

				<div className="rounded-xl border border-emerald-200 bg-background/80 p-3 dark:border-emerald-900">
					<div className="flex flex-wrap items-center justify-between gap-2">
						<div>
							<p className="font-semibold">2. Reveal one model solution</p>
							<p className="text-sm text-muted-foreground">
								This is one good approach—not the only correct answer.
							</p>
						</div>
						<Button
							variant={showSolution ? "outline" : "default"}
							size="sm"
							onClick={() => setShowSolution((visible) => !visible)}
							aria-expanded={showSolution}
							className={
								showSolution ? "" : "bg-emerald-600 hover:bg-emerald-700"
							}
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
						<div className="mt-4 space-y-4 border-t border-emerald-200 pt-4 dark:border-emerald-900">
							<ThemedMarkdown content={solutionMarkdown} />
							<ThemedMarkdown content={review.reviewNotes} />
						</div>
					)}
				</div>
			</CardContent>
		</Card>
	);
}
