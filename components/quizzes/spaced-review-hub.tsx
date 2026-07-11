"use client";

import { Brain, CalendarClock, CheckCircle2, RefreshCw } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { QuestionInput } from "@/components/quizzes/question-input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { conceptLabel } from "@/lib/quizzes/learning";
import type { StudentQuestion } from "@/lib/quizzes/types";

interface MasteryRow {
	course_id: string;
	concept_tag: string;
	correct_count: number;
	total_count: number;
	mastery_score: number;
	status: "learning" | "practising" | "mastered";
	courses: { title: string }[];
}
interface ReviewRow {
	queueId: string;
	courseTitle: string;
	intervalStep: number;
	question: StudentQuestion;
}
interface LearningPayload {
	mastery: MasteryRow[];
	dueCount: number;
	totalScheduled: number;
	nextReviewAt: string | null;
	reviews: ReviewRow[];
}

export function SpacedReviewHub() {
	const [data, setData] = useState<LearningPayload | null>(null);
	const [answer, setAnswer] = useState<string | string[]>("");
	const [feedback, setFeedback] = useState<{
		correct: boolean;
		correctAnswer: string | string[];
		explanation: string;
		concept: string;
		nextReviewDays: number | null;
	} | null>(null);
	const [busy, setBusy] = useState(false);
	const load = useCallback(() => {
		fetch("/api/quiz/learning")
			.then((response) => (response.ok ? response.json() : null))
			.then(setData)
			.catch(() => setData(null));
	}, []);
	useEffect(() => load(), [load]);
	const review = data?.reviews[0];
	const currentAnswer = review
		? answer === "" && review.question.question_type === "code_ordering"
			? review.question.options
			: answer
		: "";
	const submit = async () => {
		if (!review || currentAnswer === "") return;
		setBusy(true);
		const response = await fetch("/api/quiz/learning", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				queueId: review.queueId,
				questionId: review.question.id,
				answer: currentAnswer,
				timeTakenMs: 0,
			}),
		});
		if (response.ok) setFeedback(await response.json());
		setBusy(false);
	};
	const next = () => {
		setFeedback(null);
		setAnswer("");
		load();
	};
	if (!data)
		return <p className="py-16 text-center">Loading your learning map…</p>;
	return (
		<div className="space-y-8">
			<div>
				<h1 className="flex items-center gap-2 text-3xl font-bold">
					<Brain className="h-8 w-8 text-purple-600" /> My Learning Map
				</h1>
				<p className="mt-2 text-muted-foreground">
					Short reviews at the right time help ideas stay with you.
				</p>
			</div>
			<Card className="border-purple-200">
				<CardHeader>
					<div className="flex items-center justify-between gap-3">
						<div>
							<CardTitle>Today’s review</CardTitle>
							<CardDescription>
								{data.dueCount} question{data.dueCount === 1 ? "" : "s"} ready
							</CardDescription>
						</div>
						<Badge>{data.dueCount} due</Badge>
					</div>
				</CardHeader>
				<CardContent className="space-y-4">
					{review ? (
						<>
							<p className="text-sm text-muted-foreground">
								{review.courseTitle} · Review stage {review.intervalStep + 1} of
								3
							</p>
							<h2 className="text-xl font-semibold">
								{review.question.question}
							</h2>
							<QuestionInput
								question={review.question}
								value={currentAnswer}
								onChange={setAnswer}
								disabled={Boolean(feedback)}
							/>
							{feedback && (
								<Alert
									className={
										feedback.correct ? "border-emerald-300" : "border-amber-300"
									}
								>
									<AlertDescription>
										<strong>
											{feedback.correct
												? "Nice work!"
												: `Answer: ${Array.isArray(feedback.correctAnswer) ? feedback.correctAnswer.join(" → ") : feedback.correctAnswer}`}
										</strong>
										<br />
										{feedback.explanation}
										<br />
										<span className="text-xs text-muted-foreground">
											{feedback.nextReviewDays
												? `We’ll revisit ${conceptLabel(feedback.concept)} in ${feedback.nextReviewDays} days.`
												: `${conceptLabel(feedback.concept)} has completed its review cycle.`}
										</span>
									</AlertDescription>
								</Alert>
							)}
							<Button
								disabled={busy || currentAnswer === ""}
								onClick={feedback ? next : submit}
							>
								{feedback ? "Next review" : busy ? "Checking…" : "Check answer"}
							</Button>
						</>
					) : (
						<div className="py-8 text-center">
							<CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-emerald-500" />
							<p className="text-lg font-semibold">You’re caught up!</p>
							<p className="text-sm text-muted-foreground">
								{data.nextReviewAt
									? `Next review: ${new Date(data.nextReviewAt).toLocaleDateString()}`
									: "Complete a quiz to start your review schedule."}
							</p>
						</div>
					)}
				</CardContent>
			</Card>
			<section>
				<h2 className="mb-4 text-2xl font-semibold">Concept mastery</h2>
				{data.mastery.length ? (
					<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
						{data.mastery.map((concept) => (
							<Card key={`${concept.course_id}-${concept.concept_tag}`}>
								<CardHeader className="pb-3">
									<div className="flex items-start justify-between gap-2">
										<div>
											<CardTitle className="capitalize">
												{conceptLabel(concept.concept_tag)}
											</CardTitle>
											<CardDescription>
												{concept.courses?.[0]?.title || "Course"}
											</CardDescription>
										</div>
										<Badge
											variant={
												concept.status === "mastered" ? "default" : "outline"
											}
											className="capitalize"
										>
											{concept.status}
										</Badge>
									</div>
								</CardHeader>
								<CardContent>
									<div className="mb-2 flex justify-between text-sm">
										<span>
											{concept.correct_count}/{concept.total_count} correct
										</span>
										<strong>{concept.mastery_score}%</strong>
									</div>
									<Progress value={concept.mastery_score} />
								</CardContent>
							</Card>
						))}
					</div>
				) : (
					<Card>
						<CardContent className="py-10 text-center text-muted-foreground">
							<RefreshCw className="mx-auto mb-2 h-8 w-8" />
							Your map will grow as you complete quizzes.
						</CardContent>
					</Card>
				)}
			</section>
			<p className="flex items-center gap-2 text-sm text-muted-foreground">
				<CalendarClock className="h-4 w-4" />
				Reviews move from 2 days to 1 week to 1 month as you remember each idea.
			</p>
		</div>
	);
}
