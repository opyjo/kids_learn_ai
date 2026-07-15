"use client";

import {
	BarChart3,
	BookOpen,
	CalendarClock,
	FileCode,
	FileText,
	FlaskConical,
	GraduationCap,
	HelpCircle,
	LayoutDashboard,
	Mail,
	Plus,
	Trophy,
	Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";

const adminNavItems = [
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

export function AdminLayoutShell({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const [pendingSubmissions, setPendingSubmissions] = useState(0);

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

	const isActive = (href: string, exact?: boolean) => {
		if (exact) {
			return pathname === href;
		}
		return pathname === href || pathname.startsWith(`${href}/`);
	};

	return (
		<div className="admin-shell min-h-screen bg-slate-50 dark:bg-gray-950">
			{/* Main Site Header */}
			<SiteHeader />

			{/* Main layout with sidebar */}
			<div className="flex">
				{/* Sidebar - Desktop */}
				<aside className="hidden lg:flex lg:flex-col lg:w-56 lg:flex-shrink-0 lg:border-r lg:border-slate-200 dark:lg:border-gray-800 lg:bg-white dark:lg:bg-gray-900 lg:min-h-[calc(100vh-88px)]">
					{/* Navigation */}
					<div className="sticky top-[88px] flex flex-1 flex-col overflow-y-auto py-3">
						<nav className="flex-1 px-3">
							{adminNavItems.map((item) => {
								const Icon = item.icon;
								const active = isActive(item.href, item.exact);
								const itemIndex = adminNavItems.indexOf(item);
								const showSection =
									itemIndex === 0 ||
									adminNavItems[itemIndex - 1].section !== item.section;

								return (
									<div key={item.href}>
										{showSection && (
											<p className="mb-1 mt-3 px-2 text-[9px] font-semibold uppercase tracking-widest text-slate-400 first:mt-0">
												{item.section}
											</p>
										)}
										<Link
											href={item.href}
											className={cn(
												"mb-0.5 flex items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium transition-colors",
												active
													? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900"
													: "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-gray-300 dark:hover:bg-gray-800",
											)}
										>
											<Icon className="h-4 w-4 flex-shrink-0" />
											<span className="flex-1">{item.label}</span>
											{item.showBadge && pendingSubmissions > 0 && (
												<Badge
													variant="secondary"
													className="h-5 px-1.5 text-xs bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
												>
													{pendingSubmissions}
												</Badge>
											)}
										</Link>
									</div>
								);
							})}
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
