import { QuizManager } from "@/components/admin/quiz-manager";
import { requireAdmin } from "@/lib/auth-helpers";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export default async function QuizzesPage() {
	await requireAdmin();
	const supabase = await getSupabaseServerClient();
	const [{ data: courses }, { data: lessons }] = await Promise.all([
		supabase.from("courses").select("id, title").order("order_index"),
		supabase
			.from("lessons")
			.select("id, title, course_id, order_index")
			.order("order_index"),
	]);
	// Lessons share order_index values across courses (every course starts at
	// lesson 1), so group them by course order before sorting by lesson number.
	const courseRank = new Map(
		(courses || []).map((course, index) => [course.id, index]),
	);
	const sortedLessons = (lessons || []).sort(
		(a, b) =>
			(courseRank.get(a.course_id) ?? Number.MAX_SAFE_INTEGER) -
				(courseRank.get(b.course_id) ?? Number.MAX_SAFE_INTEGER) ||
			a.order_index - b.order_index,
	);
	return <QuizManager courses={courses || []} lessons={sortedLessons} />;
}
