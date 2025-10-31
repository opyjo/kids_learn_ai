"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import {
  Menu,
  BookOpen,
  LayoutDashboard,
  TerminalSquare,
  Download,
  HelpCircle,
  Info,
  Gamepad2,
  Home,
  ChevronDown,
  GraduationCap,
  Library,
  Newspaper,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";
import { UserMenu } from "@/components/user/user-menu";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import type { Session } from "@supabase/supabase-js";

type SiteHeaderProps = {
  leftExtras?: ReactNode;
};

type NavItem = { href: string; label: string; Icon: LucideIcon };

// Standalone items
const homeItem: NavItem = { href: "/", label: "Home", Icon: Home };
const dashboardItem: NavItem = {
  href: "/dashboard",
  label: "Dashboard",
  Icon: LayoutDashboard,
};
const aboutItem: NavItem = { href: "/about", label: "About", Icon: Info };
const blogItem: NavItem = {
  href: "/blog",
  label: "Blog",
  Icon: Newspaper,
};

// Learn dropdown items
const learnItems: NavItem[] = [
  { href: "/lessons", label: "Lessons", Icon: BookOpen },
  { href: "/tutor", label: "AI Tutor", Icon: Sparkles },
  { href: "/playground", label: "Playground", Icon: TerminalSquare },
  { href: "/games", label: "Games", Icon: Gamepad2 },
];

// Resources dropdown items
const resourceItems: NavItem[] = [
  { href: "/faq", label: "FAQ", Icon: HelpCircle },
  { href: "/get-thonny", label: "Get Thonny", Icon: Download },
  { href: "/get-trinket", label: "Get Trinket.io", Icon: ExternalLink },
];

// Visual separator component for navigation zones
const Separator = () => (
  <div className="h-4 w-px bg-gray-300 dark:bg-gray-600 mx-1" />
);

export const SiteHeader = ({ leftExtras }: SiteHeaderProps) => {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();

    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };

    checkAuth();

    // Subscribe to auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event: string, session: Session | null) => {
        setIsAuthenticated(!!session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      const shouldElevate = window.scrollY > 12;
      setIsScrolled(shouldElevate);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const renderNavLink = (item: NavItem) => {
    const active = isActive(item.href);
    return (
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={cn(
          "group relative inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-300 ease-out cursor-pointer",
          "text-gray-700 hover:text-blue-600 dark:text-gray-300",
          "hover:bg-white/60 dark:hover:bg-gray-800/70 hover:shadow-[0_8px_20px_-12px_rgba(37,99,235,0.45)] hover:-translate-y-0.5",
          active
            ? "text-blue-600 bg-white/70 dark:bg-gray-800/70 shadow-[0_8px_24px_-12px_rgba(37,99,235,0.55)]"
            : ""
        )}
      >
        <item.Icon
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            "group-hover:-translate-y-0.5"
          )}
        />
        <span>{item.label}</span>
        <span
          className={cn(
            "pointer-events-none absolute inset-x-2 -bottom-1 h-0.5 origin-left scale-x-0 rounded bg-blue-600 transition-transform duration-200",
            "group-hover:scale-x-100",
            active ? "scale-x-100" : ""
          )}
        />
      </Link>
    );
  };

  const renderDropdown = (
    label: string,
    icon: LucideIcon,
    items: NavItem[]
  ) => {
    const Icon = icon;
    const isAnyActive = items.some((item) => isActive(item.href));

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              "group relative inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-300 ease-out cursor-pointer",
              "text-gray-700 hover:text-blue-600 dark:text-gray-300",
              "hover:bg-white/60 dark:hover:bg-gray-800/70 hover:shadow-[0_8px_20px_-12px_rgba(37,99,235,0.45)] hover:-translate-y-0.5",
              isAnyActive
                ? "text-blue-600 bg-white/70 dark:bg-gray-800/70 shadow-[0_8px_24px_-12px_rgba(37,99,235,0.55)]"
                : ""
            )}
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
            <ChevronDown className="h-3 w-3" />
            <span
              className={cn(
                "pointer-events-none absolute inset-x-2 -bottom-1 h-0.5 origin-left scale-x-0 rounded bg-blue-600 transition-transform duration-200",
                "group-hover:scale-x-100",
                isAnyActive ? "scale-x-100" : ""
              )}
            />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48">
          {items.map((item) => (
            <DropdownMenuItem key={item.href} asChild>
              <Link
                href={item.href}
                className="flex items-center gap-2 cursor-pointer"
              >
                <item.Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  return (
    <header
      className={cn(
        "relative sticky top-0 z-50 border-b transition-all duration-300",
        "before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-b-[28px] before:bg-gradient-to-r before:from-blue-500/5 before:via-transparent before:to-purple-500/5",
        isScrolled
          ? "border-white/10 bg-white/80 dark:border-white/10 dark:bg-gray-950/80 backdrop-blur-xl shadow-[0_20px_45px_-24px_rgba(15,23,42,0.55)]"
          : "border-white/5 bg-white/60 dark:border-white/5 dark:bg-gray-900/60 backdrop-blur-lg shadow-[0_8px_32px_rgba(15,23,42,0.12)]"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-0.5">
        <div className="flex items-center gap-3 flex-shrink-0">
          {leftExtras}
          <Link
            href="/"
            className="flex items-center group cursor-pointer flex-shrink-0"
            aria-label="Go to homepage"
          >
            <img
              src="/Logo.png"
              alt="Kids Learn AI Logo"
              className="h-16 w-auto flex-shrink-0 object-contain"
            />
          </Link>
        </div>

        <nav
          className={cn(
            "hidden md:flex items-center gap-2 rounded-full border border-white/40 dark:border-white/10 bg-white/30 dark:bg-gray-950/60 px-2 py-1 backdrop-blur-2xl shadow-[0_12px_34px_-22px_rgba(15,23,42,0.6)] transition-all duration-500 ease-out",
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}
        >
          {/* Home */}
          {renderNavLink(homeItem)}

          {/* Learn Dropdown */}
          {renderDropdown("Learn", GraduationCap, learnItems)}

          {/* Dashboard (auth-only) */}
          {isAuthenticated && renderNavLink(dashboardItem)}

          {/* About */}
          {renderNavLink(aboutItem)}

          {/* Resources Dropdown */}
          {renderDropdown("Resources", Library, resourceItems)}

          {/* Blog */}
          {renderNavLink(blogItem)}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <UserMenu />
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button
                  asChild
                  className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600"
                >
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="md:hidden cursor-pointer rounded-full border border-white/40 bg-white/50 text-gray-700 shadow-[0_8px_24px_-18px_rgba(37,99,235,0.65)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/70 hover:text-gray-700 dark:border-white/10 dark:bg-gray-900/70 dark:text-gray-100 dark:hover:text-gray-100"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-72 border-r border-white/20 bg-white/80 p-0 backdrop-blur-2xl dark:border-white/10 dark:bg-gray-950/80"
            >
              <div className="mt-6 flex flex-col gap-2 px-4 pb-6">
                {/* Home */}
                <Link
                  href={homeItem.href}
                  className={cn(
                    "flex items-center gap-3 rounded-full px-3.5 py-2 text-base transition-all duration-300 cursor-pointer",
                    isActive(homeItem.href)
                      ? "bg-blue-50/80 text-blue-700 shadow-[0_8px_24px_-16px_rgba(37,99,235,0.55)] dark:bg-blue-950/40 dark:text-blue-200"
                      : "text-gray-700 hover:bg-white/70 dark:text-gray-300 dark:hover:bg-gray-800/70"
                  )}
                >
                  <homeItem.Icon className="h-5 w-5" />
                  <span>{homeItem.label}</span>
                </Link>

                {/* Learn Collapsible */}
                <Collapsible>
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-full px-3.5 py-2 text-base transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-800/70 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5" />
                      <span className="font-medium">Learn</span>
                    </div>
                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-1 space-y-1 pl-6">
                    {learnItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-full px-3 py-2 text-sm transition-colors cursor-pointer",
                          isActive(item.href)
                            ? "bg-blue-50/80 text-blue-700 shadow-[0_6px_20px_-12px_rgba(37,99,235,0.45)] dark:bg-blue-950/40 dark:text-blue-200"
                            : "text-gray-700 hover:bg-white/70 dark:text-gray-300 dark:hover:bg-gray-800/70"
                        )}
                      >
                        <item.Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {/* Dashboard (auth-only) */}
                {isAuthenticated && (
                  <Link
                    href={dashboardItem.href}
                    className={cn(
                      "flex items-center gap-3 rounded-full px-3.5 py-2 text-base transition-all duration-300 cursor-pointer",
                      isActive(dashboardItem.href)
                        ? "bg-blue-50/80 text-blue-700 shadow-[0_8px_24px_-16px_rgba(37,99,235,0.55)] dark:bg-blue-950/40 dark:text-blue-200"
                        : "text-gray-700 hover:bg-white/70 dark:text-gray-300 dark:hover:bg-gray-800/70"
                    )}
                  >
                    <dashboardItem.Icon className="h-5 w-5" />
                    <span>{dashboardItem.label}</span>
                  </Link>
                )}

                {/* About */}
                <Link
                  href={aboutItem.href}
                  className={cn(
                    "flex items-center gap-3 rounded-full px-3.5 py-2 text-base transition-all duration-300 cursor-pointer",
                    isActive(aboutItem.href)
                      ? "bg-blue-50/80 text-blue-700 shadow-[0_8px_24px_-16px_rgba(37,99,235,0.55)] dark:bg-blue-950/40 dark:text-blue-200"
                      : "text-gray-700 hover:bg-white/70 dark:text-gray-300 dark:hover:bg-gray-800/70"
                  )}
                >
                  <aboutItem.Icon className="h-5 w-5" />
                  <span>{aboutItem.label}</span>
                </Link>

                {/* Resources Collapsible */}
                <Collapsible>
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-full px-3.5 py-2 text-base transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-800/70 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Library className="h-5 w-5" />
                      <span className="font-medium">Resources</span>
                    </div>
                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-1 space-y-1 pl-6">
                    {resourceItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-full px-3 py-2 text-sm transition-colors cursor-pointer",
                          isActive(item.href)
                            ? "bg-blue-50/80 text-blue-700 shadow-[0_6px_20px_-12px_rgba(37,99,235,0.45)] dark:bg-blue-950/40 dark:text-blue-200"
                            : "text-gray-700 hover:bg-white/70 dark:text-gray-300 dark:hover:bg-gray-800/70"
                        )}
                      >
                        <item.Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {/* Blog */}
                <Link
                  href={blogItem.href}
                  className={cn(
                    "flex items-center gap-3 rounded-full px-3.5 py-2 text-base transition-all duration-300 cursor-pointer",
                    isActive(blogItem.href)
                      ? "bg-blue-50/80 text-blue-700 shadow-[0_8px_24px_-16px_rgba(37,99,235,0.55)] dark:bg-blue-950/40 dark:text-blue-200"
                      : "text-gray-700 hover:bg-white/70 dark:text-gray-300 dark:hover:bg-gray-800/70"
                  )}
                >
                  <blogItem.Icon className="h-5 w-5" />
                  <span>{blogItem.label}</span>
                </Link>

                <div className="mt-6 pt-4 border-t space-y-2">
                  {isAuthenticated ? (
                    <UserMenu />
                  ) : (
                    <>
                      <Button
                        variant="ghost"
                        asChild
                        className="w-full rounded-full border border-white/40 bg-white/70 text-gray-700 shadow-sm hover:bg-white/90 dark:border-white/10 dark:bg-gray-900/70 dark:text-gray-100"
                      >
                        <Link href="/login">Sign In</Link>
                      </Button>
                      <Button
                        asChild
                        className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600"
                      >
                        <Link href="/signup">Sign Up</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
