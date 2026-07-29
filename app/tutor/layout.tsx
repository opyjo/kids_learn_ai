import type { Metadata } from "next";
import type { ReactNode } from "react";
import { privateMetadata } from "@/lib/seo";

// The tutor pages are client components, so their metadata lives here.
export const metadata: Metadata = {
	title: "BrightByte AI Tutor — Kids Learn AI",
	description:
		"Get friendly, step-by-step Python help from BrightByte, the Kids Learn AI coding tutor.",
	...privateMetadata,
};

export default function TutorLayout({ children }: { children: ReactNode }) {
	return children;
}
