"use client";

import { ArrowDown, ArrowUp, GripVertical } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { StudentQuestion } from "@/lib/quizzes/types";

interface Props {
	question: StudentQuestion;
	value: string | string[];
	onChange: (value: string | string[]) => void;
	disabled?: boolean;
	visibleOptions?: string[];
}

export function QuestionInput({
	question,
	value,
	onChange,
	disabled,
	visibleOptions,
}: Props) {
	const [announcement, setAnnouncement] = useState("");
	const options = visibleOptions || question.options;
	if (question.question_type === "code_ordering") {
		const ordered = Array.isArray(value) ? value : options;
		const move = (index: number, direction: -1 | 1) => {
			const next = [...ordered];
			const destination = index + direction;
			if (destination < 0 || destination >= next.length) return;
			[next[index], next[destination]] = [next[destination], next[index]];
			onChange(next);
			setAnnouncement(`Moved line ${index + 1} to position ${destination + 1}`);
		};
		const drop = (from: number, to: number) => {
			const next = [...ordered];
			const [item] = next.splice(from, 1);
			next.splice(to, 0, item);
			onChange(next);
			setAnnouncement(`Moved code line to position ${to + 1}`);
		};
		return (
			<div
				className="space-y-2"
				role="list"
				aria-label="Code lines in their current order"
			>
				{ordered.map((option, index) => (
					<div
						key={`${option}-${index}`}
						draggable={!disabled}
						onDragStart={(event) =>
							event.dataTransfer.setData("text/plain", String(index))
						}
						onDragOver={(event) => event.preventDefault()}
						onDrop={(event) =>
							drop(Number(event.dataTransfer.getData("text/plain")), index)
						}
						className="flex items-center gap-2 rounded-lg border bg-muted/30 p-2"
						role="listitem"
					>
						<GripVertical
							className="h-4 w-4 text-muted-foreground"
							aria-hidden
						/>
						<code className="min-w-0 flex-1 whitespace-pre-wrap text-sm">
							{option}
						</code>
						<Button
							type="button"
							variant="ghost"
							size="icon"
							disabled={disabled || index === 0}
							onClick={() => move(index, -1)}
							aria-label={`Move line ${index + 1} up`}
						>
							<ArrowUp className="h-4 w-4" />
						</Button>
						<Button
							type="button"
							variant="ghost"
							size="icon"
							disabled={disabled || index === ordered.length - 1}
							onClick={() => move(index, 1)}
							aria-label={`Move line ${index + 1} down`}
						>
							<ArrowDown className="h-4 w-4" />
						</Button>
					</div>
				))}
				<p className="sr-only" aria-live="polite">
					{announcement}
				</p>
			</div>
		);
	}

	return (
		<div
			className="grid gap-2 sm:grid-cols-2"
			role="radiogroup"
			aria-label={question.question}
		>
			{options.map((option) => (
				<Button
					key={option}
					type="button"
					variant={value === option ? "default" : "outline"}
					disabled={disabled}
					onClick={() => onChange(option)}
					className="h-auto min-h-12 whitespace-normal justify-start text-left"
					role="radio"
					aria-checked={value === option}
				>
					{option}
				</Button>
			))}
		</div>
	);
}
