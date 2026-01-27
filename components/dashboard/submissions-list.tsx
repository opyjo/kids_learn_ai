"use client";

import { Award, Clock, Eye, FileCode, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { TrinketPreview } from "./trinket-preview";
import { TrinketSubmissionForm } from "./trinket-submission-form";

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

interface SubmissionsListProps {
	submissions: Submission[];
	onRefresh?: () => void;
}

const getStatusBadge = (status: string, _hasFeedback: boolean) => {
	switch (status) {
		case "graded":
			return (
				<Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
					<Award className="h-3 w-3 mr-1" />
					Graded
				</Badge>
			);
		case "reviewed":
			return (
				<Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
					<MessageSquare className="h-3 w-3 mr-1" />
					Reviewed
				</Badge>
			);
		default:
			return (
				<Badge variant="secondary">
					<Clock className="h-3 w-3 mr-1" />
					Pending
				</Badge>
			);
	}
};

const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	return date.toLocaleDateString(undefined, {
		month: "short",
		day: "numeric",
		year:
			date.getFullYear() !== new Date().getFullYear() ? "numeric" : undefined,
	});
};

export const SubmissionsList = ({
	submissions,
	onRefresh,
}: SubmissionsListProps) => {
	const [selectedSubmission, setSelectedSubmission] =
		useState<Submission | null>(null);
	const [isViewOpen, setIsViewOpen] = useState(false);

	const handleViewSubmission = (submission: Submission) => {
		setSelectedSubmission(submission);
		setIsViewOpen(true);
	};

	const handleCloseView = () => {
		setIsViewOpen(false);
		setSelectedSubmission(null);
	};

	if (submissions.length === 0) {
		return (
			<Card className="rounded-2xl border-0 shadow-xl ring-1 ring-gray-200/60 dark:ring-white/10">
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<FileCode className="h-5 w-5" />
						My Assignments
					</CardTitle>
					<CardDescription>
						Submit your Trinket code for lesson assignments
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="text-center py-8">
						<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-6">
							<FileCode className="h-10 w-10 text-primary" />
						</div>
						<h4 className="text-lg font-semibold text-foreground mb-2">
							No assignments submitted yet
						</h4>
						<p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
							Complete a lesson and submit your code to see it here! Your
							teacher will review your work and provide feedback.
						</p>
						<Button asChild variant="default" className="min-h-[44px]">
							<a href="/lessons">Start Learning</a>
						</Button>
					</div>
				</CardContent>
			</Card>
		);
	}

	return (
		<>
			<Card className="rounded-2xl border-0 shadow-xl ring-1 ring-gray-200/60 dark:ring-white/10">
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<FileCode className="h-5 w-5" />
						My Assignments
					</CardTitle>
					<CardDescription>
						Your submitted Trinket assignments and teacher feedback
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-3">
					{submissions.map((submission) => (
						<div
							key={submission.id}
							className="flex items-center justify-between p-4 border rounded-xl hover:shadow-md transition-shadow bg-card"
						>
							<div className="flex-1 min-w-0">
								<div className="flex items-center gap-2 mb-1">
									<h4 className="font-medium truncate">
										{submission.lessonTitle}
									</h4>
									{submission.status !== "submitted" && submission.feedback && (
										<span className="flex items-center text-xs text-blue-600 dark:text-blue-400">
											<MessageSquare className="h-3 w-3 mr-1" />
											New Feedback
										</span>
									)}
								</div>
								<div className="flex items-center gap-3 text-sm text-muted-foreground">
									<span>Submitted {formatDate(submission.submittedAt)}</span>
									{submission.grade && (
										<span className="font-medium text-green-600 dark:text-green-400">
											Grade: {submission.grade}
										</span>
									)}
								</div>
							</div>
							<div className="flex items-center gap-2 ml-4">
								{getStatusBadge(submission.status, !!submission.feedback)}
								<Button
									variant="outline"
									size="sm"
									onClick={() => handleViewSubmission(submission)}
									className="gap-1"
								>
									<Eye className="h-3 w-3" />
									View
								</Button>
								{submission.status === "submitted" && (
									<TrinketSubmissionForm
										lessonId={submission.lessonId}
										lessonTitle={submission.lessonTitle}
										existingUrl={submission.trinketUrl}
										onSubmitSuccess={onRefresh}
									/>
								)}
							</div>
						</div>
					))}
				</CardContent>
			</Card>

			{/* View Submission Dialog */}
			<Dialog open={isViewOpen} onOpenChange={setIsViewOpen}>
				<DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
					<DialogHeader>
						<DialogTitle>{selectedSubmission?.lessonTitle}</DialogTitle>
						<DialogDescription>
							Submitted{" "}
							{selectedSubmission && formatDate(selectedSubmission.submittedAt)}
							{selectedSubmission?.grade && (
								<span className="ml-2 font-semibold text-green-600">
									Grade: {selectedSubmission.grade}
								</span>
							)}
						</DialogDescription>
					</DialogHeader>

					{selectedSubmission && (
						<div className="space-y-4">
							<TrinketPreview
								trinketUrl={selectedSubmission.trinketUrl}
								title="Your Code"
							/>

							{selectedSubmission.feedback && (
								<Card className="border-blue-200 bg-blue-50/50 dark:border-blue-900 dark:bg-blue-950/50">
									<CardHeader className="pb-2">
										<CardTitle className="text-sm flex items-center gap-2">
											<MessageSquare className="h-4 w-4 text-blue-600" />
											Teacher Feedback
										</CardTitle>
										{selectedSubmission.reviewedAt && (
											<CardDescription>
												{formatDate(selectedSubmission.reviewedAt)}
											</CardDescription>
										)}
									</CardHeader>
									<CardContent>
										<p className="text-sm whitespace-pre-wrap">
											{selectedSubmission.feedback}
										</p>
									</CardContent>
								</Card>
							)}

							{selectedSubmission.status === "submitted" && (
								<div className="flex justify-end">
									<TrinketSubmissionForm
										lessonId={selectedSubmission.lessonId}
										lessonTitle={selectedSubmission.lessonTitle}
										existingUrl={selectedSubmission.trinketUrl}
										onSubmitSuccess={() => {
											handleCloseView();
											onRefresh?.();
										}}
									/>
								</div>
							)}
						</div>
					)}
				</DialogContent>
			</Dialog>
		</>
	);
};
