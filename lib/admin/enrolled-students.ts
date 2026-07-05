import type { SupabaseClient } from "@supabase/supabase-js";

const PAGE_SIZE = 1000;

/**
 * Fetch the distinct set of student IDs that have at least one level
 * enrollment. Pages through level_enrollments because PostgREST caps a
 * single request at 1000 rows, which would silently undercount.
 */
export async function getEnrolledStudentIds(
	supabase: SupabaseClient,
): Promise<Set<string>> {
	const ids = new Set<string>();

	for (let from = 0; ; from += PAGE_SIZE) {
		const { data, error } = await supabase
			.from("level_enrollments")
			.select("student_id")
			.range(from, from + PAGE_SIZE - 1);

		if (error) {
			console.error("Error fetching enrolled students:", error);
			break;
		}

		for (const row of data ?? []) {
			ids.add((row as { student_id: string }).student_id);
		}

		if (!data || data.length < PAGE_SIZE) {
			break;
		}
	}

	return ids;
}
