import {
	ArrowRight,
	BookOpen,
	Calendar,
	CheckCircle,
	Clock,
	DollarSign,
	GraduationCap,
	Heart,
	Laptop,
	MessageSquare,
	Sparkles,
	Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layouts/footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CAREERS_OPEN } from "@/lib/careers";
import { publicMetadata } from "@/lib/seo";

export const metadata: Metadata = CAREERS_OPEN
	? publicMetadata({
			title: "Careers: Instructor Intern — Kids Learn AI",
			description:
				"Join us as a VFC-funded Curriculum & Content Support / Instructor Intern. Build lesson materials and lead live Python and AI classes for kids aged 9-13.",
			path: "/careers",
		})
	: publicMetadata({
			title: "Careers — Kids Learn AI",
			description:
				"Kids Learn AI is not currently accepting instructor applications.",
			path: "/careers",
			noIndex: true,
		});

function CareersClosedPage() {
	return (
		<div className="min-h-screen bg-linear-to-br from-primary/5 via-accent/5 to-secondary/10">
			<SiteHeader />

			<main className="container mx-auto px-4 py-16 lg:py-24">
				<Card className="mx-auto max-w-2xl border-primary/20 shadow-lg">
					<CardContent className="p-8 text-center sm:p-12">
						<Badge className="mb-5 rounded-full border-primary/20 bg-primary/10 px-4 py-2 text-primary">
							Recruitment paused
						</Badge>
						<h1 className="mb-4 text-3xl font-bold sm:text-4xl">
							We’re not currently hiring
						</h1>
						<p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
							Thank you for your interest in Kids Learn AI. Instructor
							applications are closed for now. Please check back here when we
							reopen recruitment.
						</p>
						<div className="flex flex-col justify-center gap-3 sm:flex-row">
							<Button asChild>
								<Link href="/">Return home</Link>
							</Button>
							<Button asChild variant="outline">
								<Link href="/contact">Contact us</Link>
							</Button>
						</div>
					</CardContent>
				</Card>
			</main>

			<Footer />
		</div>
	);
}

export default function CareersPage() {
	if (!CAREERS_OPEN) {
		return <CareersClosedPage />;
	}

	return (
		<div className="min-h-screen bg-linear-to-br from-primary/5 via-accent/5 to-secondary/10">
			<SiteHeader />

			<main className="container mx-auto px-4 py-12 lg:py-20">
				{/* Hero Section */}
				<div className="text-center mb-16">
					<Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
						<Sparkles className="w-4 h-4 inline mr-2" />
						Now Hiring
					</Badge>
					<h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
						Teach Kids to Code.{" "}
						<span className="text-primary">Make a Difference.</span>
					</h1>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
						Join our team of passionate university students helping kids aged
						9-13 learn Python and AI fundamentals. Flexible hours, meaningful
						work, and great experience for your resume.
					</p>
					<Button asChild size="lg" className="group">
						<Link href="/careers/apply">
							Apply Now
							<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
						</Link>
					</Button>
				</div>

				<div className="max-w-4xl mx-auto space-y-8">
					{/* VFC-Funded Internship Position */}
					<Card className="border-2 border-accent/30">
						<CardContent className="p-6 lg:p-8">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
									<BookOpen className="h-6 w-6 text-accent" />
								</div>
								<div>
									<h2 className="text-2xl font-bold">
										Curriculum & Content Support / Instructor Intern
									</h2>
									<p className="text-muted-foreground">
										Part-time • Remote • VFC-funded internship
									</p>
								</div>
							</div>

							<div className="grid sm:grid-cols-3 gap-4 mb-6">
								<div className="bg-secondary/50 rounded-lg p-4 text-center">
									<Clock className="h-5 w-5 text-accent mx-auto mb-2" />
									<p className="text-sm font-medium">~10 hrs/week</p>
									<p className="text-xs text-muted-foreground">
										Mon–Fri, 2 hrs/day
									</p>
								</div>
								<div className="bg-secondary/50 rounded-lg p-4 text-center">
									<DollarSign className="h-5 w-5 text-accent mx-auto mb-2" />
									<p className="text-sm font-medium">$20/hour</p>
									<p className="text-xs text-muted-foreground">
										Venture for Canada subsidized
									</p>
								</div>
								<div className="bg-secondary/50 rounded-lg p-4 text-center">
									<Calendar className="h-5 w-5 text-accent mx-auto mb-2" />
									<p className="text-sm font-medium">Apply by Sept 4</p>
									<p className="text-xs text-muted-foreground">
										2026 application deadline
									</p>
								</div>
							</div>

							<p className="text-xs text-muted-foreground mb-6">
								Compensation is contingent on approved Venture for Canada
								funding for this placement.
							</p>

							<p className="text-muted-foreground leading-relaxed mb-6">
								Build and refine Python/AI lesson materials for our live K-12
								education program — designing exercises, prototyping engaging
								ways to teach coding concepts, and developing content for new
								course terms and competition-prep tracks. You'll also lead our
								two weekly live classes (~4 hrs/week): the new Monday beginner
								cohort and the continuing Wednesday Term 2 cohort, both
								co-supervised by our founder.
							</p>

							<h3 className="font-semibold mb-3">Weekly Schedule</h3>
							<div className="grid grid-cols-5 gap-2 sm:gap-3 mb-6">
								{[
									{ day: "Mon", focus: "Live class" },
									{ day: "Tue", focus: "Curriculum" },
									{ day: "Wed", focus: "Live class" },
									{ day: "Thu", focus: "Curriculum" },
									{ day: "Fri", focus: "Curriculum" },
								].map((slot) => (
									<div
										key={slot.day}
										className="bg-accent/5 rounded-lg p-2 sm:p-3 text-center border border-accent/20"
									>
										<p className="font-semibold text-sm">{slot.day}</p>
										<p className="text-xs text-muted-foreground">2 hrs</p>
										<p className="text-xs text-accent mt-1">{slot.focus}</p>
									</div>
								))}
							</div>

							<h3 className="font-semibold mb-2">What We're Looking For</h3>
							<ul className="space-y-2">
								{[
									"Currently enrolled at a Canadian post-secondary institution",
									"Solid grounding in Python fundamentals",
									"Comfortable and patient working with kids/youth",
									"Clear communicator, comfortable presenting live over video",
									"Reliable and organized",
								].map((item) => (
									<li key={item} className="flex items-start gap-3">
										<CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>

					{/* Responsibilities */}
					<Card>
						<CardContent className="p-6 lg:p-8">
							<h3 className="text-xl font-bold mb-4 flex items-center gap-2">
								<BookOpen className="h-5 w-5 text-primary" />
								What You'll Do
							</h3>
							<ul className="space-y-3">
								{[
									"Lead engaging live coding sessions for kids aged 9-13",
									"Teach Python fundamentals through hands-on projects",
									"Introduce age-appropriate AI concepts and ethics",
									"Provide encouragement and support to young learners",
									"Answer questions and help debug student code",
									"Create a fun, safe, and inclusive learning environment",
									"Collaborate with our team to improve curriculum",
								].map((item) => (
									<li key={item} className="flex items-start gap-3">
										<CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>

					{/* What We Offer */}
					<Card className="border-2 border-primary/20">
						<CardContent className="p-6 lg:p-8">
							<h3 className="text-xl font-bold mb-4 flex items-center gap-2">
								<Heart className="h-5 w-5 text-primary" />
								What We Offer
							</h3>
							<div className="grid sm:grid-cols-2 gap-4">
								{[
									{
										icon: Clock,
										title: "Flexible Schedule",
										desc: "Work around your classes",
									},
									{
										icon: Laptop,
										title: "Remote Work",
										desc: "Teach from anywhere",
									},
									{
										icon: GraduationCap,
										title: "Teaching Experience",
										desc: "Great for your resume",
									},
									{
										icon: Users,
										title: "Supportive Team",
										desc: "Training & resources provided",
									},
									{
										icon: Heart,
										title: "Meaningful Work",
										desc: "Make a real impact on kids",
									},
									{
										icon: MessageSquare,
										title: "Reference Letter",
										desc: "For outstanding instructors",
									},
								].map((item) => (
									<div
										key={item.title}
										className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30"
									>
										<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
											<item.icon className="h-5 w-5 text-primary" />
										</div>
										<div>
											<p className="font-medium">{item.title}</p>
											<p className="text-sm text-muted-foreground">
												{item.desc}
											</p>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>

					{/* CTA Section */}
					<div className="text-center py-8">
						<h3 className="text-2xl font-bold mb-4">
							Ready to Make an Impact?
						</h3>
						<p className="text-muted-foreground mb-6 max-w-lg mx-auto">
							Join our team and help shape the next generation of coders. We'd
							love to hear from you!
						</p>
						<Button asChild size="lg" className="group">
							<Link href="/careers/apply">
								Apply Now
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
