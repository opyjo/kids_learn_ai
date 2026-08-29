import { NextRequest } from "next/server";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { POST as createInquiry } from "@/app/api/admin/inquiries/route";
import { POST as createStudent } from "@/app/api/admin/students/route";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { getSupabaseServerClient } from "@/lib/supabase/server";

vi.mock("@/lib/supabase/admin", () => ({
	getSupabaseAdminClient: vi.fn(),
}));

vi.mock("@/lib/supabase/server", () => ({
	getSupabaseServerClient: vi.fn(),
}));

const adminId = "00000000-0000-4000-8000-000000000001";
const studentId = "00000000-0000-4000-8000-000000000002";
const inquiryId = "00000000-0000-4000-8000-000000000003";

function request(path: string, body: Record<string, unknown>) {
	return new NextRequest(`https://www.kidslearnai.ca${path}`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body),
	});
}

function serverClient(options?: {
	user?: { id: string } | null;
	role?: string;
}) {
	const user = options && "user" in options ? options.user : { id: adminId };
	const role = options?.role ?? "admin";
	return {
		auth: { getUser: vi.fn(async () => ({ data: { user } })) },
		from: vi.fn(() => {
			const chain: Record<string, ReturnType<typeof vi.fn>> = {};
			chain.select = vi.fn(() => chain);
			chain.eq = vi.fn(() => chain);
			chain.single = vi.fn(async () => ({ data: { role }, error: null }));
			return chain;
		}),
	};
}

function studentAdminClient(usernameOwner: object | null = null) {
	const createUser = vi.fn(async () => ({
		data: { user: { id: studentId } },
		error: null,
	}));
	const deleteUser = vi.fn(async () => ({ error: null }));
	const profile = {
		id: studentId,
		full_name: "Ada Lovelace",
		email: "student-internal@accounts.kidslearnai.ca",
		username: "ada-codes",
		created_at: "2026-08-29T12:00:00.000Z",
	};

	return {
		createUser,
		deleteUser,
		client: {
			auth: { admin: { createUser, deleteUser } },
			from: vi.fn(() => {
				let operation = "lookup";
				const chain: Record<string, ReturnType<typeof vi.fn>> = {};
				chain.select = vi.fn(() => {
					if (operation === "update") return chain;
					return chain;
				});
				chain.eq = vi.fn(() => chain);
				chain.maybeSingle = vi.fn(async () => ({
					data: usernameOwner,
					error: null,
				}));
				chain.update = vi.fn(() => {
					operation = "update";
					return chain;
				});
				chain.single = vi.fn(async () => ({ data: profile, error: null }));
				return chain;
			}),
		},
	};
}

function inquiryAdminClient() {
	const inquiry = {
		id: inquiryId,
		parent_name: "Grace Parent",
		parent_email: "grace@example.com",
		child_name: "Ada",
		status: "contacted",
	};
	const insert = vi.fn();

	return {
		insert,
		client: {
			from: vi.fn(() => {
				const chain: Record<string, ReturnType<typeof vi.fn>> = {};
				chain.insert = insert.mockImplementation(() => chain);
				chain.select = vi.fn(() => chain);
				chain.single = vi.fn(async () => ({ data: inquiry, error: null }));
				return chain;
			}),
		},
	};
}

beforeEach(() => {
	vi.clearAllMocks();
	vi.mocked(getSupabaseServerClient).mockResolvedValue(serverClient() as never);
});

describe("manual student creation API", () => {
	it("rejects non-admin users", async () => {
		vi.mocked(getSupabaseServerClient).mockResolvedValue(
			serverClient({ role: "parent" }) as never,
		);

		const response = await createStudent(
			request("/api/admin/students", {
				fullName: "Ada Lovelace",
				username: "ada-codes",
				password: "safe-password",
			}),
		);

		expect(response.status).toBe(403);
		expect(getSupabaseAdminClient).not.toHaveBeenCalled();
	});

	it("creates a confirmed student account with a username", async () => {
		const admin = studentAdminClient();
		vi.mocked(getSupabaseAdminClient).mockReturnValue(admin.client as never);

		const response = await createStudent(
			request("/api/admin/students", {
				fullName: "Ada Lovelace",
				username: "ADA-CODES",
				password: "safe-password",
			}),
		);
		const result = await response.json();

		expect(response.status).toBe(201);
		expect(result.student.username).toBe("ada-codes");
		expect(admin.createUser).toHaveBeenCalledWith(
			expect.objectContaining({
				password: "safe-password",
				email_confirm: true,
				user_metadata: { full_name: "Ada Lovelace" },
				app_metadata: { account_type: "student" },
			}),
		);
	});

	it("does not create an Auth account when the username is taken", async () => {
		const admin = studentAdminClient({ id: "existing-student" });
		vi.mocked(getSupabaseAdminClient).mockReturnValue(admin.client as never);

		const response = await createStudent(
			request("/api/admin/students", {
				fullName: "Ada Lovelace",
				username: "ada-codes",
				password: "safe-password",
			}),
		);

		expect(response.status).toBe(409);
		expect(admin.createUser).not.toHaveBeenCalled();
	});
});

describe("manual inquiry creation API", () => {
	it("stores an offline inquiry with manual attribution", async () => {
		const admin = inquiryAdminClient();
		vi.mocked(getSupabaseAdminClient).mockReturnValue(admin.client as never);

		const response = await createInquiry(
			request("/api/admin/inquiries", {
				parentName: "Grace Parent",
				parentEmail: "GRACE@example.com",
				parentPhone: "416-555-0100",
				childName: "Ada",
				ageGroup: "9-10",
				experience: "some",
				howHeard: "Community event",
				questions: "Do we need a laptop?",
				status: "contacted",
				notes: "Spoke by phone",
			}),
		);

		expect(response.status).toBe(201);
		expect(admin.insert).toHaveBeenCalledWith(
			expect.objectContaining({
				parent_email: "grace@example.com",
				status: "contacted",
				utm_source: "Admin",
				utm_medium: "manual",
			}),
		);
	});

	it("rejects invalid inquiry details before touching the admin client", async () => {
		const response = await createInquiry(
			request("/api/admin/inquiries", {
				parentName: "G",
				parentEmail: "not-an-email",
			}),
		);

		expect(response.status).toBe(400);
		expect(getSupabaseAdminClient).not.toHaveBeenCalled();
	});
});
