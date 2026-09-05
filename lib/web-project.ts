export const WEB_PROJECT_FILE_KEYS = ["html", "css", "javascript"] as const;

export type WebProjectFileKey = (typeof WEB_PROJECT_FILE_KEYS)[number];

export interface WebProjectFiles {
	html: string;
	css: string;
	javascript: string;
}

export const EMPTY_WEB_PROJECT: WebProjectFiles = {
	html: "",
	css: "",
	javascript: "",
};

const MAX_PREVIEW_FILE_LENGTH = 100_000;

const PREVIEW_CSP = [
	"default-src 'none'",
	"base-uri 'none'",
	"connect-src 'none'",
	"font-src data:",
	"form-action 'none'",
	"frame-src 'none'",
	"img-src data: blob:",
	"media-src data: blob:",
	"object-src 'none'",
	"script-src 'unsafe-inline'",
	"style-src 'unsafe-inline'",
].join("; ");

function textValue(value: unknown): string {
	return typeof value === "string" ? value : "";
}

export function normalizeWebProjectFiles(value: unknown): WebProjectFiles {
	if (!value || typeof value !== "object" || Array.isArray(value)) {
		return { ...EMPTY_WEB_PROJECT };
	}

	const candidate = value as Record<string, unknown>;
	return {
		html: textValue(candidate.html),
		css: textValue(candidate.css),
		javascript: textValue(candidate.javascript ?? candidate.js),
	};
}

function injectIntoDocument(
	document: string,
	target: RegExp,
	content: string,
): string {
	return target.test(document)
		? document.replace(target, `${content}$&`)
		: `${document}${content}`;
}

/**
 * Build a deliberately isolated srcDoc document for the Web Creator preview.
 * The iframe that renders this document must also omit allow-same-origin and
 * use only sandbox="allow-scripts".
 */
export function buildWebPreviewDocument(value: unknown): string {
	const files = normalizeWebProjectFiles(value);
	const html = files.html.slice(0, MAX_PREVIEW_FILE_LENGTH).trim();
	const css = files.css.slice(0, MAX_PREVIEW_FILE_LENGTH);
	const javascript = files.javascript.slice(0, MAX_PREVIEW_FILE_LENGTH);
	const safetyHead = `<meta http-equiv="Content-Security-Policy" content="${PREVIEW_CSP}"><meta name="referrer" content="no-referrer">`;
	const style = `<style>${css}</style>`;
	// Prevent student text from accidentally closing the injected script tag.
	const safeJavascript = javascript.replace(/<\/script/gi, "<\\/script");
	const script = `<script>${safeJavascript}</script>`;

	let document = /<html[\s>]/i.test(html)
		? html
		: `<!doctype html><html><head></head><body>${html}</body></html>`;

	if (/<head[\s>]/i.test(document)) {
		document = document.replace(/<head([^>]*)>/i, `<head$1>${safetyHead}`);
	} else {
		document = document.replace(
			/<html([^>]*)>/i,
			`<html$1><head>${safetyHead}</head>`,
		);
	}

	document = injectIntoDocument(document, /<\/head>/i, style);
	document = injectIntoDocument(document, /<\/body>/i, script);

	return document;
}
