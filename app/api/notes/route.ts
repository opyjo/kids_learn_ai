import { type NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";

// GET - Fetch user's notes (optionally for a specific lesson)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const lesson_id = searchParams.get("lesson_id");

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

    let query = supabase
      .from("lesson_notes")
      .select(`
        id,
        lesson_id,
        content,
        created_at,
        updated_at,
        lessons (
          id,
          title,
          course_id,
          courses (
            title,
            slug
          )
        )
      `)
      .eq("user_id", user.id);

    // If lesson_id is provided, filter by it
    if (lesson_id) {
      query = query.eq("lesson_id", lesson_id);
    }

    const { data: notes, error } = await query.order("updated_at", { ascending: false });

    if (error) {
      console.error("Error fetching notes:", error);
      return NextResponse.json(
        { error: "Failed to fetch notes" },
        { status: 500 }
      );
    }

    // If fetching for a specific lesson, return single note or null
    if (lesson_id) {
      return NextResponse.json({ note: notes?.[0] || null });
    }

    return NextResponse.json({ notes });
  } catch (error) {
    console.error("Notes fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST - Create or update a note (upsert)
export async function POST(request: NextRequest) {
  try {
    const { lesson_id, content } = await request.json();

    if (!lesson_id) {
      return NextResponse.json(
        { error: "Lesson ID is required" },
        { status: 400 }
      );
    }

    if (typeof content !== "string") {
      return NextResponse.json(
        { error: "Content must be a string" },
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

    // Upsert - create or update existing note
    const { data: note, error } = await supabase
      .from("lesson_notes")
      .upsert(
        {
          user_id: user.id,
          lesson_id,
          content,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "user_id,lesson_id",
        }
      )
      .select()
      .single();

    if (error) {
      console.error("Error saving note:", error);
      return NextResponse.json(
        { error: "Failed to save note" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      note,
      message: "Note saved successfully",
    });
  } catch (error) {
    console.error("Note save error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE - Delete a note
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
      .from("lesson_notes")
      .delete()
      .eq("user_id", user.id)
      .eq("lesson_id", lesson_id);

    if (error) {
      console.error("Error deleting note:", error);
      return NextResponse.json(
        { error: "Failed to delete note" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Note deleted successfully",
    });
  } catch (error) {
    console.error("Note deletion error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

