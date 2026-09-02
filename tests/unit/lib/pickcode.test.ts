import { describe, expect, it } from "vitest";
import {
	parsePickcodeProjectUrl,
	validatePickcodeProjectUrl,
} from "@/lib/pickcode";

describe("Pickcode project links", () => {
	it("canonicalizes a Pickcode project URL", () => {
		expect(
			parsePickcodeProjectUrl(
				" https://app.pickcode.io/project/cmtit185j67vzb3zcnud5sk6l/?ignored=1 ",
			),
		).toEqual({
			projectId: "cmtit185j67vzb3zcnud5sk6l",
			projectUrl: "https://app.pickcode.io/project/cmtit185j67vzb3zcnud5sk6l",
			outputUrl: "https://app.pickcode.io/share/cmtit185j67vzb3zcnud5sk6l",
		});
	});

	it.each([
		"https://app.pickcode.io/share/cmtit185j67vzb3zcnud5sk6l",
		"https://pickcode.io/project/cmtit185j67vzb3zcnud5sk6l",
		"http://app.pickcode.io/project/cmtit185j67vzb3zcnud5sk6l",
		"https://app.pickcode.io/project/",
		"https://example.com/project/cmtit185j67vzb3zcnud5sk6l",
		"not a url",
	])("rejects unsupported project link %s", (value) => {
		expect(parsePickcodeProjectUrl(value)).toBeNull();
	});

	it("explains that submissions require the view-code project link", () => {
		expect(
			validatePickcodeProjectUrl(
				"https://app.pickcode.io/share/cmtit185j67vzb3zcnud5sk6l",
			),
		).toEqual({
			valid: false,
			message:
				"Use a Pickcode “View Code” project link beginning with https://app.pickcode.io/project/.",
		});
	});
});
