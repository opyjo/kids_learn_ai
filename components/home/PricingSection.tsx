import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Sparkles, Rocket } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="bg-gradient-to-br from-secondary/30 via-background to-primary/5 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 rounded-full px-4 py-2">
            Simple Pricing
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Start Free, Upgrade Anytime
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Begin your Python journey with our free lessons, then unlock
            advanced content when you're ready
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 rounded-3xl overflow-hidden hover:shadow-xl transition-all">
            <div className="h-2 bg-gradient-to-r from-primary/50 to-primary/30"></div>
            <CardHeader className="text-center pb-4 pt-8">
              <CardTitle className="text-3xl mb-4">Free Plan</CardTitle>
              <div className="mb-6">
                <div className="text-5xl font-bold text-foreground">$0</div>
                <div className="text-muted-foreground mt-2">Forever free</div>
              </div>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base">
                    <strong>5 beginner lessons</strong> to get started
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base">
                    Interactive code editor with instant results
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base">
                    Progress tracking and achievements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base">
                    Access to playground for practice
                  </span>
                </li>
              </ul>
              <Link href="/signup" className="block mt-8">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full rounded-full border-2 py-6 text-lg bg-transparent"
                >
                  Start Free
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all relative bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="absolute top-4 right-4">
              <Badge className="bg-accent text-accent-foreground rounded-full px-4 py-1.5 shadow-lg">
                <Sparkles className="w-3 h-3 inline mr-1" />
                Most Popular
              </Badge>
            </div>
            <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
            <CardHeader className="text-center pb-4 pt-8">
              <CardTitle className="text-3xl mb-4">Premium Plan</CardTitle>
              <div className="mb-6">
                <div className="text-5xl font-bold text-foreground">$9</div>
                <div className="text-muted-foreground mt-2">per month</div>
              </div>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base">
                    <strong>All 50+ lessons</strong> and future content
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base">
                    Advanced projects: games, graphics, and more
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base">
                    Downloadable certificates of completion
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base">
                    Priority email support from our team
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base">
                    Access to exclusive coding challenges
                  </span>
                </li>
              </ul>
              <Link href="/pricing" className="block mt-8">
                <Button
                  size="lg"
                  className="w-full rounded-full py-6 text-lg shadow-lg shadow-primary/30"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Upgrade to Premium
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Questions about pricing?{" "}
            <Link
              href="/pricing"
              className="text-primary hover:underline font-medium"
            >
              View detailed comparison
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
