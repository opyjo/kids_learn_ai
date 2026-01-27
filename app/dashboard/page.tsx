import {
	BookOpen,
	ChevronRight,
	Code,
	GraduationCap,
	Lock,
	Play,
	Trophy,
} from "lucide-react";
import Link from "next/link";
import { MyAssignmentsSection } from "@/components/dashboard/my-assignments-section";
import { SiteHeader } from "@/components/site-header";
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
import { getUserEnrollments, requireAuth } from "@/lib/auth-helpers";
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
		.select("id, course_id")
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

	const metadata = authUser.user_metadata as { full_name?: string } | null;
	const userName =
		profile?.full_name ||
		metadata?.full_name ||
		authUser.email?.split("@")[0] ||
		"Student";

	const userEmail = profile?.email || authUser.email || "Not provided";

	const progressPercentage =
		totalLessonsInEnrolledLevels > 0
			? (completedLessonsCount / totalLessonsInEnrolledLevels) * 100
			: 0;

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 dark:from-purple-600/8 dark:via-pink-600/8 dark:to-orange-600/8">
			<SiteHeader />

			<div className="mx-auto w-full max-w-6xl px-4 py-8">
				{/* Welcome Section */}
				<div className="mb-8">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
						Welcome back, {userName}! 👋
					</h2>
					<p className="text-gray-600 dark:text-gray-400">
						{enrolledLevelIds.length > 0
							? "Ready to continue your coding journey?"
							: "Get started on your coding journey today!"}
					</p>
				</div>

				{/* No Enrollments Message */}
				{enrolledLevelIds.length === 0 && (
					<Card className="mb-8 border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl">
						<CardContent className="p-8">
							<div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
								<div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
									<GraduationCap className="h-10 w-10 text-primary" />
								</div>
								<div className="flex-1">
									<h3 className="font-semibold text-foreground text-xl mb-2">
										You Haven't Enrolled Yet
									</h3>
									<p className="text-muted-foreground mb-4">
										Book a free trial class to start learning Python and AI with
										us! No commitment required - try your first class completely
										free.
									</p>
									<div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
										<Button
											asChild
											size="lg"
											className="rounded-full min-h-[44px]"
										>
											<Link href="/inquiry">Book Free Trial →</Link>
										</Button>
										<Button
											asChild
											variant="outline"
											size="lg"
											className="rounded-full min-h-[44px]"
										>
											<Link href="/pricing">View Pricing</Link>
										</Button>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				)}

				{/* Stats Cards */}
				<div className="grid md:grid-cols-3 gap-6 mb-8">
					<Card className="rounded-2xl border-0 shadow-xl ring-1 ring-gray-200/60 dark:ring-white/10">
						<CardHeader className="space-y-2">
							<CardTitle className="text-sm font-medium">
								Your Profile
							</CardTitle>
							<CardDescription>Quick snapshot of your account</CardDescription>
						</CardHeader>
						<CardContent className="space-y-3 text-sm">
							<div>
								<p className="text-xs text-muted-foreground uppercase tracking-wide">
									Name
								</p>
								<p className="font-medium text-gray-900 dark:text-gray-100">
									{userName}
								</p>
							</div>
							<div>
								<p className="text-xs text-muted-foreground uppercase tracking-wide">
									Email
								</p>
								<p className="font-medium text-gray-900 dark:text-gray-100 break-all">
									{userEmail}
								</p>
							</div>
							<div>
								<p className="text-xs text-muted-foreground uppercase tracking-wide">
									Enrolled Levels
								</p>
								{enrolledLevelIds.length > 0 ? (
									<Badge
										variant="outline"
										className="rounded-full bg-green-50 text-green-700 dark:bg-green-500/20 dark:text-green-200"
									>
										<GraduationCap className="h-3 w-3 mr-1" />
										{enrolledLevelIds.length} Level
										{enrolledLevelIds.length !== 1 ? "s" : ""}
									</Badge>
								) : (
									<Badge
										variant="outline"
										className="rounded-full bg-gray-50 text-gray-500"
									>
										<Lock className="h-3 w-3 mr-1" />
										No Enrollments
									</Badge>
								)}
							</div>
						</CardContent>
					</Card>

					<Card className="rounded-2xl border-0 shadow-xl ring-1 ring-gray-200/60 dark:ring-white/10">
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Lessons Completed
							</CardTitle>
							<div className="p-2 bg-green-100 rounded-full">
								<Trophy className="h-4 w-4 text-green-600" />
							</div>
						</CardHeader>
						<CardContent>
							<div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
								{completedLessonsCount}
							</div>
							<p className="text-xs text-muted-foreground mt-1">
								{totalLessonsInEnrolledLevels > 0
									? `out of ${totalLessonsInEnrolledLevels} lessons in enrolled levels`
									: "Enroll in a level to start learning!"}
							</p>
						</CardContent>
					</Card>

					<Card className="rounded-2xl border-0 shadow-xl ring-1 ring-gray-200/60 dark:ring-white/10">
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Progress</CardTitle>
							<div className="p-2 bg-indigo-100 rounded-full">
								<Code className="h-4 w-4 text-indigo-600" />
							</div>
						</CardHeader>
						<CardContent>
							<div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
								{Math.round(progressPercentage)}%
							</div>
							<Progress
								value={progressPercentage}
								className="mt-2 h-3 rounded-full transition-all duration-500"
							/>
							<p className="text-xs text-muted-foreground mt-2">
								{progressPercentage > 0
									? "Keep going! You're doing great! 🎉"
									: "Start a lesson to track your progress!"}
							</p>
						</CardContent>
					</Card>
				</div>

				{/* Enrolled Levels */}
				{enrolledCourses && enrolledCourses.length > 0 && (
					<Card className="rounded-2xl border-0 shadow-xl ring-1 ring-gray-200/60 dark:ring-white/10 mb-8">
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<GraduationCap className="h-5 w-5 text-primary" />
								My Enrolled Levels
							</CardTitle>
							<CardDescription>
								Continue learning from where you left off
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid md:grid-cols-2 gap-4">
								{enrolledCourses.map((course) => {
									const lessonsCount = lessonsPerCourse[course.id] || 0;
									const completed = completionsPerCourse[course.id] || 0;
									const progress =
										lessonsCount > 0
											? Math.round((completed / lessonsCount) * 100)
											: 0;

									return (
										<Link
											key={course.id}
											href={`/lessons/${course.slug}`}
											className="group"
										>
											<Card className="h-full transition-all hover:shadow-md hover:scale-[1.02] border-green-100 dark:border-green-900/50">
												<CardContent className="p-4">
													<div className="flex items-start justify-between mb-2">
														<div className="flex items-center gap-2">
															<div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
																<BookOpen className="h-4 w-4 text-green-600 dark:text-green-400" />
															</div>
															<h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
																{course.title}
															</h4>
														</div>
														<ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
													</div>
													<p className="text-sm text-muted-foreground mb-3 line-clamp-1">
														{course.description}
													</p>
													<div className="flex items-center gap-3">
														<div className="flex-1">
															<div className="h-2 bg-muted rounded-full overflow-hidden">
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
												</CardContent>
											</Card>
										</Link>
									);
								})}
							</div>
						</CardContent>
					</Card>
				)}

				{/* Quick Actions */}
				<Card className="rounded-2xl border-0 shadow-xl ring-1 ring-gray-200/60 dark:ring-white/10">
					<CardHeader>
						<CardTitle>Quick Actions</CardTitle>
						<CardDescription>What would you like to do today?</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-wrap gap-4">
						<Button
							className="justify-start rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600"
							asChild
						>
							<Link href="/lessons">
								<BookOpen className="mr-2 h-4 w-4" />
								Browse All Levels
							</Link>
						</Button>
						<Button
							variant="outline"
							className="justify-start bg-transparent rounded-full"
							asChild
						>
							<Link href="/playground">
								<Play className="mr-2 h-4 w-4" />
								Python Playground
							</Link>
						</Button>
						{enrolledLevelIds.length === 0 && (
							<Button
								variant="outline"
								className="justify-start rounded-full border-primary text-primary hover:bg-primary hover:text-white"
								asChild
							>
								<Link href="/inquiry">
									<GraduationCap className="mr-2 h-4 w-4" />
									Book Free Trial
								</Link>
							</Button>
						)}
					</CardContent>
				</Card>

				{/* My Assignments Section */}
				<div className="mt-8">
					<MyAssignmentsSection initialSubmissions={submissions} />
				</div>
			</div>
		</div>
	);
}
