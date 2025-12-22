"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/layouts/footer";
import { CourseInquiryForm } from "@/components/home/inquiry-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Sparkles,
  Calendar,
  Users,
  Shield,
  Gift,
} from "lucide-react";

export default function BookTrialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <SiteHeader />

      <main className="container mx-auto px-4 py-8 lg:py-12">
        {/* Back Link */}
        <div className="max-w-2xl mx-auto mb-8">
          <Button variant="ghost" asChild className="group">
            <Link href="/inquiry">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Program Details
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-6">
            <Gift className="w-4 h-4" />
            <span className="text-sm font-medium">First Class FREE</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Book Your Free Trial Class
          </h1>
          <p className="text-lg text-muted-foreground">
            Fill out the form below and we'll contact you within 24 hours to
            schedule your child's free trial class.
          </p>
        </div>

        {/* Benefits Quick View */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
          {[
            { icon: Calendar, label: "8-10 Week Program" },
            { icon: Users, label: "Small Classes" },
            { icon: Shield, label: "Safe & Moderated" },
            { icon: Sparkles, label: "No Commitment" },
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

        {/* Inquiry Form Card */}
        <Card className="max-w-2xl mx-auto border-2 border-primary/20 shadow-xl">
          <CardContent className="p-6 lg:p-10">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Inquiry Form</h2>
              <p className="text-sm text-muted-foreground">
                All fields marked with <span className="text-red-500">*</span>{" "}
                are required. We'll reach out to schedule a convenient time for
                your child's free trial.
              </p>
            </div>
            <CourseInquiryForm />
          </CardContent>
        </Card>

        {/* Footer Note */}
        <p className="text-center text-sm text-muted-foreground mt-8 max-w-md mx-auto">
          Have questions before booking?{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Contact us
          </Link>{" "}
          or check out our{" "}
          <Link href="/faq" className="text-primary hover:underline">
            FAQ page
          </Link>
          .
        </p>
      </main>

      <Footer />
    </div>
  );
}

