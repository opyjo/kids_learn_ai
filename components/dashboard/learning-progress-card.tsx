"use client";

import { ArrowRight, Brain } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export function LearningProgressCard() {
	const [summary, setSummary] = useState<{
		dueCount: number;
		mastery: { status: string }[];
	} | null>(null);
	useEffect(() => {
		fetch("/api/quiz/learning")
			.then((response) => (response.ok ? response.json() : null))
			.then(setSummary)
			.catch(() => setSummary(null));
	}, []);
	if (!summary || (!summary.dueCount && !summary.mastery.length)) return null;
	const mastered = summary.mastery.filter(
		(item) => item.status === "mastered",
	).length;
	return (
		<Card className="mb-5 border-purple-200 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<Brain className="h-5 w-5 text-purple-600" />
					My Learning Map
				</CardTitle>
				<CardDescription>
					{summary.dueCount
						? `${summary.dueCount} short review question${summary.dueCount === 1 ? " is" : "s are"} ready today.`
						: "You’re caught up with today’s reviews."}
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-wrap items-center justify-between gap-3">
				<p className="text-sm">
					<strong>{mastered}</strong> of {summary.mastery.length} concepts
					mastered
				</p>
				<Button asChild>
					<Link href="/review">
						Review and view map
						<ArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</Button>
			</CardContent>
		</Card>
	);
}
