import { type NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";

const ALLOWED_STATUSES = [
	"new",
	"contacted",
	"trial_scheduled",
	"enrolled",
	"declined",
];

// PATCH /api/admin/inquiries — update an inquiry's status and/or notes.
// Re-verifies admin role server-side (defense in depth beyond RLS).
export async function PATCH(request: NextRequest) {
	try {
		const supabase = await getSupabaseServerClient();

		const {
			data: { user },
		} = await supabase.auth.getUser();

		if (!user) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		const { data: profile } = await supabase
			.from("profiles")
			.select("role")
			.eq("id", user.id)
			.single();

		if (!profile || profile.role !== "admin") {
			return NextResponse.json({ error: "Forbidden" }, { status: 403 });
		}

		const body = await request.json().catch(() => null);
		const id = body?.id;
		const status = body?.status;
		const notes = body?.notes;

		if (!id || typeof id !== "string") {
			return NextResponse.json(
				{ error: "Inquiry id is required" },
				{ status: 400 },
			);
		}

		const update: {
			status?: string;
			notes?: string | null;
			updated_at: string;
		} = { updated_at: new Date().toISOString() };

		if (status !== undefined) {
			if (!ALLOWED_STATUSES.includes(status)) {
				return NextResponse.json({ error: "Invalid status" }, { status: 400 });
			}
			update.status = status;
		}

		if (notes !== undefined) {
			update.notes = typeof notes === "string" ? notes.slice(0, 5000) : null;
		}

		if (update.status === undefined && update.notes === undefined) {
			return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
		}

		const { error } = await supabase
			.from("inquiries")
			.update(update)
			.eq("id", id);

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 });
		}

		return NextResponse.json({ success: true });
	} catch (_error) {
		return NextResponse.json(
			{ error: "An error occurred while updating the inquiry" },
			{ status: 500 },
		);
	}
}
