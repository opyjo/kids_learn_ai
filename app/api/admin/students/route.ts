import { randomUUID } from "node:crypto";
import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { getSupabaseServerClient } from "@/lib/supabase/server";

const studentSchema = z.object({
	fullName: z.string().trim().min(2).max(100),
	username: z
		.string()
		.trim()
		.toLowerCase()
		.regex(/^[a-z0-9][a-z0-9_-]{2,29}$/),
	password: z.string().min(8).max(128),
});

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

		const parsed = studentSchema.safeParse(
			await request.json().catch(() => null),
		);
		if (!parsed.success) {
			return NextResponse.json(
				{
					error:
						"Enter a name, a 3–30 character lowercase username, and a password of at least 8 characters.",
				},
				{ status: 400 },
			);
		}

		const admin = getSupabaseAdminClient();
		if (!admin) {
			return NextResponse.json(
				{ error: "Student account creation is not configured" },
				{ status: 503 },
			);
		}

		const { fullName, username, password } = parsed.data;
		const { data: usernameOwner, error: usernameLookupError } = await admin
			.from("profiles")
			.select("id")
			.eq("username", username)
			.maybeSingle();

		if (usernameLookupError) {
			return NextResponse.json(
				{ error: "Could not check that username" },
				{ status: 500 },
			);
		}
		if (usernameOwner) {
			return NextResponse.json(
				{ error: "That username is already taken" },
				{ status: 409 },
			);
		}

		const internalEmail = `student-${randomUUID()}@accounts.kidslearnai.ca`;
		const { data: authAccount, error: authError } =
			await admin.auth.admin.createUser({
				email: internalEmail,
				password,
				email_confirm: true,
				user_metadata: { full_name: fullName },
				app_metadata: { account_type: "student" },
			});

		if (authError || !authAccount.user) {
			return NextResponse.json(
				{ error: authError?.message || "Could not create the student account" },
				{ status: 502 },
			);
		}

		const { data: student, error: profileError } = await admin
			.from("profiles")
			.update({
				// Supabase Auth may persist app_metadata after the auth.users INSERT
				// trigger runs, so the trigger can initially create this as a parent.
				// This trusted service-role call is the authoritative role assignment.
				role: "student",
				username,
				updated_at: new Date().toISOString(),
			})
			.eq("id", authAccount.user.id)
			.select("id, full_name, email, username, created_at")
			.single();

		if (profileError || !student) {
			await admin.auth.admin.deleteUser(authAccount.user.id);
			const duplicateUsername = profileError?.code === "23505";
			return NextResponse.json(
				{
					error: duplicateUsername
						? "That username is already taken"
						: `Could not finish the student account: ${profileError?.message || "student profile was not created"}`,
				},
				{ status: duplicateUsername ? 409 : 500 },
			);
		}

		return NextResponse.json({ success: true, student }, { status: 201 });
	} catch (error) {
		console.error("Manual student creation error:", error);
		return NextResponse.json(
			{ error: "An unexpected error occurred while creating the student" },
			{ status: 500 },
		);
	}
}
