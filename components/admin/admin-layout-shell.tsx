"use client";

import type { LucideIcon } from "lucide-react";
import {
	BarChart3,
	BookOpen,
	BriefcaseBusiness,
	CalendarClock,
	ChartNoAxesCombined,
	FileCode,
	FileText,
	FlaskConical,
	GraduationCap,
	HandCoins,
	HelpCircle,
	LayoutDashboard,
	LibraryBig,
	Mail,
	Plus,
	Presentation,
	Target,
	Trophy,
	Users,
	UsersRound,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";

type AdminSectionName = "Workspace" | "People" | "Content" | "Insights";

interface AdminNavItem {
	section: AdminSectionName;
	href: string;
	label: string;
	icon: LucideIcon;
	exact?: boolean;
	showBadge?: boolean;
}

interface AdminNavSection {
	section: AdminSectionName;
	label: string;
	description: string;
	icon: LucideIcon;
	items: AdminNavItem[];
}

const adminNavItems: AdminNavItem[] = [
	{
		section: "Workspace",
		href: "/admin",
		label: "Overview",
		icon: LayoutDashboard,
		exact: true,
	},
	{
		section: "Workspace",
		href: "/admin/enrollments",
		label: "Enrollments",
		icon: GraduationCap,
	},
	{
		section: "Workspace",
		href: "/admin/schedules",
		label: "Class Schedules",
		icon: CalendarClock,
	},
	{
		section: "Workspace",
		href: "/admin/submissions",
		label: "Submissions",
		icon: FileCode,
		showBadge: true,
	},
	{
		section: "People",
		href: "/admin/students",
		label: "Students",
		icon: Users,
	},
	{
		section: "People",
		href: "/admin/inquiries",
		label: "Inquiries",
		icon: Mail,
	},
	{
		section: "Content",
		href: "/admin/lessons",
		label: "Lessons",
		icon: BookOpen,
	},
	{
		section: "Content",
		href: "/admin/quizzes",
		label: "Quizzes & Games",
		icon: Trophy,
	},
	{
		section: "Content",
		href: "/admin/teacher-notes",
		label: "Teacher Notes",
		icon: FileText,
	},
	{
		section: "Insights",
		href: "/admin/investor-deck",
		label: "Investor Deck",
		icon: Presentation,
	},
	{
		section: "Insights",
		href: "/admin/funding-partnerships",
		label: "Funding & Partnerships",
		icon: HandCoins,
	},
	{
		section: "Insights",
		href: "/admin/vfc-internship",
		label: "VFC Internship",
		icon: BriefcaseBusiness,
	},
	{
		section: "Insights",
		href: "/admin/marketing",
		label: "Growth Plan",
		icon: Target,
	},
	{
		section: "Insights",
		href: "/admin/analytics",
		label: "Analytics",
		icon: BarChart3,
	},
	{
		section: "Insights",
		href: "/admin/concept-labs",
		label: "Concept Labs",
		icon: FlaskConical,
	},
	{
		section: "Insights",
		href: "/admin/guide",
		label: "Setup Guide",
		icon: HelpCircle,
	},
];

const adminNavSections: AdminNavSection[] = [
	{
		section: "Workspace",
		label: "Workspace",
		description: "Classes and daily operations",
		icon: LayoutDashboard,
		items: adminNavItems.filter((item) => item.section === "Workspace"),
	},
	{
		section: "People",
		label: "People",
		description: "Students and new inquiries",
		icon: UsersRound,
		items: adminNavItems.filter((item) => item.section === "People"),
	},
	{
		section: "Content",
		label: "Learning content",
		description: "Lessons, quizzes, and guides",
		icon: LibraryBig,
		items: adminNavItems.filter((item) => item.section === "Content"),
	},
	{
		section: "Insights",
		label: "Insights and planning",
		description: "Reports, growth, and resources",
		icon: ChartNoAxesCombined,
		items: adminNavItems.filter((item) => item.section === "Insights"),
	},
];

function isAdminPathActive(
	pathname: string,
	{ href, exact }: Pick<AdminNavItem, "href" | "exact">,
): boolean {
	if (exact) return pathname === href;
	return pathname === href || pathname.startsWith(`${href}/`);
}

function getActiveAdminSection(pathname: string): AdminSectionName {
	return (
		adminNavSections.find((section) =>
			section.items.some((item) => isAdminPathActive(pathname, item)),
		)?.section ?? "Workspace"
	);
}

export function AdminLayoutShell({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const [pendingSubmissions, setPendingSubmissions] = useState(0);
	const activeSection = getActiveAdminSection(pathname);
	const [openSection, setOpenSection] = useState<AdminSectionName | "">(
		activeSection,
	);

	useEffect(() => {
		const fetchData = async () => {
			const supabase = getSupabaseBrowserClient();

			// Fetch pending submissions count
			const { count } = await supabase
				.from("trinket_submissions")
				.select("*", { count: "exact", head: true })
				.eq("status", "submitted");
			setPendingSubmissions(count || 0);
		};
		fetchData();
	}, []);

	useEffect(() => {
		setOpenSection(activeSection);
	}, [activeSection]);

	return (
		<div className="admin-shell min-h-screen bg-slate-50 dark:bg-gray-950">
			{/* Main Site Header */}
			<SiteHeader />

			{/* Main layout with sidebar */}
			<div className="flex">
				{/* Sidebar - Desktop */}
				<aside className="hidden lg:flex lg:min-h-[calc(100vh-88px)] lg:w-64 lg:flex-shrink-0 lg:flex-col lg:border-r lg:border-slate-200 lg:bg-white dark:lg:border-gray-800 dark:lg:bg-gray-900">
					{/* Navigation */}
					<div className="sticky top-[88px] flex flex-1 flex-col overflow-y-auto py-3">
						<nav className="flex-1 px-3" aria-label="Admin navigation">
							<div className="mb-3 px-2">
								<p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
									Admin menu
								</p>
							</div>

							<Accordion
								type="single"
								collapsible
								value={openSection}
								onValueChange={(value) =>
									setOpenSection(value as AdminSectionName | "")
								}
								className="space-y-1.5"
							>
								{adminNavSections.map((section) => {
									const SectionIcon = section.icon;
									const sectionIsActive = section.section === activeSection;
									const sectionPendingCount = section.items.some(
										(item) => item.showBadge,
									)
										? pendingSubmissions
										: 0;

									return (
										<AccordionItem
											key={section.section}
											value={section.section}
											className="overflow-hidden rounded-lg border border-transparent data-[state=open]:border-slate-200 data-[state=open]:bg-slate-50/70 dark:data-[state=open]:border-gray-700 dark:data-[state=open]:bg-gray-800/40"
										>
											<AccordionTrigger
												className={cn(
													"rounded-lg px-2.5 py-2.5 hover:bg-slate-100 hover:no-underline dark:hover:bg-gray-800",
													sectionIsActive && "text-slate-950 dark:text-white",
												)}
											>
												<span className="flex min-w-0 flex-1 items-center gap-2.5">
													<span
														className={cn(
															"flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-slate-100 text-slate-500 dark:bg-gray-800 dark:text-gray-400",
															sectionIsActive &&
																"bg-slate-900 text-white dark:bg-white dark:text-slate-900",
														)}
													>
														<SectionIcon
															className="h-4 w-4"
															aria-hidden="true"
														/>
													</span>
													<span className="min-w-0 text-left">
														<span className="block truncate text-xs font-semibold">
															{section.label}
														</span>
														<span className="block truncate text-[0.68rem] font-normal text-muted-foreground">
															{section.description}
														</span>
													</span>
													{sectionPendingCount > 0 ? (
														<Badge className="ml-auto h-5 bg-orange-100 px-1.5 text-[0.65rem] text-orange-700 hover:bg-orange-100 dark:bg-orange-900 dark:text-orange-200">
															{sectionPendingCount}
														</Badge>
													) : null}
												</span>
											</AccordionTrigger>

											<AccordionContent className="space-y-1 px-2 pb-2">
												{section.items.map((item) => {
													const Icon = item.icon;
													const active = isAdminPathActive(pathname, item);

													return (
														<Link
															key={item.href}
															href={item.href}
															aria-current={active ? "page" : undefined}
															className={cn(
																"flex items-center gap-2 rounded-md px-2.5 py-2 text-xs font-medium transition-colors",
																active
																	? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900"
																	: "text-slate-600 hover:bg-white hover:text-slate-950 dark:text-gray-300 dark:hover:bg-gray-800",
															)}
														>
															<Icon
																className="h-4 w-4 flex-shrink-0"
																aria-hidden="true"
															/>
															<span className="flex-1">{item.label}</span>
															{item.showBadge && pendingSubmissions > 0 ? (
																<Badge
																	variant="secondary"
																	className="h-5 bg-orange-100 px-1.5 text-xs text-orange-700 dark:bg-orange-900 dark:text-orange-300"
																>
																	{pendingSubmissions}
																</Badge>
															) : null}
														</Link>
													);
												})}
											</AccordionContent>
										</AccordionItem>
									);
								})}
							</Accordion>
						</nav>

						{/* Quick Actions */}
						<div className="px-2 pt-3">
							<Button asChild size="sm" className="w-full gap-2">
								<Link href="/admin/lessons/new">
									<Plus className="h-4 w-4" />
									New Lesson
								</Link>
							</Button>
						</div>
					</div>
				</aside>

				{/* Main content area */}
				<div className="flex-1 flex flex-col min-h-[calc(100vh-88px)]">
					{/* Page content */}
					<main className="mx-auto w-full max-w-[1120px] flex-1 p-3 lg:p-3 xl:p-4">
						{children}
					</main>
				</div>
			</div>
		</div>
	);
}
