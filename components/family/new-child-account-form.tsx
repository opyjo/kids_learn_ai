"use client";

import { Loader2 } from "lucide-react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { createChildAccount } from "@/lib/actions/family";

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<Button type="submit" disabled={pending} className="w-full">
			{pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
			Create child login
		</Button>
	);
}

export function NewChildAccountForm() {
	const [state, action] = useActionState(createChildAccount, null);

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

			<SubmitButton />
		</form>
	);
}
