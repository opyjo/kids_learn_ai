import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: 0,
      description: "Perfect for getting started with Python",
      features: [
        "5 beginner lessons",
        "Interactive code editor",
        "Basic progress tracking",
        "Community support",
      ],
      limitations: [
        "Limited to beginner content",
        "No advanced lessons",
        "No certificates",
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Premium",
      price: 9.99,
      description: "Unlock the full Python learning experience",
      features: [
        "All 15+ lessons (beginner to advanced)",
        "Interactive code editor with advanced features",
        "Detailed progress analytics",
        "Completion certificates",
        "Priority support",
        "New lessons added monthly",
        "Downloadable code examples",
        "Parent progress reports",
      ],
      limitations: [],
      buttonText: "Start Premium",
      buttonVariant: "default" as const,
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <SiteHeader />

      <div className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Learning Plan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Start free and upgrade anytime to unlock advanced Python lessons and
            features
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular ? "border-blue-500 shadow-lg scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    ${plan.price}
                  </span>
                  {plan.price > 0 && (
                    <span className="text-gray-500 dark:text-gray-400">
                      /month
                    </span>
                  )}
                </div>
                <CardDescription className="mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-600">
                      Limitations:
                    </h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation) => (
                        <li
                          key={limitation}
                          className="flex items-center gap-2"
                        >
                          <div className="h-4 w-4 rounded-full bg-gray-300 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            {limitation}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <Button
                  className="w-full mt-8"
                  variant={plan.buttonVariant}
                  size="lg"
                  asChild
                >
                  <Link href={plan.price === 0 ? "/signup" : "/checkout"}>
                    {plan.buttonText}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Can I cancel anytime?</h4>
                <p className="text-gray-600">
                  Yes! You can cancel your premium subscription at any time.
                  You'll continue to have access until the end of your billing
                  period.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">
                  Is there a family discount?
                </h4>
                <p className="text-gray-600">
                  We're working on family plans! For now, each child needs their
                  own account to track individual progress properly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">
                  What age group is this for?
                </h4>
                <p className="text-gray-600">
                  KidsCode Academy is designed for children ages 8-16, but
                  younger kids with reading skills can also benefit with parent
                  guidance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
