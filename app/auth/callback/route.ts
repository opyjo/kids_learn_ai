import type { EmailOtpType } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
	const requestUrl = new URL(request.url);
	const code = requestUrl.searchParams.get("code");
	const token_hash = requestUrl.searchParams.get("token_hash");
	const type = requestUrl.searchParams.get("type") as EmailOtpType | null;
	const next = requestUrl.searchParams.get("next");
	const origin = requestUrl.origin;

	const supabase = await getSupabaseServerClient();

	// Handle token_hash verification (used by email links like password recovery)
	if (token_hash && type) {
		const { error } = await supabase.auth.verifyOtp({
			token_hash,
			type,
		});

		if (error) {
			console.error("Auth verification error:", error);
			return NextResponse.redirect(
				`${origin}/login?error=${encodeURIComponent(error.message)}`,
			);
		}

		// Redirect to reset password page for recovery flow
		if (type === "recovery") {
			return NextResponse.redirect(`${origin}/reset-password`);
		}
	}

	// Handle code exchange (used by OAuth, magic links, and password recovery with PKCE)
	if (code) {
		const { data: sessionData, error } =
			await supabase.auth.exchangeCodeForSession(code);

		if (error) {
			console.error("Auth callback error:", error);
			// For password reset, redirect to forgot-password with error
			if (next === "/reset-password") {
				return NextResponse.redirect(
					`${origin}/forgot-password?error=${encodeURIComponent("Invalid or expired reset link. Please request a new password reset.")}`,
				);
			}
			return NextResponse.redirect(
				`${origin}/login?error=${encodeURIComponent(error.message)}`,
			);
		}

		// If there's a next parameter, redirect there (e.g., /reset-password)
		if (next) {
			return NextResponse.redirect(`${origin}${next}`);
		}

		// Check user role and redirect accordingly
		if (sessionData.user) {
			const { data: profile } = await supabase
				.from("profiles")
				.select("role")
				.eq("id", sessionData.user.id)
				.single();

			// Redirect admin users to admin dashboard
			if (profile?.role === "admin") {
				return NextResponse.redirect(`${origin}/admin`);
			}
		}
	}

	// Redirect regular users to home page
	return NextResponse.redirect(`${origin}/`);
}
