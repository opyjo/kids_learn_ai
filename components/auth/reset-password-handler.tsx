"use client";

import { useEffect, useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { ResetPasswordForm } from "./reset-password-form";

export function ResetPasswordHandler() {
	const [isValidSession, setIsValidSession] = useState<boolean | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const supabase = getSupabaseBrowserClient();

		// Check if there's a valid session (should be set by auth callback)
		const checkSession = async () => {
			const {
				data: { session },
			} = await supabase.auth.getSession();

			if (session) {
				setIsValidSession(true);
			} else {
				setIsValidSession(false);
				setError(
					"Invalid or expired reset link. Please request a new password reset.",
				);
			}
		};

		// Listen for auth state changes (PASSWORD_RECOVERY event)
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange(async (event, session) => {
			if (event === "PASSWORD_RECOVERY" || (event === "SIGNED_IN" && session)) {
				setIsValidSession(true);
			}
		});

		checkSession();

		return () => {
			subscription.unsubscribe();
		};
	}, []);

	if (isValidSession === null) {
		return (
			<div className="flex items-center justify-center py-8">
				<div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
			</div>
		);
	}

	if (!isValidSession) {
		return (
			<div className="space-y-4">
				<Alert variant="destructive">
					<AlertDescription>{error}</AlertDescription>
				</Alert>
				<div className="text-center">
					<a
						href="/forgot-password"
						className="text-sm font-medium text-blue-600 hover:underline"
					>
						Request a new reset link
					</a>
				</div>
			</div>
		);
	}

	return <ResetPasswordForm />;
}
