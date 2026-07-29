import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const PROGRAM_PRIORITIES: {
	title: string;
	description: string;
}[] = [
	{
		title: "A welcoming weekly routine",
		description:
			"Consistent live sessions give children a regular time to practise, ask questions, and share what they are building.",
	},
	{
		title: "Small-group instructor support",
		description:
			"Instructors can notice when a learner is stuck, explain an idea another way, and help each child take the next step.",
	},
	{
		title: "Hands-on from the first class",
		description:
			"Students write and discuss real Python code with guidance instead of only watching videos or completing worksheets.",
	},
];

const TestimonialsSection = () => {
	return (
		<section
			className="container mx-auto px-4 py-20 lg:py-28"
			aria-labelledby="testimonials-heading"
		>
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
						Designed for Young Learners
					</Badge>
					<h2
						id="testimonials-heading"
						className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance"
					>
						What Families Can Expect
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						The teaching priorities built into every live class
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{PROGRAM_PRIORITIES.map((priority) => (
						<Card
							key={priority.title}
							className="h-full rounded-2xl border-0 shadow-lg ring-1 ring-gray-200/60 dark:ring-white/10"
						>
							<CardContent className="flex h-full flex-col p-6">
								<CheckCircle2
									className="h-8 w-8 text-primary mb-5"
									aria-hidden="true"
								/>
								<h3 className="text-xl font-semibold">{priority.title}</h3>
								<p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
									{priority.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
