"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/layouts/footer";
import { InstructorApplicationForm } from "@/components/careers/instructor-application-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Sparkles,
  GraduationCap,
  Clock,
  Heart,
  Users,
} from "lucide-react";

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <SiteHeader />

      <main className="container mx-auto px-4 py-8 lg:py-12">
        {/* Back Link */}
        <div className="max-w-2xl mx-auto mb-8">
          <Button variant="ghost" asChild className="group">
            <Link href="/careers">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Careers
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Join Our Team</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Become an Instructor
          </h1>
          <p className="text-lg text-muted-foreground">
            Help kids discover the joy of coding while gaining valuable teaching
            experience. Fill out the form below to apply.
          </p>
        </div>

        {/* Benefits Quick View */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
          {[
            { icon: Clock, label: "Flexible Hours" },
            { icon: GraduationCap, label: "Resume Builder" },
            { icon: Heart, label: "Meaningful Work" },
            { icon: Users, label: "Great Team" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border/50"
            >
              <item.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Application Form Card */}
        <Card className="max-w-2xl mx-auto border-2 border-primary/20 shadow-xl">
          <CardContent className="p-6 lg:p-10">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Application Form</h2>
              <p className="text-sm text-muted-foreground">
                All fields marked with <span className="text-red-500">*</span>{" "}
                are required. We typically respond within 2-3 business days.
              </p>
            </div>
            <InstructorApplicationForm />
          </CardContent>
        </Card>

        {/* Footer Note */}
        <p className="text-center text-sm text-muted-foreground mt-8 max-w-md mx-auto">
          Have questions before applying?{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Contact us
          </Link>{" "}
          and we'll be happy to help.
        </p>
      </main>

      <Footer />
    </div>
  );
}

