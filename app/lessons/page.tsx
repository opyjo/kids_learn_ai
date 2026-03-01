import {
	BookOpen,
	CheckCircle,
	ChevronRight,
	Clock,
	GraduationCap,
	Lock,
	Play,
} from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getUserEnrollments } from "@/lib/auth-helpers";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export default async function LessonsPage() {
	const supabase = await getSupabaseServerClient();

	// Check if user is authenticated
	const {
		data: { user },
	} = await supabase.auth.getUser();

	// Fetch all courses (levels)
	const { data: coursesData } = await supabase
		.from("courses")
		.select("*")
		.order("order_index", { ascending: true });

	// Get user's enrolled levels if authenticated
	let enrolledLevelIds: string[] = [];
	if (user) {
		enrolledLevelIds = await getUserEnrollments(user.id);
	}

	// Fetch lesson counts per course
	const { data: lessonCounts } = await supabase
		.from("lessons")
		.select("course_id");

	// Count lessons per course
	const lessonCountMap: Record<string, number> = {};
	(lessonCounts || []).forEach((lesson: { course_id: string | null }) => {
		if (lesson.course_id) {
			lessonCountMap[lesson.course_id] =
				(lessonCountMap[lesson.course_id] || 0) + 1;
		}
	});

	// Fetch completed lessons count per course for this user
	const completedCountMap: Record<string, number> = {};
	if (user) {
		const { data: completedData } = await supabase
			.from("completed_lessons")
			.select("lesson_id, lessons!inner(course_id)")
			.eq("student_id", user.id);

		(completedData || []).forEach((item: any) => {
			const courseId = item.lessons?.course_id;
			if (courseId) {
				completedCountMap[courseId] = (completedCountMap[courseId] || 0) + 1;
			}
		});
	}

	// Group courses by year_group
	const coursesByYear: Record<string, typeof coursesData> = {};
	if (coursesData) {
		coursesData.forEach((course) => {
			const year = course.year_group || "All Courses";
			if (!coursesByYear[year]) {
				coursesByYear[year] = [];
			}
			coursesByYear[year].push(course);
		});
	}

	// Calculate overall stats
	const totalEnrolled = enrolledLevelIds.length;
	const totalLevels = coursesData?.length || 0;

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-600/8 dark:via-purple-600/8 dark:to-pink-600/8">
			<SiteHeader />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
				{/* Header */}
				<div className="mb-8">
					<div className="flex items-start justify-between mb-4">
						<div>
							<h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
								Your Learning Journey
							</h1>
							<p className="text-muted-foreground">
								{user
									? `You have access to ${totalEnrolled} of ${totalLevels} levels`
									: "Sign in to track your progress"}
							</p>
						</div>

						{/* Enrollment Status Badge */}
						{user && totalEnrolled > 0 && (
							<div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-sm border border-border">
								<GraduationCap className="h-5 w-5 text-primary" />
								<span className="text-sm font-medium">
									{totalEnrolled} Level{totalEnrolled !== 1 ? "s" : ""} Enrolled
								</span>
							</div>
						)}
					</div>
				</div>

				{/* No Enrollments Message for Logged-in Users */}
				{user && totalEnrolled === 0 && (
					<Card className="mb-8 border-2 border-dashed border-primary/30 bg-primary/5">
						<CardContent className="p-6">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
									<GraduationCap className="h-6 w-6 text-primary" />
								</div>
								<div className="flex-1">
									<h3 className="font-semibold text-foreground mb-1">
										Ready to Start Learning?
									</h3>
									<p className="text-sm text-muted-foreground">
										You haven't enrolled in any levels yet. Book a free trial
										class to get started on your coding journey!
									</p>
								</div>
								<Button asChild className="rounded-full">
									<Link href="/inquiry">Book Free Trial →</Link>
								</Button>
							</div>
						</CardContent>
					</Card>
				)}

				{/* Levels by Year */}
				{Object.entries(coursesByYear).map(([yearGroup, courses]) => (
					<div key={yearGroup} className="mb-10">
						<h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
							<BookOpen className="h-5 w-5 text-primary" />
							{yearGroup}
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							{courses?.map((course) => {
								const isEnrolled = enrolledLevelIds.includes(course.id);
								const lessonCount = lessonCountMap[course.id] || 0;
								const completedCount = completedCountMap[course.id] || 0;
								const progress =
									lessonCount > 0
										? Math.round((completedCount / lessonCount) * 100)
										: 0;
								const isComingSoon = course.is_coming_soon;

								return (
									<Card
										key={course.id}
										className={`group relative overflow-hidden transition-all hover:shadow-lg ${
											isEnrolled
												? "border-green-200 dark:border-green-800 hover:scale-[1.02]"
												: "hover:scale-[1.01]"
										} ${isComingSoon ? "opacity-70" : ""}`}
									>
										{/* Status Bar */}
										<div
											className={`absolute top-0 left-0 right-0 h-1 ${
												isEnrolled
													? "bg-gradient-to-r from-green-500 to-emerald-500"
													: isComingSoon
														? "bg-gradient-to-r from-yellow-400 to-orange-400"
														: "bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700"
											}`}
										/>

										<CardContent className="p-5">
											<div className="flex items-start gap-4">
												{/* Status Icon */}
												<div className="flex-shrink-0">
													{isComingSoon ? (
														<div className="w-12 h-12 rounded-xl bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
															<Clock className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
														</div>
													) : isEnrolled ? (
														<div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
															<CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
														</div>
													) : (
														<div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
															<Lock className="h-6 w-6 text-muted-foreground" />
														</div>
													)}
												</div>

												{/* Content */}
												<div className="flex-1 min-w-0">
													<div className="flex items-start justify-between gap-2 mb-2">
														<h3 className="font-semibold text-foreground leading-tight">
															{course.title}
														</h3>
														{isEnrolled && (
															<Badge className="bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300 text-xs">
																Enrolled
															</Badge>
														)}
														{isComingSoon && (
															<Badge
																variant="outline"
																className="text-yellow-600 border-yellow-300 text-xs"
															>
																Coming Soon
															</Badge>
														)}
													</div>

													<p className="text-sm text-muted-foreground mb-3 line-clamp-2">
														{course.description}
													</p>

													{/* Progress or Info */}
													<div className="flex items-center justify-between">
														<div className="flex items-center gap-3 text-xs text-muted-foreground">
															{lessonCount > 0 && (
																<span>{lessonCount} lessons</span>
															)}
														</div>

														{/* Progress Bar for Enrolled */}
														{isEnrolled && lessonCount > 0 && (
															<div className="flex items-center gap-2">
																<div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
																	<div
																		className="h-full bg-green-500 rounded-full transition-all"
																		style={{ width: `${progress}%` }}
																	/>
																</div>
																<span className="text-xs text-muted-foreground">
																	{progress}%
																</span>
															</div>
														)}
													</div>
												</div>
											</div>

											{/* Action */}
											<div className="mt-4 pt-4 border-t border-border">
												{isComingSoon ? (
													<Button
														variant="outline"
														size="sm"
														disabled
														className="w-full"
													>
														<Clock className="h-4 w-4 mr-2" />
														Coming Soon
													</Button>
												) : isEnrolled ? (
													<Button asChild size="sm" className="w-full">
														<Link href={`/lessons/${course.slug}`}>
															<Play className="h-4 w-4 mr-2" />
															Continue Learning
															<ChevronRight className="h-4 w-4 ml-auto" />
														</Link>
													</Button>
												) : (
													<div className="flex gap-2">
														<Button
															asChild
															variant="outline"
															size="sm"
															className="flex-1"
														>
															<Link href={`/lessons/${course.slug}`}>
																Preview
															</Link>
														</Button>
														<Button asChild size="sm" className="flex-1">
															<Link href="/inquiry">
																<Lock className="h-4 w-4 mr-2" />
																Get Access
															</Link>
														</Button>
													</div>
												)}
											</div>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>
				))}

				{/* CTA for non-enrolled users */}
				{user && totalEnrolled === 0 && (
					<Card className="mt-8 border-accent/30 bg-gradient-to-r from-accent/5 to-primary/5">
						<CardContent className="p-6 text-center">
							<h3 className="text-lg font-bold text-foreground mb-2">
								Start Your Coding Journey Today!
							</h3>
							<p className="text-muted-foreground mb-4">
								Book a free trial class and discover the joy of learning to
								code.
							</p>
							<Button asChild size="lg" className="rounded-full">
								<Link href="/inquiry">Book Free Trial Class →</Link>
							</Button>
						</CardContent>
					</Card>
				)}

				{/* Sign in prompt for guests */}
				{!user && (
					<Card className="mt-8 border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5">
						<CardContent className="p-6 text-center">
							<h3 className="text-lg font-bold text-foreground mb-2">
								Track Your Progress
							</h3>
							<p className="text-muted-foreground mb-4">
								Sign in to track your learning progress and access your enrolled
								levels.
							</p>
							<div className="flex gap-3 justify-center">
								<Button asChild variant="outline">
									<Link href="/login">Sign In</Link>
								</Button>
								<Button asChild>
									<Link href="/inquiry">Book Free Trial</Link>
								</Button>
							</div>
						</CardContent>
					</Card>
				)}
			</div>
		</div>
	);
}
