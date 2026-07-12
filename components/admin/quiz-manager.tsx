"use client";

import {
	Archive,
	BarChart3,
	Bot,
	Copy,
	Download,
	Gamepad2,
	Layers,
	ListChecks,
	Pencil,
	Plus,
	Save,
	Sparkles,
	Trash2,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
	lessons?: { title: string } | null;
	courses?: { title: string } | null;
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
	adaptive: {
		publishedQuestions: number;
		coverageGaps: {
			courseId: string;
			concept: string;
			questions: number;
			variants: number;
			missingDifficulties: number[];
		}[];
		insufficientCourses: { courseId: string; variants: number }[];
		fallbacks: number;
		sessionErrors: number;
		remediationRate: number;
	};
}

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
	const [questions, setQuestions] = useState<QuizQuestionInput[]>([]);
	const [busy, setBusy] = useState(false);
	const [showPreview, setShowPreview] = useState(false);
	const [batchBusy, setBatchBusy] = useState(false);
	const [batchNote, setBatchNote] = useState("");
	const [tab, setTab] = useState("overview");
	const [statusFilter, setStatusFilter] = useState<
		"all" | "draft" | "published"
	>("all");
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
		setQuestions([]);
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
		setTab("builder");
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
		setTab("quizzes");
		void load();
	};
	const generate = async (override?: {
		scopeId: string;
		type: "quick_check" | "term_finale";
	}) => {
		const scope = override?.scopeId ?? scopeId;
		const quizType = override?.type ?? type;
		if (!scope) return toast.error("Choose a lesson or course first");
		setBusy(true);
		const response = await fetch("/api/admin/quizzes/generate", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				[quizType === "quick_check" ? "lessonId" : "courseId"]: scope,
				count: quizType === "quick_check" ? 3 : 12,
			}),
		});
		const data = await response.json();
		setBusy(false);
		if (!response.ok) return toast.error(data.error || "Generation failed");
		setQuestions(data.questions);
		setStatus("draft");
		if (!title) {
			const scopeTitle =
				quizType === "quick_check"
					? lessons.find((lesson) => lesson.id === scope)?.title
					: courses.find((course) => course.id === scope)?.title;
			if (scopeTitle)
				setTitle(
					`${scopeTitle} — ${quizType === "quick_check" ? "Quick Check" : "Term Finale"}`,
				);
		}
		toast.success("AI draft ready for your review");
	};
	// One-click path from the coverage list: prefill the builder for the given
	// lesson and start AI generation right away.
	const startDraftFor = (lesson: Lesson) => {
		setEditingId(null);
		setType("quick_check");
		setScopeId(lesson.id);
		setTitle(`${lesson.title} — Quick Check`);
		setDescription("");
		setStatus("draft");
		setQuestions([]);
		setTab("builder");
		window.scrollTo({ top: 0, behavior: "smooth" });
		void generate({ scopeId: lesson.id, type: "quick_check" });
	};
	const coverage = useMemo(() => {
		const statusByLesson = new Map<string, "published" | "draft">();
		for (const quiz of quizzes) {
			if (
				quiz.quiz_type !== "quick_check" ||
				!quiz.lesson_id ||
				quiz.status === "archived"
			)
				continue;
			if (quiz.status === "published")
				statusByLesson.set(quiz.lesson_id, "published");
			else if (!statusByLesson.has(quiz.lesson_id))
				statusByLesson.set(quiz.lesson_id, "draft");
		}
		const missing = lessons.filter((lesson) => !statusByLesson.has(lesson.id));
		return {
			published: lessons.filter(
				(lesson) => statusByLesson.get(lesson.id) === "published",
			).length,
			drafts: lessons.filter(
				(lesson) => statusByLesson.get(lesson.id) === "draft",
			).length,
			missing,
		};
	}, [quizzes, lessons]);
	const courseTitles = useMemo(
		() => new Map(courses.map((course) => [course.id, course.title])),
		[courses],
	);
	const generateMissing = async () => {
		setBatchBusy(true);
		let createdTotal = 0;
		const failures = new Set<string>();
		try {
			for (;;) {
				setBatchNote(
					createdTotal
						? `${createdTotal} draft${createdTotal === 1 ? "" : "s"} created so far…`
						: "Generating drafts…",
				);
				const response = await fetch("/api/admin/quizzes/generate-missing", {
					method: "POST",
				});
				const data = await response.json().catch(() => ({}));
				if (!response.ok) {
					toast.error(data.error || "Batch generation failed");
					break;
				}
				createdTotal += data.created?.length || 0;
				for (const failure of data.failed || [])
					failures.add(failure.title as string);
				// A round that creates nothing means every remaining lesson is
				// failing generation — stop instead of retrying the same batch.
				if (!data.created?.length || data.remaining <= 0) break;
			}
		} finally {
			setBatchBusy(false);
			setBatchNote("");
		}
		if (createdTotal)
			toast.success(
				`${createdTotal} draft${createdTotal === 1 ? "" : "s"} ready for your review`,
			);
		if (failures.size)
			toast.warning(`Could not generate for: ${[...failures].join(", ")}`, {
				description: "Try these again or write them by hand.",
			});
		void load();
	};
	const updateQuestion = (index: number, patch: Partial<QuizQuestionInput>) =>
		setQuestions(
			questions.map((question, questionIndex) =>
				questionIndex === index ? { ...question, ...patch } : question,
			),
		);
	const removeQuestion = (index: number) =>
		setQuestions(
			questions
				.filter((_, questionIndex) => questionIndex !== index)
				.map((question, questionIndex) => ({
					...question,
					order_index: questionIndex,
				})),
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

	const visibleQuizzes = quizzes.filter((quiz) => quiz.status !== "archived");
	const draftCount = visibleQuizzes.filter(
		(quiz) => quiz.status === "draft",
	).length;
	const filteredQuizzes = visibleQuizzes.filter(
		(quiz) => statusFilter === "all" || quiz.status === statusFilter,
	);

	return (
		<div className="space-y-6">
			<div className="flex flex-wrap items-center justify-between gap-3">
				<div>
					<h1 className="text-2xl font-semibold">Quizzes & Live Games</h1>
					<p className="text-sm text-muted-foreground">
						Generate or write quizzes, review the drafts, publish — students
						only ever see published quizzes.
					</p>
				</div>
				<Button variant="outline" asChild>
					<a href="/api/admin/quizzes/report?format=csv">
						<Download className="mr-2 h-4 w-4" />
						Export report
					</a>
				</Button>
			</div>

			<Tabs value={tab} onValueChange={setTab}>
				<TabsList>
					<TabsTrigger value="overview">
						<BarChart3 className="mr-2 h-4 w-4" />
						Overview
					</TabsTrigger>
					<TabsTrigger value="quizzes">
						<Layers className="mr-2 h-4 w-4" />
						All quizzes ({visibleQuizzes.length})
					</TabsTrigger>
					<TabsTrigger value="builder">
						<Pencil className="mr-2 h-4 w-4" />
						{editingId ? "Edit quiz" : "Create quiz"}
					</TabsTrigger>
				</TabsList>

				{/* ── Overview: how the system works, coverage, results ── */}
				<TabsContent value="overview" className="space-y-6 pt-4">
					<Card>
						<CardContent className="grid gap-6 pt-5 sm:grid-cols-3">
							{[
								{
									step: "1",
									title: "Generate or write",
									text: "AI drafts questions from each lesson's content, or type your own in the Create tab.",
								},
								{
									step: "2",
									title: "Review & publish",
									text: "Drafts are invisible to students. Check each question, then set it to Published.",
								},
								{
									step: "3",
									title: "Kids take it",
									text: "Published Quick Checks appear inside the lesson and on student dashboards. Results land in Reports.",
								},
							].map((item) => (
								<div key={item.step} className="flex gap-3">
									<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
										{item.step}
									</div>
									<div>
										<p className="font-medium">{item.title}</p>
										<p className="text-sm text-muted-foreground">{item.text}</p>
									</div>
								</div>
							))}
						</CardContent>
					</Card>
					{lessons.length > 0 && (
						<Card>
							<CardHeader>
								<div className="flex flex-wrap items-center justify-between gap-3">
									<div>
										<CardTitle className="flex items-center gap-2">
											<ListChecks className="h-5 w-5 text-purple-500" />
											Quick Check coverage
										</CardTitle>
										<CardDescription>
											{coverage.published} of {lessons.length} lessons have a
											published Quick Check
											{coverage.drafts > 0 &&
												` · ${coverage.drafts} draft${coverage.drafts === 1 ? "" : "s"} awaiting review`}
										</CardDescription>
									</div>
									{coverage.missing.length > 0 && (
										<Button
											type="button"
											disabled={batchBusy}
											onClick={generateMissing}
										>
											<Sparkles className="mr-2 h-4 w-4" />
											{batchBusy
												? batchNote || "Working…"
												: `Generate drafts for ${coverage.missing.length} missing lesson${coverage.missing.length === 1 ? "" : "s"}`}
										</Button>
									)}
								</div>
							</CardHeader>
							<CardContent className="space-y-3">
								<div
									className="h-2 w-full overflow-hidden rounded-full bg-muted"
									role="progressbar"
									aria-valuemin={0}
									aria-valuemax={lessons.length}
									aria-valuenow={coverage.published}
									aria-label="Lessons with a published Quick Check"
								>
									<div
										className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all"
										style={{
											width: `${Math.round((coverage.published / lessons.length) * 100)}%`,
										}}
									/>
								</div>
								{coverage.missing.length > 0 ? (
									<details>
										<summary className="cursor-pointer text-sm text-muted-foreground">
											{coverage.missing.length} lesson
											{coverage.missing.length === 1 ? "" : "s"} without a quiz
										</summary>
										<ul className="mt-2 space-y-1 text-sm">
											{coverage.missing.map((lesson) => (
												<li
													key={lesson.id}
													className="flex flex-wrap items-center gap-2"
												>
													<Badge variant="outline" className="text-xs">
														{courseTitles.get(lesson.course_id) ||
															"Unknown level"}
													</Badge>
													<span className="min-w-0 flex-1">
														{lesson.order_index}. {lesson.title}
													</span>
													<Button
														type="button"
														variant="ghost"
														size="sm"
														className="h-7 text-xs"
														disabled={busy || batchBusy}
														onClick={() => startDraftFor(lesson)}
													>
														<Sparkles className="mr-1 h-3 w-3" />
														Generate draft
													</Button>
												</li>
											))}
										</ul>
									</details>
								) : (
									<p className="text-sm text-muted-foreground">
										Every lesson has a Quick Check.
										{coverage.drafts > 0 &&
											" Publish the remaining drafts to make them visible to students."}
									</p>
								)}
							</CardContent>
						</Card>
					)}
					{report && (
						<>
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
										<p className="text-sm text-muted-foreground">
											Mastery rate
										</p>
										<p className="text-3xl font-bold">{report.masteryRate}%</p>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="pt-5">
										<p className="text-sm text-muted-foreground">
											Top review need
										</p>
										<p className="text-lg font-bold">
											{report.misconceptions[0]?.[0] || "No data yet"}
										</p>
										<p className="text-xs text-muted-foreground">
											{report.livePlayers} live players recorded
										</p>
									</CardContent>
								</Card>
							</div>
							<Card>
								<CardHeader>
									<CardTitle>Adaptive practice readiness</CardTitle>
									<CardDescription>
										Coverage and rollout health. Keep the feature flag off until
										course banks have at least 10 distinct approved variants.
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="grid gap-3 sm:grid-cols-4">
										<div>
											<p className="text-xs text-muted-foreground">
												Published bank
											</p>
											<p className="text-2xl font-bold">
												{report.adaptive.publishedQuestions}
											</p>
										</div>
										<div>
											<p className="text-xs text-muted-foreground">Fallbacks</p>
											<p className="text-2xl font-bold">
												{report.adaptive.fallbacks}
											</p>
										</div>
										<div>
											<p className="text-xs text-muted-foreground">
												Remediation rate
											</p>
											<p className="text-2xl font-bold">
												{report.adaptive.remediationRate}%
											</p>
										</div>
										<div>
											<p className="text-xs text-muted-foreground">
												Session errors
											</p>
											<p className="text-2xl font-bold">
												{report.adaptive.sessionErrors}
											</p>
										</div>
									</div>
									{report.adaptive.insufficientCourses.length > 0 && (
										<p className="text-sm text-amber-700 dark:text-amber-300">
											{report.adaptive.insufficientCourses.length} course bank
											{report.adaptive.insufficientCourses.length === 1
												? " is"
												: "s are"}{" "}
											below the 10-variant safety threshold.
										</p>
									)}
									{report.adaptive.coverageGaps.length > 0 && (
										<details>
											<summary className="cursor-pointer text-sm font-medium">
												{report.adaptive.coverageGaps.length} concept coverage
												gap
												{report.adaptive.coverageGaps.length === 1 ? "" : "s"}
											</summary>
											<ul className="mt-2 space-y-1 text-sm text-muted-foreground">
												{report.adaptive.coverageGaps
													.slice(0, 20)
													.map((gap) => (
														<li key={`${gap.courseId}:${gap.concept}`}>
															{gap.concept}: {gap.variants} variant
															{gap.variants === 1 ? "" : "s"}; missing
															difficulty{" "}
															{gap.missingDifficulties.join(", ") || "variants"}
														</li>
													))}
											</ul>
										</details>
									)}
								</CardContent>
							</Card>
						</>
					)}
				</TabsContent>

				{/* ── Builder: create or edit one quiz ── */}
				<TabsContent value="builder" className="pt-4">
					<Card>
						<CardHeader>
							<CardTitle>{editingId ? "Edit quiz" : "Create a quiz"}</CardTitle>
							<CardDescription>
								{editingId
									? "You are editing an existing quiz. Save to apply your changes."
									: "Pick a lesson, let AI draft the questions, then review and edit anything before publishing. Nothing reaches students until the status is Published."}
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-5">
							<div className="space-y-4 rounded-lg border bg-muted/20 p-4">
								<p className="text-sm font-semibold">
									Step 1 · Choose what to quiz
								</p>
								<div className="grid gap-4 md:grid-cols-2">
									<div>
										<Label>Type</Label>
										<Select
											value={type}
											onValueChange={(value: "quick_check" | "term_finale") => {
												setType(value);
												setScopeId("");
												setQuestions([]);
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
									<div>
										<Label>
											{type === "quick_check" ? "Lesson" : "Course"}
										</Label>
										<Select value={scopeId} onValueChange={setScopeId}>
											<SelectTrigger>
												<SelectValue placeholder="Choose…" />
											</SelectTrigger>
											<SelectContent>
												{type === "quick_check"
													? lessons.map((item) => (
															<SelectItem key={item.id} value={item.id}>
																{courseTitles.get(item.course_id) ||
																	"Unknown level"}{" "}
																· {item.order_index}. {item.title}
															</SelectItem>
														))
													: courses.map((item) => (
															<SelectItem key={item.id} value={item.id}>
																{item.title}
															</SelectItem>
														))}
											</SelectContent>
										</Select>
									</div>
								</div>
								<div className="flex flex-wrap items-center gap-3">
									<Button
										type="button"
										disabled={busy || !scopeId}
										onClick={() => generate()}
									>
										<Sparkles className="mr-2 h-4 w-4" />
										{busy
											? "Drafting questions…"
											: questions.length
												? "Regenerate with AI"
												: "Generate with AI"}
									</Button>
									{questions.length > 0 && (
										<p className="text-xs text-muted-foreground">
											Regenerating replaces the questions below with a fresh AI
											draft.
										</p>
									)}
								</div>
							</div>
							{questions.length === 0 ? (
								<p className="text-sm text-muted-foreground">
									{busy
										? "The AI is reading the lesson and drafting questions…"
										: "Pick a lesson and generate — the AI draft lands here for you to review, edit, and publish."}
								</p>
							) : (
								<>
									<div className="space-y-1">
										<p className="text-sm font-semibold">
											Step 2 · Review & edit the draft
										</p>
										<p className="text-xs text-muted-foreground">
											Tweak anything the AI got wrong — questions, answers,
											hints, and explanations are all editable.
										</p>
									</div>
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
											<Label>Description</Label>
											<Textarea
												value={description}
												onChange={(event) => setDescription(event.target.value)}
												placeholder="Shown to students above the quiz"
											/>
										</div>
									</div>
									<Button
										type="button"
										variant="outline"
										onClick={() => setShowPreview((value) => !value)}
									>
										{showPreview ? "Hide preview" : "Preview student view"}
									</Button>
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
													<div className="flex items-center justify-between gap-2">
														<strong>Question {index + 1}</strong>
														<div className="flex items-center gap-1">
															<Select
																value={question.question_type}
																onValueChange={(value: QuestionType) =>
																	updateQuestion(index, {
																		question_type: value,
																	})
																}
															>
																<SelectTrigger className="w-48">
																	<SelectValue />
																</SelectTrigger>
																<SelectContent>
																	<SelectItem value="multiple_choice">
																		Multiple choice
																	</SelectItem>
																	<SelectItem value="true_false">
																		True / false
																	</SelectItem>
																	<SelectItem value="code_output">
																		Code output
																	</SelectItem>
																	<SelectItem value="code_ordering">
																		Code ordering
																	</SelectItem>
																</SelectContent>
															</Select>
															<Button
																type="button"
																variant="ghost"
																size="icon"
																aria-label={`Remove question ${index + 1}`}
																onClick={() => removeQuestion(index)}
															>
																<Trash2 className="h-4 w-4 text-muted-foreground" />
															</Button>
														</div>
													</div>
													<Textarea
														value={question.question}
														onChange={(event) =>
															updateQuestion(index, {
																question: event.target.value,
															})
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
													<div className="grid gap-3 md:grid-cols-2">
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
																updateQuestion(index, {
																	hint: event.target.value,
																})
															}
															placeholder="Hint"
														/>
													</div>
													<details className="rounded-lg border bg-background/60 p-3">
														<summary className="cursor-pointer text-sm text-muted-foreground">
															Advanced settings (adaptive practice & review)
														</summary>
														<div className="mt-3 space-y-3">
															<div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
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
																<Input
																	type="number"
																	min={1}
																	max={5}
																	value={question.adaptive_difficulty}
																	onChange={(event) =>
																		updateQuestion(index, {
																			adaptive_difficulty: Number(
																				event.target.value,
																			),
																		})
																	}
																	aria-label="Adaptive difficulty from 1 to 5"
																/>
																<Input
																	value={question.variant_group}
																	onChange={(event) =>
																		updateQuestion(index, {
																			variant_group: event.target.value,
																		})
																	}
																	placeholder="Variant group"
																/>
															</div>
															<div className="grid gap-3 md:grid-cols-2">
																<Input
																	value={question.learning_objective}
																	onChange={(event) =>
																		updateQuestion(index, {
																			learning_objective: event.target.value,
																		})
																	}
																	placeholder="Learning objective"
																/>
																<Input
																	value={question.prerequisite_tags.join(", ")}
																	onChange={(event) =>
																		updateQuestion(index, {
																			prerequisite_tags: event.target.value
																				.split(",")
																				.map((value) => value.trim())
																				.filter(Boolean),
																		})
																	}
																	placeholder="Prerequisites, comma separated"
																/>
															</div>
															<Textarea
																value={question.remediation}
																onChange={(event) =>
																	updateQuestion(index, {
																		remediation: event.target.value,
																	})
																}
																placeholder="Approved mini-lesson shown after repeated mistakes"
															/>
														</div>
													</details>
												</CardContent>
											</Card>
										))}
									</div>
									<div className="space-y-4">
										<p className="text-sm font-semibold">Step 3 · Publish</p>
										<div className="grid gap-4 md:grid-cols-2">
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
												<p className="mt-1 text-xs text-muted-foreground">
													Only published quizzes are visible to students.
												</p>
											</div>
										</div>
										<div className="flex gap-2">
											<Button
												disabled={
													busy || !title || !scopeId || !questions.length
												}
												onClick={save}
											>
												<Save className="mr-2 h-4 w-4" />
												{busy ? "Working…" : "Save quiz"}
											</Button>
											<Button
												variant="ghost"
												onClick={() => {
													reset();
													setTab("quizzes");
												}}
											>
												Cancel
											</Button>
										</div>
									</div>
								</>
							)}
						</CardContent>
					</Card>
				</TabsContent>

				{/* ── All quizzes: the library of drafts and published quizzes ── */}
				<TabsContent value="quizzes" className="space-y-4 pt-4">
					<div className="flex flex-wrap items-center justify-between gap-3">
						<div className="flex flex-wrap gap-2">
							<Button
								size="sm"
								variant={statusFilter === "all" ? "default" : "outline"}
								onClick={() => setStatusFilter("all")}
							>
								All ({visibleQuizzes.length})
							</Button>
							<Button
								size="sm"
								variant={statusFilter === "draft" ? "default" : "outline"}
								onClick={() => setStatusFilter("draft")}
							>
								Drafts to review ({draftCount})
							</Button>
							<Button
								size="sm"
								variant={statusFilter === "published" ? "default" : "outline"}
								onClick={() => setStatusFilter("published")}
							>
								Published ({visibleQuizzes.length - draftCount})
							</Button>
						</div>
						<Button
							size="sm"
							onClick={() => {
								reset();
								setTab("builder");
							}}
						>
							<Plus className="mr-1 h-4 w-4" />
							New quiz
						</Button>
					</div>
					<div className="grid gap-4 lg:grid-cols-2">
						{filteredQuizzes.map((quiz) => (
							<Card key={quiz.id}>
								<CardHeader>
									<div className="flex justify-between gap-3">
										<div>
											<CardTitle>{quiz.title}</CardTitle>
											<CardDescription>
												{quiz.quiz_type === "quick_check"
													? "Lesson Quick Check"
													: "Term Finale"}
												{quiz.lessons?.title
													? ` · ${quiz.lessons.title}`
													: quiz.courses?.title
														? ` · ${quiz.courses.title}`
														: ""}
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
					{visibleQuizzes.length === 0 ? (
						<Card>
							<CardContent className="flex flex-col items-center py-12 text-center">
								<Bot className="mb-3 h-10 w-10 text-purple-500" />
								<p className="font-medium">No quizzes yet</p>
								<p className="text-sm text-muted-foreground">
									Use “Generate drafts” on the Overview tab or write one in the
									Create tab.
								</p>
							</CardContent>
						</Card>
					) : (
						filteredQuizzes.length === 0 && (
							<p className="py-8 text-center text-sm text-muted-foreground">
								No {statusFilter === "draft" ? "drafts" : "published quizzes"}{" "}
								right now.
							</p>
						)
					)}
				</TabsContent>
			</Tabs>
		</div>
	);
}
