import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";
import { FaqContent } from "@/app/faq/faq-content";
import BookTrialPage from "@/app/inquiry/book/page";
import InquiryPage from "@/app/inquiry/page";
import { PricingContent } from "@/app/pricing/pricing-content";
import Hero from "@/components/home/Hero";
import { FALL_2026_OFFER } from "@/lib/marketing/cohort-offer";

vi.mock("@/components/site-header", () => ({ SiteHeader: () => null }));
vi.mock("@/components/layouts/footer", () => ({ Footer: () => null }));
vi.mock("@/components/layouts/main-layout", () => ({
	MainLayout: ({ children }: { children: ReactNode }) => (
		<main>{children}</main>
	),
}));
vi.mock("@/components/ui/motion", () => ({
	SlideInRight: ({ children }: { children: ReactNode }) => (
		<div>{children}</div>
	),
}));
vi.mock("@/app/pricing/payment-instructions", () => ({
	PaymentInstructions: () => null,
}));
vi.mock("@/lib/supabase/client", () => ({
	getSupabaseBrowserClient: () => ({
		auth: { getUser: async () => ({ data: { user: null } }) },
	}),
}));

describe("public class schedule", () => {
	it.each([
		["homepage", Hero],
		["program details", InquiryPage],
		["trial request form", BookTrialPage],
		["pricing", PricingContent],
	])("shows both time zones before registration on %s", (_name, Page) => {
		const { container } = render(<Page />);

		expect(screen.getByText(FALL_2026_OFFER.weeklySchedule)).toBeVisible();
		expect(container.textContent).not.toMatch(/exact (class )?time/i);
	});

	it("answers schedule and trial questions with the published times", async () => {
		const user = userEvent.setup();
		render(<FaqContent />);

		for (const question of [
			"What ages and schedules are available?",
			"How does the free trial work?",
		]) {
			await user.click(screen.getByRole("button", { name: question }));
			expect(
				screen.getByText((text) => text.includes(FALL_2026_OFFER.classTime)),
			).toBeVisible();
		}
	});
});
