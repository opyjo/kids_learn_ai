import { SeoCampaignChecklist } from "@/components/admin/seo-campaign-checklist";
import { requireAdmin } from "@/lib/auth-helpers";
import { SEO_CAMPAIGN_TASKS } from "@/lib/marketing/seo-campaign-tasks";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { SeoTaskProgress } from "./actions";

export default async function MarketingPlanPage() {
	await requireAdmin();
	const supabase = await getSupabaseServerClient();
	const { data, error } = await supabase
		.from("seo_campaign_task_progress")
		.select("task_key, status, completed_at, updated_at")
		.order("updated_at", { ascending: false });

	if (error) {
		console.error("Unable to load SEO campaign progress:", error);
	}

	return (
		<SeoCampaignChecklist
			tasks={SEO_CAMPAIGN_TASKS}
			initialProgress={(data || []) as SeoTaskProgress[]}
			persistenceAvailable={!error}
		/>
	);
}
