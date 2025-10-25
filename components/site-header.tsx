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
  BadgeDollarSign,
  Download,
  HelpCircle,
  Info,
  Gamepad2,
  Home,
  ChevronDown,
  GraduationCap,
  Library,
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
const pricingItem: NavItem = {
  href: "/pricing",
  label: "Pricing",
  Icon: BadgeDollarSign,
};

// Learn dropdown items
const learnItems: NavItem[] = [
  { href: "/lessons", label: "Lessons", Icon: BookOpen },
  { href: "/playground", label: "Playground", Icon: TerminalSquare },
  { href: "/games", label: "Games", Icon: Gamepad2 },
];

// Resources dropdown items
const resourceItems: NavItem[] = [
  { href: "/about", label: "About", Icon: Info },
  { href: "/faq", label: "FAQ", Icon: HelpCircle },
  { href: "/get-thonny", label: "Get Thonny", Icon: Download },
];

// Visual separator component for navigation zones
const Separator = () => (
  <div className="h-4 w-px bg-gray-300 dark:bg-gray-600 mx-1" />
);

export const SiteHeader = ({ leftExtras }: SiteHeaderProps) => {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const renderNavLink = (item: NavItem) => {
    const active = isActive(item.href);
    return (
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={cn(
          "group relative inline-flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium transition-all",
          "text-gray-700 hover:text-blue-600 dark:text-gray-300",
          active ? "text-blue-600" : ""
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
              "group relative inline-flex items-center gap-1 rounded-md px-3 py-1 text-sm font-medium transition-all",
              "text-gray-700 hover:text-blue-600 dark:text-gray-300",
              isAnyActive ? "text-blue-600" : ""
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
    <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-0.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {leftExtras}
          <Link
            href="/"
            className="flex items-center group"
            aria-label="Go to homepage"
          >
            <img
              src="/Logo.svg"
              alt="Kids Learn AI Logo"
              className="h-16 w-auto transition-transform duration-200 group-hover:rotate-6"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-2">
          {/* Home */}
          {renderNavLink(homeItem)}

          {/* Learn Dropdown */}
          {renderDropdown("Learn", GraduationCap, learnItems)}

          {/* Dashboard (auth-only) */}
          {isAuthenticated && renderNavLink(dashboardItem)}

          {/* Resources Dropdown */}
          {renderDropdown("Resources", Library, resourceItems)}

          {/* Pricing */}
          {renderNavLink(pricingItem)}
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
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <div className="mt-6 flex flex-col gap-2">
                {/* Home */}
                <Link
                  href={homeItem.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-base transition-colors",
                    isActive(homeItem.href)
                      ? "bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  <homeItem.Icon className="h-5 w-5" />
                  <span>{homeItem.label}</span>
                </Link>

                {/* Learn Collapsible */}
                <Collapsible>
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5" />
                      <span className="font-medium">Learn</span>
                    </div>
                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-6 space-y-1 mt-1">
                    {learnItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                          isActive(item.href)
                            ? "bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
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
                      "flex items-center gap-3 rounded-md px-3 py-2 text-base transition-colors",
                      isActive(dashboardItem.href)
                        ? "bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                  >
                    <dashboardItem.Icon className="h-5 w-5" />
                    <span>{dashboardItem.label}</span>
                  </Link>
                )}

                {/* Resources Collapsible */}
                <Collapsible>
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="flex items-center gap-3">
                      <Library className="h-5 w-5" />
                      <span className="font-medium">Resources</span>
                    </div>
                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-6 space-y-1 mt-1">
                    {resourceItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                          isActive(item.href)
                            ? "bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        )}
                      >
                        <item.Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {/* Pricing */}
                <Link
                  href={pricingItem.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-base transition-colors",
                    isActive(pricingItem.href)
                      ? "bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  <pricingItem.Icon className="h-5 w-5" />
                  <span>{pricingItem.label}</span>
                </Link>

                <div className="mt-6 pt-4 border-t space-y-2">
                  {isAuthenticated ? (
                    <UserMenu />
                  ) : (
                    <>
                      <Button variant="ghost" asChild className="w-full">
                        <Link href="/login">Sign In</Link>
                      </Button>
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600"
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
