"use client";

import type { ReactNode } from "react";
import { Footer } from "@/components/layouts/footer";
import { SiteHeader } from "@/components/site-header";

interface MainLayoutProps {
	children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div className="flex min-h-screen flex-col">
			{/* Skip to main content link for accessibility */}
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
			>
				Skip to main content
			</a>
			{/* Aria live region for dynamic announcements */}
			<div
				id="aria-live-region"
				aria-live="polite"
				aria-atomic="true"
				className="sr-only"
			/>
			<SiteHeader />
			<main id="main-content" className="flex-1" tabIndex={-1}>
				{children}
			</main>
			<Footer />
		</div>
	);
};
