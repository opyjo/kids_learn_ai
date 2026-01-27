import { beforeEach, describe, expect, it, vi } from "vitest";
import { ContactForm } from "@/components/contact/contact-form";
import { render, screen, waitFor } from "@/tests/test-utils";

// Mock sonner toast
vi.mock("sonner", () => ({
	toast: {
		success: vi.fn(),
		error: vi.fn(),
	},
}));

describe("ContactForm Component", () => {
	beforeEach(() => {
		vi.clearAllMocks();
		// Reset fetch mock
		global.fetch = vi.fn();
	});

	describe("rendering", () => {
		it("should render all form fields", () => {
			render(<ContactForm />);

			expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
			expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
			expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
			expect(
				screen.getByRole("textbox", { name: /message/i }),
			).toBeInTheDocument();
		});

		it("should render submit button", () => {
			render(<ContactForm />);
			expect(
				screen.getByRole("button", { name: /send contact message/i }),
			).toBeInTheDocument();
		});

		it("should show required field indicators", () => {
			render(<ContactForm />);
			// Check for asterisks indicating required fields
			const labels = screen.getAllByText("*");
			expect(labels.length).toBe(4); // name, email, subject, message
		});

		it("should have correct placeholder text", () => {
			render(<ContactForm />);

			expect(screen.getByPlaceholderText("John Doe")).toBeInTheDocument();
			expect(
				screen.getByPlaceholderText("john@example.com"),
			).toBeInTheDocument();
			expect(
				screen.getByPlaceholderText("How can we help you?"),
			).toBeInTheDocument();
			expect(
				screen.getByPlaceholderText("Tell us more about your inquiry..."),
			).toBeInTheDocument();
		});
	});

	describe("validation", () => {
		it("should show error when name is empty on submit", async () => {
			const { user } = render(<ContactForm />);

			await user.click(
				screen.getByRole("button", { name: /send contact message/i }),
			);

			await waitFor(() => {
				expect(screen.getByText("Name is required")).toBeInTheDocument();
			});
		});

		it("should show error when name is too short", async () => {
			const { user } = render(<ContactForm />);

			await user.type(screen.getByLabelText(/your name/i), "A");
			await user.click(
				screen.getByRole("button", { name: /send contact message/i }),
			);

			await waitFor(() => {
				expect(
					screen.getByText("Name must be at least 2 characters"),
				).toBeInTheDocument();
			});
		});

		it("should show error for invalid email", async () => {
			const { user } = render(<ContactForm />);

			await user.type(screen.getByLabelText(/your name/i), "John Doe");
			await user.type(screen.getByLabelText(/email address/i), "invalid-email");
			await user.click(
				screen.getByRole("button", { name: /send contact message/i }),
			);

			await waitFor(() => {
				expect(
					screen.getByText("Please enter a valid email address"),
				).toBeInTheDocument();
			});
		});

		it("should show error when subject is too short", async () => {
			const { user } = render(<ContactForm />);

			await user.type(screen.getByLabelText(/your name/i), "John Doe");
			await user.type(
				screen.getByLabelText(/email address/i),
				"john@example.com",
			);
			await user.type(screen.getByLabelText(/subject/i), "Hi");
			await user.click(
				screen.getByRole("button", { name: /send contact message/i }),
			);

			await waitFor(() => {
				expect(
					screen.getByText("Subject must be at least 5 characters"),
				).toBeInTheDocument();
			});
		});

		it("should show error when message is too short", async () => {
			const { user } = render(<ContactForm />);

			await user.type(screen.getByLabelText(/your name/i), "John Doe");
			await user.type(
				screen.getByLabelText(/email address/i),
				"john@example.com",
			);
			await user.type(screen.getByLabelText(/subject/i), "Test Subject");
			await user.type(
				screen.getByRole("textbox", { name: /message/i }),
				"Short",
			);
			await user.click(
				screen.getByRole("button", { name: /send contact message/i }),
			);

			await waitFor(() => {
				expect(
					screen.getByText("Message must be at least 10 characters"),
				).toBeInTheDocument();
			});
		});
	});

	describe("form submission", () => {
		const fillValidForm = async (user: ReturnType<typeof render>["user"]) => {
			await user.type(screen.getByLabelText(/your name/i), "John Doe");
			await user.type(
				screen.getByLabelText(/email address/i),
				"john@example.com",
			);
			await user.type(screen.getByLabelText(/subject/i), "Test Subject");
			await user.type(
				screen.getByRole("textbox", { name: /message/i }),
				"This is a test message that is long enough.",
			);
		};

		it("should submit form with valid data", async () => {
			const mockFetch = vi.fn().mockResolvedValue({
				ok: true,
				json: () => Promise.resolve({ success: true }),
			});
			global.fetch = mockFetch;

			const { user } = render(<ContactForm />);
			await fillValidForm(user);
			await user.click(
				screen.getByRole("button", { name: /send contact message/i }),
			);

			await waitFor(() => {
				expect(mockFetch).toHaveBeenCalledWith("/api/contact", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: expect.any(String),
				});
			});
		});

		it("should show success message after successful submission", async () => {
			const mockFetch = vi.fn().mockResolvedValue({
				ok: true,
				json: () => Promise.resolve({ success: true }),
			});
			global.fetch = mockFetch;

			const { user } = render(<ContactForm />);
			await fillValidForm(user);
			await user.click(
				screen.getByRole("button", { name: /send contact message/i }),
			);

			await waitFor(() => {
				expect(
					screen.getByText(/thank you for reaching out/i),
				).toBeInTheDocument();
			});
		});

		it("should show loading state while submitting", async () => {
			// Create a promise that we can control
			let resolvePromise: (value: unknown) => void;
			const mockFetch = vi.fn().mockImplementation(
				() =>
					new Promise((resolve) => {
						resolvePromise = resolve;
					}),
			);
			global.fetch = mockFetch;

			const { user } = render(<ContactForm />);
			await fillValidForm(user);
			await user.click(
				screen.getByRole("button", { name: /send contact message/i }),
			);

			// Check for loading state
			await waitFor(() => {
				expect(screen.getByText(/sending/i)).toBeInTheDocument();
			});

			// Resolve the promise
			resolvePromise?.({
				ok: true,
				json: () => Promise.resolve({ success: true }),
			});
		});

		it("should disable inputs while submitting", async () => {
			let resolvePromise: (value: unknown) => void;
			const mockFetch = vi.fn().mockImplementation(
				() =>
					new Promise((resolve) => {
						resolvePromise = resolve;
					}),
			);
			global.fetch = mockFetch;

			const { user } = render(<ContactForm />);
			await fillValidForm(user);
			await user.click(
				screen.getByRole("button", { name: /send contact message/i }),
			);

			await waitFor(() => {
				expect(screen.getByLabelText(/your name/i)).toBeDisabled();
				expect(screen.getByLabelText(/email address/i)).toBeDisabled();
				expect(screen.getByLabelText(/subject/i)).toBeDisabled();
				expect(
					screen.getByRole("textbox", { name: /message/i }),
				).toBeDisabled();
			});

			resolvePromise?.({
				ok: true,
				json: () => Promise.resolve({ success: true }),
			});
		});

		it("should reset form after successful submission", async () => {
			const mockFetch = vi.fn().mockResolvedValue({
				ok: true,
				json: () => Promise.resolve({ success: true }),
			});
			global.fetch = mockFetch;

			const { user } = render(<ContactForm />);
			await fillValidForm(user);
			await user.click(
				screen.getByRole("button", { name: /send contact message/i }),
			);

			await waitFor(() => {
				expect(screen.getByLabelText(/your name/i)).toHaveValue("");
				expect(screen.getByLabelText(/email address/i)).toHaveValue("");
				expect(screen.getByLabelText(/subject/i)).toHaveValue("");
				expect(screen.getByRole("textbox", { name: /message/i })).toHaveValue(
					"",
				);
			});
		});
	});

	describe("error handling", () => {
		const fillValidForm = async (user: ReturnType<typeof render>["user"]) => {
			await user.type(screen.getByLabelText(/your name/i), "John Doe");
			await user.type(
				screen.getByLabelText(/email address/i),
				"john@example.com",
			);
			await user.type(screen.getByLabelText(/subject/i), "Test Subject");
			await user.type(
				screen.getByRole("textbox", { name: /message/i }),
				"This is a test message that is long enough.",
			);
		};

		it("should handle rate limit error (429)", async () => {
			const { toast } = await import("sonner");
			const mockFetch = vi.fn().mockResolvedValue({
				ok: false,
				status: 429,
				json: () => Promise.resolve({ error: "Too many requests" }),
			});
			global.fetch = mockFetch;

			const { user } = render(<ContactForm />);
			await fillValidForm(user);
			await user.click(
				screen.getByRole("button", { name: /send contact message/i }),
			);

			await waitFor(() => {
				expect(toast.error).toHaveBeenCalledWith(
					"Too many requests. Please try again later.",
				);
			});
		});

		it("should handle server error", async () => {
			const { toast } = await import("sonner");
			const mockFetch = vi.fn().mockResolvedValue({
				ok: false,
				status: 500,
				json: () => Promise.resolve({ error: "Server error" }),
			});
			global.fetch = mockFetch;

			const { user } = render(<ContactForm />);
			await fillValidForm(user);
			await user.click(
				screen.getByRole("button", { name: /send contact message/i }),
			);

			await waitFor(() => {
				expect(toast.error).toHaveBeenCalled();
			});
		});

		it("should handle network error", async () => {
			const { toast } = await import("sonner");
			const mockFetch = vi.fn().mockRejectedValue(new Error("Network error"));
			global.fetch = mockFetch;

			const { user } = render(<ContactForm />);
			await fillValidForm(user);
			await user.click(
				screen.getByRole("button", { name: /send contact message/i }),
			);

			await waitFor(() => {
				expect(toast.error).toHaveBeenCalledWith(
					"An unexpected error occurred. Please try again.",
				);
			});
		});
	});

	describe("accessibility", () => {
		it("should have accessible form labels", () => {
			render(<ContactForm />);

			expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
			expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
			expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
			expect(
				screen.getByRole("textbox", { name: /message/i }),
			).toBeInTheDocument();
		});

		it("should have novalidate attribute on form", () => {
			const { container } = render(<ContactForm />);
			const form = container.querySelector("form");
			expect(form).toHaveAttribute("novalidate");
		});
	});
});
