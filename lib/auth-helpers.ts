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

/**
 * Check if a user is enrolled in a specific level (course).
 * Admins automatically have access to all levels.
 * @param userId - The user's ID
 * @param courseId - The course/level ID
 * @returns True if enrolled or admin, false otherwise
 */
export async function checkLevelEnrollment(
  userId: string,
  courseId: string
): Promise<boolean> {
  const supabase = await getSupabaseServerClient();

  // First, check if user is an admin (admins have access to everything)
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .single();

  if (profile?.role === "admin") {
    return true;
  }

  // Otherwise, check for specific enrollment
  const { data, error } = await supabase
    .from("level_enrollments")
    .select("id")
    .eq("student_id", userId)
    .eq("course_id", courseId)
    .single();

  if (error || !data) {
    return false;
  }

  return true;
}

/**
 * Get all enrolled level IDs for a user.
 * @param userId - The user's ID
 * @returns Array of course IDs the user is enrolled in
 */
export async function getUserEnrollments(
  userId: string
): Promise<string[]> {
  const supabase = await getSupabaseServerClient();

  const { data, error } = await supabase
    .from("level_enrollments")
    .select("course_id")
    .eq("student_id", userId);

  if (error || !data) {
    return [];
  }

  return data.map((enrollment) => enrollment.course_id);
}
