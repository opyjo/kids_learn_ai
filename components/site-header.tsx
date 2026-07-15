"use client";

import type { AuthChangeEvent, Session } from "@supabase/supabase-js";
import {
	BrainCircuit,
	ChevronDown,
	FlaskConical,
	Gamepad2,
	LayoutDashboard,
	Menu,
	Newspaper,
	Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserMenu } from "@/components/user/user-menu";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
	leftExtras?: ReactNode;
};

const primaryLinks = [
	{ href: "/lessons", label: "Programs" },
	{ href: "/#how-it-works", label: "How it works" },
	{ href: "/#projects", label: "Projects" },
	{ href: "/pricing", label: "Pricing" },
];

const resourceLinks = [
	{ href: "/blog", label: "Articles", icon: Newspaper },
	{ href: "/playground", label: "Code playground", icon: Gamepad2 },
	{ href: "/labs", label: "AI labs", icon: FlaskConical },
	{ href: "/faq", label: "Common questions", icon: BrainCircuit },
];

export const SiteHeader = ({ leftExtras }: SiteHeaderProps) => {
	const pathname = usePathname();
	const [session, setSession] = useState<Session | null>(null);
	const [isAdmin, setIsAdmin] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		if (
			!process.env.NEXT_PUBLIC_SUPABASE_URL ||
			!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
		) {
			return;
		}

		const supabase = getSupabaseBrowserClient();
		const hydrateSession = async () => {
			const { data } = await supabase.auth.getSession();
			setSession(data.session);
		};
		void hydrateSession();

		const { data } = supabase.auth.onAuthStateChange(
			(_event: AuthChangeEvent, nextSession: Session | null) => {
				setSession(nextSession);
			},
		);

		return () => data.subscription.unsubscribe();
	}, []);

	useEffect(() => {
		if (!session?.user.id) {
			setIsAdmin(false);
			return;
		}

		const checkRole = async () => {
			const supabase = getSupabaseBrowserClient();
			const { data } = await supabase
				.from("profiles")
				.select("role")
				.eq("id", session.user.id)
				.maybeSingle();
			setIsAdmin(data?.role === "admin");
		};
		void checkRole();
	}, [session?.user.id]);

	const isActive = (href: string) => {
		if (href.includes("#")) return false;
		return pathname === href || pathname.startsWith(`${href}/`);
	};

	const closeMobile = () => setMobileOpen(false);

	return (
		<header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
			<div className="mx-auto flex h-16 max-w-7xl items-center gap-5 px-4 sm:px-6 lg:px-8">
				<div className="flex shrink-0 items-center gap-3">
					{leftExtras}
					<Link
						href="/"
						className="flex items-center gap-2.5"
						aria-label="Kids Learn AI home"
					>
						<Image
							src="/Logo.png"
							alt=""
							width={36}
							height={36}
							priority
							className="size-9 rounded-lg"
						/>
						<span className="hidden text-sm font-semibold tracking-tight text-foreground sm:block">
							Kids Learn AI
						</span>
					</Link>
				</div>

				<nav
					className="hidden flex-1 items-center justify-center gap-1 lg:flex"
					aria-label="Main navigation"
				>
					{primaryLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={cn(
								"rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
								isActive(link.href) && "bg-muted text-foreground",
							)}
						>
							{link.label}
						</Link>
					))}
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="ghost"
								className="gap-1 px-3 text-muted-foreground"
							>
								Resources
								<ChevronDown className="size-3.5" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="center" className="w-56">
							{resourceLinks.map((link) => {
								const Icon = link.icon;
								return (
									<DropdownMenuItem key={link.href} asChild>
										<Link href={link.href} className="gap-2 py-2.5">
											<Icon className="size-4 text-muted-foreground" />
											{link.label}
										</Link>
									</DropdownMenuItem>
								);
							})}
						</DropdownMenuContent>
					</DropdownMenu>
				</nav>

				<div className="ml-auto flex items-center gap-1.5">
					<ThemeToggle />
					{session ? (
						<>
							<Button
								asChild
								variant="ghost"
								size="sm"
								className="hidden sm:inline-flex"
							>
								<Link href="/dashboard">
									<LayoutDashboard />
									Dashboard
								</Link>
							</Button>
							{isAdmin && (
								<Button
									asChild
									variant="ghost"
									size="icon"
									className="hidden sm:inline-flex"
									aria-label="Admin"
								>
									<Link href="/admin">
										<Shield />
									</Link>
								</Button>
							)}
							<UserMenu />
						</>
					) : (
						<>
							<Button
								asChild
								variant="ghost"
								size="sm"
								className="hidden sm:inline-flex"
							>
								<Link href="/login">Sign in</Link>
							</Button>
							<Button asChild size="sm" className="hidden sm:inline-flex">
								<Link href="/inquiry">Book a free trial</Link>
							</Button>
						</>
					)}

					<Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="lg:hidden"
								aria-label="Open navigation"
							>
								<Menu />
							</Button>
						</SheetTrigger>
						<SheetContent
							side="right"
							className="flex w-[min(88vw,360px)] flex-col p-0"
						>
							<div className="border-b border-border p-5">
								<div className="flex items-center gap-2.5">
									<Image
										src="/Logo.png"
										alt=""
										width={34}
										height={34}
										className="size-8 rounded-lg"
									/>
									<span className="font-semibold">Kids Learn AI</span>
								</div>
							</div>
							<nav className="space-y-1 p-4" aria-label="Mobile navigation">
								{primaryLinks.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										onClick={closeMobile}
										className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium hover:bg-muted"
									>
										{link.label}
									</Link>
								))}
								<p className="px-3 pb-1 pt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
									Resources
								</p>
								{resourceLinks.map((link) => {
									const Icon = link.icon;
									return (
										<Link
											key={link.href}
											href={link.href}
											onClick={closeMobile}
											className="flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium hover:bg-muted"
										>
											<Icon className="size-4 text-muted-foreground" />
											{link.label}
										</Link>
									);
								})}
								{session && (
									<Link
										href="/dashboard"
										onClick={closeMobile}
										className="mt-4 flex min-h-11 items-center gap-3 rounded-lg border border-border px-3 text-sm font-medium"
									>
										<LayoutDashboard className="size-4" />
										Dashboard
									</Link>
								)}
								{isAdmin && (
									<Link
										href="/admin"
										onClick={closeMobile}
										className="flex min-h-11 items-center gap-3 rounded-lg border border-border px-3 text-sm font-medium"
									>
										<Shield className="size-4" />
										Admin
									</Link>
								)}
							</nav>
							{!session && (
								<div className="mt-auto grid gap-2 border-t border-border p-4">
									<Button asChild variant="outline">
										<Link href="/login" onClick={closeMobile}>
											Sign in
										</Link>
									</Button>
									<Button asChild>
										<Link href="/inquiry" onClick={closeMobile}>
											Book a free trial
										</Link>
									</Button>
								</div>
							)}
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
};
