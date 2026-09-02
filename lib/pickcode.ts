const PICKCODE_ORIGIN = "https://app.pickcode.io";

export interface PickcodeProjectLink {
	projectId: string;
	projectUrl: string;
	outputUrl: string;
}

const PROJECT_PATH = /^\/project\/([a-z0-9]+)\/?$/i;

/** Parse and canonicalize a Pickcode project link used for code review. */
export function parsePickcodeProjectUrl(
	value: string,
): PickcodeProjectLink | null {
	const trimmed = value.trim();
	if (!trimmed) return null;

	try {
		const url = new URL(trimmed);
		if (url.protocol !== "https:" || url.hostname !== "app.pickcode.io") {
			return null;
		}

		const match = url.pathname.match(PROJECT_PATH);
		if (!match) return null;

		const projectId = match[1];
		return {
			projectId,
			projectUrl: `${PICKCODE_ORIGIN}/project/${projectId}`,
			outputUrl: `${PICKCODE_ORIGIN}/share/${projectId}`,
		};
	} catch {
		return null;
	}
}

export function validatePickcodeProjectUrl(value: string): {
	valid: boolean;
	message: string;
} {
	if (!value.trim()) {
		return { valid: false, message: "Please enter a Pickcode project link" };
	}

	if (parsePickcodeProjectUrl(value)) {
		return { valid: true, message: "Valid Pickcode project link" };
	}

	return {
		valid: false,
		message:
			"Use a Pickcode “View Code” project link beginning with https://app.pickcode.io/project/.",
	};
}

export { PICKCODE_ORIGIN };
