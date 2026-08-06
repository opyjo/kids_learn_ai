"use client";

import {
	ArrowLeft,
	ArrowRight,
	BadgeCheck,
	BookOpen,
	BrainCircuit,
	Check,
	Clock3,
	Lightbulb,
	RotateCcw,
	SearchCheck,
	Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ConfettiBurst } from "@/components/stories/confetti-burst";
import { NextCaseCountdown } from "@/components/stories/next-case-countdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type PublishedStoryIssue, storyIssues } from "@/lib/story-club";
import {
	readStoryProgress,
	writeStoryProgress,
} from "@/lib/story-club-progress";
import { cn } from "@/lib/utils";

const speakerStyles = {
	Maya: "border-orange-200 bg-orange-50 text-orange-950 dark:border-orange-900/60 dark:bg-orange-950/30 dark:text-orange-100",
	Leo: "border-blue-200 bg-blue-50 text-blue-950 dark:border-blue-900/60 dark:bg-blue-950/30 dark:text-blue-100",
	Pixel:
		"border-teal-200 bg-teal-50 text-teal-950 dark:border-teal-900/60 dark:bg-teal-950/30 dark:text-teal-100",
} as const;

export function StoryReader({ story }: { story: PublishedStoryIssue }) {
	const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
	const [challengeAnswer, setChallengeAnswer] = useState<string | null>(null);
	const [foundClueIds, setFoundClueIds] = useState<string[]>([]);
	const [pixelQuestionId, setPixelQuestionId] = useState<string | null>(null);
	const [pixelVerdict, setPixelVerdict] = useState<boolean | null>(null);
	// Only true for a fresh unlock this session, so restored progress
	// doesn't replay the confetti on every visit.
	const [celebrating, setCelebrating] = useState(false);

	// Restore after mount so server and first client render stay in sync.
	useEffect(() => {
		const saved = readStoryProgress(story.slug);
		if (
			saved.choice &&
			story.choices.some((item) => item.id === saved.choice)
		) {
			setSelectedChoice(saved.choice);
		}
		if (
			saved.answer &&
			story.challenge.options.some((item) => item.id === saved.answer)
		) {
			setChallengeAnswer(saved.answer);
		}
		if (story.clueHunt && saved.clues) {
			const validClues = new Set(
				story.clueHunt.hotspots.map((hotspot) => hotspot.id),
			);
			setFoundClueIds(saved.clues.filter((clue) => validClues.has(clue)));
		}
	}, [story]);

	useEffect(() => {
		if (!selectedChoice && !challengeAnswer && foundClueIds.length === 0)
			return;
		writeStoryProgress(story.slug, {
			choice: selectedChoice ?? undefined,
			answer: challengeAnswer ?? undefined,
			clues: foundClueIds.length > 0 ? foundClueIds : undefined,
		});
	}, [story.slug, selectedChoice, challengeAnswer, foundClueIds]);

	const choice = story.choices.find((item) => item.id === selectedChoice);
	const challengeOption = story.challenge.options.find(
		(item) => item.id === challengeAnswer,
	);
	const pixelQuestion = story.askPixel?.questions.find(
		(item) => item.id === pixelQuestionId,
	);
	const allCluesFound =
		story.clueHunt !== undefined &&
		foundClueIds.length === story.clueHunt.hotspots.length;
	const pixelVerdictCorrect =
		pixelVerdict !== null && pixelVerdict === story.askPixel?.verdict.isTrue;
	const storyProgress = challengeOption?.correct
		? 100
		: challengeOption
			? 75
			: selectedChoice
				? 50
				: 25;
	const nextIssue = storyIssues.find(
		(issue) =>
			issue.status === "upcoming" &&
			issue.issueNumber === story.issueNumber + 1,
	);

	return (
		<article className="pb-20">
			{celebrating && challengeOption?.correct ? <ConfettiBurst /> : null}
			<header className="border-b border-border/70 bg-[#fff9ec] dark:bg-[#171d2c]">
				<div className="mx-auto max-w-6xl px-4 pb-12 pt-6 sm:pb-16 sm:pt-10">
					<Link
						href="/stories"
						className="mb-6 inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold text-muted-foreground transition hover:bg-black/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:hover:bg-white/10"
					>
						<ArrowLeft className="h-4 w-4" aria-hidden="true" />
						Back to Story Club
					</Link>

					<div className="grid items-center gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
						<div>
							<div className="flex flex-wrap gap-2">
								<Badge className="rounded-full bg-indigo-600 px-3 py-1 text-white">
									Issue {String(story.issueNumber).padStart(2, "0")}
								</Badge>
								<Badge
									variant="outline"
									className="rounded-full border-indigo-200 bg-white/70 px-3 py-1 text-indigo-800 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-200"
								>
									{story.season}
								</Badge>
							</div>
							<p className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.2em] text-orange-700 dark:text-orange-300">
								This week&apos;s case
							</p>
							<h1 className="mt-3 text-balance text-4xl font-black leading-[1.03] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
								{story.title}
							</h1>
							<p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-slate-700 dark:text-slate-300">
								{story.description}
							</p>
							<div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-slate-600 dark:text-slate-300">
								<span className="inline-flex items-center gap-2">
									<Clock3 className="h-4 w-4 text-indigo-600" />
									{story.readingMinutes} minute adventure
								</span>
								<span className="inline-flex items-center gap-2">
									<BrainCircuit className="h-4 w-4 text-orange-600" />
									{story.concept}
								</span>
							</div>
						</div>

						<div className="relative overflow-hidden rounded-[2rem] border-[6px] border-slate-900 bg-slate-900 shadow-[12px_14px_0_0_#f6b73c] dark:border-slate-100 dark:shadow-[12px_14px_0_0_#6941c6]">
							<Image
								src={story.coverImage}
								alt={story.coverAlt}
								width={1672}
								height={941}
								priority
								sizes="(max-width: 1024px) 100vw, 58vw"
								className="h-auto w-full"
							/>
						</div>
					</div>
				</div>
			</header>

			<div className="mx-auto max-w-4xl px-4 pt-12 sm:pt-16">
				<div
					className="mb-10 flex items-center justify-center gap-2"
					role="progressbar"
					aria-label="Story progress"
					aria-valuemin={0}
					aria-valuemax={100}
					aria-valuenow={storyProgress}
				>
					{[1, 2, 3, 4].map((step) => (
						<span
							key={step}
							className={cn(
								"h-2.5 rounded-full transition-all",
								step === 1 || (step === 2 && selectedChoice)
									? "w-10 bg-indigo-600"
									: step === 3 && challengeOption
										? "w-10 bg-orange-500"
										: step === 4 && challengeOption?.correct
											? "w-10 bg-emerald-500"
											: "w-5 bg-border",
							)}
						/>
					))}
				</div>

				{story.panels.slice(0, 2).map((panel, index) => (
					<section
						key={panel.id}
						className={cn(
							"mb-8 overflow-hidden rounded-[2rem] border-2 border-slate-900 bg-card shadow-[7px_8px_0_0_#172033] dark:border-slate-200 dark:shadow-[7px_8px_0_0_#7c5ce7]",
							index % 2 === 1 && "sm:ml-8",
						)}
					>
						<div className="grid sm:grid-cols-[7.5rem_1fr]">
							<div className="flex items-center justify-center bg-indigo-600 p-6 text-white">
								<div className="text-center">
									<span className="block font-mono text-xs font-bold uppercase tracking-widest text-indigo-100">
										Panel
									</span>
									<span className="mt-1 block text-5xl font-black">
										{panel.number}
									</span>
								</div>
							</div>
							<div className="p-6 sm:p-8">
								<p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-orange-700 dark:text-orange-300">
									{panel.eyebrow}
								</p>
								<h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
									{panel.title}
								</h2>
								{panel.paragraphs.map((paragraph) => (
									<p
										key={paragraph}
										className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg"
									>
										{paragraph}
									</p>
								))}
								{panel.dialogue ? (
									<div className="mt-6 grid gap-3">
										{panel.dialogue.map((line) => (
											<blockquote
												key={`${line.speaker}-${line.text}`}
												className={cn(
													"rounded-2xl border p-4",
													speakerStyles[line.speaker],
												)}
											>
												<p className="text-sm font-black uppercase tracking-wide">
													{line.speaker}
												</p>
												<p className="mt-1 text-base font-medium leading-relaxed">
													“{line.text}”
												</p>
											</blockquote>
										))}
									</div>
								) : null}
							</div>
						</div>
					</section>
				))}

				{story.clueHunt ? (
					<section className="my-12 overflow-hidden rounded-[2rem] border-2 border-slate-900 bg-slate-950 text-white shadow-[7px_8px_0_0_#facc15] dark:border-slate-100">
						<div className="p-6 sm:p-9">
							<p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-yellow-300">
								Clue hunt
							</p>
							<h2 className="mt-2 text-2xl font-black sm:text-3xl">
								Spot what does not add up
							</h2>
							<p className="mt-3 max-w-2xl leading-relaxed text-slate-200">
								{story.clueHunt.prompt}
							</p>
						</div>
						<div className="relative aspect-[16/9] overflow-hidden border-y border-white/15">
							<Image
								src={story.clueHunt.image}
								alt={story.clueHunt.imageAlt}
								fill
								sizes="(max-width: 896px) 100vw, 896px"
								className="object-cover"
							/>
							{story.clueHunt.hotspots.map((hotspot, index) => {
								const found = foundClueIds.includes(hotspot.id);
								return (
									<button
										key={hotspot.id}
										type="button"
										aria-label={`Clue ${index + 1}: ${hotspot.label}`}
										aria-pressed={found}
										onClick={() =>
											setFoundClueIds((current) =>
												current.includes(hotspot.id)
													? current
													: [...current, hotspot.id],
											)
										}
										className={cn(
											"absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-indigo-600 font-black shadow-lg transition hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300 sm:h-12 sm:w-12",
											found && "story-clue-hint bg-emerald-500",
										)}
										style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
									>
										{found ? <Check className="h-5 w-5" /> : index + 1}
									</button>
								);
							})}
						</div>
						<div className="grid gap-3 p-6 sm:p-9">
							{story.clueHunt.hotspots
								.filter((hotspot) => foundClueIds.includes(hotspot.id))
								.map((hotspot) => (
									<div key={hotspot.id} className="rounded-2xl bg-white/10 p-4">
										<p className="font-bold text-yellow-300">{hotspot.label}</p>
										<p className="mt-1 text-sm leading-6 text-slate-200">
											{hotspot.feedback}
										</p>
									</div>
								))}
							{allCluesFound ? (
								<p
									className="rounded-2xl bg-emerald-500/20 p-4 font-bold text-emerald-200"
									role="status"
								>
									{story.clueHunt.successMessage}
								</p>
							) : null}
						</div>
					</section>
				) : null}

				<section className="my-12 rounded-[2rem] bg-gradient-to-br from-indigo-700 via-violet-700 to-fuchsia-700 p-1 shadow-xl">
					<div className="rounded-[1.8rem] bg-[#12182a] p-6 text-white sm:p-9">
						<div className="flex items-start gap-4">
							<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-300 text-slate-950">
								<SearchCheck className="h-6 w-6" aria-hidden="true" />
							</div>
							<div>
								<p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-violet-200">
									You are in the story
								</p>
								<h2 className="mt-2 text-2xl font-black sm:text-3xl">
									Choose the next move
								</h2>
								<p className="mt-3 text-base leading-relaxed text-slate-200">
									{story.choicePrompt}
								</p>
							</div>
						</div>

						<div className="mt-7 grid gap-3">
							{story.choices.map((item) => (
								<button
									key={item.id}
									type="button"
									onClick={() => setSelectedChoice(item.id)}
									aria-pressed={selectedChoice === item.id}
									className={cn(
										"flex min-h-14 w-full items-center justify-between gap-4 rounded-2xl border p-4 text-left text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#12182a] sm:text-base",
										selectedChoice === item.id
											? "border-yellow-300 bg-yellow-300 text-slate-950"
											: "border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10",
									)}
								>
									<span>{item.label}</span>
									<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current/30">
										{selectedChoice === item.id ? (
											<Check className="h-4 w-4" />
										) : (
											<ArrowRight className="h-4 w-4" />
										)}
									</span>
								</button>
							))}
						</div>

						{choice ? (
							<div
								className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-5"
								aria-live="polite"
							>
								<p className="font-black text-yellow-300">
									{choice.isBest
										? "Sharp thinking!"
										: "Good thinking—look one step deeper."}
								</p>
								<p className="mt-2 leading-relaxed text-slate-100">
									{choice.feedback}
								</p>
								<p className="mt-4 border-t border-white/15 pt-4 leading-relaxed text-white">
									{choice.bridge}
								</p>
							</div>
						) : null}
					</div>
				</section>

				{selectedChoice ? (
					<>
						{story.panels.slice(2).map((panel) => (
							<section
								key={panel.id}
								className="mb-10 rounded-[2rem] border-2 border-slate-900 bg-[#fff9ec] p-6 shadow-[7px_8px_0_0_#f4a340] dark:border-slate-200 dark:bg-slate-900 dark:shadow-[7px_8px_0_0_#7c5ce7] sm:p-9"
							>
								<div className="flex items-center gap-3">
									<span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-black text-white">
										{panel.number}
									</span>
									<p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-orange-700 dark:text-orange-300">
										{panel.eyebrow}
									</p>
								</div>
								<h2 className="mt-5 text-2xl font-black tracking-tight sm:text-3xl">
									{panel.title}
								</h2>
								{panel.paragraphs.map((paragraph) => (
									<p
										key={paragraph}
										className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg"
									>
										{paragraph}
									</p>
								))}
								{panel.dialogue ? (
									<div className="mt-6 grid gap-3 sm:grid-cols-2">
										{panel.dialogue.map((line) => (
											<blockquote
												key={`${line.speaker}-${line.text}`}
												className={cn(
													"rounded-2xl border p-4",
													speakerStyles[line.speaker],
												)}
											>
												<p className="text-sm font-black uppercase tracking-wide">
													{line.speaker}
												</p>
												<p className="mt-1 font-medium leading-relaxed">
													“{line.text}”
												</p>
											</blockquote>
										))}
									</div>
								) : null}
							</section>
						))}

						<section className="my-12">
							<div className="mb-6 text-center">
								<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-300 text-slate-950 shadow-md">
									<Lightbulb className="h-7 w-7" aria-hidden="true" />
								</div>
								<p className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-indigo-700 dark:text-indigo-300">
									Keep this tool
								</p>
								<h2 className="mt-2 text-3xl font-black">
									The F.A.C.T. detective check
								</h2>
							</div>
							<div className="grid gap-4 sm:grid-cols-3">
								{story.detectiveSteps.map((step, index) => (
									<div
										key={step.label}
										className="rounded-3xl border bg-card p-6 shadow-sm"
									>
										<span className="font-mono text-sm font-black text-indigo-600">
											0{index + 1}
										</span>
										<h3 className="mt-3 text-xl font-black">{step.label}</h3>
										<p className="mt-2 text-sm leading-6 text-muted-foreground">
											{step.description}
										</p>
									</div>
								))}
							</div>
						</section>

						{story.askPixel ? (
							<section className="my-12 rounded-[2rem] border-2 border-indigo-300 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-950/30 sm:p-9">
								<p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-indigo-700 dark:text-indigo-300">
									Ask Pixel
								</p>
								<p className="mt-3 leading-relaxed text-muted-foreground">
									{story.askPixel.intro}
								</p>
								<blockquote className="mt-5 rounded-2xl border border-teal-200 bg-white p-5 font-bold text-slate-900 dark:border-teal-900 dark:bg-slate-900 dark:text-white">
									“{story.askPixel.claim}”
								</blockquote>
								<div className="mt-5 flex flex-wrap gap-2">
									{story.askPixel.questions.map((question) => (
										<Button
											key={question.id}
											type="button"
											variant="outline"
											aria-pressed={pixelQuestionId === question.id}
											onClick={() => setPixelQuestionId(question.id)}
											className="h-auto min-h-11 whitespace-normal rounded-full"
										>
											{question.label}
										</Button>
									))}
								</div>
								{pixelQuestion ? (
									<p
										className="mt-5 rounded-2xl bg-teal-100 p-4 leading-relaxed text-teal-950 dark:bg-teal-950 dark:text-teal-100"
										aria-live="polite"
									>
										<strong>Pixel:</strong> {pixelQuestion.scriptedReply}
									</p>
								) : null}
								<p className="mt-6 font-bold">{story.askPixel.verdictPrompt}</p>
								<div className="mt-3 flex gap-3">
									<Button
										type="button"
										variant="outline"
										onClick={() => setPixelVerdict(true)}
										aria-pressed={pixelVerdict === true}
									>
										True
									</Button>
									<Button
										type="button"
										variant="outline"
										onClick={() => setPixelVerdict(false)}
										aria-pressed={pixelVerdict === false}
									>
										False
									</Button>
								</div>
								{pixelVerdict !== null ? (
									<p
										className={cn(
											"mt-5 rounded-2xl p-4 font-medium leading-relaxed",
											pixelVerdictCorrect
												? "bg-emerald-100 text-emerald-950 dark:bg-emerald-950 dark:text-emerald-100"
												: "bg-amber-100 text-amber-950 dark:bg-amber-950 dark:text-amber-100",
										)}
										role="status"
									>
										{pixelVerdictCorrect
											? story.askPixel.verdict.correctFeedback
											: story.askPixel.verdict.incorrectFeedback}
									</p>
								) : null}
							</section>
						) : null}

						<section className="relative rounded-[2rem] border border-emerald-300 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-950/30 sm:p-9">
							{challengeOption?.correct ? (
								<span
									aria-hidden="true"
									className="story-stamp absolute right-5 top-5 z-10 rounded-lg border-4 border-emerald-600 px-3 py-1 font-mono text-base font-black uppercase tracking-widest text-emerald-600 sm:right-9 sm:top-8 sm:text-2xl"
								>
									Case closed
								</span>
							) : null}
							<div className="flex items-start gap-4">
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white">
									<BadgeCheck className="h-6 w-6" aria-hidden="true" />
								</div>
								<div>
									<p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-300">
										60-second challenge
									</p>
									<h2 className="mt-2 text-2xl font-black sm:text-3xl">
										Earn your Truth Detective badge
									</h2>
									<p className="mt-3 leading-relaxed text-emerald-950 dark:text-emerald-100">
										{story.challenge.question}
									</p>
								</div>
							</div>

							<div className="mt-6 grid gap-3">
								{story.challenge.options.map((option) => (
									<button
										key={option.id}
										type="button"
										onClick={() => {
											setChallengeAnswer(option.id);
											if (option.correct) setCelebrating(true);
										}}
										aria-pressed={challengeAnswer === option.id}
										className={cn(
											"min-h-12 rounded-2xl border bg-white p-4 text-left text-sm font-bold text-slate-900 transition hover:border-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:bg-slate-900 dark:text-white",
											challengeAnswer === option.id &&
												"border-emerald-600 ring-2 ring-emerald-600",
										)}
									>
										{option.label}
									</button>
								))}
							</div>

							{challengeOption ? (
								<div
									className="mt-5 rounded-2xl bg-white/80 p-5 text-slate-900 dark:bg-slate-900 dark:text-white"
									aria-live="polite"
								>
									<p className="font-black text-emerald-700 dark:text-emerald-300">
										{challengeOption.correct
											? "Badge unlocked! 🎉"
											: "Almost—try your detective check again."}
									</p>
									<p className="mt-2 leading-relaxed">
										{challengeOption.feedback}
									</p>
									{!challengeOption.correct ? (
										<Button
											type="button"
											variant="outline"
											className="mt-4 rounded-full"
											onClick={() => setChallengeAnswer(null)}
										>
											<RotateCcw className="h-4 w-4" /> Try again
										</Button>
									) : null}
								</div>
							) : null}
						</section>

						{challengeOption?.correct ? (
							<section className="mt-10 overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white sm:p-10">
								<Sparkles
									className="h-7 w-7 text-yellow-300"
									aria-hidden="true"
								/>
								<p className="mt-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
									The next case
								</p>
								<h2 className="mt-2 text-2xl font-black">
									Your clue for next Thursday
								</h2>
								<p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-300">
									{story.nextIssueTeaser}
								</p>
								{nextIssue ? (
									<div className="mt-5">
										<NextCaseCountdown
											releaseDate={nextIssue.releaseDate}
											title={nextIssue.title}
											className="border-violet-500 bg-violet-950/60 text-violet-100"
										/>
									</div>
								) : null}
								<Button
									asChild
									className="mt-7 rounded-full bg-yellow-300 text-slate-950 hover:bg-yellow-200"
								>
									<Link href="/stories">
										<BookOpen className="h-4 w-4" /> Visit the story shelf
									</Link>
								</Button>
							</section>
						) : null}
					</>
				) : (
					<p className="py-4 text-center text-sm font-medium text-muted-foreground">
						Choose a move to reveal what happens next.
					</p>
				)}
			</div>
		</article>
	);
}
