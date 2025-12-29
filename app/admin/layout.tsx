"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  GraduationCap,
  FileCode,
  Users,
  BarChart3,
  BookOpen,
  FileText,
  Plus,
  Home,
  Menu,
  X,
  LogOut,
  Settings,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useEffect, useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [pendingSubmissions, setPendingSubmissions] = useState(0);
  const [user, setUser] = useState<{ email: string; full_name: string | null } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const supabase = getSupabaseBrowserClient();
      
      // Fetch pending submissions count
      const { count } = await supabase
        .from("trinket_submissions")
        .select("*", { count: "exact", head: true })
        .eq("status", "submitted");
      setPendingSubmissions(count || 0);

      // Fetch user info
      const { data: { user: authUser } } = await supabase.auth.getUser();
      if (authUser) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("full_name")
          .eq("id", authUser.id)
          .single();
        setUser({
          email: authUser.email || "",
          full_name: profile?.full_name || null,
        });
      }
    };
    fetchData();
  }, []);

  const handleSignOut = async () => {
    const supabase = getSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.push("/");
  };

  const isActive = (href: string, exact?: boolean) => {
    if (exact) {
      return pathname === href;
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Get current page title for breadcrumb
  const currentPage = adminNavItems.find((item) => isActive(item.href, item.exact));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 dark:lg:border-gray-800 lg:bg-white dark:lg:bg-gray-900">
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-gray-200 dark:border-gray-800">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/Logo.png"
              alt="Kids Learn AI"
              className="h-8 w-auto"
            />
            <span className="font-semibold text-gray-900 dark:text-white">Admin</span>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
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
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
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
          <div className="px-3 mt-6 space-y-2">
            <Button asChild className="w-full gap-2">
              <Link href="/admin/lessons/new">
                <Plus className="h-4 w-4" />
                New Lesson
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full gap-2">
              <Link href="/">
                <Home className="h-4 w-4" />
                Back to Site
              </Link>
            </Button>
          </div>
        </div>

        {/* User section */}
        <div className="border-t border-gray-200 dark:border-gray-800 p-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-medium">
              {user?.full_name?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase() || "A"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {user?.full_name || "Admin"}
              </p>
              <p className="text-xs text-gray-500 truncate">{user?.email}</p>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        {/* Top header */}
        <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between px-4 lg:px-6 py-3">
            {/* Mobile menu button + Breadcrumb */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>

              {/* Logo for mobile */}
              <Link href="/" className="lg:hidden flex items-center gap-2">
                <img
                  src="/Logo.png"
                  alt="Kids Learn AI"
                  className="h-8 w-auto"
                />
              </Link>

              {/* Breadcrumb - Desktop */}
              <nav className="hidden lg:flex items-center gap-2 text-sm">
                <Link
                  href="/admin"
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Admin
                </Link>
                {currentPage && currentPage.href !== "/admin" && (
                  <>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                    <span className="font-medium text-gray-900 dark:text-white">
                      {currentPage.label}
                    </span>
                  </>
                )}
              </nav>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              <div className="lg:hidden">
                <ThemeToggle />
              </div>
              
              {/* User menu - Mobile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="lg:hidden">
                  <button className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-medium">
                    {user?.full_name?.charAt(0)?.toUpperCase() || "A"}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{user?.full_name || "Admin"}</p>
                    <p className="text-xs text-muted-foreground">{user?.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="cursor-pointer">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/" className="cursor-pointer">
                      <Home className="h-4 w-4 mr-2" />
                      Back to Site
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <nav className="p-4 space-y-1">
                {adminNavItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href, item.exact);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                        active
                          ? "bg-primary/10 text-primary"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
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
                <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-800">
                  <Button asChild className="w-full gap-2">
                    <Link href="/admin/lessons/new" onClick={() => setMobileMenuOpen(false)}>
                      <Plus className="h-4 w-4" />
                      New Lesson
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}

