import type { ReactNode } from "react";

// The tutor pages are client components, so their metadata lives here.
export const metadata = {
	title: "BrightByte AI Tutor — Kids Learn AI",
	description:
		"Get friendly, step-by-step Python help from BrightByte, the Kids Learn AI coding tutor.",
};

export default function TutorLayout({ children }: { children: ReactNode }) {
	return children;
}
