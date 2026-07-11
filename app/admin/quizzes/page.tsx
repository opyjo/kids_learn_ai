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
	return <QuizManager courses={courses || []} lessons={lessons || []} />;
}
