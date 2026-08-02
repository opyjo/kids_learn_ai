import { z } from "zod";

export const CAMPAIGN_ATTRIBUTION_STORAGE_KEY = "kla:attribution:v1";
export const CAMPAIGN_ATTRIBUTION_TTL_MS = 90 * 24 * 60 * 60 * 1000;

const nullableCampaignValue = (maxLength: number) =>
	z.string().trim().min(1).max(maxLength).nullable();

export const campaignAttributionSchema = z
	.object({
		utmSource: nullableCampaignValue(200),
		utmMedium: nullableCampaignValue(200),
		utmCampaign: nullableCampaignValue(200),
		utmContent: nullableCampaignValue(200),
		utmTerm: nullableCampaignValue(200),
		landingPage: z
			.string()
			.trim()
			.min(1)
			.max(500)
			.regex(/^\/(?!\/)/u, "Landing page must be a site-relative path"),
		referrer: z
			.string()
			.trim()
			.min(1)
			.max(500)
			.url()
			.refine((value) => /^https?:\/\//iu.test(value), {
				message: "Referrer must use HTTP or HTTPS",
			})
			.nullable(),
		partnerCode: z
			.string()
			.trim()
			.min(1)
			.max(100)
			.regex(/^[a-zA-Z0-9_-]+$/u, "Partner code contains invalid characters")
			.nullable(),
	})
	.strict();

export type CampaignAttribution = z.infer<typeof campaignAttributionSchema>;

export function campaignAttributionToInquiryColumns(
	attribution: CampaignAttribution,
) {
	return {
		utm_source: attribution.utmSource,
		utm_medium: attribution.utmMedium,
		utm_campaign: attribution.utmCampaign,
		utm_content: attribution.utmContent,
		utm_term: attribution.utmTerm,
		landing_page: attribution.landingPage,
		referrer: attribution.referrer,
		partner_code: attribution.partnerCode,
	};
}

const UTM_MAX_LENGTH = 200;
const PARTNER_CODE_MAX_LENGTH = 100;

function cleanCampaignValue(value: string | null, maxLength: number) {
	const cleaned = value?.trim();
	return cleaned ? cleaned.slice(0, maxLength) : null;
}

function cleanPartnerCode(value: string | null) {
	const cleaned = cleanCampaignValue(value, PARTNER_CODE_MAX_LENGTH);
	return cleaned && /^[a-zA-Z0-9_-]+$/u.test(cleaned) ? cleaned : null;
}

function cleanReferrer(value: string) {
	if (!value) return null;

	try {
		const url = new URL(value);
		if (url.protocol !== "http:" && url.protocol !== "https:") return null;

		return `${url.origin}${url.pathname}`.slice(0, 500);
	} catch {
		return null;
	}
}

export function buildCampaignAttribution(
	pageUrl: string,
	referrer: string,
): CampaignAttribution {
	const url = new URL(pageUrl);

	return {
		utmSource: cleanCampaignValue(
			url.searchParams.get("utm_source"),
			UTM_MAX_LENGTH,
		),
		utmMedium: cleanCampaignValue(
			url.searchParams.get("utm_medium"),
			UTM_MAX_LENGTH,
		),
		utmCampaign: cleanCampaignValue(
			url.searchParams.get("utm_campaign"),
			UTM_MAX_LENGTH,
		),
		utmContent: cleanCampaignValue(
			url.searchParams.get("utm_content"),
			UTM_MAX_LENGTH,
		),
		utmTerm: cleanCampaignValue(
			url.searchParams.get("utm_term"),
			UTM_MAX_LENGTH,
		),
		landingPage: url.pathname.slice(0, 500) || "/",
		referrer: cleanReferrer(referrer),
		partnerCode: cleanPartnerCode(url.searchParams.get("partner_code")),
	};
}

export function fallbackInquiryAttribution(
	requestReferrer: string | null,
): CampaignAttribution {
	let landingPage = "/inquiry/book";

	if (requestReferrer) {
		try {
			landingPage =
				new URL(requestReferrer).pathname.slice(0, 500) || landingPage;
		} catch {
			// Use the known inquiry route when a malformed Referer header is supplied.
		}
	}

	return {
		utmSource: null,
		utmMedium: null,
		utmCampaign: null,
		utmContent: null,
		utmTerm: null,
		landingPage,
		referrer: null,
		partnerCode: null,
	};
}
