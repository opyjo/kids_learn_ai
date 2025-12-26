"use client";

import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/ui/motion";

const PromotionalVideoSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <FadeIn>
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
              <Play className="w-4 h-4 inline mr-2" />
              See Our Program in Action
            </Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Watch What Makes KidsLearn AI Special
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Get a glimpse of our engaging live classes, expert instructors, and
              the exciting projects your child will build.
            </p>
          </FadeIn>
        </div>

        {/* Video Container */}
        <ScaleIn delay={0.3}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-accent/5 ring-1 ring-border/50">
            {/* Decorative Glows */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

            {/* Video Element */}
            <video
              controls
              playsInline
              preload="metadata"
              className="w-full aspect-video relative z-10"
              aria-label="KidsLearn AI promotional video showcasing our live coding classes for kids"
              tabIndex={0}
            >
              <source src="/Promotional_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
};

export default PromotionalVideoSection;

