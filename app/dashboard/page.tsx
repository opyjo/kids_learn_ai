import { BookOpen, CalendarClock, ChevronRight, Gamepad2 } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ContinueLearningCard } from "@/components/dashboard/continue-learning-card";
import { HomeworkDueCard } from "@/components/dashboard/homework-due-card";
import { LearningProgressCard } from "@/components/dashboard/learning-progress-card";
import { MyAssignmentsSection } from "@/components/dashboard/my-assignments-section";
import {
	NextClassCard,
	type NextClassInfo,
} from "@/components/dashboard/next-class-card";
import {
	type QuickCheckItem,
	QuickChecksCard,
} from "@/components/dashboard/quick-checks-card";
import { RecentFeedbackCard } from "@/components/dashboard/recent-feedback-card";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getUserEnrollments, requireAuth } from "@/lib/auth-helpers";
import { formatScheduleLine, getNextOccurrence } from "@/lib/schedule-utils";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
	// Protect the route - redirects to /login if not authenticated
	const authUser = await requireAuth();

	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
	const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

	if (!supabaseUrl || !supabaseAnonKey) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 dark:from-purple-600/8 dark:via-pink-600/8 dark:to-orange-600/8 flex items-center justify-center p-6">
				<Card className="max-w-xl w-full">
					<CardHeader>
						<CardTitle>Supabase not configured</CardTitle>
						<CardDescription>
							Add your Supabase URL and anon key to <code>.env.local</code> and
							restart the server.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-3 text-sm">
							<p>
								Create a file named <code>.env.local</code> in the project root
								with:
							</p>
							<pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
								NEXT_PUBLIC_SUPABASE_URL=your-project-url
								NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
								NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000/dashboard
							</pre>
							<p>
								Get these from{" "}
								<a
									href="https://supabase.com/dashboard/project/_/settings/api"
									target="_blank"
									rel="noreferrer"
									className="text-blue-600 underline"
								>
									Supabase API settings
								</a>
								.
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		);
	}

	const supabase = await getSupabaseServerClient();

	// Fetch user profile
	const { data: profile } = await supabase
		.from("profiles")
		.select("*")
		.eq("id", authUser.id)
		.single();

	if (profile?.role === "parent") {
		redirect("/family");
	}

	// Get user's enrolled levels
	const enrolledLevelIds = await getUserEnrollments(authUser.id);

	// Fetch enrolled courses with details
	const { data: enrolledCourses } = await supabase
		.from("courses")
		.select("id, title, slug, description, order_index")
		.in("id", enrolledLevelIds.length > 0 ? enrolledLevelIds : ["none"])
		.order("order_index", { ascending: true });

	// Fetch total lessons count for enrolled levels only
	const { data: enrolledLessons } = await supabase
		.from("lessons")
		.select(
			"id, course_id, title, order_index, take_home_assignment, requires_trinket",
		)
		.in("course_id", enrolledLevelIds.length > 0 ? enrolledLevelIds : ["none"]);

	const totalLessonsInEnrolledLevels = enrolledLessons?.length || 0;

	// Fetch completed lessons count (only for enrolled levels)
	const { data: completedLessonsData } = await supabase
		.from("completed_lessons")
		.select("lesson_id, lessons!inner(course_id)")
		.eq("student_id", authUser.id);

	// Filter to only count completions in enrolled levels
	const completedLessonsCount =
		completedLessonsData?.filter((item: any) =>
			enrolledLevelIds.includes(item.lessons?.course_id),
		).length || 0;

	// Calculate completions per course
	const completionsPerCourse: Record<string, number> = {};
	const lessonsPerCourse: Record<string, number> = {};

	(enrolledLessons || []).forEach((lesson: { course_id: string | null }) => {
		if (lesson.course_id) {
			lessonsPerCourse[lesson.course_id] =
				(lessonsPerCourse[lesson.course_id] || 0) + 1;
		}
	});

	(completedLessonsData || []).forEach((item: any) => {
		const courseId = item.lessons?.course_id;
		if (courseId && enrolledLevelIds.includes(courseId)) {
			completionsPerCourse[courseId] =
				(completionsPerCourse[courseId] || 0) + 1;
		}
	});

	// Fetch student's trinket submissions
	const { data: submissionsData } = await supabase
		.from("trinket_submissions")
		.select(
			`
      id,
      lesson_id,
      trinket_url,
      status,
      feedback,
      grade,
      reviewed_at,
      submitted_at,
      lessons (
        id,
        title,
        order_index,
        courses (slug)
      )
    `,
		)
		.eq("student_id", authUser.id)
		.order("submitted_at", { ascending: false });

	// Transform submissions data for the component
	const submissions = (submissionsData || []).map((sub: any) => ({
		id: sub.id,
		lessonId: sub.lesson_id,
		lessonTitle: sub.lessons?.title || "Unknown Lesson",
		lessonOrderIndex: sub.lessons?.order_index || 0,
		courseSlug: sub.lessons?.courses?.slug || "level-1-python-foundations-1",
		trinketUrl: sub.trinket_url,
		status: sub.status as "submitted" | "reviewed" | "graded",
		feedback: sub.feedback,
		grade: sub.grade,
		reviewedAt: sub.reviewed_at,
		submittedAt: sub.submitted_at,
	}));

	// Fetch active class schedules for enrolled levels (RLS: enrolled students
	// can read these, including the meeting link)
	const { data: schedulesData } = await supabase
		.from("class_schedules")
		.select(
			"course_id, label, day_of_week, start_time, duration_minutes, timezone, meeting_link, meeting_notes",
		)
		.in("course_id", enrolledLevelIds.length > 0 ? enrolledLevelIds : ["none"])
		.eq("is_active", true);

	const courseById = new Map(
		(enrolledCourses || []).map((course) => [course.id, course]),
	);

	const nextClasses: NextClassInfo[] = (schedulesData || []).flatMap(
		(schedule: any) => {
			try {
				return [
					{
						courseTitle:
							courseById.get(schedule.course_id)?.title ?? "Your course",
						label: schedule.label,
						nextOccursAt: getNextOccurrence(schedule).toISOString(),
						scheduleLine: formatScheduleLine(schedule),
						meetingLink: schedule.meeting_link,
						meetingNotes: schedule.meeting_notes,
						durationMinutes: schedule.duration_minutes,
					},
				];
			} catch {
				// Skip schedules with an invalid timezone rather than break the page
				return [];
			}
		},
	);

	const scheduleLinesByCourse: Record<string, string[]> = {};
	for (const schedule of schedulesData || []) {
		try {
			const line = formatScheduleLine(schedule as any);
			if (!scheduleLinesByCourse[schedule.course_id]) {
				scheduleLinesByCourse[schedule.course_id] = [];
			}
			scheduleLinesByCourse[schedule.course_id].push(line);
		} catch {
			// ignore invalid schedule
		}
	}

	// Continue where you left off: first incomplete lesson of the first
	// enrolled course that has one
	const completedLessonIds = new Set(
		(completedLessonsData || []).map((item: any) => item.lesson_id),
	);
	let continueLesson: {
		courseTitle: string;
		lessonTitle: string;
		weekNumber: number;
		href: string;
	} | null = null;
	for (const course of enrolledCourses || []) {
		const nextIncomplete = (enrolledLessons || [])
			.filter((lesson: any) => lesson.course_id === course.id)
			.sort((a: any, b: any) => a.order_index - b.order_index)
			.find((lesson: any) => !completedLessonIds.has(lesson.id));
		if (nextIncomplete) {
			continueLesson = {
				courseTitle: course.title,
				lessonTitle: nextIncomplete.title,
				weekNumber: nextIncomplete.order_index,
				href: `/lessons/${course.slug}/${nextIncomplete.order_index}`,
			};
			break;
		}
	}

	// Homework due: lessons with a take-home assignment and no submission yet
	const submittedLessonIds = new Set(submissions.map((sub) => sub.lessonId));
	const homeworkDue = (enrolledLessons || [])
		.filter(
			(lesson: any) =>
				lesson.take_home_assignment &&
				lesson.requires_trinket &&
				!submittedLessonIds.has(lesson.id),
		)
		.sort((a: any, b: any) => a.order_index - b.order_index)
		.slice(0, 5)
		.flatMap((lesson: any) => {
			const course = courseById.get(lesson.course_id);
			if (!course) return [];
			return [
				{
					lessonTitle: lesson.title,
					courseTitle: course.title,
					weekNumber: lesson.order_index,
					href: `/lessons/${course.slug}/${lesson.order_index}`,
				},
			];
		});

	// Latest reviewed/graded submissions with teacher feedback
	const recentFeedback = submissions
		.filter((sub) => sub.status !== "submitted" && sub.feedback)
		.slice(0, 3)
		.map((sub) => ({
			id: sub.id,
			lessonTitle: sub.lessonTitle,
			grade: sub.grade,
			feedback: sub.feedback,
			href: `/lessons/${sub.courseSlug}/${sub.lessonOrderIndex}`,
		}));

	// Quick Check quizzes for enrolled lessons, with the student's best attempt.
	// Quiz tables are RLS-locked (answer keys stay server-side), so this read
	// goes through the admin client with non-sensitive columns only.
	let quickChecks: QuickCheckItem[] = [];
	const adminClient = getSupabaseAdminClient();
	if (adminClient && enrolledLessons && enrolledLessons.length > 0) {
		const { data: quizRows } = await adminClient
			.from("quizzes")
			.select("id, lesson_id")
			.in(
				"lesson_id",
				enrolledLessons.map((lesson: any) => lesson.id),
			)
			.eq("quiz_type", "quick_check")
			.eq("status", "published")
			.eq("is_active", true);
		if (quizRows && quizRows.length > 0) {
			const { data: attemptRows } = await adminClient
				.from("quiz_attempts")
				.select("quiz_id, percentage, passed")
				.eq("user_id", authUser.id)
				.in(
					"quiz_id",
					quizRows.map((quiz) => quiz.id),
				);
			const attemptsByQuiz = new Map<
				string,
				{ best: number; passed: boolean; count: number }
			>();
			for (const attempt of attemptRows || []) {
				const previous = attemptsByQuiz.get(attempt.quiz_id);
				attemptsByQuiz.set(attempt.quiz_id, {
					best: Math.max(previous?.best ?? 0, attempt.percentage),
					passed: (previous?.passed ?? false) || attempt.passed,
					count: (previous?.count ?? 0) + 1,
				});
			}
			const lessonById = new Map(
				enrolledLessons.map((lesson: any) => [lesson.id, lesson]),
			);
			quickChecks = quizRows
				.flatMap((quiz) => {
					const lesson: any = lessonById.get(quiz.lesson_id);
					const course = lesson ? courseById.get(lesson.course_id) : undefined;
					if (!lesson || !course) return [];
					const attempts = attemptsByQuiz.get(quiz.id);
					// Out of attempts without passing: nothing actionable, so leave
					// it off the list rather than offer a retry that will be refused.
					if (attempts && !attempts.passed && attempts.count >= 2) return [];
					return [
						{
							lessonTitle: lesson.title,
							courseTitle: course.title,
							weekNumber: lesson.order_index,
							href: `/lessons/${course.slug}/${lesson.order_index}`,
							bestPercentage: attempts ? attempts.best : null,
							passed: attempts?.passed ?? false,
						},
					];
				})
				.sort((a, b) => a.weekNumber - b.weekNumber);
		}
	}

	const metadata = authUser.user_metadata as { full_name?: string } | null;
	const userName =
		profile?.full_name ||
		metadata?.full_name ||
		authUser.email?.split("@")[0] ||
		"Student";

	const progressPercentage =
		totalLessonsInEnrolledLevels > 0
			? Math.min(
					100,
					(completedLessonsCount / totalLessonsInEnrolledLevels) * 100,
				)
			: 0;

	return (
		<div className="min-h-screen bg-background">
			<SiteHeader />

			<div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
				<div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
					<div>
						<p className="text-sm font-medium text-primary">Student home</p>
						<h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
							Welcome back, {userName}
						</h1>
						<p className="mt-1 text-sm text-muted-foreground">
							{enrolledLevelIds.length > 0
								? "Here is your next step and everything waiting for you."
								: "Start with a free live class and find the right learning level."}
						</p>
					</div>
					{enrolledLevelIds.length > 0 && (
						<Button asChild variant="outline" size="sm">
							<Link href="/quiz/join">
								<Gamepad2 />
								Join a live game
							</Link>
						</Button>
					)}
				</div>

				{enrolledLevelIds.length === 0 && (
					<div className="mb-6 rounded-xl border border-primary/20 bg-card p-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
						<div>
							<h2 className="text-lg font-semibold">Ready to begin?</h2>
							<p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
								Book one free live class to meet an instructor, try a coding
								activity, and choose the right program.
							</p>
						</div>
						<div className="mt-4 flex gap-2 sm:mt-0">
							<Button asChild>
								<Link href="/inquiry">Book free trial</Link>
							</Button>
							<Button asChild variant="outline">
								<Link href="/pricing">Pricing</Link>
							</Button>
						</div>
					</div>
				)}

				{(nextClasses.length > 0 || continueLesson) && (
					<section aria-labelledby="next-up-heading" className="mb-5">
						<h2
							id="next-up-heading"
							className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground"
						>
							Next up
						</h2>
						<div className="grid gap-4 lg:grid-cols-2">
							<NextClassCard classes={nextClasses} />
							{continueLesson && (
								<ContinueLearningCard lesson={continueLesson} />
							)}
						</div>
					</section>
				)}

				<div className="mb-5 grid grid-cols-3 overflow-hidden rounded-xl border border-border bg-card">
					<div className="border-r border-border p-4">
						<p className="text-xs text-muted-foreground">Lessons complete</p>
						<p className="mt-1 text-2xl font-semibold">
							{completedLessonsCount}
							<span className="ml-1 text-sm font-normal text-muted-foreground">
								/ {totalLessonsInEnrolledLevels}
							</span>
						</p>
					</div>
					<div className="border-r border-border p-4">
						<p className="text-xs text-muted-foreground">Overall progress</p>
						<p className="mt-1 text-2xl font-semibold">
							{Math.round(progressPercentage)}%
						</p>
						<Progress value={progressPercentage} className="mt-2 h-1.5" />
					</div>
					<div className="p-4">
						<p className="text-xs text-muted-foreground">Enrolled levels</p>
						<p className="mt-1 text-2xl font-semibold">
							{enrolledLevelIds.length}
						</p>
					</div>
				</div>

				<div className="grid gap-4 xl:grid-cols-[1fr_0.85fr]">
					<div>
						{enrolledLevelIds.length > 0 && (
							<div className="mb-4">
								<HomeworkDueCard items={homeworkDue} />
							</div>
						)}
						<LearningProgressCard />
						<QuickChecksCard items={quickChecks} />
					</div>

					<div>
						{enrolledCourses && enrolledCourses.length > 0 && (
							<Card className="mb-4">
								<CardHeader>
									<CardTitle className="text-base">Your programs</CardTitle>
									<CardDescription>
										Progress across enrolled levels
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="divide-y divide-border">
										{enrolledCourses.map((course) => {
											const lessonsCount = lessonsPerCourse[course.id] || 0;
											// Clamp so stale/duplicate completions can't show >100% or "12/9".
											const completed = Math.min(
												completionsPerCourse[course.id] || 0,
												lessonsCount,
											);
											const progress =
												lessonsCount > 0
													? Math.round((completed / lessonsCount) * 100)
													: 0;

											return (
												<Link
													key={course.id}
													href={`/lessons/${course.slug}`}
													className="group block py-4 first:pt-0 last:pb-0"
												>
													<div className="mb-2 flex items-center justify-between">
														<div className="flex items-center gap-2">
															<BookOpen className="size-4 text-primary" />
															<h3 className="text-sm font-semibold group-hover:text-primary">
																{course.title}
															</h3>
														</div>
														<ChevronRight className="size-4 text-muted-foreground" />
													</div>
													{(scheduleLinesByCourse[course.id] || []).length >
														0 && (
														<p className="mb-2 flex items-center gap-1.5 text-xs text-muted-foreground">
															<CalendarClock
																className="h-3.5 w-3.5 shrink-0"
																aria-hidden="true"
															/>
															Live class:{" "}
															{scheduleLinesByCourse[course.id].join(" · ")}
														</p>
													)}
													<div className="flex items-center gap-3">
														<div className="flex-1">
															<div className="h-1.5 overflow-hidden rounded-full bg-muted">
																<div
																	className="h-full bg-green-500 rounded-full transition-all"
																	style={{ width: `${progress}%` }}
																/>
															</div>
														</div>
														<span className="text-xs text-muted-foreground">
															{completed}/{lessonsCount} lessons
														</span>
													</div>
												</Link>
											);
										})}
									</div>
								</CardContent>
							</Card>
						)}

						{recentFeedback.length > 0 && (
							<RecentFeedbackCard items={recentFeedback} />
						)}
					</div>
				</div>

				<div className="mt-6">
					<MyAssignmentsSection initialSubmissions={submissions} />
				</div>
			</div>
		</div>
	);
}
