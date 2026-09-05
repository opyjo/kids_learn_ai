"use client";

import { Sparkles, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FadeIn, ScaleIn } from "@/components/ui/motion";
import { FALL_2026_OFFER } from "@/lib/marketing/cohort-offer";
import {
	ENROLL_NOW_CTA,
	FREE_FIRST_CLASS_CTA,
} from "@/lib/marketing/positioning";

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
									<User
										className="h-20 w-20 text-white/50 mx-auto mb-4"
										aria-hidden="true"
									/>
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
								<div className="mb-6 animate-float">
									<Image
										src="/brightbyte/celebrating.png"
										alt="Brightbyte celebrating"
										width={80}
										height={80}
										className="object-contain drop-shadow-lg"
									/>
								</div>
							</FadeIn>
							<FadeIn delay={0.1}>
								<h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground mb-6 text-balance">
									Try a Live Class Free
								</h2>
							</FadeIn>
							<FadeIn delay={0.2}>
								<p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
									Your child can try a one-hour live Python class before joining
									the new {FALL_2026_OFFER.ageRange.toLowerCase()} beginner
									cohort. Weekly classes begin {FALL_2026_OFFER.cohortStartDate}
									, {FALL_2026_OFFER.classTime}, with no more than{" "}
									{FALL_2026_OFFER.maximumStudents} students.
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
											<Sparkles className="mr-2 h-5 w-5" aria-hidden="true" />
											{FREE_FIRST_CLASS_CTA}
										</Button>
									</Link>
									<Button
										asChild
										size="lg"
										variant="outline"
										className="text-lg px-8 py-6 rounded-full border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground w-full sm:w-auto"
									>
										<Link href="/pricing#payment-instructions">
											{ENROLL_NOW_CTA}
										</Link>
									</Button>
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
