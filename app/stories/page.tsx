import {
	ArrowRight,
	BookOpen,
	CalendarDays,
	Clock3,
	LockKeyhole,
	SearchCheck,
	Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layouts/main-layout";
import { DetectiveRankCard } from "@/components/stories/detective-rank-card";
import { NextCaseCountdown } from "@/components/stories/next-case-countdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { publicMetadata } from "@/lib/seo";
import { currentStory, storyIssues } from "@/lib/story-club";

export const metadata: Metadata = publicMetadata({
	title: "AI Story Club | A New AI Mystery for Kids Every Week",
	description:
		"Read short, illustrated AI adventures for kids ages 9–13, make choices inside each story, and learn one practical AI skill every Thursday.",
	path: "/stories",
});

const upcomingTones = [
	"from-sky-500/20 via-indigo-400/10 to-violet-400/20 text-sky-800 dark:text-sky-200",
	"from-orange-500/20 via-amber-400/10 to-yellow-300/20 text-orange-800 dark:text-orange-200",
	"from-emerald-500/20 via-teal-400/10 to-cyan-300/20 text-emerald-800 dark:text-emerald-200",
];

export default function StoriesPage() {
	const upcomingStories = storyIssues.filter(
		(story) => story.status === "upcoming",
	);

	return (
		<MainLayout>
			<section className="relative isolate overflow-hidden border-b border-border/70 bg-[#fff9ec] dark:bg-[#171d2c]">
				<div className="absolute -left-20 top-20 -z-10 h-72 w-72 rounded-full bg-yellow-300/25 blur-3xl" />
				<div className="absolute -right-24 top-0 -z-10 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
				<div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24">
					<div className="grid items-end gap-10 lg:grid-cols-[1fr_0.62fr]">
						<div>
							<Badge className="rounded-full bg-indigo-600 px-4 py-2 text-white">
								<Sparkles className="h-3.5 w-3.5" /> New case every Thursday
							</Badge>
							<h1 className="mt-6 max-w-4xl text-balance text-5xl font-black leading-[0.98] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
								Welcome to the{" "}
								<span className="text-indigo-600 dark:text-violet-400">
									AI Story Club.
								</span>
							</h1>
							<p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-700 dark:text-slate-300 sm:text-xl">
								Short illustrated mysteries where curious kids outsmart AI
								mix-ups, make the big decisions, and collect a new real-world
								skill each week.
							</p>
						</div>
						<div className="grid grid-cols-3 divide-x divide-slate-300 overflow-hidden rounded-3xl border border-slate-300 bg-white/75 shadow-sm backdrop-blur dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-900/70">
							<div className="p-4 text-center sm:p-5">
								<Clock3 className="mx-auto h-6 w-6 text-indigo-600" />
								<p className="mt-2 text-xs font-bold">5–8 min</p>
							</div>
							<div className="p-4 text-center sm:p-5">
								<BookOpen className="mx-auto h-6 w-6 text-orange-600" />
								<p className="mt-2 text-xs font-bold">Ages 9–13</p>
							</div>
							<div className="p-4 text-center sm:p-5">
								<SearchCheck className="mx-auto h-6 w-6 text-emerald-600" />
								<p className="mt-2 text-xs font-bold">1 new skill</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-8 sm:py-10" aria-label="Story Club progress">
				<DetectiveRankCard />
			</section>

			<div className="pt-10">
				<DetectiveRankCard />
			</div>

			{currentStory ? (
				<section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
					<div className="mb-7 flex flex-wrap items-end justify-between gap-4">
						<div>
							<p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-orange-700 dark:text-orange-300">
								On the story desk now
							</p>
							<h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
								This week&apos;s mystery
							</h2>
						</div>
						<p className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
							<CalendarDays className="h-4 w-4" /> Published{" "}
							{currentStory.releaseLabel}
						</p>
					</div>

					<div className="overflow-hidden rounded-[2rem] border-2 border-slate-900 bg-card shadow-[10px_12px_0_0_#f4b83e] dark:border-slate-100 dark:shadow-[10px_12px_0_0_#7454d7]">
						<div className="grid lg:grid-cols-[1.08fr_0.92fr]">
							<Link
								href={`/stories/${currentStory.slug}`}
								className="group relative min-h-72 overflow-hidden bg-slate-900 lg:min-h-[34rem]"
								aria-label={`Read ${currentStory.title}`}
							>
								<Image
									src={currentStory.coverImage}
									alt={currentStory.coverAlt}
									fill
									priority
									sizes="(max-width: 1024px) 100vw, 58vw"
									className="object-cover transition duration-500 group-hover:scale-[1.025]"
								/>
							</Link>
							<div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
								<div className="flex flex-wrap items-center gap-2">
									<Badge className="rounded-full bg-indigo-600 text-white">
										Issue {String(currentStory.issueNumber).padStart(2, "0")}
									</Badge>
									<Badge variant="outline" className="rounded-full">
										{currentStory.concept}
									</Badge>
								</div>
								<h3 className="mt-5 text-balance text-3xl font-black leading-tight tracking-tight sm:text-4xl">
									{currentStory.title}
								</h3>
								<p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
									{currentStory.description}
								</p>
								<ul className="mt-6 grid gap-3 text-sm font-semibold text-foreground">
									<li className="flex items-center gap-2">
										<CheckIcon /> Make a choice inside the story
									</li>
									<li className="flex items-center gap-2">
										<CheckIcon /> Learn the F.A.C.T. detective check
									</li>
									<li className="flex items-center gap-2">
										<CheckIcon /> Unlock the weekly badge
									</li>
								</ul>
								<Button
									asChild
									size="lg"
									className="mt-8 w-fit rounded-full bg-indigo-600 text-white hover:bg-indigo-700"
								>
									<Link href={`/stories/${currentStory.slug}`}>
										Open the case <ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>
			) : null}

			<section className="border-y border-border/70 bg-card/50">
				<div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
					<div className="mb-8">
						<p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-indigo-700 dark:text-indigo-300">
							Season 1 · Truth Detectives
						</p>
						<h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
							Cases arriving this month
						</h2>
						<p className="mt-3 max-w-2xl text-muted-foreground">
							Every episode stands alone, but reading the whole season lets you
							follow Maya, Leo, and Pixel as their detective toolkit grows.
						</p>
					</div>

					<div className="grid gap-5 md:grid-cols-3">
						{upcomingStories.map((story, index) => (
							<article
								key={story.slug}
								className="overflow-hidden rounded-3xl border bg-card shadow-sm"
							>
								<div
									className={`relative flex h-40 items-end overflow-hidden bg-gradient-to-br p-6 ${upcomingTones[index % upcomingTones.length]}`}
								>
									<div className="absolute -right-8 -top-10 h-32 w-32 rounded-full border-[18px] border-current/10" />
									<LockKeyhole className="absolute right-6 top-6 h-6 w-6 opacity-70" />
									<p className="font-mono text-sm font-black uppercase tracking-widest">
										Issue {String(story.issueNumber).padStart(2, "0")}
									</p>
								</div>
								<div className="p-6">
									<p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
										Arrives {story.releaseLabel}
									</p>
									<h3 className="mt-3 text-xl font-black leading-snug">
										{story.title}
									</h3>
									<p className="mt-3 text-sm leading-6 text-muted-foreground">
										{story.teaser}
									</p>
									<Badge variant="outline" className="mt-5 rounded-full">
										{story.concept}
									</Badge>
									<NextCaseCountdown
										releaseDate={story.releaseDate}
										title={story.title}
										className="mt-5"
									/>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-4xl px-4 py-16 text-center sm:py-20">
				<p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-orange-700 dark:text-orange-300">
					The weekly ritual
				</p>
				<h2 className="mt-3 text-balance text-3xl font-black sm:text-4xl">
					Read. Decide. Discover.
				</h2>
				<p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
					Each story turns one big AI idea into a mystery kids can picture, a
					decision they can make, and a practical skill they can use away from
					the screen.
				</p>
				{currentStory ? (
					<Button asChild size="lg" className="mt-7 rounded-full">
						<Link href={`/stories/${currentStory.slug}`}>
							Start issue {currentStory.issueNumber}{" "}
							<ArrowRight className="h-4 w-4" />
						</Link>
					</Button>
				) : null}
			</section>
		</MainLayout>
	);
}

function CheckIcon() {
	return (
		<span
			className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
			aria-hidden="true"
		>
			✓
		</span>
	);
}
