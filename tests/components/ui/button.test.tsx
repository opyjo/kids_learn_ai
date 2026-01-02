import { describe, expect, it, vi } from "vitest";
import { Button } from "@/components/ui/button";
import { render, screen } from "@/tests/test-utils";

describe("Button Component", () => {
	describe("rendering", () => {
		it("should render with default props", () => {
			render(<Button>Click me</Button>);
			expect(
				screen.getByRole("button", { name: "Click me" }),
			).toBeInTheDocument();
		});

		it("should render children correctly", () => {
			render(<Button>Test Button</Button>);
			expect(screen.getByText("Test Button")).toBeInTheDocument();
		});

		it("should render with an icon", () => {
			render(
				<Button>
					<svg data-testid="icon" />
					With Icon
				</Button>,
			);
			expect(screen.getByTestId("icon")).toBeInTheDocument();
			expect(screen.getByText("With Icon")).toBeInTheDocument();
		});
	});

	describe("variants", () => {
		it("should apply default variant styles", () => {
			render(<Button variant="default">Default</Button>);
			const button = screen.getByRole("button");
			expect(button).toHaveClass("bg-primary");
		});

		it("should apply destructive variant styles", () => {
			render(<Button variant="destructive">Delete</Button>);
			const button = screen.getByRole("button");
			expect(button).toHaveClass("bg-destructive");
		});

		it("should apply outline variant styles", () => {
			render(<Button variant="outline">Outline</Button>);
			const button = screen.getByRole("button");
			expect(button).toHaveClass("border");
		});

		it("should apply secondary variant styles", () => {
			render(<Button variant="secondary">Secondary</Button>);
			const button = screen.getByRole("button");
			expect(button).toHaveClass("bg-secondary");
		});

		it("should apply ghost variant styles", () => {
			render(<Button variant="ghost">Ghost</Button>);
			const button = screen.getByRole("button");
			expect(button).toHaveClass("hover:bg-accent");
		});

		it("should apply link variant styles", () => {
			render(<Button variant="link">Link</Button>);
			const button = screen.getByRole("button");
			expect(button).toHaveClass("underline-offset-4");
		});
	});

	describe("sizes", () => {
		it("should apply default size", () => {
			render(<Button size="default">Default Size</Button>);
			const button = screen.getByRole("button");
			expect(button).toHaveClass("h-9");
		});

		it("should apply small size", () => {
			render(<Button size="sm">Small</Button>);
			const button = screen.getByRole("button");
			expect(button).toHaveClass("h-8");
		});

		it("should apply large size", () => {
			render(<Button size="lg">Large</Button>);
			const button = screen.getByRole("button");
			expect(button).toHaveClass("h-10");
		});

		it("should apply icon size", () => {
			render(<Button size="icon">🔍</Button>);
			const button = screen.getByRole("button");
			expect(button).toHaveClass("size-9");
		});
	});

	describe("interactions", () => {
		it("should call onClick handler when clicked", async () => {
			const handleClick = vi.fn();
			const { user } = render(<Button onClick={handleClick}>Click me</Button>);

			await user.click(screen.getByRole("button"));
			expect(handleClick).toHaveBeenCalledTimes(1);
		});

		it("should not call onClick when disabled", async () => {
			const handleClick = vi.fn();
			const { user } = render(
				<Button onClick={handleClick} disabled>
					Disabled
				</Button>,
			);

			await user.click(screen.getByRole("button"));
			expect(handleClick).not.toHaveBeenCalled();
		});
	});

	describe("disabled state", () => {
		it("should be disabled when disabled prop is true", () => {
			render(<Button disabled>Disabled</Button>);
			expect(screen.getByRole("button")).toBeDisabled();
		});

		it("should have disabled styles when disabled", () => {
			render(<Button disabled>Disabled</Button>);
			const button = screen.getByRole("button");
			expect(button).toHaveClass("disabled:pointer-events-none");
			expect(button).toHaveClass("disabled:opacity-50");
		});
	});

	describe("asChild prop", () => {
		it("should render as child element when asChild is true", () => {
			render(
				<Button asChild>
					<a href="/test">Link Button</a>
				</Button>,
			);
			const link = screen.getByRole("link", { name: "Link Button" });
			expect(link).toBeInTheDocument();
			expect(link).toHaveAttribute("href", "/test");
		});
	});

	describe("custom className", () => {
		it("should merge custom className with default classes", () => {
			render(<Button className="custom-class">Custom</Button>);
			const button = screen.getByRole("button");
			expect(button).toHaveClass("custom-class");
			expect(button).toHaveClass("inline-flex"); // default class
		});
	});

	describe("accessibility", () => {
		it("should be focusable", () => {
			render(<Button>Focusable</Button>);
			const button = screen.getByRole("button");
			button.focus();
			expect(button).toHaveFocus();
		});

		it("should not be focusable when disabled", () => {
			render(<Button disabled>Not Focusable</Button>);
			const button = screen.getByRole("button");
			expect(button).toBeDisabled();
		});

		it("should have button role by default", () => {
			render(<Button>Button Role</Button>);
			expect(screen.getByRole("button")).toBeInTheDocument();
		});
	});
});
