import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const lessonData = await request.json()

    // TODO: Replace with actual Supabase database operations
    console.log("[v0] Creating new lesson:", lessonData)

    // Validate required fields
    if (!lessonData.title || !lessonData.description || !lessonData.content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Mock lesson creation - replace with actual database insert
    const newLesson = {
      id: Math.floor(Math.random() * 1000) + 1,
      ...lessonData,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    console.log("[v0] Lesson created successfully:", newLesson.id)

    return NextResponse.json({
      lesson: newLesson,
      message: "Lesson created successfully",
    })
  } catch (error) {
    console.error("[v0] Error creating lesson:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  try {
    // TODO: Replace with actual Supabase query
    console.log("[v0] Fetching all lessons for admin")

    // Mock lessons data
    const lessons = [
      {
        id: 1,
        title: "Hello, Python!",
        description: "Learn the basics of Python by writing your first program.",
        difficulty: "beginner",
        order_index: 1,
        is_premium: false,
        created_at: "2024-01-01T00:00:00Z",
      },
      {
        id: 2,
        title: "Variables and Numbers",
        description: "Learn how to store and work with numbers in Python.",
        difficulty: "beginner",
        order_index: 2,
        is_premium: false,
        created_at: "2024-01-02T00:00:00Z",
      },
    ]

    return NextResponse.json({ lessons })
  } catch (error) {
    console.error("[v0] Error fetching lessons:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
