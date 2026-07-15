import {
	ArrowRight,
	CalendarClock,
	FileText,
	FlaskConical,
	Lightbulb,
	Trophy,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { requireAdmin } from "@/lib/auth-helpers";

const guideSections = [
	{
		id: "quizzes",
		icon: Trophy,
		iconColor: "text-purple-500",
		title: "Quizzes & Games",
		description:
			"Create quizzes for lessons and host live games kids can join with a code",
		href: "/admin/quizzes",
		linkLabel: "Go to Quizzes & Games",
		steps: [
			{
				title: "Create or generate a quiz",
				text: "Open Quizzes & Games and use the Create tab to write your own questions, or click Generate to let the AI draft questions from a lesson's content. You can also batch-generate drafts for every lesson that is missing one.",
			},
			{
				title: "Review and publish",
				text: "New quizzes start as drafts, which students cannot see. Read through each question, fix anything that looks off, then set the status to Published.",
			},
			{
				title: "Kids take the quiz",
				text: "Published Quick Checks show up inside the lesson and on student dashboards automatically. Results appear in the report, which you can export as a CSV.",
			},
			{
				title: "Host a live game (optional)",
				text: "Click Host on any quiz to start a live game. You get a room code — kids go to the Join Game page, type in the code, and play together in real time while you control the pace.",
			},
		],
	},
	{
		id: "concept-labs",
		icon: FlaskConical,
		iconColor: "text-emerald-500",
		title: "Concept Labs",
		description:
			"Interactive Predict → Play → Explain → Apply activities attached to lessons",
		href: "/admin/concept-labs",
		linkLabel: "Go to Concept Labs report",
		steps: [
			{
				title: "Labs are built in code, not in the admin panel",
				text: "Each lab is a small file in the project (lib/concept-labs/labs) that a developer adds and registers. A lab linked to a course and lesson number shows up as a Concept Lab tab inside that lesson; a lab with no lesson attached appears on the public Labs page.",
			},
			{
				title: "Ask a developer to add or change a lab",
				text: "If you want a new lab, describe the concept and which lesson it belongs to. The developer guide lives in lib/concept-labs/README.md in the project.",
			},
			{
				title: "Read the results here",
				text: "The Concept Labs page in this admin area is a report. It shows how much students improved between their first prediction and their final answer, so you can see which labs are actually helping.",
			},
		],
	},
	{
		id: "teacher-notes",
		icon: FileText,
		iconColor: "text-blue-500",
		title: "Teacher Notes",
		description:
			"Lesson-by-lesson teaching guides that come from markdown files in the project",
		href: "/admin/teacher-notes",
		linkLabel: "Go to Teacher Notes",
		steps: [
			{
				title: "Write the note as a markdown file",
				text: "Each lesson folder in the project (docs/Lesson_content) can hold a teacher-notes.md file. Copy the _TEMPLATE_teacher-notes.md file as a starting point and fill it in.",
			},
			{
				title: "Run Sync Lessons",
				text: "On the Lessons page, click the Sync Lessons button. This reads the markdown files and loads any new teacher notes into the site.",
			},
			{
				title: "Check coverage",
				text: "The Teacher Notes page shows which lessons have notes (green) and which are still missing them (orange), so you always know what is left to write.",
			},
		],
	},
	{
		id: "schedules",
		icon: CalendarClock,
		iconColor: "text-orange-500",
		title: "Class Schedules",
		description:
			"Weekly live-class times and meeting links that enrolled students see",
		href: "/admin/schedules",
		linkLabel: "Go to Class Schedules",
		steps: [
			{
				title: "Add a schedule",
				text: "On the Class Schedules page, click Add. Pick the course, the day of the week, the start time, and how long the class runs.",
			},
			{
				title: "Paste the meeting link",
				text: 'Add your Zoom or Google Meet link and any notes (for example, "bring your project from last week"). Students enrolled in that course see the time and link on their dashboard.',
			},
			{
				title: "Edit or remove any time",
				text: "Use the edit button to change a class time or link, or the trash button to remove it. You can also mark a schedule inactive to hide it without deleting it.",
			},
		],
	},
];

export default async function AdminGuidePage() {
	await requireAdmin();

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
					Setup Guide
				</h1>
				<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
					How to set up Quizzes & Games, Concept Labs, Teacher Notes, and Class
					Schedules
				</p>
			</div>

			<Card className="border-purple-200 bg-purple-50/50 dark:border-purple-900 dark:bg-purple-950/20">
				<CardContent className="flex gap-3 pt-5">
					<Lightbulb className="h-5 w-5 shrink-0 text-purple-500" />
					<p className="text-sm text-gray-700 dark:text-gray-300">
						This page is only visible to admins. Each section below walks
						through one feature in plain language, with a link to the page where
						you do the work.
					</p>
				</CardContent>
			</Card>

			{guideSections.map((section) => {
				const Icon = section.icon;
				return (
					<Card key={section.id}>
						<CardHeader>
							<div className="flex flex-wrap items-center justify-between gap-3">
								<div>
									<CardTitle className="flex items-center gap-2">
										<Icon className={`h-5 w-5 ${section.iconColor}`} />
										{section.title}
									</CardTitle>
									<CardDescription>{section.description}</CardDescription>
								</div>
								<Button variant="outline" size="sm" asChild>
									<Link href={section.href}>
										{section.linkLabel}
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</div>
						</CardHeader>
						<CardContent className="space-y-4">
							{section.steps.map((step, index) => (
								<div key={step.title} className="flex gap-3">
									<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
										{index + 1}
									</div>
									<div>
										<p className="font-medium">{step.title}</p>
										<p className="text-sm text-muted-foreground">{step.text}</p>
									</div>
								</div>
							))}
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
}
