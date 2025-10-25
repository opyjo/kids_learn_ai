"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/server";

type ActionState = {
  error?: string;
  success?: boolean;
} | null;

export async function loginAction(
  prevState: ActionState,
  formData: FormData
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
      return { error: authError.message };
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
  prevState: ActionState,
  formData: FormData
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
      },
    });

    if (authError) {
      return { error: authError.message };
    }

    if (!authData.user) {
      return { error: "Failed to create user" };
    }

    // Profile should be created automatically by database trigger
    // Wait a moment for the trigger to complete
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Update profile with full name if not set by trigger
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
