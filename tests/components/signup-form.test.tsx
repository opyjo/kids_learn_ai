import { waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@/tests/test-utils";

const { signInWithOAuth } = vi.hoisted(() => ({
	signInWithOAuth: vi.fn(async () => ({ error: null })),
}));

vi.mock("@/lib/actions/auth", () => ({
	signupAction: vi.fn(),
}));

vi.mock("@/lib/supabase/client", () => ({
	getSupabaseBrowserClient: vi.fn(() => ({
		auth: {
			signInWithOAuth,
		},
	})),
}));

import { SignupForm } from "@/components/auth/signup-form";

describe("parent signup form", () => {
	beforeEach(() => {
		vi.clearAllMocks();
		signInWithOAuth.mockResolvedValue({ error: null });
	});

	it("clearly creates a parent account before child setup", () => {
		render(<SignupForm />);

		expect(
			screen.getByLabelText(/parent or guardian name/i),
		).toBeInTheDocument();
		expect(screen.getByLabelText(/parent email/i)).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: /create parent account/i }),
		).toBeInTheDocument();
		expect(
			screen.getByText(/child does not need an email address/i),
		).toBeInTheDocument();
		expect(
			screen.getByRole("checkbox", {
				name: /I confirm that I am at least 18/i,
			}),
		).toBeRequired();
		expect(
			screen.getByRole("checkbox", { name: /I have read and agree/i }),
		).toBeRequired();
		expect(
			screen.getByRole("link", { name: /terms of service/i }),
		).toHaveAttribute("href", "/terms");
		expect(
			screen.getByRole("link", { name: /privacy policy/i }),
		).toHaveAttribute("href", "/privacy");
	});

	it("requires the same active consent before Google account creation", async () => {
		const user = userEvent.setup();
		render(<SignupForm />);

		const googleButton = screen.getByRole("button", {
			name: /sign up with google/i,
		});
		expect(googleButton).toBeDisabled();

		await user.click(
			screen.getByRole("checkbox", {
				name: /I confirm that I am at least 18/i,
			}),
		);
		await user.click(
			screen.getByRole("checkbox", { name: /I have read and agree/i }),
		);

		expect(googleButton).toBeEnabled();
		const form = googleButton.closest("form");
		expect(form).not.toBeNull();
		const formData = new FormData(form as HTMLFormElement);
		expect(formData.get("guardianConfirmed")).toBe("on");
		expect(formData.get("legalAccepted")).toBe("on");
		await user.click(googleButton);

		await waitFor(() => {
			expect(signInWithOAuth).toHaveBeenCalledWith(
				expect.objectContaining({
					provider: "google",
					options: expect.objectContaining({
						redirectTo: expect.stringContaining("parent_consent=2026-08-05"),
					}),
				}),
			);
		});
	});
});
