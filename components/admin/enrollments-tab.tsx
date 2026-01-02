"use client";

import {
	BookOpen,
	CheckCircle,
	GraduationCap,
	Loader2,
	Lock,
	RefreshCw,
	Search,
	Trash2,
	Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

interface Student {
	id: string;
	email: string;
	full_name: string | null;
	created_at: string;
	enrolledLevels: EnrolledLevel[];
}

interface EnrolledLevel {
	id: string;
	course_id: string;
	course_title: string;
	course_order: number;
	enrolled_at: string;
	enrolled_by_name: string | null;
	notes: string | null;
}

interface Course {
	id: string;
	title: string;
	order_index: number;
	year_group: string | null;
	is_coming_soon: boolean;
}

const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	return date.toLocaleDateString(undefined, {
		month: "short",
		day: "numeric",
		year: "numeric",
	});
};

export const EnrollmentsTab = () => {
	const [students, setStudents] = useState<Student[]>([]);
	const [courses, setCourses] = useState<Course[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
	const [isEnrollDialogOpen, setIsEnrollDialogOpen] = useState(false);
	const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
	const [enrollmentNotes, setEnrollmentNotes] = useState("");
	const [isSaving, setIsSaving] = useState(false);

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const supabase = getSupabaseBrowserClient();

			// Fetch all students (excluding admins)
			const { data: studentsData, error: studentsError } = await supabase
				.from("profiles")
				.select("id, email, full_name, created_at, role")
				.eq("role", "student")
				.order("created_at", { ascending: false });

			if (studentsError) throw studentsError;

			// Fetch all enrollments with course info
			const { data: enrollmentsData, error: enrollmentsError } = await supabase
				.from("level_enrollments")
				.select(`
          id,
          student_id,
          course_id,
          enrolled_at,
          notes,
          enrolled_by,
          courses (
            id,
            title,
            order_index
          ),
          profiles!level_enrollments_enrolled_by_fkey (
            full_name
          )
        `);

			if (enrollmentsError) throw enrollmentsError;

			// Fetch all courses
			const { data: coursesData, error: coursesError } = await supabase
				.from("courses")
				.select("id, title, order_index, year_group, is_coming_soon")
				.order("order_index", { ascending: true });

			if (coursesError) throw coursesError;

			setCourses(coursesData || []);

			// Map enrollments to students
			const enrollmentsByStudent: Record<string, EnrolledLevel[]> = {};
			(enrollmentsData || []).forEach((enrollment: any) => {
				const studentId = enrollment.student_id;
				if (!enrollmentsByStudent[studentId]) {
					enrollmentsByStudent[studentId] = [];
				}
				enrollmentsByStudent[studentId].push({
					id: enrollment.id,
					course_id: enrollment.course_id,
					course_title: enrollment.courses?.title || "Unknown",
					course_order: enrollment.courses?.order_index || 0,
					enrolled_at: enrollment.enrolled_at,
					enrolled_by_name: enrollment.profiles?.full_name || null,
					notes: enrollment.notes,
				});
			});

			// Combine students with their enrollments
			const studentsWithEnrollments: Student[] = (studentsData || []).map(
				(student: any) => ({
					id: student.id,
					email: student.email,
					full_name: student.full_name,
					created_at: student.created_at,
					enrolledLevels: (enrollmentsByStudent[student.id] || []).sort(
						(a, b) => a.course_order - b.course_order,
					),
				}),
			);

			setStudents(studentsWithEnrollments);
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setIsLoading(false);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: fetchData is intentionally called once on mount
	useEffect(() => {
		fetchData();
	}, []);

	const handleOpenEnrollDialog = (student: Student) => {
		setSelectedStudent(student);
		setSelectedLevels(student.enrolledLevels.map((e) => e.course_id));
		setEnrollmentNotes("");
		setIsEnrollDialogOpen(true);
	};

	const handleToggleLevel = (courseId: string) => {
		setSelectedLevels((prev) =>
			prev.includes(courseId)
				? prev.filter((id) => id !== courseId)
				: [...prev, courseId],
		);
	};

	const handleSaveEnrollments = async () => {
		if (!selectedStudent) return;

		setIsSaving(true);
		try {
			const supabase = getSupabaseBrowserClient();
			const {
				data: { user },
			} = await supabase.auth.getUser();

			if (!user) throw new Error("Not authenticated");

			// Get current enrollments
			const currentEnrollments = selectedStudent.enrolledLevels.map(
				(e) => e.course_id,
			);

			// Determine what to add and remove
			const toAdd = selectedLevels.filter(
				(id) => !currentEnrollments.includes(id),
			);
			const toRemove = currentEnrollments.filter(
				(id) => !selectedLevels.includes(id),
			);

			// Remove enrollments
			if (toRemove.length > 0) {
				const { error: deleteError } = await supabase
					.from("level_enrollments")
					.delete()
					.eq("student_id", selectedStudent.id)
					.in("course_id", toRemove);

				if (deleteError) throw deleteError;
			}

			// Add new enrollments
			if (toAdd.length > 0) {
				const newEnrollments = toAdd.map((courseId) => ({
					student_id: selectedStudent.id,
					course_id: courseId,
					enrolled_by: user.id,
					notes: enrollmentNotes || null,
				}));

				const { error: insertError } = await supabase
					.from("level_enrollments")
					.insert(newEnrollments);

				if (insertError) throw insertError;
			}

			// Refresh data
			await fetchData();
			setIsEnrollDialogOpen(false);
		} catch (error) {
			console.error("Error saving enrollments:", error);
		} finally {
			setIsSaving(false);
		}
	};

	const _handleQuickEnroll = async (studentId: string, courseId: string) => {
		try {
			const supabase = getSupabaseBrowserClient();
			const {
				data: { user },
			} = await supabase.auth.getUser();

			if (!user) throw new Error("Not authenticated");

			const { error } = await supabase.from("level_enrollments").insert({
				student_id: studentId,
				course_id: courseId,
				enrolled_by: user.id,
			});

			if (error) throw error;

			await fetchData();
		} catch (error) {
			console.error("Error enrolling student:", error);
		}
	};

	const handleQuickRevoke = async (enrollmentId: string) => {
		try {
			const supabase = getSupabaseBrowserClient();

			const { error } = await supabase
				.from("level_enrollments")
				.delete()
				.eq("id", enrollmentId);

			if (error) throw error;

			await fetchData();
		} catch (error) {
			console.error("Error revoking enrollment:", error);
		}
	};

	// Filter students
	const filteredStudents = students.filter((student) => {
		const searchLower = searchTerm.toLowerCase();
		return (
			searchTerm === "" ||
			(student.full_name?.toLowerCase() || "").includes(searchLower) ||
			student.email.toLowerCase().includes(searchLower)
		);
	});

	// Stats
	const totalEnrollments = students.reduce(
		(sum, s) => sum + s.enrolledLevels.length,
		0,
	);
	const studentsWithEnrollments = students.filter(
		(s) => s.enrolledLevels.length > 0,
	).length;
	const studentsWithoutEnrollments = students.filter(
		(s) => s.enrolledLevels.length === 0,
	).length;

	if (isLoading) {
		return (
			<div className="flex items-center justify-center py-12">
				<Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<h3 className="text-2xl font-bold">Student Enrollments</h3>
				<Button variant="outline" onClick={fetchData} className="gap-2">
					<RefreshCw className="h-4 w-4" />
					Refresh
				</Button>
			</div>

			{/* Stats */}
			<div className="grid grid-cols-3 gap-4">
				<Card>
					<CardContent className="pt-6">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm text-muted-foreground">
									Total Enrollments
								</p>
								<p className="text-2xl font-bold text-blue-600">
									{totalEnrollments}
								</p>
							</div>
							<GraduationCap className="h-8 w-8 text-blue-200" />
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="pt-6">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm text-muted-foreground">
									Enrolled Students
								</p>
								<p className="text-2xl font-bold text-green-600">
									{studentsWithEnrollments}
								</p>
							</div>
							<CheckCircle className="h-8 w-8 text-green-200" />
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="pt-6">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm text-muted-foreground">No Enrollments</p>
								<p className="text-2xl font-bold text-orange-600">
									{studentsWithoutEnrollments}
								</p>
							</div>
							<Lock className="h-8 w-8 text-orange-200" />
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Search */}
			<Card>
				<CardContent className="pt-6">
					<div className="relative">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
						<Input
							placeholder="Search by student name or email..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="pl-9"
						/>
					</div>
				</CardContent>
			</Card>

			{/* Students List */}
			<Card>
				<CardHeader>
					<CardTitle>All Students</CardTitle>
					<CardDescription>
						{filteredStudents.length} student
						{filteredStudents.length !== 1 ? "s" : ""} found
					</CardDescription>
				</CardHeader>
				<CardContent>
					{filteredStudents.length === 0 ? (
						<div className="text-center py-12 text-muted-foreground">
							<Users className="h-12 w-12 mx-auto mb-3 opacity-50" />
							<p>No students found</p>
						</div>
					) : (
						<div className="space-y-4">
							{filteredStudents.map((student) => (
								<div
									key={student.id}
									className="p-4 border rounded-lg hover:shadow-md transition-shadow"
								>
									<div className="flex items-start justify-between mb-3">
										<div>
											<div className="flex items-center gap-2">
												<h4 className="font-medium">
													{student.full_name || "Unknown User"}
												</h4>
												{student.enrolledLevels.length === 0 ? (
													<Badge variant="secondary" className="text-xs">
														No Access
													</Badge>
												) : (
													<Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-xs">
														{student.enrolledLevels.length} Level
														{student.enrolledLevels.length !== 1 ? "s" : ""}
													</Badge>
												)}
											</div>
											<p className="text-sm text-muted-foreground">
												{student.email}
											</p>
											<p className="text-xs text-muted-foreground mt-1">
												Joined {formatDate(student.created_at)}
											</p>
										</div>
										<Button
											variant="outline"
											size="sm"
											onClick={() => handleOpenEnrollDialog(student)}
											className="gap-2"
										>
											<GraduationCap className="h-4 w-4" />
											Manage Access
										</Button>
									</div>

									{/* Enrolled Levels */}
									{student.enrolledLevels.length > 0 && (
										<div className="flex flex-wrap gap-2 mt-2">
											{student.enrolledLevels.map((level) => (
												<div
													key={level.id}
													className="flex items-center gap-1 px-2 py-1 bg-primary/10 rounded-md text-xs"
												>
													<BookOpen className="h-3 w-3" />
													<span>{level.course_title}</span>
													<button
														onClick={() => handleQuickRevoke(level.id)}
														className="ml-1 text-red-500 hover:text-red-700"
														title="Revoke access"
													>
														<Trash2 className="h-3 w-3" />
													</button>
												</div>
											))}
										</div>
									)}
								</div>
							))}
						</div>
					)}
				</CardContent>
			</Card>

			{/* Enrollment Dialog */}
			<Dialog open={isEnrollDialogOpen} onOpenChange={setIsEnrollDialogOpen}>
				<DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
					<DialogHeader>
						<DialogTitle>Manage Level Access</DialogTitle>
						<DialogDescription>
							{selectedStudent?.full_name || selectedStudent?.email}
						</DialogDescription>
					</DialogHeader>

					{selectedStudent && (
						<div className="space-y-6">
							{/* Student Info */}
							<div className="p-3 bg-muted rounded-lg">
								<p className="font-medium">
									{selectedStudent.full_name || "Unknown User"}
								</p>
								<p className="text-sm text-muted-foreground">
									{selectedStudent.email}
								</p>
							</div>

							{/* Level Selection */}
							<div className="space-y-3">
								<Label>Select Levels to Grant Access</Label>

								{courses.length === 0 ? (
									<p className="text-sm text-muted-foreground py-4 text-center">
										No courses available. Please create courses first.
									</p>
								) : (
									<>
										{/* Group by year */}
										{["Year 1: Foundations", "Year 2: Applied AI"].map(
											(yearGroup) => {
												const yearCourses = courses.filter(
													(c) => c.year_group === yearGroup,
												);
												if (yearCourses.length === 0) return null;

												return (
													<div key={yearGroup} className="space-y-2">
														<p className="text-sm font-medium text-muted-foreground">
															{yearGroup}
														</p>
														{yearCourses.map((course) => (
															<div
																key={course.id}
																className="flex items-center space-x-3 p-2 rounded-md hover:bg-muted"
															>
																<Checkbox
																	id={course.id}
																	checked={selectedLevels.includes(course.id)}
																	onCheckedChange={() =>
																		handleToggleLevel(course.id)
																	}
																/>
																<label
																	htmlFor={course.id}
																	className="flex-1 text-sm cursor-pointer"
																>
																	{course.title}
																	{course.is_coming_soon && (
																		<Badge
																			variant="outline"
																			className="ml-2 text-xs"
																		>
																			Coming Soon
																		</Badge>
																	)}
																</label>
															</div>
														))}
													</div>
												);
											},
										)}

										{/* Fallback for courses without year_group */}
										{(() => {
											const ungroupedCourses = courses.filter(
												(c) =>
													!c.year_group ||
													![
														"Year 1: Foundations",
														"Year 2: Applied AI",
													].includes(c.year_group),
											);
											if (ungroupedCourses.length === 0) return null;

											return (
												<div className="space-y-2">
													<p className="text-sm font-medium text-muted-foreground">
														Other Courses
													</p>
													{ungroupedCourses.map((course) => (
														<div
															key={course.id}
															className="flex items-center space-x-3 p-2 rounded-md hover:bg-muted"
														>
															<Checkbox
																id={course.id}
																checked={selectedLevels.includes(course.id)}
																onCheckedChange={() =>
																	handleToggleLevel(course.id)
																}
															/>
															<label
																htmlFor={course.id}
																className="flex-1 text-sm cursor-pointer"
															>
																{course.title}
																{course.is_coming_soon && (
																	<Badge
																		variant="outline"
																		className="ml-2 text-xs"
																	>
																		Coming Soon
																	</Badge>
																)}
															</label>
														</div>
													))}
												</div>
											);
										})()}
									</>
								)}
							</div>

							{/* Notes */}
							<div className="space-y-2">
								<Label htmlFor="notes">Notes (optional)</Label>
								<Textarea
									id="notes"
									placeholder="e.g., Paid via e-transfer Jan 15, 2025"
									value={enrollmentNotes}
									onChange={(e) => setEnrollmentNotes(e.target.value)}
									rows={2}
								/>
							</div>
						</div>
					)}

					<DialogFooter>
						<Button
							variant="outline"
							onClick={() => setIsEnrollDialogOpen(false)}
						>
							Cancel
						</Button>
						<Button onClick={handleSaveEnrollments} disabled={isSaving}>
							{isSaving ? (
								<>
									<Loader2 className="h-4 w-4 mr-2 animate-spin" />
									Saving...
								</>
							) : (
								<>
									<CheckCircle className="h-4 w-4 mr-2" />
									Save Changes
								</>
							)}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
};
