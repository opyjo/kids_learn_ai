import { beforeEach, describe, expect, it, vi } from "vitest";
import { loginAction, signupAction } from "@/lib/actions/auth";
import { createChildAccount, resetChildPassword } from "@/lib/actions/family";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { getSupabaseServerClient } from "@/lib/supabase/server";

const { redirectMock } = vi.hoisted(() => ({
	redirectMock: vi.fn((path: string) => {
		const error = new Error("NEXT_REDIRECT") as Error & { path: string };
		error.path = path;
		throw error;
	}),
}));

vi.mock("next/cache", () => ({
	revalidatePath: vi.fn(),
}));

vi.mock("next/navigation", () => ({
	redirect: redirectMock,
}));

vi.mock("@/lib/supabase/admin", () => ({
	getSupabaseAdminClient: vi.fn(),
}));

vi.mock("@/lib/supabase/server", () => ({
	getSupabaseServerClient: vi.fn(),
}));

const parentId = "00000000-0000-4000-8000-000000000010";
const childId = "00000000-0000-4000-8000-000000000011";

function signupFormData() {
	const formData = new FormData();
	formData.set("fullName", "Grace Parent");
	formData.set("email", "parent@example.com");
	formData.set("password", "parent-password");
	formData.set("confirmPassword", "parent-password");
	return formData;
}

function loginFormData(identifier = "learner@example.com") {
	const formData = new FormData();
	formData.set("identifier", identifier);
	formData.set("password", "password123");
	return formData;
}

function childFormData() {
	const formData = new FormData();
	formData.set("childName", "Ada Learner");
	formData.set("username", "Ada-Codes");
	formData.set("childPassword", "child-password");
	return formData;
}

function passwordResetFormData(
	password = "new-child-password",
	confirmation = password,
) {
	const formData = new FormData();
	formData.set("childId", childId);
	formData.set("newPassword", password);
	formData.set("confirmPassword", confirmation);
	return formData;
}

function loginServerClient(role: "student" | "parent") {
	const profileChain = {
		select: vi.fn(),
		eq: vi.fn(),
		update: vi.fn(),
		single: vi.fn(),
	};
	profileChain.select.mockReturnValue(profileChain);
	profileChain.eq.mockReturnValue(profileChain);
	profileChain.update.mockReturnValue(profileChain);
	profileChain.single.mockResolvedValue({ data: { role }, error: null });

	return {
		auth: {
			signInWithPassword: vi.fn(async () => ({
				data: { user: { id: parentId } },
				error: null,
			})),
		},
		from: vi.fn(() => profileChain),
	};
}

function loginAdminClient(role: "student" | "parent", childCount = 0) {
	let call = 0;
	return {
		from: vi.fn(() => {
			call += 1;
			if (call === 1) {
				const profileChain = {
					select: vi.fn(),
					eq: vi.fn(),
					single: vi.fn(),
				};
				profileChain.select.mockReturnValue(profileChain);
				profileChain.eq.mockReturnValue(profileChain);
				profileChain.single.mockResolvedValue({
					data: { id: parentId, role },
					error: null,
				});
				return profileChain;
			}

			const countResult = Promise.resolve({ count: childCount, error: null });
			const countChain = Object.assign(countResult, {
				select: vi.fn(),
				eq: vi.fn(),
			});
			countChain.select.mockReturnValue(countChain);
			countChain.eq.mockReturnValue(countChain);
			return countChain;
		}),
	};
}

beforeEach(() => {
	vi.clearAllMocks();
	vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://www.kidslearnai.ca/");
});

describe("parent sign-up", () => {
	it("creates a public parent account and sends verification to child setup", async () => {
		const signUp = vi.fn(async () => ({
			data: { user: { id: parentId }, session: null },
			error: null,
		}));
		vi.mocked(getSupabaseServerClient).mockResolvedValue({
			auth: { signUp },
		} as never);

		const result = await signupAction(null, signupFormData());

		expect(result).toEqual({ success: true });
		expect(signUp).toHaveBeenCalledWith({
			email: "parent@example.com",
			password: "parent-password",
			options: {
				data: { full_name: "Grace Parent" },
				emailRedirectTo:
					"https://www.kidslearnai.ca/auth/callback?next=/family/setup",
			},
		});
	});

	it("sends an already verified parent directly to child setup", async () => {
		const profileChain = {
			update: vi.fn(),
			eq: vi.fn(async () => ({ error: null })),
		};
		profileChain.update.mockReturnValue(profileChain);
		vi.mocked(getSupabaseServerClient).mockResolvedValue({
			auth: {
				signUp: vi.fn(async () => ({
					data: {
						user: { id: parentId },
						session: { access_token: "session" },
					},
					error: null,
				})),
			},
			from: vi.fn(() => profileChain),
		} as never);

		await expect(signupAction(null, signupFormData())).rejects.toMatchObject({
			message: "NEXT_REDIRECT",
			path: "/family/setup?analytics_event=sign_up&analytics_method=email",
		});
	});
});

describe("legacy login routing", () => {
	it("keeps an existing student email/password login on the dashboard", async () => {
		vi.mocked(getSupabaseServerClient).mockResolvedValue(
			loginServerClient("student") as never,
		);
		vi.mocked(getSupabaseAdminClient).mockReturnValue(
			loginAdminClient("student") as never,
		);

		await expect(loginAction(null, loginFormData())).rejects.toMatchObject({
			message: "NEXT_REDIRECT",
			path: "/dashboard?analytics_event=login&analytics_method=password",
		});
	});

	it("keeps an existing parent with a child on the family page", async () => {
		vi.mocked(getSupabaseServerClient).mockResolvedValue(
			loginServerClient("parent") as never,
		);
		vi.mocked(getSupabaseAdminClient).mockReturnValue(
			loginAdminClient("parent", 1) as never,
		);

		await expect(
			loginAction(null, loginFormData("parent@example.com")),
		).rejects.toMatchObject({
			message: "NEXT_REDIRECT",
			path: "/family?analytics_event=login&analytics_method=password",
		});
	});

	it("guides a parent without children into setup", async () => {
		vi.mocked(getSupabaseServerClient).mockResolvedValue(
			loginServerClient("parent") as never,
		);
		vi.mocked(getSupabaseAdminClient).mockReturnValue(
			loginAdminClient("parent", 0) as never,
		);

		await expect(
			loginAction(null, loginFormData("new-parent@example.com")),
		).rejects.toMatchObject({
			message: "NEXT_REDIRECT",
			path: "/family/setup?analytics_event=login&analytics_method=password",
		});
	});
});

describe("trusted child creation", () => {
	it("creates and links a student through the server admin client", async () => {
		const parentProfileChain = {
			select: vi.fn(),
			eq: vi.fn(),
			single: vi.fn(async () => ({ data: { role: "parent" } })),
		};
		parentProfileChain.select.mockReturnValue(parentProfileChain);
		parentProfileChain.eq.mockReturnValue(parentProfileChain);
		vi.mocked(getSupabaseServerClient).mockResolvedValue({
			auth: {
				getUser: vi.fn(async () => ({ data: { user: { id: parentId } } })),
			},
			from: vi.fn(() => parentProfileChain),
		} as never);

		const usernameChain = {
			select: vi.fn(),
			eq: vi.fn(),
			maybeSingle: vi.fn(async () => ({ data: null })),
		};
		usernameChain.select.mockReturnValue(usernameChain);
		usernameChain.eq.mockReturnValue(usernameChain);

		const linkChain = {
			update: vi.fn(),
			eq: vi.fn(),
			select: vi.fn(),
			single: vi.fn(async () => ({
				data: { id: childId },
				error: null,
			})),
		};
		linkChain.update.mockReturnValue(linkChain);
		linkChain.eq.mockReturnValue(linkChain);
		linkChain.select.mockReturnValue(linkChain);

		const createUser = vi.fn(async () => ({
			data: { user: { id: childId } },
			error: null,
		}));
		const deleteUser = vi.fn();
		let profilesCall = 0;
		vi.mocked(getSupabaseAdminClient).mockReturnValue({
			auth: { admin: { createUser, deleteUser } },
			from: vi.fn(() => {
				profilesCall += 1;
				return profilesCall === 1 ? usernameChain : linkChain;
			}),
		} as never);

		await expect(
			createChildAccount(null, childFormData()),
		).rejects.toMatchObject({
			message: "NEXT_REDIRECT",
			path: `/family?setup=success&child=${childId}`,
		});

		expect(createUser).toHaveBeenCalledWith(
			expect.objectContaining({
				email: expect.stringMatching(
					/^student-[0-9a-f-]+@accounts\.kidslearnai\.ca$/,
				),
				password: "child-password",
				email_confirm: true,
				user_metadata: { full_name: "Ada Learner" },
				app_metadata: { account_type: "student" },
			}),
		);
		expect(linkChain.update).toHaveBeenCalledWith(
			expect.objectContaining({
				parent_id: parentId,
				username: "ada-codes",
			}),
		);
		expect(deleteUser).not.toHaveBeenCalled();
	});

	it("rejects child creation from a student account", async () => {
		const profileChain = {
			select: vi.fn(),
			eq: vi.fn(),
			single: vi.fn(async () => ({ data: { role: "student" } })),
		};
		profileChain.select.mockReturnValue(profileChain);
		profileChain.eq.mockReturnValue(profileChain);
		vi.mocked(getSupabaseServerClient).mockResolvedValue({
			auth: {
				getUser: vi.fn(async () => ({ data: { user: { id: childId } } })),
			},
			from: vi.fn(() => profileChain),
		} as never);
		const createUser = vi.fn();
		vi.mocked(getSupabaseAdminClient).mockReturnValue({
			auth: { admin: { createUser } },
		} as never);

		const result = await createChildAccount(null, childFormData());

		expect(result).toEqual({ error: "Only a parent account can add a child" });
		expect(createUser).not.toHaveBeenCalled();
	});
});

describe("parent child-password reset", () => {
	it("resets a linked child's password without returning it", async () => {
		const parentProfileChain = {
			select: vi.fn(),
			eq: vi.fn(),
			single: vi.fn(async () => ({ data: { role: "parent" } })),
		};
		parentProfileChain.select.mockReturnValue(parentProfileChain);
		parentProfileChain.eq.mockReturnValue(parentProfileChain);
		vi.mocked(getSupabaseServerClient).mockResolvedValue({
			auth: {
				getUser: vi.fn(async () => ({ data: { user: { id: parentId } } })),
			},
			from: vi.fn(() => parentProfileChain),
		} as never);

		const childChain = {
			select: vi.fn(),
			eq: vi.fn(),
			maybeSingle: vi.fn(async () => ({
				data: { id: childId, role: "student", username: "ada-codes" },
			})),
		};
		childChain.select.mockReturnValue(childChain);
		childChain.eq.mockReturnValue(childChain);
		const updateUserById = vi.fn(async () => ({ error: null }));
		vi.mocked(getSupabaseAdminClient).mockReturnValue({
			auth: { admin: { updateUserById } },
			from: vi.fn(() => childChain),
		} as never);

		const result = await resetChildPassword(null, passwordResetFormData());

		expect(updateUserById).toHaveBeenCalledWith(childId, {
			password: "new-child-password",
		});
		expect(result).toEqual({ success: true, username: "ada-codes" });
		expect(result).not.toHaveProperty("password");
	});

	it("rejects a child that is not linked to the signed-in parent", async () => {
		const parentProfileChain = {
			select: vi.fn(),
			eq: vi.fn(),
			single: vi.fn(async () => ({ data: { role: "parent" } })),
		};
		parentProfileChain.select.mockReturnValue(parentProfileChain);
		parentProfileChain.eq.mockReturnValue(parentProfileChain);
		vi.mocked(getSupabaseServerClient).mockResolvedValue({
			auth: {
				getUser: vi.fn(async () => ({ data: { user: { id: parentId } } })),
			},
			from: vi.fn(() => parentProfileChain),
		} as never);

		const childChain = {
			select: vi.fn(),
			eq: vi.fn(),
			maybeSingle: vi.fn(async () => ({ data: null })),
		};
		childChain.select.mockReturnValue(childChain);
		childChain.eq.mockReturnValue(childChain);
		const updateUserById = vi.fn();
		vi.mocked(getSupabaseAdminClient).mockReturnValue({
			auth: { admin: { updateUserById } },
			from: vi.fn(() => childChain),
		} as never);

		const result = await resetChildPassword(null, passwordResetFormData());

		expect(result).toEqual({
			error: "That child account does not belong to your family",
		});
		expect(updateUserById).not.toHaveBeenCalled();
	});

	it("rejects password reset from a student account", async () => {
		const profileChain = {
			select: vi.fn(),
			eq: vi.fn(),
			single: vi.fn(async () => ({ data: { role: "student" } })),
		};
		profileChain.select.mockReturnValue(profileChain);
		profileChain.eq.mockReturnValue(profileChain);
		vi.mocked(getSupabaseServerClient).mockResolvedValue({
			auth: {
				getUser: vi.fn(async () => ({ data: { user: { id: childId } } })),
			},
			from: vi.fn(() => profileChain),
		} as never);
		const updateUserById = vi.fn();
		vi.mocked(getSupabaseAdminClient).mockReturnValue({
			auth: { admin: { updateUserById } },
		} as never);

		const result = await resetChildPassword(null, passwordResetFormData());

		expect(result).toEqual({
			error: "Only a parent account can reset child passwords",
		});
		expect(updateUserById).not.toHaveBeenCalled();
	});

	it("validates password confirmation and minimum length", async () => {
		const mismatch = await resetChildPassword(
			null,
			passwordResetFormData("new-child-password", "different-password"),
		);
		const tooShort = await resetChildPassword(
			null,
			passwordResetFormData("short", "short"),
		);

		expect(mismatch).toEqual({ error: "Passwords do not match" });
		expect(tooShort).toEqual({
			error: "Child password must be at least 8 characters",
		});
	});
});
