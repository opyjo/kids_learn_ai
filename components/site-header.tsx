"use client";

import type { Session } from "@supabase/supabase-js";
import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
	BookOpen,
	Brain,
	ChevronDown,
	DollarSign,
	Download,
	ExternalLink,
	Gamepad2,
	GraduationCap,
	HelpCircle,
	Info,
	LayoutDashboard,
	Library,
	Menu,
	MessageSquare,
	Newspaper,
	Shield,
	Sparkles,
	TerminalSquare,
	X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserMenu } from "@/components/user/user-menu";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";

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
	// Year 1: Terms 1-4
	year1Terms1to4: [
		{
			href: "/lessons/term-1-hello-python",
			label: "Term 1: Hello Python!",
			Icon: BookOpen,
			description: "Your first steps into coding",
		},
		{
			href: "/lessons/term-2-math-wizard",
			label: "Term 2: Math Wizard",
			Icon: BookOpen,
			description: "Math magic with Python",
		},
		{
			href: "/lessons/term-3-decision-maker",
			label: "Term 3: Decision Maker",
			Icon: BookOpen,
			description: "Teaching your code to think",
		},
		{
			href: "/lessons/term-4-more-choices",
			label: "Term 4: More Choices",
			Icon: BookOpen,
			description: "Advanced decision making",
		},
	],
	// Year 1: Terms 5-8
	year1Terms5to8: [
		{
			href: "/lessons/term-5-ai-sneak-peek",
			label: "Term 5: AI Sneak Peek",
			Icon: Brain,
			description: "Introduction to Artificial Intelligence",
		},
		{
			href: "/lessons/term-6-loop-magic",
			label: "Term 6: Loop Magic",
			Icon: Brain,
			description: "Repeating code with loops",
		},
		{
			href: "/lessons/term-7-game-builder",
			label: "Term 7: Game Builder",
			Icon: Gamepad2,
			description: "Create your own games",
		},
		{
			href: "/lessons/term-8-ai-explorer",
			label: "Term 8: AI Explorer",
			Icon: GraduationCap,
			description: "Capstone projects and portfolio",
		},
	],
	// Year 2: Terms 1-4
	year2Terms1to4: [
		{
			href: "/lessons/year2-term-1-python-accelerated",
			label: "Term 1: Python Accelerated",
			Icon: BookOpen,
			description: "Fast-track your Python skills",
			comingSoon: true,
		},
		{
			href: "/lessons/year2-term-2-loops-mastery",
			label: "Term 2: Loops & Logic",
			Icon: BookOpen,
			description: "Master loops and debugging",
			comingSoon: true,
		},
		{
			href: "/lessons/year2-term-3-functions",
			label: "Term 3: Functions",
			Icon: BookOpen,
			description: "Write reusable code",
			comingSoon: true,
		},
		{
			href: "/lessons/year2-term-4-data-structures",
			label: "Term 4: Data Structures",
			Icon: BookOpen,
			description: "Lists and dictionaries",
			comingSoon: true,
		},
	],
	// Year 2: Terms 5-8
	year2Terms5to8: [
		{
			href: "/lessons/year2-term-5-ai-deep-dive",
			label: "Term 5: AI Deep Dive",
			Icon: Brain,
			description: "How AI really works",
			comingSoon: true,
		},
		{
			href: "/lessons/year2-term-6-apis",
			label: "Term 6: Working with APIs",
			Icon: Brain,
			description: "Connect to AI services",
			comingSoon: true,
		},
		{
			href: "/lessons/year2-term-7-data-visualization",
			label: "Term 7: Data & Visualization",
			Icon: Brain,
			description: "Turn numbers into stories",
			comingSoon: true,
		},
		{
			href: "/lessons/year2-term-8-capstone",
			label: "Term 8: Capstone",
			Icon: GraduationCap,
			description: "Build your portfolio",
			comingSoon: true,
		},
	],
	learn: [
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
		{
			href: "/careers",
			label: "Become an Instructor",
			Icon: GraduationCap,
			description: "Join our teaching team",
		},
	],
	admin: {
		href: "/admin",
		label: "Admin",
		Icon: Shield,
	},
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
					<div className="container mx-auto px-4 py-2 sm:py-2.5">
						<div className="flex items-center justify-between gap-2 sm:gap-4">
							{/* Content - stacks on mobile */}
							<div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium min-w-0">
								<div className="flex items-center gap-1.5 sm:gap-2">
									<Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-pulse shrink-0" />
									<span className="truncate sm:truncate-none">
										Try your first class FREE!
									</span>
								</div>
								<Link
									href="/inquiry"
									className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 px-2.5 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
								>
									Book Now
									<span className="hidden sm:inline">→</span>
								</Link>
							</div>

							{/* Dismiss button */}
							<button
								onClick={onDismiss}
								className="p-1.5 hover:bg-white/20 rounded-full transition-colors shrink-0 cursor-pointer"
								aria-label="Dismiss announcement"
							>
								<X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
							</button>
						</div>
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
			"group relative inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium transition-all duration-150 cursor-pointer rounded-lg",
			"text-foreground hover:text-primary",
			isActive ? "text-primary bg-primary/10" : "hover:bg-muted",
		)}
	>
		<item.Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
		<span>{item.label}</span>
		{/* Animated underline */}
		<span
			className={cn(
				"absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full transition-transform duration-300 origin-left",
				isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
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
				isActive && "bg-accent/10 border-accent/30 shadow-md",
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
}) => {
	const Icon = item.Icon;
	return (
		<Link
			href={item.href}
			onClick={onClick}
			className={cn(
				"flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg transition-colors cursor-pointer min-h-[44px]",
				isActive
					? "bg-primary/10 text-primary font-medium"
					: "text-foreground hover:bg-muted",
			)}
			aria-current={isActive ? "page" : undefined}
		>
			<Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
			<span className="flex-1">{item.label}</span>
			{item.comingSoon && (
				<Badge
					variant="outline"
					className="text-xs px-1.5 py-0 bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-500"
					aria-label="Coming soon"
				>
					Coming Soon
				</Badge>
			)}
		</Link>
	);
};

type YearTab = "year1" | "year2";

export const SiteHeader = ({ leftExtras }: SiteHeaderProps) => {
	const pathname = usePathname();
	const [mounted, setMounted] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);
	const [showAnnouncement, setShowAnnouncement] = useState(false);
	const [activeYearTab, setActiveYearTab] = useState<YearTab>("year1");
	const [isHidden, setIsHidden] = useState(false);
	const lastScrollYRef = useRef(0);

	const isActive = (href: string) =>
		pathname === href || pathname.startsWith(`${href}/`);

	const isLearnActive =
		NAV_ITEMS.learn.some((item) => isActive(item.href)) ||
		NAV_ITEMS.year1Terms1to4.some((item) => isActive(item.href)) ||
		NAV_ITEMS.year1Terms5to8.some((item) => isActive(item.href)) ||
		NAV_ITEMS.year2Terms1to4.some((item) => isActive(item.href)) ||
		NAV_ITEMS.year2Terms5to8.some((item) => isActive(item.href));

	const closeMobileMenu = () => {
		const trigger = document.querySelector(
			'[aria-label="Open menu"]',
		) as HTMLElement;
		trigger?.click();
	};

	const handleDismissAnnouncement = () => {
		setShowAnnouncement(false);
		// Optionally persist dismissal in localStorage
		localStorage.setItem("announcement-dismissed", "true");
	};

	useEffect(() => {
		// Mark component as mounted to prevent hydration mismatch
		setMounted(true);

		// Check if announcement was previously dismissed
		const dismissed = localStorage.getItem("announcement-dismissed");
		// Show announcement only if not previously dismissed
		if (dismissed !== "true") {
			setShowAnnouncement(true);
		}
	}, []);

	useEffect(() => {
		if (
			!process.env.NEXT_PUBLIC_SUPABASE_URL ||
			!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
		) {
			return;
		}

		const supabase = getSupabaseBrowserClient();

		const checkAuth = async () => {
			try {
				const {
					data: { session },
					error,
				} = await supabase.auth.getSession();

				// If there's a refresh token error, sign out to clear stale session data
				if (error) {
					console.warn("Session error, clearing stale session:", error.message);
					await supabase.auth.signOut();
					setIsAuthenticated(false);
					return;
				}

				setIsAuthenticated(!!session);
			} catch (err) {
				console.warn("Error checking auth session:", err);
				setIsAuthenticated(false);
			}
		};

		checkAuth();

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange(
			async (_event: string, session: Session | null) => {
				// Handle TOKEN_REFRESHED errors by signing out
				if (_event === "TOKEN_REFRESHED" && !session) {
					await supabase.auth.signOut();
				}
				setIsAuthenticated(!!session);
			},
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
			const currentScrollY = window.scrollY;

			setIsScrolled(currentScrollY > 12);

			// Calculate scroll progress
			const scrollHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const progress =
				scrollHeight > 0 ? (currentScrollY / scrollHeight) * 100 : 0;
			setScrollProgress(progress);

			// Hide-on-scroll logic
			const HIDE_THRESHOLD = 80;
			if (currentScrollY > HIDE_THRESHOLD) {
				setIsHidden(currentScrollY > lastScrollYRef.current);
			} else {
				setIsHidden(false);
			}
			lastScrollYRef.current = currentScrollY;
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
					isHidden ? "-translate-y-full" : "translate-y-0",
					isScrolled
						? "bg-background/80 backdrop-blur-xl border-border/50 shadow-lg"
						: "bg-background border-border",
				)}
			>
				<div className="container mx-auto px-4 lg:px-6 py-2">
					<div className="flex h-12 items-center justify-between">
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
									className="h-8 w-auto transition-transform duration-200 group-hover:scale-105"
								/>
							</Link>
						</div>

						{/* Desktop Navigation - only render after mount to prevent hydration mismatch */}
						{mounted && (
							<NavigationMenu className="hidden lg:flex bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full border border-border/50 shadow-lg my-0.5 **:data-[slot=navigation-menu-viewport]:border-0 **:data-[slot=navigation-menu-viewport]:shadow-none **:data-[slot=navigation-menu-viewport]:bg-transparent">
								<NavigationMenuList className="gap-1">
									{/* Learn Mega Menu */}
									<NavigationMenuItem>
										<NavigationMenuTrigger
											className={cn(
												"h-auto px-3 py-1.5 text-sm font-medium transition-colors duration-150",
												"data-[state=open]:bg-primary/10 data-[state=open]:text-primary",
												isLearnActive && "bg-primary/10 text-primary",
											)}
										>
											<GraduationCap className="h-4 w-4 mr-2" />
											Learn
										</NavigationMenuTrigger>
										<NavigationMenuContent className="duration-150! animate-in! fade-in-0! zoom-in-95! mt-3! bg-background/95 backdrop-blur-xl border border-border shadow-xl rounded-xl overflow-visible">
											<div className="w-[850px] rounded-lg relative">
												{/* Year Tabs */}
												<div className="flex border-b border-border px-5 pt-4">
													<button
														onClick={() => setActiveYearTab("year1")}
														className={cn(
															"px-4 py-2.5 text-sm font-medium rounded-t-lg transition-all cursor-pointer",
															"border-b-2 -mb-px",
															activeYearTab === "year1"
																? "border-primary text-primary bg-primary/5"
																: "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50",
														)}
														aria-label="View Year 1 courses"
														tabIndex={0}
													>
														<span className="flex items-center gap-2">
															<BookOpen className="h-4 w-4" />
															Year 1
														</span>
													</button>
													<button
														onClick={() => setActiveYearTab("year2")}
														className={cn(
															"px-4 py-2.5 text-sm font-medium rounded-t-lg transition-all cursor-pointer",
															"border-b-2 -mb-px",
															activeYearTab === "year2"
																? "border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/30"
																: "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50",
														)}
														aria-label="View Year 2 courses"
														tabIndex={0}
													>
														<span className="flex items-center gap-2">
															<Brain className="h-4 w-4" />
															Year 2
														</span>
													</button>
												</div>

												{/* Tab Content */}
												<div className="p-5 grid grid-cols-3 gap-4">
													{activeYearTab === "year1" ? (
														<>
															<MegaMenuSection
																title="Terms 1-4: Foundations"
																icon={BookOpen}
																items={NAV_ITEMS.year1Terms1to4}
																isActive={isActive}
															/>
															<MegaMenuSection
																title="Terms 5-8: AI & Games"
																icon={Brain}
																items={NAV_ITEMS.year1Terms5to8}
																isActive={isActive}
																iconColor="text-purple-600 dark:text-purple-400"
															/>
														</>
													) : (
														<>
															<MegaMenuSection
																title="Terms 1-4: Python Mastery"
																icon={BookOpen}
																items={NAV_ITEMS.year2Terms1to4}
																isActive={isActive}
																iconColor="text-purple-600 dark:text-purple-400"
															/>
															<MegaMenuSection
																title="Terms 5-8: AI & Data"
																icon={Brain}
																items={NAV_ITEMS.year2Terms5to8}
																isActive={isActive}
																iconColor="text-purple-600 dark:text-purple-400"
															/>
														</>
													)}
													<MegaMenuSection
														title="Tools & Activities"
														icon={Sparkles}
														items={NAV_ITEMS.learn}
														isActive={isActive}
														iconColor="text-amber-600 dark:text-amber-400"
													/>
												</div>
											</div>
										</NavigationMenuContent>
									</NavigationMenuItem>

									{/* Dashboard - only render after mount to prevent hydration mismatch */}
									{mounted && isAuthenticated && (
										<NavigationMenuItem>
											<NavLink
												item={NAV_ITEMS.dashboard}
												isActive={isActive(NAV_ITEMS.dashboard.href)}
											/>
										</NavigationMenuItem>
									)}

									{/* BrightByte - Top-level navigation */}
									<NavigationMenuItem>
										<NavLink
											item={{
												href: "/tutor",
												label: "BrightByte",
												Icon: Sparkles,
											}}
											isActive={isActive("/tutor")}
										/>
									</NavigationMenuItem>

									{/* Admin Link - only render after mount to prevent hydration mismatch */}
									{mounted && isAdmin && (
										<NavigationMenuItem>
											<NavLink
												item={NAV_ITEMS.admin}
												isActive={isActive(NAV_ITEMS.admin.href)}
											/>
										</NavigationMenuItem>
									)}

									{/* Resources Mega Menu */}
									<NavigationMenuItem>
										<NavigationMenuTrigger className="h-auto px-3 py-1.5 text-sm font-medium transition-colors duration-150">
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
						)}

						{/* Right side actions */}
						<div className="flex items-center gap-3">
							<ThemeToggle />
							<div className="hidden lg:flex items-center gap-2">
								{/* Only render auth-dependent UI after mount to prevent hydration mismatch */}
								{mounted && isAuthenticated ? (
									<UserMenu />
								) : mounted ? (
									<>
										<Button variant="ghost" asChild className="text-sm">
											<Link href="/login">Sign In</Link>
										</Button>
										<Button
											asChild
											className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-sm shadow-lg shadow-primary/25"
										>
											<Link href="/inquiry" className="flex items-center gap-2">
												<Sparkles className="h-4 w-4" />
												Free Trial
											</Link>
										</Button>
									</>
								) : null}
							</div>

							{/* Mobile Menu - only render after mount to prevent hydration mismatch */}
							{mounted && (
								<Sheet>
									<SheetTrigger asChild>
										<Button
											variant="ghost"
											size="icon"
											aria-label="Open navigation menu"
											aria-expanded="false"
											className="lg:hidden min-h-[44px] min-w-[44px]"
										>
											<Menu className="h-5 w-5" aria-hidden="true" />
										</Button>
									</SheetTrigger>
									<SheetContent
										side="right"
										className="w-80 p-0"
										aria-label="Navigation menu"
									>
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
													<CollapsibleTrigger
														className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors cursor-pointer min-h-[44px]"
														aria-label="Toggle Learn menu"
													>
														<div className="flex items-center gap-3">
															<GraduationCap
																className="h-5 w-5"
																aria-hidden="true"
															/>
															<span>Learn</span>
														</div>
														<ChevronDown
															className="h-4 w-4 transition-transform duration-200"
															aria-hidden="true"
														/>
													</CollapsibleTrigger>
													<CollapsibleContent className="mt-1 space-y-1 pl-4">
														{/* Year 1 Section */}
														<div className="px-4 py-2 text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-2 mt-2">
															<BookOpen className="h-3.5 w-3.5" />
															Year 1
														</div>
														<div className="px-4 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
															Terms 1-4: Foundations
														</div>
														{NAV_ITEMS.year1Terms1to4.map((navItem) => (
															<MobileNavLink
																key={navItem.href}
																item={navItem}
																isActive={isActive(navItem.href)}
																onClick={closeMobileMenu}
															/>
														))}
														<div className="px-4 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-2">
															Terms 5-8: AI & Games
														</div>
														{NAV_ITEMS.year1Terms5to8.map((navItem) => (
															<MobileNavLink
																key={navItem.href}
																item={navItem}
																isActive={isActive(navItem.href)}
																onClick={closeMobileMenu}
															/>
														))}

														{/* Year 2 Section */}
														<div className="px-4 py-2 text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider flex items-center gap-2 mt-4 border-t border-border pt-4">
															<Brain className="h-3.5 w-3.5" />
															Year 2
														</div>
														<div className="px-4 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
															Terms 1-4: Python Mastery
														</div>
														{NAV_ITEMS.year2Terms1to4.map((navItem) => (
															<MobileNavLink
																key={navItem.href}
																item={navItem}
																isActive={isActive(navItem.href)}
																onClick={closeMobileMenu}
															/>
														))}
														<div className="px-4 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-2">
															Terms 5-8: AI & Data
														</div>
														{NAV_ITEMS.year2Terms5to8.map((navItem) => (
															<MobileNavLink
																key={navItem.href}
																item={navItem}
																isActive={isActive(navItem.href)}
																onClick={closeMobileMenu}
															/>
														))}

														{/* Tools Section */}
														<div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4 border-t border-border pt-4">
															Tools & Activities
														</div>
														{NAV_ITEMS.learn.map((navItem) => (
															<MobileNavLink
																key={navItem.href}
																item={navItem}
																isActive={isActive(navItem.href)}
																onClick={closeMobileMenu}
															/>
														))}
													</CollapsibleContent>
												</Collapsible>

												{/* Dashboard - only render after mount */}
												{mounted && isAuthenticated && (
													<Link
														href={NAV_ITEMS.dashboard.href}
														onClick={closeMobileMenu}
														className={cn(
															"flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg transition-colors cursor-pointer",
															isActive(NAV_ITEMS.dashboard.href)
																? "bg-primary/10 text-primary"
																: "text-foreground hover:bg-muted",
														)}
													>
														{(() => {
															const DashIcon = NAV_ITEMS.dashboard.Icon;
															return <DashIcon className="h-5 w-5" />;
														})()}
														<span>{NAV_ITEMS.dashboard.label}</span>
													</Link>
												)}

												{/* Admin Link - only render after mount */}
												{mounted && isAdmin && (
													<Link
														href={NAV_ITEMS.admin.href}
														onClick={closeMobileMenu}
														className={cn(
															"flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg transition-colors cursor-pointer",
															isActive(NAV_ITEMS.admin.href)
																? "bg-primary/10 text-primary"
																: "text-foreground hover:bg-muted",
														)}
													>
														<Shield className="h-5 w-5" />
														<span>{NAV_ITEMS.admin.label}</span>
													</Link>
												)}

												{/* Resources Section */}
												<Collapsible>
													<CollapsibleTrigger
														className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors cursor-pointer min-h-[44px]"
														aria-label="Toggle Resources menu"
													>
														<div className="flex items-center gap-3">
															<Library className="h-5 w-5" aria-hidden="true" />
															<span>Resources</span>
														</div>
														<ChevronDown
															className="h-4 w-4 transition-transform duration-200"
															aria-hidden="true"
														/>
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
															: "text-foreground hover:bg-muted",
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
															: "text-foreground hover:bg-muted",
													)}
												>
													{(() => {
														const AboutIcon = NAV_ITEMS.about.Icon;
														return <AboutIcon className="h-5 w-5" />;
													})()}
													<span>{NAV_ITEMS.about.label}</span>
												</Link>
											</div>

											{/* Mobile Auth - only render auth-dependent UI after mount */}
											<div className="p-4 border-t border-border space-y-2">
												<div className="flex items-center justify-between px-4 pb-2">
													<span className="text-sm font-medium text-foreground">
														Theme
													</span>
													<ThemeToggle />
												</div>
												{mounted && isAuthenticated ? (
													<div className="px-4">
														<UserMenu />
													</div>
												) : mounted ? (
													<>
														<Button
															variant="outline"
															asChild
															className="w-full"
														>
															<Link href="/login">Sign In</Link>
														</Button>
														<Button
															asChild
															className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
														>
															<Link
																href="/inquiry"
																className="flex items-center gap-2 justify-center"
															>
																<Sparkles className="h-4 w-4" />
																Free Trial
															</Link>
														</Button>
													</>
												) : null}
											</div>
										</div>
									</SheetContent>
								</Sheet>
							)}
						</div>
					</div>
				</div>
			</header>
		</>
	);
};
