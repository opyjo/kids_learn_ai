"use client";

import { Loader2 } from "lucide-react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { setupChildAccount } from "@/lib/actions/family";

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<Button type="submit" disabled={pending} className="w-full">
			{pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
			Save family logins
		</Button>
	);
}

export function ChildAccountSetupForm({
	childId,
	childName,
	suggestedUsername,
}: {
	childId: string;
	childName: string;
	suggestedUsername: string;
}) {
	const [state, action] = useActionState(setupChildAccount, null);

	return (
		<form action={action} className="space-y-4">
			<input type="hidden" name="childId" value={childId} />
			{state?.error && (
				<Alert variant="destructive">
					<AlertDescription>{state.error}</AlertDescription>
				</Alert>
			)}

			<div className="space-y-2">
				<Label htmlFor={`username-${childId}`}>
					{childName}&apos;s username
				</Label>
				<Input
					id={`username-${childId}`}
					name="username"
					defaultValue={suggestedUsername}
					pattern="[a-z0-9][a-z0-9_-]{2,29}"
					minLength={3}
					maxLength={30}
					autoComplete="off"
					required
				/>
				<p className="text-xs text-muted-foreground">
					Share this username with {childName}; no student email is needed.
				</p>
			</div>

			<div className="space-y-2">
				<Label htmlFor={`child-password-${childId}`}>
					{childName}&apos;s password
				</Label>
				<PasswordInput
					id={`child-password-${childId}`}
					name="childPassword"
					minLength={8}
					autoComplete="new-password"
					required
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor={`parent-password-${childId}`}>
					Your parent account password
				</Label>
				<PasswordInput
					id={`parent-password-${childId}`}
					name="parentPassword"
					minLength={8}
					autoComplete="new-password"
					required
				/>
				<p className="text-xs text-muted-foreground">
					You will use your email and this password to manage the family.
				</p>
			</div>

			<SubmitButton />
		</form>
	);
}
