import { type NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";

// GET - Fetch user's bookmarks
export async function GET() {
  try {
    const supabase = await getSupabaseServerClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    const { data: bookmarks, error } = await supabase
      .from("bookmarks")
      .select(`
        id,
        lesson_id,
        created_at,
        lessons (
          id,
          title,
          description,
          difficulty_level,
          course_id,
          courses (
            title,
            slug
          )
        )
      `)
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching bookmarks:", error);
      return NextResponse.json(
        { error: "Failed to fetch bookmarks" },
        { status: 500 }
      );
    }

    return NextResponse.json({ bookmarks });
  } catch (error) {
    console.error("Bookmarks fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST - Create a bookmark
export async function POST(request: NextRequest) {
  try {
    const { lesson_id } = await request.json();

    if (!lesson_id) {
      return NextResponse.json(
        { error: "Lesson ID is required" },
        { status: 400 }
      );
    }

    const supabase = await getSupabaseServerClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    // Check if bookmark already exists
    const { data: existing } = await supabase
      .from("bookmarks")
      .select("id")
      .eq("user_id", user.id)
      .eq("lesson_id", lesson_id)
      .single();

    if (existing) {
      return NextResponse.json(
        { error: "Bookmark already exists", bookmark: existing },
        { status: 409 }
      );
    }

    const { data: bookmark, error } = await supabase
      .from("bookmarks")
      .insert({
        user_id: user.id,
        lesson_id,
      })
      .select()
      .single();

    if (error) {
      console.error("Error creating bookmark:", error);
      return NextResponse.json(
        { error: "Failed to create bookmark" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      bookmark,
      message: "Bookmark created successfully",
    });
  } catch (error) {
    console.error("Bookmark creation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE - Remove a bookmark
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const lesson_id = searchParams.get("lesson_id");

    if (!lesson_id) {
      return NextResponse.json(
        { error: "Lesson ID is required" },
        { status: 400 }
      );
    }

    const supabase = await getSupabaseServerClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    const { error } = await supabase
      .from("bookmarks")
      .delete()
      .eq("user_id", user.id)
      .eq("lesson_id", lesson_id);

    if (error) {
      console.error("Error deleting bookmark:", error);
      return NextResponse.json(
        { error: "Failed to delete bookmark" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Bookmark deleted successfully",
    });
  } catch (error) {
    console.error("Bookmark deletion error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

