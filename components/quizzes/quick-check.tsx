"use client";

import { Brain, CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
import type { StudentQuestion } from "@/lib/quizzes/types";

interface QuizPayload {
	quiz: { id: string; title: string; description?: string } | null;
	questions: StudentQuestion[];
	attempts: { percentage: number; passed: boolean; attempt_number: number }[];
	canAttempt: boolean;
}

export function QuickCheck({
	lessonId,
	signedIn,
}: {
	lessonId: string;
	signedIn: boolean;
}) {
	const [data, setData] = useState<QuizPayload | null>(null);
	const [index, setIndex] = useState(0);
	const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
	const [feedback, setFeedback] = useState<{
		correct: boolean;
		explanation: string;
		correctAnswer: string | string[];
	} | null>(null);
	const [result, setResult] = useState<{
		percentage: number;
		passed: boolean;
	} | null>(null);
	const [loading, setLoading] = useState(false);
	const startedAt = useRef(Date.now());

	useEffect(() => {
		if (!signedIn) return;
		fetch(`/api/quiz/lesson/${lessonId}`)
			.then((response) => (response.ok ? response.json() : null))
			.then(setData)
			.catch(() => setData(null));
	}, [lessonId, signedIn]);
	if (!signedIn || !data?.quiz) return null;
	const question = data.questions[index];
	const currentAnswer = question
		? (answers[question.id] ??
			(question.question_type === "code_ordering" ? question.options : ""))
		: "";
	const best = data.attempts.length
		? Math.max(...data.attempts.map((attempt) => attempt.percentage))
		: null;

	const check = async () => {
		if (!question || currentAnswer === "") return;
		setLoading(true);
		const response = await fetch(`/api/quiz/lesson/${lessonId}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				action: "check",
				questionId: question.id,
				answer: currentAnswer,
				timeTakenMs: Date.now() - startedAt.current,
			}),
		});
		if (response.ok) setFeedback(await response.json());
		setLoading(false);
	};
	const next = async () => {
		if (index < data.questions.length - 1) {
			setIndex(index + 1);
			setFeedback(null);
			startedAt.current = Date.now();
			return;
		}
		setLoading(true);
		const response = await fetch(`/api/quiz/lesson/${lessonId}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				answers: data.questions.map((item) => ({
					questionId: item.id,
					answer: answers[item.id],
					timeTakenMs: 0,
				})),
			}),
		});
		if (response.ok) {
			const saved = await response.json();
			setResult(saved);
			setData({
				...data,
				canAttempt: data.attempts.length === 0,
				attempts: [
					...data.attempts,
					{
						percentage: saved.percentage,
						passed: saved.passed,
						attempt_number: data.attempts.length + 1,
					},
				],
			});
		}
		setLoading(false);
	};
	const retry = () => {
		setIndex(0);
		setAnswers({});
		setFeedback(null);
		setResult(null);
		startedAt.current = Date.now();
	};

	return (
		<Card className="border-purple-200 bg-purple-50/40 dark:border-purple-900 dark:bg-purple-950/20">
			<CardHeader>
				<div className="flex items-center justify-between">
					<CardTitle className="flex items-center gap-2">
						<Brain className="h-5 w-5 text-purple-600" />
						Quick Check
					</CardTitle>
					{best !== null && <Badge variant="outline">Best: {best}%</Badge>}
				</div>
				<CardDescription>
					{data.quiz.description ||
						"Three friendly questions to help this lesson stick."}
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				{result ? (
					<div className="space-y-3 text-center">
						<p className="text-3xl font-bold">{result.percentage}%</p>
						<p>
							{result.passed
								? "You’ve mastered this quick check!"
								: "Good effort—review the explanations and try once more."}
						</p>
						{data.canAttempt && (
							<Button onClick={retry}>
								<RotateCcw className="mr-2 h-4 w-4" />
								Try once more
							</Button>
						)}
					</div>
				) : question ? (
					<>
						<div className="flex justify-between text-sm text-muted-foreground">
							<span>
								Question {index + 1} of {data.questions.length}
							</span>
							<span>Attempt {data.attempts.length + 1} of 2</span>
						</div>
						<h3 className="text-lg font-semibold">{question.question}</h3>
						<QuestionInput
							question={question}
							value={currentAnswer}
							onChange={(value) =>
								setAnswers({ ...answers, [question.id]: value })
							}
							disabled={Boolean(feedback)}
						/>
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
												? "Correct!"
												: `Answer: ${Array.isArray(feedback.correctAnswer) ? feedback.correctAnswer.join(" → ") : feedback.correctAnswer}`}
										</strong>
										<br />
										{feedback.explanation}
									</span>
								</AlertDescription>
							</Alert>
						)}
						<Button
							disabled={loading || currentAnswer === ""}
							onClick={feedback ? next : check}
						>
							{loading
								? "Checking…"
								: feedback
									? index === data.questions.length - 1
										? "See my result"
										: "Next question"
									: "Check answer"}
						</Button>
					</>
				) : (
					<p>This quiz needs questions before it can be played.</p>
				)}
			</CardContent>
		</Card>
	);
}
