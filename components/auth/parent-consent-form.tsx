"use client";

import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { acceptParentConsentAction } from "@/lib/actions/consent";

function SubmitButton({ consentComplete }: { consentComplete: boolean }) {
	const { pending } = useFormStatus();
	return (
		<Button
			type="submit"
			className="w-full"
			disabled={pending || !consentComplete}
		>
			{pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
			Confirm and continue
		</Button>
	);
}

export function ParentConsentForm({ nextPath }: { nextPath: string }) {
	const [state, action] = useActionState(acceptParentConsentAction, null);
	const [guardianConfirmed, setGuardianConfirmed] = useState(false);
	const [legalAccepted, setLegalAccepted] = useState(false);
	const consentComplete = guardianConfirmed && legalAccepted;

	return (
		<form action={action} className="space-y-4">
			<input type="hidden" name="next" value={nextPath} />
			{state?.error ? (
				<Alert variant="destructive">
					<AlertDescription>{state.error}</AlertDescription>
				</Alert>
			) : null}

			<div className="flex items-start gap-3">
				<Checkbox
					id="consent-guardian-confirmed"
					name="guardianConfirmed"
					required
					checked={guardianConfirmed}
					onCheckedChange={(checked) => setGuardianConfirmed(checked === true)}
				/>
				<Label
					htmlFor="consent-guardian-confirmed"
					className="text-sm font-normal leading-5"
				>
					I confirm that I am at least 18 years old and am the parent, legal
					guardian, or authorized caregiver of the child who will use Kids Learn
					AI.
				</Label>
			</div>

			<div className="flex items-start gap-3">
				<Checkbox
					id="consent-legal-accepted"
					name="legalAccepted"
					required
					checked={legalAccepted}
					onCheckedChange={(checked) => setLegalAccepted(checked === true)}
				/>
				<Label
					htmlFor="consent-legal-accepted"
					className="text-sm font-normal leading-5"
				>
					I have read and agree to the{" "}
					<Link href="/terms" className="text-primary underline">
						Terms of Service
					</Link>{" "}
					and consent to the collection, use, and disclosure of my and my
					child&apos;s information as described in the{" "}
					<Link href="/privacy" className="text-primary underline">
						Privacy Policy
					</Link>
					.
				</Label>
			</div>

			<SubmitButton consentComplete={consentComplete} />
		</form>
	);
}
