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
import { BrainCircuit, Sparkles, ShieldCheck, Users } from "lucide-react";
import {
  FadeIn,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";

const FeaturesSection = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="container mx-auto px-4 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Header with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-center lg:text-left">
            <FadeIn>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
                Why Kids & Parents Love KidsLearn AI
              </Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Live Learning That Builds Confidence
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Expert instructors guide kids through Python fundamentals in
                live classes, then layer on age-appropriate AI concepts. Learn
                together in a supportive community where understanding how
                intelligent tools work becomes second nature.
              </p>
            </FadeIn>
          </div>

          {/* Teacher-Student Image */}
          <SlideInRight className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              {!imageError ? (
                <Image
                  src="/images/teacher-student.png"
                  alt="Expert instructor helping a student learn coding"
                  fill
                  className="object-cover"
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-secondary flex items-center justify-center">
                  <div className="text-center p-8">
                    <Users className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Expert-led instruction
                    </p>
                  </div>
                </div>
              )}
              {/* Decorative overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Brightbyte raising hand - bottom right */}
            <div className="absolute -bottom-6 -right-6 z-10 animate-float hidden md:block">
              <Image
                src="/brightbyte/raisedhand.png"
                alt="Brightbyte raising hand"
                width={100}
                height={100}
                className="object-contain drop-shadow-xl"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </SlideInRight>
        </div>

        {/* Feature Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <StaggerItem>
            <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group h-full cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <BrainCircuit className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">
                  Learn Python from Expert Instructors
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  Master Python fundamentals through live instruction with
                  real-time guidance. Expert educators break down complex
                  concepts, answer questions as you learn, and ensure every
                  student builds genuine coding skills.
                </CardDescription>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="border-2 hover:border-accent/50 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group h-full cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Sparkles className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">
                  Build Together in a Safe Community
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  Learn alongside peers in a moderated environment where
                  collaboration thrives. Share projects, celebrate achievements
                  together, and build confidence through supportive peer
                  learning—all while having fun.
                </CardDescription>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group h-full cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/80 to-accent/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <ShieldCheck className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">
                  Expert-Led AI Education
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  Experienced instructors provide personalized guidance, ethical
                  discussions, and age-appropriate curriculum designed by
                  educators. Safe, positive learning with expert oversight
                  ensures kids build both skills and responsibility.
                </CardDescription>
              </CardContent>
            </Card>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default FeaturesSection;
