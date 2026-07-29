import type { Metadata } from "next";
import { publicMetadata } from "@/lib/seo";
import { PricingContent } from "./pricing-content";

export const metadata: Metadata = publicMetadata({
	title: "Pricing — Kids Learn AI",
	description:
		"Try the first live Python & AI class free, then join the 8-10 week program for $159.99 CAD (founding rate). Small classes, projects, certificate for kids 9-13.",
	path: "/pricing",
});

export default function PricingPage() {
	return <PricingContent />;
}
