"use client";

import {
    BarChart3,
    BookOpen,
    FileCode,
    FileText,
    GraduationCap,
    LayoutDashboard,
    Mail,
    Plus,
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
        href: "/admin",
        label: "Overview",
        icon: LayoutDashboard,
        exact: true,
    },
    {
        href: "/admin/enrollments",
        label: "Enrollments",
        icon: GraduationCap,
    },
    {
        href: "/admin/submissions",
        label: "Submissions",
        icon: FileCode,
        showBadge: true,
    },
    {
        href: "/admin/students",
        label: "Students",
        icon: Users,
    },
    {
        href: "/admin/inquiries",
        label: "Inquiries",
        icon: Mail,
    },
    {
        href: "/admin/lessons",
        label: "Lessons",
        icon: BookOpen,
    },
    {
        href: "/admin/teacher-notes",
        label: "Teacher Notes",
        icon: FileText,
    },
    {
        href: "/admin/analytics",
        label: "Analytics",
        icon: BarChart3,
    },
];

export function AdminLayoutShell({
    children,
}: {
    children: React.ReactNode;
}) {
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
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
            {/* Main Site Header */}
            <SiteHeader />

            {/* Main layout with sidebar */}
            <div className="flex">
                {/* Sidebar - Desktop */}
                <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:flex-shrink-0 lg:border-r lg:border-gray-200 dark:lg:border-gray-800 lg:bg-white dark:lg:bg-gray-900 lg:min-h-[calc(100vh-88px)]">
                    {/* Navigation */}
                    <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto sticky top-[88px]">
                        <nav className="flex-1 px-3 space-y-1">
                            {adminNavItems.map((item) => {
                                const Icon = item.icon;
                                const active = isActive(item.href, item.exact);

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                                            active
                                                ? "bg-primary/10 text-primary"
                                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                                        )}
                                    >
                                        <Icon className="h-5 w-5 flex-shrink-0" />
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
                                );
                            })}
                        </nav>

                        {/* Quick Actions */}
                        <div className="px-3 mt-6">
                            <Button asChild className="w-full gap-2">
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
                    <main className="flex-1 p-4 lg:p-8">{children}</main>
                </div>
            </div>
        </div>
    );
}
