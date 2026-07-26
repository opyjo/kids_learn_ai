"use client";

import { Loader2 } from "lucide-react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { FamilyLoginReady } from "@/components/family/family-login-ready";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { resetChildPassword } from "@/lib/actions/family";

type ChildOption = {
	id: string;
	full_name: string | null;
	username: string | null;
};

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<Button type="submit" disabled={pending} className="w-full sm:w-auto">
			{pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
			Reset child password
		</Button>
	);
}

export function ChildPasswordResetForm({
	childOptions,
}: {
	childOptions: ChildOption[];
}) {
	const [state, action] = useActionState(resetChildPassword, null);
	const childrenWithUsernames = childOptions.filter((child) => child.username);

	if (state?.success && state.username) {
		return <FamilyLoginReady username={state.username} />;
	}

	if (!childrenWithUsernames.length) {
		return (
			<p className="text-sm text-muted-foreground">
				Create a child username first, then you can reset their password here.
			</p>
		);
	}

	return (
		<form action={action} className="space-y-4">
			{state?.error && (
				<Alert variant="destructive">
					<AlertDescription>{state.error}</AlertDescription>
				</Alert>
			)}

			<div className="space-y-2">
				<Label htmlFor="reset-child">Child</Label>
				<select
					id="reset-child"
					name="childId"
					className="border-input bg-background focus-visible:border-ring focus-visible:ring-ring/50 h-10 w-full rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-[3px]"
					defaultValue=""
					required
				>
					<option value="" disabled>
						Select a child
					</option>
					{childrenWithUsernames.map((child) => (
						<option key={child.id} value={child.id}>
							{child.full_name || child.username} ({child.username})
						</option>
					))}
				</select>
			</div>

			<div className="grid gap-4 sm:grid-cols-2">
				<div className="space-y-2">
					<Label htmlFor="new-child-password">New child password</Label>
					<PasswordInput
						id="new-child-password"
						name="newPassword"
						minLength={8}
						autoComplete="new-password"
						placeholder="At least 8 characters"
						required
					/>
				</div>
				<div className="space-y-2">
					<Label htmlFor="confirm-child-password">
						Confirm new child password
					</Label>
					<PasswordInput
						id="confirm-child-password"
						name="confirmPassword"
						minLength={8}
						autoComplete="new-password"
						placeholder="Enter it again"
						required
					/>
				</div>
			</div>

			<p className="text-xs text-muted-foreground">
				Passwords must be at least 8 characters. For privacy, the new password
				will not be displayed after it is saved.
			</p>

			<SubmitButton />
		</form>
	);
}
