import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ParentConsentForm } from "@/components/auth/parent-consent-form";
import { ChildAccountSetupForm } from "@/components/family/child-account-setup-form";
import { NewChildAccountForm } from "@/components/family/new-child-account-form";
import { render, screen } from "@/tests/test-utils";

vi.mock("@/lib/actions/family", () => ({
	createChildAccount: vi.fn(),
	setupChildAccount: vi.fn(),
}));

vi.mock("@/lib/actions/consent", () => ({
	acceptParentConsentAction: vi.fn(),
}));

describe("child account consent forms", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("requires child-specific authorization before creating an account", async () => {
		const user = userEvent.setup();
		render(<NewChildAccountForm />);

		const consent = screen.getByRole("checkbox", {
			name: /I authorize Kids Learn AI to create an account/i,
		});
		const submit = screen.getByRole("button", {
			name: /create child login/i,
		});

		expect(consent).toBeRequired();
		expect(submit).toBeDisabled();
		expect(
			screen.getByRole("link", { name: /privacy policy/i }),
		).toHaveAttribute("href", "/privacy");

		await user.click(consent);
		expect(submit).toBeEnabled();
		const form = submit.closest("form");
		expect(form).not.toBeNull();
		expect(new FormData(form as HTMLFormElement).get("childConsent")).toBe(
			"on",
		);
	});

	it("requires authorization when activating an existing child login", async () => {
		const user = userEvent.setup();
		render(
			<ChildAccountSetupForm
				childId="child-1"
				childName="Ada"
				suggestedUsername="ada-codes"
			/>,
		);

		const consent = screen.getByRole("checkbox", {
			name: /I authorize Kids Learn AI to provide this child's account/i,
		});
		const submit = screen.getByRole("button", {
			name: /save family logins/i,
		});

		expect(consent).toBeRequired();
		expect(submit).toBeDisabled();

		await user.click(consent);
		expect(submit).toBeEnabled();
	});
});

describe("existing parent consent checkpoint", () => {
	it("requires both confirmations before continuing", async () => {
		const user = userEvent.setup();
		render(<ParentConsentForm nextPath="/family" />);

		const guardianConfirmation = screen.getByRole("checkbox", {
			name: /I confirm that I am at least 18/i,
		});
		const legalAcceptance = screen.getByRole("checkbox", {
			name: /I have read and agree/i,
		});
		const submit = screen.getByRole("button", {
			name: /confirm and continue/i,
		});

		expect(submit).toBeDisabled();
		await user.click(guardianConfirmation);
		expect(submit).toBeDisabled();
		await user.click(legalAcceptance);
		expect(submit).toBeEnabled();
		const form = submit.closest("form");
		expect(form).not.toBeNull();
		const formData = new FormData(form as HTMLFormElement);
		expect(formData.get("guardianConfirmed")).toBe("on");
		expect(formData.get("legalAccepted")).toBe("on");
	});
});
