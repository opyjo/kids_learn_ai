import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@/tests/test-utils";

vi.mock("@/lib/actions/auth", () => ({
	signupAction: vi.fn(),
}));

vi.mock("@/lib/supabase/client", () => ({
	getSupabaseBrowserClient: vi.fn(() => ({
		auth: {
			signInWithOAuth: vi.fn(async () => ({ error: null })),
		},
	})),
}));

import { SignupForm } from "@/components/auth/signup-form";

describe("parent signup form", () => {
	beforeEach(() => {
		vi.clearAllMocks();
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
	});

	it("keeps Google account creation within the parent onboarding flow", () => {
		render(<SignupForm />);

		expect(
			screen.getByRole("button", { name: /sign up with google/i }),
		).toBeInTheDocument();
	});
});
