"use client";

import { useState, useEffect } from "react";
import { SiteHeader } from "@/components/site-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Check,
  X,
  Sparkles,
  Crown,
  Mail,
  DollarSign,
  FileText,
  CheckCircle2,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

export default function PricingPage() {
  const [userEmail, setUserEmail] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const supabase = getSupabaseBrowserClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setIsAuthenticated(true);
        setUserEmail(user.email || "");
      }
    };

    checkAuth();
  }, []);
  const freeTier = {
    name: "Free",
    price: 0,
    period: "forever",
    description: "Perfect to get started with Python basics",
    features: [
      "First 3 beginner lessons",
      "Interactive code editor",
      "Basic progress tracking",
      "Community support",
    ],
    limitations: [
      "No AI tutor access",
      "Limited to 3 lessons",
      "No certificates",
      "No teacher support",
    ],
  };

  const premiumTier = {
    name: "Premium",
    price: 79.99,
    period: "month",
    currency: "CAD",
    description: "Full access with teacher-led instruction",
    features: [
      "All 15+ lessons (beginner to advanced)",
      "Live teacher-led sessions",
      "Unlimited AI tutor (BrightByte) access",
      "Interactive code editor with advanced features",
      "Detailed progress analytics",
      "Completion certificates",
      "Priority support",
      "New lessons added regularly",
      "Access to all future content",
    ],
    popular: true,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary/5 dark:from-gray-900 dark:via-gray-900 dark:to-primary/10">
      <SiteHeader />

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
            Simple, Transparent Pricing
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Start Learning Python & AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your learning journey. Start free, upgrade
            anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Free Tier */}
          <Card className="relative border-2 hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-2xl">{freeTier.name}</CardTitle>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold">${freeTier.price}</span>
                <span className="text-muted-foreground ml-2">
                  / {freeTier.period}
                </span>
              </div>
              <CardDescription className="text-base">
                {freeTier.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full mb-6"
              >
                <Link href="/signup">Get Started Free</Link>
              </Button>

              <div className="space-y-3 mb-4">
                <p className="text-sm font-semibold text-foreground">
                  What's included:
                </p>
                {freeTier.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t">
                <p className="text-sm font-semibold text-muted-foreground">
                  Not included:
                </p>
                {freeTier.limitations.map((limitation, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {limitation}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Premium Tier */}
          <Card className="relative border-2 border-primary shadow-xl hover:shadow-2xl transition-all">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0 px-4 py-1">
                <Sparkles className="h-3 w-3 mr-1" />
                Most Popular
              </Badge>
            </div>

            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-2xl flex items-center gap-2">
                  {premiumTier.name}
                  <Crown className="h-5 w-5 text-yellow-500" />
                </CardTitle>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold">${premiumTier.price}</span>
                <span className="text-muted-foreground ml-2">
                  {premiumTier.currency} / {premiumTier.period}
                </span>
              </div>
              <CardDescription className="text-base">
                {premiumTier.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isAuthenticated ? (
                <a href="#payment-instructions">
                  <Button
                    size="lg"
                    className="w-full mb-6 bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  >
                    Subscribe Now
                  </Button>
                </a>
              ) : (
                <Button
                  asChild
                  size="lg"
                  className="w-full mb-6 bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  <Link href="/signup">Sign Up to Subscribe</Link>
                </Button>
              )}

              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground">
                  Everything included:
                </p>
                {premiumTier.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Instructions - Only show if authenticated */}
        {isAuthenticated && (
          <div
            id="payment-instructions"
            className="max-w-3xl mx-auto mt-16 scroll-mt-20"
          >
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-green-50 text-green-700 border-green-300 rounded-full px-4 py-2">
                Ready to Subscribe?
              </Badge>
              <h2 className="text-3xl font-bold mb-2">Send Your Payment</h2>
              <p className="text-muted-foreground">
                Follow the instructions below to activate your premium access
              </p>
            </div>

            <div className="space-y-6">
              {/* Payment Instructions Card */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    How to Pay via e-Transfer
                  </CardTitle>
                  <CardDescription>
                    Send your monthly payment using Interac e-Transfer
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg space-y-3">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          Send to:
                        </p>
                        <p className="text-lg font-mono text-primary break-all">
                          payment@kidslearnai.ca
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <DollarSign className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          Amount:
                        </p>
                        <p className="text-lg font-semibold">$79.99 CAD</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          Message:
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Include your email:{" "}
                          <span className="font-mono text-foreground">
                            {userEmail}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <Alert>
                    <CheckCircle2 className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Important:</strong> Include your email (
                      {userEmail}) in the e-Transfer message so we can match
                      your payment to your account.
                    </AlertDescription>
                  </Alert>

                  <div className="text-sm text-muted-foreground space-y-2">
                    <p className="font-semibold text-foreground">
                      Step-by-step instructions:
                    </p>
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Log into your online banking</li>
                      <li>Navigate to Interac e-Transfer</li>
                      <li>Add recipient: payment@kidslearnai.ca</li>
                      <li>Enter amount: $79.99 CAD</li>
                      <li>Include your email in the message: {userEmail}</li>
                      <li>Send the transfer</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>

              {/* What Happens Next Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    What Happens Next?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">We'll verify your payment</p>
                        <p className="text-muted-foreground">
                          Our team will check for your e-Transfer within 24-48
                          hours (usually much faster)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">
                          Access automatically unlocked
                        </p>
                        <p className="text-muted-foreground">
                          Once verified, all premium lessons and the AI tutor
                          will be available immediately
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Start learning right away</p>
                        <p className="text-muted-foreground">
                          While waiting, continue practicing with the free
                          lessons
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Button asChild className="flex-1">
                      <Link href="/lessons">View Free Lessons</Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <Link href="/dashboard">Go to Dashboard</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Help Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you have any questions or issues with your payment,
                    please contact us:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild variant="outline">
                      <a href="mailto:support@kidslearnai.ca">Email Support</a>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/faq">View FAQ</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  How does the payment work?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept payments via e-Transfer.{" "}
                  {isAuthenticated
                    ? "Scroll down to see payment instructions."
                    : "Sign up and scroll down to see payment instructions."}{" "}
                  Once verified (within 24-48 hours), your account will be
                  upgraded to premium.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I cancel anytime?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! Your subscription is month-to-month with no long-term
                  commitment. Simply stop sending monthly payments if you wish
                  to cancel. The program is designed as a 12-week course (3
                  months).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What's included in the teacher-led sessions?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Premium members get access to live weekly sessions where our
                  experienced teachers guide you through lessons, answer
                  questions, and provide personalized feedback on your code.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  How does the AI tutor work?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  BrightByte, our AI tutor, is available 24/7 to premium
                  members. Ask coding questions, get help debugging, learn new
                  concepts, and practice with interactive examples—all through a
                  friendly chat interface.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Is this suitable for my child's age?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our program is designed for kids aged 8-16. The content is
                  age-appropriate, safe, and includes parent guidance notes.
                  Start with free lessons to see if it's a good fit!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        {!isAuthenticated && (
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Coding Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Join hundreds of students learning Python and AI fundamentals
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/signup">Get Premium Access</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/signup">Try Free Lessons</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
