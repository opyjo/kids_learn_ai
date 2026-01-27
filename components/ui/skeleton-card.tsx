"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
	return (
		<Card className="rounded-2xl border-0 shadow-xl ring-1 ring-gray-200/60 dark:ring-white/10">
			<CardHeader>
				<Skeleton className="h-6 w-3/4" />
				<Skeleton className="h-4 w-1/2 mt-2" />
			</CardHeader>
			<CardContent>
				<div className="space-y-3">
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-5/6" />
					<Skeleton className="h-4 w-4/6" />
				</div>
			</CardContent>
		</Card>
	);
}

export function SkeletonStatsCard() {
	return (
		<Card className="rounded-2xl border-0 shadow-xl ring-1 ring-gray-200/60 dark:ring-white/10">
			<CardContent className="p-6">
				<div className="space-y-4">
					<Skeleton className="h-5 w-24" />
					<Skeleton className="h-8 w-16" />
					<Skeleton className="h-2 w-full" />
				</div>
			</CardContent>
		</Card>
	);
}
