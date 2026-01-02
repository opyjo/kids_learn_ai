import { describe, expect, it } from "vitest";
import { contactFormSchema } from "@/lib/schemas/contact";

describe("Contact Form Schema", () => {
	const validData = {
		name: "John Doe",
		email: "john@example.com",
		subject: "Test Subject",
		message: "This is a test message that is long enough.",
	};

	describe("valid inputs", () => {
		it("should pass with valid data", () => {
			const result = contactFormSchema.safeParse(validData);
			expect(result.success).toBe(true);
		});

		it("should trim whitespace from all fields", () => {
			const dataWithWhitespace = {
				name: "  John Doe  ",
				email: "  john@example.com  ",
				subject: "  Test Subject  ",
				message: "  This is a test message that is long enough.  ",
			};
			const result = contactFormSchema.safeParse(dataWithWhitespace);
			expect(result.success).toBe(true);
			if (result.success) {
				expect(result.data.name).toBe("John Doe");
				expect(result.data.email).toBe("john@example.com");
			}
		});
	});

	describe("name field validation", () => {
		it("should fail when name is empty", () => {
			const result = contactFormSchema.safeParse({ ...validData, name: "" });
			expect(result.success).toBe(false);
			if (!result.success) {
				expect(result.error.issues[0].message).toBe("Name is required");
			}
		});

		it("should fail when name is too short", () => {
			const result = contactFormSchema.safeParse({ ...validData, name: "J" });
			expect(result.success).toBe(false);
			if (!result.success) {
				expect(result.error.issues[0].message).toBe(
					"Name must be at least 2 characters",
				);
			}
		});

		it("should fail when name exceeds 100 characters", () => {
			const longName = "A".repeat(101);
			const result = contactFormSchema.safeParse({
				...validData,
				name: longName,
			});
			expect(result.success).toBe(false);
			if (!result.success) {
				expect(result.error.issues[0].message).toBe(
					"Name must not exceed 100 characters",
				);
			}
		});

		it("should pass with name at exactly 100 characters", () => {
			const maxName = "A".repeat(100);
			const result = contactFormSchema.safeParse({
				...validData,
				name: maxName,
			});
			expect(result.success).toBe(true);
		});
	});

	describe("email field validation", () => {
		it("should fail when email is empty", () => {
			const result = contactFormSchema.safeParse({ ...validData, email: "" });
			expect(result.success).toBe(false);
			if (!result.success) {
				expect(result.error.issues[0].message).toBe("Email is required");
			}
		});

		it("should fail with invalid email format", () => {
			const invalidEmails = [
				"not-an-email",
				"missing@domain",
				"@nodomain.com",
				"spaces in@email.com",
			];

			for (const email of invalidEmails) {
				const result = contactFormSchema.safeParse({ ...validData, email });
				expect(result.success).toBe(false);
				if (!result.success) {
					expect(result.error.issues[0].message).toBe(
						"Please enter a valid email address",
					);
				}
			}
		});

		it("should pass with valid email formats", () => {
			const validEmails = [
				"test@example.com",
				"user.name@domain.co.uk",
				"user+tag@example.org",
			];

			for (const email of validEmails) {
				const result = contactFormSchema.safeParse({ ...validData, email });
				expect(result.success).toBe(true);
			}
		});
	});

	describe("subject field validation", () => {
		it("should fail when subject is empty", () => {
			const result = contactFormSchema.safeParse({ ...validData, subject: "" });
			expect(result.success).toBe(false);
			if (!result.success) {
				expect(result.error.issues[0].message).toBe("Subject is required");
			}
		});

		it("should fail when subject is too short", () => {
			const result = contactFormSchema.safeParse({
				...validData,
				subject: "Hi",
			});
			expect(result.success).toBe(false);
			if (!result.success) {
				expect(result.error.issues[0].message).toBe(
					"Subject must be at least 5 characters",
				);
			}
		});

		it("should fail when subject exceeds 200 characters", () => {
			const longSubject = "A".repeat(201);
			const result = contactFormSchema.safeParse({
				...validData,
				subject: longSubject,
			});
			expect(result.success).toBe(false);
			if (!result.success) {
				expect(result.error.issues[0].message).toBe(
					"Subject must not exceed 200 characters",
				);
			}
		});
	});

	describe("message field validation", () => {
		it("should fail when message is empty", () => {
			const result = contactFormSchema.safeParse({ ...validData, message: "" });
			expect(result.success).toBe(false);
			if (!result.success) {
				expect(result.error.issues[0].message).toBe("Message is required");
			}
		});

		it("should fail when message is too short", () => {
			const result = contactFormSchema.safeParse({
				...validData,
				message: "Hi there",
			});
			expect(result.success).toBe(false);
			if (!result.success) {
				expect(result.error.issues[0].message).toBe(
					"Message must be at least 10 characters",
				);
			}
		});

		it("should fail when message exceeds 1000 characters", () => {
			const longMessage = "A".repeat(1001);
			const result = contactFormSchema.safeParse({
				...validData,
				message: longMessage,
			});
			expect(result.success).toBe(false);
			if (!result.success) {
				expect(result.error.issues[0].message).toBe(
					"Message must not exceed 1000 characters",
				);
			}
		});

		it("should pass with message at exactly 1000 characters", () => {
			const maxMessage = "A".repeat(1000);
			const result = contactFormSchema.safeParse({
				...validData,
				message: maxMessage,
			});
			expect(result.success).toBe(true);
		});
	});

	describe("missing fields", () => {
		it("should fail when required fields are missing", () => {
			const result = contactFormSchema.safeParse({});
			expect(result.success).toBe(false);
			if (!result.success) {
				expect(result.error.issues.length).toBeGreaterThan(0);
			}
		});
	});
});
