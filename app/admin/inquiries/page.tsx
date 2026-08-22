import { InquiriesView, type Inquiry } from "@/components/admin/inquiries-view";
import { requireAdmin } from "@/lib/auth-helpers";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export default async function InquiriesPage() {
	await requireAdmin();
	const supabase = await getSupabaseServerClient();

	// Fetch inquiries (most recent first). `count: exact` lets us detect when
	// more rows exist than were returned (Supabase caps a SELECT at 1000) so the
	// list can say so instead of silently truncating.
	const {
		data: inquiriesData,
		error,
		count,
	} = await supabase
		.from("inquiries")
		.select("*", { count: "exact" })
		.order("created_at", { ascending: false });

	if (error) {
		console.error("Error fetching inquiries:", error);
	}

	const inquiries: Inquiry[] = inquiriesData || [];
	const totalCount = count ?? inquiries.length;
	const isTruncated = totalCount > inquiries.length;

	return (
		<InquiriesView
			inquiries={inquiries}
			totalCount={totalCount}
			isTruncated={isTruncated}
		/>
	);
}
