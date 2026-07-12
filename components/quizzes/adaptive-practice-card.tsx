"use client";

import { Brain, CheckCircle2, HelpCircle, Sparkles } from "lucide-react";
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
import { Progress } from "@/components/ui/progress";
import type { Confidence } from "@/lib/adaptive-practice/types";
import type { StudentQuestion } from "@/lib/quizzes/types";

interface SessionPayload {
	mode: "adaptive";
	sessionId: string;
	position: number;
	targetLength: number;
	question: StudentQuestion;
}

interface AnswerPayload {
	correct: boolean;
	explanation: string;
	remediation: string | null;
	mastery: { score: number; status: string };
	status: "active" | "completed" | "fallback";
	position: number;
	targetLength: number;
	question: StudentQuestion | null;
}

export function AdaptivePracticeCard({
	onUnavailable,
	onProgress,
}: {
	onUnavailable: () => void;
	onProgress: () => void;
}) {
	const started = useRef(false);
	const [session, setSession] = useState<SessionPayload | null>(null);
	const [answer, setAnswer] = useState<string | string[]>("");
	const [confidence, setConfidence] = useState<Confidence | null>(null);
	const [usedHint, setUsedHint] = useState(false);
	const [feedback, setFeedback] = useState<AnswerPayload | null>(null);
	const [busy, setBusy] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		if (started.current) return;
		started.current = true;
		fetch("/api/practice/v1/sessions", { method: "POST" })
			.then(async (response) => (response.ok ? response.json() : null))
			.then((payload) => {
				if (payload?.mode === "adaptive") setSession(payload);
				else onUnavailable();
			})
			.catch(onUnavailable)
			.finally(() => setBusy(false));
	}, [onUnavailable]);

	if (busy)
		return (
			<Card className="border-purple-200">
				<CardContent className="py-10 text-center text-muted-foreground">
					<Sparkles className="mx-auto mb-3 h-8 w-8 animate-pulse" />
					Preparing your practice session…
				</CardContent>
			</Card>
		);
	if (!session) return null;
	if (feedback?.status === "completed")
		return (
			<Card className="border-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/20">
				<CardContent className="py-12 text-center">
					<CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-emerald-600" />
					<h2 className="text-2xl font-bold">Practice complete!</h2>
					<p className="mt-2 text-muted-foreground">
						Your private mastery map has been updated. Nothing from this session
						affects a leaderboard.
					</p>
				</CardContent>
			</Card>
		);

	const currentAnswer =
		answer === "" && session.question.question_type === "code_ordering"
			? session.question.options
			: answer;
	const submit = async () => {
		if (currentAnswer === "" || !confidence) return;
		setBusy(true);
		setError("");
		const response = await fetch(
			`/api/practice/v1/sessions/${session.sessionId}/responses`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					questionId: session.question.id,
					answer: currentAnswer,
					confidence,
					usedHint,
					idempotencyKey: crypto.randomUUID(),
				}),
			},
		);
		const payload = await response.json().catch(() => null);
		if (response.ok) {
			setFeedback(payload);
			onProgress();
		} else
			setError(
				payload?.error || "Could not save this answer. Please try again.",
			);
		setBusy(false);
	};
	const next = () => {
		if (!feedback?.question) {
			if (feedback?.status === "fallback") onUnavailable();
			return;
		}
		setSession({
			...session,
			position: feedback.position,
			targetLength: feedback.targetLength,
			question: feedback.question,
		});
		setAnswer("");
		setConfidence(null);
		setUsedHint(false);
		setFeedback(null);
	};

	return (
		<Card className="border-purple-200 bg-purple-50/30 dark:bg-purple-950/20">
			<CardHeader>
				<div className="flex items-center justify-between gap-3">
					<div>
						<CardTitle className="flex items-center gap-2">
							<Brain className="h-5 w-5 text-purple-600" />
							Adaptive Practice
						</CardTitle>
						<CardDescription>
							Private practice selected from your approved course questions.
						</CardDescription>
					</div>
					<Badge>
						{session.position} of {session.targetLength}
					</Badge>
				</div>
				<Progress value={(session.position / session.targetLength) * 100} />
			</CardHeader>
			<CardContent className="space-y-5">
				<h2 className="text-xl font-semibold">{session.question.question}</h2>
				<QuestionInput
					question={session.question}
					value={currentAnswer}
					onChange={setAnswer}
					disabled={Boolean(feedback)}
				/>
				{usedHint && (
					<Alert>
						<HelpCircle className="h-4 w-4" />
						<AlertDescription>
							{session.question.hint ||
								"Think about the concept used in this lesson."}
						</AlertDescription>
					</Alert>
				)}
				{!feedback && (
					<>
						<Button
							type="button"
							variant="outline"
							disabled={usedHint}
							onClick={() => setUsedHint(true)}
						>
							<HelpCircle className="mr-2 h-4 w-4" />
							Show hint
						</Button>
						<fieldset className="space-y-2">
							<legend className="font-medium">How confident are you?</legend>
							<div className="grid gap-2 sm:grid-cols-3">
								{(["sure", "unsure", "guessing"] as const).map((value) => (
									<Button
										key={value}
										type="button"
										variant={confidence === value ? "default" : "outline"}
										aria-pressed={confidence === value}
										onClick={() => setConfidence(value)}
										className="capitalize"
									>
										{value}
									</Button>
								))}
							</div>
						</fieldset>
					</>
				)}
				{feedback && (
					<Alert
						className={
							feedback.correct ? "border-emerald-300" : "border-amber-300"
						}
					>
						<AlertDescription>
							<strong>
								{feedback.correct ? "Correct!" : "Let’s review it."}
							</strong>
							<br />
							{feedback.explanation}
							{feedback.remediation && (
								<>
									<br />
									<br />
									<strong>Quick mini-lesson</strong>
									<br />
									{feedback.remediation}
								</>
							)}
						</AlertDescription>
					</Alert>
				)}
				{error && (
					<Alert variant="destructive">
						<AlertDescription>{error}</AlertDescription>
					</Alert>
				)}
				<Button
					disabled={
						busy || (!feedback && (currentAnswer === "" || !confidence))
					}
					onClick={feedback ? next : submit}
				>
					{busy ? "Saving…" : feedback ? "Next question" : "Check answer"}
				</Button>
			</CardContent>
		</Card>
	);
}
