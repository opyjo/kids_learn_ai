"use client";

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

const HomePage = () => {
	return (
		<MainLayout>
			<Hero />
			<ProjectShowcaseBanner />
			<StatsSection />
			<FeaturesSection />
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
