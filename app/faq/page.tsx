import type { Metadata } from "next";
import { FaqContent } from "./faq-content";

export const metadata: Metadata = {
	title: "FAQ — Kids Learn AI",
	description:
		"Answers to common parent questions about Kids Learn AI: no coding experience needed, 5-15 min lessons, works on tablet or computer, free plan, ages 8-16, progress tracking.",
	openGraph: {
		title: "FAQ — Kids Learn AI",
		description:
			"Answers to common parent questions about Kids Learn AI: no coding experience needed, 5-15 min lessons, works on tablet or computer, free plan, ages 8-16, progress tracking.",
		type: "website",
	},
};

export default function FAQPage() {
	return <FaqContent />;
}
