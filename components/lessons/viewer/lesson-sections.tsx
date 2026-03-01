import {
	Award,
	BookOpen,
	BrainCircuit,
	Clock,
	Eye,
	FileText,
	MessageSquare,
	Sparkles,
	Upload,
} from "lucide-react";
import type React from "react";
import { useMemo } from "react";
import { TrinketPreview } from "@/components/dashboard/trinket-preview";
import { TrinketSubmissionForm } from "@/components/dashboard/trinket-submission-form";
import {
	LessonMarkdown,
	ThemedMarkdown,
} from "@/components/lessons/viewer/lesson-markdown";
import { parseAiMlActivities } from "@/components/lessons/viewer/lesson-viewer.helpers";
import type {
	Lesson,
	LessonSubmission,
	LessonVariant,
} from "@/components/lessons/viewer/lesson-viewer.types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const URL_PATTERN = /^https?:\/\//;

interface LessonSectionsProps {
	lesson: Lesson;
	variant: LessonVariant;
	userId?: string;
	submission: LessonSubmission | null;
	showSubmissionPreview: boolean;
	onToggleSubmissionPreview: () => void;
	onSubmissionSuccess: () => Promise<void> | void;
}

interface SectionItem {
	id: string;
	label: string;
	icon: React.ComponentType<{ className?: string }>;
	content: React.ReactNode;
}

function getGridClass(sectionCount: number): string {
	if (sectionCount <= 1) return "grid-cols-1";
	if (sectionCount === 2) return "grid-cols-2";
	if (sectionCount === 3) return "grid-cols-3";
	if (sectionCount === 4) return "grid-cols-4";
	return "grid-cols-5";
}

function AiMlActivities({ starterCode }: { starterCode: string }) {
	const lines = useMemo(() => parseAiMlActivities(starterCode), [starterCode]);

	return (
		<div className="space-y-2 text-sm text-foreground">
			{lines.map((line) => {
				if (line.type === "heading") {
					return (
						<div
							key={line.key}
							className="font-semibold text-primary mt-4 mb-2 first:mt-0"
						>
							{line.text}
						</div>
					);
				}

				const lineClass = cn(
					"leading-relaxed",
					line.type === "list" ? "flex items-start gap-2.5" : "",
					line.emphasized ? "text-foreground" : "text-foreground/80",
				);

				return (
					<div key={line.key} className={lineClass}>
						{line.type === "list" && (
							<span className="text-primary font-medium mt-0.5 shrink-0">
								{line.marker}
							</span>
						)}
						<div className="flex-1">
							{line.parts.map((part, index) => {
								const key = `${line.key}-part-${index}`;
								if (URL_PATTERN.test(part)) {
									return (
										<a
											key={key}
											href={part}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1 rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-xs font-medium text-primary hover:bg-primary/10 transition-colors underline underline-offset-2"
										>
											{part}
										</a>
									);
								}

								return <span key={key}>{part}</span>;
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export function LessonSections({
	lesson,
	variant,
	userId,
	submission,
	showSubmissionPreview,
	onToggleSubmissionPreview,
	onSubmissionSuccess,
}: LessonSectionsProps) {
	const lessonSection: SectionItem = {
		id: "lesson",
		label: "Lesson",
		icon: FileText,
		content: <LessonMarkdown content={lesson.content} />,
	};

	const sections: SectionItem[] = [lessonSection];

	if (variant === "ai-ml") {
		sections.push({
			id: "activities",
			label: "Activities",
			icon: BookOpen,
			content: <AiMlActivities starterCode={lesson.starter_code} />,
		});
	}

	if (variant === "level-term") {
		if (lesson.class_activities) {
			sections.push({
				id: "activity",
				label: "Activity",
				icon: Sparkles,
				content: (
					<div className="rounded-xl border border-purple-200/60 bg-purple-50/70 dark:border-purple-900/60 dark:bg-purple-950/20 p-4">
						<div className="flex items-center gap-2.5 mb-3">
							<Sparkles className="h-4 w-4 text-purple-600" />
							<h3 className="text-sm font-semibold text-purple-800 dark:text-purple-200">
								In-Class Activity
							</h3>
						</div>
						<ThemedMarkdown
							content={lesson.class_activities}
							className="text-purple-950 dark:text-purple-100"
							linkClassName="text-purple-700 dark:text-purple-300"
						/>
					</div>
				),
			});
		}

		if (lesson.ai_activities) {
			sections.push({
				id: "ai-lab",
				label: "AI Lab",
				icon: BrainCircuit,
				content: (
					<div className="rounded-xl border border-emerald-200/60 bg-emerald-50/70 dark:border-emerald-900/60 dark:bg-emerald-950/20 p-4">
						<div className="flex items-center gap-2.5 mb-3">
							<BrainCircuit className="h-4 w-4 text-emerald-600" />
							<h3 className="text-sm font-semibold text-emerald-800 dark:text-emerald-200">
								AI Connection Lab
							</h3>
						</div>
						<ThemedMarkdown
							content={lesson.ai_activities}
							className="text-emerald-950 dark:text-emerald-100"
							linkClassName="text-emerald-700 dark:text-emerald-300"
						/>
					</div>
				),
			});
		}

		if (lesson.take_home_assignment) {
			sections.push({
				id: "homework",
				label: "Homework",
				icon: BookOpen,
				content: (
					<div className="rounded-xl border border-blue-200/60 bg-blue-50/70 dark:border-blue-900/60 dark:bg-blue-950/20 p-4">
						<div className="flex items-center gap-2.5 mb-3">
							<BookOpen className="h-4 w-4 text-blue-600" />
							<h3 className="text-sm font-semibold text-blue-800 dark:text-blue-200">
								Take-Home Assignment
							</h3>
						</div>
						<ThemedMarkdown
							content={lesson.take_home_assignment}
							className="text-blue-950 dark:text-blue-100"
							linkClassName="text-blue-700 dark:text-blue-300"
						/>

						{userId ? (
							<div className="mt-5 pt-4 border-t border-blue-200/60 dark:border-blue-900/60">
								<div className="flex items-center gap-2 mb-3">
									<Upload className="h-4 w-4 text-blue-600" />
									<h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200">
										Submit Your Work
									</h4>
								</div>

								{!submission ? (
									<div className="flex flex-col items-start gap-3">
										<p className="text-xs text-blue-700 dark:text-blue-300">
											Complete your assignment on Trinket, then submit it here.
										</p>
										<TrinketSubmissionForm
											lessonId={lesson.dbId}
											lessonTitle={lesson.title}
											onSubmitSuccess={onSubmissionSuccess}
										/>
									</div>
								) : (
									<div className="space-y-4">
										<div className="flex items-center justify-between flex-wrap gap-3">
											<div className="flex items-center gap-2">
												{submission.status === "graded" ? (
													<Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100 gap-1">
														<Award className="h-3 w-3" />
														Graded
														{submission.grade ? `: ${submission.grade}` : ""}
													</Badge>
												) : submission.status === "reviewed" ? (
													<Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 gap-1">
														<MessageSquare className="h-3 w-3" />
														Reviewed
													</Badge>
												) : (
													<Badge variant="secondary" className="gap-1">
														<Clock className="h-3 w-3" />
														Pending Review
													</Badge>
												)}
											</div>
											<div className="flex items-center gap-2">
												<Button
													variant="outline"
													size="sm"
													onClick={onToggleSubmissionPreview}
													className="gap-1.5 text-xs h-8"
												>
													<Eye className="h-3 w-3" />
													{showSubmissionPreview ? "Hide" : "View"} Submission
												</Button>
												{submission.status === "submitted" && (
													<TrinketSubmissionForm
														lessonId={lesson.dbId}
														lessonTitle={lesson.title}
														existingUrl={submission.trinketUrl}
														onSubmitSuccess={onSubmissionSuccess}
													/>
												)}
											</div>
										</div>

										{submission.feedback && (
											<div className="rounded-lg border border-blue-200/60 dark:border-blue-900/60 bg-background/70 p-3">
												<div className="flex items-center gap-2 mb-2">
													<MessageSquare className="h-4 w-4 text-blue-600" />
													<span className="text-sm font-semibold text-blue-800 dark:text-blue-200">
														Teacher Feedback
													</span>
												</div>
												<p className="text-sm whitespace-pre-wrap text-blue-950 dark:text-blue-100">
													{submission.feedback}
												</p>
											</div>
										)}

										{showSubmissionPreview && (
											<TrinketPreview
												trinketUrl={submission.trinketUrl}
												title="Your Submission"
											/>
										)}
									</div>
								)}
							</div>
						) : (
							<div className="mt-5 pt-4 border-t border-blue-200/60 dark:border-blue-900/60">
								<p className="text-xs text-blue-700 dark:text-blue-300 text-center">
									Sign in to submit homework and receive teacher feedback.
								</p>
							</div>
						)}
					</div>
				),
			});
		}
	}

	if (sections.length === 1) {
		return sections[0].content;
	}

	return (
		<Tabs defaultValue={sections[0].id} className="w-full">
			<TabsList
				className={cn(
					"grid w-full h-10 bg-muted/60",
					getGridClass(sections.length),
				)}
			>
				{sections.map((section) => (
					<TabsTrigger
						key={section.id}
						value={section.id}
						className="gap-1.5 text-xs sm:text-sm font-semibold"
					>
						<section.icon className="h-3.5 w-3.5" />
						<span className="truncate">{section.label}</span>
					</TabsTrigger>
				))}
			</TabsList>
			{sections.map((section) => (
				<TabsContent key={section.id} value={section.id} className="mt-4">
					<Card className="border shadow-sm">
						<CardContent className="p-4">{section.content}</CardContent>
					</Card>
				</TabsContent>
			))}
		</Tabs>
	);
}
