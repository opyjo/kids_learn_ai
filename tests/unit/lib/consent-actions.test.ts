import { beforeEach, describe, expect, it, vi } from "vitest";
import { acceptParentConsentAction } from "@/lib/actions/consent";
import { recordLegalConsent } from "@/lib/legal/consent-server";
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
vi.mock("@/lib/legal/consent-server", () => ({ recordLegalConsent: vi.fn() }));
vi.mock("@/lib/supabase/admin", () => ({ getSupabaseAdminClient: vi.fn() }));
vi.mock("@/lib/supabase/server", () => ({ getSupabaseServerClient: vi.fn() }));

const parent = { id: "00000000-0000-4000-8000-000000000010" };
const admin = {};

function consentFormData(next = "/family") {
	const formData = new FormData();
	formData.set("guardianConfirmed", "on");
	formData.set("legalAccepted", "on");
	formData.set("next", next);
	return formData;
}

describe("acceptParentConsentAction", () => {
	beforeEach(() => {
		vi.clearAllMocks();
		vi.mocked(getSupabaseAdminClient).mockReturnValue(admin as never);
		vi.mocked(recordLegalConsent).mockResolvedValue({ error: null });
	});

	it("rejects missing confirmations before accessing auth or storage", async () => {
		const formData = new FormData();
		formData.set("guardianConfirmed", "on");

		const result = await acceptParentConsentAction(null, formData);

		expect(result?.error).toMatch(/accept the Terms and Privacy Policy/i);
		expect(getSupabaseServerClient).not.toHaveBeenCalled();
		expect(recordLegalConsent).not.toHaveBeenCalled();
	});

	it("records an authenticated parent's current consent and redirects safely", async () => {
		const profileChain = {
			select: vi.fn(),
			eq: vi.fn(),
			single: vi.fn(async () => ({ data: { role: "parent" } })),
		};
		profileChain.select.mockReturnValue(profileChain);
		profileChain.eq.mockReturnValue(profileChain);
		vi.mocked(getSupabaseServerClient).mockResolvedValue({
			auth: {
				getUser: vi.fn(async () => ({ data: { user: parent } })),
			},
			from: vi.fn(() => profileChain),
		} as never);

		await expect(
			acceptParentConsentAction(null, consentFormData("https://evil.test")),
		).rejects.toMatchObject({
			message: "NEXT_REDIRECT",
			path: "/family",
		});

		expect(recordLegalConsent).toHaveBeenCalledWith(
			expect.objectContaining({
				parentUserId: parent.id,
				subjectUserId: parent.id,
				consentType: "parent_account",
				source: "parent_consent_checkpoint",
			}),
			admin,
		);
	});

	it("rejects non-parent accounts", async () => {
		const profileChain = {
			select: vi.fn(),
			eq: vi.fn(),
			single: vi.fn(async () => ({ data: { role: "student" } })),
		};
		profileChain.select.mockReturnValue(profileChain);
		profileChain.eq.mockReturnValue(profileChain);
		vi.mocked(getSupabaseServerClient).mockResolvedValue({
			auth: {
				getUser: vi.fn(async () => ({ data: { user: parent } })),
			},
			from: vi.fn(() => profileChain),
		} as never);

		const result = await acceptParentConsentAction(null, consentFormData());

		expect(result?.error).toMatch(/Only a parent/i);
		expect(recordLegalConsent).not.toHaveBeenCalled();
	});
});
