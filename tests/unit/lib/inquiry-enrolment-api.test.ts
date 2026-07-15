import { NextRequest } from "next/server";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/admin/inquiries/approve/route";
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
const studentId = "00000000-0000-4000-8000-000000000004";
const parentId = "00000000-0000-4000-8000-000000000005";

function request() {
	return new NextRequest(
		"https://www.kidslearnai.ca/api/admin/inquiries/approve",
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ inquiryId }),
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

function adminClient(
	existingParent: object | null,
	inquiryOverrides: Record<string, unknown> = {},
	linkedStudent: object | null = null,
) {
	const profileUpdateEq = vi.fn(async () => ({ error: null }));
	const inquiryUpdateEq = vi.fn(async () => ({ error: null }));
	const inquiryUpdate = vi.fn(() => ({ eq: inquiryUpdateEq }));
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
		profileUpdateEq,
		inquiryUpdate,
		inquiryUpdateEq,
		inviteUserByEmail,
		createUser,
		client: {
			auth: { admin: { inviteUserByEmail, createUser, deleteUser } },
			from: vi.fn((table: string) => {
				let selectedFields = "";
				const chain: Record<string, ReturnType<typeof vi.fn>> = {};
				chain.select = vi.fn((fields: string) => {
					selectedFields = fields;
					return chain;
				});
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
									...inquiryOverrides,
								}
							: null,
					error: null,
				}));
				chain.maybeSingle = vi.fn(async () => ({
					data: selectedFields.includes("parent_id")
						? linkedStudent
						: existingParent,
				}));
				chain.update =
					table === "inquiries"
						? inquiryUpdate
						: vi.fn(() => ({ eq: profileUpdateEq }));
				return chain;
			}),
		},
	};
}

beforeEach(() => {
	vi.clearAllMocks();
	vi.mocked(getSupabaseServerClient).mockResolvedValue(serverClient() as never);
});

describe("inquiry account approval API", () => {
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
		expect(result.status).toBe("account_created");
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
		expect(admin.client.from).not.toHaveBeenCalledWith("level_enrollments");
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
		expect(admin.client.from).not.toHaveBeenCalledWith("level_enrollments");
	});

	it("does not reuse a student account as the parent", async () => {
		const admin = adminClient({ id: parentId, role: "student" });
		vi.mocked(getSupabaseAdminClient).mockReturnValue(admin.client as never);

		const response = await POST(request());

		expect(response.status).toBe(409);
		expect(admin.createUser).not.toHaveBeenCalled();
	});

	it("preserves an existing linked enrollment without recreating accounts", async () => {
		const admin = adminClient(
			{ id: parentId, role: "parent" },
			{
				status: "enrolled",
				parent_profile_id: parentId,
				student_id: studentId,
			},
			{
				id: studentId,
				role: "student",
				parent_id: parentId,
				username: "ada-existing",
			},
		);
		vi.mocked(getSupabaseAdminClient).mockReturnValue(admin.client as never);

		const response = await POST(request());
		const result = await response.json();

		expect(response.status).toBe(200);
		expect(result.status).toBe("enrolled");
		expect(result.username).toBe("ada-existing");
		expect(admin.inviteUserByEmail).not.toHaveBeenCalled();
		expect(admin.createUser).not.toHaveBeenCalled();
		expect(admin.client.from).not.toHaveBeenCalledWith("level_enrollments");
		expect(admin.inquiryUpdate).toHaveBeenCalledWith(
			expect.objectContaining({
				status: "enrolled",
				parent_profile_id: parentId,
				student_id: studentId,
			}),
		);
	});
});
