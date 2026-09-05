import Link from "next/link";
import { MainLayout } from "@/components/layouts/main-layout";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FALL_2026_OFFER } from "@/lib/marketing/cohort-offer";
import { PARENT_FACING_PROMISE } from "@/lib/marketing/positioning";

export const FaqContent = () => {
	const faqs = [
		{
			question: "Does my child need coding experience?",
			answer:
				"No. The program starts with Python fundamentals and builds gradually. Children who already have some experience can extend the projects with additional challenges.",
		},
		{
			question: "What ages and schedules are available?",
			answer: `The new beginner cohort is for ${FALL_2026_OFFER.ageRange.toLowerCase()} and starts ${FALL_2026_OFFER.cohortStartDate}. Classes meet weekly: ${FALL_2026_OFFER.weeklySchedule}. Class size is limited to ${FALL_2026_OFFER.maximumStudents} students.`,
		},
		{
			question: "How does the free trial work?",
			answer: `The free trial is a one-hour live group class on ${FALL_2026_OFFER.trialDate}, ${FALL_2026_OFFER.classTime}. Weekly classes continue at the same time. Submit the request form and we will confirm availability and email joining instructions within 24 hours. You may also skip the trial and enroll immediately. The founding rate is a one-time payment of ${FALL_2026_OFFER.foundingRate} for the full ${FALL_2026_OFFER.programLength} program.`,
		},
		{
			question: "What equipment does my child need?",
			answer:
				"A computer running Windows, macOS, or ChromeOS, a stable internet connection, and a webcam and microphone for live participation. We will help your family set up any free software used in class.",
		},
		{
			question: "What happens if my child misses a class?",
			answer:
				"We provide the lesson materials needed to catch up, and the instructor can help your child get oriented at the next session. Contact us about the specific class if you know your child will be away.",
		},
		{
			question: "What will my child learn?",
			answer:
				"Students learn Python fundamentals, problem-solving, project building, and age-appropriate AI concepts including data, predictions, bias, safety, and responsible use.",
		},
	];

	return (
		<MainLayout>
			<section className="container mx-auto px-4 py-20 lg:py-28">
				<div className="max-w-3xl mx-auto">
					<div className="text-center mb-16">
						<Badge className="mb-4 bg-accent/10 text-accent border-accent/20 rounded-full px-4 py-2">
							Got Questions?
						</Badge>
						<h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
							Frequently Asked Questions
						</h1>
						<p className="text-xl text-muted-foreground text-pretty leading-relaxed">
							{PARENT_FACING_PROMISE}
						</p>
					</div>

					<Accordion
						type="single"
						defaultValue="faq-0"
						collapsible
						className="space-y-4"
					>
						{faqs.map((faq, index) => (
							<AccordionItem
								key={faq.question}
								value={`faq-${index}`}
								className="overflow-hidden rounded-2xl border-2 px-6 transition-colors hover:border-primary/50"
							>
								<AccordionTrigger className="py-6 text-lg font-semibold hover:no-underline">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>

					<div className="mt-12 text-center p-8 bg-secondary/30 rounded-2xl">
						<p className="text-lg text-foreground mb-4">
							Still have questions?
						</p>
						<p className="text-muted-foreground mb-6">
							We're here to help! Reach out to our friendly support team
							anytime.
						</p>
						<Link href="/contact">
							<Button
								size="lg"
								variant="outline"
								className="rounded-full border-2 bg-transparent"
							>
								Contact Support
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</MainLayout>
	);
};
