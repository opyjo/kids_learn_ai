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
import { getEnrolledStudentIds } from "@/lib/admin/enrolled-students";
import { requireAdmin } from "@/lib/auth-helpers";
import { getSupabaseServerClient } from "@/lib/supabase/server";

const PAGE_SIZE = 25;

export default async function StudentsPage({
	searchParams,
}: {
	searchParams: Promise<{ page?: string }>;
}) {
	await requireAdmin();
	const supabase = await getSupabaseServerClient();

	// Enrolled student ids (used for the per-row badge and the Enrolled stat).
	// Paged helper avoids the 1000-row cap that would silently undercount.
	const enrolledStudentIds = await getEnrolledStudentIds(supabase);
	const enrolledCount = enrolledStudentIds.size;

	// Total student count (exact) drives the stats and page count independently
	// of the current page.
	const { count: totalStudents } = await supabase
		.from("profiles")
		.select("id", { count: "exact", head: true })
		.eq("role", "student");

	const total = totalStudents ?? 0;
	const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

	const { page: pageParam } = await searchParams;
	const requestedPage = Number.parseInt(pageParam ?? "1", 10);
	const page =
		Number.isNaN(requestedPage) || requestedPage < 1
			? 1
			: Math.min(requestedPage, totalPages);
	const from = (page - 1) * PAGE_SIZE;
	const to = from + PAGE_SIZE - 1;

	// Fetch just this page of students.
	const { data: studentsData } = await supabase
		.from("profiles")
		.select("id, email, full_name, created_at")
		.eq("role", "student")
		.order("created_at", { ascending: false })
		.range(from, to);

	const students = (studentsData || []).map((student) => ({
		id: student.id,
		name: student.full_name || "Unknown User",
		email: student.email,
		joinDate: new Date(student.created_at).toLocaleDateString("en-CA"),
		isEnrolled: enrolledStudentIds.has(student.id),
	}));

	const rangeStart = total === 0 ? 0 : from + 1;
	const rangeEnd = from + students.length;

	return (
		<div className="space-y-4">
			<div>
				<h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
					Student Management
				</h1>
				<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
					View and manage all registered students
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardContent className="p-4">
						<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
							Total Students
						</p>
						<p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
							{total}
						</p>
					</CardContent>
				</Card>
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardContent className="p-4">
						<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
							Enrolled
						</p>
						<p className="mt-2 text-3xl font-semibold text-green-600 dark:text-green-400">
							{enrolledCount}
						</p>
					</CardContent>
				</Card>
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardContent className="p-4">
						<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
							Not Enrolled
						</p>
						<p className="mt-2 text-3xl font-semibold text-gray-600 dark:text-gray-400">
							{Math.max(0, total - enrolledCount)}
						</p>
					</CardContent>
				</Card>
			</div>

			<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
				<CardHeader className="pb-4">
					<CardTitle className="text-lg font-semibold">All Students</CardTitle>
					<CardDescription>
						{total === 0
							? "No students registered"
							: `Showing ${rangeStart}–${rangeEnd} of ${total} student${total !== 1 ? "s" : ""}`}
					</CardDescription>
				</CardHeader>
				<CardContent className="pt-0">
					<div className="divide-y divide-gray-100 dark:divide-gray-800">
						{students.map((student) => (
							<div
								key={student.id}
								className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
							>
								<div className="flex items-center gap-4">
									<div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
										{student.name.charAt(0).toUpperCase()}
									</div>
									<div>
										<h4 className="text-sm font-medium text-gray-900 dark:text-white">
											{student.name}
										</h4>
										<p className="text-xs text-gray-500">{student.email}</p>
										<p className="text-xs text-gray-400 mt-0.5">
											Joined {student.joinDate}
										</p>
									</div>
								</div>
								<div className="flex items-center gap-3">
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
									<Button variant="outline" size="sm" asChild>
										<Link href="/admin/enrollments">Manage Access</Link>
									</Button>
								</div>
							</div>
						))}
					</div>

					{totalPages > 1 && (
						<div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-4 mt-4">
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Page {page} of {totalPages}
							</p>
							<div className="flex items-center gap-2">
								{page > 1 ? (
									<Button variant="outline" size="sm" asChild>
										<Link href={`/admin/students?page=${page - 1}`}>
											Previous
										</Link>
									</Button>
								) : (
									<Button variant="outline" size="sm" disabled>
										Previous
									</Button>
								)}
								{page < totalPages ? (
									<Button variant="outline" size="sm" asChild>
										<Link href={`/admin/students?page=${page + 1}`}>Next</Link>
									</Button>
								) : (
									<Button variant="outline" size="sm" disabled>
										Next
									</Button>
								)}
							</div>
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	);
}
