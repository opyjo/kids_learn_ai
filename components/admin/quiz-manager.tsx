"use client";

import {
	Archive,
	Bot,
	Copy,
	Download,
	Gamepad2,
	Plus,
	Save,
	Sparkles,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { QuestionInput } from "@/components/quizzes/question-input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { QuizQuestionInput } from "@/lib/quizzes/schemas";
import type { QuestionType } from "@/lib/quizzes/types";

interface QuizRow {
	id: string;
	title: string;
	description: string;
	quiz_type: "quick_check" | "term_finale";
	status: "draft" | "published" | "archived";
	lesson_id: string | null;
	course_id: string | null;
	quiz_questions?: { count: number }[];
	quiz_attempts?: { count: number }[];
}
interface Course {
	id: string;
	title: string;
}
interface Lesson {
	id: string;
	title: string;
	course_id: string;
	order_index: number;
}
interface QuizReport {
	participation: number;
	livePlayers: number;
	masteryRate: number;
	misconceptions: [string, number][];
}

const blankQuestion = (index: number): QuizQuestionInput => ({
	question: "",
	question_type: "multiple_choice",
	options: ["", "", "", ""],
	correct_answer: "",
	explanation: "",
	hint: "",
	misconception_tag: "",
	concept_tag: "general",
	points: 1000,
	order_index: index,
	time_limit_seconds: 30,
});

export function QuizManager({
	courses,
	lessons,
}: {
	courses: Course[];
	lessons: Lesson[];
}) {
	const [quizzes, setQuizzes] = useState<QuizRow[]>([]);
	const [report, setReport] = useState<QuizReport | null>(null);
	const [editingId, setEditingId] = useState<string | null>(null);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [type, setType] = useState<"quick_check" | "term_finale">(
		"quick_check",
	);
	const [scopeId, setScopeId] = useState("");
	const [status, setStatus] = useState<"draft" | "published">("draft");
	const [questions, setQuestions] = useState<QuizQuestionInput[]>([
		blankQuestion(0),
		blankQuestion(1),
		blankQuestion(2),
	]);
	const [busy, setBusy] = useState(false);
	const [showPreview, setShowPreview] = useState(false);
	const load = useCallback(async () => {
		const [quizResponse, reportResponse] = await Promise.all([
			fetch("/api/admin/quizzes"),
			fetch("/api/admin/quizzes/report"),
		]);
		if (quizResponse.ok) setQuizzes((await quizResponse.json()).quizzes);
		if (reportResponse.ok) setReport(await reportResponse.json());
	}, []);
	useEffect(() => {
		void load();
	}, [load]);
	const reset = () => {
		setEditingId(null);
		setTitle("");
		setDescription("");
		setScopeId("");
		setStatus("draft");
		setQuestions(
			Array.from({ length: type === "quick_check" ? 3 : 12 }, (_, index) =>
				blankQuestion(index),
			),
		);
	};
	const edit = async (id: string) => {
		const response = await fetch(`/api/admin/quizzes/${id}`);
		if (!response.ok) return;
		const quiz = await response.json();
		setEditingId(id);
		setTitle(quiz.title);
		setDescription(quiz.description || "");
		setType(quiz.quiz_type);
		setScopeId(quiz.lesson_id || quiz.course_id);
		setStatus(quiz.status === "published" ? "published" : "draft");
		setQuestions(
			quiz.quiz_questions.sort(
				(a: QuizQuestionInput, b: QuizQuestionInput) =>
					a.order_index - b.order_index,
			),
		);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	const save = async () => {
		setBusy(true);
		const payload = {
			title,
			description,
			quiz_type: type,
			status,
			passing_score: 67,
			lesson_id: type === "quick_check" ? scopeId : null,
			course_id: type === "term_finale" ? scopeId : null,
			questions: questions.map((question, index) => ({
				...question,
				order_index: index,
			})),
		};
		const response = await fetch(
			editingId ? `/api/admin/quizzes/${editingId}` : "/api/admin/quizzes",
			{
				method: editingId ? "PUT" : "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			},
		);
		const data = await response.json().catch(() => ({}));
		setBusy(false);
		if (!response.ok)
			return toast.error("Could not save quiz", {
				description:
					typeof data.error === "string"
						? data.error
						: "Check every question and answer.",
			});
		toast.success(status === "published" ? "Quiz published" : "Draft saved");
		reset();
		void load();
	};
	const generate = async () => {
		if (!scopeId) return toast.error("Choose a lesson or course first");
		setBusy(true);
		const response = await fetch("/api/admin/quizzes/generate", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				[type === "quick_check" ? "lessonId" : "courseId"]: scopeId,
				count: type === "quick_check" ? 3 : 12,
			}),
		});
		const data = await response.json();
		setBusy(false);
		if (!response.ok) return toast.error(data.error || "Generation failed");
		setQuestions(data.questions);
		setStatus("draft");
		toast.success("AI draft ready for your review");
	};
	const updateQuestion = (index: number, patch: Partial<QuizQuestionInput>) =>
		setQuestions(
			questions.map((question, questionIndex) =>
				questionIndex === index ? { ...question, ...patch } : question,
			),
		);
	const duplicate = async (id: string) => {
		const response = await fetch(`/api/admin/quizzes/${id}`);
		const quiz = await response.json();
		const {
			id: _id,
			created_at: _created,
			updated_at: _updated,
			quiz_questions: copied,
			...rest
		} = quiz;
		const create = await fetch("/api/admin/quizzes", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				...rest,
				title: `${quiz.title} (Copy)`,
				status: "draft",
				questions: copied.map(
					({
						id: _questionId,
						quiz_id: _quizId,
						created_at: _questionCreated,
						...question
					}: Record<string, unknown>) => question,
				),
			}),
		});
		if (create.ok) {
			toast.success("Draft duplicated");
			void load();
		}
	};
	const archive = async (id: string) => {
		if ((await fetch(`/api/admin/quizzes/${id}`, { method: "DELETE" })).ok) {
			toast.success("Quiz archived");
			void load();
		}
	};
	const host = async (quizId: string) => {
		const response = await fetch("/api/quiz/live", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ quizId }),
		});
		const data = await response.json();
		if (response.ok) window.location.href = `/quiz/live/${data.code}`;
		else toast.error(data.error);
	};

	return (
		<div className="space-y-6">
			<div className="flex flex-wrap items-center justify-between gap-3">
				<div>
					<h1 className="text-2xl font-semibold">Quizzes & Live Games</h1>
					<p className="text-sm text-muted-foreground">
						Author low-pressure checks and host term finales.
					</p>
				</div>
				<Button variant="outline" asChild>
					<a href="/api/admin/quizzes/report?format=csv">
						<Download className="mr-2 h-4 w-4" />
						Export report
					</a>
				</Button>
			</div>
			<Card>
				<CardHeader>
					<CardTitle>{editingId ? "Edit quiz" : "Create a quiz"}</CardTitle>
					<CardDescription>
						AI output is always a draft until you review and publish it.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-5">
					<div className="grid gap-4 md:grid-cols-2">
						<div>
							<Label>Title</Label>
							<Input
								value={title}
								onChange={(event) => setTitle(event.target.value)}
								placeholder="Term 1 Challenge"
							/>
						</div>
						<div>
							<Label>Type</Label>
							<Select
								value={type}
								onValueChange={(value: "quick_check" | "term_finale") => {
									setType(value);
									setScopeId("");
									setQuestions(
										Array.from(
											{ length: value === "quick_check" ? 3 : 12 },
											(_, index) => blankQuestion(index),
										),
									);
								}}
							>
								<SelectTrigger>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="quick_check">
										Lesson Quick Check
									</SelectItem>
									<SelectItem value="term_finale">Term Finale</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
					<div>
						<Label>Description</Label>
						<Textarea
							value={description}
							onChange={(event) => setDescription(event.target.value)}
						/>
					</div>
					<div className="grid gap-4 md:grid-cols-2">
						<div>
							<Label>{type === "quick_check" ? "Lesson" : "Course"}</Label>
							<Select value={scopeId} onValueChange={setScopeId}>
								<SelectTrigger>
									<SelectValue placeholder="Choose…" />
								</SelectTrigger>
								<SelectContent>
									{(type === "quick_check" ? lessons : courses).map((item) => (
										<SelectItem key={item.id} value={item.id}>
											{"order_index" in item ? `${item.order_index}. ` : ""}
											{item.title}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
						<div>
							<Label>Status</Label>
							<Select
								value={status}
								onValueChange={(value: "draft" | "published") =>
									setStatus(value)
								}
							>
								<SelectTrigger>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="draft">Draft</SelectItem>
									<SelectItem value="published">Published</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
					<div className="flex gap-2">
						<Button
							type="button"
							variant="secondary"
							disabled={busy}
							onClick={generate}
						>
							<Sparkles className="mr-2 h-4 w-4" />
							Generate with AI
						</Button>
						<Button
							type="button"
							variant="outline"
							onClick={() =>
								setQuestions([...questions, blankQuestion(questions.length)])
							}
						>
							<Plus className="mr-2 h-4 w-4" />
							Add question
						</Button>
						<Button
							type="button"
							variant="outline"
							onClick={() => setShowPreview((value) => !value)}
						>
							{showPreview ? "Hide preview" : "Preview student view"}
						</Button>
					</div>
					{showPreview && (
						<Card className="border-purple-200 bg-purple-50/30">
							<CardHeader>
								<CardTitle>{title || "Untitled quiz"}</CardTitle>
								<CardDescription>
									{description || "Student quiz preview"}
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-6">
								{questions.map(
									(question, index) =>
										question.question && (
											<div
												key={`preview-${index}`}
												className="space-y-3 border-t pt-4"
											>
												<p className="font-semibold">
													{index + 1}. {question.question}
												</p>
												<QuestionInput
													question={{
														...question,
														id: question.id || `preview-${index}`,
														explanation: question.explanation || null,
														hint: question.hint || null,
													}}
													value={
														question.question_type === "code_ordering"
															? question.options
															: ""
													}
													onChange={() => undefined}
													disabled
												/>
											</div>
										),
								)}
							</CardContent>
						</Card>
					)}
					<div className="space-y-4">
						{questions.map((question, index) => (
							<Card key={index} className="bg-muted/20">
								<CardContent className="space-y-3 pt-5">
									<div className="flex items-center justify-between">
										<strong>Question {index + 1}</strong>
										<Select
											value={question.question_type}
											onValueChange={(value: QuestionType) =>
												updateQuestion(index, { question_type: value })
											}
										>
											<SelectTrigger className="w-48">
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="multiple_choice">
													Multiple choice
												</SelectItem>
												<SelectItem value="true_false">True / false</SelectItem>
												<SelectItem value="code_output">Code output</SelectItem>
												<SelectItem value="code_ordering">
													Code ordering
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<Textarea
										value={question.question}
										onChange={(event) =>
											updateQuestion(index, { question: event.target.value })
										}
										placeholder="Question"
									/>
									<div className="grid gap-3 md:grid-cols-2">
										<Textarea
											value={question.options.join("\n")}
											onChange={(event) =>
												updateQuestion(index, {
													options: event.target.value.split("\n"),
												})
											}
											placeholder="One option/code line per line"
										/>
										<Textarea
											value={
												Array.isArray(question.correct_answer)
													? question.correct_answer.join("\n")
													: question.correct_answer
											}
											onChange={(event) =>
												updateQuestion(index, {
													correct_answer:
														question.question_type === "code_ordering"
															? event.target.value.split("\n")
															: event.target.value,
												})
											}
											placeholder="Correct answer; ordered lines for ordering questions"
										/>
									</div>
									<div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
										<Input
											value={question.explanation}
											onChange={(event) =>
												updateQuestion(index, {
													explanation: event.target.value,
												})
											}
											placeholder="Explanation"
										/>
										<Input
											value={question.hint}
											onChange={(event) =>
												updateQuestion(index, { hint: event.target.value })
											}
											placeholder="Hint"
										/>
										<Input
											value={question.misconception_tag}
											onChange={(event) =>
												updateQuestion(index, {
													misconception_tag: event.target.value,
												})
											}
											placeholder="Misconception tag"
										/>
										<Input
											value={question.concept_tag}
											onChange={(event) =>
												updateQuestion(index, {
													concept_tag: event.target.value,
												})
											}
											placeholder="Concept, e.g. for-loops"
										/>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
					<div className="flex gap-2">
						<Button disabled={busy || !title || !scopeId} onClick={save}>
							<Save className="mr-2 h-4 w-4" />
							{busy ? "Working…" : "Save quiz"}
						</Button>
						{editingId && (
							<Button variant="ghost" onClick={reset}>
								Cancel
							</Button>
						)}
					</div>
				</CardContent>
			</Card>
			{report && (
				<div className="grid gap-4 sm:grid-cols-3">
					<Card>
						<CardContent className="pt-5">
							<p className="text-sm text-muted-foreground">
								Self-paced attempts
							</p>
							<p className="text-3xl font-bold">{report.participation}</p>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="pt-5">
							<p className="text-sm text-muted-foreground">Mastery rate</p>
							<p className="text-3xl font-bold">{report.masteryRate}%</p>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="pt-5">
							<p className="text-sm text-muted-foreground">Top review need</p>
							<p className="text-lg font-bold">
								{report.misconceptions[0]?.[0] || "No data yet"}
							</p>
							<p className="text-xs text-muted-foreground">
								{report.livePlayers} live players recorded
							</p>
						</CardContent>
					</Card>
				</div>
			)}
			<div className="grid gap-4 lg:grid-cols-2">
				{quizzes
					.filter((quiz) => quiz.status !== "archived")
					.map((quiz) => (
						<Card key={quiz.id}>
							<CardHeader>
								<div className="flex justify-between gap-3">
									<div>
										<CardTitle>{quiz.title}</CardTitle>
										<CardDescription>
											{quiz.quiz_type === "quick_check"
												? "Lesson Quick Check"
												: "Term Finale"}
										</CardDescription>
									</div>
									<Badge
										variant={
											quiz.status === "published" ? "default" : "outline"
										}
									>
										{quiz.status}
									</Badge>
								</div>
							</CardHeader>
							<CardContent>
								<p className="mb-4 text-sm text-muted-foreground">
									{quiz.quiz_questions?.[0]?.count || 0} questions ·{" "}
									{quiz.quiz_attempts?.[0]?.count || 0} attempts
								</p>
								<div className="flex flex-wrap gap-2">
									<Button
										size="sm"
										variant="outline"
										onClick={() => edit(quiz.id)}
									>
										Edit
									</Button>
									<Button
										size="sm"
										variant="outline"
										onClick={() => duplicate(quiz.id)}
									>
										<Copy className="mr-1 h-4 w-4" />
										Duplicate
									</Button>
									{quiz.quiz_type === "term_finale" &&
										quiz.status === "published" && (
											<Button size="sm" onClick={() => host(quiz.id)}>
												<Gamepad2 className="mr-1 h-4 w-4" />
												Host
											</Button>
										)}
									<Button
										size="sm"
										variant="ghost"
										onClick={() => archive(quiz.id)}
									>
										<Archive className="mr-1 h-4 w-4" />
										Archive
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
			</div>
			{quizzes.length === 0 && (
				<Card>
					<CardContent className="flex flex-col items-center py-12 text-center">
						<Bot className="mb-3 h-10 w-10 text-purple-500" />
						<p className="font-medium">No quizzes yet</p>
						<p className="text-sm text-muted-foreground">
							Create one above or let AI prepare a draft.
						</p>
					</CardContent>
				</Card>
			)}
		</div>
	);
}
