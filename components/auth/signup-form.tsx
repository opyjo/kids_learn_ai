"use client";

import { Loader2, Mail, User } from "lucide-react";
import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { trackGoogleAnalyticsEvent } from "@/components/analytics/google-analytics-events";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { PasswordStrength } from "@/components/ui/password-strength";
import { Separator } from "@/components/ui/separator";
import { signupAction } from "@/lib/actions/auth";
import { LEGAL_CONSENT_VERSIONS } from "@/lib/legal/consent";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

const SubmitButton = ({ consentComplete }: { consentComplete: boolean }) => {
	const { pending } = useFormStatus();

	return (
		<Button
			type="submit"
			className="w-full"
			disabled={pending || !consentComplete}
		>
			{pending ? (
				<>
					<Loader2 className="mr-2 h-4 w-4 animate-spin" />
					Creating Parent Account...
				</>
			) : (
				"Create Parent Account"
			)}
		</Button>
	);
};

export function SignupForm({ initialError }: { initialError?: string }) {
	const [state, formAction] = useActionState(signupAction, null);
	const hasTrackedEmailSignup = useRef(false);
	const [googleLoading, setGoogleLoading] = useState(false);
	const [googleError, setGoogleError] = useState<string | null>(null);
	const [password, setPassword] = useState("");
	const [guardianConfirmed, setGuardianConfirmed] = useState(false);
	const [legalAccepted, setLegalAccepted] = useState(false);
	const consentComplete = guardianConfirmed && legalAccepted;

	useEffect(() => {
		if (state?.success && !hasTrackedEmailSignup.current) {
			trackGoogleAnalyticsEvent("sign_up", { method: "email" });
			hasTrackedEmailSignup.current = true;
		}
	}, [state?.success]);

	const handleGoogleSignUp = async () => {
		setGoogleError(null);
		if (!consentComplete) {
			setGoogleError(
				"Confirm your parent or guardian status and accept the legal terms before continuing.",
			);
			return;
		}
		setGoogleLoading(true);

		try {
			const supabase = getSupabaseBrowserClient();

			const { error } = await supabase.auth.signInWithOAuth({
				provider: "google",
				options: {
					redirectTo: `${window.location.origin}/auth/callback?analytics_event=sign_up&analytics_method=google&parent_consent=${encodeURIComponent(LEGAL_CONSENT_VERSIONS.parentAccount)}`,
					queryParams: {
						access_type: "offline",
						prompt: "consent",
					},
				},
			});

			if (error) {
				throw error;
			}
		} catch (err) {
			console.error("Google sign up error:", err);
			setGoogleError("Could not sign up with Google. Please try again.");
			setGoogleLoading(false);
		}
	};

	// Email confirmation required: signup succeeded but there's no session yet.
	if (state?.success) {
		return (
			<Alert>
				<Mail className="h-4 w-4" aria-hidden="true" />
				<AlertDescription>
					<strong>Almost there — check your email!</strong> We've sent a
					confirmation link to finish creating your parent account. Open it to
					continue with your child&apos;s account setup.
				</AlertDescription>
			</Alert>
		);
	}

	return (
		<form action={formAction} className="space-y-4">
			{(state?.error || googleError || initialError) && (
				<Alert variant="destructive">
					<AlertDescription>
						{state?.error || googleError || initialError}
					</AlertDescription>
				</Alert>
			)}

			<div className="space-y-2">
				<Label htmlFor="fullName">Parent or guardian name</Label>
				<div className="relative">
					<User
						className="absolute left-3 top-3 h-4 w-4 text-gray-400 pointer-events-none"
						aria-hidden="true"
					/>
					<Input
						id="fullName"
						name="fullName"
						type="text"
						placeholder="Enter your name"
						className="pl-10 min-h-[44px]"
						required
						autoComplete="name"
						aria-required="true"
						aria-invalid={state?.error ? "true" : "false"}
					/>
				</div>
			</div>

			<div className="space-y-2">
				<Label htmlFor="email">Parent email</Label>
				<div className="relative">
					<Mail
						className="absolute left-3 top-3 h-4 w-4 text-gray-400 pointer-events-none"
						aria-hidden="true"
					/>
					<Input
						id="email"
						name="email"
						type="email"
						placeholder="Enter your email"
						className="pl-10 min-h-[44px]"
						required
						autoComplete="email"
						aria-required="true"
						aria-invalid={state?.error ? "true" : "false"}
					/>
				</div>
			</div>

			<div className="space-y-2">
				<Label htmlFor="password">Password</Label>
				<PasswordInput
					id="password"
					name="password"
					placeholder="Create a password"
					className="min-h-[44px]"
					required
					minLength={8}
					autoComplete="new-password"
					aria-required="true"
					aria-invalid={state?.error ? "true" : "false"}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{password && <PasswordStrength password={password} />}
			</div>

			<div className="space-y-2">
				<Label htmlFor="confirmPassword">Confirm Password</Label>
				<PasswordInput
					id="confirmPassword"
					name="confirmPassword"
					placeholder="Confirm your password"
					className="min-h-[44px]"
					required
					autoComplete="new-password"
					aria-required="true"
					aria-invalid={state?.error ? "true" : "false"}
				/>
			</div>

			<fieldset className="space-y-3 rounded-lg border p-4">
				<legend className="px-1 text-sm font-semibold">
					Parent or guardian consent
				</legend>

				<div className="flex items-start gap-3">
					<Checkbox
						id="guardianConfirmed"
						name="guardianConfirmed"
						required
						checked={guardianConfirmed}
						onCheckedChange={(checked) =>
							setGuardianConfirmed(checked === true)
						}
						aria-describedby="guardian-confirmation-description"
					/>
					<Label
						htmlFor="guardianConfirmed"
						id="guardian-confirmation-description"
						className="text-sm font-normal leading-5"
					>
						I confirm that I am at least 18 years old and am the parent, legal
						guardian, or authorized caregiver of the child who will use Kids
						Learn AI.
					</Label>
				</div>

				<div className="flex items-start gap-3">
					<Checkbox
						id="legalAccepted"
						name="legalAccepted"
						required
						checked={legalAccepted}
						onCheckedChange={(checked) => setLegalAccepted(checked === true)}
						aria-describedby="legal-acceptance-description"
					/>
					<Label
						htmlFor="legalAccepted"
						id="legal-acceptance-description"
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
			</fieldset>

			<SubmitButton consentComplete={consentComplete} />

			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<Separator className="w-full" />
				</div>
				<div className="relative flex justify-center text-xs uppercase">
					<span className="bg-background px-2 text-muted-foreground">
						Or continue with
					</span>
				</div>
			</div>

			<Button
				type="button"
				variant="outline"
				className="w-full min-h-[44px]"
				onClick={handleGoogleSignUp}
				disabled={googleLoading || !consentComplete}
				aria-label="Sign up with Google"
			>
				{googleLoading ? (
					<>
						<Loader2 className="mr-2 h-4 w-4 animate-spin" />
						Signing up with Google...
					</>
				) : (
					<>
						<svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
							<path
								d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
								fill="#4285F4"
							/>
							<path
								d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
								fill="#34A853"
							/>
							<path
								d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
								fill="#FBBC05"
							/>
							<path
								d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
								fill="#EA4335"
							/>
						</svg>
						Continue with Google
					</>
				)}
			</Button>
			<p className="text-center text-xs text-muted-foreground">
				You&apos;ll create your child&apos;s username and password next. Your
				child does not need an email address.
			</p>
		</form>
	);
}
