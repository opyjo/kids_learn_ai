import { notFound, redirect } from "next/navigation";
import { LessonViewer } from "@/components/lessons/lesson-viewer";
import { checkLevelEnrollment, isFreeTrialLesson } from "@/lib/auth-helpers";
import { getSupabaseServerClient } from "@/lib/supabase/server";

interface LessonPageProps {
	params: Promise<{
		course: string;
		id: string;
	}>;
}

export default async function LessonPage({ params }: LessonPageProps) {
	const supabase = await getSupabaseServerClient();
	const { course: courseSlug, id } = await params;
	const lessonOrderIndex = Number.parseInt(id, 10);

	// Check if user is authenticated
	const {
		data: { user },
	} = await supabase.auth.getUser();

	// First, get the course by slug
	const { data: course } = await supabase
		.from("courses")
		.select("id, slug, title")
		.eq("slug", courseSlug)
		.single();

	if (!course) {
		notFound();
	}

	// Then fetch lesson from Supabase by course_id and order_index
	const { data: lesson, error } = await supabase
		.from("lessons")
		.select("*, courses(slug, title)")
		.eq("course_id", course.id)
		.eq("order_index", lessonOrderIndex)
		.single();

	if (error || !lesson) {
		notFound();
	}

	// Check if user is enrolled in this level
	let isEnrolled = false;
	if (user) {
		isEnrolled = await checkLevelEnrollment(user.id, course.id);
	}

	// Check if this is a free trial lesson (first lesson of Term 1 or Term 2)
	const isFreeTrial = isFreeTrialLesson(courseSlug, lessonOrderIndex);

	// Redirect to the course page if not enrolled and not a free trial lesson
	if (!isEnrolled && !isFreeTrial) {
		redirect(`/lessons/${courseSlug}`);
	}

	// Transform the lesson data to match the expected format
	const transformedLesson = {
		id: lesson.order_index, // Use order_index as the display ID
		dbId: lesson.id, // Database ID for completion tracking
		title: lesson.title,
		description: lesson.description,
		content: lesson.content,
		difficulty: lesson.difficulty_level,
		order_index: lesson.order_index,
		is_premium: lesson.is_premium,
		starter_code: lesson.starter_code || "",
		solution_code: lesson.solution_code || "",
		requires_trinket: lesson.requires_trinket || false,
		class_activities: lesson.class_activities || "",
		take_home_assignment: lesson.take_home_assignment || "",
		ai_activities: lesson.ai_activities || "",
	};

	return (
		<LessonViewer
			lesson={transformedLesson}
			userId={user?.id}
			courseSlug={lesson.courses?.slug}
			courseTitle={lesson.courses?.title}
		/>
	);
}
