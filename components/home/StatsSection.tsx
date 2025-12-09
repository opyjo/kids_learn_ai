"use client";

import Image from "next/image";
import { useState } from "react";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

const StatsSection = () => {
  const [imageError, setImageError] = useState(false);

  const stats = [
    { value: "Live", label: "Expert-Led Interactive Sessions" },
    { value: "300+", label: "Active Learning Community" },
    { value: "1,000+", label: "Hours of Live Instruction" },
    { value: "500+", label: "Student Projects Built Together" },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image or Gradient Fallback */}
      <div className="absolute inset-0 z-0">
        {!imageError ? (
          <Image
            src="/images/students-collaboration.png"
            alt="Students collaborating in classroom"
            fill
            className="object-cover"
            priority
            onError={() => setImageError(true)}
          />
        ) : null}
        {/* Gradient overlay - always shown */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-accent/85" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
          {stats.map((stat) => (
            <StaggerItem key={stat.value} className="p-6">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-3 drop-shadow-lg">
                {stat.value}
              </div>
              <div className="text-white/90 text-lg">{stat.label}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default StatsSection;
