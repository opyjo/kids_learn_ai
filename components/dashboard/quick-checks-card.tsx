import { ChevronRight, ClipboardCheck } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export interface QuickCheckItem {
	lessonTitle: string;
	courseTitle: string;
	weekNumber: number;
	href: string;
	bestPercentage: number | null;
	passed: boolean;
}

export function QuickChecksCard({ items }: { items: QuickCheckItem[] }) {
	if (items.length === 0) return null;
	const passedCount = items.filter((item) => item.passed).length;
	const todo = items.filter((item) => !item.passed).slice(0, 5);
	return (
		<Card className="mb-4 border-border bg-card shadow-sm">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<ClipboardCheck className="h-5 w-5 text-amber-600" />
					Quiz Time
				</CardTitle>
				<CardDescription>
					{passedCount} of {items.length} lesson quizzes passed
					{todo.length > 0
						? " — here’s what’s waiting for you:"
						: " — you’ve passed them all! 🎉"}
				</CardDescription>
			</CardHeader>
			{todo.length > 0 && (
				<CardContent className="space-y-2">
					{todo.map((item) => (
						<div
							key={item.href}
							className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border px-3 py-2"
						>
							<div className="min-w-0">
								<p className="truncate text-sm font-medium">
									{item.lessonTitle}
								</p>
								<p className="text-xs text-muted-foreground">
									{item.courseTitle} · Lesson {item.weekNumber}
								</p>
							</div>
							<div className="flex items-center gap-2">
								{item.bestPercentage === null ? (
									<Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 text-xs">
										New
									</Badge>
								) : (
									<Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300 text-xs">
										Best {Math.round(item.bestPercentage)}%
									</Badge>
								)}
								<Button asChild size="sm" variant="outline">
									<Link href={item.href}>
										{item.bestPercentage === null ? "Take quiz" : "Try again"}
										<ChevronRight className="ml-1 h-3.5 w-3.5" />
									</Link>
								</Button>
							</div>
						</div>
					))}
				</CardContent>
			)}
		</Card>
	);
}
