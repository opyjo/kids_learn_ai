"use server";

import { redirect } from "next/navigation";
import { isCheckedConsent, LEGAL_CONSENT_VERSIONS } from "@/lib/legal/consent";
import { recordLegalConsent } from "@/lib/legal/consent-server";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export type ParentConsentState = { error?: string } | null;

function safeFamilyPath(value: FormDataEntryValue | null) {
	const path = typeof value === "string" ? value : "";
	return path === "/family/setup" || path === "/family" ? path : "/family";
}

export async function acceptParentConsentAction(
	_prevState: ParentConsentState,
	formData: FormData,
): Promise<ParentConsentState> {
	if (
		!isCheckedConsent(formData.get("guardianConfirmed")) ||
		!isCheckedConsent(formData.get("legalAccepted"))
	) {
		return {
			error:
				"Confirm your parent or guardian status and accept the Terms and Privacy Policy to continue.",
		};
	}

	const supabase = await getSupabaseServerClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();
	if (!user) return { error: "Please sign in again to continue." };

	const { data: profile } = await supabase
		.from("profiles")
		.select("role")
		.eq("id", user.id)
		.single();
	if (profile?.role !== "parent") {
		return { error: "Only a parent or guardian account can provide consent." };
	}

	const admin = getSupabaseAdminClient();
	const result = await recordLegalConsent(
		{
			parentUserId: user.id,
			subjectUserId: user.id,
			consentType: "parent_account",
			consentVersion: LEGAL_CONSENT_VERSIONS.parentAccount,
			source: "parent_consent_checkpoint",
		},
		admin || undefined,
	);
	if (result.error) {
		console.error("Failed to record parent consent:", result.error);
		return {
			error: "We could not securely record your consent. Please try again.",
		};
	}

	redirect(safeFamilyPath(formData.get("next")));
}
