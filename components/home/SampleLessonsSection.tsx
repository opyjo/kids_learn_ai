"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, CheckCircle, Star, Code } from "lucide-react";
import Link from "next/link";
import {
  FadeIn,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";

const SampleLessonsSection = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="container mx-auto px-4 py-20 lg:py-28">
      {/* Header with Image */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 max-w-6xl mx-auto">
        <div className="text-center lg:text-left">
          <FadeIn>
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
              Try It Out
            </Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Experience Our Live Curriculum
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Preview the instructor-led lessons where kids learn Python basics
              together in live classes, then explore how to guide AI responsibly
              with expert support and peer collaboration.
            </p>
          </FadeIn>
        </div>

        {/* Student Coding Image */}
        <SlideInRight className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
            {!imageError ? (
              <Image
                src="/images/student-coding.png"
                alt="Student focused on learning to code"
                fill
                className="object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-secondary flex items-center justify-center">
                <div className="text-center p-8">
                  <Code className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">Hands-on coding</p>
                </div>
              </div>
            )}
            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
          </div>
          {/* Floating accents */}
          <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-primary/20 rounded-full blur-2xl" />
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl" />
        </SlideInRight>
      </div>

      {/* Lesson Cards */}
      <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <StaggerItem>
          <Card className="hover:shadow-2xl transition-all duration-300 rounded-2xl border-2 hover:border-primary/50 overflow-hidden group h-full cursor-pointer">
            <div className="h-2 bg-gradient-to-r from-primary to-primary/60" />
            <CardHeader>
              <div className="flex items-center justify-between mb-3">
                <Badge
                  variant="secondary"
                  className="rounded-full bg-primary/10 text-primary"
                >
                  Lesson 1
                </Badge>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={`l1-${i}`}
                      className="h-4 w-4 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
              </div>
              <CardTitle className="text-2xl">
                Teach the Bot to Say Hi 🤖
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-6 text-base leading-relaxed">
                Your first Python + AI mission in live class! Learn variables
                and lists with your instructor while creating a friendly greeter
                that shares encouraging words. Build confidence through hands-on
                practice.
              </CardDescription>
              <div className="bg-secondary/50 p-4 rounded-xl font-mono text-sm border-2 border-border group-hover:border-primary/30 transition-colors">
                <div className="text-foreground">
                  cheers = ["You're awesome!", "Let's build! 💡"]
                </div>
                <div className="text-accent">print</div>
                <div className="text-foreground">(cheers[0])</div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>5 min • Beginner</span>
              </div>
            </CardContent>
          </Card>
        </StaggerItem>

        <StaggerItem>
          <Card className="hover:shadow-2xl transition-all duration-300 rounded-2xl border-2 hover:border-accent/50 overflow-hidden group h-full cursor-pointer">
            <div className="h-2 bg-gradient-to-r from-accent to-accent/60" />
            <CardHeader>
              <div className="flex items-center justify-between mb-3">
                <Badge
                  variant="secondary"
                  className="rounded-full bg-accent/10 text-accent"
                >
                  Lesson 4
                </Badge>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={`l3-${i}`}
                      className="h-4 w-4 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
              </div>
              <CardTitle className="text-2xl">Emoji Mood Meter 😊</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-6 text-base leading-relaxed">
                Join your class to explore loops and conditionals, helping AI
                understand if messages sound happy or need encouragement. Expert
                instructors guide you through every step—no complex math
                required.
              </CardDescription>
              <div className="bg-secondary/50 p-4 rounded-xl font-mono text-sm border-2 border-border group-hover:border-accent/30 transition-colors">
                <div className="text-foreground">
                  words = ["yay", "amazing", "ugh"]
                </div>
                <div className="text-accent mt-2">for</div>
                <div className="text-foreground">word in words:</div>
                <div className="pl-4 text-foreground">
                  <span className="text-accent">print</span>(word, "→ happy" if
                  word != "ugh" else "→ needs a boost")
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>10 min • Explorer</span>
              </div>
            </CardContent>
          </Card>
        </StaggerItem>

        <StaggerItem>
          <Card className="hover:shadow-2xl transition-all duration-300 rounded-2xl border-2 hover:border-primary/50 overflow-hidden group relative h-full cursor-pointer">
            <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary" />
            <CardHeader>
              <div className="flex items-center justify-between mb-3">
                <Badge className="rounded-full bg-accent/10 text-accent border-accent/20">
                  Premium
                </Badge>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={`lP-${i}`}
                      className="h-4 w-4 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
              </div>
              <CardTitle className="text-2xl">Story Remix Studio ✨</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-6 text-base leading-relaxed">
                Collaborate with classmates to blend storytelling and Python
                prompts, learning how to guide creative AI in co-authoring safe,
                uplifting adventures with expert instruction.
              </CardDescription>
              <div className="bg-secondary/50 p-4 rounded-xl font-mono text-sm border-2 border-border group-hover:border-primary/30 transition-colors">
                <div className="text-foreground">
                  prompt = "Tell a brave story about a kid inventor"
                </div>
                <div className="text-accent mt-2">print</div>
                <div className="text-foreground">("🤖 Story Idea:", prompt)</div>
                <div className="text-muted-foreground mt-2">
                  # Guide the AI to add safe, uplifting twists
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>12 min • Story Maker</span>
              </div>
            </CardContent>
          </Card>
        </StaggerItem>
      </StaggerContainer>

      <FadeIn delay={0.3} className="text-center mt-12">
        <Link href="/lessons?course=level-1-python-foundations-1">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-2 px-8 py-6 text-lg hover:bg-secondary bg-transparent"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Explore All Lessons
          </Button>
        </Link>
      </FadeIn>
    </section>
  );
};

export default SampleLessonsSection;
