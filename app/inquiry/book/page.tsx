import {
	ArrowLeft,
	Calendar,
	Gift,
	Shield,
	Sparkles,
	Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { CourseInquiryForm } from "@/components/home/inquiry-form";
import { Footer } from "@/components/layouts/footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FALL_2026_OFFER } from "@/lib/marketing/cohort-offer";
import {
	ENROLL_NOW_CTA,
	PARENT_FACING_PROMISE,
} from "@/lib/marketing/positioning";
import { publicMetadata } from "@/lib/seo";

export const metadata: Metadata = publicMetadata({
	title: "Book Your Free First Class — Kids Learn AI",
	description: PARENT_FACING_PROMISE,
	path: "/inquiry/book",
});

export default function BookTrialPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
			<SiteHeader />

			<main className="container mx-auto px-4 py-8 lg:py-12">
				{/* Back Link */}
				<div className="max-w-2xl mx-auto mb-8">
					<Button variant="ghost" asChild className="group">
						<Link href="/inquiry">
							<ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
							Back to Program Details
						</Link>
					</Button>
				</div>

				{/* Hero Section */}
				<div className="text-center mb-10 max-w-2xl mx-auto">
					<div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-6">
						<Gift className="w-4 h-4" />
						<span className="text-sm font-medium">
							Free Trial · {FALL_2026_OFFER.trialDateShort}
						</span>
					</div>
					<h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
						Request a Spot in the {FALL_2026_OFFER.trialDateShort} Trial
					</h1>
					<p className="text-lg text-muted-foreground">
						{PARENT_FACING_PROMISE} Complete the form to request a place; we'll
						confirm availability and email joining instructions within 24 hours.
					</p>
					<div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
						<p className="font-semibold text-foreground">
							{FALL_2026_OFFER.weeklySchedule}
						</p>
						<p className="mt-2 text-sm text-muted-foreground">
							The free first class and weekly program share this time.
						</p>
						<Button asChild variant="link" className="mt-2 h-auto p-0">
							<Link href="/pricing#payment-instructions">
								Ready to commit? {ENROLL_NOW_CTA}
							</Link>
						</Button>
					</div>
				</div>

				{/* Benefits Quick View */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
					{[
						{ icon: Calendar, label: FALL_2026_OFFER.trialDate },
						{
							icon: Users,
							label: `Maximum ${FALL_2026_OFFER.maximumStudents} Students`,
						},
						{ icon: Shield, label: "Safe & Moderated" },
						{ icon: Sparkles, label: "1 Hour · No Commitment" },
					].map((item) => (
						<div
							key={item.label}
							className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border/50"
						>
							<item.icon className="h-5 w-5 text-primary" />
							<span className="text-sm font-medium text-center">
								{item.label}
							</span>
						</div>
					))}
				</div>

				{/* Inquiry Form Card */}
				<Card className="max-w-2xl mx-auto border-2 border-primary/20 shadow-xl">
					<CardContent className="p-6 lg:p-10">
						<div className="mb-8">
							<h2 className="text-xl font-semibold mb-2">
								Free Trial Request Form
							</h2>
							<p className="text-sm text-muted-foreground">
								All fields marked with <span className="text-red-500">*</span>{" "}
								are required. This requests a spot for{" "}
								{FALL_2026_OFFER.trialDate}; your spot is confirmed when you
								receive our confirmation email with joining instructions.
							</p>
						</div>
						<CourseInquiryForm />
					</CardContent>
				</Card>

				{/* Footer Note */}
				<p className="text-center text-sm text-muted-foreground mt-8 max-w-md mx-auto">
					Have questions before booking?{" "}
					<Link href="/contact" className="text-primary hover:underline">
						Contact us
					</Link>{" "}
					or check out our{" "}
					<Link href="/faq" className="text-primary hover:underline">
						FAQ page
					</Link>
					.
				</p>
			</main>

			<Footer />
		</div>
	);
}
