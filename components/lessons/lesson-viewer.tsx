"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { LessonCodePanel } from "@/components/lessons/viewer/lesson-code-panel";
import { LessonMainPanel } from "@/components/lessons/viewer/lesson-main-panel";
import { LessonSections } from "@/components/lessons/viewer/lesson-sections";
import { getLessonVariant } from "@/components/lessons/viewer/lesson-viewer.helpers";
import type {
	LessonSubmission,
	LessonViewerProps,
} from "@/components/lessons/viewer/lesson-viewer.types";
import { LessonViewerShell } from "@/components/lessons/viewer/lesson-viewer-shell";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

export function LessonViewer({
	lesson,
	userId,
	courseSlug,
	courseTitle,
	navigation,
	courseLessons,
}: Readonly<LessonViewerProps>) {
	const supabase = getSupabaseBrowserClient();
	const variant = useMemo(() => getLessonVariant(courseSlug), [courseSlug]);

	const [isCompleted, setIsCompleted] = useState(
		courseLessons.find((item) => item.dbId === lesson.dbId)?.isCompleted ??
			false,
	);
	const [isLoading, setIsLoading] = useState(false);
	const [_currentCode, setCurrentCode] = useState(lesson.starter_code);
	const [showConfetti, setShowConfetti] = useState(false);
	const [confirmOpen, setConfirmOpen] = useState(false);

	const [submission, setSubmission] = useState<LessonSubmission | null>(null);
	const [showSubmissionPreview, setShowSubmissionPreview] = useState(false);

	useEffect(() => {
		setIsCompleted(
			courseLessons.find((item) => item.dbId === lesson.dbId)?.isCompleted ??
				false,
		);
	}, [courseLessons, lesson.dbId]);

	const setCurrentLessonCompletion = useCallback(
		(completed: boolean) => {
			setIsCompleted(completed);
		},
		[],
	);

	useEffect(() => {
		const checkCompletionStatus = async () => {
			if (!lesson.dbId) return;

			try {
				const {
					data: { user: authUser },
				} = await supabase.auth.getUser();

				if (!authUser) {
					setCurrentLessonCompletion(false);
					return;
				}

				const { data } = await supabase
					.from("completed_lessons")
					.select("id")
					.eq("student_id", authUser.id)
					.eq("lesson_id", lesson.dbId)
					.maybeSingle();

				setCurrentLessonCompletion(Boolean(data));
			} catch {
				setCurrentLessonCompletion(false);
			}
		};

		void checkCompletionStatus();
	}, [lesson.dbId, setCurrentLessonCompletion, supabase]);

	const fetchSubmission = useCallback(async () => {
		if (!lesson.dbId) return;

		try {
			const {
				data: { user: authUser },
			} = await supabase.auth.getUser();

			if (!authUser) {
				setSubmission(null);
				return;
			}

			const { data } = await supabase
				.from("trinket_submissions")
				.select("id, trinket_url, status, feedback, grade")
				.eq("student_id", authUser.id)
				.eq("lesson_id", lesson.dbId)
				.maybeSingle();

			if (!data) {
				setSubmission(null);
				return;
			}

			setSubmission({
				id: data.id,
				trinketUrl: data.trinket_url,
				status: data.status as "submitted" | "reviewed" | "graded",
				feedback: data.feedback,
				grade: data.grade,
			});
		} catch {
			setSubmission(null);
		}
	}, [lesson.dbId, supabase]);

	useEffect(() => {
		void fetchSubmission();
	}, [fetchSubmission]);

	const toggleCompletion = useCallback(
		async (action: "complete" | "uncomplete") => {
			if (!userId || !lesson.dbId) {
				alert("Please sign in to track your progress");
				return false;
			}

			const {
				data: { session },
				error: sessionError,
			} = await supabase.auth.getSession();

			if (sessionError || !session) {
				alert("Your session expired. Please sign in again.");
				return false;
			}

			const {
				data: { user: authUser },
			} = await supabase.auth.getUser();

			if (!authUser) {
				alert("Your session expired. Please sign in again.");
				return false;
			}

			setIsLoading(true);
			try {
				if (action === "uncomplete") {
					const { error } = await supabase
						.from("completed_lessons")
						.delete()
						.eq("student_id", authUser.id)
						.eq("lesson_id", lesson.dbId);

					if (error) {
						alert(error.message ?? "Failed to update completion status");
						return false;
					}

					setCurrentLessonCompletion(false);
					return true;
				}

				const { error } = await supabase.from("completed_lessons").insert({
					student_id: authUser.id,
					lesson_id: lesson.dbId,
				});

				if (error) {
					alert(error.message ?? "Failed to mark lesson as complete");
					return false;
				}

				setCurrentLessonCompletion(true);
				setShowConfetti(true);
				setTimeout(() => setShowConfetti(false), 2000);
				return true;
			} catch {
				alert("An error occurred while updating your progress");
				return false;
			} finally {
				setIsLoading(false);
			}
		},
		[lesson.dbId, setCurrentLessonCompletion, supabase, userId],
	);

	const handleMarkClick = useCallback(async () => {
		if (isCompleted) return;

		setCurrentLessonCompletion(true);
		toast.success("Marked complete", {
			description: "Lesson marked as complete.",
			action: {
				label: "Undo",
				onClick: () => {
					setCurrentLessonCompletion(false);
					void toggleCompletion("uncomplete");
				},
			},
		});

		const success = await toggleCompletion("complete");
		if (!success) {
			setCurrentLessonCompletion(false);
		}
	}, [isCompleted, setCurrentLessonCompletion, toggleCompletion]);

	const handleUnmarkRequest = useCallback(() => {
		setConfirmOpen(true);
	}, []);

	const handleConfirmUnmark = useCallback(async () => {
		setConfirmOpen(false);
		const success = await toggleCompletion("uncomplete");
		if (!success) {
			setCurrentLessonCompletion(true);
		}
	}, [setCurrentLessonCompletion, toggleCompletion]);

	const handleCodeChange = useCallback((code: string) => {
		setCurrentCode(code);
	}, []);

	const handleRunComplete = useCallback(
		(output: string, isSuccess: boolean) => {
			console.log("Code execution completed:", { output, isSuccess });
		},
		[],
	);

	const sections = (
		<LessonSections
			lesson={lesson}
			variant={variant}
			userId={userId}
			submission={submission}
			showSubmissionPreview={showSubmissionPreview}
			onToggleSubmissionPreview={() =>
				setShowSubmissionPreview((previous) => !previous)
			}
			onSubmissionSuccess={fetchSubmission}
		/>
	);

	const mainPanel = (
		<LessonMainPanel
			lesson={lesson}
			navigation={navigation}
			courseSlug={courseSlug}
			isCompleted={isCompleted}
			isLoading={isLoading}
			userId={userId}
			showConfetti={showConfetti}
			confirmOpen={confirmOpen}
			onConfirmOpenChange={setConfirmOpen}
			onMarkClick={handleMarkClick}
			onUnmarkRequest={handleUnmarkRequest}
			onConfirmUnmark={handleConfirmUnmark}
			sections={sections}
		/>
	);

	const codePanel =
		variant === "level-term" ? (
			<LessonCodePanel
				lesson={lesson}
				onCodeChange={handleCodeChange}
				onRunComplete={handleRunComplete}
			/>
		) : undefined;

	return (
		<>
			<LessonViewerShell
				lesson={lesson}
				courseSlug={courseSlug}
				courseTitle={courseTitle}
				navigation={navigation}
				variant={variant}
				mainPanel={mainPanel}
				codePanel={codePanel}
			/>
			<output className="sr-only" aria-live="polite">
				{isCompleted ? "Lesson marked as complete" : "Lesson not completed"}
			</output>
		</>
	);
}
