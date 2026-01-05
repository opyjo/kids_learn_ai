"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/server";

type ActionState = {
	error?: string;
	success?: boolean;
	message?: string;
} | null;

export async function loginAction(
	_prevState: ActionState,
	formData: FormData,
): Promise<ActionState> {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	// Validation
	if (!email || !password) {
		return { error: "Email and password are required" };
	}

	try {
		const supabase = await getSupabaseServerClient();

		const { data: authData, error: authError } =
			await supabase.auth.signInWithPassword({
				email,
				password,
			});

		if (authError) {
			// Provide user-friendly error messages
			const errorMessage = authError.message.toLowerCase();

			if (
				errorMessage.includes("invalid login credentials") ||
				errorMessage.includes("invalid password") ||
				errorMessage.includes("user not found")
			) {
				return { error: "Invalid email or password. Please try again." };
			}

			if (errorMessage.includes("email not confirmed")) {
				return {
					error:
						"Please verify your email address before signing in. Check your inbox for a confirmation link.",
				};
			}

			if (errorMessage.includes("too many requests")) {
				return {
					error: "Too many login attempts. Please wait a few minutes and try again.",
				};
			}

			// Default to a generic message for security (don't expose internal errors)
			return { error: "Unable to sign in. Please check your credentials and try again." };
		}

		if (!authData.user) {
			return { error: "Failed to sign in" };
		}

		// Fetch user profile to check role
		const { data: profile, error: profileError } = await supabase
			.from("profiles")
			.select("*")
			.eq("id", authData.user.id)
			.single();

		if (profileError) {
			return { error: "Failed to fetch user profile" };
		}

		// Revalidate relevant paths
		revalidatePath("/", "layout");
		revalidatePath("/dashboard");

		// Redirect based on role
		if (profile.role === "admin") {
			redirect("/admin");
		} else {
			redirect("/");
		}
	} catch (error) {
		if (error instanceof Error && error.message === "NEXT_REDIRECT") {
			throw error;
		}
		return { error: "An error occurred during login" };
	}
}

export async function signupAction(
	_prevState: ActionState,
	formData: FormData,
): Promise<ActionState> {
	const fullName = formData.get("fullName") as string;
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;
	const confirmPassword = formData.get("confirmPassword") as string;

	// Validation
	if (!fullName || !email || !password || !confirmPassword) {
		return { error: "All fields are required" };
	}

	if (password !== confirmPassword) {
		return { error: "Passwords do not match" };
	}

	if (password.length < 6) {
		return { error: "Password must be at least 6 characters long" };
	}

	try {
		const supabase = await getSupabaseServerClient();

		// Create auth user
		const { data: authData, error: authError } = await supabase.auth.signUp({
			email,
			password,
			options: {
				data: {
					full_name: fullName,
				},
				emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://kidslearnai.ca"}/auth/callback`,
			},
		});

		if (authError) {
			// Provide user-friendly error messages for signup
			const errorMessage = authError.message.toLowerCase();

			if (
				errorMessage.includes("user already registered") ||
				errorMessage.includes("already been registered") ||
				errorMessage.includes("email already in use")
			) {
				return {
					error:
						"An account with this email already exists. Please sign in instead.",
				};
			}

			if (errorMessage.includes("password")) {
				return {
					error:
						"Password does not meet requirements. Please use at least 6 characters.",
				};
			}

			if (errorMessage.includes("valid email")) {
				return { error: "Please enter a valid email address." };
			}

			// Default error message
			return { error: "Unable to create account. Please try again." };
		}

		if (!authData.user) {
			return { error: "Failed to create user" };
		}

		// Check if email confirmation is required
		// If identities array is empty, user already exists (Supabase doesn't always return an error for this)
		if (authData.user.identities?.length === 0) {
			return {
				error:
					"An account with this email already exists. Please sign in instead.",
			};
		}

		// Check if user needs to confirm email (session will be null if confirmation required)
		if (!authData.session) {
			// Email confirmation is required
			return {
				success: true,
				message: `We've sent a confirmation email to ${email}. Please check your inbox and click the link to activate your account.`,
			};
		}

		// User is automatically logged in (email confirmation disabled)
		// Update profile with full name (profile created by database trigger)
		const { error: profileError } = await supabase
			.from("profiles")
			.update({ full_name: fullName })
			.eq("id", authData.user.id);

		if (profileError) {
			console.error("Failed to update profile:", profileError);
		}

		// Revalidate relevant paths
		revalidatePath("/", "layout");
		revalidatePath("/dashboard");

		// Redirect to home page
		redirect("/");
	} catch (error) {
		if (error instanceof Error && error.message === "NEXT_REDIRECT") {
			throw error;
		}
		return { error: "An error occurred during signup" };
	}
}

export async function signoutAction() {
	try {
		const supabase = await getSupabaseServerClient();

		await supabase.auth.signOut();

		// Revalidate all paths
		revalidatePath("/", "layout");
	} catch (error) {
		console.error("Sign out error:", error);
	}

	// Always redirect to home after signout
	redirect("/");
}
