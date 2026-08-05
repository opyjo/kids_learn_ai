import { notFound, redirect } from "next/navigation";
import { TeacherNotesViewer } from "@/components/lessons/teacher-notes-viewer";
import { getSupabaseServerClient } from "@/lib/supabase/server";

interface TeacherNotesPageProps {
	params: Promise<{
		course: string;
		lessonId: string;
	}>;
}

export default async function TeacherNotesPage({
	params,
}: TeacherNotesPageProps) {
	const supabase = await getSupabaseServerClient();
	const { course: courseSlug, lessonId } = await params;

	// Check if user is authenticated
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		redirect("/login");
	}

	// Check if user is an admin
	const { data: profile } = await supabase
		.from("profiles")
		.select("role")
		.eq("id", user.id)
		.single();

	if (!profile || profile.role !== "admin") {
		redirect("/");
	}

	// First, get the course by slug
	const { data: course } = await supabase
		.from("courses")
		.select("id, slug, title")
		.eq("slug", courseSlug)
		.single();

	if (!course) {
		notFound();
	}

	const parsedOrderIndex = Number.parseInt(lessonId, 10);
	if (Number.isNaN(parsedOrderIndex)) {
		notFound();
	}

	// Fetch lesson from Supabase by course_id and order_index
	const { data: lesson, error: lessonError } = await supabase
		.from("lessons")
		.select("*, courses(slug, title)")
		.eq("course_id", course.id)
		.eq("order_index", parsedOrderIndex)
		.single();

	if (lessonError || !lesson) {
		notFound();
	}

	// Fetch the current lesson notes and the previous lesson in parallel. The
	// previous lesson owns the assignment that is reviewed before this class.
	const [{ data: teacherNote }, { data: previousLesson }] = await Promise.all([
		supabase
			.from("teacher_notes")
			.select("*")
			.eq("lesson_id", lesson.id)
			.maybeSingle(),
		parsedOrderIndex > 1
			? supabase
					.from("lessons")
					.select("id, title, order_index, take_home_assignment")
					.eq("course_id", course.id)
					.eq("order_index", parsedOrderIndex - 1)
					.maybeSingle()
			: Promise.resolve({ data: null }),
	]);

	const { data: assignmentSolution } = previousLesson
		? await supabase
				.from("assignment_solutions")
				.select("solution_code, review_notes")
				.eq("lesson_id", previousLesson.id)
				.maybeSingle()
		: { data: null };

	const assignmentReview =
		previousLesson?.take_home_assignment && assignmentSolution
			? {
					lessonOrderIndex: previousLesson.order_index,
					lessonTitle: previousLesson.title,
					assignment: previousLesson.take_home_assignment,
					solutionCode: assignmentSolution.solution_code,
					reviewNotes: assignmentSolution.review_notes,
				}
			: null;

	// Transform the lesson data to match the expected format
	const transformedLesson = {
		id: lesson.order_index,
		title: lesson.title,
		description: lesson.description,
		difficulty: lesson.difficulty_level,
		order_index: lesson.order_index,
		is_premium: lesson.is_premium,
	};

	return (
		<TeacherNotesViewer
			lesson={transformedLesson}
			teacherNote={teacherNote}
			courseSlug={lesson.courses?.slug}
			assignmentReview={assignmentReview}
		/>
	);
}
