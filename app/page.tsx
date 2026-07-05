import type { Metadata } from "next";
import CTASection from "@/components/home/CTASection";
import FAQTeaser from "@/components/home/FAQTeaser";
import FeaturesSection from "@/components/home/FeaturesSection";
import Hero from "@/components/home/Hero";
import InteractiveCodeEditor from "@/components/home/InteractiveCodeEditor";
import SampleLessonsSection from "@/components/home/SampleLessonsSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { MainLayout } from "@/components/layouts/main-layout";

export const metadata: Metadata = {
	title: "Live Python & AI Classes for Kids — Kids Learn AI",
	description:
		"Fun, live online Python and AI classes for kids ages 8-16. Build real projects, explore AI safely, and start with a free trial class, no experience needed.",
	openGraph: {
		title: "Live Python & AI Classes for Kids — Kids Learn AI",
		description:
			"Fun, live online Python and AI classes for kids ages 8-16. Build real projects, explore AI safely, and start with a free trial class, no experience needed.",
		type: "website",
	},
};

const HomePage = () => {
	return (
		<MainLayout>
			<Hero />
			<StatsSection />
			<FeaturesSection />
			<InteractiveCodeEditor />
			<SampleLessonsSection />
			<TestimonialsSection />
			<FAQTeaser />
			<CTASection />
		</MainLayout>
	);
};

export default HomePage;
