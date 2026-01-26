"use client";

import { Loader2, Mail } from "lucide-react";
import Link from "next/link";
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { Separator } from "@/components/ui/separator";
import { loginAction } from "@/lib/actions/auth";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

const SubmitButton = () => {
	const { pending } = useFormStatus();

	return (
		<Button type="submit" className="w-full" disabled={pending}>
			{pending ? (
				<>
					<Loader2 className="mr-2 h-4 w-4 animate-spin" />
					Signing In...
				</>
			) : (
				"Sign In"
			)}
		</Button>
	);
};

export function LoginForm() {
	const [state, formAction] = useActionState(loginAction, null);
	const [googleLoading, setGoogleLoading] = useState(false);

	const handleGoogleSignIn = async () => {
		setGoogleLoading(true);

		try {
			const supabase = getSupabaseBrowserClient();

			const { error } = await supabase.auth.signInWithOAuth({
				provider: "google",
				options: {
					redirectTo: `${window.location.origin}/auth/callback`,
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
			console.error("Google sign in error:", err);
			setGoogleLoading(false);
		}
	};

	return (
		<form action={formAction} className="space-y-4">
			{state?.error && (
				<Alert variant="destructive">
					<AlertDescription>{state.error}</AlertDescription>
				</Alert>
			)}

			<div className="space-y-2">
				<Label htmlFor="email">Email</Label>
				<div className="relative">
					<Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" aria-hidden="true" />
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
						aria-describedby={state?.error ? "email-error" : undefined}
					/>
				</div>
			</div>

			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<Label htmlFor="password">Password</Label>
					<Link
						href="/forgot-password"
						className="text-sm font-medium text-blue-600 hover:underline min-h-[44px] flex items-center"
						aria-label="Forgot password? Reset your password"
					>
						Forgot Password?
					</Link>
				</div>
				<PasswordInput
					id="password"
					name="password"
					placeholder="Enter your password"
					className="min-h-[44px]"
					required
					autoComplete="current-password"
					aria-required="true"
					aria-invalid={state?.error ? "true" : "false"}
					aria-describedby={state?.error ? "password-error" : undefined}
				/>
			</div>

			<SubmitButton />

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
				onClick={handleGoogleSignIn}
				disabled={googleLoading}
				aria-label="Sign in with Google"
			>
				{googleLoading ? (
					<>
						<Loader2 className="mr-2 h-4 w-4 animate-spin" />
						Signing in with Google...
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
		</form>
	);
}
