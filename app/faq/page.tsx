import type { Metadata } from "next";
import { publicMetadata } from "@/lib/seo";
import { FaqContent } from "./faq-content";

export const metadata: Metadata = publicMetadata({
	title: "FAQ — Kids Learn AI",
	description:
		"Answers about Kids Learn AI live classes, age groups, schedules, pricing, equipment, missed classes, and the free trial for kids ages 9-13.",
	path: "/faq",
});

export default function FAQPage() {
	return <FaqContent />;
}
