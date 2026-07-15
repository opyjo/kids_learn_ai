import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export interface ContinueLessonInfo {
	courseTitle: string;
	lessonTitle: string;
	weekNumber: number;
	href: string;
}

interface ContinueLearningCardProps {
	lesson: ContinueLessonInfo;
}

export function ContinueLearningCard({ lesson }: ContinueLearningCardProps) {
	return (
		<Card className="border-primary/25 bg-card shadow-sm">
			<CardHeader className="pb-2">
				<CardTitle className="flex items-center gap-2 text-lg">
					<Play className="h-5 w-5 text-accent" aria-hidden="true" />
					Continue learning
				</CardTitle>
				<CardDescription>{lesson.courseTitle}</CardDescription>
			</CardHeader>
			<CardContent className="space-y-3">
				<p className="text-lg font-semibold">
					Week {lesson.weekNumber}: {lesson.lessonTitle}
				</p>
				<Button asChild size="lg" className="w-full">
					<Link href={lesson.href}>
						Continue learning
						<ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
					</Link>
				</Button>
			</CardContent>
		</Card>
	);
}
