"use client";

import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/layouts/footer";
import { InstructorApplicationForm } from "@/components/careers/instructor-application-form";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  GraduationCap,
  Clock,
  Users,
  Heart,
  CheckCircle,
  Calendar,
  Code,
  BookOpen,
  Star,
  Laptop,
  MessageSquare,
} from "lucide-react";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10">
      <SiteHeader />

      <main className="container mx-auto px-4 py-12 lg:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 inline mr-2" />
            Now Hiring
          </Badge>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
            Teach Kids to Code.{" "}
            <span className="text-primary">Make a Difference.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our team of passionate university students helping kids aged
            9-13 learn Python and AI fundamentals. Flexible hours, meaningful
            work, and great experience for your resume.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Job Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Position Overview */}
            <Card>
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Coding Instructor</h2>
                    <p className="text-muted-foreground">Part-time • Remote</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-secondary/50 rounded-lg p-4 text-center">
                    <Clock className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium">Flexible Hours</p>
                    <p className="text-xs text-muted-foreground">
                      Tue &/or Thu evenings
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 text-center">
                    <Laptop className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium">Fully Remote</p>
                    <p className="text-xs text-muted-foreground">
                      Teach from anywhere
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 text-center">
                    <Users className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium">Small Classes</p>
                    <p className="text-xs text-muted-foreground">
                      5-10 students max
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  We're looking for enthusiastic university students to lead our
                  live Python and AI classes for kids. You'll guide young
                  learners through interactive coding lessons, help them build
                  real projects, and inspire the next generation of tech
                  creators.
                </p>
              </CardContent>
            </Card>

            {/* Schedule */}
            <Card>
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Class Schedule
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                    <p className="font-semibold text-lg">Tuesdays</p>
                    <p className="text-muted-foreground">Ages 9-10 class</p>
                    <p className="text-sm text-primary mt-2">Weekly session</p>
                  </div>
                  <div className="bg-accent/5 rounded-xl p-4 border border-accent/20">
                    <p className="font-semibold text-lg">Thursdays</p>
                    <p className="text-muted-foreground">Ages 11-13 class</p>
                    <p className="text-sm text-accent mt-2">Weekly session</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  You can teach one or both age groups based on your
                  availability.
                </p>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card>
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  What You'll Do
                </h3>
                <ul className="space-y-3">
                  {[
                    "Lead engaging live coding sessions for kids aged 9-13",
                    "Teach Python fundamentals through hands-on projects",
                    "Introduce age-appropriate AI concepts and ethics",
                    "Provide encouragement and support to young learners",
                    "Answer questions and help debug student code",
                    "Create a fun, safe, and inclusive learning environment",
                    "Collaborate with our team to improve curriculum",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Requirements
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Must Have:</h4>
                    <ul className="space-y-2">
                      {[
                        "Currently enrolled in a STEM program at a university",
                        "Strong Python programming skills",
                        "Excellent communication skills in English",
                        "Reliable internet connection and quiet workspace",
                        "Passion for teaching and working with children",
                        "Available for at least one 8-10 week cohort",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Nice to Have:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {[
                        "Previous tutoring or teaching experience",
                        "Experience with AI/ML concepts",
                        "Background working with children (camps, volunteering, etc.)",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Star className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What We Offer */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  What We Offer
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Clock,
                      title: "Flexible Schedule",
                      desc: "Work around your classes",
                    },
                    {
                      icon: Laptop,
                      title: "Remote Work",
                      desc: "Teach from anywhere",
                    },
                    {
                      icon: GraduationCap,
                      title: "Teaching Experience",
                      desc: "Great for your resume",
                    },
                    {
                      icon: Users,
                      title: "Supportive Team",
                      desc: "Training & resources provided",
                    },
                    {
                      icon: Heart,
                      title: "Meaningful Work",
                      desc: "Make a real impact on kids",
                    },
                    {
                      icon: MessageSquare,
                      title: "Reference Letter",
                      desc: "For outstanding instructors",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <p className="text-sm">
                    <strong>Compensation:</strong> Competitive rates discussed
                    during the interview process based on experience and
                    availability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Application Form */}
          <div className="lg:col-span-1">
            <Card className="border-2 border-primary/30 shadow-2xl sticky top-24">
              <CardContent className="p-6 lg:p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold mb-2">Apply Now</h2>
                  <p className="text-muted-foreground">
                    Join our team of instructors
                  </p>
                </div>
                <InstructorApplicationForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

