import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PaymentInstructions } from "@/app/pricing/payment-instructions";
import { FALL_2026_OFFER } from "@/lib/marketing/cohort-offer";

describe("direct e-Transfer enrollment", () => {
	it("lets families enroll without first attending the trial", () => {
		render(<PaymentInstructions userEmail="parent@example.com" />);

		expect(
			screen.getByRole("heading", { name: "Enroll Now by e-Transfer" }),
		).toBeVisible();
		expect(
			screen.getByText(/do not need to attend the free first class/i),
		).toBeVisible();
		expect(screen.getByText(FALL_2026_OFFER.weeklySchedule)).toBeVisible();
		expect(
			screen.getByText("Child: ____ / Age: ____ / Email: parent@example.com"),
		).toBeVisible();
		expect(screen.getByText(/enrollment is confirmed after/i)).toBeVisible();
		expect(screen.getByText(/return the payment in full/i)).toBeVisible();
	});
});
