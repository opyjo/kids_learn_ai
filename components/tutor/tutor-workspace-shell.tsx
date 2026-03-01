"use client";

import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";

interface TutorWorkspaceShellProps {
	children: ReactNode;
}

export const TutorWorkspaceShell = ({ children }: TutorWorkspaceShellProps) => {
	return (
		<div className="flex h-dvh min-h-0 flex-col overflow-hidden bg-background">
			<div className="shrink-0">
				<SiteHeader />
			</div>

			<main className="min-h-0 flex-1 overflow-hidden">{children}</main>
		</div>
	);
};
