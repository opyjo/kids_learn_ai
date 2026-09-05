import { describe, expect, it } from "vitest";
import {
	buildWebPreviewDocument,
	normalizeWebProjectFiles,
} from "@/lib/web-project";

describe("web project helpers", () => {
	it("normalizes unknown and legacy js values", () => {
		expect(normalizeWebProjectFiles(null)).toEqual({
			html: "",
			css: "",
			javascript: "",
		});
		expect(
			normalizeWebProjectFiles({ html: "<h1>Hi</h1>", css: 42, js: "go()" }),
		).toEqual({ html: "<h1>Hi</h1>", css: "", javascript: "go()" });
	});

	it("wraps fragments and injects styles, scripts, and a restrictive CSP", () => {
		const document = buildWebPreviewDocument({
			html: "<h1>Hello</h1>",
			css: "h1 { color: purple; }",
			javascript: "document.querySelector('h1').textContent = 'Ready';",
		});

		expect(document).toContain("<!doctype html>");
		expect(document).toContain("default-src 'none'");
		expect(document).toContain("connect-src 'none'");
		expect(document).toContain("form-action 'none'");
		expect(document).toContain("<style>h1 { color: purple; }</style></head>");
		expect(document).toContain("textContent = 'Ready';</script></body>");
	});

	it("keeps an existing document and neutralizes closing script text", () => {
		const document = buildWebPreviewDocument({
			html: "<!doctype html><html><head><title>Test</title></head><body></body></html>",
			css: "",
			javascript: "const example = '</script><p>not markup</p>';",
		});

		expect(document.match(/<html/g)).toHaveLength(1);
		expect(document).toContain("<\\/script>");
	});
});
