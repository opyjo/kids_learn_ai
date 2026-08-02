"use client";

import { useEffect } from "react";
import { captureFirstTouchCampaignAttribution } from "@/lib/marketing/campaign-attribution-client";

export function CampaignAttributionCapture() {
	useEffect(() => {
		captureFirstTouchCampaignAttribution();
	}, []);

	return null;
}
