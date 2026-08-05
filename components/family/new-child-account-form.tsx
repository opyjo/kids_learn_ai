"use client";

import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { createChildAccount } from "@/lib/actions/family";

function SubmitButton({ consentConfirmed }: { consentConfirmed: boolean }) {
	const { pending } = useFormStatus();
	return (
		<Button
			type="submit"
			disabled={pending || !consentConfirmed}
			className="w-full"
		>
			{pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
			Create child login
		</Button>
	);
}

export function NewChildAccountForm() {
	const [state, action] = useActionState(createChildAccount, null);
	const [consentConfirmed, setConsentConfirmed] = useState(false);

	return (
		<form action={action} className="space-y-4">
			{state?.error && (
				<Alert variant="destructive">
					<AlertDescription>{state.error}</AlertDescription>
				</Alert>
			)}

			<div className="space-y-2">
				<Label htmlFor="childName">Child&apos;s name</Label>
				<Input
					id="childName"
					name="childName"
					maxLength={100}
					autoComplete="off"
					placeholder="Enter your child's name"
					required
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="childUsername">Child&apos;s username</Label>
				<Input
					id="childUsername"
					name="username"
					pattern="[a-z0-9][a-z0-9_-]{2,29}"
					minLength={3}
					maxLength={30}
					autoCapitalize="none"
					autoComplete="off"
					placeholder="e.g. ada-codes"
					required
				/>
				<p className="text-xs text-muted-foreground">
					Use 3–30 lowercase letters, numbers, hyphens, or underscores.
					Usernames are unique.
				</p>
			</div>

			<div className="space-y-2">
				<Label htmlFor="child-login-field">Child&apos;s password</Label>
				<PasswordInput
					id="child-login-field"
					name="childPassword"
					minLength={8}
					autoComplete="new-password"
					placeholder="At least 8 characters"
					required
				/>
				<p className="text-xs text-muted-foreground">
					Your child will sign in with this username and password. No child
					email is required.
				</p>
			</div>

			<div className="flex items-start gap-3 rounded-lg border p-4">
				<Checkbox
					id="childConsent"
					name="childConsent"
					required
					checked={consentConfirmed}
					onCheckedChange={(checked) => setConsentConfirmed(checked === true)}
					aria-describedby="child-consent-description"
				/>
				<Label
					htmlFor="childConsent"
					id="child-consent-description"
					className="text-sm font-normal leading-5"
				>
					I authorize Kids Learn AI to create an account for this child and
					consent to the collection, use, and disclosure of their information to
					provide the learning program, as described in the{" "}
					<Link href="/privacy" className="text-primary underline">
						Privacy Policy
					</Link>
					.
				</Label>
			</div>

			<SubmitButton consentConfirmed={consentConfirmed} />
		</form>
	);
}
