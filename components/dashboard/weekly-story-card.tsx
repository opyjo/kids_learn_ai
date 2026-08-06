import { ArrowRight, BookOpen, Clock3, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { currentStory } from "@/lib/story-club";

export function WeeklyStoryCard() {
	if (!currentStory) return null;

	return (
		<section className="mb-8 overflow-hidden rounded-[2rem] border border-indigo-200 bg-[#fff9ec] shadow-xl ring-1 ring-indigo-100 dark:border-indigo-900 dark:bg-slate-950 dark:ring-indigo-950">
			<div className="grid lg:grid-cols-[0.9fr_1.1fr]">
				<div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
					<div className="flex flex-wrap items-center gap-2">
						<Badge className="rounded-full bg-indigo-600 text-white">
							<Sparkles className="h-3 w-3" /> New this week
						</Badge>
						<span className="font-mono text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
							AI Story Club · Issue{" "}
							{String(currentStory.issueNumber).padStart(2, "0")}
						</span>
					</div>
					<h2 className="mt-4 text-balance text-2xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-3xl">
						{currentStory.title}
					</h2>
					<p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
						{currentStory.description}
					</p>
					<div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300">
						<span className="inline-flex items-center gap-1.5">
							<Clock3 className="h-4 w-4 text-orange-600" />{" "}
							{currentStory.readingMinutes} min
						</span>
						<span className="inline-flex items-center gap-1.5">
							<BookOpen className="h-4 w-4 text-indigo-600" /> Story + challenge
						</span>
					</div>
					<Button
						asChild
						size="lg"
						className="mt-6 w-fit rounded-full bg-indigo-600 text-white hover:bg-indigo-700"
					>
						<Link href={`/stories/${currentStory.slug}`}>
							Read this week&apos;s story <ArrowRight className="h-4 w-4" />
						</Link>
					</Button>
				</div>
				<Link
					href={`/stories/${currentStory.slug}`}
					className="group relative min-h-64 overflow-hidden bg-slate-900 lg:min-h-full"
					aria-label={`Read ${currentStory.title}`}
				>
					<Image
						src={currentStory.coverImage}
						alt=""
						fill
						sizes="(max-width: 1024px) 100vw, 55vw"
						className="object-cover transition duration-500 group-hover:scale-[1.03]"
					/>
					<div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
				</Link>
			</div>
		</section>
	);
}
