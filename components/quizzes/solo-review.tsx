"use client";

import { BookOpenCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { QuestionInput } from "@/components/quizzes/question-input";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { StudentQuestion } from "@/lib/quizzes/types";

export function SoloReview({ quizId }: { quizId: string }) {
	const [open, setOpen] = useState(false);
	const [questions, setQuestions] = useState<StudentQuestion[]>([]);
	const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
	const [result, setResult] = useState<{
		percentage: number;
		graded: {
			questionId: string;
			correct: boolean;
			correctAnswer: string | string[];
			explanation: string;
		}[];
	} | null>(null);
	useEffect(() => {
		if (!open || questions.length) return;
		fetch(`/api/quiz/review/${quizId}`)
			.then((response) => (response.ok ? response.json() : null))
			.then((data) => setQuestions(data?.questions || []));
	}, [open, questions.length, quizId]);
	if (!open)
		return (
			<Button variant="outline" onClick={() => setOpen(true)}>
				<BookOpenCheck className="mr-2 h-4 w-4" />
				Review on my own
			</Button>
		);
	const submit = async () => {
		const response = await fetch(`/api/quiz/review/${quizId}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				answers: questions.map((question) => ({
					questionId: question.id,
					answer:
						answers[question.id] ??
						(question.question_type === "code_ordering"
							? question.options
							: ""),
					timeTakenMs: 0,
				})),
			}),
		});
		if (response.ok) setResult(await response.json());
	};
	return (
		<Card className="mt-6 text-left">
			<CardHeader>
				<CardTitle>Solo review</CardTitle>
				<CardDescription>
					This practice does not change the official leaderboard.
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				{result && (
					<p className="rounded-lg bg-emerald-50 p-4 text-center text-xl font-bold text-emerald-900">
						Review score: {result.percentage}%
					</p>
				)}
				{questions.map((question, index) => {
					const grade = result?.graded.find(
						(item) => item.questionId === question.id,
					);
					return (
						<div key={question.id} className="space-y-3 border-t pt-5">
							<p className="font-semibold">
								{index + 1}. {question.question}
							</p>
							<QuestionInput
								question={question}
								value={
									answers[question.id] ??
									(question.question_type === "code_ordering"
										? question.options
										: "")
								}
								onChange={(value) =>
									setAnswers({ ...answers, [question.id]: value })
								}
								disabled={Boolean(result)}
							/>
							{grade && (
								<p className="text-sm">
									<strong>{grade.correct ? "Correct." : "Review:"}</strong>{" "}
									{grade.explanation}
								</p>
							)}
						</div>
					);
				})}
				{!result && questions.length > 0 && (
					<Button
						onClick={submit}
						disabled={questions.some(
							(question) =>
								question.question_type !== "code_ordering" &&
								answers[question.id] === undefined,
						)}
					>
						Check my review
					</Button>
				)}
			</CardContent>
		</Card>
	);
}
