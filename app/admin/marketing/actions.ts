"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { requireAdmin } from "@/lib/auth-helpers";
import {
	SEO_TASK_KEYS,
	SEO_TASK_STATUSES,
} from "@/lib/marketing/seo-campaign-tasks";
import { getSupabaseServerClient } from "@/lib/supabase/server";

const updateTaskSchema = z.object({
	taskKey: z.string().refine((key) => SEO_TASK_KEYS.has(key), {
		message: "Unknown growth task.",
	}),
	status: z.enum(SEO_TASK_STATUSES),
});

export type SeoTaskProgress = {
	task_key: string;
	status: (typeof SEO_TASK_STATUSES)[number];
	completed_at: string | null;
	updated_at: string;
};

type UpdateTaskResult =
	| { success: true; progress: SeoTaskProgress }
	| { success: false; error: string };

export async function updateSeoTaskStatus(
	taskKey: string,
	status: (typeof SEO_TASK_STATUSES)[number],
): Promise<UpdateTaskResult> {
	const parsed = updateTaskSchema.safeParse({ taskKey, status });
	if (!parsed.success) {
		return {
			success: false,
			error: parsed.error.issues[0]?.message || "Invalid task update.",
		};
	}

	const user = await requireAdmin();
	const supabase = await getSupabaseServerClient();
	const now = new Date().toISOString();
	const { data, error } = await supabase
		.from("seo_campaign_task_progress")
		.upsert(
			{
				task_key: parsed.data.taskKey,
				status: parsed.data.status,
				completed_at: parsed.data.status === "done" ? now : null,
				updated_at: now,
				updated_by: user.id,
			},
			{ onConflict: "task_key" },
		)
		.select("task_key, status, completed_at, updated_at")
		.single();

	if (error || !data) {
		console.error("Unable to update SEO campaign task:", error);
		return {
			success: false,
			error: "The task could not be updated. Please try again.",
		};
	}

	revalidatePath("/admin/marketing");
	return { success: true, progress: data as SeoTaskProgress };
}
