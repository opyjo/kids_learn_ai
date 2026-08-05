export const LEGAL_CONSENT_VERSIONS = {
	terms: "2026-08-05",
	privacy: "2026-08-05",
	parentAccount: "2026-08-05",
	childAccount: "2026-08-05",
} as const;

export type LegalConsentType = "parent_account" | "child_account";

export type LegalConsentSource =
	| "email_signup"
	| "google_oauth_signup"
	| "parent_consent_checkpoint"
	| "child_account_creation"
	| "child_account_setup";

export function isCheckedConsent(value: FormDataEntryValue | null) {
	return value === "on" || value === "true";
}
