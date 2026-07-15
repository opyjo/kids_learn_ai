import { randomUUID } from "node:crypto";
import { type NextRequest, NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { getSupabaseServerClient } from "@/lib/supabase/server";

type ApprovalRequest = {
	inquiryId?: unknown;
};

function siteOrigin(request: NextRequest) {
	const configured = process.env.NEXT_PUBLIC_SITE_URL;
	if (configured && configured !== "http://localhost:3000") {
		return configured.replace(/\/$/, "");
	}
	return request.nextUrl.origin;
}

function suggestedUsername(childName: string, studentId: string) {
	const base = childName
		.normalize("NFKD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "")
		.slice(0, 20);
	const safeBase = base || "student";
	return `${safeBase}-${studentId.replaceAll("-", "").slice(-6)}`;
}

export async function POST(request: NextRequest) {
	try {
		const supabase = await getSupabaseServerClient();
		const {
			data: { user },
		} = await supabase.auth.getUser();

		if (!user) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		const { data: adminProfile } = await supabase
			.from("profiles")
			.select("role")
			.eq("id", user.id)
			.single();

		if (adminProfile?.role !== "admin") {
			return NextResponse.json({ error: "Forbidden" }, { status: 403 });
		}

		const body = (await request
			.json()
			.catch(() => null)) as ApprovalRequest | null;
		const inquiryId = body?.inquiryId;

		if (typeof inquiryId !== "string") {
			return NextResponse.json(
				{ error: "Inquiry is required" },
				{ status: 400 },
			);
		}

		const admin = getSupabaseAdminClient();
		if (!admin) {
			return NextResponse.json(
				{ error: "Family account setup is not configured" },
				{ status: 503 },
			);
		}

		const { data: inquiry, error: inquiryError } = await admin
			.from("inquiries")
			.select(
				"id, parent_name, parent_email, child_name, status, parent_profile_id, student_id",
			)
			.eq("id", inquiryId)
			.single();

		if (inquiryError || !inquiry) {
			return NextResponse.json({ error: "Inquiry not found" }, { status: 404 });
		}

		const parentEmail = inquiry.parent_email.trim().toLowerCase();
		let parentId = inquiry.parent_profile_id as string | null;
		let invitationSent = false;

		if (parentId) {
			const { data: linkedParent } = await admin
				.from("profiles")
				.select("id, role")
				.eq("id", parentId)
				.maybeSingle();

			if (!linkedParent || linkedParent.role !== "parent") {
				return NextResponse.json(
					{ error: "The inquiry is linked to an invalid parent account" },
					{ status: 409 },
				);
			}
		} else {
			const { data: existingProfile } = await admin
				.from("profiles")
				.select("id, role")
				.eq("email", parentEmail)
				.maybeSingle();

			if (existingProfile) {
				if (existingProfile.role !== "parent") {
					return NextResponse.json(
						{
							error:
								"The parent email already belongs to a student or administrator account. Use a different parent email or resolve that account first.",
						},
						{ status: 409 },
					);
				}
				parentId = existingProfile.id;
			} else {
				const redirectTo = `${siteOrigin(request)}/auth/callback?next=/family/setup`;
				const { data: invited, error: inviteError } =
					await admin.auth.admin.inviteUserByEmail(parentEmail, {
						redirectTo,
						data: {
							full_name: inquiry.parent_name,
							account_type: "parent",
						},
					});

				if (inviteError || !invited.user) {
					return NextResponse.json(
						{ error: inviteError?.message || "Could not invite the parent" },
						{ status: 502 },
					);
				}

				parentId = invited.user.id;
				invitationSent = true;
			}
		}

		let studentId = inquiry.student_id as string | null;
		let username: string | null = null;
		let createdStudent = false;

		if (studentId) {
			const { data: linkedStudent } = await admin
				.from("profiles")
				.select("id, role, parent_id, username")
				.eq("id", studentId)
				.maybeSingle();

			if (
				!linkedStudent ||
				linkedStudent.role !== "student" ||
				linkedStudent.parent_id !== parentId
			) {
				return NextResponse.json(
					{ error: "The inquiry is linked to an invalid student account" },
					{ status: 409 },
				);
			}
			username = linkedStudent.username;
		} else {
			const internalEmail = `student-${randomUUID()}@accounts.kidslearnai.ca`;
			const temporaryPassword = `${randomUUID()}${randomUUID()}`;
			const { data: childAccount, error: childError } =
				await admin.auth.admin.createUser({
					email: internalEmail,
					password: temporaryPassword,
					email_confirm: true,
					user_metadata: {
						full_name: inquiry.child_name,
						account_type: "student",
					},
				});

			if (childError || !childAccount.user) {
				return NextResponse.json(
					{
						error: childError?.message || "Could not create the child account",
					},
					{ status: 502 },
				);
			}

			studentId = childAccount.user.id;
			createdStudent = true;
			username = suggestedUsername(inquiry.child_name, studentId);

			const { error: childProfileError } = await admin
				.from("profiles")
				.update({ parent_id: parentId, username })
				.eq("id", studentId);

			if (childProfileError) {
				await admin.auth.admin.deleteUser(studentId);
				return NextResponse.json(
					{
						error: `Could not link the child account: ${childProfileError.message}`,
					},
					{ status: 500 },
				);
			}
		}

		// Legacy enrolled inquiries keep their status and course links. New approvals
		// become account_created and receive course access later in Admin → Enrollments.
		const nextStatus =
			inquiry.status === "enrolled" ? "enrolled" : "account_created";
		const { error: updateError } = await admin
			.from("inquiries")
			.update({
				status: nextStatus,
				parent_profile_id: parentId,
				student_id: studentId,
				onboarded_at: new Date().toISOString(),
				updated_at: new Date().toISOString(),
			})
			.eq("id", inquiry.id);

		if (updateError) {
			if (createdStudent) await admin.auth.admin.deleteUser(studentId);
			return NextResponse.json(
				{ error: `Could not link the family accounts: ${updateError.message}` },
				{ status: 500 },
			);
		}

		return NextResponse.json({
			success: true,
			invitationSent,
			createdStudent,
			parentId,
			studentId,
			username,
			status: nextStatus,
		});
	} catch (error) {
		console.error("Inquiry approval error:", error);
		return NextResponse.json(
			{ error: "An unexpected error occurred while creating family accounts" },
			{ status: 500 },
		);
	}
}
