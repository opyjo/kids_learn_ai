export type AdaptiveRolloutMode = "off" | "shadow" | "on";

export function adaptiveRolloutMode(): AdaptiveRolloutMode {
	if (process.env.ADAPTIVE_PRACTICE_ENABLED === "true") return "on";
	if (process.env.ADAPTIVE_PRACTICE_SHADOW === "true") return "shadow";
	return "off";
}

export function canUseAdaptivePractice(input: {
	mode: AdaptiveRolloutMode;
	isAdmin: boolean;
}): "adaptive" | "shadow" | "fallback" {
	if (input.mode === "on") return "adaptive";
	if (input.mode === "shadow" && input.isAdmin) return "shadow";
	return "fallback";
}
