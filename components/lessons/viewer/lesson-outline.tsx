"use client";

import { CheckCircle, ChevronDown, Lock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { CourseLessonNavItem } from "@/components/lessons/viewer/lesson-viewer.types";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface LessonOutlineProps {
	courseLessons: CourseLessonNavItem[];
	currentOrder: number;
}

export function LessonOutline({
	courseLessons,
	currentOrder,
}: LessonOutlineProps) {
	const [open, setOpen] = useState(false);

	if (courseLessons.length === 0) return null;

	const currentPosition =
		courseLessons.findIndex((item) => item.orderIndex === currentOrder) + 1;

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					size="sm"
					className="h-8 gap-1.5 rounded-full text-xs font-semibold"
					aria-label="Open course outline"
				>
					Week {currentPosition || currentOrder} of {courseLessons.length}
					<ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
				</Button>
			</PopoverTrigger>
			<PopoverContent align="start" className="w-80 p-2">
				<p className="px-2 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
					Course outline
				</p>
				<ul className="max-h-80 space-y-0.5 overflow-y-auto">
					{courseLessons.map((item) => {
						const isCurrent = item.orderIndex === currentOrder;
						const row = (
							<>
								<span
									className={cn(
										"flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
										isCurrent
											? "bg-primary text-primary-foreground"
											: "bg-muted text-muted-foreground",
									)}
									aria-hidden="true"
								>
									{item.orderIndex}
								</span>
								<span className="min-w-0 flex-1 truncate text-sm">
									{item.title}
								</span>
								{item.isCompleted ? (
									<CheckCircle
										className="h-4 w-4 shrink-0 text-green-600"
										aria-label="Completed"
									/>
								) : !item.isAccessible ? (
									<Lock
										className="h-4 w-4 shrink-0 text-muted-foreground"
										aria-label="Locked"
									/>
								) : null}
							</>
						);

						return (
							<li key={item.dbId}>
								{item.isAccessible ? (
									<Link
										href={item.href}
										onClick={() => setOpen(false)}
										aria-current={isCurrent ? "page" : undefined}
										className={cn(
											"flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors hover:bg-muted",
											isCurrent && "bg-primary/10 font-medium",
										)}
									>
										{row}
									</Link>
								) : (
									<div className="flex items-center gap-2 rounded-md px-2 py-1.5 opacity-60">
										{row}
									</div>
								)}
							</li>
						);
					})}
				</ul>
			</PopoverContent>
		</Popover>
	);
}
