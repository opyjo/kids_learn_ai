import type { NextRequest } from "next/server";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/admin/quizzes/generate-challenge/route";
import { generateQuizQuestions } from "@/lib/quizzes/generation";
import { getApiContext } from "@/lib/quizzes/server";

vi.mock("@/lib/quizzes/generation", () => ({
	generateQuizQuestions: vi.fn(),
}));

vi.mock("@/lib/quizzes/server", () => ({
	getApiContext: vi.fn(),
}));

const lessonId = "00000000-0000-4000-8000-000000000101";
const quizId = "00000000-0000-4000-8000-000000000102";

function createDb() {
	const quizInserts: Record<string, unknown>[] = [];
	const questionInserts: unknown[][] = [];
	const db = {
		from: vi.fn((table: string) => {
			const chain: Record<string, ReturnType<typeof vi.fn>> = {};
			chain.select = vi.fn(() => chain);
			chain.eq = vi.fn(() => chain);
			chain.neq = vi.fn(() => chain);
			chain.in = vi.fn(() => chain);
			chain.update = vi.fn(() => chain);
			chain.delete = vi.fn(() => chain);
			chain.order = vi.fn(async () => ({ data: [], error: null }));
			chain.single = vi.fn(async () =>
				table === "lessons"
					? {
							data: {
								id: lessonId,
								title: "Loops",
								description: "Repeat steps",
								content: "A for loop repeats taught instructions.",
								starter_code: "for item in items:\\n    print(item)",
							},
							error: null,
						}
					: { data: { id: quizId }, error: null },
			);
			chain.insert = vi.fn((payload: unknown) => {
				if (table === "quizzes") {
					quizInserts.push(payload as Record<string, unknown>);
					return chain;
				}
				if (table === "quiz_questions") {
					questionInserts.push(payload as unknown[]);
					return Promise.resolve({ error: null });
				}
				return chain;
			});
			return chain;
		}),
	};
	return { db, quizInserts, questionInserts };
}

function request(body: Record<string, unknown>) {
	return new Request("http://localhost/api/admin/quizzes/generate-challenge", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body),
	}) as NextRequest;
}

beforeEach(() => {
	vi.clearAllMocks();
	vi.mocked(generateQuizQuestions).mockResolvedValue({
		questions: Array.from({ length: 8 }, (_, index) => ({
			id: `00000000-0000-4000-8000-${String(index).padStart(12, "0")}`,
			question: `Question ${index}`,
			adaptive_difficulty: 4,
		})) as never,
	});
});

describe("admin lesson challenge generation difficulty", () => {
	it("passes and persists the selected difficulty", async () => {
		const context = createDb();
		vi.mocked(getApiContext).mockResolvedValue({
			db: context.db,
			user: { id: "admin-selected" },
			profile: { id: "admin-selected", role: "admin", full_name: "Admin" },
		} as never);

		const response = await POST(
			request({ lessonId, difficulty: "very_challenging" }),
		);

		expect(response.status).toBe(201);
		expect(generateQuizQuestions).toHaveBeenCalledWith(
			expect.stringContaining("A for loop repeats"),
			8,
			{
				difficulty: "very_challenging",
				enforceDifficultyProfile: true,
			},
		);
		expect(context.quizInserts[0]).toMatchObject({
			quiz_type: "lesson_challenge",
			status: "draft",
			requested_difficulty: "very_challenging",
		});
		expect(await response.json()).toMatchObject({
			id: quizId,
			status: "draft",
			requestedDifficulty: "very_challenging",
		});
	});

	it("defaults omitted difficulty to Standard and rejects unknown values", async () => {
		const context = createDb();
		vi.mocked(getApiContext).mockResolvedValue({
			db: context.db,
			user: { id: "admin-default" },
			profile: { id: "admin-default", role: "admin", full_name: "Admin" },
		} as never);

		const defaultResponse = await POST(request({ lessonId }));
		expect(defaultResponse.status).toBe(201);
		expect(generateQuizQuestions).toHaveBeenLastCalledWith(
			expect.any(String),
			8,
			{
				difficulty: "standard",
				enforceDifficultyProfile: true,
			},
		);
		expect(context.quizInserts[0]).toMatchObject({
			requested_difficulty: "standard",
		});

		const invalidResponse = await POST(
			request({ lessonId, difficulty: "impossible" }),
		);
		expect(invalidResponse.status).toBe(400);
		expect(generateQuizQuestions).toHaveBeenCalledTimes(1);
	});
});
