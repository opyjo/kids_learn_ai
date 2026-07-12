"use client";

import {
	Brain,
	CheckCircle2,
	Lightbulb,
	Lock,
	RotateCcw,
	Trophy,
	XCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { QuestionInput } from "@/components/quizzes/question-input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { StudentQuestion } from "@/lib/quizzes/types";
import { cn } from "@/lib/utils";

interface QuizPayload {
	quiz: { id: string; title: string; description?: string } | null;
	questions: StudentQuestion[];
	attempts: { percentage: number; passed: boolean; attempt_number: number }[];
	canAttempt: boolean;
}

const MAX_ATTEMPTS = 2;

function defaultAnswer(question: StudentQuestion): string | string[] {
	return question.question_type === "code_ordering" ? question.options : "";
}

function Shell({
	badge,
	children,
}: {
	badge?: React.ReactNode;
	children: React.ReactNode;
}) {
	return (
		<div className="rounded-xl border border-purple-200/60 bg-purple-50/70 p-4 dark:border-purple-900/60 dark:bg-purple-950/20">
			<div className="mb-3 flex items-center justify-between gap-2">
				<div className="flex items-center gap-2.5">
					<Brain className="h-4 w-4 text-purple-600" />
					<h3 className="text-sm font-semibold text-purple-800 dark:text-purple-200">
						Quick Check
					</h3>
				</div>
				{badge}
			</div>
			{children}
		</div>
	);
}

export function QuickCheck({
	lessonId,
	signedIn,
}: {
	lessonId: string;
	signedIn: boolean;
}) {
	const [data, setData] = useState<QuizPayload | null>(null);
	const [loading, setLoading] = useState(signedIn);
	const [playing, setPlaying] = useState(false);
	const [index, setIndex] = useState(0);
	const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
	const [feedback, setFeedback] = useState<{
		correct: boolean;
		explanation: string;
		correctAnswer: string | string[];
	} | null>(null);
	const [showHint, setShowHint] = useState(false);
	const [result, setResult] = useState<{
		percentage: number;
		passed: boolean;
		correctCount: number;
	} | null>(null);
	const [busy, setBusy] = useState(false);
	const [submitError, setSubmitError] = useState("");
	const startedAt = useRef(Date.now());
	const timeTaken = useRef<Record<string, number>>({});

	useEffect(() => {
		if (!signedIn) return;
		fetch(`/api/quiz/lesson/${lessonId}`)
			.then((response) => (response.ok ? response.json() : null))
			.then((payload: QuizPayload | null) => {
				setData(payload);
				// First-time players jump straight in; returning players get a
				// summary first so they don't burn their last try by accident.
				if (payload?.quiz && payload.attempts.length === 0) setPlaying(true);
			})
			.catch(() => setData(null))
			.finally(() => setLoading(false));
	}, [lessonId, signedIn]);

	if (!signedIn) {
		return (
			<Shell>
				<p className="text-sm text-muted-foreground">
					Sign in to play the Quick Check and save your score!
				</p>
			</Shell>
		);
	}
	if (loading) {
		return (
			<Shell>
				<p className="text-sm text-muted-foreground" aria-live="polite">
					Getting your questions ready…
				</p>
			</Shell>
		);
	}
	if (!data?.quiz) return null;

	const questions = data.questions;
	const question = questions[index];
	const currentAnswer = question
		? (answers[question.id] ?? defaultAnswer(question))
		: "";
	const best = data.attempts.length
		? Math.max(...data.attempts.map((attempt) => attempt.percentage))
		: null;
	const bestPassed = data.attempts.some((attempt) => attempt.passed);

	const startAttempt = () => {
		setIndex(0);
		setAnswers({});
		setFeedback(null);
		setShowHint(false);
		setResult(null);
		setSubmitError("");
		timeTaken.current = {};
		startedAt.current = Date.now();
		setPlaying(true);
	};

	const check = async () => {
		if (!question || currentAnswer === "") return;
		setBusy(true);
		const elapsed = Date.now() - startedAt.current;
		timeTaken.current[question.id] = elapsed;
		// Persist the answer even when the student kept the default order of a
		// code_ordering question, so the final submission includes it.
		setAnswers((previous) => ({ ...previous, [question.id]: currentAnswer }));
		const response = await fetch(`/api/quiz/lesson/${lessonId}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				action: "check",
				questionId: question.id,
				answer: currentAnswer,
				timeTakenMs: elapsed,
			}),
		});
		if (response.ok) setFeedback(await response.json());
		setBusy(false);
	};

	const next = async () => {
		if (index < questions.length - 1) {
			setIndex(index + 1);
			setFeedback(null);
			setShowHint(false);
			startedAt.current = Date.now();
			return;
		}
		setBusy(true);
		setSubmitError("");
		const response = await fetch(`/api/quiz/lesson/${lessonId}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				answers: questions.map((item) => ({
					questionId: item.id,
					answer: answers[item.id] ?? defaultAnswer(item),
					timeTakenMs: timeTaken.current[item.id] ?? 0,
				})),
			}),
		});
		if (response.ok) {
			const saved = await response.json();
			const graded: { correct: boolean }[] = Array.isArray(saved.graded)
				? saved.graded
				: [];
			setResult({
				percentage: saved.percentage,
				passed: saved.passed,
				correctCount: graded.filter((item) => item.correct).length,
			});
			setData({
				...data,
				canAttempt: data.attempts.length + 1 < MAX_ATTEMPTS,
				attempts: [
					...data.attempts,
					{
						percentage: saved.percentage,
						passed: saved.passed,
						attempt_number: data.attempts.length + 1,
					},
				],
			});
		} else {
			setSubmitError("We couldn’t save your answers. Please try again!");
		}
		setBusy(false);
	};

	const badge =
		best !== null ? <Badge variant="outline">Best: {best}%</Badge> : undefined;

	if (result) {
		return (
			<Shell badge={badge}>
				<div className="space-y-3 py-2 text-center">
					<p className="text-4xl" aria-hidden>
						{result.percentage === 100 ? "🌟" : result.passed ? "🎉" : "💪"}
					</p>
					<p className="text-4xl font-bold">{result.percentage}%</p>
					<p className="text-sm text-muted-foreground">
						You got {result.correctCount} of {questions.length} right.
					</p>
					<p>
						{result.percentage === 100
							? "Perfect score! You’re a superstar!"
							: result.passed
								? "You passed this Quick Check — amazing work!"
								: data.canAttempt
									? "Good try! Read the explanations, then have one more go."
									: "Great effort! Review the lesson with your teacher and keep practising."}
					</p>
					{data.canAttempt && result.percentage < 100 && (
						<Button onClick={startAttempt}>
							<RotateCcw className="mr-2 h-4 w-4" />
							Try once more
						</Button>
					)}
				</div>
			</Shell>
		);
	}

	if (!playing) {
		return (
			<Shell badge={badge}>
				<div className="space-y-3 py-2 text-center">
					{bestPassed ? (
						<>
							<Trophy className="mx-auto h-8 w-8 text-amber-500" aria-hidden />
							<p className="font-semibold">
								You’ve already passed this Quick Check!
							</p>
						</>
					) : (
						<p className="font-semibold">
							You’ve played this Quick Check before.
						</p>
					)}
					{best !== null && (
						<p className="text-sm text-muted-foreground">
							Your best score is {best}%.
						</p>
					)}
					{data.canAttempt ? (
						<Button onClick={startAttempt}>
							<RotateCcw className="mr-2 h-4 w-4" />
							{bestPassed ? "Play again (last try!)" : "Try again (last try!)"}
						</Button>
					) : (
						<p className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
							<Lock className="h-3.5 w-3.5" aria-hidden />
							You’ve used both tries. Ask your teacher if you’d like another go.
						</p>
					)}
				</div>
			</Shell>
		);
	}

	if (!question) {
		return (
			<Shell badge={badge}>
				<p className="text-sm text-muted-foreground">
					This quiz needs questions before it can be played.
				</p>
			</Shell>
		);
	}

	return (
		<Shell badge={badge}>
			<div className="space-y-4">
				<p className="text-sm text-muted-foreground">
					{data.quiz.description ||
						"Three friendly questions to help this lesson stick."}
				</p>
				<div className="flex items-center justify-between text-sm text-muted-foreground">
					<span>
						Question {index + 1} of {questions.length}
					</span>
					<span>
						Try {data.attempts.length + 1} of {MAX_ATTEMPTS}
					</span>
				</div>
				<div className="flex gap-1.5" aria-hidden>
					{questions.map((item, itemIndex) => (
						<div
							key={item.id}
							className={cn(
								"h-2 flex-1 rounded-full transition-colors",
								itemIndex < index
									? "bg-purple-500"
									: itemIndex === index
										? "bg-purple-300 dark:bg-purple-700"
										: "bg-muted",
							)}
						/>
					))}
				</div>
				<h3 className="text-lg font-semibold sm:text-xl">
					{question.question}
				</h3>
				<QuestionInput
					question={question}
					value={currentAnswer}
					onChange={(value) => setAnswers({ ...answers, [question.id]: value })}
					disabled={Boolean(feedback)}
				/>
				{question.hint && !feedback && (
					<div>
						{showHint ? (
							<div className="rounded-lg border border-amber-200/70 bg-amber-50/70 p-3 text-sm dark:border-amber-900/60 dark:bg-amber-950/20">
								<span aria-hidden>💡 </span>
								{question.hint}
							</div>
						) : (
							<Button
								type="button"
								variant="ghost"
								size="sm"
								onClick={() => setShowHint(true)}
							>
								<Lightbulb className="mr-1.5 h-4 w-4 text-amber-500" />
								Need a hint?
							</Button>
						)}
					</div>
				)}
				{feedback && (
					<Alert
						className={
							feedback.correct ? "border-emerald-300" : "border-amber-300"
						}
					>
						<AlertDescription className="flex gap-2">
							{feedback.correct ? (
								<CheckCircle2 className="h-5 w-5 text-emerald-600" />
							) : (
								<XCircle className="h-5 w-5 text-amber-600" />
							)}
							<span>
								<strong>
									{feedback.correct
										? "🎉 You got it!"
										: `Not quite — the answer is: ${Array.isArray(feedback.correctAnswer) ? feedback.correctAnswer.join(" → ") : feedback.correctAnswer}`}
								</strong>
								<br />
								{feedback.explanation}
							</span>
						</AlertDescription>
					</Alert>
				)}
				{submitError && (
					<Alert className="border-red-300">
						<AlertDescription>{submitError}</AlertDescription>
					</Alert>
				)}
				<Button
					disabled={busy || currentAnswer === ""}
					onClick={feedback ? next : check}
				>
					{busy
						? "Checking…"
						: feedback
							? index === questions.length - 1
								? "See my result"
								: "Next question"
							: "Check answer"}
				</Button>
			</div>
		</Shell>
	);
}
