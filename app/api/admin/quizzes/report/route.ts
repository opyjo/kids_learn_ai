import { type NextRequest, NextResponse } from "next/server";
import { getApiContext } from "@/lib/quizzes/server";

const csvCell = (value: unknown) =>
	`"${String(value ?? "").replaceAll('"', '""')}"`;

export async function GET(request: NextRequest) {
	const context = await getApiContext({ admin: true });
	if ("error" in context) return context.error;
	const [
		attemptResult,
		liveResult,
		playerResult,
		adaptiveQuestionResult,
		adaptiveEventResult,
		adaptiveDiagnosticResult,
	] = await Promise.all([
		context.db
			.from("quiz_attempts")
			.select(
				"id, percentage, passed, completed_at, answers, profiles(full_name, email), quizzes(title, quiz_type)",
			)
			.order("completed_at", { ascending: false }),
		context.db
			.from("quiz_game_answers")
			.select(
				"question_id, player_id, correct, quiz_questions(question, misconception_tag)",
			),
		context.db
			.from("quiz_game_players")
			.select(
				"game_id, team_id, display_name, score, quiz_game_teams(name), quiz_games(code, quizzes(title))",
			),
		context.db
			.from("quiz_questions")
			.select(
				"id, concept_tag, adaptive_difficulty, variant_group, quizzes!inner(course_id, status, lesson_id, lessons(course_id))",
			)
			.eq("quizzes.status", "published"),
		context.db
			.from("adaptive_practice_events")
			.select("confidence, correct, remediation_shown"),
		context.db
			.from("adaptive_practice_diagnostics")
			.select("event_type, reason"),
	]);
	const { data: attempts, error } = attemptResult;
	if (error)
		return NextResponse.json({ error: error.message }, { status: 500 });
	const rows = (attempts || []).map((attempt) => ({
		student:
			attempt.profiles?.[0]?.full_name ||
			attempt.profiles?.[0]?.email ||
			"Student",
		quiz: attempt.quizzes?.[0]?.title || "Quiz",
		type: attempt.quizzes?.[0]?.quiz_type,
		percentage: attempt.percentage,
		mastered: attempt.passed,
		misconceptions: (Array.isArray(attempt.answers) ? attempt.answers : [])
			.map((answer: { misconceptionTag?: string }) => answer.misconceptionTag)
			.filter(Boolean)
			.join("; "),
		completedAt: attempt.completed_at,
	}));
	if (request.nextUrl.searchParams.get("format") === "csv") {
		const header = [
			"Student",
			"Quiz",
			"Type",
			"Percentage",
			"Mastered",
			"Misconceptions",
			"Completed at",
		];
		const csv = [header, ...rows.map((row) => Object.values(row))]
			.map((row) => row.map(csvCell).join(","))
			.join("\n");
		return new NextResponse(csv, {
			headers: {
				"Content-Type": "text/csv; charset=utf-8",
				"Content-Disposition": "attachment; filename=quiz-report.csv",
			},
		});
	}
	const misconceptions = new Map<string, number>();
	for (const row of rows)
		for (const tag of row.misconceptions.split("; ").filter(Boolean))
			misconceptions.set(tag, (misconceptions.get(tag) || 0) + 1);
	const questionStats = new Map<
		string,
		{ question: string; correct: number; total: number }
	>();
	for (const answer of liveResult.data || []) {
		const relation = answer.quiz_questions?.[0];
		const current = questionStats.get(answer.question_id) || {
			question: relation?.question || "Question",
			correct: 0,
			total: 0,
		};
		current.total += 1;
		if (answer.correct) current.correct += 1;
		questionStats.set(answer.question_id, current);
		if (!answer.correct && relation?.misconception_tag)
			misconceptions.set(
				relation.misconception_tag,
				(misconceptions.get(relation.misconception_tag) || 0) + 1,
			);
	}
	const teamGroups = new Map<
		string,
		{ game: string; team: string; total: number; members: number }
	>();
	for (const player of playerResult.data || []) {
		if (!player.team_id) continue;
		const key = `${player.game_id}:${player.team_id}`;
		const current = teamGroups.get(key) || {
			game:
				player.quiz_games?.[0]?.quizzes?.[0]?.title ||
				player.quiz_games?.[0]?.code ||
				"Game",
			team: player.quiz_game_teams?.[0]?.name || "Team",
			total: 0,
			members: 0,
		};
		current.total += player.score;
		current.members += 1;
		teamGroups.set(key, current);
	}
	const coverageGroups = new Map<
		string,
		{
			courseId: string;
			concept: string;
			questions: number;
			variants: Set<string>;
			difficulties: Set<number>;
		}
	>();
	const courseVariants = new Map<string, Set<string>>();
	for (const question of adaptiveQuestionResult.data || []) {
		const quiz = question.quizzes?.[0];
		const courseId = quiz?.course_id || quiz?.lessons?.[0]?.course_id;
		if (!courseId) continue;
		const key = `${courseId}:${question.concept_tag}`;
		const current = coverageGroups.get(key) || {
			courseId,
			concept: question.concept_tag,
			questions: 0,
			variants: new Set<string>(),
			difficulties: new Set<number>(),
		};
		current.questions += 1;
		current.variants.add(question.variant_group);
		current.difficulties.add(question.adaptive_difficulty);
		coverageGroups.set(key, current);
		const variants = courseVariants.get(courseId) || new Set<string>();
		variants.add(question.variant_group);
		courseVariants.set(courseId, variants);
	}
	const coverageGaps = [...coverageGroups.values()]
		.map((group) => ({
			courseId: group.courseId,
			concept: group.concept,
			questions: group.questions,
			variants: group.variants.size,
			missingDifficulties: [1, 2, 3, 4, 5].filter(
				(difficulty) => !group.difficulties.has(difficulty),
			),
		}))
		.filter((group) => group.variants < 2 || group.missingDifficulties.length)
		.sort(
			(a, b) => a.variants - b.variants || a.concept.localeCompare(b.concept),
		);
	const adaptiveEvents = adaptiveEventResult.data || [];
	const diagnostics = adaptiveDiagnosticResult.data || [];
	return NextResponse.json({
		participation: rows.length,
		livePlayers: new Set(
			(playerResult.data || []).map((player) => player.display_name),
		).size,
		masteryRate: rows.length
			? Math.round(
					(rows.filter((row) => row.mastered).length / rows.length) * 100,
				)
			: 0,
		misconceptions: [...misconceptions.entries()].sort((a, b) => b[1] - a[1]),
		questionAccuracy: [...questionStats.values()].map((item) => ({
			question: item.question,
			accuracy: item.total ? Math.round((item.correct / item.total) * 100) : 0,
			responses: item.total,
		})),
		teamResults: [...teamGroups.values()].map((team) => ({
			game: team.game,
			team: team.team,
			members: team.members,
			averageScore: Math.round(team.total / team.members),
		})),
		adaptive: {
			publishedQuestions: (adaptiveQuestionResult.data || []).length,
			coverageGaps,
			insufficientCourses: [...courseVariants.entries()]
				.filter(([, variants]) => variants.size < 10)
				.map(([courseId, variants]) => ({ courseId, variants: variants.size })),
			fallbacks: diagnostics.filter((item) => item.event_type === "fallback")
				.length,
			sessionErrors: diagnostics.filter(
				(item) => item.event_type === "session_error",
			).length,
			remediationRate: adaptiveEvents.length
				? Math.round(
						(adaptiveEvents.filter((event) => event.remediation_shown).length /
							adaptiveEvents.length) *
							100,
					)
				: 0,
			confidence: (["sure", "unsure", "guessing"] as const).map(
				(confidence) => {
					const events = adaptiveEvents.filter(
						(event) => event.confidence === confidence,
					);
					return {
						confidence,
						answers: events.length,
						accuracy: events.length
							? Math.round(
									(events.filter((event) => event.correct).length /
										events.length) *
										100,
								)
							: 0,
					};
				},
			),
		},
		rows,
	});
}
