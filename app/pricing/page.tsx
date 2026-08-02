import type { Metadata } from "next";
import { PARENT_FACING_PROMISE } from "@/lib/marketing/positioning";
import { publicMetadata } from "@/lib/seo";
import { PricingContent } from "./pricing-content";

export const metadata: Metadata = publicMetadata({
	title: "Pricing — Kids Learn AI",
	description: PARENT_FACING_PROMISE,
	path: "/pricing",
});

export default function PricingPage() {
	return <PricingContent />;
}
