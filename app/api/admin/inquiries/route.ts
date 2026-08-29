import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { getSupabaseServerClient } from "@/lib/supabase/server";

const ALLOWED_STATUSES = ["new", "contacted", "trial_scheduled", "declined"];

const manualInquirySchema = z.object({
	parentName: z.string().trim().min(2).max(100),
	parentEmail: z
		.string()
		.trim()
		.email()
		.max(320)
		.transform((email) => email.toLowerCase()),
	parentPhone: z.string().trim().min(7).max(30).optional().or(z.literal("")),
	childName: z.string().trim().min(2).max(100),
	ageGroup: z.enum(["9-10", "11-13"]),
	experience: z.enum(["none", "some", "comfortable"]),
	howHeard: z.string().trim().max(200).optional(),
	questions: z.string().trim().max(1000).optional(),
	status: z.enum(["new", "contacted", "trial_scheduled", "declined"]),
	notes: z.string().trim().max(5000).optional(),
});

// POST /api/admin/inquiries — manually record an inquiry received offline.
export async function POST(request: NextRequest) {
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

		if (profile?.role !== "admin") {
			return NextResponse.json({ error: "Forbidden" }, { status: 403 });
		}

		const parsed = manualInquirySchema.safeParse(
			await request.json().catch(() => null),
		);
		if (!parsed.success) {
			return NextResponse.json(
				{ error: "Check the required inquiry details and try again" },
				{ status: 400 },
			);
		}

		const admin = getSupabaseAdminClient();
		if (!admin) {
			return NextResponse.json(
				{ error: "Manual inquiry creation is not configured" },
				{ status: 503 },
			);
		}

		const data = parsed.data;
		const now = new Date().toISOString();
		const { data: inquiry, error } = await admin
			.from("inquiries")
			.insert({
				parent_name: data.parentName,
				parent_email: data.parentEmail,
				parent_phone: data.parentPhone || null,
				child_name: data.childName,
				age_group: data.ageGroup,
				experience: data.experience,
				how_heard: data.howHeard || null,
				questions: data.questions || null,
				status: data.status,
				notes: data.notes || null,
				utm_source: "Admin",
				utm_medium: "manual",
				created_at: now,
				updated_at: now,
			})
			.select("*")
			.single();

		if (error || !inquiry) {
			return NextResponse.json(
				{ error: error?.message || "Could not save the inquiry" },
				{ status: 500 },
			);
		}

		return NextResponse.json({ success: true, inquiry }, { status: 201 });
	} catch (error) {
		console.error("Manual inquiry creation error:", error);
		return NextResponse.json(
			{ error: "An unexpected error occurred while creating the inquiry" },
			{ status: 500 },
		);
	}
}

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
