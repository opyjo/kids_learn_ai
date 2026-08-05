import { AlertCircle, BookOpen, FileText } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	type AdminCourse,
	type AdminCourseRelation,
	getStudentLessonHref,
	getTeacherNotesHref,
	groupAdminLessonsByCourse,
	normalizeAdminCourse,
} from "@/lib/admin/lesson-catalog";
import { requireAdmin } from "@/lib/auth-helpers";
import { getSupabaseServerClient } from "@/lib/supabase/server";

interface TeacherNote {
	id: string;
	lesson_id: string;
	created_at: string;
	updated_at: string;
}

interface LessonRow {
	id: string;
	title: string;
	description: string;
	difficulty_level: string;
	order_index: number;
	is_premium: boolean;
	courses: AdminCourseRelation;
}

interface LessonWithNote {
	id: string;
	title: string;
	description: string;
	difficulty: string;
	orderIndex: number;
	isPremium: boolean;
	course: AdminCourse | null;
	teacherNote: TeacherNote | null;
}

function getDifficultyColor(difficulty: string) {
	switch (difficulty) {
		case "beginner":
			return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
		case "intermediate":
			return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
		case "advanced":
			return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
		default:
			return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
	}
}

function TeacherNoteCard({ lesson }: Readonly<{ lesson: LessonWithNote }>) {
	const hasNotes = Boolean(lesson.teacherNote);
	const studentHref = getStudentLessonHref(
		lesson.course?.slug,
		lesson.orderIndex,
	);
	const notesHref = getTeacherNotesHref(lesson.course?.slug, lesson.orderIndex);

	return (
		<Card
			className={
				hasNotes
					? "group relative overflow-hidden border-green-200 bg-green-50/30 transition-colors hover:border-green-400 dark:border-green-800 dark:bg-green-950/20"
					: "group relative overflow-hidden border-dashed border-orange-200 bg-orange-50/20 transition-colors hover:border-orange-400 dark:border-orange-800/50 dark:bg-orange-950/10"
			}
		>
			<div
				className={
					hasNotes
						? "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"
						: "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 to-amber-500"
				}
			/>

			<CardContent className="p-3">
				<div className="flex items-start gap-3">
					<div className="mt-0.5 shrink-0">
						<div
							className={
								hasNotes
									? "flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50"
									: "flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30"
							}
						>
							{hasNotes ? (
								<FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
							) : (
								<AlertCircle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
							)}
						</div>
					</div>

					<div className="min-w-0 flex-1">
						<div className="mb-1.5 flex items-start justify-between gap-2">
							<div>
								<p className="mb-1 text-xs font-medium text-muted-foreground">
									{lesson.course?.title ?? "Unassigned lesson"}
								</p>
								<h3 className="text-base font-semibold leading-tight text-foreground">
									Lesson {lesson.orderIndex}: {lesson.title}
								</h3>
							</div>
							<div className="flex shrink-0 items-center gap-1">
								<Badge
									variant="outline"
									className={`px-1.5 py-0 text-xs ${getDifficultyColor(lesson.difficulty)}`}
								>
									{lesson.difficulty}
								</Badge>
								{lesson.isPremium ? (
									<Badge
										variant="outline"
										className="border-yellow-200 bg-yellow-100 px-1.5 py-0 text-xs text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-500"
									>
										Pro
									</Badge>
								) : null}
							</div>
						</div>

						<p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
							{lesson.description}
						</p>

						{lesson.teacherNote ? (
							<p className="mb-3 text-xs text-muted-foreground">
								Last updated:{" "}
								{new Date(lesson.teacherNote.updated_at).toLocaleDateString(
									"en-CA",
									{ year: "numeric", month: "long", day: "numeric" },
								)}
							</p>
						) : null}

						<div className="flex flex-wrap items-center justify-between gap-2">
							<Badge
								className={
									hasNotes
										? "bg-green-100 px-2 py-0 text-xs text-green-700 dark:bg-green-900/50 dark:text-green-300"
										: "bg-orange-100 px-2 py-0 text-xs text-orange-700 dark:bg-orange-900/50 dark:text-orange-300"
								}
							>
								{hasNotes ? "✓ Has Notes" : "⚠ No Notes"}
							</Badge>

							<div className="flex items-center gap-2">
								{hasNotes && notesHref ? (
									<Button
										asChild
										size="sm"
										className="h-7 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-xs hover:opacity-90"
									>
										<Link
											href={notesHref}
											aria-label={`View teacher notes for ${lesson.course?.title}, lesson ${lesson.orderIndex}: ${lesson.title}`}
										>
											View Notes →
										</Link>
									</Button>
								) : null}

								{studentHref ? (
									<Button
										variant="outline"
										asChild
										size="sm"
										className="h-7 rounded-full text-xs"
									>
										<Link
											href={studentHref}
											aria-label={`View student lesson for ${lesson.course?.title}, lesson ${lesson.orderIndex}: ${lesson.title}`}
										>
											<BookOpen className="mr-1 h-3 w-3" />
											Student
										</Link>
									</Button>
								) : (
									<Button
										size="sm"
										disabled
										className="h-7 rounded-full text-xs"
									>
										Course unavailable
									</Button>
								)}
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

export default async function TeacherNotesPage() {
	await requireAdmin();
	const supabase = await getSupabaseServerClient();

	const [lessonsResult, teacherNotesResult] = await Promise.all([
		supabase
			.from("lessons")
			.select(
				"id, title, description, difficulty_level, order_index, is_premium, courses(id, title, slug, order_index)",
			),
		supabase
			.from("teacher_notes")
			.select("id, lesson_id, created_at, updated_at"),
	]);

	const lessonRows = (lessonsResult.data ?? []) as unknown as LessonRow[];
	const teacherNotes = teacherNotesResult.data ?? [];
	const notesByLessonId = new Map(
		teacherNotes.map((note) => [note.lesson_id, note]),
	);
	const lessons: LessonWithNote[] = lessonRows.map((lesson) => ({
		id: lesson.id,
		title: lesson.title,
		description: lesson.description,
		difficulty: lesson.difficulty_level,
		orderIndex: lesson.order_index,
		isPremium: lesson.is_premium,
		course: normalizeAdminCourse(lesson.courses),
		teacherNote: notesByLessonId.get(lesson.id) ?? null,
	}));
	const lessonGroups = groupAdminLessonsByCourse(lessons);
	const lessonsWithNotes = lessons.filter(
		(lesson) => lesson.teacherNote,
	).length;
	const coverage = lessons.length
		? Math.round((lessonsWithNotes / lessons.length) * 100)
		: 0;

	return (
		<div className="space-y-5">
			<div className="flex items-start justify-between gap-4">
				<div>
					<h1 className="mb-1 text-xl font-semibold tracking-tight text-foreground">
						Teacher Lesson Notes
					</h1>
					<p className="text-sm text-muted-foreground">
						Teaching guides grouped with the exact course and student lesson
					</p>
				</div>

				<div className="flex items-center gap-3 rounded-full border border-border bg-card px-3 py-2 shadow-sm">
					<div className="relative h-10 w-10">
						<svg
							className="h-10 w-10 -rotate-90 transform"
							role="img"
							aria-label={`${coverage}% of lessons have teacher notes`}
						>
							<circle
								cx="20"
								cy="20"
								r="16"
								stroke="currentColor"
								strokeWidth="3"
								fill="none"
								className="text-muted"
							/>
							<circle
								cx="20"
								cy="20"
								r="16"
								stroke="currentColor"
								strokeWidth="3"
								fill="none"
								strokeDasharray={2 * Math.PI * 16}
								strokeDashoffset={2 * Math.PI * 16 * (1 - coverage / 100)}
								className="text-primary transition-all duration-500"
								strokeLinecap="round"
							/>
						</svg>
						<div className="absolute inset-0 flex items-center justify-center">
							<span className="text-xs font-bold text-primary">
								{coverage}%
							</span>
						</div>
					</div>
					<div className="text-left">
						<div className="text-xs font-medium text-foreground">
							{lessonsWithNotes}/{lessons.length}
						</div>
						<div className="text-xs text-muted-foreground">With Notes</div>
					</div>
				</div>
			</div>

			{lessons.length ? (
				lessonGroups.map((group) => {
					const groupNotes = group.lessons.filter(
						(lesson) => lesson.teacherNote,
					).length;

					return (
						<section
							key={group.key}
							aria-labelledby={`notes-course-${group.key}`}
						>
							<div className="mb-3 flex items-end justify-between gap-3 border-b border-border pb-2">
								<div>
									<h2
										id={`notes-course-${group.key}`}
										className="text-lg font-semibold text-foreground"
									>
										{group.course?.title ?? "Unassigned lessons"}
									</h2>
									<p className="text-xs text-muted-foreground">
										{group.course?.slug ?? "Not attached to a course"}
									</p>
								</div>
								<Badge variant="secondary">
									{groupNotes}/{group.lessons.length} with notes
								</Badge>
							</div>

							<div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
								{group.lessons.map((lesson) => (
									<TeacherNoteCard key={lesson.id} lesson={lesson} />
								))}
							</div>
						</section>
					);
				})
			) : (
				<Card>
					<CardContent className="flex flex-col items-center justify-center py-5">
						<BookOpen className="mb-3 h-9 w-9 text-muted-foreground" />
						<h2 className="mb-2 text-xl font-semibold">No Lessons Found</h2>
						<p className="max-w-md text-center text-muted-foreground">
							There are no lessons in the system yet. Sync the curriculum files
							to add them.
						</p>
					</CardContent>
				</Card>
			)}
		</div>
	);
}
