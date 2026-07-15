"use client";

import { CalendarClock, Info, Video } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { formatTimeUntil, isJoinWindowOpen } from "@/lib/schedule-utils";

export interface NextClassInfo {
	courseTitle: string;
	label: string | null;
	/** ISO string of the next occurrence, computed server-side */
	nextOccursAt: string;
	scheduleLine: string;
	meetingLink: string | null;
	meetingNotes: string | null;
	durationMinutes: number;
}

interface NextClassCardProps {
	classes: NextClassInfo[];
}

export function NextClassCard({ classes }: NextClassCardProps) {
	// Re-render every 30s so the countdown and join-window state stay fresh
	const [now, setNow] = useState(() => new Date());
	useEffect(() => {
		const interval = setInterval(() => setNow(new Date()), 30_000);
		return () => clearInterval(interval);
	}, []);

	if (classes.length === 0) return null;

	const next = [...classes].sort(
		(a, b) =>
			new Date(a.nextOccursAt).getTime() - new Date(b.nextOccursAt).getTime(),
	)[0];
	const occursAt = new Date(next.nextOccursAt);
	const joinable = isJoinWindowOpen(occursAt, next.durationMinutes, now);
	const happeningNow = occursAt.getTime() <= now.getTime();

	return (
		<Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
			<CardHeader className="pb-2">
				<CardTitle className="flex items-center gap-2 text-lg">
					<CalendarClock className="h-5 w-5 text-primary" aria-hidden="true" />
					Next Live Class
					{happeningNow && (
						<Badge className="bg-green-500 text-white animate-pulse">
							Live now
						</Badge>
					)}
				</CardTitle>
				<CardDescription>
					{next.courseTitle}
					{next.label ? ` · ${next.label}` : ""}
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-3">
				<div>
					<p className="text-xl font-semibold">
						{occursAt.toLocaleString(undefined, {
							weekday: "long",
							month: "short",
							day: "numeric",
							hour: "numeric",
							minute: "2-digit",
						})}
					</p>
					<p className="text-sm text-muted-foreground">
						{next.scheduleLine} · {formatTimeUntil(occursAt, now)}
					</p>
				</div>

				{next.meetingNotes && (
					<p className="flex items-start gap-2 text-sm text-muted-foreground">
						<Info className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
						{next.meetingNotes}
					</p>
				)}

				{next.meetingLink &&
					(joinable ? (
						<Button
							asChild
							size="lg"
							className="w-full bg-gradient-to-r from-primary to-accent text-white"
						>
							<a
								href={next.meetingLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Video className="mr-2 h-5 w-5" aria-hidden="true" />
								Join class
							</a>
						</Button>
					) : (
						<Button size="lg" className="w-full" disabled>
							<Video className="mr-2 h-5 w-5" aria-hidden="true" />
							Join opens 15 minutes before class
						</Button>
					))}
			</CardContent>
		</Card>
	);
}
