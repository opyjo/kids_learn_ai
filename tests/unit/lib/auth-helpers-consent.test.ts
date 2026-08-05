import { beforeEach, describe, expect, it, vi } from "vitest";
import { requireParent } from "@/lib/auth-helpers";
import { hasCurrentParentAccountConsent } from "@/lib/legal/consent-server";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { getSupabaseServerClient } from "@/lib/supabase/server";

const { redirectMock } = vi.hoisted(() => ({
	redirectMock: vi.fn((path: string) => {
		const error = new Error("NEXT_REDIRECT") as Error & { path: string };
		error.path = path;
		throw error;
	}),
}));

vi.mock("next/navigation", () => ({ redirect: redirectMock }));
vi.mock("@/lib/legal/consent-server", () => ({
	hasCurrentParentAccountConsent: vi.fn(),
}));
vi.mock("@/lib/supabase/admin", () => ({
	getSupabaseAdminClient: vi.fn(),
}));
vi.mock("@/lib/supabase/server", () => ({
	getSupabaseServerClient: vi.fn(),
}));

const parent = { id: "00000000-0000-4000-8000-000000000010" };

function parentServerClient() {
	const profileChain = {
		select: vi.fn(),
		eq: vi.fn(),
		single: vi.fn(async () => ({ data: { role: "parent" } })),
	};
	profileChain.select.mockReturnValue(profileChain);
	profileChain.eq.mockReturnValue(profileChain);
	return {
		auth: {
			getUser: vi.fn(async () => ({ data: { user: parent } })),
		},
		from: vi.fn(() => profileChain),
	};
}

describe("parent route consent gate", () => {
	beforeEach(() => {
		vi.clearAllMocks();
		vi.mocked(getSupabaseAdminClient).mockReturnValue({} as never);
	});

	it("redirects a parent without the current consent record", async () => {
		vi.mocked(getSupabaseServerClient).mockResolvedValue(
			parentServerClient() as never,
		);
		vi.mocked(hasCurrentParentAccountConsent).mockResolvedValue(false);

		await expect(requireParent()).rejects.toMatchObject({
			message: "NEXT_REDIRECT",
			path: "/parent-consent",
		});
	});

	it("allows a parent with the current consent record", async () => {
		vi.mocked(getSupabaseServerClient).mockResolvedValue(
			parentServerClient() as never,
		);
		vi.mocked(hasCurrentParentAccountConsent).mockResolvedValue(true);

		await expect(requireParent()).resolves.toEqual(parent);
	});
});
