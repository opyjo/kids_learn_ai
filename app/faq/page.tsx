"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layouts/main-layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { ChevronDown } from "lucide-react";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need any coding experience?",
      answer:
        "Not at all! Our lessons are designed for complete beginners. We start from the very basics and guide you step-by-step. If you can read and follow instructions, you can learn to code with us!",
    },
    {
      question: "How long are the lessons?",
      answer:
        "Most lessons take 5-15 minutes to complete. They're designed to be short and fun so you can learn at your own pace without getting overwhelmed. You can do one lesson a day or binge through several - it's up to you!",
    },
    {
      question: "Can I learn on a tablet or phone?",
      answer:
        "Yes! Our platform works on tablets, phones, and computers. However, we recommend using a computer or tablet with a keyboard for the best coding experience, especially when typing longer programs.",
    },
    {
      question: "Is it really free?",
      answer:
        "Yes! Our free plan includes 5 beginner lessons, the code playground, and progress tracking - completely free forever. You can upgrade to Premium anytime to unlock all 50+ lessons and advanced projects.",
    },
    {
      question: "What age is this for?",
      answer:
        "KidsCode Academy is perfect for kids ages 8-16. Our lessons use simple language and fun examples that make sense to young learners. Younger kids (6-7) can also try with parent help!",
    },
    {
      question: "Can parents track my progress?",
      answer:
        "Yes! Parents can see which lessons you've completed, view your projects, and track your achievements. We also send weekly progress reports to keep parents in the loop about your coding journey.",
    },
  ];

  return (
    <MainLayout>
      <section className="container mx-auto px-4 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 rounded-full px-4 py-2">
              Got Questions?
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Everything you need to know about learning Python with us
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={faq.question}
                className="border-2 hover:border-primary/50 transition-all rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between gap-4">
                    <CardTitle className="text-xl text-left">
                      {faq.question}
                    </CardTitle>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardHeader>
                {openIndex === index && (
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-secondary/30 rounded-2xl">
            <p className="text-lg text-foreground mb-4">
              Still have questions?
            </p>
            <p className="text-muted-foreground mb-6">
              We're here to help! Reach out to our friendly support team
              anytime.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 bg-transparent"
              >
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FAQPage;
