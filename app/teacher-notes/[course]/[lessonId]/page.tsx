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

	// Fetch teacher notes for this lesson
	const { data: teacherNote } = await supabase
		.from("teacher_notes")
		.select("*")
		.eq("lesson_id", lesson.id)
		.maybeSingle();

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
		/>
	);
}
