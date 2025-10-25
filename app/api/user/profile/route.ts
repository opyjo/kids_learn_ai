import { type NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export async function PUT(request: NextRequest) {
  try {
    const { full_name } = await request.json();

    if (!full_name || typeof full_name !== "string") {
      return NextResponse.json(
        { error: "Full name is required" },
        { status: 400 }
      );
    }

    const supabase = await getSupabaseServerClient();

    // Get current authenticated user
    const {
      data: { user: authUser },
    } = await supabase.auth.getUser();

    if (!authUser) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    // Update user profile
    const { data: profile, error } = await supabase
      .from("profiles")
      .update({
        full_name,
        updated_at: new Date().toISOString(),
      })
      .eq("id", authUser.id)
      .select()
      .single();

    if (error) {
      console.error("Error updating profile:", error);
      return NextResponse.json(
        { error: "Failed to update profile" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      profile,
      message: "Profile updated successfully",
    });
  } catch (error) {
    console.error("Profile update error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
