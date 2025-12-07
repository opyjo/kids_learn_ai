import { type NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { full_name, learning_mode } = body;

    // Validate at least one field is provided
    if (!full_name && !learning_mode) {
      return NextResponse.json(
        { error: "At least one field (full_name or learning_mode) is required" },
        { status: 400 }
      );
    }

    // Validate learning_mode if provided
    if (learning_mode && !["self_paced", "tutor_based"].includes(learning_mode)) {
      return NextResponse.json(
        { error: "Invalid learning mode. Must be 'self_paced' or 'tutor_based'" },
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

    // Build update object with only provided fields
    const updateData: Record<string, string> = {
      updated_at: new Date().toISOString(),
    };

    if (full_name && typeof full_name === "string") {
      updateData.full_name = full_name;
    }

    if (learning_mode) {
      updateData.learning_mode = learning_mode;
    }

    // Update user profile
    const { data: profile, error } = await supabase
      .from("profiles")
      .update(updateData)
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
