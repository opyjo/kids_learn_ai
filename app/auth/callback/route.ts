import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
	const requestUrl = new URL(request.url);
	const code = requestUrl.searchParams.get("code");
	const origin = requestUrl.origin;

	if (code) {
		const supabase = await getSupabaseServerClient();

		// Exchange the code for a session
		const { data: sessionData, error } =
			await supabase.auth.exchangeCodeForSession(code);

		if (error) {
			console.error("Auth callback error:", error);
			return NextResponse.redirect(
				`${origin}/login?error=${encodeURIComponent(error.message)}`,
			);
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
