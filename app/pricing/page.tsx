import type { Metadata } from "next";
import { PricingContent } from "./pricing-content";

export const metadata: Metadata = {
	title: "Pricing — Kids Learn AI",
	description:
		"Try the first live Python & AI class free, then join the 8-10 week program for $159.99 CAD (founding rate). Small classes, projects, certificate for kids 9-13.",
	openGraph: {
		title: "Pricing — Kids Learn AI",
		description:
			"Try the first live Python & AI class free, then join the 8-10 week program for $159.99 CAD (founding rate). Small classes, projects, certificate for kids 9-13.",
		type: "website",
	},
};

export default function PricingPage() {
	return <PricingContent />;
}
