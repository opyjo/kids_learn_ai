"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LiveClassMockup from "@/components/home/LiveClassMockup";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SlideInRight } from "@/components/ui/motion";
import {
	FREE_FIRST_CLASS_CTA,
	PARENT_FACING_HEADLINE,
	PARENT_FACING_SUPPORTING_COPY,
} from "@/lib/marketing/positioning";

const Hero = () => {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className="container mx-auto px-4 py-20 lg:py-28 relative overflow-hidden">
			{/* Background Decor */}
			<div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full opacity-50 pointer-events-none -z-10" />

			<div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
				{/* Text Content */}
				<div className="text-center lg:text-left z-10 relative">
					<div>
						<Badge className="mb-6 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20 rounded-full px-4 py-2 text-sm font-medium cursor-pointer relative z-10">
							<Sparkles className="w-4 h-4 inline mr-2" aria-hidden="true" />
							Live Classes with Expert Instructors
						</Badge>
					</div>
					<div>
						<h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-[1.1]">
							{PARENT_FACING_HEADLINE}
						</h1>
					</div>
					<div>
						<p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-pretty leading-relaxed">
							{PARENT_FACING_SUPPORTING_COPY}
						</p>
					</div>
					<div>
						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
							{/* Brightbyte pointing toward the CTA button */}
							<motion.div
								animate={
									shouldReduceMotion
										? undefined
										: {
												x: [0, 8, 12, 8, 0],
											}
								}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="relative"
							>
								<Image
									src="/brightbyte/pointing.png"
									alt="Brightbyte pointing to the free first class button"
									width={72}
									height={72}
									className="object-contain drop-shadow-lg"
								/>
							</motion.div>
							<Link href="/inquiry">
								<Button
									size="lg"
									className="rounded-full bg-[#1565a8] px-8 py-6 text-lg text-white shadow-lg shadow-primary/30 transition-all hover:bg-[#0f538d] hover:shadow-xl hover:shadow-primary/40"
								>
									<Sparkles className="mr-2 h-5 w-5" aria-hidden="true" />
									{FREE_FIRST_CLASS_CTA}
								</Button>
							</Link>
							<span className="text-sm text-muted-foreground">
								No commitment required
							</span>
						</div>
					</div>
					<div>
						<div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start text-sm text-muted-foreground relative">
							<div className="flex items-center gap-2">
								<CheckCircle
									className="h-5 w-5 text-green-600"
									aria-hidden="true"
								/>
								<span>Your first class is free—try before you commit</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle
									className="h-5 w-5 text-primary"
									aria-hidden="true"
								/>
								<span>Ages 9-10 (Mon) & 11-13 (Wed)</span>
							</div>
						</div>
					</div>
				</div>

				{/* Live-class mockup card */}
				<SlideInRight
					delay={0.2}
					className="relative w-full flex items-center justify-center py-8 px-6 sm:px-10"
				>
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent/20 blur-3xl rounded-full -z-10 mix-blend-screen motion-safe:animate-pulse" />
					<LiveClassMockup />
				</SlideInRight>
			</div>
		</section>
	);
};

export default Hero;
