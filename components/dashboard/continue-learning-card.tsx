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
		<Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5">
			<CardHeader className="pb-2">
				<CardTitle className="flex items-center gap-2 text-lg">
					<Play className="h-5 w-5 text-accent" aria-hidden="true" />
					Pick Up Where You Left Off
				</CardTitle>
				<CardDescription>{lesson.courseTitle}</CardDescription>
			</CardHeader>
			<CardContent className="space-y-3">
				<p className="text-xl font-semibold">
					Week {lesson.weekNumber}: {lesson.lessonTitle}
				</p>
				<Button
					asChild
					size="lg"
					className="w-full bg-gradient-to-r from-accent to-primary text-white"
				>
					<Link href={lesson.href}>
						Continue learning
						<ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
					</Link>
				</Button>
			</CardContent>
		</Card>
	);
}
