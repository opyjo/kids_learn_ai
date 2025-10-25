"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layouts/main-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Target,
  Users,
  Sparkles,
  Rocket,
  Shield,
  Zap,
  BookOpen,
  Star,
  Code,
} from "lucide-react";

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-accent/10 text-accent border-accent/20 rounded-full px-4 py-2">
            <Heart className="w-4 h-4 inline mr-2" />
            About Us
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            We're on a Mission to Make{" "}
            <span className="text-primary block mt-2">Coding Fun for Kids</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty">
            KidsCode Academy was created to help young minds discover the joy of
            programming through interactive, engaging, and age-appropriate
            Python lessons.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
                  Our Mission
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                  Empowering the Next Generation of Coders
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We believe every child should have the opportunity to learn
                  coding in a way that's fun, accessible, and inspiring.
                  Programming isn't just about computers - it's about
                  problem-solving, creativity, and bringing ideas to life.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our platform makes Python programming approachable for kids
                  ages 8-16, with interactive lessons that feel more like games
                  than schoolwork. We're here to spark curiosity and build
                  confidence, one line of code at a time.
                </p>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <Card className="border-2 rounded-2xl text-center p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-2">
                        10,000+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Students Learning
                      </div>
                    </Card>

                    <Card className="border-2 rounded-2xl text-center p-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="h-6 w-6 text-accent" />
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-2">
                        50+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Interactive Lessons
                      </div>
                    </Card>

                    <Card className="border-2 rounded-2xl text-center p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-2">
                        100+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Projects Built
                      </div>
                    </Card>

                    <Card className="border-2 rounded-2xl text-center p-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Star className="h-6 w-6 text-accent" />
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-2">
                        4.9/5
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Parent Rating
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="container mx-auto px-4 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 inline mr-2" />
              What Makes Us Different
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Why Kids Love Learning With Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              We've designed every aspect of our platform with young learners in
              mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all rounded-2xl">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">
                  Age-Appropriate Content
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  Every lesson uses language and examples that make sense to
                  kids. No boring technical jargon - just clear, fun
                  explanations!
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 hover:shadow-xl transition-all rounded-2xl">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Rocket className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">Learn by Building</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  Create real projects like games, quizzes, and art. Kids learn
                  best when they're making something cool they can show off!
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all rounded-2xl">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/80 to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Instant Feedback</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  See your code run immediately! Our interactive editor shows
                  results in real-time, making learning exciting and rewarding.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 hover:shadow-xl transition-all rounded-2xl">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/80 to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">Safe & Ad-Free</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  A completely safe learning environment with no ads, no chat
                  features, and full privacy protection for young learners.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all rounded-2xl">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Star className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  Earn badges, track achievements, and see your skills grow.
                  Parents can monitor progress and celebrate milestones!
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 hover:shadow-xl transition-all rounded-2xl">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Heart className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">Built with Love</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  Created by educators and parents who understand how kids
                  learn. Every detail is designed to inspire and encourage.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gradient-to-br from-secondary/30 via-background to-primary/5 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
                Our Values
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                What We Believe In
              </h2>
            </div>

            <div className="space-y-8">
              <Card className="border-2 rounded-2xl overflow-hidden">
                <CardHeader className="bg-primary/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">
                      Every Child Can Code
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardDescription className="text-base leading-relaxed">
                    We believe coding is for everyone, regardless of background
                    or experience. Our platform is designed to be accessible and
                    welcoming to all young learners who are curious about
                    technology.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 rounded-2xl overflow-hidden">
                <CardHeader className="bg-accent/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Rocket className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-2xl">
                      Learning Should Be Fun
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardDescription className="text-base leading-relaxed">
                    Education doesn't have to be boring! We make learning Python
                    feel like playing games, solving puzzles, and creating art.
                    When kids are having fun, they learn faster and remember
                    more.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 rounded-2xl overflow-hidden">
                <CardHeader className="bg-primary/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">
                      Safety First, Always
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardDescription className="text-base leading-relaxed">
                    We take child safety seriously. Our platform has no social
                    features, no ads, and strict privacy protections. Parents
                    can trust that their kids are learning in a secure,
                    monitored environment.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary via-primary/90 to-accent rounded-3xl p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>

          <div className="relative z-10">
            <div className="text-6xl mb-6">👋</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed max-w-2xl mx-auto">
              Start your coding journey today with thousands of other young
              learners. It's free to get started!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-transform"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Start Learning Free
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-full border-2 border-primary-foreground/30 text-primary-foreground hover:bg-white/10 bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
