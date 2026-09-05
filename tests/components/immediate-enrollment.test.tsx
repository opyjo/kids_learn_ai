import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ReactNode } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import BookTrialPage from "@/app/inquiry/book/page";
import InquiryPage from "@/app/inquiry/page";
import { PricingContent } from "@/app/pricing/pricing-content";
import Hero from "@/components/home/Hero";
import { ENROLL_NOW_CTA } from "@/lib/marketing/positioning";

const scrollIntoView = vi.fn();

vi.mock("@/components/site-header", () => ({ SiteHeader: () => null }));
vi.mock("@/components/layouts/footer", () => ({ Footer: () => null }));
vi.mock("@/components/ui/motion", () => ({
	SlideInRight: ({ children }: { children: ReactNode }) => (
		<div>{children}</div>
	),
}));
vi.mock("@/app/pricing/payment-instructions", () => ({
	PaymentInstructions: () => <div id="payment-instructions">Payment</div>,
}));
vi.mock("@/lib/supabase/client", () => ({
	getSupabaseBrowserClient: () => ({
		auth: { getUser: async () => ({ data: { user: null } }) },
	}),
}));

beforeEach(() => {
	scrollIntoView.mockClear();
	HTMLElement.prototype.scrollIntoView = scrollIntoView;
});

describe("immediate enrollment", () => {
	it.each([
		["homepage", Hero],
		["program details", InquiryPage],
		["trial request", BookTrialPage],
	])("offers direct payment from the %s", (_name, Page) => {
		render(<Page />);

		const links = screen.getAllByRole("link", {
			name: new RegExp(ENROLL_NOW_CTA.replace("$", "\\$")),
		});
		expect(links.length).toBeGreaterThan(0);
		for (const link of links) {
			expect(link).toHaveAttribute("href", "/pricing#payment-instructions");
		}
	});

	it("scrolls directly to payment instructions from pricing", async () => {
		const user = userEvent.setup();
		render(<PricingContent />);

		await user.click(screen.getByRole("button", { name: ENROLL_NOW_CTA }));

		expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
	});
});
