"use client";

import {
	Clock,
	Gamepad2,
	Lightbulb,
	Medal,
	Play,
	Plus,
	RotateCcw,
	ShieldCheck,
	Users,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { QuestionInput } from "@/components/quizzes/question-input";
import { SoloReview } from "@/components/quizzes/solo-review";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import type {
	LeaderboardEntry,
	StudentQuestion,
	TeamLeaderboardEntry,
} from "@/lib/quizzes/types";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

interface Player {
	id: string;
	team_id: string | null;
	display_name: string;
	score: number;
	fifty_fifty_available: boolean;
	hint_available: boolean;
	second_chance_available: boolean;
}
interface Team {
	id: string;
	name: string;
}
interface GameState {
	game: {
		id: string;
		quizId: string;
		code: string;
		status: string;
		currentQuestionIndex: number;
		questionStartedAt: string | null;
		title: string;
		totalQuestions: number;
	};
	isHost: boolean;
	player: Player | null;
	players: Player[];
	teams: Team[];
	leaderboard: LeaderboardEntry[];
	teamLeaderboard: TeamLeaderboardEntry[];
	question: StudentQuestion | null;
	review: {
		correctAnswer: string | string[];
		explanation: string;
		answers: { answer: string | string[]; correct: boolean }[];
	} | null;
}

export function LiveQuizGame({ code }: { code: string }) {
	const [state, setState] = useState<GameState | null>(null);
	const [error, setError] = useState("");
	const [answer, setAnswer] = useState<string | string[]>("");
	const [answerResult, setAnswerResult] = useState<{
		correct: boolean;
		points: number;
		canSecondChance?: boolean;
	} | null>(null);
	const [visibleOptions, setVisibleOptions] = useState<string[] | undefined>();
	const [hint, setHint] = useState("");
	const [activePowerUp, setActivePowerUp] = useState<
		"fifty_fifty" | "hint" | "second_chance" | null
	>(null);
	const [teamName, setTeamName] = useState("");
	const [clockNow, setClockNow] = useState(Date.now());
	const startedAt = useRef(Date.now());
	const load = useCallback(async () => {
		const response = await fetch(`/api/quiz/live/${code}`);
		const data = await response.json();
		if (response.ok) {
			setState(data);
			setError("");
		} else setError(data.error || "Could not load game");
	}, [code]);
	useEffect(() => {
		void load();
		const timer = setInterval(load, 2500);
		return () => clearInterval(timer);
	}, [load]);
	useEffect(() => {
		if (!state?.game.id) return;
		const supabase = getSupabaseBrowserClient();
		const channel = supabase
			.channel(`quiz-${state.game.id}`)
			.on(
				"postgres_changes",
				{
					event: "*",
					schema: "public",
					table: "quiz_games",
					filter: `id=eq.${state.game.id}`,
				},
				load,
			)
			.on(
				"postgres_changes",
				{
					event: "*",
					schema: "public",
					table: "quiz_game_players",
					filter: `game_id=eq.${state.game.id}`,
				},
				load,
			)
			.subscribe();
		return () => {
			void supabase.removeChannel(channel);
		};
	}, [state?.game.id, load]);
	// biome-ignore lint/correctness/useExhaustiveDependencies: question identity is the reset signal
	useEffect(() => {
		setAnswer("");
		setAnswerResult(null);
		setVisibleOptions(undefined);
		setHint("");
		setActivePowerUp(null);
		startedAt.current = Date.now();
	}, [state?.question?.id]);
	useEffect(() => {
		if (state?.game.status !== "question") return;
		setClockNow(Date.now());
		const timer = setInterval(() => setClockNow(Date.now()), 250);
		return () => clearInterval(timer);
	}, [state?.game.status]);
	const post = async (body: Record<string, unknown>) => {
		const response = await fetch(`/api/quiz/live/${code}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
		});
		const data = await response.json();
		if (!response.ok) toast.error(data.error || "Action failed");
		await load();
		return { ok: response.ok, data };
	};
	const hostAction = async (
		action: string,
		extra: Record<string, unknown> = {},
	) => {
		const response = await fetch(`/api/quiz/live/${code}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ action, ...extra }),
		});
		if (!response.ok) toast.error((await response.json()).error);
		await load();
	};
	const activatePowerUp = async (
		kind: "fifty_fifty" | "hint" | "second_chance",
	) => {
		const result = await post({ action: "powerup", kind });
		if (!result.ok) return;
		setActivePowerUp(kind);
		if (result.data.remainingOptions)
			setVisibleOptions(result.data.remainingOptions);
		if (result.data.hint) setHint(result.data.hint);
	};
	const submit = async (secondChance = false) => {
		if (!state?.question) return;
		const submittedAnswer =
			answer === "" && state.question.question_type === "code_ordering"
				? state.question.options
				: answer;
		if (submittedAnswer === "") return;
		const result = await post({
			action: "answer",
			questionId: state.question.id,
			answer: submittedAnswer,
			timeTakenMs: Date.now() - startedAt.current,
			powerUp: secondChance ? "second_chance" : activePowerUp,
			attemptNumber: secondChance ? 2 : 1,
		});
		if (result.ok) setAnswerResult(result.data);
	};
	if (error)
		return (
			<Card>
				<CardContent className="py-12 text-center">
					<p className="text-destructive">{error}</p>
				</CardContent>
			</Card>
		);
	if (!state) return <p className="py-12 text-center">Loading game…</p>;
	const remainingSeconds =
		state.question && state.game.questionStartedAt
			? Math.max(
					0,
					Math.ceil(
						(new Date(state.game.questionStartedAt).getTime() +
							state.question.time_limit_seconds * 1000 -
							clockNow) /
							1000,
					),
				)
			: (state.question?.time_limit_seconds ?? 0);

	return (
		<div className="space-y-6">
			<Card className="overflow-hidden border-purple-200">
				<CardHeader className="bg-purple-600 text-white">
					<div className="flex flex-wrap items-center justify-between gap-4">
						<div>
							<CardDescription className="text-purple-100">
								Live Term Challenge
							</CardDescription>
							<CardTitle className="text-2xl">{state.game.title}</CardTitle>
						</div>
						<div className="rounded-xl bg-white/15 px-5 py-3 text-center">
							<div className="text-xs uppercase">Game code</div>
							<div className="font-mono text-2xl tracking-[0.2em]">
								{state.game.code}
							</div>
						</div>
					</div>
				</CardHeader>
			</Card>
			{!state.isHost && !state.player && (
				<Card>
					<CardContent className="py-10 text-center">
						<Users className="mx-auto mb-3 h-10 w-10 text-purple-600" />
						<h2 className="text-xl font-semibold">Ready to join?</h2>
						<p className="mb-4 text-muted-foreground">
							Your leaderboard name will use your first name and surname
							initial.
						</p>
						<Button onClick={() => post({ action: "join" })}>
							Join the lobby
						</Button>
					</CardContent>
				</Card>
			)}
			{state.game.status === "lobby" && (state.player || state.isHost) && (
				<div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Users className="h-5 w-5" />
								Lobby ({state.players.length})
							</CardTitle>
							<CardDescription>
								{state.isHost
									? "Create teams and assign each student before starting."
									: "Your teacher will start soon."}
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-3">
							{state.players.map((player) => (
								<div
									key={player.id}
									className="flex items-center justify-between rounded-lg border p-3"
								>
									<span>{player.display_name}</span>
									{state.isHost ? (
										<Select
											value={player.team_id || "none"}
											onValueChange={(teamId) =>
												hostAction("assign_team", {
													playerId: player.id,
													teamId: teamId === "none" ? null : teamId,
												})
											}
										>
											<SelectTrigger className="w-40">
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="none">No team</SelectItem>
												{state.teams.map((team) => (
													<SelectItem key={team.id} value={team.id}>
														{team.name}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									) : (
										<Badge variant="outline">
											{state.teams.find((team) => team.id === player.team_id)
												?.name || "Waiting for team"}
										</Badge>
									)}
								</div>
							))}
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Host controls</CardTitle>
						</CardHeader>
						<CardContent className="space-y-3">
							{state.isHost ? (
								<>
									<div className="flex gap-2">
										<Input
											value={teamName}
											onChange={(event) => setTeamName(event.target.value)}
											placeholder="Team name"
										/>
										<Button
											size="icon"
											variant="outline"
											onClick={() => {
												void hostAction("create_team", { name: teamName });
												setTeamName("");
											}}
										>
											<Plus className="h-4 w-4" />
										</Button>
									</div>
									<div className="flex flex-wrap gap-2">
										{state.teams.map((team) => (
											<Badge key={team.id} variant="secondary">
												{team.name}
											</Badge>
										))}
									</div>
									<Button
										className="w-full"
										disabled={!state.players.length}
										onClick={() => hostAction("start")}
									>
										<Play className="mr-2 h-4 w-4" />
										Start game
									</Button>
								</>
							) : (
								<p className="text-sm text-muted-foreground">
									Stay on this screen. The first question will appear
									automatically.
								</p>
							)}
						</CardContent>
					</Card>
				</div>
			)}
			{["question", "review", "paused"].includes(state.game.status) &&
				state.question && (
					<div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
						<Card>
							<CardHeader>
								<div className="flex items-center justify-between">
									<Badge>Question {state.game.currentQuestionIndex + 1}</Badge>
									<span className="flex items-center gap-1 text-sm text-muted-foreground">
										<Clock className="h-4 w-4" />
										{remainingSeconds}s
									</span>
								</div>
								<CardTitle className="pt-3 text-xl">
									{state.question.question}
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								{state.game.status === "question" &&
								state.player &&
								!answerResult ? (
									<>
										<QuestionInput
											question={state.question}
											value={
												answer === "" &&
												state.question.question_type === "code_ordering"
													? state.question.options
													: answer
											}
											onChange={setAnswer}
											visibleOptions={visibleOptions}
										/>
										{hint && (
											<p className="rounded-lg bg-amber-50 p-3 text-sm text-amber-900">
												<Lightbulb className="mr-2 inline h-4 w-4" />
												{hint}
											</p>
										)}
										<div className="flex flex-wrap gap-2">
											<Button
												variant="outline"
												disabled={
													remainingSeconds === 0 ||
													!state.player.fifty_fifty_available ||
													state.question.question_type !== "multiple_choice"
												}
												onClick={() => activatePowerUp("fifty_fifty")}
											>
												50/50
											</Button>
											<Button
												variant="outline"
												disabled={
													remainingSeconds === 0 || !state.player.hint_available
												}
												onClick={() => activatePowerUp("hint")}
											>
												<Lightbulb className="mr-1 h-4 w-4" />
												Hint
											</Button>
											<Button
												disabled={
													remainingSeconds === 0 ||
													(answer === "" &&
														state.question.question_type !== "code_ordering")
												}
												onClick={() =>
													submit(activePowerUp === "second_chance")
												}
											>
												Lock answer
											</Button>
										</div>
									</>
								) : state.game.status === "question" &&
									state.player &&
									answerResult ? (
									<div className="rounded-xl bg-muted p-6 text-center">
										<p className="text-2xl font-bold">
											{answerResult.correct
												? `Correct! +${answerResult.points}`
												: "Not quite"}
										</p>
										{answerResult.canSecondChance &&
											state.player.second_chance_available && (
												<Button
													className="mt-3"
													onClick={() => {
														setActivePowerUp("second_chance");
														setAnswerResult(null);
													}}
												>
													<RotateCcw className="mr-2 h-4 w-4" />
													Use Second Chance
												</Button>
											)}
									</div>
								) : state.review ? (
									<div className="space-y-3">
										<p className="text-xl font-semibold">
											Answer:{" "}
											{Array.isArray(state.review.correctAnswer)
												? state.review.correctAnswer.join(" → ")
												: state.review.correctAnswer}
										</p>
										<p>{state.review.explanation}</p>
										<p className="text-sm text-muted-foreground">
											{
												state.review.answers.filter((item) => item.correct)
													.length
											}{" "}
											of {state.review.answers.length} first answers were
											correct.
										</p>
									</div>
								) : (
									<p className="text-muted-foreground">Waiting for answers…</p>
								)}
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Gamepad2 className="h-5 w-5" />
									Game controls
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-2">
								{state.isHost ? (
									<>
										<Button
											className="w-full"
											variant="outline"
											onClick={() => hostAction("review")}
										>
											Reveal answer
										</Button>
										<Button
											className="w-full"
											onClick={() => hostAction("next")}
										>
											{state.game.currentQuestionIndex + 1 >=
											state.game.totalQuestions
												? "Show final podium"
												: "Next question"}
										</Button>
										<Button
											className="w-full"
											variant="secondary"
											onClick={() => hostAction("pause")}
										>
											Pause
										</Button>
										<Button
											className="w-full"
											variant="destructive"
											onClick={() => hostAction("finish")}
										>
											End game
										</Button>
									</>
								) : (
									<p className="text-sm text-muted-foreground">
										Answers and rankings update automatically.
									</p>
								)}
							</CardContent>
						</Card>
					</div>
				)}
			{state.game.status === "finished" && (
				<Card>
					<CardHeader className="text-center">
						<Medal className="mx-auto h-12 w-12 text-amber-500" />
						<CardTitle className="text-2xl">Final podium</CardTitle>
						<CardDescription>
							Solo review attempts won’t change these official results.
						</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-6 md:grid-cols-2">
						<Leaderboard
							title="Individual leaders"
							entries={state.leaderboard.map((entry) => ({
								id: entry.id,
								label: entry.displayName,
								score: entry.points,
							}))}
						/>
						<Leaderboard
							title="Team leaders"
							entries={state.teamLeaderboard.map((entry) => ({
								id: entry.id,
								label: entry.name,
								score: entry.averagePoints,
							}))}
						/>
					</CardContent>
					<div className="px-6 pb-6 text-center">
						<SoloReview quizId={state.game.quizId} />
					</div>
				</Card>
			)}
			{state.game.status !== "lobby" && (
				<div className="grid gap-4 md:grid-cols-2">
					<Leaderboard
						title="Individual leaderboard"
						entries={state.leaderboard.map((entry) => ({
							id: entry.id,
							label: entry.displayName,
							score: entry.points,
						}))}
					/>
					<Leaderboard
						title="Team leaderboard (average)"
						entries={state.teamLeaderboard.map((entry) => ({
							id: entry.id,
							label: entry.name,
							score: entry.averagePoints,
						}))}
					/>
				</div>
			)}
		</div>
	);
}

function Leaderboard({
	title,
	entries,
}: {
	title: string;
	entries: { id: string; label: string; score: number }[];
}) {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center gap-2 text-lg">
					<ShieldCheck className="h-5 w-5" />
					{title}
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-2">
				{entries.length ? (
					entries.slice(0, 10).map((entry, index) => (
						<div
							key={entry.id}
							className="flex justify-between rounded-lg bg-muted/50 p-2"
						>
							<span>
								{index + 1}. {entry.label}
							</span>
							<strong>{entry.score}</strong>
						</div>
					))
				) : (
					<p className="text-sm text-muted-foreground">No scores yet.</p>
				)}
			</CardContent>
		</Card>
	);
}
