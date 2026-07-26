import { beforeEach, describe, expect, it, vi } from "vitest";
import { ChildPasswordResetForm } from "@/components/family/child-password-reset-form";
import { FamilyLoginReady } from "@/components/family/family-login-ready";
import { ParentChecklist } from "@/components/family/parent-checklist";
import { render, screen } from "@/tests/test-utils";

vi.mock("@/lib/actions/family", () => ({
	resetChildPassword: vi.fn(),
}));

describe("family onboarding completion", () => {
	it("shows both sign-in methods and the child username without passwords", () => {
		render(<FamilyLoginReady username="ada-codes" />);

		expect(screen.getByText(/you're ready/i)).toBeInTheDocument();
		expect(screen.getByText(/parent sign-in/i)).toBeInTheDocument();
		expect(
			screen.getByText(/use your email and parent password/i),
		).toBeInTheDocument();
		expect(screen.getByText("ada-codes")).toBeInTheDocument();
		expect(
			screen.getByText(/passwords are never shown here/i),
		).toBeInTheDocument();
		expect(
			screen.getByText(/save both sets of login details/i),
		).toBeInTheDocument();
	});
});

describe("parent checklist", () => {
	it("guides a family without a course to setup and a free trial", () => {
		render(<ParentChecklist hasChildLogin={false} hasCourse={false} />);

		expect(
			screen.getByRole("link", { name: /create child login/i }),
		).toHaveAttribute("href", "/family/setup");
		expect(
			screen.getByRole("link", { name: /book a free trial/i }),
		).toHaveAttribute("href", "/inquiry");
		expect(
			screen.getByText(/account setup does not require payment/i),
		).toBeInTheDocument();
		expect(
			screen.getByText(/have your child begin learning/i),
		).toBeInTheDocument();
	});

	it("recognizes when a child login and course are ready", () => {
		render(<ParentChecklist hasChildLogin hasCourse />);

		expect(screen.getByText(/a course is assigned/i)).toBeInTheDocument();
		expect(
			screen.queryByRole("link", { name: /book a free trial/i }),
		).not.toBeInTheDocument();
	});
});

describe("child password reset form", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("requires a linked child and confirmed password", () => {
		render(
			<ChildPasswordResetForm
				childOptions={[
					{
						id: "child-1",
						full_name: "Ada",
						username: "ada-codes",
					},
				]}
			/>,
		);

		expect(screen.getByLabelText("Child")).toBeRequired();
		expect(screen.getByLabelText("New child password")).toHaveAttribute(
			"minlength",
			"8",
		);
		expect(screen.getByLabelText("Confirm new child password")).toBeRequired();
		expect(
			screen.getByRole("button", { name: /reset child password/i }),
		).toBeInTheDocument();
		expect(screen.getByText(/will not be displayed/i)).toBeInTheDocument();
	});
});
