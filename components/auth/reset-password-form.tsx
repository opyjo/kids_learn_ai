"use client";

import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { resetPasswordAction } from "@/lib/actions/auth";

const SubmitButton = () => {
	const { pending } = useFormStatus();

	return (
		<Button type="submit" className="w-full" disabled={pending}>
			{pending ? (
				<>
					<Loader2 className="mr-2 h-4 w-4 animate-spin" />
					Resetting Password...
				</>
			) : (
				"Reset Password"
			)}
		</Button>
	);
};

export function ResetPasswordForm() {
	const [state, formAction] = useActionState(resetPasswordAction, null);

	return (
		<form action={formAction} className="space-y-4">
			{state?.error && (
				<Alert variant="destructive">
					<AlertDescription>{state.error}</AlertDescription>
				</Alert>
			)}

			<div className="space-y-2">
				<Label htmlFor="password">New Password</Label>
				<PasswordInput
					id="password"
					name="password"
					placeholder="Enter your new password"
					required
					minLength={6}
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="confirmPassword">Confirm New Password</Label>
				<PasswordInput
					id="confirmPassword"
					name="confirmPassword"
					placeholder="Confirm your new password"
					required
					minLength={6}
				/>
			</div>

			<SubmitButton />

			<div className="text-center">
				<Link
					href="/login"
					className="text-sm font-medium text-blue-600 hover:underline"
				>
					Back to Login
				</Link>
			</div>
		</form>
	);
}
