import { BookOpen, Code2, Gamepad2, Shield, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SignupForm } from "@/components/auth/signup-form";
import { AuthLayout } from "@/components/layouts/auth-layout";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function SignupPage() {
	return (
		<AuthLayout>
			<div className="flex w-full max-w-5xl items-center gap-12 px-4">
				{/* Left side - Illustration and benefits (hidden on mobile) */}
				<div className="hidden flex-1 lg:block">
					<div className="relative">
						{/* Decorative background elements */}
						<div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl dark:bg-orange-900/30" />
						<div className="absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-blue-200/50 blur-3xl dark:bg-blue-900/30" />

						{/* Mascot illustration */}
						<div className="relative mb-8 flex justify-center">
							<Image
								src="/brightbyte/raisehand.png"
								alt="BrightByte mascot excited to meet you"
								width={280}
								height={280}
								className="drop-shadow-2xl"
								priority
							/>
						</div>

						{/* Welcome message */}
						<div className="relative space-y-4 text-center">
							<h2 className="text-3xl font-bold text-gray-900 dark:text-white">
								Start your coding journey!
							</h2>
							<p className="text-lg text-gray-600 dark:text-gray-300">
								Learn Python with fun, interactive lessons
							</p>

							{/* Benefits list */}
							<div className="mt-8 grid grid-cols-2 gap-4">
								<div className="flex flex-col items-center gap-2 rounded-xl bg-white/60 p-4 dark:bg-gray-800/60">
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
										<Code2 className="h-5 w-5 text-blue-600" />
									</div>
									<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
										Learn Python
									</span>
								</div>
								<div className="flex flex-col items-center gap-2 rounded-xl bg-white/60 p-4 dark:bg-gray-800/60">
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/50">
										<Gamepad2 className="h-5 w-5 text-orange-600" />
									</div>
									<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
										Fun Games
									</span>
								</div>
								<div className="flex flex-col items-center gap-2 rounded-xl bg-white/60 p-4 dark:bg-gray-800/60">
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
										<BookOpen className="h-5 w-5 text-green-600" />
									</div>
									<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
										Easy Lessons
									</span>
								</div>
								<div className="flex flex-col items-center gap-2 rounded-xl bg-white/60 p-4 dark:bg-gray-800/60">
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/50">
										<Sparkles className="h-5 w-5 text-purple-600" />
									</div>
									<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
										AI Powered
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Right side - Signup form */}
				<div className="w-full max-w-md flex-shrink-0">
					<Card className="border-0 shadow-xl dark:bg-gray-800/50 dark:backdrop-blur-sm">
						<CardHeader className="space-y-1 pb-4 text-center">
							<CardTitle className="text-2xl font-bold">
								Start Your Coding Journey!
							</CardTitle>
							<CardDescription className="text-base">
								Create your account and begin learning Python today
							</CardDescription>
						</CardHeader>
						<CardContent className="pb-6">
							<SignupForm />
							<div className="mt-6 text-center">
								<p className="text-sm text-gray-600 dark:text-gray-400">
									Already have an account?{" "}
									<Link
										href="/login"
										className="font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline"
									>
										Sign in here
									</Link>
								</p>
							</div>
						</CardContent>
					</Card>

					{/* Mobile trust indicators */}
					<div className="mt-6 space-y-2 lg:hidden">
						<div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
							<Shield className="h-3 w-3 text-green-500" />
							<span>Safe & secure for kids ages 9-13</span>
						</div>
					</div>
				</div>
			</div>
		</AuthLayout>
	);
}
