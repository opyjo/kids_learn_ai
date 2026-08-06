"use client";

import { CalendarClock } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function formatRemaining(ms: number): string {
	const totalMinutes = Math.floor(ms / 60000);
	const days = Math.floor(totalMinutes / (60 * 24));
	const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
	const minutes = totalMinutes % 60;
	if (days > 0) return `${days}d ${hours}h ${minutes}m`;
	if (hours > 0) return `${hours}h ${minutes}m`;
	return `${Math.max(minutes, 1)}m`;
}

export function NextCaseCountdown({
	releaseDate,
	title,
	className,
}: {
	/** ISO date (YYYY-MM-DD); the case unlocks at local midnight that day. */
	releaseDate: string;
	title: string;
	className?: string;
}) {
	const [remaining, setRemaining] = useState<number | null>(null);

	useEffect(() => {
		const target = new Date(`${releaseDate}T00:00:00`).getTime();
		const update = () => setRemaining(target - Date.now());
		update();
		const timer = window.setInterval(update, 30000);
		return () => window.clearInterval(timer);
	}, [releaseDate]);

	// Render nothing until mounted so server and client HTML match.
	if (remaining === null) return null;

	return (
		<p
			className={cn(
				"inline-flex items-center gap-2 rounded-full border border-indigo-300 bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-800 dark:border-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-200",
				className,
			)}
			aria-live="off"
		>
			<CalendarClock className="h-4 w-4" aria-hidden="true" />
			{remaining > 0 ? (
				<>
					“{title}” unlocks in {formatRemaining(remaining)}
				</>
			) : (
				<>“{title}” arrives any moment—check back soon!</>
			)}
		</p>
	);
}
