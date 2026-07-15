"use client";

import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

interface AuthLayoutProps {
	children: ReactNode;
	backgroundClassName?: string;
}

export const AuthLayout = ({
	children,
	backgroundClassName,
}: AuthLayoutProps) => {
	return (
		<div
			className={cn(
				"flex min-h-screen flex-col bg-background",
				backgroundClassName,
			)}
		>
			<SiteHeader />
			<main className="flex flex-1 items-center justify-center px-4 py-10">
				{children}
			</main>
		</div>
	);
};
