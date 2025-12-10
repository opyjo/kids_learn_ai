"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, User } from "lucide-react";
import { ScaleIn, FadeIn } from "@/components/ui/motion";

const CTASection = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="container mx-auto px-4 py-20 lg:py-28">
      <ScaleIn className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch bg-gradient-to-br from-primary via-primary/90 to-accent rounded-3xl overflow-hidden shadow-2xl">
          {/* Image Side */}
          <div className="relative h-64 lg:h-auto min-h-[300px] lg:min-h-[450px] order-2 lg:order-1">
            {!imageError ? (
              <Image
                src="/images/student-portrait.png"
                alt="Confident student ready to learn coding"
                fill
                className="object-cover object-center"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                <div className="text-center">
                  <User className="h-20 w-20 text-white/50 mx-auto mb-4" />
                  <p className="text-white/70 text-lg">Future Coder</p>
                </div>
              </div>
            )}
            {/* Gradient blend into the colored side */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary/60 lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent lg:hidden" />
          </div>

          {/* Content Side */}
          <div className="p-8 lg:p-12 xl:p-16 relative order-1 lg:order-2">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />

            <div className="relative z-10">
              <FadeIn>
                <div className="text-6xl mb-6">🧠</div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground mb-6 text-balance">
                  Try Your First Class FREE
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
                  Join a thriving community of young learners mastering Python
                  with expert instructors. See if our live classes are the right
                  fit for your child - no commitment required. Ages 9-10 on
                  Tuesdays, Ages 11-13 on Thursdays.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <Link href="/inquiry">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="text-lg px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-transform w-full sm:w-auto"
                    >
                      <Sparkles className="mr-2 h-5 w-5" />
                      Book Free Trial Class
                    </Button>
                  </Link>
                  <span className="text-primary-foreground/80 text-sm">
                    <span className="line-through opacity-70">$249</span>{" "}
                    <span className="font-semibold">$159.99</span> Founding Rate
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </ScaleIn>
    </section>
  );
};

export default CTASection;
