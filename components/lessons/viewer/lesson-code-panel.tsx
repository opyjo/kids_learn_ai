import { PythonEditor } from "@/components/code/python-editor";
import { WebEditor } from "@/components/code/web-editor";
import type { Lesson } from "@/components/lessons/viewer/lesson-viewer.types";

interface LessonCodePanelProps {
	lesson: Lesson;
	courseSlug?: string;
	onCodeChange: (code: string) => void;
	onRunComplete: (output: string, isSuccess: boolean) => void;
}

export function LessonCodePanel({
	lesson,
	courseSlug,
	onCodeChange,
	onRunComplete,
}: LessonCodePanelProps) {
	if (lesson.editor_type === "none") return null;

	if (lesson.editor_type === "web") {
		return (
			<WebEditor
				initialFiles={lesson.starter_files}
				onProjectChange={(files) => onCodeChange(JSON.stringify(files))}
				storageKey={`course:${courseSlug || lesson.dbId}`}
			/>
		);
	}

	return (
		<PythonEditor
			initialCode={lesson.starter_code}
			onCodeChange={onCodeChange}
			onRunComplete={onRunComplete}
			storageKey={lesson.dbId}
			className="flex flex-col rounded-xl ring-1 ring-border/70 overflow-hidden shadow-sm"
		/>
	);
}
