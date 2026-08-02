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
import {
	boundedExtraSeconds,
	canRunLiveHostAction,
	isLivePlayerConnected,
	type LiveGameStatus,
	type LiveHostAction,
	liveQuestionDeadline,
	remainingQuestionMs,
	summarizeLiveAnswers,
} from "@/lib/quizzes/live-game";
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
	const { data: initialGame } = await context.db
		.from("quiz_games")
		.select(
			"*, quizzes(id, title, quiz_type, course_id, lesson_id, lessons(course_id))",
		)
		.eq("code", code.toUpperCase())
		.maybeSingle();
	let game = initialGame;
	if (!game)
		return {
			error: NextResponse.json({ error: "Game not found" }, { status: 404 }),
		};
	if (
		game.status === "question" &&
		game.auto_reveal &&
		game.question_deadline_at &&
		new Date(game.question_deadline_at).getTime() <= Date.now()
	) {
		const { error: reconcileError } = await context.db.rpc(
			"reconcile_live_quiz_deadline",
			{ p_game_id: game.id },
		);
		if (reconcileError)
			console.error(
				"Could not reconcile live-game deadline:",
				reconcileError.message,
			);
		if (!reconcileError) {
			const { data: refreshedGame } = await context.db
				.from("quiz_games")
				.select(
					"*, quizzes(id, title, quiz_type, course_id, lesson_id, lessons(course_id))",
				)
				.eq("id", game.id)
				.maybeSingle();
			if (refreshedGame) game = refreshedGame;
		}
	}
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
					"id, team_id, display_name, score, correct_answers, total_response_ms, fifty_fifty_available, hint_available, second_chance_available, last_seen_at",
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
	const nextQuestion = (questions || [])[
		loaded.game.current_question_index + 1
	] as QuizQuestionRecord | undefined;
	let firstAnswers: {
		player_id: string;
		answer: string | string[];
		correct: boolean;
	}[] = [];
	if (
		question &&
		(loaded.isHost || ["review", "finished"].includes(loaded.game.status))
	) {
		const { data } = await loaded.db
			.from("quiz_game_answers")
			.select("player_id, answer, correct")
			.eq("game_id", loaded.game.id)
			.eq("question_id", question.id)
			.eq("attempt_number", 1);
		firstAnswers = data || [];
	}
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
	const publicPlayers = !loaded.isHost
		? (players || []).map((player) => ({
				id: player.id,
				team_id: player.team_id,
				display_name: player.display_name,
			}))
		: players || [];
	let review = null;
	if (question && ["review", "finished"].includes(loaded.game.status)) {
		review = {
			correctAnswer: question.correct_answer,
			explanation: question.explanation,
			answers: firstAnswers.map(({ answer, correct }) => ({ answer, correct })),
		};
	}
	const answerSummary = summarizeLiveAnswers(firstAnswers);
	const hostMetrics = loaded.isHost
		? {
				totalPlayers: (players || []).length,
				connectedPlayers: (players || []).filter((player) =>
					isLivePlayerConnected(player.last_seen_at),
				).length,
				answeredCount: answerSummary.answeredCount,
				distribution: answerSummary.distribution,
				hostLastSeenAt: loaded.game.host_last_seen_at,
			}
		: null;
	return NextResponse.json({
		game: {
			id: loaded.game.id,
			quizId: loaded.game.quiz_id,
			code: loaded.game.code,
			status: loaded.game.status,
			currentQuestionIndex: loaded.game.current_question_index,
			questionStartedAt: loaded.game.question_started_at,
			questionDeadlineAt: loaded.game.question_deadline_at,
			pausedRemainingMs: loaded.game.paused_remaining_ms,
			stateVersion: Number(loaded.game.state_version || 0),
			title: loaded.quiz.title,
			quizType: loaded.quiz.quiz_type,
			powerupsEnabled: loaded.game.powerups_enabled,
			teamMode: Boolean(loaded.game.team_mode),
			autoReveal: Boolean(loaded.game.auto_reveal),
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
		// The host steers the class while answers are still hidden from
		// students, so only they receive the answer key.
		hostAnswerKey:
			loaded.isHost && question
				? {
						correctAnswer: question.correct_answer,
						explanation: question.explanation,
					}
				: null,
		// A one-line preview so the host can set up context before advancing.
		hostNextQuestion:
			loaded.isHost && nextQuestion
				? {
						question: nextQuestion.question,
						questionType: nextQuestion.question_type,
					}
				: null,
		review,
		hostMetrics,
	});
}

export async function POST(request: NextRequest, { params }: Context) {
	const { code } = await params;
	const loaded = await load(code);
	if ("error" in loaded) return loaded.error;
	const body = await request.json();
	if (body.action === "heartbeat") {
		if (!loaded.isHost && !loaded.player)
			return NextResponse.json(
				{ error: "Join the game first" },
				{ status: 403 },
			);
		const seenAt = new Date().toISOString();
		const { error } = loaded.isHost
			? await loaded.db
					.from("quiz_games")
					.update({ host_last_seen_at: seenAt })
					.eq("id", loaded.game.id)
					.eq("host_id", loaded.user.id)
			: await loaded.db
					.from("quiz_game_players")
					.update({ last_seen_at: seenAt })
					.eq("id", loaded.player?.id)
					.eq("game_id", loaded.game.id);
		return error
			? NextResponse.json({ error: error.message }, { status: 500 })
			: NextResponse.json({ ok: true, serverTime: seenAt });
	}
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
		const now = Date.now();
		const deadlineAt = loaded.game.question_deadline_at
			? new Date(loaded.game.question_deadline_at).getTime()
			: null;
		if (deadlineAt && now > deadlineAt + 2000)
			return NextResponse.json(
				{ error: "Time is up for this question" },
				{ status: 409 },
			);
		const elapsedMs = deadlineAt
			? Math.max(0, current.time_limit_seconds * 1000 - (deadlineAt - now))
			: loaded.game.question_started_at
				? Math.max(0, now - new Date(loaded.game.question_started_at).getTime())
				: current.time_limit_seconds * 1000;
		if (!deadlineAt && elapsedMs > current.time_limit_seconds * 1000 + 2000)
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
	const currentVersion = Number(loaded.game.state_version || 0);
	const currentStatus = loaded.game.status as LiveGameStatus;
	const staleResponse = () =>
		NextResponse.json(
			{
				error:
					"The game changed on another screen. The latest state has been restored.",
			},
			{ status: 409 },
		);
	const updateVersioned = async (
		updates: Record<string, unknown>,
		statuses: LiveGameStatus[],
	) => {
		if (body.version !== undefined && Number(body.version) !== currentVersion)
			return staleResponse();
		const { data, error } = await loaded.db
			.from("quiz_games")
			.update({ ...updates, state_version: currentVersion + 1 })
			.eq("id", loaded.game.id)
			.eq("state_version", currentVersion)
			.in("status", statuses)
			.select("id")
			.maybeSingle();
		if (error)
			return NextResponse.json({ error: error.message }, { status: 500 });
		if (!data) return staleResponse();
		return NextResponse.json({ ok: true, stateVersion: currentVersion + 1 });
	};

	if (body.action === "set_powerups") {
		if (currentStatus !== "lobby")
			return NextResponse.json(
				{ error: "Power-up settings are locked after the game starts" },
				{ status: 409 },
			);
		return updateVersioned({ powerups_enabled: Boolean(body.enabled) }, [
			"lobby",
		]);
	}
	if (body.action === "set_auto_reveal") {
		if (currentStatus === "finished")
			return NextResponse.json(
				{ error: "This game has finished" },
				{ status: 409 },
			);
		return updateVersioned({ auto_reveal: Boolean(body.enabled) }, [
			"lobby",
			"question",
			"review",
			"paused",
		]);
	}
	if (body.action === "set_team_mode") {
		if (currentStatus !== "lobby")
			return NextResponse.json(
				{ error: "Team settings are locked after the game starts" },
				{ status: 409 },
			);
		return updateVersioned({ team_mode: Boolean(body.enabled) }, ["lobby"]);
	}
	if (body.action === "create_team") {
		if (currentStatus !== "lobby")
			return NextResponse.json(
				{ error: "Teams are locked after the game starts" },
				{ status: 409 },
			);
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
		if (currentStatus !== "lobby")
			return NextResponse.json(
				{ error: "Team assignments are locked after the game starts" },
				{ status: 409 },
			);
		const teamId = body.teamId ? String(body.teamId) : null;
		if (teamId) {
			const { data: team } = await loaded.db
				.from("quiz_game_teams")
				.select("id")
				.eq("id", teamId)
				.eq("game_id", loaded.game.id)
				.maybeSingle();
			if (!team)
				return NextResponse.json(
					{ error: "Select a team from this game" },
					{ status: 400 },
				);
		}
		const { error } = await loaded.db
			.from("quiz_game_players")
			.update({ team_id: teamId })
			.eq("id", body.playerId)
			.eq("game_id", loaded.game.id);
		return error
			? NextResponse.json({ error: error.message }, { status: 400 })
			: NextResponse.json({ ok: true });
	}

	const action = body.action as LiveHostAction;
	if (
		![
			"start",
			"review",
			"pause",
			"resume",
			"reopen",
			"next",
			"skip",
			"add_time",
			"finish",
		].includes(action)
	)
		return NextResponse.json({ error: "Unknown action" }, { status: 400 });
	if (!canRunLiveHostAction(currentStatus, action))
		return NextResponse.json(
			{
				error: `Cannot ${action.replace("_", " ")} while the game is ${currentStatus}`,
			},
			{ status: 409 },
		);

	const { data: questions, error: questionError } = await loaded.db
		.from("quiz_questions")
		.select("id, time_limit_seconds")
		.eq("quiz_id", loaded.game.quiz_id)
		.order("order_index");
	if (questionError)
		return NextResponse.json({ error: questionError.message }, { status: 500 });
	const orderedQuestions = questions || [];
	const currentQuestion = orderedQuestions[loaded.game.current_question_index];

	if (action === "start") {
		const [
			{ count: teamCount },
			{ count: unassignedCount },
			{ count: playerCount },
		] = await Promise.all([
			loaded.db
				.from("quiz_game_teams")
				.select("id", { count: "exact", head: true })
				.eq("game_id", loaded.game.id),
			loaded.db
				.from("quiz_game_players")
				.select("id", { count: "exact", head: true })
				.eq("game_id", loaded.game.id)
				.is("team_id", null),
			loaded.db
				.from("quiz_game_players")
				.select("id", { count: "exact", head: true })
				.eq("game_id", loaded.game.id),
		]);
		if ((playerCount || 0) === 0)
			return NextResponse.json(
				{ error: "At least one student must join before starting" },
				{ status: 409 },
			);
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
		const firstQuestion = orderedQuestions[0];
		if (!firstQuestion)
			return NextResponse.json(
				{ error: "This challenge has no questions" },
				{ status: 409 },
			);
		const now = new Date().toISOString();
		return updateVersioned(
			{
				status: "question",
				current_question_index: 0,
				question_started_at: now,
				question_deadline_at: liveQuestionDeadline(
					firstQuestion.time_limit_seconds,
				),
				paused_remaining_ms: null,
				host_last_seen_at: now,
			},
			["lobby"],
		);
	}

	if (action === "review")
		return updateVersioned(
			{
				status: "review",
				question_deadline_at: null,
				paused_remaining_ms: null,
			},
			["question"],
		);

	if (action === "pause")
		return updateVersioned(
			{
				status: "paused",
				paused_remaining_ms: remainingQuestionMs(
					loaded.game.question_deadline_at,
				),
				question_deadline_at: null,
			},
			["question"],
		);

	if (action === "resume") {
		if (!currentQuestion)
			return NextResponse.json(
				{ error: "Current question is unavailable" },
				{ status: 409 },
			);
		const remainingMs = Math.max(
			1000,
			Number(loaded.game.paused_remaining_ms) ||
				currentQuestion.time_limit_seconds * 1000,
		);
		return updateVersioned(
			{
				status: "question",
				question_deadline_at: new Date(Date.now() + remainingMs).toISOString(),
				paused_remaining_ms: null,
			},
			["paused"],
		);
	}

	if (action === "reopen") {
		const seconds = boundedExtraSeconds(body.seconds);
		return updateVersioned(
			{
				status: "question",
				question_started_at: new Date().toISOString(),
				question_deadline_at: liveQuestionDeadline(seconds),
				paused_remaining_ms: null,
			},
			["review"],
		);
	}

	if (action === "add_time") {
		const extraMs = boundedExtraSeconds(body.seconds) * 1000;
		if (currentStatus === "paused")
			return updateVersioned(
				{
					paused_remaining_ms:
						Number(loaded.game.paused_remaining_ms || 0) + extraMs,
				},
				["paused"],
			);
		const baseDeadline = Math.max(
			Date.now(),
			loaded.game.question_deadline_at
				? new Date(loaded.game.question_deadline_at).getTime()
				: Date.now(),
		);
		return updateVersioned(
			{
				question_deadline_at: new Date(baseDeadline + extraMs).toISOString(),
			},
			["question"],
		);
	}

	if (action === "next" || action === "skip") {
		const nextIndex = loaded.game.current_question_index + 1;
		const nextQuestion = orderedQuestions[nextIndex];
		if (!nextQuestion)
			return updateVersioned(
				{
					status: "finished",
					ended_at: new Date().toISOString(),
					question_deadline_at: null,
					paused_remaining_ms: null,
				},
				action === "next" ? ["review"] : ["question", "paused"],
			);
		const now = new Date().toISOString();
		return updateVersioned(
			{
				status: "question",
				current_question_index: nextIndex,
				question_started_at: now,
				question_deadline_at: liveQuestionDeadline(
					nextQuestion.time_limit_seconds,
				),
				paused_remaining_ms: null,
			},
			action === "next" ? ["review"] : ["question", "paused"],
		);
	}

	return updateVersioned(
		{
			status: "finished",
			ended_at: new Date().toISOString(),
			question_deadline_at: null,
			paused_remaining_ms: null,
		},
		["lobby", "question", "review", "paused"],
	);
}
