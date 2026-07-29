import type { Metadata } from "next";
import type { ReactNode } from "react";
import { publicMetadata } from "@/lib/seo";

// The playground page is a client component, so its metadata lives here.
export const metadata: Metadata = publicMetadata({
	title: "Python Playground — Kids Learn AI",
	description:
		"Write and run Python code right in your browser — a safe sandbox for kids to experiment.",
	path: "/playground",
});

export default function PlaygroundLayout({
	children,
}: {
	children: ReactNode;
}) {
	return children;
}
