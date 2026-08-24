import { describe, expect, it } from "vitest";
import {
	escapeHtml,
	safeExternalUrl,
	safeFilename,
} from "@/lib/security/sanitize";

describe("safeExternalUrl", () => {
	it("keeps http and https links", () => {
		expect(safeExternalUrl("https://linkedin.com/in/ada")).toBe(
			"https://linkedin.com/in/ada",
		);
		expect(safeExternalUrl("http://example.com")).toBe("http://example.com");
	});

	it("rejects script-bearing schemes", () => {
		expect(safeExternalUrl("javascript:alert(1)")).toBeNull();
		expect(safeExternalUrl("JavaScript:alert(1)")).toBeNull();
		expect(
			safeExternalUrl("data:text/html,<script>alert(1)</script>"),
		).toBeNull();
		expect(safeExternalUrl("vbscript:msgbox(1)")).toBeNull();
	});

	it("rejects empty and unparseable values", () => {
		expect(safeExternalUrl("")).toBeNull();
		expect(safeExternalUrl("   ")).toBeNull();
		expect(safeExternalUrl(null)).toBeNull();
		expect(safeExternalUrl("not a url")).toBeNull();
	});
});

describe("escapeHtml", () => {
	it("neutralizes tag and attribute breakouts", () => {
		expect(escapeHtml('<img src=x onerror="alert(1)">')).toBe(
			"&lt;img src=x onerror=&quot;alert(1)&quot;&gt;",
		);
		expect(escapeHtml("Tom & Jerry")).toBe("Tom &amp; Jerry");
		expect(escapeHtml("it's")).toBe("it&#39;s");
	});

	it("returns an empty string for nullish input", () => {
		expect(escapeHtml(null)).toBe("");
		expect(escapeHtml(undefined)).toBe("");
	});
});

describe("safeFilename", () => {
	it("strips quotes that would break out of Content-Disposition", () => {
		expect(safeFilename('x"; filename="evil.html')).toBe(
			"x; filename=evil.html",
		);
	});

	it("leaves no path separators to traverse with", () => {
		const cleaned = safeFilename("../../etc/passwd");
		expect(cleaned).not.toMatch(/[\\/]/);
		expect(cleaned).toBe("_.._etc_passwd");
	});

	it("falls back when nothing usable remains", () => {
		expect(safeFilename("")).toBe("download");
		expect(safeFilename(null, "resume")).toBe("resume");
		expect(safeFilename('"""')).toBe("download");
	});

	it("keeps ordinary filenames intact", () => {
		expect(safeFilename("Ada_Lovelace_Resume.pdf")).toBe(
			"Ada_Lovelace_Resume.pdf",
		);
	});
});
