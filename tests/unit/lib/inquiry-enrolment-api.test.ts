import { NextRequest } from "next/server";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/admin/inquiries/enroll/route";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { getSupabaseServerClient } from "@/lib/supabase/server";

vi.mock("@/lib/supabase/admin", () => ({
	getSupabaseAdminClient: vi.fn(),
}));

vi.mock("@/lib/supabase/server", () => ({
	getSupabaseServerClient: vi.fn(),
}));

const adminId = "00000000-0000-4000-8000-000000000001";
const inquiryId = "00000000-0000-4000-8000-000000000002";
const courseId = "00000000-0000-4000-8000-000000000003";
const studentId = "00000000-0000-4000-8000-000000000004";
const parentId = "00000000-0000-4000-8000-000000000005";

function request() {
	return new NextRequest(
		"https://www.kidslearnai.ca/api/admin/inquiries/enroll",
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ inquiryId, courseId }),
		},
	);
}

function serverClient(user: { id: string } | null = { id: adminId }) {
	return {
		auth: { getUser: vi.fn(async () => ({ data: { user } })) },
		from: vi.fn(() => {
			const chain: Record<string, ReturnType<typeof vi.fn>> = {};
			chain.select = vi.fn(() => chain);
			chain.eq = vi.fn(() => chain);
			chain.single = vi.fn(async () => ({ data: { role: "admin" } }));
			return chain;
		}),
	};
}

function adminClient(existingParent: object | null) {
	const upsert = vi.fn(async () => ({ error: null }));
	const profileUpdateEq = vi.fn(async () => ({ error: null }));
	const inquiryUpdateEq = vi.fn(async () => ({ error: null }));
	const inviteUserByEmail = vi.fn(async () => ({
		data: { user: { id: parentId } },
		error: null,
	}));
	const createUser = vi.fn(async () => ({
		data: { user: { id: studentId } },
		error: null,
	}));
	const deleteUser = vi.fn(async () => ({ error: null }));

	return {
		upsert,
		profileUpdateEq,
		inquiryUpdateEq,
		inviteUserByEmail,
		createUser,
		client: {
			auth: { admin: { inviteUserByEmail, createUser, deleteUser } },
			from: vi.fn((table: string) => {
				if (table === "level_enrollments") return { upsert };

				const chain: Record<string, ReturnType<typeof vi.fn>> = {};
				chain.select = vi.fn(() => chain);
				chain.eq = vi.fn(() => chain);
				chain.single = vi.fn(async () => ({
					data:
						table === "inquiries"
							? {
									id: inquiryId,
									parent_name: "Grace Parent",
									parent_email: "parent@example.com",
									child_name: "Ada",
									status: "trial_scheduled",
									parent_profile_id: null,
									student_id: null,
									course_id: null,
								}
							: { id: courseId, title: "Python Foundations" },
					error: null,
				}));
				chain.maybeSingle = vi.fn(async () => ({ data: existingParent }));
				chain.update = vi.fn(() => ({
					eq: table === "inquiries" ? inquiryUpdateEq : profileUpdateEq,
				}));
				return chain;
			}),
		},
	};
}

beforeEach(() => {
	vi.clearAllMocks();
	vi.mocked(getSupabaseServerClient).mockResolvedValue(serverClient() as never);
});

describe("inquiry enrolment API", () => {
	it("requires an authenticated administrator", async () => {
		vi.mocked(getSupabaseServerClient).mockResolvedValue(
			serverClient(null) as never,
		);

		const response = await POST(request());

		expect(response.status).toBe(401);
		expect(getSupabaseAdminClient).not.toHaveBeenCalled();
	});

	it("creates a separate child under an existing parent", async () => {
		const admin = adminClient({ id: parentId, role: "parent" });
		vi.mocked(getSupabaseAdminClient).mockReturnValue(admin.client as never);

		const response = await POST(request());
		const result = await response.json();

		expect(response.status).toBe(200);
		expect(result.invitationSent).toBe(false);
		expect(result.parentId).toBe(parentId);
		expect(result.studentId).toBe(studentId);
		expect(result.username).toMatch(/^ada-/);
		expect(admin.inviteUserByEmail).not.toHaveBeenCalled();
		expect(admin.createUser).toHaveBeenCalledWith(
			expect.objectContaining({
				email_confirm: true,
				user_metadata: expect.objectContaining({
					full_name: "Ada",
					account_type: "student",
				}),
			}),
		);
		expect(admin.upsert).toHaveBeenCalledWith(
			expect.objectContaining({ student_id: studentId, course_id: courseId }),
			{ onConflict: "student_id,course_id" },
		);
		expect(admin.inquiryUpdateEq).toHaveBeenCalledWith("id", inquiryId);
	});

	it("invites a parent and then creates their separate child account", async () => {
		const admin = adminClient(null);
		vi.mocked(getSupabaseAdminClient).mockReturnValue(admin.client as never);

		const response = await POST(request());
		const result = await response.json();

		expect(response.status).toBe(200);
		expect(result.invitationSent).toBe(true);
		expect(admin.inviteUserByEmail).toHaveBeenCalledWith(
			"parent@example.com",
			expect.objectContaining({
				redirectTo:
					"https://www.kidslearnai.ca/auth/callback?next=/family/setup",
				data: expect.objectContaining({
					full_name: "Grace Parent",
					account_type: "parent",
				}),
			}),
		);
		expect(admin.createUser).toHaveBeenCalledOnce();
		expect(admin.upsert).toHaveBeenCalledWith(
			expect.objectContaining({ student_id: studentId, course_id: courseId }),
			{ onConflict: "student_id,course_id" },
		);
	});

	it("does not reuse a student account as the parent", async () => {
		const admin = adminClient({ id: parentId, role: "student" });
		vi.mocked(getSupabaseAdminClient).mockReturnValue(admin.client as never);

		const response = await POST(request());

		expect(response.status).toBe(409);
		expect(admin.createUser).not.toHaveBeenCalled();
	});
});
