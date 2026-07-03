import type { Metadata } from "next";
import BrightByteSection from "@/components/home/BrightByteSection";
import CTASection from "@/components/home/CTASection";
import FAQTeaser from "@/components/home/FAQTeaser";
import FeaturesSection from "@/components/home/FeaturesSection";
import Hero from "@/components/home/Hero";
import InteractiveCodeEditor from "@/components/home/InteractiveCodeEditor";
import ProjectShowcaseBanner from "@/components/home/ProjectShowcaseBanner";
import PromotionalVideoSection from "@/components/home/PromotionalVideoSection";
import SampleLessonsSection from "@/components/home/SampleLessonsSection";
import StatsSection from "@/components/home/StatsSection";
import WhatYoullCreateSection from "@/components/home/WhatYoullCreateSection";
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
			<ProjectShowcaseBanner />
			<StatsSection />
			<FeaturesSection />
			<BrightByteSection />
			<InteractiveCodeEditor />
			<WhatYoullCreateSection />
			<SampleLessonsSection />
			<FAQTeaser />
			<PromotionalVideoSection />
			<CTASection />
		</MainLayout>
	);
};

export default HomePage;
