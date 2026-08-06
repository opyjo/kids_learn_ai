import { describe, expect, it } from "vitest";
import {
	getTeacherGuidePhase,
	getTeacherNoteSections,
} from "@/components/lessons/teacher-notes.helpers";

describe("teacher notes helpers", () => {
	it("splits a guide into stable H2 sections without losing nested headings", () => {
		const sections = getTeacherNoteSections(`# Lesson 2

## Teacher's Guide

**Duration:** 60 minutes

## 📋 Lesson Overview

### Materials Needed

- Laptop

## 📚 Detailed Teaching Guide

### Part 1

Welcome the class.

## ⚠️ Troubleshooting Guide

Help students read the error.

## 📊 Post-Lesson Reflection

Record what worked.`);

		expect(sections.map((section) => section.title)).toEqual([
			"At a glance",
			"📋 Lesson Overview",
			"📚 Detailed Teaching Guide",
			"⚠️ Troubleshooting Guide",
			"📊 Post-Lesson Reflection",
		]);
		expect(sections.map((section) => section.phase)).toEqual([
			"prepare",
			"prepare",
			"teach",
			"support",
			"finish",
		]);
		expect(sections[1].content).toContain("### Materials Needed");
		expect(sections[2].content).toContain("Welcome the class.");
	});

	it("keeps legacy notes with no H2 headings visible", () => {
		const sections = getTeacherNoteSections(
			"# One-off guide\n\nRemember to test the demo.",
		);

		expect(sections).toEqual([
			{
				id: "guide-lesson-guide-1",
				title: "Lesson guide",
				content: "Remember to test the demo.",
				phase: "teach",
			},
		]);
	});

	it("preserves useful content written before the first H2 section", () => {
		const sections = getTeacherNoteSections(
			"# Lesson title\n\nBring a printed backup.\n\n## Lesson Flow\n\nStart the demo.",
		);

		expect(sections[0]).toMatchObject({
			title: "At a glance",
			content: "Bring a printed backup.",
			phase: "prepare",
		});
		expect(sections[1]).toMatchObject({
			title: "Lesson Flow",
			content: "Start the demo.",
			phase: "teach",
		});
	});

	it("classifies common guide headings into instructor phases", () => {
		expect(getTeacherGuidePhase("Pre-Flight Checklist")).toBe("prepare");
		expect(getTeacherGuidePhase("Lesson Flow")).toBe("teach");
		expect(getTeacherGuidePhase("Common Pitfalls & Solutions")).toBe("support");
		expect(getTeacherGuidePhase("Post-Lesson Reflection")).toBe("finish");
	});
});
