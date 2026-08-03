import { beforeEach, describe, expect, it, vi } from "vitest";
import {
	buildCampaignAttribution,
	CAMPAIGN_ATTRIBUTION_STORAGE_KEY,
	CAMPAIGN_ATTRIBUTION_TTL_MS,
	campaignAttributionSchema,
	campaignAttributionToInquiryColumns,
	fallbackInquiryAttribution,
} from "@/lib/marketing/campaign-attribution";
import { captureFirstTouchCampaignAttribution } from "@/lib/marketing/campaign-attribution-client";

describe("campaign attribution", () => {
	beforeEach(() => {
		window.localStorage.clear();
		window.history.replaceState({}, "", "/");
		vi.restoreAllMocks();
	});

	it("maps every captured value to the inquiry database columns", () => {
		const attribution = buildCampaignAttribution(
			"https://www.kidslearnai.ca/pricing?utm_source=google&utm_medium=cpc&utm_campaign=python_kids&utm_content=search_1&utm_term=coding&partner_code=library",
			"https://www.google.com/search?q=private",
		);

		expect(campaignAttributionToInquiryColumns(attribution)).toEqual({
			utm_source: "google",
			utm_medium: "cpc",
			utm_campaign: "python_kids",
			utm_content: "search_1",
			utm_term: "coding",
			landing_page: "/pricing",
			referrer: "https://www.google.com/search",
			partner_code: "library",
		});
	});

	it("captures campaign values while stripping landing and referrer queries", () => {
		const attribution = buildCampaignAttribution(
			"https://www.kidslearnai.ca/pricing?utm_source=google&utm_medium=cpc&utm_campaign=python_kids&utm_content=search_1&utm_term=coding%20classes&partner_code=toronto_library&email=private%40example.com#offer",
			"https://www.google.com/search?q=private+search#results",
		);

		expect(attribution).toEqual({
			utmSource: "google",
			utmMedium: "cpc",
			utmCampaign: "python_kids",
			utmContent: "search_1",
			utmTerm: "coding classes",
			landingPage: "/pricing",
			referrer: "https://www.google.com/search",
			partnerCode: "toronto_library",
		});
	});

	it("drops malformed partner codes and non-web referrers", () => {
		const attribution = buildCampaignAttribution(
			"https://www.kidslearnai.ca/?partner_code=not%20allowed!",
			"mailto:parent@example.com",
		);

		expect(attribution.partnerCode).toBeNull();
		expect(attribution.referrer).toBeNull();
	});

	it("keeps the first touch instead of overwriting it", () => {
		window.history.replaceState(
			{},
			"",
			"/pricing?utm_source=google&utm_campaign=first_campaign",
		);
		const firstTouch = captureFirstTouchCampaignAttribution();

		window.history.replaceState(
			{},
			"",
			"/inquiry/book?utm_source=facebook&utm_campaign=second_campaign",
		);
		const inquiryAttribution = captureFirstTouchCampaignAttribution();

		expect(inquiryAttribution).toEqual(firstTouch);
		expect(inquiryAttribution?.utmSource).toBe("google");
		expect(inquiryAttribution?.landingPage).toBe("/pricing");
	});

	it("replaces expired attribution", () => {
		vi.spyOn(Date, "now").mockReturnValue(1_000);
		window.localStorage.setItem(
			CAMPAIGN_ATTRIBUTION_STORAGE_KEY,
			JSON.stringify({
				attribution: buildCampaignAttribution(
					"https://www.kidslearnai.ca/old?utm_source=old",
					"",
				),
				expiresAt: 999,
			}),
		);
		window.history.replaceState({}, "", "/new?utm_source=new");

		const attribution = captureFirstTouchCampaignAttribution();

		expect(attribution?.utmSource).toBe("new");
		expect(attribution?.landingPage).toBe("/new");
		const stored = JSON.parse(
			window.localStorage.getItem(CAMPAIGN_ATTRIBUTION_STORAGE_KEY) || "{}",
		);
		expect(stored.expiresAt).toBe(1_000 + CAMPAIGN_ATTRIBUTION_TTL_MS);
	});

	it("validates site-relative landing pages and provides a safe fallback", () => {
		expect(
			campaignAttributionSchema.safeParse({
				...fallbackInquiryAttribution(null),
				landingPage: "https://malicious.example/collect",
			}).success,
		).toBe(false);
		expect(
			fallbackInquiryAttribution(
				"https://www.kidslearnai.ca/inquiry/book?email=private@example.com",
			).landingPage,
		).toBe("/inquiry/book");
	});
});
