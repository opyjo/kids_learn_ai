import { Code2 } from "lucide-react";
import { PythonEditor } from "@/components/code/python-editor";
import { TrinketEditor } from "@/components/code/trinket-editor";
import type { Lesson } from "@/components/lessons/viewer/lesson-viewer.types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LessonCodePanelProps {
	lesson: Lesson;
	onCodeChange: (code: string) => void;
	onRunComplete: (output: string, isSuccess: boolean) => void;
}

export function LessonCodePanel({
	lesson,
	onCodeChange,
	onRunComplete,
}: LessonCodePanelProps) {
	return (
		<Card className="border shadow-sm">
			<CardHeader className="pb-3">
				<CardTitle className="text-sm font-semibold flex items-center gap-2">
					<Code2 className="h-4 w-4 text-primary" />
					Code Lab
				</CardTitle>
			</CardHeader>
			<CardContent className="pt-0">
				{lesson.requires_trinket ? (
					<TrinketEditor
						initialCode={lesson.starter_code}
						className="flex flex-col rounded-xl ring-1 ring-border/70 overflow-hidden"
					/>
				) : (
					<PythonEditor
						initialCode={lesson.starter_code}
						onCodeChange={onCodeChange}
						onRunComplete={onRunComplete}
						className="flex flex-col rounded-xl ring-1 ring-border/70 overflow-hidden"
					/>
				)}
			</CardContent>
		</Card>
	);
}
