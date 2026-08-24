import { type NextRequest, NextResponse } from "next/server";
import { safeFilename } from "@/lib/security/sanitize";
import { getSupabaseServerClient } from "@/lib/supabase/server";

const ALLOWED_RESUME_TYPES = new Set([
	"application/pdf",
	"application/msword",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export async function GET(
	_request: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	try {
		const { id } = await params;
		const supabase = await getSupabaseServerClient();

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

		const { data, error } = await supabase
			.from("internship_applications")
			.select("resume_filename, resume_content_type, resume_content")
			.eq("id", id)
			.single();

		if (error || !data) {
			return NextResponse.json(
				{ error: "Application not found" },
				{ status: 404 },
			);
		}

		if (!data.resume_content || !data.resume_filename) {
			return NextResponse.json({ error: "No resume on file" }, { status: 404 });
		}

		const buffer = Buffer.from(data.resume_content, "base64");
		const filename = safeFilename(data.resume_filename, "resume");
		const contentType = ALLOWED_RESUME_TYPES.has(data.resume_content_type ?? "")
			? (data.resume_content_type as string)
			: "application/octet-stream";

		return new NextResponse(buffer, {
			headers: {
				"Content-Type": contentType,
				"Content-Disposition": `attachment; filename="${filename}"`,
				"X-Content-Type-Options": "nosniff",
				"Content-Length": String(buffer.length),
			},
		});
	} catch (_error) {
		return NextResponse.json(
			{ error: "Failed to retrieve resume" },
			{ status: 500 },
		);
	}
}
