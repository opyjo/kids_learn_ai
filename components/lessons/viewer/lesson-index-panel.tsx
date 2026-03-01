import { CheckCircle2, Lock, PlayCircle } from "lucide-react";
import Link from "next/link";
import type { CourseLessonNavItem } from "@/components/lessons/viewer/lesson-viewer.types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface LessonIndexPanelProps {
	lessons: CourseLessonNavItem[];
	currentOrder: number;
	onNavigate?: () => void;
	className?: string;
}

export function LessonIndexPanel({
	lessons,
	currentOrder,
	onNavigate,
	className,
}: LessonIndexPanelProps) {
	return (
		<Card className={cn("border shadow-sm", className)}>
			<CardHeader className="pb-3">
				<CardTitle className="text-sm font-semibold">
					Lesson Navigator
				</CardTitle>
			</CardHeader>
			<CardContent className="pt-0">
				<ol className="space-y-1.5">
					{lessons.map((lesson) => {
						const isCurrent = lesson.orderIndex === currentOrder;
						const statusLabel = lesson.isAccessible
							? lesson.isCompleted
								? "Completed"
								: isCurrent
									? "Current"
									: "Available"
							: "Locked";

						return (
							<li key={lesson.dbId}>
								{lesson.isAccessible ? (
									<Link
										href={lesson.href}
										onClick={onNavigate}
										aria-current={isCurrent ? "page" : undefined}
										className={cn(
											"group flex items-center gap-2 rounded-lg border px-2.5 py-2 text-xs transition-colors",
											isCurrent
												? "border-primary bg-primary/10 text-primary"
												: "border-border hover:bg-muted/60 text-foreground",
										)}
									>
										<span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-muted text-[11px] font-semibold text-muted-foreground">
											{lesson.orderIndex}
										</span>
										<span className="flex-1 truncate font-medium">
											{lesson.title}
										</span>
										{lesson.isCompleted ? (
											<CheckCircle2
												className="h-3.5 w-3.5 text-emerald-600"
												aria-label={statusLabel}
											/>
										) : (
											<PlayCircle
												className="h-3.5 w-3.5 text-muted-foreground"
												aria-label={statusLabel}
											/>
										)}
									</Link>
								) : (
									<div className="flex items-center gap-2 rounded-lg border border-dashed border-border bg-muted/30 px-2.5 py-2 text-xs text-muted-foreground">
										<span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-muted text-[11px] font-semibold">
											{lesson.orderIndex}
										</span>
										<span className="flex-1 truncate">{lesson.title}</span>
										<Lock className="h-3.5 w-3.5" />
										<span className="sr-only">
											Lesson {lesson.orderIndex} {statusLabel}
										</span>
									</div>
								)}
							</li>
						);
					})}
				</ol>
				<div className="mt-3 pt-3 border-t border-border">
					<Badge
						variant="outline"
						className="text-[10px] text-muted-foreground"
					>
						Tap a lesson to jump quickly
					</Badge>
				</div>
			</CardContent>
		</Card>
	);
}
