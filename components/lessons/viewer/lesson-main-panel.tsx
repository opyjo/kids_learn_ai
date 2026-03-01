import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { getNavigationHref } from "@/components/lessons/viewer/lesson-viewer.helpers";
import type {
	Lesson,
	LessonNavigation,
} from "@/components/lessons/viewer/lesson-viewer.types";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface LessonMainPanelProps {
	lesson: Lesson;
	navigation: LessonNavigation;
	courseSlug?: string;
	isCompleted: boolean;
	isLoading: boolean;
	userId?: string;
	showConfetti: boolean;
	confirmOpen: boolean;
	onConfirmOpenChange: (open: boolean) => void;
	onMarkClick: () => Promise<void>;
	onUnmarkRequest: () => void;
	onConfirmUnmark: () => Promise<void>;
	sections: React.ReactNode;
}

export function LessonMainPanel({
	lesson,
	navigation,
	courseSlug,
	isCompleted,
	isLoading,
	userId,
	showConfetti,
	confirmOpen,
	onConfirmOpenChange,
	onMarkClick,
	onUnmarkRequest,
	onConfirmUnmark,
	sections,
}: LessonMainPanelProps) {
	const previousHref = getNavigationHref(courseSlug, navigation.previousOrder);
	const nextHref = getNavigationHref(courseSlug, navigation.nextOrder);

	return (
		<Card className="border shadow-sm overflow-hidden">
			<CardHeader className="border-b bg-background/70">
				<div className="flex items-start justify-between gap-3">
					<div className="min-w-0">
						<CardTitle className="text-base leading-tight">
							Lesson {lesson.order_index}: {lesson.title}
						</CardTitle>
						<CardDescription className="mt-1 text-xs sm:text-sm">
							{lesson.description}
						</CardDescription>
						<div className="mt-2 text-xs text-muted-foreground">
							Lesson {navigation.currentOrder} of {navigation.totalLessons}
						</div>
					</div>
					{isCompleted && (
						<Badge className="shrink-0 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-100">
							<CheckCircle className="h-3.5 w-3.5 mr-1" />
							Completed
						</Badge>
					)}
				</div>
			</CardHeader>
			<CardContent className="p-4 space-y-4 relative">
				{showConfetti && (
					<div className="pointer-events-none absolute inset-0 flex items-start justify-center z-10">
						<div className="mt-4 grid grid-cols-6 gap-2 text-xl">
							<span className="animate-bounce">🎉</span>
							<span className="animate-bounce [animation-delay:100ms]">🎈</span>
							<span className="animate-bounce [animation-delay:200ms]">🌟</span>
							<span className="animate-bounce [animation-delay:300ms]">🎊</span>
							<span className="animate-bounce [animation-delay:400ms]">⭐</span>
							<span className="animate-bounce [animation-delay:500ms]">✨</span>
						</div>
					</div>
				)}

				{sections}

				<div className="pt-4 border-t border-border flex flex-col gap-4">
					<div className="flex flex-col items-center gap-2">
						<Button
							onClick={isCompleted ? onUnmarkRequest : onMarkClick}
							aria-pressed={isCompleted}
							aria-label={
								isCompleted
									? "Unmark lesson as complete"
									: "Mark lesson as complete"
							}
							disabled={isLoading}
							className="rounded-xl px-6"
						>
							{isLoading
								? "Updating..."
								: isCompleted
									? "Completed"
									: "Mark as Complete"}
						</Button>
						{!userId && (
							<p className="text-xs text-muted-foreground text-center">
								Sign in to track your progress
							</p>
						)}
					</div>

					<div className="flex items-center justify-center gap-2 sm:gap-3">
						{previousHref ? (
							<Button variant="outline" asChild className="rounded-lg">
								<Link href={previousHref} aria-label="Go to previous lesson">
									<ArrowLeft className="h-4 w-4 mr-1" />
									Previous
								</Link>
							</Button>
						) : (
							<Button variant="outline" disabled className="rounded-lg">
								<ArrowLeft className="h-4 w-4 mr-1" />
								Previous
							</Button>
						)}

						{nextHref ? (
							<Button asChild className="rounded-lg">
								<Link href={nextHref} aria-label="Go to next lesson">
									Next
									<ArrowRight className="h-4 w-4 ml-1" />
								</Link>
							</Button>
						) : (
							<Button disabled className="rounded-lg">
								Next
								<ArrowRight className="h-4 w-4 ml-1" />
							</Button>
						)}
					</div>
				</div>

				<AlertDialog open={confirmOpen} onOpenChange={onConfirmOpenChange}>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>
								Unmark this lesson as complete?
							</AlertDialogTitle>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>Cancel</AlertDialogCancel>
							<AlertDialogAction onClick={() => void onConfirmUnmark()}>
								Yes, Unmark
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</CardContent>
		</Card>
	);
}
