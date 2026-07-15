import { CalendarCheck, GraduationCap, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

const STEPS = [
	{
		number: 1,
		title: "Book a free trial",
		icon: CalendarCheck,
		description:
			"Pick a class time on our inquiry form. No card, no commitment.",
		link: { href: "/inquiry", label: "Book yours →" },
	},
	{
		number: 2,
		title: "Join a live class",
		icon: Video,
		description:
			"Your child codes along with a real instructor and a small group of kids.",
	},
	{
		number: 3,
		title: "Enroll in the term",
		icon: GraduationCap,
		description:
			"Loved it? Continue the 8-week term and follow a clear learning path.",
	},
];

const HowItWorksSection = () => {
	return (
		<section className="container mx-auto px-4 py-20 lg:py-28">
			<div className="max-w-5xl mx-auto">
				<div className="text-center mb-16">
					<Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
						Simple to Start
					</Badge>
					<h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
						How It Works
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
						From curious to coding in three easy steps.
					</p>
				</div>

				<StaggerContainer className="relative">
					<div
						className="hidden md:block absolute top-8 left-[17%] right-[17%] border-t-2 border-dashed border-primary/30"
						aria-hidden="true"
					/>
					<div className="grid md:grid-cols-3 gap-8 pt-8">
						{STEPS.map((step) => (
							<StaggerItem key={step.number} className="relative">
								{step.number === 3 && (
									<Image
										src="/brightbyte/celebrating.png"
										alt="Brightbyte celebrating"
										width={56}
										height={56}
										className="absolute -top-12 -right-2 z-20 object-contain drop-shadow-lg animate-float"
									/>
								)}
								<Card className="h-full rounded-3xl border-2 border-border hover:border-primary/30 transition-colors text-center">
									<CardContent className="pt-2 pb-8 px-6">
										<div className="relative z-10 mx-auto -mt-10 w-16 h-16 rounded-full bg-primary text-primary-foreground grid place-items-center text-xl font-bold shadow-lg">
											{step.number}
										</div>
										<step.icon
											className="mx-auto mt-6 mb-4 h-8 w-8 text-primary"
											aria-hidden="true"
										/>
										<h3 className="text-xl font-bold text-foreground mb-3">
											{step.title}
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											{step.description}
										</p>
										{step.link && (
											<Link
												href={step.link.href}
												className="inline-block mt-4 text-sm font-medium text-primary hover:underline"
											>
												{step.link.label}
											</Link>
										)}
									</CardContent>
								</Card>
							</StaggerItem>
						))}
					</div>
				</StaggerContainer>
			</div>
		</section>
	);
};

export default HowItWorksSection;
