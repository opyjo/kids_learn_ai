import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export default async function AnalyticsPage() {
	const supabase = await getSupabaseServerClient();

	// Fetch stats
	const { count: totalStudents } = await supabase
		.from("profiles")
		.select("*", { count: "exact", head: true })
		.eq("role", "student");

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

	const { count: totalEnrollments } = await supabase
		.from("level_enrollments")
		.select("*", { count: "exact", head: true });

	const { count: totalLessons } = await supabase
		.from("lessons")
		.select("*", { count: "exact", head: true });

	const { count: totalCompletedLessons } = await supabase
		.from("completed_lessons")
		.select("*", { count: "exact", head: true });

	const { count: pendingSubmissions } = await supabase
		.from("trinket_submissions")
		.select("*", { count: "exact", head: true })
		.eq("status", "submitted");

	const stats = {
		totalStudents: totalStudents || 0,
		enrolledStudents: enrolledStudentsCount,
		totalEnrollments: totalEnrollments || 0,
		totalLessons: totalLessons || 0,
		completedLessons: totalCompletedLessons || 0,
		pendingSubmissions: pendingSubmissions || 0,
	};

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
						Analytics
					</h1>
					<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
						Platform metrics and performance data
					</p>
				</div>
				<Button variant="outline" className="gap-2">
					<Download className="h-4 w-4" />
					Download Report
				</Button>
			</div>

			<div className="grid lg:grid-cols-2 gap-6">
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardHeader className="pb-4">
						<CardTitle className="text-lg font-semibold">
							Student Metrics
						</CardTitle>
						<CardDescription className="mt-1">
							User engagement and conversion data
						</CardDescription>
					</CardHeader>
					<CardContent className="pt-0 space-y-4">
						<div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
							<span className="text-sm text-gray-600 dark:text-gray-300">
								Total Students
							</span>
							<span className="text-sm font-semibold text-gray-900 dark:text-white">
								{stats.totalStudents}
							</span>
						</div>
						<div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
							<span className="text-sm text-gray-600 dark:text-gray-300">
								Enrolled Students
							</span>
							<span className="text-sm font-semibold text-green-600 dark:text-green-400">
								{stats.enrolledStudents}
							</span>
						</div>
						<div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
							<span className="text-sm text-gray-600 dark:text-gray-300">
								Not Enrolled
							</span>
							<span className="text-sm font-semibold text-gray-900 dark:text-white">
								{stats.totalStudents - stats.enrolledStudents}
							</span>
						</div>
						<div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
							<span className="text-sm text-gray-600 dark:text-gray-300">
								Enrollment Rate
							</span>
							<span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
								{stats.totalStudents > 0
									? Math.round(
											(stats.enrolledStudents / stats.totalStudents) * 100,
										)
									: 0}
								%
							</span>
						</div>
						<div className="flex items-center justify-between py-3">
							<span className="text-sm text-gray-600 dark:text-gray-300">
								Total Level Enrollments
							</span>
							<span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
								{stats.totalEnrollments}
							</span>
						</div>
					</CardContent>
				</Card>

				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardHeader className="pb-4">
						<CardTitle className="text-lg font-semibold">
							Lesson Metrics
						</CardTitle>
						<CardDescription className="mt-1">
							Content performance and completion rates
						</CardDescription>
					</CardHeader>
					<CardContent className="pt-0 space-y-4">
						<div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
							<span className="text-sm text-gray-600 dark:text-gray-300">
								Total Lessons
							</span>
							<span className="text-sm font-semibold text-gray-900 dark:text-white">
								{stats.totalLessons}
							</span>
						</div>
						<div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
							<span className="text-sm text-gray-600 dark:text-gray-300">
								Total Completions
							</span>
							<span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
								{stats.completedLessons}
							</span>
						</div>
						<div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
							<span className="text-sm text-gray-600 dark:text-gray-300">
								Avg Completions/Lesson
							</span>
							<span className="text-sm font-semibold text-gray-900 dark:text-white">
								{stats.totalLessons > 0
									? (stats.completedLessons / stats.totalLessons).toFixed(1)
									: 0}
							</span>
						</div>
						<div className="flex items-center justify-between py-3">
							<span className="text-sm text-gray-600 dark:text-gray-300">
								Pending Submissions
							</span>
							<span className="text-sm font-semibold text-orange-600 dark:text-orange-400">
								{stats.pendingSubmissions}
							</span>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
