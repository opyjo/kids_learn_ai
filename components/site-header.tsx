"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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
  ChevronDown,
  GraduationCap,
  Library,
  Newspaper,
  Sparkles,
  ExternalLink,
  Shield,
  DollarSign,
  CreditCard,
  MessageSquare,
  FileText,
  Brain,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";
import { UserMenu } from "@/components/user/user-menu";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import type { Session } from "@supabase/supabase-js";

type SiteHeaderProps = {
  leftExtras?: ReactNode;
};

type NavItem = {
  href: string;
  label: string;
  Icon: LucideIcon;
  description?: string;
};

// Navigation data
const NAV_ITEMS = {
  dashboard: {
    href: "/dashboard",
    label: "Dashboard",
    Icon: LayoutDashboard,
  },
  about: { href: "/about", label: "About", Icon: Info },
  blog: { href: "/blog", label: "Blog", Icon: Newspaper },
  pricing: { href: "/pricing", label: "Pricing", Icon: DollarSign },
  lessons: [
    {
      href: "/lessons?course=python-foundations",
      label: "Python Foundations for AI",
      Icon: BookOpen,
      description: "Master Python basics for AI development",
    },
    {
      href: "/lessons?course=ai-ml",
      label: "AI & Machine Learning",
      Icon: Brain,
      description: "Explore AI and ML concepts",
    },
  ],
  learn: [
    {
      href: "/tutor",
      label: "AI Tutor",
      Icon: Sparkles,
      description: "Get personalized AI tutoring",
    },
    {
      href: "/playground",
      label: "Playground",
      Icon: TerminalSquare,
      description: "Experiment with code",
    },
    {
      href: "/games",
      label: "Games",
      Icon: Gamepad2,
      description: "Learn through interactive games",
    },
  ],
  resources: [
    {
      href: "/ai-playgrounds",
      label: "AI Playgrounds",
      Icon: Sparkles,
      description: "Interactive AI tools",
    },
    {
      href: "/faq",
      label: "FAQ",
      Icon: HelpCircle,
      description: "Frequently asked questions",
    },
    {
      href: "/contact",
      label: "Contact",
      Icon: MessageSquare,
      description: "Get in touch with us",
    },
    {
      href: "/get-thonny",
      label: "Get Thonny",
      Icon: Download,
      description: "Download Thonny IDE",
    },
    {
      href: "/get-trinket",
      label: "Get Trinket.io",
      Icon: ExternalLink,
      description: "Access Trinket online",
    },
  ],
  admin: [
    {
      href: "/admin",
      label: "Dashboard",
      Icon: LayoutDashboard,
      description: "Admin overview",
    },
    {
      href: "/admin/teacher-notes",
      label: "Teacher Notes",
      Icon: FileText,
      description: "Manage lesson notes",
    },
    {
      href: "/admin/payments",
      label: "Payments",
      Icon: CreditCard,
      description: "View payment records",
    },
  ],
};

// Components
const NavLink = ({ item, isActive }: { item: NavItem; isActive: boolean }) => (
  <Link
    href={item.href}
    className={cn(
      "group relative inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-150 cursor-pointer rounded-lg",
      "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400",
      isActive
        ? "text-blue-600 bg-blue-50 dark:bg-blue-950/30 dark:text-blue-400"
        : "hover:bg-gray-100 dark:hover:bg-gray-800/50"
    )}
  >
    <item.Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
    <span>{item.label}</span>
  </Link>
);

const MegaMenuItem = ({
  item,
  isActive,
}: {
  item: NavItem;
  isActive: boolean;
}) => (
  <NavigationMenuLink asChild>
    <Link
      href={item.href}
      className={cn(
        "group relative flex flex-col gap-1 rounded-lg p-3 transition-all duration-150 cursor-pointer",
        "hover:bg-blue-50 dark:hover:bg-blue-950/30",
        "border border-transparent hover:border-blue-200 dark:hover:border-blue-800/50",
        isActive &&
          "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800"
      )}
    >
      <div className="font-semibold text-sm text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {item.label}
      </div>
      {item.description && (
        <div className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
          {item.description}
        </div>
      )}
    </Link>
  </NavigationMenuLink>
);

const MegaMenuSection = ({
  title,
  icon: Icon,
  items,
  isActive,
  iconColor,
}: {
  title: string;
  icon: LucideIcon;
  items: NavItem[];
  isActive: (href: string) => boolean;
  iconColor?: string;
}) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2 mb-2 px-1">
      <Icon
        className={cn(
          "h-4 w-4",
          iconColor || "text-blue-600 dark:text-blue-400"
        )}
      />
      <h3 className="font-semibold text-xs uppercase tracking-wide text-gray-700 dark:text-gray-300">
        {title}
      </h3>
    </div>
    <div className="space-y-1">
      {items.map((item) => (
        <MegaMenuItem
          key={item.href}
          item={item}
          isActive={isActive(item.href)}
        />
      ))}
    </div>
  </div>
);

const MobileNavLink = ({
  item,
  isActive,
  onClick,
}: {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
}) => (
  <Link
    href={item.href}
    onClick={onClick}
    className={cn(
      "flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg transition-colors cursor-pointer",
      isActive
        ? "bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400 font-medium"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"
    )}
  >
    <item.Icon className="h-4 w-4" />
    <span>{item.label}</span>
  </Link>
);

export const SiteHeader = ({ leftExtras }: SiteHeaderProps) => {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const isLearnActive =
    NAV_ITEMS.learn.some((item) => isActive(item.href)) ||
    NAV_ITEMS.lessons.some((item) => isActive(item.href));

  const closeMobileMenu = () => {
    const trigger = document.querySelector(
      '[aria-label="Open menu"]'
    ) as HTMLElement;
    trigger?.click();
  };

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();

    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };

    checkAuth();

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
    const checkAdminRole = async () => {
      if (!isAuthenticated) {
        setIsAdmin(false);
        return;
      }

      try {
        const supabase = getSupabaseBrowserClient();
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (user) {
          const { data: profile, error } = await supabase
            .from("profiles")
            .select("role")
            .eq("id", user.id)
            .single();

          if (error) {
            console.error("Error fetching profile role:", error);
            setIsAdmin(false);
            return;
          }

          setIsAdmin(profile?.role === "admin");
        }
      } catch (error) {
        console.error("Error in checkAdminRole:", error);
        setIsAdmin(false);
      }
    };

    checkAdminRole();
  }, [isAuthenticated]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-200",
        isScrolled
          ? "bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 shadow-lg"
          : "bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800"
      )}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            {leftExtras}
            <Link
              href="/"
              className="flex items-center cursor-pointer group"
              aria-label="Go to homepage"
            >
              <img
                src="/Logo.png"
                alt="Kids Learn AI Logo"
                className="h-10 w-auto transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex bg-white dark:bg-gray-900 px-3 py-2 rounded-full border border-gray-200 dark:border-gray-800 shadow-sm **:data-[slot=navigation-menu-viewport]:border-0 **:data-[slot=navigation-menu-viewport]:shadow-none **:data-[slot=navigation-menu-viewport]:bg-transparent">
            <NavigationMenuList className="gap-1">
              {/* Learn Mega Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "h-auto px-4 py-2 text-sm font-medium transition-colors duration-150",
                    "data-[state=open]:bg-blue-50 data-[state=open]:text-blue-600",
                    "dark:data-[state=open]:bg-blue-950/30 dark:data-[state=open]:text-blue-400",
                    isLearnActive &&
                      "bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400"
                  )}
                >
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Learn
                </NavigationMenuTrigger>
                <NavigationMenuContent className="duration-150! animate-in! fade-in-0! zoom-in-95! mt-3! bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-xl rounded-xl">
                  <div className="w-[600px] p-6 grid grid-cols-2 gap-5 bg-gray-50/50 dark:bg-gray-900/30">
                    <MegaMenuSection
                      title="Lessons"
                      icon={BookOpen}
                      items={NAV_ITEMS.lessons}
                      isActive={isActive}
                    />
                    <MegaMenuSection
                      title="Tools & Activities"
                      icon={Sparkles}
                      items={NAV_ITEMS.learn}
                      isActive={isActive}
                      iconColor="text-purple-600 dark:text-purple-400"
                    />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Dashboard */}
              {isAuthenticated && (
                <NavigationMenuItem>
                  <NavLink
                    item={NAV_ITEMS.dashboard}
                    isActive={isActive(NAV_ITEMS.dashboard.href)}
                  />
                </NavigationMenuItem>
              )}

              {/* Admin Mega Menu */}
              {isAdmin && (
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-auto px-4 py-2 text-sm font-medium transition-colors duration-150">
                    <Shield className="h-4 w-4 mr-2" />
                    Admin
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="duration-150! animate-in! fade-in-0! zoom-in-95! mt-3! bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-xl rounded-xl">
                    <div className="w-[400px] p-6 bg-gray-50/50 dark:bg-gray-900/30">
                      <div className="space-y-1">
                        {NAV_ITEMS.admin.map((item) => (
                          <MegaMenuItem
                            key={item.href}
                            item={item}
                            isActive={isActive(item.href)}
                          />
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )}

              {/* Simple Links */}
              <NavigationMenuItem>
                <NavLink
                  item={NAV_ITEMS.pricing}
                  isActive={isActive(NAV_ITEMS.pricing.href)}
                />
              </NavigationMenuItem>

              {/* Resources Mega Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto px-4 py-2 text-sm font-medium transition-colors duration-150">
                  <Library className="h-4 w-4 mr-2" />
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent className="duration-150! animate-in! fade-in-0! zoom-in-95! mt-3! bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-xl rounded-xl">
                  <div className="w-[500px] p-6 grid grid-cols-2 gap-3 bg-gray-50/50 dark:bg-gray-900/30">
                    {NAV_ITEMS.resources.map((item) => (
                      <MegaMenuItem
                        key={item.href}
                        item={item}
                        isActive={isActive(item.href)}
                      />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavLink
                  item={NAV_ITEMS.blog}
                  isActive={isActive(NAV_ITEMS.blog.href)}
                />
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavLink
                  item={NAV_ITEMS.about}
                  isActive={isActive(NAV_ITEMS.about.href)}
                />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2">
              {isAuthenticated ? (
                <UserMenu />
              ) : (
                <>
                  <Button variant="ghost" asChild className="text-sm">
                    <Link href="/login">Sign In</Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-linear-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600 text-sm"
                  >
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className="lg:hidden"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                    <Link
                      href="/"
                      className="flex items-center cursor-pointer"
                      onClick={closeMobileMenu}
                    >
                      <img
                        src="/Logo.png"
                        alt="Kids Learn AI Logo"
                        className="h-10 w-auto"
                      />
                    </Link>
                  </div>

                  <div className="flex-1 overflow-y-auto p-4 space-y-1">
                    {/* Learn Section */}
                    <Collapsible>
                      <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <GraduationCap className="h-5 w-5" />
                          <span>Learn</span>
                        </div>
                        <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-1 space-y-1 pl-4">
                        {[...NAV_ITEMS.lessons, ...NAV_ITEMS.learn].map(
                          (navItem) => (
                            <MobileNavLink
                              key={navItem.href}
                              item={navItem}
                              isActive={isActive(navItem.href)}
                              onClick={closeMobileMenu}
                            />
                          )
                        )}
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Dashboard */}
                    {isAuthenticated && (
                      <Link
                        href={NAV_ITEMS.dashboard.href}
                        onClick={closeMobileMenu}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg transition-colors cursor-pointer",
                          isActive(NAV_ITEMS.dashboard.href)
                            ? "bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        )}
                      >
                        {(() => {
                          const DashIcon = NAV_ITEMS.dashboard.Icon;
                          return <DashIcon className="h-5 w-5" />;
                        })()}
                        <span>{NAV_ITEMS.dashboard.label}</span>
                      </Link>
                    )}

                    {/* Admin Section */}
                    {isAdmin && (
                      <Collapsible>
                        <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors cursor-pointer">
                          <div className="flex items-center gap-3">
                            <Shield className="h-5 w-5" />
                            <span>Admin</span>
                          </div>
                          <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-1 space-y-1 pl-4">
                          {NAV_ITEMS.admin.map((item) => (
                            <MobileNavLink
                              key={item.href}
                              item={item}
                              isActive={isActive(item.href)}
                              onClick={closeMobileMenu}
                            />
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    )}

                    {/* Other Links */}
                    <Link
                      href={NAV_ITEMS.pricing.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg transition-colors cursor-pointer",
                        isActive(NAV_ITEMS.pricing.href)
                          ? "bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      )}
                    >
                      {(() => {
                        const PriceIcon = NAV_ITEMS.pricing.Icon;
                        return <PriceIcon className="h-5 w-5" />;
                      })()}
                      <span>{NAV_ITEMS.pricing.label}</span>
                    </Link>

                    {/* Resources Section */}
                    <Collapsible>
                      <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Library className="h-5 w-5" />
                          <span>Resources</span>
                        </div>
                        <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-1 space-y-1 pl-4">
                        {NAV_ITEMS.resources.map((item) => (
                          <MobileNavLink
                            key={item.href}
                            item={item}
                            isActive={isActive(item.href)}
                            onClick={closeMobileMenu}
                          />
                        ))}
                      </CollapsibleContent>
                    </Collapsible>

                    <Link
                      href={NAV_ITEMS.blog.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg transition-colors cursor-pointer",
                        isActive(NAV_ITEMS.blog.href)
                          ? "bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      )}
                    >
                      {(() => {
                        const BlogIcon = NAV_ITEMS.blog.Icon;
                        return <BlogIcon className="h-5 w-5" />;
                      })()}
                      <span>{NAV_ITEMS.blog.label}</span>
                    </Link>

                    <Link
                      href={NAV_ITEMS.about.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg transition-colors cursor-pointer",
                        isActive(NAV_ITEMS.about.href)
                          ? "bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      )}
                    >
                      {(() => {
                        const AboutIcon = NAV_ITEMS.about.Icon;
                        return <AboutIcon className="h-5 w-5" />;
                      })()}
                      <span>{NAV_ITEMS.about.label}</span>
                    </Link>
                  </div>

                  {/* Mobile Auth */}
                  <div className="p-4 border-t border-gray-200 dark:border-gray-800 space-y-2">
                    {isAuthenticated ? (
                      <div className="px-4">
                        <UserMenu />
                      </div>
                    ) : (
                      <>
                        <Button variant="outline" asChild className="w-full">
                          <Link href="/login">Sign In</Link>
                        </Button>
                        <Button
                          asChild
                          className="w-full bg-linear-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600"
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
      </div>
    </header>
  );
};
