/**
 * Sanitizers for untrusted values that reach an admin's browser, an outbound
 * email, or a response header.
 */

const SAFE_URL_PROTOCOLS = new Set(["http:", "https:"]);

/**
 * Returns the URL only if it uses http(s). Anything else — `javascript:`,
 * `data:`, `vbscript:` — returns null, since those execute when an admin
 * clicks the rendered link.
 */
export const safeExternalUrl = (
	value: string | null | undefined,
): string | null => {
	if (!value) return null;

	const trimmed = value.trim();
	if (!trimmed) return null;

	try {
		const parsed = new URL(trimmed);
		return SAFE_URL_PROTOCOLS.has(parsed.protocol) ? trimmed : null;
	} catch {
		return null;
	}
};

export const isSafeExternalUrl = (value: string | null | undefined): boolean =>
	safeExternalUrl(value) !== null;

const HTML_ENTITIES: Record<string, string> = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': "&quot;",
	"'": "&#39;",
};

/** Escapes a value for interpolation into an HTML email template. */
export const escapeHtml = (value: string | null | undefined): string => {
	if (value === null || value === undefined) return "";
	return String(value).replace(/[&<>"']/g, (char) => HTML_ENTITIES[char]);
};

/**
 * Strips directory separators, quotes, and control characters so a filename
 * can't break out of the quoted `Content-Disposition` parameter or traverse
 * a path. Falls back to a generic name if nothing usable remains.
 */
export const safeFilename = (
	value: string | null | undefined,
	fallback = "download",
): string => {
	if (!value) return fallback;

	const cleaned = value
		.replace(/[\\/]/g, "_")
		// biome-ignore lint/suspicious/noControlCharactersInRegex: stripping control chars is the point
		.replace(/[\x00-\x1f\x7f"']/g, "")
		.replace(/^\.+/, "")
		.trim()
		.slice(0, 200);

	return cleaned || fallback;
};
