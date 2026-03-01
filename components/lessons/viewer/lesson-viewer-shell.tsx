import type React from "react";
import { useEffect, useRef, useState } from "react";
import { LessonBreadcrumbs } from "@/components/lessons/lesson-breadcrumbs";
import type {
	Lesson,
	LessonNavigation,
	LessonVariant,
} from "@/components/lessons/viewer/lesson-viewer.types";
import { SiteHeader } from "@/components/site-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface LessonViewerShellProps {
	lesson: Lesson;
	courseSlug?: string;
	courseTitle?: string;
	navigation: LessonNavigation;
	variant: LessonVariant;
	mainPanel: React.ReactNode;
	codePanel?: React.ReactNode;
}

export function LessonViewerShell({
	lesson,
	courseSlug,
	courseTitle,
	navigation,
	variant,
	mainPanel,
	codePanel,
}: LessonViewerShellProps) {
	const [isWideDesktop, setIsWideDesktop] = useState(false);
	const [isHeaderHidden, setIsHeaderHidden] = useState(false);
	const lastScrollYRef = useRef(0);
	const hasCodePanel = variant === "level-term" && Boolean(codePanel);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(min-width: 1280px)");
		const handleChange = () => setIsWideDesktop(mediaQuery.matches);

		handleChange();
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	useEffect(() => {
		const HIDE_THRESHOLD = 80;
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > HIDE_THRESHOLD) {
				setIsHeaderHidden(currentScrollY > lastScrollYRef.current);
			} else {
				setIsHeaderHidden(false);
			}
			lastScrollYRef.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
			<SiteHeader />

			<div className="container mx-auto px-4 pt-2">
				<LessonBreadcrumbs
					courseSlug={courseSlug}
					courseTitle={courseTitle}
					lessonTitle={lesson.title}
					difficulty={lesson.difficulty}
					isPremium={lesson.is_premium}
				/>
			</div>

			<div className="mx-auto max-w-[1600px] px-4 pb-5">
				<div
					className={cn(
						"grid gap-3 items-start",
						hasCodePanel
							? "xl:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]"
							: "",
					)}
				>
					<div className="min-w-0">
						{hasCodePanel ? (
							isWideDesktop ? (
								mainPanel
							) : (
								<Tabs defaultValue="learn" className="w-full">
									<TabsList className="grid w-full grid-cols-2 h-10 bg-muted/60">
										<TabsTrigger value="learn" className="font-semibold">
											Learn
										</TabsTrigger>
										<TabsTrigger value="code" className="font-semibold">
											Code
										</TabsTrigger>
									</TabsList>
									<TabsContent value="learn" className="mt-4">
										{mainPanel}
									</TabsContent>
									<TabsContent value="code" className="mt-4">
										{codePanel}
									</TabsContent>
								</Tabs>
							)
						) : (
							mainPanel
						)}
					</div>

					{hasCodePanel && isWideDesktop && (
						<aside
							className={cn(
								"hidden xl:block sticky self-start min-w-0 transition-[top] duration-300",
								isHeaderHidden ? "top-4" : "top-20",
							)}
						>
							{codePanel}
						</aside>
					)}
				</div>
			</div>
		</div>
	);
}
