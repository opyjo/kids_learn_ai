import { type NextRequest, NextResponse } from "next/server";
import {
	isTeamFirstGame,
	personalLiveResult,
	updatesLearningFromLiveGame,
	visibleIndividualLeaderboard,
} from "@/lib/quizzes/challenges";
import {
	answersMatch,
	calculateLivePoints,
	displayName,
	sanitizeQuestion,
	sortLeaderboard,
	sortTeamLeaderboard,
} from "@/lib/quizzes/grading";
import { answerInputSchema } from "@/lib/quizzes/schemas";
import {
	getApiContext,
	isCourseEnrolled,
	recordLearning,
} from "@/lib/quizzes/server";
import type {
	LeaderboardEntry,
	PowerUp,
	QuizQuestionRecord,
	TeamLeaderboardEntry,
} from "@/lib/quizzes/types";

type Context = { params: Promise<{ code: string }> };

async function load(code: string) {
	const context = await getApiContext();
	if ("error" in context) return context;
	const { data: game } = await context.db
		.from("quiz_games")
		.select(
			"*, quizzes(id, title, quiz_type, course_id, lesson_id, lessons(course_id))",
		)
		.eq("code", code.toUpperCase())
		.maybeSingle();
	if (!game)
		return {
			error: NextResponse.json({ error: "Game not found" }, { status: 404 }),
		};
	const quiz = Array.isArray(game.quizzes) ? game.quizzes[0] : game.quizzes;
	const lesson = Array.isArray(quiz?.lessons) ? quiz.lessons[0] : quiz?.lessons;
	const courseId = quiz?.course_id || lesson?.course_id;
	if (!quiz || !courseId)
		return {
			error: NextResponse.json(
				{ error: "Game course is unavailable" },
				{ status: 409 },
			),
		};
	const isHost =
		game.host_id === context.user.id && context.profile?.role === "admin";
	const { data: player } = await context.db
		.from("quiz_game_players")
		.select("*")
		.eq("game_id", game.id)
		.eq("user_id", context.user.id)
		.maybeSingle();
	if (!isHost && !(await isCourseEnrolled(context.user.id, courseId))) {
		return {
			error: NextResponse.json(
				{ error: "You are not enrolled in this course" },
				{ status: 403 },
			),
		};
	}
	return { ...context, game, quiz, player, isHost };
}

export async function GET(_request: NextRequest, { params }: Context) {
	const { code } = await params;
	const loaded = await load(code);
	if ("error" in loaded) return loaded.error;
	const [{ data: players }, { data: teams }, { data: questions }] =
		await Promise.all([
			loaded.db
				.from("quiz_game_players")
				.select(
					"id, team_id, display_name, score, correct_answers, total_response_ms, fifty_fifty_available, hint_available, second_chance_available",
				)
				.eq("game_id", loaded.game.id),
			loaded.db
				.from("quiz_game_teams")
				.select("id, name")
				.eq("game_id", loaded.game.id),
			loaded.db
				.from("quiz_questions")
				.select("*")
				.eq("quiz_id", loaded.game.quiz_id)
				.order("order_index"),
		]);
	const question = (questions || [])[loaded.game.current_question_index] as
		| QuizQuestionRecord
		| undefined;
	const leaderboard = sortLeaderboard(
		(players || []).map(
			(player): LeaderboardEntry => ({
				id: player.id,
				displayName: player.display_name,
				points: player.score,
				correctAnswers: player.correct_answers,
				averageResponseMs: player.correct_answers
					? Number(player.total_response_ms) / player.correct_answers
					: Number.MAX_SAFE_INTEGER,
			}),
		),
	);
	const teamLeaderboard = sortTeamLeaderboard(
		(teams || []).map((team): TeamLeaderboardEntry => {
			const members = (players || []).filter(
				(player) => player.team_id === team.id,
			);
			const answers = members.reduce(
				(sum, member) => sum + member.correct_answers,
				0,
			);
			return {
				id: team.id,
				name: team.name,
				members: members.length,
				averagePoints: members.length
					? Math.round(
							members.reduce((sum, member) => sum + member.score, 0) /
								members.length,
						)
					: 0,
				accuracy: members.length ? answers / members.length : 0,
			};
		}),
	);
	const teamFirst = isTeamFirstGame(
		loaded.quiz.quiz_type,
		loaded.game.team_mode ? (teams || []).length : 0,
	);
	const publicLeaderboard = visibleIndividualLeaderboard({
		leaderboard,
		isHost: loaded.isHost,
		teamFirst,
	});
	const publicPlayers =
		teamFirst && !loaded.isHost
			? (players || []).map((player) => ({
					id: player.id,
					team_id: player.team_id,
					display_name: player.display_name,
				}))
			: players || [];
	let review = null;
	if (question && ["review", "finished"].includes(loaded.game.status)) {
		const { data: answers } = await loaded.db
			.from("quiz_game_answers")
			.select("answer, correct")
			.eq("game_id", loaded.game.id)
			.eq("question_id", question.id)
			.eq("attempt_number", 1);
		review = {
			correctAnswer: question.correct_answer,
			explanation: question.explanation,
			answers: answers || [],
		};
	}
	return NextResponse.json({
		game: {
			id: loaded.game.id,
			quizId: loaded.game.quiz_id,
			code: loaded.game.code,
			status: loaded.game.status,
			currentQuestionIndex: loaded.game.current_question_index,
			questionStartedAt: loaded.game.question_started_at,
			title: loaded.quiz.title,
			quizType: loaded.quiz.quiz_type,
			powerupsEnabled: loaded.game.powerups_enabled,
			teamMode: Boolean(loaded.game.team_mode),
			totalQuestions: (questions || []).length,
		},
		isHost: loaded.isHost,
		player: loaded.player,
		players: publicPlayers,
		teams: teams || [],
		leaderboard: publicLeaderboard,
		teamLeaderboard,
		personalResult:
			loaded.game.status === "finished"
				? personalLiveResult(leaderboard, loaded.player?.id)
				: null,
		// Hints are a paid power-up in live games, so they never ride along on
		// the question payload — the powerup action returns them after purchase.
		question: question ? { ...sanitizeQuestion(question), hint: null } : null,
		review,
	});
}

export async function POST(request: NextRequest, { params }: Context) {
	const { code } = await params;
	const loaded = await load(code);
	if ("error" in loaded) return loaded.error;
	const body = await request.json();
	if (body.action === "join") {
		if (loaded.game.status !== "lobby")
			return NextResponse.json(
				{ error: "Game already started" },
				{ status: 409 },
			);
		const { data, error } = await loaded.db
			.from("quiz_game_players")
			.upsert(
				{
					game_id: loaded.game.id,
					user_id: loaded.user.id,
					display_name: displayName(loaded.profile?.full_name),
				},
				{ onConflict: "game_id,user_id" },
			)
			.select("*")
			.single();
		return error
			? NextResponse.json({ error: error.message }, { status: 500 })
			: NextResponse.json({ player: data });
	}
	if (!loaded.player)
		return NextResponse.json({ error: "Join the game first" }, { status: 403 });
	const { data: questions } = await loaded.db
		.from("quiz_questions")
		.select("*")
		.eq("quiz_id", loaded.game.quiz_id)
		.order("order_index");
	const current = (questions || [])[loaded.game.current_question_index] as
		| QuizQuestionRecord
		| undefined;
	if (!current || loaded.game.status !== "question")
		return NextResponse.json({ error: "Answers are closed" }, { status: 409 });
	if (body.action === "powerup") {
		if (!loaded.game.powerups_enabled)
			return NextResponse.json(
				{ error: "Power-ups are disabled for this game" },
				{ status: 409 },
			);
		const kind = body.kind as PowerUp;
		const column =
			kind === "fifty_fifty"
				? "fifty_fifty_available"
				: kind === "hint"
					? "hint_available"
					: "second_chance_available";
		if (!["fifty_fifty", "hint", "second_chance"].includes(kind))
			return NextResponse.json({ error: "Unknown power-up" }, { status: 400 });
		const { data } = await loaded.db
			.from("quiz_game_players")
			.update({ [column]: false })
			.eq("id", loaded.player.id)
			.eq(column, true)
			.select("id")
			.maybeSingle();
		if (!data)
			return NextResponse.json(
				{ error: "Power-up already used" },
				{ status: 409 },
			);
		if (kind === "fifty_fifty" && current.question_type === "multiple_choice") {
			const correct = Array.isArray(current.correct_answer)
				? current.correct_answer[0]
				: current.correct_answer;
			const wrong = current.options
				.filter((option) => option !== correct)
				.slice(0, 1);
			return NextResponse.json({
				remainingOptions: [correct, ...wrong].sort(() => Math.random() - 0.5),
			});
		}
		return NextResponse.json({
			hint: kind === "hint" ? current.hint : null,
			activated: kind,
		});
	}
	if (body.action === "answer") {
		const parsed = answerInputSchema.safeParse(body);
		if (!parsed.success || parsed.data.questionId !== current.id)
			return NextResponse.json({ error: "Invalid answer" }, { status: 400 });
		const attemptNumber = body.attemptNumber === 2 ? 2 : 1;
		const elapsedMs = loaded.game.question_started_at
			? Math.max(
					0,
					Date.now() - new Date(loaded.game.question_started_at).getTime(),
				)
			: current.time_limit_seconds * 1000;
		if (elapsedMs > current.time_limit_seconds * 1000 + 2000)
			return NextResponse.json(
				{ error: "Time is up for this question" },
				{ status: 409 },
			);
		if (attemptNumber === 2) {
			const { data: first } = await loaded.db
				.from("quiz_game_answers")
				.select("correct")
				.eq("game_id", loaded.game.id)
				.eq("player_id", loaded.player.id)
				.eq("question_id", current.id)
				.eq("attempt_number", 1)
				.maybeSingle();
			if (!first || first.correct)
				return NextResponse.json(
					{ error: "Second chance unavailable" },
					{ status: 409 },
				);
			const { data: consumed } = await loaded.db
				.from("quiz_game_players")
				.update({ second_chance_available: false })
				.eq("id", loaded.player.id)
				.eq("second_chance_available", true)
				.select("id")
				.maybeSingle();
			if (!consumed)
				return NextResponse.json(
					{ error: "Second Chance already used" },
					{ status: 409 },
				);
		}
		const correct = answersMatch(parsed.data.answer, current.correct_answer);
		const points = calculateLivePoints({
			correct,
			timeTakenMs: elapsedMs,
			timeLimitSeconds: current.time_limit_seconds,
			powerUp: parsed.data.powerUp,
			isSecondChance: attemptNumber === 2,
		});
		const { data: recorded, error } = await loaded.db.rpc(
			"record_live_quiz_answer",
			{
				p_game_id: loaded.game.id,
				p_player_id: loaded.player.id,
				p_question_id: current.id,
				p_answer: parsed.data.answer,
				p_correct: correct,
				p_points: points,
				p_time_taken_ms: elapsedMs,
				p_power_up: parsed.data.powerUp || null,
				p_attempt_number: attemptNumber,
			},
		);
		if (error)
			return NextResponse.json({ error: error.message }, { status: 500 });
		if (!recorded)
			return NextResponse.json(
				{ error: "Answer already submitted" },
				{ status: 409 },
			);
		if (updatesLearningFromLiveGame(loaded.quiz.quiz_type))
			await recordLearning(loaded.db, loaded.user.id, current.id, correct);
		return NextResponse.json({
			correct,
			points,
			canSecondChance:
				!correct &&
				attemptNumber === 1 &&
				loaded.player.second_chance_available,
		});
	}
	return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}

export async function PATCH(request: NextRequest, { params }: Context) {
	const { code } = await params;
	const loaded = await load(code);
	if ("error" in loaded) return loaded.error;
	if (!loaded.isHost)
		return NextResponse.json({ error: "Host only" }, { status: 403 });
	const body = await request.json();
	if (body.action === "set_powerups") {
		if (loaded.game.status !== "lobby")
			return NextResponse.json(
				{ error: "Power-up settings are locked after the game starts" },
				{ status: 409 },
			);
		const { error } = await loaded.db
			.from("quiz_games")
			.update({ powerups_enabled: Boolean(body.enabled) })
			.eq("id", loaded.game.id);
		return error
			? NextResponse.json({ error: error.message }, { status: 500 })
			: NextResponse.json({ ok: true });
	}
	if (body.action === "set_team_mode") {
		if (loaded.game.status !== "lobby")
			return NextResponse.json(
				{ error: "Team settings are locked after the game starts" },
				{ status: 409 },
			);
		const { error } = await loaded.db
			.from("quiz_games")
			.update({ team_mode: Boolean(body.enabled) })
			.eq("id", loaded.game.id);
		return error
			? NextResponse.json({ error: error.message }, { status: 500 })
			: NextResponse.json({ ok: true });
	}
	if (body.action === "create_team") {
		const name = String(body.name || "")
			.trim()
			.slice(0, 40);
		if (!name)
			return NextResponse.json(
				{ error: "Team name required" },
				{ status: 400 },
			);
		const { error } = await loaded.db
			.from("quiz_game_teams")
			.insert({ game_id: loaded.game.id, name });
		return error
			? NextResponse.json({ error: error.message }, { status: 400 })
			: NextResponse.json({ ok: true });
	}
	if (body.action === "assign_team") {
		const { error } = await loaded.db
			.from("quiz_game_players")
			.update({ team_id: body.teamId || null })
			.eq("id", body.playerId)
			.eq("game_id", loaded.game.id);
		return error
			? NextResponse.json({ error: error.message }, { status: 400 })
			: NextResponse.json({ ok: true });
	}
	const updates: Record<string, unknown> = {};
	if (body.action === "start") {
		const [{ count: teamCount }, { count: unassignedCount }] =
			await Promise.all([
				loaded.db
					.from("quiz_game_teams")
					.select("id", { count: "exact", head: true })
					.eq("game_id", loaded.game.id),
				loaded.db
					.from("quiz_game_players")
					.select("id", { count: "exact", head: true })
					.eq("game_id", loaded.game.id)
					.is("team_id", null),
			]);
		if (loaded.game.team_mode && (teamCount || 0) === 0)
			return NextResponse.json(
				{ error: "Create at least one team before starting team mode" },
				{ status: 409 },
			);
		if (loaded.game.team_mode && (unassignedCount || 0) > 0)
			return NextResponse.json(
				{ error: "Assign every player to a team before starting" },
				{ status: 409 },
			);
		Object.assign(updates, {
			status: "question",
			current_question_index: 0,
			question_started_at: new Date().toISOString(),
		});
	} else if (body.action === "next") {
		const { count } = await loaded.db
			.from("quiz_questions")
			.select("id", { count: "exact", head: true })
			.eq("quiz_id", loaded.game.quiz_id);
		if (loaded.game.current_question_index + 1 >= (count || 0))
			Object.assign(updates, {
				status: "finished",
				ended_at: new Date().toISOString(),
			});
		else
			Object.assign(updates, {
				status: "question",
				current_question_index: loaded.game.current_question_index + 1,
				question_started_at: new Date().toISOString(),
			});
	} else if (body.action === "review") updates.status = "review";
	else if (body.action === "pause") updates.status = "paused";
	else if (body.action === "finish")
		Object.assign(updates, {
			status: "finished",
			ended_at: new Date().toISOString(),
		});
	else return NextResponse.json({ error: "Unknown action" }, { status: 400 });
	const { error } = await loaded.db
		.from("quiz_games")
		.update(updates)
		.eq("id", loaded.game.id);
	return error
		? NextResponse.json({ error: error.message }, { status: 500 })
		: NextResponse.json({ ok: true });
}
