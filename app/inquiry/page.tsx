import {
	ArrowRight,
	Calendar,
	CheckCircle,
	Clock,
	GraduationCap,
	Shield,
	Sparkles,
	Star,
	Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layouts/footer";
import { SiteHeader } from "@/components/site-header";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FALL_2026_OFFER } from "@/lib/marketing/cohort-offer";
import {
	FREE_FIRST_CLASS_CTA,
	PARENT_FACING_PROMISE,
} from "@/lib/marketing/positioning";
import { publicMetadata } from "@/lib/seo";

export const metadata: Metadata = publicMetadata({
	title: "Free First Class & Program Details — Kids Learn AI",
	description: PARENT_FACING_PROMISE,
	path: "/inquiry",
});

export default function InquiryPage() {
	return (
		<div className="min-h-screen bg-linear-to-br from-primary/5 via-accent/5 to-secondary/10">
			<SiteHeader />

			<main className="container mx-auto px-4 py-12 lg:py-20">
				{/* Hero Section */}
				<div className="text-center mb-12">
					<Badge className="mb-4 bg-accent/10 text-accent border-accent/20 rounded-full px-4 py-2">
						<Sparkles className="w-4 h-4 inline mr-2" />
						{FALL_2026_OFFER.trialDateShort} Trial · Limited to{" "}
						{FALL_2026_OFFER.maximumStudents} Students
					</Badge>
					<h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
						Try a Live Class <span className="text-primary">FREE</span>
					</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
						{PARENT_FACING_PROMISE}
					</p>
					<Button asChild size="lg" className="group">
						<Link href="/inquiry/book">
							{FREE_FIRST_CLASS_CTA}
							<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
						</Link>
					</Button>
				</div>

				<div className="max-w-4xl mx-auto space-y-8">
					{/* Program Details Card */}
					<Card className="border-2 border-primary/20 shadow-xl">
						<CardContent className="p-6 lg:p-8">
							<h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
								<GraduationCap className="h-6 w-6 text-primary" />
								Program Details
							</h2>

							<div className="space-y-4">
								{/* Trial and cohort dates */}
								<div className="grid gap-4 sm:grid-cols-2">
									<div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
										<div className="flex items-center gap-2 mb-2">
											<Calendar className="h-4 w-4 text-primary" />
											<span className="font-semibold text-sm">
												Free Group Trial
											</span>
										</div>
										<p className="text-xl font-bold text-primary">
											{FALL_2026_OFFER.trialDateShort}
										</p>
										<p className="text-sm text-muted-foreground">
											{FALL_2026_OFFER.trialDuration} · Time confirmed after
											booking
										</p>
									</div>
									<div className="bg-accent/5 rounded-xl p-4 border border-accent/20">
										<div className="flex items-center gap-2 mb-2">
											<Calendar className="h-4 w-4 text-accent" />
											<span className="font-semibold text-sm">
												New Beginner Cohort
											</span>
										</div>
										<p className="text-xl font-bold text-accent">
											Starts {FALL_2026_OFFER.cohortStartDateShort}
										</p>
										<p className="text-sm text-muted-foreground">
											{FALL_2026_OFFER.ageRange} · Weekly Mondays
										</p>
									</div>
								</div>

								{/* Program Features */}
								<div className="space-y-3 pt-4">
									<div className="flex items-center gap-3">
										<Clock className="h-5 w-5 text-primary shrink-0" />
										<span>
											{FALL_2026_OFFER.programLength} structured program
										</span>
									</div>
									<div className="flex items-center gap-3">
										<Users className="h-5 w-5 text-primary shrink-0" />
										<span>
											Maximum {FALL_2026_OFFER.maximumStudents} students for
											personalized attention
										</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
										<span className="font-semibold text-green-700 dark:text-green-400">
											{FALL_2026_OFFER.trialDateShort} trial is FREE - no
											commitment
										</span>
									</div>
								</div>

								{/* Pricing */}
								<div className="bg-linear-to-r from-primary/10 to-accent/10 rounded-xl p-6 mt-6">
									<Badge className="mb-3 bg-amber-100 text-amber-700 border-amber-300 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-700">
										🎉 Founding Student Rate
									</Badge>
									<div className="flex items-baseline gap-2 mb-2">
										<span className="text-xl text-muted-foreground line-through">
											$199.99
										</span>
										<span className="text-4xl font-bold text-primary">
											$159.99
										</span>
										<span className="text-muted-foreground">CAD</span>
									</div>
									<p className="text-sm text-muted-foreground">
										One-time payment for the full{" "}
										{FALL_2026_OFFER.programLength} program
									</p>
									<p className="text-sm font-medium text-primary mt-2">
										✨ Try your first class free before paying
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* What They'll Learn */}
					<Card>
						<CardContent className="p-6 lg:p-8">
							<h2 className="text-xl font-bold mb-4">
								What Your Child Will Learn
							</h2>
							<ul className="grid sm:grid-cols-2 gap-3">
								{[
									"Python programming fundamentals",
									"Problem-solving and logical thinking",
									"Introduction to AI concepts",
									"Building real projects together",
									"Collaboration with peers in live classes",
									"Safe and responsible AI usage",
								].map((item) => (
									<li key={item} className="flex items-start gap-3">
										<CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>

					{/* Trust Signals */}
					<div className="flex flex-wrap gap-4 justify-center">
						<div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
							<Shield className="h-4 w-4 text-green-600" />
							<span className="text-sm">Safe & Moderated</span>
						</div>
						<div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
							<Star className="h-4 w-4 text-yellow-500" />
							<span className="text-sm">Expert Instructors</span>
						</div>
						<div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
							<Users className="h-4 w-4 text-primary" />
							<span className="text-sm">Small Classes</span>
						</div>
					</div>

					{/* FAQ */}
					<Card>
						<CardContent className="p-6 lg:p-8">
							<h2 className="text-xl font-bold mb-4">
								Frequently Asked Questions
							</h2>
							<Accordion type="single" collapsible className="w-full">
								<AccordionItem value="trial">
									<AccordionTrigger>
										How does the free first class work?
									</AccordionTrigger>
									<AccordionContent>
										The free trial is a one-hour live group class on{" "}
										{FALL_2026_OFFER.trialDate}. Submit the form to request a
										spot; we will email the exact class time and joining
										instructions within 24 hours. No payment is required for the
										trial.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="experience">
									<AccordionTrigger>
										Does my child need prior coding experience?
									</AccordionTrigger>
									<AccordionContent>
										No! Our program is designed for beginners. We start from the
										basics and build up gradually. Kids with some experience
										will also find the content engaging with more advanced
										projects.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="schedule">
									<AccordionTrigger>What if we miss a class?</AccordionTrigger>
									<AccordionContent>
										Life happens! If your child misses a class, we provide
										lesson materials and catch-up support. Live classes are not
										recorded.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="equipment">
									<AccordionTrigger>What equipment is needed?</AccordionTrigger>
									<AccordionContent>
										Just a computer (Windows, Mac, or Chromebook) with internet
										access and a webcam/microphone for participating in live
										classes. We'll help you set up any free software needed.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="payment">
									<AccordionTrigger>When do I pay?</AccordionTrigger>
									<AccordionContent>
										Only after your child's free first class! If you decide to
										continue into the Monday beginner cohort starting September
										14, you'll pay the one-time fee of{" "}
										{FALL_2026_OFFER.foundingRate} for the full{" "}
										{FALL_2026_OFFER.programLength} program via e-Transfer.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</CardContent>
					</Card>

					{/* CTA Section */}
					<div className="text-center py-8">
						<h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
						<p className="text-muted-foreground mb-6 max-w-lg mx-auto">
							Request one of {FALL_2026_OFFER.maximumStudents} spots in the{" "}
							{FALL_2026_OFFER.trialDateShort} trial. We will confirm the exact
							time and joining instructions within 24 hours.
						</p>
						<Button asChild size="lg" className="group">
							<Link href="/inquiry/book">
								{FREE_FIRST_CLASS_CTA}
								<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
							</Link>
						</Button>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
