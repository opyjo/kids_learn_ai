import type { Metadata } from "next";
import type { ReactNode } from "react";
import { privateMetadata } from "@/lib/seo";

export const metadata: Metadata = privateMetadata;

export default function QuizLayout({ children }: { children: ReactNode }) {
	return children;
}
