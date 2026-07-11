import type { SupabaseClient, User } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { getSupabaseServerClient } from "@/lib/supabase/server";

type ApiContextResult =
	| { error: NextResponse }
	| {
			user: User;
			profile: { id: string; full_name: string | null; role: string } | null;
			db: SupabaseClient;
	  };

export async function getApiContext(options?: {
	admin?: boolean;
}): Promise<ApiContextResult> {
	const auth = await getSupabaseServerClient();
	const {
		data: { user },
	} = await auth.auth.getUser();
	if (!user)
		return {
			error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
		};
	const { data: profile } = await auth
		.from("profiles")
		.select("id, full_name, role")
		.eq("id", user.id)
		.single();
	if (options?.admin && profile?.role !== "admin") {
		return {
			error: NextResponse.json({ error: "Forbidden" }, { status: 403 }),
		};
	}
	const db = getSupabaseAdminClient();
	if (!db) {
		return {
			error: NextResponse.json(
				{ error: "Quiz service is not configured" },
				{ status: 503 },
			),
		};
	}
	return { user, profile, db };
}

export async function isCourseEnrolled(userId: string, courseId: string) {
	const context = await getApiContext();
	if ("error" in context) return false;
	if (context.profile?.role === "admin") return true;
	const { data } = await context.db
		.from("level_enrollments")
		.select("id")
		.eq("student_id", userId)
		.eq("course_id", courseId)
		.maybeSingle();
	return Boolean(data);
}

export function makeGameCode(): string {
	const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
	return Array.from(
		{ length: 6 },
		() => alphabet[Math.floor(Math.random() * alphabet.length)],
	).join("");
}

export async function recordLearning(
	db: SupabaseClient,
	userId: string,
	questionId: string,
	correct: boolean,
	isReview = false,
) {
	const { error } = await db.rpc("record_quiz_learning", {
		p_user_id: userId,
		p_question_id: questionId,
		p_correct: correct,
		p_is_review: isReview,
	});
	if (error) console.error("Could not update quiz mastery:", error.message);
}
