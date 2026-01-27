"use client";

import { FileCode, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { SubmissionsList } from "./submissions-list";

interface Submission {
	id: string;
	lessonId: string;
	lessonTitle: string;
	lessonOrderIndex: number;
	courseSlug: string;
	trinketUrl: string;
	status: "submitted" | "reviewed" | "graded";
	feedback: string | null;
	grade: string | null;
	reviewedAt: string | null;
	submittedAt: string;
}

interface MyAssignmentsSectionProps {
	initialSubmissions: Submission[];
}

export const MyAssignmentsSection = ({
	initialSubmissions,
}: MyAssignmentsSectionProps) => {
	const router = useRouter();
	const [isRefreshing, setIsRefreshing] = useState(false);

	const handleRefresh = useCallback(() => {
		setIsRefreshing(true);
		router.refresh();
		// Reset refreshing state after a short delay
		setTimeout(() => setIsRefreshing(false), 1000);
	}, [router]);

	// Count submissions with new feedback
	const newFeedbackCount = initialSubmissions.filter(
		(s) => s.status !== "submitted" && s.feedback,
	).length;

	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<div>
					<h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
						<FileCode className="h-5 w-5" />
						My Assignments
						{newFeedbackCount > 0 && (
							<span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-blue-100 bg-blue-600 rounded-full">
								{newFeedbackCount} new
							</span>
						)}
					</h3>
					<p className="text-sm text-muted-foreground mt-1">
						Submit your Trinket code and view teacher feedback
					</p>
				</div>
				<Button
					variant="outline"
					size="sm"
					onClick={handleRefresh}
					disabled={isRefreshing}
					className="gap-2"
				>
					<RefreshCw
						className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`}
					/>
					Refresh
				</Button>
			</div>

			{initialSubmissions.length > 0 ? (
				<SubmissionsList
					submissions={initialSubmissions}
					onRefresh={handleRefresh}
				/>
			) : (
				<Card className="rounded-2xl border-0 shadow-xl ring-1 ring-gray-200/60 dark:ring-white/10">
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<FileCode className="h-5 w-5" />
							No Assignments Yet
						</CardTitle>
						<CardDescription>
							Complete a lesson and submit your Trinket code to get started!
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="text-center py-8">
							<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-6">
								<FileCode className="h-10 w-10 text-primary" />
							</div>
							<h4 className="text-lg font-semibold text-foreground mb-2">
								Ready to submit your first assignment?
							</h4>
							<p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
								After completing a lesson, click "Submit Assignment" to share
								your Trinket code. Your teacher will review it and provide
								helpful feedback!
							</p>
							<div className="flex flex-col sm:flex-row gap-3 justify-center">
								<Button asChild variant="default" className="min-h-[44px]">
									<a href="/lessons">Browse Lessons</a>
								</Button>
								<Button asChild variant="outline" className="min-h-[44px]">
									<a href="/dashboard">Go to Dashboard</a>
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			)}
		</div>
	);
};
