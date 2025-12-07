import { type NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const supabase = await getSupabaseServerClient();

    // Check if user is authenticated and is admin
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (!profile || profile.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const lessonData = await request.json();

    // Validate required fields
    if (!lessonData.title || !lessonData.description || !lessonData.content) {
      return NextResponse.json(
        { error: "Missing required fields: title, description, and content are required" },
        { status: 400 }
      );
    }

    // Insert the lesson into the database
    const { data: newLesson, error } = await supabase
      .from("lessons")
      .insert({
        title: lessonData.title,
        description: lessonData.description,
        content: lessonData.content,
        difficulty_level: lessonData.difficulty_level || "beginner",
        order_index: lessonData.order_index || 1,
        is_premium: lessonData.is_premium || false,
        starter_code: lessonData.starter_code || "",
        solution_code: lessonData.solution_code || "",
        requires_trinket: lessonData.requires_trinket || false,
        course_id: lessonData.course_id || null,
        created_by: user.id,
      })
      .select()
      .single();

    if (error) {
      console.error("Error creating lesson:", error);
      return NextResponse.json(
        { error: "Failed to create lesson" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      lesson: newLesson,
      message: "Lesson created successfully",
    });
  } catch (error) {
    console.error("Error creating lesson:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const supabase = await getSupabaseServerClient();

    // Check if user is authenticated and is admin
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (!profile || profile.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Fetch all lessons with course info
    const { data: lessons, error } = await supabase
      .from("lessons")
      .select(
        `
        id,
        title,
        description,
        difficulty_level,
        order_index,
        is_premium,
        requires_trinket,
        created_at,
        updated_at,
        courses (
          id,
          title,
          slug
        )
      `
      )
      .order("order_index", { ascending: true });

    if (error) {
      console.error("Error fetching lessons:", error);
      return NextResponse.json(
        { error: "Failed to fetch lessons" },
        { status: 500 }
      );
    }

    return NextResponse.json({ lessons });
  } catch (error) {
    console.error("Error fetching lessons:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
