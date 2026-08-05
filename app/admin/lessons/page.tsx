import { ChevronDown, Eye, Plus } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type AdminCourseRelation,
	getStudentLessonHref,
	groupAdminLessonsByCourse,
	normalizeAdminCourse,
} from "@/lib/admin/lesson-catalog";
import { requireAdmin } from "@/lib/auth-helpers";
import { getSupabaseServerClient } from "@/lib/supabase/server";

interface LessonData {
	id: string;
	title: string;
	description: string;
	difficulty_level: string;
	order_index: number;
	completed_lessons: { count: number }[] | null;
	courses: AdminCourseRelation;
}

export default async function LessonsPage() {
	await requireAdmin();
	const supabase = await getSupabaseServerClient();

	// Fetch lessons with completion counts
	const { data: lessonsData } = await supabase
		.from("lessons")
		.select(
			`
      id,
      title,
      description,
      difficulty_level,
	      order_index,
	      completed_lessons(count),
	      courses(id, title, slug, order_index)
	    `,
		)
		.order("order_index", { ascending: true });

	const lessons = ((lessonsData as unknown as LessonData[]) || []).map(
		(lesson) => {
			const course = normalizeAdminCourse(lesson.courses);

			return {
				id: lesson.id,
				orderIndex: lesson.order_index,
				title: lesson.title,
				description: lesson.description,
				completions: lesson.completed_lessons?.[0]?.count || 0,
				difficulty: lesson.difficulty_level,
				course,
			};
		},
	);
	const lessonGroups = groupAdminLessonsByCourse(lessons);

	return (
		<div className="space-y-3">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-xl font-semibold text-gray-900 dark:text-white">
						Lesson Management
					</h1>
					<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
						Create and manage course lessons
					</p>
				</div>
				<Button asChild className="gap-2">
					<Link href="/admin/lessons/new">
						<Plus className="h-4 w-4" />
						Create Lesson
					</Link>
				</Button>
			</div>

			<Card className="border-0 bg-white shadow-sm dark:bg-gray-900">
				<CardHeader className="px-3 py-3">
					<CardTitle className="text-lg font-semibold">All Lessons</CardTitle>
					<CardDescription>
						{lessons.length} lesson{lessons.length !== 1 ? "s" : ""} across{" "}
						{lessonGroups.filter((group) => group.course).length} courses
					</CardDescription>
				</CardHeader>
				<CardContent className="px-3 pt-0 pb-3">
					{lessons.length === 0 ? (
						<div className="py-5 text-center">
							<p className="mb-3 text-gray-500 dark:text-gray-400">
								No lessons created yet
							</p>
							<Button asChild>
								<Link href="/admin/lessons/new">Create your first lesson</Link>
							</Button>
						</div>
					) : (
						<div className="space-y-5">
							{lessonGroups.map((group, groupIndex) => (
								<details
									key={group.key}
									open={groupIndex === 0}
									className="group/course overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
									aria-labelledby={`course-${group.key}`}
								>
									<summary className="flex cursor-pointer list-none items-center justify-between gap-3 bg-gray-50 px-3 py-2.5 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset dark:bg-gray-800/60 dark:hover:bg-gray-800 [&::-webkit-details-marker]:hidden">
										<div>
											<h3
												id={`course-${group.key}`}
												className="font-semibold text-gray-900 dark:text-white"
											>
												{group.course?.title ?? "Unassigned lessons"}
											</h3>
											<p className="text-xs text-gray-500 dark:text-gray-400">
												{group.course?.slug ?? "Not attached to a course"}
											</p>
										</div>
										<div className="flex items-center gap-2">
											<Badge variant="secondary">
												{group.lessons.length} lesson
												{group.lessons.length === 1 ? "" : "s"}
											</Badge>
											<ChevronDown className="h-4 w-4 text-gray-500 transition-transform group-open/course:rotate-180" />
										</div>
									</summary>

									<div className="divide-y divide-gray-100 px-3 dark:divide-gray-800">
										{group.lessons.map((lesson) => {
											const previewHref = getStudentLessonHref(
												lesson.course?.slug,
												lesson.orderIndex,
											);

											return (
												<div
													key={lesson.id}
													className="flex items-center justify-between gap-3 py-3 last:pb-0"
												>
													<div className="flex min-w-0 items-center gap-3">
														<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-sm font-semibold text-purple-600 dark:bg-purple-950 dark:text-purple-400">
															{lesson.orderIndex}
														</div>
														<div className="min-w-0">
															<h4 className="truncate text-sm font-medium text-gray-900 dark:text-white">
																{lesson.title}
															</h4>
															<div className="mt-1 flex flex-wrap items-center gap-2">
																<span className="text-xs text-gray-500">
																	{lesson.completions} completions
																</span>
																<Badge
																	variant="outline"
																	className="text-xs capitalize"
																>
																	{lesson.difficulty}
																</Badge>
															</div>
														</div>
													</div>
													{previewHref ? (
														<Button
															variant="ghost"
															size="sm"
															asChild
															className="h-8 gap-1.5 px-2"
														>
															<Link
																href={previewHref}
																aria-label={`Preview ${group.course?.title}, lesson ${lesson.orderIndex}: ${lesson.title}`}
															>
																<Eye className="h-4 w-4" />
																Preview
															</Link>
														</Button>
													) : (
														<Button
															variant="ghost"
															size="sm"
															disabled
															className="h-8 gap-1.5 px-2"
														>
															<Eye className="h-4 w-4" />
															Preview unavailable
														</Button>
													)}
												</div>
											);
										})}
									</div>
								</details>
							))}
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	);
}
