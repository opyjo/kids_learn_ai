import { NextRequest } from "next/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/inquiry/route";
import { FALL_2026_OFFER } from "@/lib/marketing/cohort-offer";

const { sendEmail, insertInquiry } = vi.hoisted(() => ({
	sendEmail: vi.fn(),
	insertInquiry: vi.fn(),
}));

vi.mock("resend", () => ({
	Resend: class {
		emails = { send: sendEmail };
	},
}));
vi.mock("@supabase/supabase-js", () => ({
	createClient: () => ({ from: () => ({ insert: insertInquiry }) }),
}));
vi.mock("@/lib/rate-limit-db", () => ({
	checkDbRateLimit: async () => true,
}));

beforeEach(() => {
	vi.clearAllMocks();
	vi.stubEnv("NEXT_PUBLIC_SUPABASE_URL", "https://example.supabase.co");
	vi.stubEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY", "test-key");
	insertInquiry.mockResolvedValue({ error: null });
	sendEmail.mockResolvedValue({ data: { id: "test-email" }, error: null });
});

afterEach(() => {
	vi.unstubAllEnvs();
});

describe("inquiry email schedule", () => {
	it.each([
		"9-10",
		"11-13",
	])("includes the published times in both emails for ages %s without confirming a seat", async (ageGroup) => {
		const response = await POST(
			new NextRequest("https://www.kidslearnai.ca/api/inquiry", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					parentName: "Test Parent",
					parentEmail: "parent@example.com",
					childName: "Test Child",
					ageGroup,
					experience: "none",
				}),
			}),
		);

		expect(response.status).toBe(200);
		expect(insertInquiry).toHaveBeenCalledOnce();
		expect(sendEmail).toHaveBeenCalledTimes(2);
		for (const [email] of sendEmail.mock.calls) {
			expect(email.html).toContain(FALL_2026_OFFER.classTime);
			expect(email.html).not.toMatch(/exact (class )?time/i);
		}
		const parentEmail = sendEmail.mock.calls[1][0];
		expect(parentEmail.to).toBe("parent@example.com");
		expect(parentEmail.html).toContain(FALL_2026_OFFER.weeklySchedule);
		expect(parentEmail.html).toContain("Free Trial Request Received");
		expect(parentEmail.html).toContain(
			"confirm whether a trial spot is available",
		);
	});
});
