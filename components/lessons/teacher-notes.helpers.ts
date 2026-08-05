export type TeacherGuidePhase = "prepare" | "teach" | "support" | "finish";

export interface TeacherNoteSection {
	id: string;
	title: string;
	content: string;
	phase: TeacherGuidePhase;
}

const H1_PATTERN = /^#\s+(.+)$/;
const H2_PATTERN = /^##\s+(.+)$/;

function normalizeTitle(title: string): string {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, "")
		.replace(/\s+/g, " ")
		.trim();
}

function createSectionId(title: string, index: number): string {
	const slug = normalizeTitle(title).replace(/\s+/g, "-");
	return `guide-${slug || "section"}-${index + 1}`;
}

export function getTeacherGuidePhase(title: string): TeacherGuidePhase {
	const normalized = normalizeTitle(title);

	if (
		/(overview|at a glance|pre-flight|preparation|why a recap)/.test(normalized)
	) {
		return "prepare";
	}

	if (
		/(assessment|differentiation|troubleshoot|pitfall|challenge|mistake|question|scope|sensitive)/.test(
			normalized,
		)
	) {
		return "support";
	}

	if (
		/(checklist|reflection|resource|remember|looking ahead|final note|parent communication|continuity)/.test(
			normalized,
		)
	) {
		return "finish";
	}

	return "teach";
}

/**
 * Turns the existing free-form teacher-note markdown into predictable H2-sized
 * sections. H3/H4 content stays inside its parent section, so no authored
 * guidance is lost or rewritten.
 */
export function getTeacherNoteSections(content: string): TeacherNoteSection[] {
	const sections: TeacherNoteSection[] = [];
	let title = "";
	let body: string[] = [];
	let preamble: string[] = [];

	const saveSection = () => {
		if (!title) return;

		const displayTitle =
			normalizeTitle(title) === "teachers guide" ? "At a glance" : title;
		const sectionContent = body.join("\n").trim();

		if (sectionContent) {
			sections.push({
				id: createSectionId(displayTitle, sections.length),
				title: displayTitle,
				content: sectionContent,
				phase: getTeacherGuidePhase(displayTitle),
			});
		}

		body = [];
	};

	for (const line of content.split("\n")) {
		const h2Match = line.match(H2_PATTERN);

		if (h2Match) {
			const preambleContent = preamble.join("\n").trim();
			if (!title && preambleContent) {
				sections.push({
					id: createSectionId("At a glance", sections.length),
					title: "At a glance",
					content: preambleContent,
					phase: "prepare",
				});
				preamble = [];
			}

			saveSection();
			title = h2Match[1].trim();
			continue;
		}

		// The lesson title is already presented in the page header.
		if (!title && H1_PATTERN.test(line)) continue;
		if (title) {
			body.push(line);
		} else {
			preamble.push(line);
		}
	}

	saveSection();

	if (sections.length === 0 && content.trim()) {
		const fallbackContent = content
			.split("\n")
			.filter((line) => !H1_PATTERN.test(line))
			.join("\n")
			.trim();

		if (fallbackContent) {
			sections.push({
				id: createSectionId("Lesson guide", 0),
				title: "Lesson guide",
				content: fallbackContent,
				phase: "teach",
			});
		}
	}

	return sections;
}
