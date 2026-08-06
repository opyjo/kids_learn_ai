import type { Metadata } from "next";
import CTASection from "@/components/home/CTASection";
import CurriculumPathSection from "@/components/home/CurriculumPathSection";
import FAQTeaser from "@/components/home/FAQTeaser";
import Hero from "@/components/home/Hero";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import InteractiveCodeEditor from "@/components/home/InteractiveCodeEditor";
import StatsSection from "@/components/home/StatsSection";
import StoryClubSpotlight from "@/components/home/StoryClubSpotlight";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { MainLayout } from "@/components/layouts/main-layout";
import { PARENT_FACING_PROMISE } from "@/lib/marketing/positioning";
import { publicMetadata } from "@/lib/seo";

export const metadata: Metadata = publicMetadata({
	title: "Live Python & Responsible AI Classes for Kids — Kids Learn AI",
	description: PARENT_FACING_PROMISE,
	path: "/",
});

const HomePage = () => {
	return (
		<MainLayout>
			<Hero />
			<HowItWorksSection />
			<StoryClubSpotlight />
			<InteractiveCodeEditor />
			<StatsSection />
			<CurriculumPathSection />
			<TestimonialsSection />
			<FAQTeaser />
			<CTASection />
		</MainLayout>
	);
};

export default HomePage;
