"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle } from "lucide-react";
import { FadeIn, SlideInRight } from "@/components/ui/motion";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-20 lg:py-28 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full opacity-50 pointer-events-none -z-10" />

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="text-center lg:text-left z-10 relative">
          <FadeIn>
            <Badge className="mb-6 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20 rounded-full px-4 py-2 text-sm font-medium cursor-pointer relative z-10">
              <Sparkles className="w-4 h-4 inline mr-2" />
              Live Classes with Expert Instructors
            </Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-[1.1]">
              AI Literacy Starts Here.{" "}
              <span className="text-primary">
                Live Classes That Build Real Skills.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Join expert-led live classes where kids aged 9-13 learn Python
              fundamentals together, then explore how AI actually works. Build
              confidence, understanding, and real skills in a supportive
              community—preparing for an AI-driven future.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              {/* Brightbyte pointing toward the CTA button */}
              <motion.div
                animate={{
                  x: [0, 8, 12, 8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <Image
                  src="/brightbyte/pointing.png"
                  alt="Brightbyte pointing to the Book a FREE Trial Class button"
                  width={72}
                  height={72}
                  className="object-contain drop-shadow-lg"
                />
              </motion.div>
              <Link href="/inquiry">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Book a FREE Trial Class
                </Button>
              </Link>
              <span className="text-sm text-muted-foreground">
                No commitment required
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start text-sm text-muted-foreground relative">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>First class FREE - try before you commit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Ages 9-10 (Tue) & 11-13 (Thu)</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Video Container - Soft Blend Style */}
        <SlideInRight
          delay={0.2}
          className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full h-full lg:w-[120%] lg:-mr-[20%]">
            {/* The Video with Masking */}
            <div className="absolute inset-0 z-0 opacity-90 mix-blend-normal">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover [mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)] lg:[mask-image:linear-gradient(to_left,black_20%,transparent_95%)]"
                poster="/images/student-focused.png"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Decorative Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent/20 blur-3xl rounded-full -z-10 mix-blend-screen animate-pulse" />
          </div>
        </SlideInRight>
      </div>
    </section>
  );
};

export default Hero;
