import {
	ArrowUpRight,
	Award,
	BarChart3,
	BookOpen,
	FileCode,
	GraduationCap,
	TrendingUp,
	Users,
} from "lucide-react";
import Link from "next/link";
import { SyncLessonsButton } from "@/components/admin/sync-lessons-button";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { requireAdmin } from "@/lib/auth-helpers";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export default async function AdminOverviewPage() {
	await requireAdmin();
	const supabase = await getSupabaseServerClient();

	// Fetch total students
	const { count: totalStudents } = await supabase
		.from("profiles")
		.select("*", { count: "exact", head: true })
		.eq("role", "student");

	// Fetch enrolled students (students with at least one level enrollment)
	const { data: enrolledStudentsData } = await supabase
		.from("level_enrollments")
		.select("student_id")
		.limit(1000);

	const enrolledStudentIds = new Set(
		(enrolledStudentsData || []).map(
			(e: { student_id: string }) => e.student_id,
		),
	);
	const enrolledStudentsCount = enrolledStudentIds.size;

	// Fetch total enrollments
	const { count: totalEnrollments } = await supabase
		.from("level_enrollments")
		.select("*", { count: "exact", head: true });

	// Fetch total lessons
	const { count: totalLessons } = await supabase
		.from("lessons")
		.select("*", { count: "exact", head: true });

	// Fetch total completed lessons
	const { count: totalCompletedLessons } = await supabase
		.from("completed_lessons")
		.select("*", { count: "exact", head: true });

	// Fetch pending submissions count
	const { count: pendingSubmissions } = await supabase
		.from("trinket_submissions")
		.select("*", { count: "exact", head: true })
		.eq("status", "submitted");

	// Fetch recent students
	const { data: recentStudentsData } = await supabase
		.from("profiles")
		.select("id, email, full_name, created_at")
		.order("created_at", { ascending: false })
		.limit(5);

	const recentStudents = (recentStudentsData || []).map((student) => ({
		id: student.id,
		name: student.full_name || "Unknown User",
		email: student.email,
		joinDate: new Date(student.created_at).toLocaleDateString("en-CA"),
		isEnrolled: enrolledStudentIds.has(student.id),
	}));

	const stats = {
		totalStudents: totalStudents || 0,
		enrolledStudents: enrolledStudentsCount,
		totalEnrollments: totalEnrollments || 0,
		totalLessons: totalLessons || 0,
		completedLessons: totalCompletedLessons || 0,
		pendingSubmissions: pendingSubmissions || 0,
	};

	const enrollmentRate =
		stats.totalStudents > 0
			? Math.round((stats.enrolledStudents / stats.totalStudents) * 100)
			: 0;

	return (
		<div className="space-y-8">
			<div className="flex items-start justify-between gap-4">
				<div>
					<h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
						Dashboard Overview
					</h1>
					<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
						Welcome back! Here&apos;s what&apos;s happening on your platform.
					</p>
				</div>
				<SyncLessonsButton />
			</div>

			{/* Stats Grid */}
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardContent className="p-6">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
									Total Students
								</p>
								<p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
									{stats.totalStudents}
								</p>
							</div>
							<div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center">
								<Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
							</div>
						</div>
						<div className="mt-4 flex items-center text-sm">
							<span className="text-green-600 dark:text-green-400 font-medium">
								{stats.enrolledStudents} enrolled
							</span>
							<span className="text-gray-400 mx-2">•</span>
							<span className="text-gray-500">
								{stats.totalStudents - stats.enrolledStudents} not enrolled
							</span>
						</div>
					</CardContent>
				</Card>

				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardContent className="p-6">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
									Enrollment Rate
								</p>
								<p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
									{enrollmentRate}%
								</p>
							</div>
							<div className="h-12 w-12 rounded-xl bg-green-50 dark:bg-green-950 flex items-center justify-center">
								<TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
							</div>
						</div>
						<div className="mt-4 flex items-center text-sm text-gray-500">
							<ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
							{stats.totalEnrollments} total level enrollments
						</div>
					</CardContent>
				</Card>

				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardContent className="p-6">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
									Total Lessons
								</p>
								<p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
									{stats.totalLessons}
								</p>
							</div>
							<div className="h-12 w-12 rounded-xl bg-purple-50 dark:bg-purple-950 flex items-center justify-center">
								<BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
							</div>
						</div>
						<div className="mt-4 flex items-center text-sm text-gray-500">
							<GraduationCap className="h-4 w-4 mr-1" />
							{stats.completedLessons} completions
						</div>
					</CardContent>
				</Card>

				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardContent className="p-6">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
									Pending Reviews
								</p>
								<p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
									{stats.pendingSubmissions}
								</p>
							</div>
							<div className="h-12 w-12 rounded-xl bg-orange-50 dark:bg-orange-950 flex items-center justify-center">
								<FileCode className="h-6 w-6 text-orange-600 dark:text-orange-400" />
							</div>
						</div>
						<div className="mt-4">
							<Link
								href="/admin/submissions"
								className="text-sm text-orange-600 dark:text-orange-400 hover:underline font-medium"
							>
								Review now →
							</Link>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Content Grid */}
			<div className="grid lg:grid-cols-2 gap-6">
				{/* Recent Students */}
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardHeader className="pb-4">
						<div className="flex items-center justify-between">
							<div>
								<CardTitle className="text-lg font-semibold">
									Recent Students
								</CardTitle>
								<CardDescription className="mt-1">
									Latest registrations on the platform
								</CardDescription>
							</div>
							<Link
								href="/admin/students"
								className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
							>
								View all
							</Link>
						</div>
					</CardHeader>
					<CardContent className="pt-0">
						<div className="divide-y divide-gray-100 dark:divide-gray-800">
							{recentStudents.map((student) => (
								<div
									key={student.id}
									className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
								>
									<div className="flex items-center gap-3">
										<div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
											{student.name.charAt(0).toUpperCase()}
										</div>
										<div>
											<p className="text-sm font-medium text-gray-900 dark:text-white">
												{student.name}
											</p>
											<p className="text-xs text-gray-500">{student.email}</p>
										</div>
									</div>
									<Badge
										variant={student.isEnrolled ? "default" : "secondary"}
										className={
											student.isEnrolled
												? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 hover:bg-green-100"
												: ""
										}
									>
										{student.isEnrolled ? "Enrolled" : "Not Enrolled"}
									</Badge>
								</div>
							))}
						</div>
					</CardContent>
				</Card>

				{/* Quick Actions */}
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardHeader className="pb-4">
						<CardTitle className="text-lg font-semibold">
							Platform Overview
						</CardTitle>
						<CardDescription className="mt-1">
							Key metrics at a glance
						</CardDescription>
					</CardHeader>
					<CardContent className="pt-0 space-y-4">
						<div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
							<div className="flex items-center gap-3">
								<Award className="h-5 w-5 text-yellow-500" />
								<span className="text-sm text-gray-600 dark:text-gray-300">
									Lesson Completions
								</span>
							</div>
							<span className="text-lg font-semibold text-gray-900 dark:text-white">
								{stats.completedLessons}
							</span>
						</div>
						<div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
							<div className="flex items-center gap-3">
								<BarChart3 className="h-5 w-5 text-blue-500" />
								<span className="text-sm text-gray-600 dark:text-gray-300">
									Avg Completions/Lesson
								</span>
							</div>
							<span className="text-lg font-semibold text-gray-900 dark:text-white">
								{stats.totalLessons > 0
									? (stats.completedLessons / stats.totalLessons).toFixed(1)
									: 0}
							</span>
						</div>
						<Link
							href="/admin/enrollments"
							className="flex items-center justify-between p-4 rounded-lg bg-green-50 dark:bg-green-950/50 hover:bg-green-100 dark:hover:bg-green-950 transition-colors"
						>
							<span className="text-sm font-medium text-green-700 dark:text-green-300">
								Manage Student Enrollments
							</span>
							<ArrowUpRight className="h-4 w-4 text-green-600" />
						</Link>
						<Link
							href="/admin/submissions"
							className="flex items-center justify-between p-4 rounded-lg bg-orange-50 dark:bg-orange-950/50 hover:bg-orange-100 dark:hover:bg-orange-950 transition-colors"
						>
							<span className="text-sm font-medium text-orange-700 dark:text-orange-300">
								Review Pending Submissions
							</span>
							<ArrowUpRight className="h-4 w-4 text-orange-600" />
						</Link>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
