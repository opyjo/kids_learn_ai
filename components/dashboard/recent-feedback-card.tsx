import { MessageSquareText } from "lucide-react";
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

export interface RecentFeedbackItem {
	id: string;
	lessonTitle: string;
	grade: string | null;
	feedback: string;
	href: string;
}

interface RecentFeedbackCardProps {
	items: RecentFeedbackItem[];
}

const FEEDBACK_PREVIEW_LENGTH = 120;

export function RecentFeedbackCard({ items }: RecentFeedbackCardProps) {
	if (items.length === 0) return null;

	return (
		<Card className="rounded-2xl border-0 shadow-xl ring-1 ring-gray-200/60 dark:ring-white/10">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<MessageSquareText
						className="h-5 w-5 text-primary"
						aria-hidden="true"
					/>
					Recent Teacher Feedback
				</CardTitle>
				<CardDescription>Your latest reviewed assignments</CardDescription>
			</CardHeader>
			<CardContent>
				<ul className="space-y-3">
					{items.map((item) => (
						<li
							key={item.id}
							className="flex flex-wrap items-start justify-between gap-3 rounded-lg border p-3"
						>
							<div className="min-w-0 flex-1">
								<div className="flex items-center gap-2 flex-wrap">
									<p className="font-medium">{item.lessonTitle}</p>
									{item.grade && (
										<Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
											{item.grade}
										</Badge>
									)}
								</div>
								<p className="mt-1 text-sm text-muted-foreground">
									{item.feedback.length > FEEDBACK_PREVIEW_LENGTH
										? `${item.feedback.slice(0, FEEDBACK_PREVIEW_LENGTH)}…`
										: item.feedback}
								</p>
							</div>
							<Button asChild variant="outline" size="sm" className="shrink-0">
								<Link href={item.href}>View</Link>
							</Button>
						</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
}
