"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

interface UseLessonCompletionProps {
	lessonDbId: string;
	userId?: string;
}

export const useLessonCompletion = ({
	lessonDbId,
	userId,
}: UseLessonCompletionProps) => {
	const [isCompleted, setIsCompleted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [showConfetti, setShowConfetti] = useState(false);
	const supabase = getSupabaseBrowserClient();

	// Fetch completion status on mount
	useEffect(() => {
		const checkCompletionStatus = async () => {
			if (!lessonDbId) return;

			try {
				const {
					data: { user: authUser },
				} = await supabase.auth.getUser();

				if (!authUser) {
					setIsCompleted(false);
					return;
				}

				const { data } = await supabase
					.from("completed_lessons")
					.select("id")
					.eq("student_id", authUser.id)
					.eq("lesson_id", lessonDbId)
					.maybeSingle();

				setIsCompleted(!!data);
			} catch (_error) {
				setIsCompleted(false);
			}
		};

		checkCompletionStatus();
	}, [lessonDbId, supabase]);

	// Toggle lesson completion
	const toggleCompletion = async (action?: "complete" | "uncomplete") => {
		if (!userId || !lessonDbId) {
			toast.error("Please sign in to track your progress");
			return;
		}

		const {
			data: { session },
			error: sessionError,
		} = await supabase.auth.getSession();

		if (sessionError) {
			console.error("Session fetch error:", sessionError);
		}
		if (!session) {
			toast.error("Your session expired. Please sign in again.");
			return;
		}

		const {
			data: { user: authUser },
		} = await supabase.auth.getUser();
		if (!authUser) {
			toast.error("Your session expired. Please sign in again.");
			return;
		}

		setIsLoading(true);

		try {
			const shouldUnmark = action ? action === "uncomplete" : isCompleted;
			if (shouldUnmark) {
				const { error } = await supabase
					.from("completed_lessons")
					.delete()
					.eq("student_id", authUser.id)
					.eq("lesson_id", lessonDbId);

				if (error) {
					console.error("Error unmarking lesson:", error);
					setIsCompleted(true); // roll back the optimistic update
					toast.error("Failed to update completion status");
					return;
				}

				setIsCompleted(false);
				return;
			}

			const { error } = await supabase.from("completed_lessons").insert({
				student_id: authUser.id,
				lesson_id: lessonDbId,
			});

			if (error) {
				console.error("Error marking lesson complete:", error);
				setIsCompleted(false); // roll back the optimistic update
				toast.error("Failed to mark lesson as complete");
				return;
			}

			setIsCompleted(true);
			setShowConfetti(true);
			setTimeout(() => setShowConfetti(false), 2200);
		} catch (error: any) {
			console.error("Error toggling completion:", error);
			toast.error("Something went wrong. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	// Optimistic mark complete with Undo toast
	const handleMarkClick = async () => {
		if (isCompleted) return;
		setIsCompleted(true);
		toast.success("Marked complete", {
			description: "Lesson marked as complete.",
			action: {
				label: "Undo",
				onClick: () => {
					setIsCompleted(false);
					void toggleCompletion("uncomplete");
				},
			},
		});
		await toggleCompletion("complete");
	};

	return {
		isCompleted,
		isLoading,
		showConfetti,
		toggleCompletion,
		handleMarkClick,
	};
};
