import {
	type Application,
	ApplicationsView,
} from "@/components/admin/applications-view";
import { requireAdmin } from "@/lib/auth-helpers";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export default async function ApplicationsPage() {
	await requireAdmin();
	const supabase = await getSupabaseServerClient();

	const {
		data: applicationsData,
		error,
		count,
	} = await supabase
		.from("internship_applications")
		.select(
			"id, full_name, email, university, program, year_of_study, python_experience, teaching_experience, why_interested, citizenship_status, is_at_least_18, can_commit_weekdays, linkedin_url, resume_filename, status, notes, created_at, updated_at",
			{ count: "exact" },
		)
		.order("created_at", { ascending: false });

	if (error) {
		console.error("Error fetching applications:", error);
	}

	const applications: Application[] = applicationsData || [];
	const totalCount = count ?? applications.length;
	const isTruncated = totalCount > applications.length;

	return (
		<ApplicationsView
			applications={applications}
			totalCount={totalCount}
			isTruncated={isTruncated}
		/>
	);
}
