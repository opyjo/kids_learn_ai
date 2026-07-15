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

export const metadata: Metadata = {
	title: "Book Your Free Trial Class — Kids Learn AI",
	description:
		"Fill out our quick form to book your child's free trial Python & AI class. We'll contact you within 24 hours to schedule a convenient time. No commitment.",
	openGraph: {
		title: "Book Your Free Trial Class — Kids Learn AI",
		description:
			"Fill out our quick form to book your child's free trial Python & AI class. We'll contact you within 24 hours to schedule a convenient time. No commitment.",
		type: "website",
	},
};

export default function BookTrialPage() {
	return (
		<div className="min-h-screen bg-background">
			<SiteHeader />

			<main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:py-12">
				{/* Back Link */}
				<div className="mx-auto mb-7 max-w-2xl">
					<Button variant="ghost" asChild className="group">
						<Link href="/inquiry">
							<ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
							Back to Program Details
						</Link>
					</Button>
				</div>

				{/* Hero Section */}
				<div className="mx-auto mb-8 max-w-2xl text-center">
					<div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
						<Gift className="w-4 h-4" />
						<span className="text-sm font-medium">First Class FREE</span>
					</div>
					<h1 className="mb-3 text-3xl font-semibold tracking-[-0.03em] text-foreground lg:text-4xl">
						Book Your Free Trial Class
					</h1>
					<p className="text-base leading-7 text-muted-foreground sm:text-lg">
						Fill out the form below and we'll contact you within 24 hours to
						schedule your child's free trial class.
					</p>
				</div>

				{/* Benefits Quick View */}
				<div className="mx-auto mb-8 grid max-w-2xl grid-cols-2 overflow-hidden rounded-xl border border-border bg-card md:grid-cols-4 md:divide-x md:divide-border">
					{[
						{ icon: Calendar, label: "8-10 Week Program" },
						{ icon: Users, label: "Small Classes" },
						{ icon: Shield, label: "Safe & Moderated" },
						{ icon: Sparkles, label: "No Commitment" },
					].map((item) => (
						<div
							key={item.label}
							className="flex flex-col items-center gap-2 border-b border-border p-4 text-center last:border-b-0 md:border-b-0"
						>
							<item.icon className="h-5 w-5 text-primary" />
							<span className="text-sm font-medium text-center">
								{item.label}
							</span>
						</div>
					))}
				</div>

				{/* Inquiry Form Card */}
				<Card className="mx-auto max-w-2xl border-border shadow-sm">
					<CardContent className="p-5 sm:p-7 lg:p-8">
						<div className="mb-8">
							<h2 className="text-xl font-semibold mb-2">Inquiry Form</h2>
							<p className="text-sm text-muted-foreground">
								All fields marked with <span className="text-red-500">*</span>{" "}
								are required. We'll reach out to schedule a convenient time for
								your child's free trial.
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
