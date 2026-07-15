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
import { getEnrolledStudentIds } from "@/lib/admin/enrolled-students";
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
	const enrolledStudentIds = await getEnrolledStudentIds(supabase);
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
		.eq("role", "student")
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
		<div className="mx-auto max-w-[1500px] space-y-5">
			<div className="flex items-center justify-between gap-4">
				<div>
					<h1 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
						Overview
					</h1>
					<p className="mt-0.5 text-sm text-slate-500 dark:text-gray-400">
						Monitor learning activity and handle work that needs attention.
					</p>
				</div>
				<SyncLessonsButton />
			</div>

			{/* Stats Grid */}
			<div className="grid grid-cols-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 lg:grid-cols-4">
				<Card className="rounded-none border-0 border-r border-slate-200 bg-transparent shadow-none dark:border-gray-800">
					<CardContent className="p-4">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
									Total Students
								</p>
								<p className="mt-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
									{stats.totalStudents}
								</p>
							</div>
							<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950">
								<Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
							</div>
						</div>
						<div className="mt-2 flex items-center text-xs">
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

				<Card className="rounded-none border-0 border-r border-slate-200 bg-transparent shadow-none dark:border-gray-800">
					<CardContent className="p-4">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
									Enrollment Rate
								</p>
								<p className="mt-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
									{enrollmentRate}%
								</p>
							</div>
							<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 dark:bg-green-950">
								<TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
							</div>
						</div>
						<div className="mt-2 flex items-center text-xs text-gray-500">
							<ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
							{stats.totalEnrollments} total level enrollments
						</div>
					</CardContent>
				</Card>

				<Card className="rounded-none border-0 border-r border-slate-200 bg-transparent shadow-none dark:border-gray-800">
					<CardContent className="p-4">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
									Total Lessons
								</p>
								<p className="mt-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
									{stats.totalLessons}
								</p>
							</div>
							<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 dark:bg-purple-950">
								<BookOpen className="h-4 w-4 text-purple-600 dark:text-purple-400" />
							</div>
						</div>
						<div className="mt-2 flex items-center text-xs text-gray-500">
							<GraduationCap className="h-4 w-4 mr-1" />
							{stats.completedLessons} completions
						</div>
					</CardContent>
				</Card>

				<Card className="rounded-none border-0 bg-transparent shadow-none">
					<CardContent className="p-4">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
									Pending Reviews
								</p>
								<p className="mt-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
									{stats.pendingSubmissions}
								</p>
							</div>
							<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 dark:bg-orange-950">
								<FileCode className="h-4 w-4 text-orange-600 dark:text-orange-400" />
							</div>
						</div>
						<div className="mt-2">
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
			<div className="grid gap-4 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
				{/* Recent Students */}
				<Card className="border-slate-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
					<CardHeader className="px-4 py-3">
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
					<CardContent className="px-4 pb-2 pt-0">
						<div className="divide-y divide-gray-100 dark:divide-gray-800">
							{recentStudents.map((student) => (
								<div
									key={student.id}
									className="flex items-center justify-between py-2.5 first:pt-0"
								>
									<div className="flex items-center gap-3">
										<div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
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
				<Card className="border-slate-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
					<CardHeader className="px-4 py-3">
						<CardTitle className="text-lg font-semibold">
							Operational summary
						</CardTitle>
						<CardDescription className="mt-1">
							Shortcuts and platform health
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-2 px-4 pb-4 pt-0">
						<div className="flex items-center justify-between rounded-lg border border-slate-100 px-3 py-2.5 dark:border-gray-800">
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
						<div className="flex items-center justify-between rounded-lg border border-slate-100 px-3 py-2.5 dark:border-gray-800">
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
							className="flex items-center justify-between rounded-lg bg-green-50 px-3 py-2.5 transition-colors hover:bg-green-100 dark:bg-green-950/50 dark:hover:bg-green-950"
						>
							<span className="text-sm font-medium text-green-700 dark:text-green-300">
								Manage Student Enrollments
							</span>
							<ArrowUpRight className="h-4 w-4 text-green-600" />
						</Link>
						<Link
							href="/admin/submissions"
							className="flex items-center justify-between rounded-lg bg-orange-50 px-3 py-2.5 transition-colors hover:bg-orange-100 dark:bg-orange-950/50 dark:hover:bg-orange-950"
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
