import { describe, expect, it } from "vitest";
import { courseMetadataDescription } from "@/lib/seo";

describe("courseMetadataDescription", () => {
	it("combines the course audience with its real description", () => {
		const description = courseMetadataDescription({
			description:
				"Master loops and debugging while building programs that handle repetitive tasks.",
			ageRange: "11-13",
		});

		expect(description).toContain("Live online coding course");
		expect(description).toContain("ages 11-13");
		expect(description).toContain("Master loops and debugging");
		expect(description.length).toBeLessThanOrEqual(160);
	});

	it("uses safe defaults when optional course fields are missing", () => {
		const description = courseMetadataDescription({});

		expect(description).toContain("ages 9-13");
		expect(description).toContain("Python projects");
		expect(description.length).toBeLessThanOrEqual(160);
	});

	it("truncates long descriptions at a readable word boundary", () => {
		const description = courseMetadataDescription({
			description:
				"Students investigate machine learning, training data, model behaviour, fairness, privacy, responsible design, evaluation, and many other practical concepts through a long sequence of hands-on activities.",
			projectName: "Responsible AI Investigation",
		});

		expect(description.length).toBeLessThanOrEqual(160);
		expect(description).toMatch(/…$/u);
		expect(description).not.toMatch(/\s…$/u);
	});
});
