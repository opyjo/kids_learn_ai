"use client";

import React from "react";
import { MainLayout } from "@/components/layouts/main-layout";
import Hero from "@/components/home/Hero";
import PromotionalVideoSection from "@/components/home/PromotionalVideoSection";
import ProjectShowcaseBanner from "@/components/home/ProjectShowcaseBanner";
import StatsSection from "@/components/home/StatsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import InteractiveCodeEditor from "@/components/home/InteractiveCodeEditor";
import WhatYoullCreateSection from "@/components/home/WhatYoullCreateSection";
import SampleLessonsSection from "@/components/home/SampleLessonsSection";
import FAQTeaser from "@/components/home/FAQTeaser";
import CTASection from "@/components/home/CTASection";

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
