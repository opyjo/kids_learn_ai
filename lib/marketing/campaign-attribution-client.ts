"use client";

import {
	buildCampaignAttribution,
	CAMPAIGN_ATTRIBUTION_STORAGE_KEY,
	CAMPAIGN_ATTRIBUTION_TTL_MS,
	type CampaignAttribution,
	campaignAttributionSchema,
} from "@/lib/marketing/campaign-attribution";

type StoredCampaignAttribution = {
	attribution: CampaignAttribution;
	expiresAt: number;
};

function readStoredCampaignAttribution(): CampaignAttribution | null {
	if (typeof window === "undefined") return null;

	try {
		const rawValue = window.localStorage.getItem(
			CAMPAIGN_ATTRIBUTION_STORAGE_KEY,
		);
		if (!rawValue) return null;

		const stored = JSON.parse(rawValue) as Partial<StoredCampaignAttribution>;
		if (
			typeof stored.expiresAt !== "number" ||
			stored.expiresAt <= Date.now()
		) {
			window.localStorage.removeItem(CAMPAIGN_ATTRIBUTION_STORAGE_KEY);
			return null;
		}

		const parsed = campaignAttributionSchema.safeParse(stored.attribution);
		if (!parsed.success) {
			window.localStorage.removeItem(CAMPAIGN_ATTRIBUTION_STORAGE_KEY);
			return null;
		}

		return parsed.data;
	} catch {
		return null;
	}
}

export function captureFirstTouchCampaignAttribution() {
	if (typeof window === "undefined") return null;

	const storedAttribution = readStoredCampaignAttribution();
	if (storedAttribution) return storedAttribution;

	const attribution = buildCampaignAttribution(
		window.location.href,
		document.referrer,
	);

	try {
		const stored: StoredCampaignAttribution = {
			attribution,
			expiresAt: Date.now() + CAMPAIGN_ATTRIBUTION_TTL_MS,
		};
		window.localStorage.setItem(
			CAMPAIGN_ATTRIBUTION_STORAGE_KEY,
			JSON.stringify(stored),
		);
	} catch {
		// Storage can be unavailable in privacy-restricted browsers. The current
		// page attribution can still be submitted with the inquiry.
	}

	return attribution;
}

export function getCampaignAttributionForInquiry() {
	return captureFirstTouchCampaignAttribution();
}
