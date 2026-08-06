"use client";

import { BadgeCheck, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { publishedStories, storyIssues } from "@/lib/story-club";
import { detectiveRank, hasEarnedBadge } from "@/lib/story-club-progress";
import { cn } from "@/lib/utils";

export function DetectiveRankCard() {
	const [earned, setEarned] = useState<string[] | null>(null);

	// Read localStorage after mount so server and client HTML match.
	useEffect(() => {
		setEarned(
			publishedStories
				.filter((story) => hasEarnedBadge(story.slug))
				.map((story) => story.slug),
		);
	}, []);

	if (earned === null) return null;

	const badgeCount = earned.length;
	const rank = detectiveRank(badgeCount);

	return (
		<div className="mx-auto max-w-6xl px-4">
			<div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border-2 border-slate-900 bg-card p-5 shadow-[5px_6px_0_0_#172033] dark:border-slate-200 dark:shadow-[5px_6px_0_0_#7c5ce7] sm:p-6">
				<div className="flex items-center gap-4">
					<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white">
						<Shield className="h-6 w-6" aria-hidden="true" />
					</div>
					<div>
						<p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-indigo-700 dark:text-indigo-300">
							Your detective rank
						</p>
						<p className="text-xl font-black">{rank}</p>
					</div>
				</div>
				<div className="flex items-center gap-2">
					{storyIssues.map((story) => {
						const isEarned = earned.includes(story.slug);
						return (
							<span
								key={story.slug}
								title={
									isEarned
										? `Badge earned: ${story.title}`
										: `Issue ${story.issueNumber}: badge not earned yet`
								}
								className={cn(
									"flex h-10 w-10 items-center justify-center rounded-full border-2 font-black",
									isEarned
										? "border-emerald-500 bg-emerald-500 text-white"
										: "border-dashed border-border text-muted-foreground",
								)}
							>
								{isEarned ? (
									<BadgeCheck className="h-5 w-5" aria-hidden="true" />
								) : (
									story.issueNumber
								)}
							</span>
						);
					})}
					<span className="ml-2 text-sm font-bold text-muted-foreground">
						{badgeCount}/{storyIssues.length} badges
					</span>
				</div>
			</div>
		</div>
	);
}
