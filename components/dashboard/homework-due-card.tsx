import { ClipboardList, PartyPopper } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export interface HomeworkDueItem {
	lessonTitle: string;
	courseTitle: string;
	weekNumber: number;
	href: string;
}

interface HomeworkDueCardProps {
	items: HomeworkDueItem[];
}

export function HomeworkDueCard({ items }: HomeworkDueCardProps) {
	return (
		<Card className="rounded-2xl border-0 shadow-xl ring-1 ring-amber-200/60 dark:ring-amber-500/20">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<ClipboardList
						className="h-5 w-5 text-amber-600"
						aria-hidden="true"
					/>
					Homework Due
				</CardTitle>
				<CardDescription>
					Take-home assignments waiting for your submission
				</CardDescription>
			</CardHeader>
			<CardContent>
				{items.length === 0 ? (
					<p className="flex items-center gap-2 py-2 text-sm text-muted-foreground">
						<PartyPopper
							className="h-4 w-4 text-green-600"
							aria-hidden="true"
						/>
						All caught up! 🎉
					</p>
				) : (
					<ul className="space-y-2">
						{items.map((item) => (
							<li key={item.href}>
								<Link
									href={item.href}
									className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-amber-200/60 dark:border-amber-500/20 bg-amber-50/50 dark:bg-amber-500/5 p-3 transition-colors hover:bg-amber-100/60 dark:hover:bg-amber-500/10"
								>
									<span className="min-w-0">
										<span className="block font-medium">
											Week {item.weekNumber}: {item.lessonTitle}
										</span>
										<span className="block text-xs text-muted-foreground">
											{item.courseTitle}
										</span>
									</span>
									<Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 border-amber-300 dark:border-amber-700 shrink-0">
										Assignment
									</Badge>
								</Link>
							</li>
						))}
					</ul>
				)}
			</CardContent>
		</Card>
	);
}
