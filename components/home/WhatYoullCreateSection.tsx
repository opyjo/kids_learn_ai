"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Target,
  Zap,
  Sparkles,
  BookOpen,
  Rocket,
  Star,
  Trophy,
} from "lucide-react";
import {
  FadeIn,
  SlideInLeft,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";

const WhatYoullCreateSection = () => {
  const [imageError, setImageError] = useState(false);

  const journeyCards = [
    {
      icon: Target,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      badge: "Week 1-2",
      badgeType: "secondary" as const,
      title: "AI Building Blocks",
      description:
        "Discover with your instructor how computers learn, practice clear instructions together, and collect positive language for friendly bots.",
      tags: ["python basics", "kind words", "ethics"],
      tagBg: "bg-primary/5",
    },
    {
      icon: Zap,
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
      badge: "Week 3-4",
      badgeType: "secondary" as const,
      title: "Chatbot Designers",
      description:
        "Learn from expert guidance to use Python conditionals and prompt patterns, shaping personality and tone. Collaborate with peers to build bots that help classmates study or feel encouraged.",
      tags: ["prompts", "if/else", "empathy"],
      tagBg: "bg-accent/5",
    },
    {
      icon: Sparkles,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      badge: "Week 5-6",
      badgeType: "secondary" as const,
      title: "Data Detectives",
      description:
        "Work with your class to collect clues from numbers and text using Python, then teach simple models together to spot helpful patterns like mood or weather trends.",
      tags: ["datasets", "loops", "predictions"],
      tagBg: "bg-primary/5",
    },
    {
      icon: BookOpen,
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
      badge: "Week 7-8",
      badgeType: "secondary" as const,
      title: "Vision Lab",
      description:
        "Explore together how AI sees images—your instructor guides you through Python to label pictures, design safety overlays, and celebrate inclusive representations.",
      tags: ["image prompts", "functions", "teamwork"],
      tagBg: "bg-accent/5",
    },
    {
      icon: Rocket,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      badge: "Premium",
      badgeType: "premium" as const,
      title: "Creative AI Studio",
      description:
        "Collaborate with peers to mix Python automation with storytelling, sound, and art tools. Co-create experiences with AI in live sessions while keeping human ideas in control.",
      tags: ["generative art", "music", "story craft"],
      tagBg: "bg-primary/5",
    },
    {
      icon: Star,
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
      badge: "Premium",
      badgeType: "premium" as const,
      title: "Showcase & Ethics Lab",
      description:
        "Present capstone creations to your class, write AI safety pledges together, and share impact stories with instructors, peers, family and friends.",
      tags: ["presentations", "guidelines", "portfolio"],
      tagBg: "bg-accent/5",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Header with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 max-w-6xl mx-auto">
          {/* Celebrating Student Image */}
          <SlideInLeft className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              {!imageError ? (
                <Image
                  src="/images/student-celebrating.png"
                  alt="Student celebrating after completing a coding challenge"
                  fill
                  className="object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-accent/20 via-primary/10 to-secondary flex items-center justify-center">
                  <div className="text-center p-8">
                    <Trophy className="h-16 w-16 text-accent/50 mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Celebrate achievements!
                    </p>
                  </div>
                </div>
              )}
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />
            </div>
            {/* Floating accents */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            {/* Achievement badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full p-4 shadow-lg z-10">
              <Star className="h-6 w-6 fill-current" />
            </div>
          </SlideInLeft>

          <div className="text-center lg:text-left order-1 lg:order-2">
            <FadeIn>
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 rounded-full px-4 py-2">
                AI Journey Map
              </Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Your AI Learning Journey
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Expert instructors guide you through each milestone, blending
                Python skills with age-appropriate AI tools. Learn to invent,
                explain, and act responsibly alongside peers in live classes.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Journey Cards */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {journeyCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <StaggerItem key={card.title}>
                <Card className="rounded-2xl border-2 hover:shadow-xl transition-all h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center`}
                      >
                        <IconComponent className={`h-5 w-5 ${card.iconColor}`} />
                      </div>
                      {card.badgeType === "premium" ? (
                        <Badge className="rounded-full bg-accent/10 text-accent border-accent/20">
                          {card.badge}
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="rounded-full">
                          {card.badge}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {card.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className={`rounded-full text-xs ${card.tagBg}`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhatYoullCreateSection;
