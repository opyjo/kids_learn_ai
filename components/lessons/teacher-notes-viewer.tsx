"use client";

import type { LucideIcon } from "lucide-react";
import {
	ArrowLeft,
	BookOpen,
	CheckCircle2,
	ChevronLeft,
	ChevronRight,
	ClipboardCheck,
	FileText,
	LifeBuoy,
	ListChecks,
	Presentation,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
	AssignmentReview,
	type AssignmentReviewData,
} from "@/components/lessons/assignment-review";
import {
	getTeacherNoteSections,
	type TeacherGuidePhase,
	type TeacherNoteSection,
} from "@/components/lessons/teacher-notes.helpers";
import { ThemedMarkdown } from "@/components/lessons/viewer/lesson-markdown";
import { SiteHeader } from "@/components/site-header";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Lesson {
	id: number;
	title: string;
	description: string;
	difficulty: string;
	order_index: number;
	is_premium: boolean;
}

interface TeacherNote {
	id: string;
	lesson_id: string;
	content: string;
	created_at: string;
	updated_at: string;
}

interface TeacherNotesViewerProps {
	lesson: Lesson;
	teacherNote: TeacherNote | null;
	courseSlug?: string;
	assignmentReview?: AssignmentReviewData | null;
}

interface GuideNavItem {
	id: string;
	label: string;
	phase: TeacherGuidePhase;
	kind: "review" | "section";
}

interface PhaseDefinition {
	label: string;
	description: string;
	icon: LucideIcon;
	activeClass: string;
	iconClass: string;
}

const REVIEW_SECTION_ID = "opening-review";
const PHASE_ORDER: TeacherGuidePhase[] = [
	"prepare",
	"teach",
	"support",
	"finish",
];

const PHASES: Record<TeacherGuidePhase, PhaseDefinition> = {
	prepare: {
		label: "Before class",
		description: "Prepare and reconnect",
		icon: ClipboardCheck,
		activeClass:
			"border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100",
		iconClass: "text-amber-600 dark:text-amber-400",
	},
	teach: {
		label: "Teach the lesson",
		description: "Flow, scripts, and activities",
		icon: Presentation,
		activeClass:
			"border-sky-300 bg-sky-50 text-sky-950 dark:border-sky-800 dark:bg-sky-950/30 dark:text-sky-100",
		iconClass: "text-sky-600 dark:text-sky-400",
	},
	support: {
		label: "Support learners",
		description: "Assess, adapt, and troubleshoot",
		icon: LifeBuoy,
		activeClass:
			"border-violet-300 bg-violet-50 text-violet-950 dark:border-violet-800 dark:bg-violet-950/30 dark:text-violet-100",
		iconClass: "text-violet-600 dark:text-violet-400",
	},
	finish: {
		label: "Finish and reflect",
		description: "Wrap up and note next steps",
		icon: CheckCircle2,
		activeClass:
			"border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100",
		iconClass: "text-emerald-600 dark:text-emerald-400",
	},
};

function formatDate(value: string): string {
	return new Date(value).toLocaleDateString("en-CA", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

function GuideSectionCard({ section }: { section: TeacherNoteSection }) {
	const phase = PHASES[section.phase];
	const PhaseIcon = phase.icon;

	return (
		<Card className="gap-0 overflow-hidden rounded-2xl border py-0 shadow-sm">
			<CardHeader className="border-b bg-muted/20 px-5 py-4 sm:px-6">
				<div className="flex items-start gap-3">
					<div className="rounded-lg border bg-background p-2 shadow-sm">
						<PhaseIcon
							className={cn("h-5 w-5", phase.iconClass)}
							aria-hidden="true"
						/>
					</div>
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
							{phase.label}
						</p>
						<h2 className="mt-1 text-xl font-semibold">{section.title}</h2>
					</div>
				</div>
			</CardHeader>
			<CardContent className="px-5 py-5 sm:px-6">
				<ThemedMarkdown
					content={section.content}
					className="teacher-notes-content text-[0.95rem] leading-7 [&_h3]:mt-6 [&_h3]:text-base [&_h4]:mt-5 [&_h4]:font-semibold [&_p]:leading-7"
					linkClassName="text-primary"
				/>
			</CardContent>
		</Card>
	);
}

function EmptyTeacherNotes() {
	return (
		<Card className="rounded-2xl border-dashed">
			<CardContent className="py-14 text-center">
				<div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted">
					<FileText className="h-7 w-7 text-muted-foreground" />
				</div>
				<h2 className="text-lg font-semibold">No teacher notes available</h2>
				<p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
					This lesson does not have an instructor guide yet. Sync its
					teacher-notes.md file or contact an administrator.
				</p>
			</CardContent>
		</Card>
	);
}

export const TeacherNotesViewer = ({
	lesson,
	teacherNote,
	courseSlug,
	assignmentReview,
}: Readonly<TeacherNotesViewerProps>) => {
	const sections = useMemo(
		() => getTeacherNoteSections(teacherNote?.content ?? ""),
		[teacherNote?.content],
	);

	const navItems = useMemo<GuideNavItem[]>(() => {
		const items: GuideNavItem[] = assignmentReview
			? [
					{
						id: REVIEW_SECTION_ID,
						label: "Previous assignment",
						phase: "prepare",
						kind: "review",
					},
				]
			: [];

		return items.concat(
			sections.map((section) => ({
				id: section.id,
				label: section.title,
				phase: section.phase,
				kind: "section" as const,
			})),
		);
	}, [assignmentReview, sections]);

	const firstSectionId = navItems[0]?.id ?? "";
	const [activeSectionId, setActiveSectionId] = useState(firstSectionId);

	useEffect(() => {
		setActiveSectionId(firstSectionId);
	}, [firstSectionId]);

	const activeIndex = Math.max(
		0,
		navItems.findIndex((item) => item.id === activeSectionId),
	);
	const activeItem = navItems[activeIndex];
	const activeSection = sections.find(
		(section) => section.id === activeItem?.id,
	);
	const previousItem = activeIndex > 0 ? navItems[activeIndex - 1] : null;
	const nextItem =
		activeIndex < navItems.length - 1 ? navItems[activeIndex + 1] : null;

	return (
		<div className="min-h-screen bg-muted/20">
			<SiteHeader />

			<main className="container mx-auto max-w-7xl px-4 py-6 sm:py-8">
				<div className="mb-5 flex flex-wrap items-center justify-between gap-3">
					<Button variant="ghost" size="sm" asChild className="-ml-2 gap-1.5">
						<Link href="/admin/teacher-notes">
							<ArrowLeft className="h-4 w-4" aria-hidden="true" />
							All teacher notes
						</Link>
					</Button>
					{courseSlug ? (
						<Button variant="outline" size="sm" asChild className="gap-1.5">
							<Link href={`/lessons/${courseSlug}/${lesson.order_index}`}>
								<BookOpen className="h-4 w-4" aria-hidden="true" />
								Preview student lesson
							</Link>
						</Button>
					) : null}
				</div>

				<Card className="mb-6 gap-0 overflow-hidden rounded-2xl border py-0 shadow-sm">
					<CardHeader className="bg-background px-5 py-5 sm:px-6">
						<div className="flex flex-wrap items-start justify-between gap-4">
							<div className="max-w-3xl">
								<div className="mb-2 flex flex-wrap items-center gap-2">
									<Badge>Lesson {lesson.order_index}</Badge>
									<Badge variant="outline" className="capitalize">
										{lesson.difficulty}
									</Badge>
									{lesson.is_premium ? (
										<Badge variant="secondary">Premium</Badge>
									) : null}
								</div>
								<h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
									{lesson.title}
								</h1>
								<CardDescription className="mt-2 max-w-2xl text-sm leading-6">
									{lesson.description}
								</CardDescription>
							</div>
							<div className="flex items-center gap-2 rounded-xl border bg-muted/30 px-3 py-2 text-sm text-muted-foreground">
								<ListChecks
									className="h-4 w-4 text-primary"
									aria-hidden="true"
								/>
								{navItems.length} guide sections
							</div>
						</div>
					</CardHeader>
				</Card>

				{navItems.length > 0 ? (
					<>
						<div className="hidden items-start gap-6 lg:grid lg:grid-cols-[17rem_minmax(0,1fr)]">
							<aside
								className="sticky top-24"
								aria-label="Instructor guide sections"
							>
								<Card className="gap-0 overflow-hidden rounded-2xl py-0 shadow-sm">
									<CardHeader className="border-b bg-muted/20 px-4 py-4">
										<CardTitle className="flex items-center gap-2 text-base">
											<ListChecks className="h-4 w-4 text-primary" />
											Instructor guide
										</CardTitle>
										<CardDescription>
											Choose one section to keep the page focused.
										</CardDescription>
									</CardHeader>
									<CardContent className="space-y-5 p-3">
										{PHASE_ORDER.map((phaseId) => {
											const phase = PHASES[phaseId];
											const phaseItems = navItems.filter(
												(item) => item.phase === phaseId,
											);
											if (phaseItems.length === 0) return null;

											const PhaseIcon = phase.icon;

											return (
												<div key={phaseId}>
													<div className="mb-2 flex items-center gap-2 px-2">
														<PhaseIcon
															className={cn("h-4 w-4", phase.iconClass)}
															aria-hidden="true"
														/>
														<div>
															<p className="text-xs font-semibold text-foreground">
																{phase.label}
															</p>
															<p className="text-[0.7rem] text-muted-foreground">
																{phase.description}
															</p>
														</div>
													</div>
													<div className="space-y-1">
														{phaseItems.map((item) => (
															<button
																type="button"
																key={item.id}
																onClick={() => setActiveSectionId(item.id)}
																aria-current={
																	activeSectionId === item.id
																		? "page"
																		: undefined
																}
																className={cn(
																	"w-full rounded-lg border border-transparent px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
																	activeSectionId === item.id &&
																		phase.activeClass,
																)}
															>
																{item.label}
															</button>
														))}
													</div>
												</div>
											);
										})}
									</CardContent>
								</Card>
							</aside>

							<section>
								{activeItem?.kind === "review" && assignmentReview ? (
									<AssignmentReview review={assignmentReview} />
								) : activeSection ? (
									<GuideSectionCard section={activeSection} />
								) : null}

								<div className="mt-4 flex items-center justify-between gap-3">
									<Button
										variant="outline"
										disabled={!previousItem}
										onClick={() =>
											previousItem && setActiveSectionId(previousItem.id)
										}
										className="gap-1.5"
									>
										<ChevronLeft className="h-4 w-4" />
										Previous
									</Button>
									<p className="text-xs text-muted-foreground">
										Section {activeIndex + 1} of {navItems.length}
									</p>
									<Button
										variant="outline"
										disabled={!nextItem}
										onClick={() => nextItem && setActiveSectionId(nextItem.id)}
										className="gap-1.5"
									>
										Next
										<ChevronRight className="h-4 w-4" />
									</Button>
								</div>
							</section>
						</div>

						<Card className="gap-0 overflow-hidden rounded-2xl py-0 shadow-sm lg:hidden">
							<CardHeader className="border-b bg-muted/20 px-4 py-4">
								<CardTitle className="text-base">Instructor guide</CardTitle>
								<CardDescription>
									Open one section at a time as you teach.
								</CardDescription>
							</CardHeader>
							<CardContent className="p-0">
								<Accordion
									type="single"
									collapsible
									defaultValue={firstSectionId}
								>
									{navItems.map((item) => {
										const phase = PHASES[item.phase];
										const PhaseIcon = phase.icon;
										const section = sections.find(
											(candidate) => candidate.id === item.id,
										);

										return (
											<AccordionItem
												key={item.id}
												value={item.id}
												className="px-4"
											>
												<AccordionTrigger className="hover:no-underline">
													<span className="flex items-center gap-3">
														<span className="rounded-lg border bg-background p-1.5">
															<PhaseIcon
																className={cn("h-4 w-4", phase.iconClass)}
																aria-hidden="true"
															/>
														</span>
														<span>
															<span className="block text-xs font-medium text-muted-foreground">
																{phase.label}
															</span>
															<span className="block text-sm font-semibold text-foreground">
																{item.label}
															</span>
														</span>
													</span>
												</AccordionTrigger>
												<AccordionContent className="pb-5">
													{item.kind === "review" && assignmentReview ? (
														<AssignmentReview
															review={assignmentReview}
															embedded
															idPrefix="mobile-previous-assignment"
														/>
													) : section ? (
														<ThemedMarkdown
															content={section.content}
															className="text-[0.925rem] leading-7 [&_h3]:mt-5 [&_h4]:mt-4 [&_h4]:font-semibold [&_p]:leading-7"
															linkClassName="text-primary"
														/>
													) : null}
												</AccordionContent>
											</AccordionItem>
										);
									})}
								</Accordion>
							</CardContent>
						</Card>
					</>
				) : (
					<EmptyTeacherNotes />
				)}

				{teacherNote ? (
					<footer className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t pt-4 text-xs text-muted-foreground">
						<span>Created {formatDate(teacherNote.created_at)}</span>
						<span>Updated {formatDate(teacherNote.updated_at)}</span>
					</footer>
				) : null}
			</main>
		</div>
	);
};
