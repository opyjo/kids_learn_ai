import { PythonEditor } from "@/components/code/python-editor";
import type { Lesson } from "@/components/lessons/viewer/lesson-viewer.types";

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
		<PythonEditor
			initialCode={lesson.starter_code}
			onCodeChange={onCodeChange}
			onRunComplete={onRunComplete}
			className="flex flex-col rounded-xl ring-1 ring-border/70 overflow-hidden shadow-sm"
		/>
	);
}
