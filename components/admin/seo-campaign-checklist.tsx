"use client";

import {
	ArrowUpRight,
	Check,
	CheckCircle2,
	Circle,
	Clock3,
	Loader2,
	Search,
	Target,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState, useTransition } from "react";
import { toast } from "sonner";
import {
	type SeoTaskProgress,
	updateSeoTaskStatus,
} from "@/app/admin/marketing/actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	SEO_PHASES,
	SEO_TASK_CATEGORIES,
	type SeoCampaignTask,
	type SeoTaskStatus,
} from "@/lib/marketing/seo-campaign-tasks";
import { cn } from "@/lib/utils";

type StatusFilter = "all" | SeoTaskStatus;

const STATUS_LABELS: Record<SeoTaskStatus, string> = {
	todo: "To do",
	in_progress: "In progress",
	done: "Done",
};

const CATEGORY_STYLES: Record<SeoCampaignTask["category"], string> = {
	Measurement: "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
	Conversion:
		"bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
	Trust: "bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
	SEO: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300",
	"Paid acquisition":
		"bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
	Partnerships: "bg-pink-50 text-pink-700 dark:bg-pink-950 dark:text-pink-300",
	Content:
		"bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
	Retention: "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300",
};

function taskHrefProps(href: string) {
	return href.startsWith("http")
		? { target: "_blank" as const, rel: "noreferrer" }
		: {};
}

export function SeoCampaignChecklist({
	tasks,
	initialProgress,
	persistenceAvailable,
}: {
	tasks: SeoCampaignTask[];
	initialProgress: SeoTaskProgress[];
	persistenceAvailable: boolean;
}) {
	const [progressByKey, setProgressByKey] = useState<
		Record<string, SeoTaskProgress>
	>(() =>
		Object.fromEntries(
			initialProgress.map((progress) => [progress.task_key, progress]),
		),
	);
	const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
	const [categoryFilter, setCategoryFilter] = useState("all");
	const [query, setQuery] = useState("");
	const [pendingTaskKeys, setPendingTaskKeys] = useState<Set<string>>(
		() => new Set(),
	);
	const [, startTransition] = useTransition();

	const getStatus = (taskKey: string): SeoTaskStatus =>
		progressByKey[taskKey]?.status || "todo";

	const septemberCohortTasks = tasks.filter(
		(task) => task.campaign === "September 2026 cohort",
	);
	const septemberCohortCompleted = septemberCohortTasks.filter(
		(task) => getStatus(task.key) === "done",
	).length;
	const completedCount = tasks.filter(
		(task) => getStatus(task.key) === "done",
	).length;
	const inProgressCount = tasks.filter(
		(task) => getStatus(task.key) === "in_progress",
	).length;
	const completionPercentage = Math.round(
		(completedCount / tasks.length) * 100,
	);

	const filteredTasks = useMemo(() => {
		const normalizedQuery = query.trim().toLowerCase();
		return tasks.filter((task) => {
			const statusMatches =
				statusFilter === "all" ||
				(progressByKey[task.key]?.status || "todo") === statusFilter;
			const categoryMatches =
				categoryFilter === "all" || task.category === categoryFilter;
			const queryMatches =
				!normalizedQuery ||
				`${task.title} ${task.description} ${task.successMeasure} ${task.category}`
					.toLowerCase()
					.includes(normalizedQuery);

			return statusMatches && categoryMatches && queryMatches;
		});
	}, [categoryFilter, progressByKey, query, statusFilter, tasks]);

	const updateStatus = (task: SeoCampaignTask, nextStatus: SeoTaskStatus) => {
		if (!persistenceAvailable || getStatus(task.key) === nextStatus) return;

		const previousProgress = progressByKey[task.key];
		const optimisticProgress: SeoTaskProgress = {
			task_key: task.key,
			status: nextStatus,
			completed_at: nextStatus === "done" ? new Date().toISOString() : null,
			updated_at: new Date().toISOString(),
		};

		setProgressByKey((current) => ({
			...current,
			[task.key]: optimisticProgress,
		}));
		setPendingTaskKeys((current) => new Set(current).add(task.key));

		startTransition(async () => {
			const result = await updateSeoTaskStatus(task.key, nextStatus);
			if (!result.success) {
				setProgressByKey((current) => {
					const next = { ...current };
					if (previousProgress) next[task.key] = previousProgress;
					else delete next[task.key];
					return next;
				});
				toast.error(result.error);
			} else {
				setProgressByKey((current) => ({
					...current,
					[task.key]: result.progress,
				}));
				toast.success(
					nextStatus === "done"
						? `Completed: ${task.title}`
						: `Moved to ${STATUS_LABELS[nextStatus].toLowerCase()}`,
				);
			}
			setPendingTaskKeys((current) => {
				const next = new Set(current);
				next.delete(task.key);
				return next;
			});
		});
	};

	return (
		<div className="mx-auto max-w-[1080px] space-y-4">
			<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
						<Target className="h-4 w-4" />
						90-day growth plan
					</div>
					<h1 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
						SEO & lead generation
					</h1>
					<p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
						Turn the free trial into a measurable acquisition engine, then scale
						what produces attended classes and paid enrollments.
					</p>
				</div>
				<Badge variant="outline" className="w-fit px-3 py-1.5 text-sm">
					{completedCount} of {tasks.length} complete
				</Badge>
			</div>

			{!persistenceAvailable && (
				<Alert variant="destructive">
					<AlertTitle>Progress is temporarily unavailable</AlertTitle>
					<AlertDescription>
						The campaign checklist could not connect to its progress table. The
						tasks are visible, but updates are disabled.
					</AlertDescription>
				</Alert>
			)}

			{septemberCohortTasks.length > 0 && (
				<Card className="overflow-hidden border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 shadow-sm dark:border-indigo-900 dark:from-indigo-950/40 dark:via-slate-950 dark:to-emerald-950/30">
					<CardContent className="p-5">
						<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
							<div>
								<div className="flex flex-wrap items-center gap-2">
									<Badge className="bg-indigo-600 text-white hover:bg-indigo-600">
										September 2026
									</Badge>
									<span className="text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
										Enrollment sprint
									</span>
								</div>
								<h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
									Fill the next Kids Learn AI cohort
								</h2>
								<p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
									Working goal: 15 paid students from approximately 50 trial
									reservations, 35 attended trials, and 14–18 enrollments.
								</p>
							</div>
							<Badge
								variant="outline"
								className="w-fit bg-white/70 px-3 py-1.5 dark:bg-slate-950/60"
							>
								{septemberCohortCompleted} of {septemberCohortTasks.length}{" "}
								complete
							</Badge>
						</div>

						<div className="mt-4 grid gap-2 sm:grid-cols-2">
							{septemberCohortTasks.map((task) => {
								const status = getStatus(task.key);
								return (
									<a
										key={task.key}
										href={`#task-${task.key}`}
										className="flex items-start gap-2 rounded-lg border border-white/80 bg-white/70 px-3 py-2.5 text-sm text-slate-700 transition-colors hover:border-indigo-200 hover:bg-white dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200 dark:hover:border-indigo-900"
									>
										{status === "done" ? (
											<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
										) : (
											<Circle
												className={cn(
													"mt-0.5 h-4 w-4 shrink-0 text-slate-400",
													status === "in_progress" &&
														"fill-amber-100 text-amber-500 dark:fill-amber-950",
												)}
											/>
										)}
										<span
											className={cn(
												status === "done" && "text-slate-500 line-through",
											)}
										>
											{task.title}
										</span>
									</a>
								);
							})}
						</div>
					</CardContent>
				</Card>
			)}

			<Card className="overflow-hidden border-slate-200 shadow-sm dark:border-slate-800">
				<CardContent className="grid gap-5 p-5 md:grid-cols-[1.4fr_1fr]">
					<div>
						<div className="flex items-center justify-between text-sm">
							<span className="font-medium text-slate-700 dark:text-slate-200">
								Overall progress
							</span>
							<span className="font-semibold text-indigo-600 dark:text-indigo-400">
								{completionPercentage}%
							</span>
						</div>
						<Progress value={completionPercentage} className="mt-2 h-2.5" />
						<p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
							Complete the high-priority foundation work before increasing ad
							spend.
						</p>
					</div>
					<div className="grid grid-cols-3 gap-2">
						{[
							{
								label: "To do",
								value: tasks.length - completedCount - inProgressCount,
							},
							{ label: "Active", value: inProgressCount },
							{ label: "Done", value: completedCount },
						].map((item) => (
							<div
								key={item.label}
								className="rounded-lg bg-slate-50 p-3 text-center dark:bg-slate-900"
							>
								<p className="text-xl font-semibold text-slate-950 dark:text-white">
									{item.value}
								</p>
								<p className="text-xs text-slate-500">{item.label}</p>
							</div>
						))}
					</div>
				</CardContent>
			</Card>

			<div className="grid gap-3 lg:grid-cols-[1fr_auto_auto]">
				<div className="relative">
					<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
					<Input
						value={query}
						onChange={(event) => setQuery(event.target.value)}
						placeholder="Search the growth plan…"
						className="pl-9"
					/>
				</div>
				<Select value={categoryFilter} onValueChange={setCategoryFilter}>
					<SelectTrigger className="w-full lg:w-[190px]">
						<SelectValue placeholder="All categories" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All categories</SelectItem>
						{SEO_TASK_CATEGORIES.map((category) => (
							<SelectItem key={category} value={category}>
								{category}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<Select
					value={statusFilter}
					onValueChange={(value) => setStatusFilter(value as StatusFilter)}
				>
					<SelectTrigger className="w-full lg:w-[160px]">
						<SelectValue placeholder="All statuses" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All statuses</SelectItem>
						<SelectItem value="todo">To do</SelectItem>
						<SelectItem value="in_progress">In progress</SelectItem>
						<SelectItem value="done">Done</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{SEO_PHASES.map((phase) => {
				const phaseTasks = filteredTasks.filter(
					(task) => task.phase === phase.id,
				);
				if (phaseTasks.length === 0) return null;

				const phaseCompleted = tasks.filter(
					(task) => task.phase === phase.id && getStatus(task.key) === "done",
				).length;
				const phaseTotal = tasks.filter(
					(task) => task.phase === phase.id,
				).length;

				return (
					<section key={phase.id} className="space-y-3">
						<div className="flex flex-col gap-2 border-b border-slate-200 pb-3 dark:border-slate-800 sm:flex-row sm:items-end sm:justify-between">
							<div>
								<div className="flex flex-wrap items-center gap-2">
									<Badge variant="secondary">{phase.label}</Badge>
									<span className="flex items-center gap-1 text-xs text-slate-500">
										<Clock3 className="h-3.5 w-3.5" />
										{phase.timeline}
									</span>
								</div>
								<h2 className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">
									{phase.title}
								</h2>
								<p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
									{phase.description}
								</p>
							</div>
							<span className="text-xs font-medium text-slate-500">
								{phaseCompleted}/{phaseTotal} complete
							</span>
						</div>

						<div className="grid gap-3">
							{phaseTasks.map((task) => {
								const status = getStatus(task.key);
								const isTaskPending = pendingTaskKeys.has(task.key);

								return (
									<Card
										key={task.key}
										id={`task-${task.key}`}
										className={cn(
											"scroll-mt-4 border-slate-200 shadow-none transition-colors dark:border-slate-800",
											status === "done" &&
												"border-emerald-200 bg-emerald-50/30 dark:border-emerald-900 dark:bg-emerald-950/10",
										)}
									>
										<CardContent className="flex gap-3 p-4">
											<button
												type="button"
												onClick={() =>
													updateStatus(
														task,
														status === "done" ? "todo" : "done",
													)
												}
												disabled={!persistenceAvailable || isTaskPending}
												aria-label={
													status === "done"
														? `Mark ${task.title} as not done`
														: `Mark ${task.title} as done`
												}
												className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-slate-400 transition-colors hover:text-emerald-600 disabled:cursor-not-allowed disabled:opacity-50"
											>
												{isTaskPending ? (
													<Loader2 className="h-5 w-5 animate-spin" />
												) : status === "done" ? (
													<CheckCircle2 className="h-6 w-6 text-emerald-600" />
												) : status === "in_progress" ? (
													<Circle className="h-6 w-6 fill-amber-100 text-amber-500 dark:fill-amber-950" />
												) : (
													<Circle className="h-6 w-6" />
												)}
											</button>

											<div className="min-w-0 flex-1">
												<div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
													<div>
														<div className="flex flex-wrap items-center gap-2">
															<h3
																className={cn(
																	"font-medium text-slate-950 dark:text-white",
																	status === "done" &&
																		"text-slate-500 line-through",
																)}
															>
																{task.title}
															</h3>
															<Badge
																variant="secondary"
																className={cn(
																	"border-0 text-[10px]",
																	CATEGORY_STYLES[task.category],
																)}
															>
																{task.category}
															</Badge>
															{task.priority === "High" && (
																<Badge
																	variant="outline"
																	className="text-[10px] text-rose-600"
																>
																	High priority
																</Badge>
															)}
														</div>
														<p className="mt-1.5 text-sm leading-6 text-slate-600 dark:text-slate-300">
															{task.description}
														</p>
													</div>

													<Select
														value={status}
														onValueChange={(value) =>
															updateStatus(task, value as SeoTaskStatus)
														}
														disabled={!persistenceAvailable || isTaskPending}
													>
														<SelectTrigger
															className="h-8 w-full shrink-0 text-xs lg:w-[130px]"
															aria-label={`Status for ${task.title}`}
														>
															<SelectValue />
														</SelectTrigger>
														<SelectContent>
															<SelectItem value="todo">To do</SelectItem>
															<SelectItem value="in_progress">
																In progress
															</SelectItem>
															<SelectItem value="done">Done</SelectItem>
														</SelectContent>
													</Select>
												</div>

												<div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
													<p className="flex items-start gap-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
														<Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
														<span>
															<strong className="font-medium text-slate-700 dark:text-slate-300">
																Done when:
															</strong>{" "}
															{task.successMeasure}
														</span>
													</p>
													{task.href && task.linkLabel && (
														<Button
															asChild
															variant="ghost"
															size="sm"
															className="h-7 w-fit gap-1 px-2 text-xs"
														>
															<Link
																href={task.href}
																{...taskHrefProps(task.href)}
															>
																{task.linkLabel}
																<ArrowUpRight className="h-3.5 w-3.5" />
															</Link>
														</Button>
													)}
												</div>
											</div>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</section>
				);
			})}

			{filteredTasks.length === 0 && (
				<Card className="border-dashed shadow-none">
					<CardContent className="flex flex-col items-center px-4 py-12 text-center">
						<Search className="h-8 w-8 text-slate-300" />
						<h2 className="mt-3 font-medium">No matching tasks</h2>
						<p className="mt-1 text-sm text-slate-500">
							Try a different search, category, or status.
						</p>
						<Button
							variant="outline"
							size="sm"
							className="mt-4"
							onClick={() => {
								setQuery("");
								setCategoryFilter("all");
								setStatusFilter("all");
							}}
						>
							Clear filters
						</Button>
					</CardContent>
				</Card>
			)}
		</div>
	);
}
