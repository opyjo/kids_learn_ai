import type { ReactNode } from "react";

// The playground page is a client component, so its metadata lives here.
export const metadata = {
	title: "Python Playground — Kids Learn AI",
	description:
		"Write and run Python code right in your browser — a safe sandbox for kids to experiment.",
};

export default function PlaygroundLayout({
	children,
}: {
	children: ReactNode;
}) {
	return children;
}
