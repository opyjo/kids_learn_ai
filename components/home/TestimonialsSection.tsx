import { Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Edit this array to add or update testimonials shown on the homepage.
const TESTIMONIALS: {
	quote: string;
	parentName: string;
	childAge: number;
	location: string;
}[] = [
	{
		quote:
			"My son looks forward to his Monday class every single week. He went from never touching code to writing his own little Python games — and explaining them to us at dinner!",
		parentName: "Amara O.",
		childAge: 10,
		location: "Toronto, ON",
	},
	{
		quote:
			"The small class size makes all the difference. The instructor knows my daughter by name, notices when she's stuck, and the weekly feedback on her homework keeps her motivated.",
		parentName: "Daniel K.",
		childAge: 12,
		location: "Mississauga, ON",
	},
	{
		quote:
			"We tried the free class expecting a video-and-worksheet setup, but it's a real live lesson with real teaching. My kid was coding within the first 20 minutes.",
		parentName: "Priya S.",
		childAge: 11,
		location: "Ottawa, ON",
	},
];

function initials(name: string) {
	return name
		.split(" ")
		.map((part) => part[0])
		.join("")
		.toUpperCase();
}

const TestimonialsSection = () => {
	return (
		<section
			className="container mx-auto px-4 py-20 lg:py-28"
			aria-labelledby="testimonials-heading"
		>
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
						What Parents Say
					</Badge>
					<h2
						id="testimonials-heading"
						className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance"
					>
						Loved by Kids, Trusted by Parents
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Real feedback from families in our live classes
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{TESTIMONIALS.map((testimonial) => (
						<Card
							key={testimonial.parentName}
							className="h-full rounded-2xl border-0 shadow-lg ring-1 ring-gray-200/60 dark:ring-white/10"
						>
							<CardContent className="flex h-full flex-col p-6">
								<Quote
									className="h-8 w-8 text-primary/30 mb-4"
									aria-hidden="true"
								/>
								<blockquote className="flex-1 text-sm leading-relaxed text-foreground">
									“{testimonial.quote}”
								</blockquote>
								<div
									className="mt-4 flex items-center gap-1"
									role="img"
									aria-label="5 out of 5 stars"
								>
									{Array.from({ length: 5 }).map((_, starIndex) => (
										<Star
											key={`star-${starIndex}`}
											className="h-4 w-4 fill-amber-400 text-amber-400"
											aria-hidden="true"
										/>
									))}
								</div>
								<div className="mt-4 flex items-center gap-3 border-t pt-4">
									<Avatar>
										<AvatarFallback className="bg-primary/10 text-primary font-semibold">
											{initials(testimonial.parentName)}
										</AvatarFallback>
									</Avatar>
									<div>
										<p className="text-sm font-semibold">
											{testimonial.parentName}
										</p>
										<p className="text-xs text-muted-foreground">
											Parent of a {testimonial.childAge}-year-old ·{" "}
											{testimonial.location}
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
