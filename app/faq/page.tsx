import type { Metadata } from "next";
import { PARENT_FACING_PROMISE } from "@/lib/marketing/positioning";
import { publicMetadata } from "@/lib/seo";
import { FaqContent } from "./faq-content";

export const metadata: Metadata = publicMetadata({
	title: "FAQ — Kids Learn AI",
	description: PARENT_FACING_PROMISE,
	path: "/faq",
});

export default function FAQPage() {
	return <FaqContent />;
}
