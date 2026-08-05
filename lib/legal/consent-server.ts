import type { SupabaseClient } from "@supabase/supabase-js";
import type { LegalConsentSource, LegalConsentType } from "@/lib/legal/consent";
import { LEGAL_CONSENT_VERSIONS } from "@/lib/legal/consent";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";

type RecordLegalConsentInput = {
	parentUserId: string;
	subjectUserId: string;
	consentType: LegalConsentType;
	consentVersion: string;
	source: LegalConsentSource;
};

export async function recordLegalConsent(
	input: RecordLegalConsentInput,
	providedAdmin?: SupabaseClient,
) {
	const admin = providedAdmin || getSupabaseAdminClient();
	if (!admin) {
		return { error: "Legal consent storage is not configured" };
	}

	const { error } = await admin.from("legal_consents").upsert(
		{
			parent_user_id: input.parentUserId,
			subject_user_id: input.subjectUserId,
			consent_type: input.consentType,
			terms_version: LEGAL_CONSENT_VERSIONS.terms,
			privacy_version: LEGAL_CONSENT_VERSIONS.privacy,
			consent_version: input.consentVersion,
			source: input.source,
		},
		{
			onConflict:
				"parent_user_id,subject_user_id,consent_type,terms_version,privacy_version,consent_version",
			ignoreDuplicates: true,
		},
	);

	return error ? { error: error.message } : { error: null };
}

export async function hasCurrentParentAccountConsent(
	parentUserId: string,
	providedAdmin?: SupabaseClient,
) {
	const admin = providedAdmin || getSupabaseAdminClient();
	if (!admin) return false;

	const { data, error } = await admin
		.from("legal_consents")
		.select("id")
		.eq("parent_user_id", parentUserId)
		.eq("subject_user_id", parentUserId)
		.eq("consent_type", "parent_account")
		.eq("terms_version", LEGAL_CONSENT_VERSIONS.terms)
		.eq("privacy_version", LEGAL_CONSENT_VERSIONS.privacy)
		.eq("consent_version", LEGAL_CONSENT_VERSIONS.parentAccount)
		.maybeSingle();

	if (error) {
		console.error("Failed to check current parent consent:", error.message);
		return false;
	}

	return Boolean(data);
}
