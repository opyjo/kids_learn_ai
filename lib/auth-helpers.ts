import { redirect } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { User } from "@supabase/supabase-js";

/**
 * Require authentication for a route. Redirects to /login if not authenticated.
 * @returns The authenticated user
 */
export async function requireAuth(): Promise<User> {
  const supabase = await getSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return user;
}

/**
 * Get the authenticated user without redirecting.
 * @returns The authenticated user or null
 */
export async function getAuthUser(): Promise<User | null> {
  try {
    const supabase = await getSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    return user;
  } catch (error) {
    console.error("Error getting auth user:", error);
    return null;
  }
}

/**
 * Require admin role for a route. Redirects to /dashboard if not admin.
 * @returns The authenticated admin user
 */
export async function requireAdmin(): Promise<User> {
  const user = await requireAuth();
  const supabase = await getSupabaseServerClient();

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (!profile || profile.role !== "admin") {
    redirect("/dashboard");
  }

  return user;
}
