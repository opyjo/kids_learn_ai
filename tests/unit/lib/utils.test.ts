import { describe, expect, it } from "vitest";
import { cn } from "@/lib/utils";

describe("cn utility function", () => {
	it("should merge class names correctly", () => {
		const result = cn("px-4", "py-2");
		expect(result).toBe("px-4 py-2");
	});

	it("should handle conditional class names", () => {
		const isActive = true;
		const result = cn("base-class", isActive && "active-class");
		expect(result).toBe("base-class active-class");
	});

	it("should filter out falsy values", () => {
		const result = cn("base", false && "hidden", null, undefined, "visible");
		expect(result).toBe("base visible");
	});

	it("should merge conflicting Tailwind classes correctly", () => {
		// tailwind-merge should keep the last conflicting class
		const result = cn("px-4", "px-6");
		expect(result).toBe("px-6");
	});

	it("should handle arrays of class names", () => {
		const result = cn(["class1", "class2"], "class3");
		expect(result).toBe("class1 class2 class3");
	});

	it("should handle empty inputs", () => {
		const result = cn();
		expect(result).toBe("");
	});

	it("should handle object syntax", () => {
		const result = cn({
			"base-class": true,
			"active-class": true,
			"hidden-class": false,
		});
		expect(result).toBe("base-class active-class");
	});

	it("should trim whitespace from class names", () => {
		const result = cn("  spaced  ", "normal");
		expect(result).toContain("spaced");
		expect(result).toContain("normal");
	});
});
