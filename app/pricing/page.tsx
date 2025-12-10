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
  Calendar,
  Check,
  X,
  GraduationCap,
  Shield,
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

  const handleScrollToPayment = () => {
    const paymentSection = document.getElementById("payment-instructions");
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-600/8 dark:via-purple-600/8 dark:to-pink-600/8">
      <SiteHeader />

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-700 border-green-300 dark:bg-green-900/30 dark:text-green-400 dark:border-green-700 rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 inline mr-2" />
            First Class FREE - No Commitment
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Live Python & AI Classes for Kids
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert-led 8-10 week program. Try your first class free, then
            decide if it's right for your child.
          </p>
        </div>

        {/* Schedule Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Ages 9-10</h3>
              <p className="text-3xl font-bold text-primary mb-2">Tuesdays</p>
              <p className="text-muted-foreground">Weekly live classes</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-accent/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Ages 11-13</h3>
              <p className="text-3xl font-bold text-accent mb-2">Thursdays</p>
              <p className="text-muted-foreground">Weekly live classes</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-3xl mx-auto mb-16">
          <Card className="relative border-2 border-primary shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
              First Class FREE
            </div>
            <CardHeader className="text-center pt-10">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl">8-10 Week Program</CardTitle>
              <CardDescription className="text-lg">
                Complete Python & AI curriculum with live instruction
              </CardDescription>
              <div className="mt-6">
                <Badge className="mb-3 bg-amber-100 text-amber-700 border-amber-300 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-700">
                  🎉 Founding Student Rate
                </Badge>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl text-muted-foreground line-through">$249</span>
                  <span className="text-5xl font-bold text-primary">$159.99</span>
                  <span className="text-muted-foreground text-lg">CAD</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  One-time payment for the full program
                </p>
                <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                  Limited time offer for early students
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pb-8">
              {/* What's Included */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: BookOpen, text: "8-10 weekly live classes" },
                  { icon: Users, text: "Small class sizes" },
                  { icon: Code, text: "Hands-on coding projects" },
                  { icon: Sparkles, text: "AI concepts & ethics" },
                  { icon: Shield, text: "Safe, moderated environment" },
                  { icon: CheckCircle2, text: "Certificate of completion" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="flex-1">
                  <Link href="/inquiry">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Book Free Trial Class
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  onClick={handleScrollToPayment}
                >
                  Already tried? Pay Now
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                Try your first class free. Only pay if you decide to continue.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Free vs Paid Comparison */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Free Trial vs Full Program
          </h2>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold">
                        Free Trial
                      </th>
                      <th className="text-center p-4 font-semibold bg-primary/5">
                        Full Program (<span className="line-through text-muted-foreground">$249</span> $159.99)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-4 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span>Live Classes</span>
                      </td>
                      <td className="text-center p-4">1 class</td>
                      <td className="text-center p-4 bg-primary/5 font-semibold">
                        8-10 classes
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 flex items-center gap-2">
                        <Code className="h-4 w-4 text-primary" />
                        <span>Code Playground Access</span>
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
                        <span>Practice Games</span>
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
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span>AI Tutors (24/7)</span>
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
                        <span>Full Python Curriculum</span>
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
                        <span>AI & Ethics Modules</span>
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
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
              Already Tried Your Free Class?
            </Badge>
            <h2 className="text-3xl font-bold mb-2">How to Pay</h2>
            <p className="text-muted-foreground">
              Continue your child's learning journey with the full program
            </p>
          </div>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Pay via e-Transfer
              </CardTitle>
              <CardDescription>
                Send your one-time payment using Interac e-Transfer
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
                      Amount (Founding Student Rate):
                    </p>
                    <p className="text-lg font-semibold">
                      <span className="line-through text-muted-foreground mr-2">$249</span>
                      $159.99 CAD
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Message:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Include your child's name and your email
                      {userEmail && (
                        <>
                          :{" "}
                          <span className="font-mono text-foreground">
                            {userEmail}
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <Alert>
                <CheckCircle2 className="h-4 w-4" />
                <AlertDescription>
                  <strong>Important:</strong> Include your child's name and your
                  email in the e-Transfer message so we can match your payment.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* What Happens Next */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                What Happens Next?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Payment verified within 24-48 hours</p>
                    <p className="text-muted-foreground">
                      Usually much faster - we'll confirm by email
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Full program access unlocked</p>
                    <p className="text-muted-foreground">
                      Your child joins their age group's weekly class
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">8-10 weeks of live instruction</p>
                    <p className="text-muted-foreground">
                      Expert-led classes every week until program completion
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
                  How does the free trial work?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your child attends their first class completely free with no
                  commitment. This lets you both experience the program before
                  deciding. If you love it, pay $159.99 to continue with the
                  remaining 7-9 classes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What if my child misses a class?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Life happens! We provide recordings and materials for any
                  missed sessions. Our instructors are also available to help
                  your child catch up during the next class.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What equipment does my child need?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Just a computer (Windows, Mac, or Chromebook) with internet
                  access and a webcam/microphone for live classes. All software
                  we use is free - we'll help you set everything up.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Can I get a refund if it's not a good fit?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  That's why we offer the free trial! Try before you pay. If
                  after paying you have concerns within the first 2 weeks,
                  contact us and we'll work with you to find a solution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 mb-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Book your child's free trial class today
          </p>
          <Button asChild size="lg">
            <Link href="/inquiry">
              <Sparkles className="mr-2 h-5 w-5" />
              Book Free Trial Class
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
