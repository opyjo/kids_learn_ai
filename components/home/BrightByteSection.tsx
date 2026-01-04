"use client";

import { MessageSquare, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	FadeIn,
	SlideInRight,
	StaggerContainer,
	StaggerItem,
} from "@/components/ui/motion";

const BrightByteSection = () => {
	const [imageError, setImageError] = useState(false);

	return (
		<section className="container mx-auto px-4 py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30">
			<div className="max-w-7xl mx-auto">
				{/* Header with BrightByte Image */}
				<div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
					<div className="text-center lg:text-left">
						<FadeIn>
							<Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
								<Sparkles className="w-4 h-4 inline mr-2" />
								Meet Your AI Coding Buddy
							</Badge>
						</FadeIn>
						<FadeIn delay={0.1}>
							<h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
								Ask BrightByte Anything About Python! 🐍
							</h2>
						</FadeIn>
						<FadeIn delay={0.2}>
							<p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
								Stuck on a coding challenge? Need help understanding a concept?
								BrightByte is your friendly AI tutor, ready to help 24/7. Get
								personalized guidance, hints, and explanations—all designed to
								help you learn, not just get answers!
							</p>
						</FadeIn>
						<FadeIn delay={0.3}>
							<Link href="/tutor">
								<Button
									size="lg"
									className="text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
								>
									<MessageSquare className="mr-2 h-5 w-5" />
									Start Chatting with BrightByte
								</Button>
							</Link>
						</FadeIn>
					</div>

					{/* BrightByte Character Image */}
					<SlideInRight className="relative">
						<div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square max-w-md mx-auto">
							{!imageError ? (
								<div className="relative w-full h-full bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 flex items-center justify-center">
									<Image
										src="/brightbyte/celebrating.png"
										alt="BrightByte - Your AI Python tutor"
										width={300}
										height={300}
										className="object-contain drop-shadow-xl animate-brightbyte-float"
										priority
										onError={() => setImageError(true)}
									/>
								</div>
							) : (
								<div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-secondary flex items-center justify-center">
									<div className="text-center p-8">
										<Sparkles className="h-16 w-16 text-primary/50 mx-auto mb-4" />
										<p className="text-muted-foreground">BrightByte AI Tutor</p>
									</div>
								</div>
							)}
							{/* Decorative overlay gradient */}
							<div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
						</div>
						{/* Floating accent */}
						<div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
						<div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
					</SlideInRight>
				</div>

				{/* Feature Cards */}
				<StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					<StaggerItem>
						<Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group h-full cursor-pointer">
							<CardHeader className="text-center pb-4">
								<div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
									<MessageSquare className="h-8 w-8 text-white" />
								</div>
								<CardTitle className="text-2xl">24/7 Help Available</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<CardDescription className="text-base leading-relaxed">
									Get help whenever you need it! BrightByte is always ready to
									answer your Python questions, day or night. No waiting for
									office hours or class time.
								</CardDescription>
							</CardContent>
						</Card>
					</StaggerItem>

					<StaggerItem>
						<Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group h-full cursor-pointer">
							<CardHeader className="text-center pb-4">
								<div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
									<Sparkles className="h-8 w-8 text-white" />
								</div>
								<CardTitle className="text-2xl">Learn, Don't Cheat</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<CardDescription className="text-base leading-relaxed">
									BrightByte guides you to learn, not just give answers. Get
									hints, explanations, and step-by-step guidance that helps you
									build real coding skills.
								</CardDescription>
							</CardContent>
						</Card>
					</StaggerItem>

					<StaggerItem>
						<Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group h-full cursor-pointer">
							<CardHeader className="text-center pb-4">
								<div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
									<span className="text-4xl">🐍</span>
								</div>
								<CardTitle className="text-2xl">Python-Focused</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<CardDescription className="text-base leading-relaxed">
									Focused on Python programming only. BrightByte knows
									everything about variables, loops, functions, and all the
									concepts you're learning in class.
								</CardDescription>
							</CardContent>
						</Card>
					</StaggerItem>
				</StaggerContainer>
			</div>
		</section>
	);
};

export default BrightByteSection;
