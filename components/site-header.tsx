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
  Code,
  X,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";
import { UserMenu } from "@/components/user/user-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import type { Session } from "@supabase/supabase-js";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

type SiteHeaderProps = {
  leftExtras?: ReactNode;
};

type NavItem = {
  href: string;
  label: string;
  Icon: LucideIcon;
  description?: string;
  comingSoon?: boolean;
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
    {
      href: "/lessons?course=web-development",
      label: "Web Development",
      Icon: Code,
      description: "Build websites and web applications",
      comingSoon: true,
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

// Announcement Bar Component
const AnnouncementBar = ({
  isVisible,
  onDismiss,
}: {
  isVisible: boolean;
  onDismiss: () => void;
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground overflow-hidden"
        >
          <div className="container mx-auto px-4 py-2 flex items-center justify-center gap-4 relative">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span>New: AI & Machine Learning Course Now Available!</span>
              <Link
                href="/lessons?course=ai-ml"
                className="underline underline-offset-2 hover:no-underline font-semibold"
              >
                Start Learning →
              </Link>
            </div>
            <button
              onClick={onDismiss}
              className="absolute right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Dismiss announcement"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Scroll Progress Indicator
const ScrollProgressBar = ({ progress }: { progress: number }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-[60] origin-left"
      style={{ scaleX: progress / 100 }}
      initial={{ scaleX: 0 }}
    />
  );
};

// Components
const NavLink = ({ item, isActive }: { item: NavItem; isActive: boolean }) => (
  <Link
    href={item.href}
    className={cn(
      "group relative inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-150 cursor-pointer rounded-lg",
      "text-foreground hover:text-primary",
      isActive ? "text-primary bg-primary/10" : "hover:bg-muted"
    )}
  >
    <item.Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
    <span>{item.label}</span>
    {/* Animated underline */}
    <span
      className={cn(
        "absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full transition-transform duration-300 origin-left",
        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      )}
    />
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
        "hover:bg-accent/10",
        "border border-transparent hover:border-accent/30 hover:shadow-md",
        isActive && "bg-accent/10 border-accent/30 shadow-md"
      )}
    >
      <div className="flex items-center gap-2">
        <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
          {item.label}
        </div>
        {item.comingSoon && (
          <Badge
            variant="outline"
            className="text-xs px-1.5 py-0 bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-500"
          >
            Coming Soon
          </Badge>
        )}
      </div>
      {item.description && (
        <div className="text-xs text-muted-foreground line-clamp-2">
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
  <div className="space-y-3 p-4 rounded-lg bg-card border border-border hover:bg-accent/5 transition-all duration-200">
    <div className="flex items-center gap-2 px-1 pb-2 border-b border-border/60">
      <Icon className={cn("h-5 w-5", iconColor || "text-primary")} />
      <h3 className="font-semibold text-sm tracking-wide text-foreground">
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
        ? "bg-primary/10 text-primary font-medium"
        : "text-foreground hover:bg-muted"
    )}
  >
    <item.Icon className="h-4 w-4" />
    <span className="flex-1">{item.label}</span>
    {item.comingSoon && (
      <Badge
        variant="outline"
        className="text-xs px-1.5 py-0 bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-500"
      >
        Coming Soon
      </Badge>
    )}
  </Link>
);

export const SiteHeader = ({ leftExtras }: SiteHeaderProps) => {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

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

  const handleDismissAnnouncement = () => {
    setShowAnnouncement(false);
    // Optionally persist dismissal in localStorage
    localStorage.setItem("announcement-dismissed", "true");
  };

  useEffect(() => {
    // Check if announcement was previously dismissed
    const dismissed = localStorage.getItem("announcement-dismissed");
    if (dismissed === "true") {
      setShowAnnouncement(false);
    }
  }, []);

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);

      // Calculate scroll progress
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgressBar progress={scrollProgress} />

      {/* Announcement Bar */}
      <AnnouncementBar
        isVisible={showAnnouncement}
        onDismiss={handleDismissAnnouncement}
      />

      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-border/50 shadow-lg"
            : "bg-background border-border"
        )}
      >
        <div className="container mx-auto px-4 lg:px-6 py-4">
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
            <NavigationMenu className="hidden lg:flex bg-background/80 backdrop-blur-sm px-3 py-2 rounded-full border border-border/50 shadow-lg my-3 **:data-[slot=navigation-menu-viewport]:border-0 **:data-[slot=navigation-menu-viewport]:shadow-none **:data-[slot=navigation-menu-viewport]:bg-transparent">
              <NavigationMenuList className="gap-1">
                {/* Learn Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "h-auto px-4 py-2 text-sm font-medium transition-colors duration-150",
                      "data-[state=open]:bg-primary/10 data-[state=open]:text-primary",
                      isLearnActive && "bg-primary/10 text-primary"
                    )}
                  >
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Learn
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="duration-150! animate-in! fade-in-0! zoom-in-95! mt-3! bg-background/95 backdrop-blur-xl border border-border shadow-xl rounded-xl overflow-visible">
                    <div className="w-[650px] p-5 grid grid-cols-2 gap-6 rounded-lg relative">
                      <MegaMenuSection
                        title="Lessons"
                        icon={BookOpen}
                        items={NAV_ITEMS.lessons}
                        isActive={isActive}
                      />
                      <div className="absolute left-1/2 top-4 bottom-4 w-px bg-border/50 -translate-x-1/2" />
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
                    <NavigationMenuContent className="duration-150! animate-in! fade-in-0! zoom-in-95! mt-3! bg-background/95 backdrop-blur-xl border border-border shadow-xl rounded-xl overflow-visible">
                      <div className="w-[400px] p-5 rounded-lg">
                        <div className="p-4 rounded-lg bg-card border border-border hover:bg-accent/5 transition-all duration-200">
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
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )}

                {/* Resources Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-auto px-4 py-2 text-sm font-medium transition-colors duration-150">
                    <Library className="h-4 w-4 mr-2" />
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="duration-150! animate-in! fade-in-0! zoom-in-95! mt-3! bg-background/95 backdrop-blur-xl border border-border shadow-xl rounded-xl overflow-visible">
                    <div className="w-[550px] p-5 rounded-lg">
                      <div className="p-4 rounded-lg bg-card border border-border hover:bg-accent/5 transition-all duration-200">
                        <div className="grid grid-cols-2 gap-2">
                          {NAV_ITEMS.resources.map((item) => (
                            <MegaMenuItem
                              key={item.href}
                              item={item}
                              isActive={isActive(item.href)}
                            />
                          ))}
                        </div>
                      </div>
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
              <ThemeToggle />
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
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-sm shadow-lg shadow-primary/25"
                    >
                      <Link href="/signup" className="flex items-center gap-2">
                        <Rocket className="h-4 w-4" />
                        Get Started
                      </Link>
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
                    <div className="p-6 border-b border-border">
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
                        <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors cursor-pointer">
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
                              ? "bg-primary/10 text-primary"
                              : "text-foreground hover:bg-muted"
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
                          <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors cursor-pointer">
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

                      {/* Resources Section */}
                      <Collapsible>
                        <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors cursor-pointer">
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
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-muted"
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
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-muted"
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
                    <div className="p-4 border-t border-border space-y-2">
                      <div className="flex items-center justify-between px-4 pb-2">
                        <span className="text-sm font-medium text-foreground">
                          Theme
                        </span>
                        <ThemeToggle />
                      </div>
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
                            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                          >
                            <Link
                              href="/signup"
                              className="flex items-center gap-2 justify-center"
                            >
                              <Rocket className="h-4 w-4" />
                              Get Started
                            </Link>
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
    </>
  );
};
