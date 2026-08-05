import { beforeEach, describe, expect, it, vi } from "vitest";
import { GET } from "@/app/auth/callback/route";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { getSupabaseServerClient } from "@/lib/supabase/server";

vi.mock("@/lib/supabase/admin", () => ({
	getSupabaseAdminClient: vi.fn(),
}));

vi.mock("@/lib/supabase/server", () => ({
	getSupabaseServerClient: vi.fn(),
}));

const parentId = "00000000-0000-4000-8000-000000000010";

function serverClient() {
	const profileChain = {
		select: vi.fn(),
		eq: vi.fn(),
		single: vi.fn(async () => ({ data: { role: "parent" } })),
	};
	profileChain.select.mockReturnValue(profileChain);
	profileChain.eq.mockReturnValue(profileChain);

	return {
		auth: {
			exchangeCodeForSession: vi.fn(async () => ({
				data: { user: { id: parentId } },
				error: null,
			})),
			signOut: vi.fn(async () => ({ error: null })),
		},
		from: vi.fn(() => profileChain),
	};
}

function adminClient() {
	const consentChain = {
		upsert: vi.fn(async () => ({ error: null })),
	};
	const countResult = Promise.resolve({ count: 0, error: null });
	const childCountChain = Object.assign(countResult, {
		select: vi.fn(),
		eq: vi.fn(),
	});
	childCountChain.select.mockReturnValue(childCountChain);
	childCountChain.eq.mockReturnValue(childCountChain);

	return {
		consentChain,
		client: {
			from: vi.fn((table: string) =>
				table === "legal_consents" ? consentChain : childCountChain,
			),
		},
	};
}

describe("Google parent signup consent callback", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("records the accepted policy versions before family setup", async () => {
		const supabase = serverClient();
		const admin = adminClient();
		vi.mocked(getSupabaseServerClient).mockResolvedValue(supabase as never);
		vi.mocked(getSupabaseAdminClient).mockReturnValue(admin.client as never);

		const response = await GET(
			new Request(
				"https://www.kidslearnai.ca/auth/callback?code=test-code&analytics_event=sign_up&analytics_method=google&parent_consent=2026-08-05",
			),
		);

		expect(admin.consentChain.upsert).toHaveBeenCalledWith(
			expect.objectContaining({
				parent_user_id: parentId,
				subject_user_id: parentId,
				consent_type: "parent_account",
				terms_version: "2026-08-05",
				privacy_version: "2026-08-05",
				consent_version: "2026-08-05",
				source: "google_oauth_signup",
			}),
			expect.objectContaining({ ignoreDuplicates: true }),
		);
		expect(response.headers.get("location")).toBe(
			"https://www.kidslearnai.ca/family/setup?analytics_event=sign_up&analytics_method=google",
		);
	});

	it("signs out and rejects Google signup without active consent", async () => {
		const supabase = serverClient();
		const admin = adminClient();
		vi.mocked(getSupabaseServerClient).mockResolvedValue(supabase as never);
		vi.mocked(getSupabaseAdminClient).mockReturnValue(admin.client as never);

		const response = await GET(
			new Request(
				"https://www.kidslearnai.ca/auth/callback?code=test-code&analytics_event=sign_up&analytics_method=google",
			),
		);

		expect(supabase.auth.signOut).toHaveBeenCalledOnce();
		expect(admin.consentChain.upsert).not.toHaveBeenCalled();
		expect(response.headers.get("location")).toBe(
			"https://www.kidslearnai.ca/signup?error=parent-consent-required",
		);
	});
});
