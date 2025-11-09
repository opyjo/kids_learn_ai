"use client";

import { useState, useEffect } from "react";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/layouts/footer";
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
  Mail,
  DollarSign,
  FileText,
  CheckCircle2,
  Clock,
  Sparkles,
  BookOpen,
  Users,
  Code,
  Gamepad2,
  MessageSquare,
  Zap,
  Check,
  X,
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
        setUserEmail(user.email || "");
        setIsAuthenticated(true);
      }
    };

    checkAuth();
  }, []);

  const handleGetStarted = () => {
    const paymentSection = document.getElementById("payment-instructions");
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary/5 dark:from-gray-900 dark:via-gray-900 dark:to-primary/10">
      <SiteHeader />

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
            Simple, Transparent Pricing
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Start Learning AI & Python Today
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your learning journey. No hidden fees,
            cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Free Plan */}
          <Card className="relative border-2">
            <CardHeader>
              <Badge className="w-fit mb-2 bg-gray-100 text-gray-700 border-gray-300">
                Free Forever
              </Badge>
              <CardTitle className="text-3xl">Free Plan</CardTitle>
              <CardDescription>Perfect for getting started</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Access to introductory lessons
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Python basics and fundamentals
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Interactive code playground</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Practice games and challenges</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">AI Tutors (4 subjects: Python, Math, Science, Arts)</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Advanced lessons
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Live teacher-led sessions
                  </span>
                </div>
              </div>

              <Button asChild variant="outline" className="w-full">
                <Link href="/signup">Start Free</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="relative border-2 border-primary shadow-xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white border-0 rounded-full px-4 py-1">
                Most Popular
              </Badge>
            </div>
            <CardHeader>
              <Badge className="w-fit mb-2 bg-primary/10 text-primary border-primary/20">
                Premium Access
              </Badge>
              <CardTitle className="text-3xl">Premium Plan</CardTitle>
              <CardDescription>Complete learning experience</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$79.99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">
                    Everything in Free, plus:
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    All advanced Python & AI lessons
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Live weekly teacher-led sessions
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Personalized code feedback</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Project-based learning modules
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Certificate of completion</span>
                </div>
              </div>

              <Button
                onClick={handleGetStarted}
                className="w-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600"
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Feature Comparison Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            What's Included in Each Plan?
          </h2>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold">Free</th>
                      <th className="text-center p-4 font-semibold bg-primary/5">
                        Premium
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-4 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span>Introductory Python Lessons</span>
                      </td>
                      <td className="text-center p-4">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="text-center p-4 bg-primary/5">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 flex items-center gap-2">
                        <Code className="h-4 w-4 text-primary" />
                        <span>Interactive Code Playground</span>
                      </td>
                      <td className="text-center p-4">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="text-center p-4 bg-primary/5">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 flex items-center gap-2">
                        <Gamepad2 className="h-4 w-4 text-primary" />
                        <span>Practice Games & Challenges</span>
                      </td>
                      <td className="text-center p-4">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="text-center p-4 bg-primary/5">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        <span>Advanced Python & AI Lessons</span>
                      </td>
                      <td className="text-center p-4">
                        <X className="h-5 w-5 text-gray-400 mx-auto" />
                      </td>
                      <td className="text-center p-4 bg-primary/5">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span>AI Tutors (Python, Math, Science, Arts)</span>
                      </td>
                      <td className="text-center p-4">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="text-center p-4 bg-primary/5">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span>Live Weekly Teacher-Led Sessions</span>
                      </td>
                      <td className="text-center p-4">
                        <X className="h-5 w-5 text-gray-400 mx-auto" />
                      </td>
                      <td className="text-center p-4 bg-primary/5">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        <span>Personalized Code Feedback</span>
                      </td>
                      <td className="text-center p-4">
                        <X className="h-5 w-5 text-gray-400 mx-auto" />
                      </td>
                      <td className="text-center p-4 bg-primary/5">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Certificate of Completion</span>
                      </td>
                      <td className="text-center p-4">
                        <X className="h-5 w-5 text-gray-400 mx-auto" />
                      </td>
                      <td className="text-center p-4 bg-primary/5">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Payment Instructions */}
        <div
          id="payment-instructions"
          className="max-w-3xl mx-auto scroll-mt-20 mb-16"
        >
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-green-50 text-green-700 border-green-300 rounded-full px-4 py-2">
              Ready to Get Premium?
            </Badge>
            <h2 className="text-3xl font-bold mb-2">How to Subscribe</h2>
            <p className="text-muted-foreground">
              Follow these simple steps to activate your premium access
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
                    <strong>Important:</strong> Include your email ({userEmail})
                    in the e-Transfer message so we can match your payment to
                    your account.
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
                        Once verified, all premium lessons and the AI tutor will
                        be available immediately
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Start learning right away</p>
                      <p className="text-muted-foreground">
                        While waiting, continue practicing with the free lessons
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
                  If you have any questions or issues with your payment, please
                  contact us:
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
                  We accept payments via e-Transfer. See payment instructions
                  above. Once verified (within 24-48 hours), your account will
                  be upgraded to premium.
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
                  How do the AI tutors work?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We have 4 specialized AI tutors available 24/7 to all registered users - completely free! 
                  Choose from BrightByte (Python), MathBot (Math), ScienceOwl (Science), or ArtAI (Creative Arts). 
                  Ask questions, get help with homework, learn new concepts, and practice—all through a 
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
        <div className="text-center mt-16 mb-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Join hundreds of students learning Python and AI fundamentals
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {isAuthenticated ? (
              <>
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600"
                >
                  Subscribe Now
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/lessons">View Lessons</Link>
                </Button>
              </>
            ) : (
              <>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600"
                >
                  <Link href="/signup">Get Started Free</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/lessons">View Sample Lessons</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
