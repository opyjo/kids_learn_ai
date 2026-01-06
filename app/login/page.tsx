import { CheckCircle2, Shield, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LoginForm } from "@/components/auth/login-form";
import { AuthLayout } from "@/components/layouts/auth-layout";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

type LoginPageProps = {
	searchParams: Promise<{ reset?: string; error?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
	const params = await searchParams;
	const showResetSuccess = params.reset === "success";

	return (
		<AuthLayout>
			<div className="flex w-full max-w-5xl items-center gap-12 px-4">
				{/* Left side - Illustration and benefits (hidden on mobile) */}
				<div className="hidden flex-1 lg:block">
					<div className="relative">
						{/* Decorative background elements */}
						<div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl dark:bg-blue-900/30" />
						<div className="absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-orange-200/50 blur-3xl dark:bg-orange-900/30" />

						{/* Mascot illustration */}
						<div className="relative mb-8 flex justify-center">
							<Image
								src="/brightbyte/celebrating.png"
								alt="BrightByte mascot welcoming you"
								width={280}
								height={280}
								className="drop-shadow-2xl"
								priority
							/>
						</div>

						{/* Welcome message */}
						<div className="relative space-y-4 text-center">
							<h2 className="text-3xl font-bold text-gray-900 dark:text-white">
								Welcome back, coder!
							</h2>
							<p className="text-lg text-gray-600 dark:text-gray-300">
								Ready to continue your Python adventure?
							</p>

							{/* Trust indicators */}
							<div className="mt-8 space-y-3">
								<div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
									<Users className="h-4 w-4 text-blue-500" />
									<span>Join 100+ young coders learning Python</span>
								</div>
								<div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
									<Sparkles className="h-4 w-4 text-orange-500" />
									<span>Fun, interactive lessons for ages 9-13</span>
								</div>
								<div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
									<Shield className="h-4 w-4 text-green-500" />
									<span>Safe, kid-friendly learning environment</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Right side - Login form */}
				<div className="w-full max-w-md flex-shrink-0">
					<Card className="border-0 shadow-xl dark:bg-gray-800/50 dark:backdrop-blur-sm">
						<CardHeader className="space-y-1 pb-4 text-center">
							<CardTitle className="text-2xl font-bold">
								Welcome Back!
							</CardTitle>
							<CardDescription className="text-base">
								Sign in to continue your Python learning journey
							</CardDescription>
						</CardHeader>
						<CardContent className="pb-6">
							{showResetSuccess && (
								<Alert className="mb-4 border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20">
									<CheckCircle2 className="h-4 w-4 text-green-600" />
									<AlertDescription className="text-green-700 dark:text-green-400">
										Password reset successful! You can now sign in with your new
										password.
									</AlertDescription>
								</Alert>
							)}
							<LoginForm />
							<div className="mt-6 text-center">
								<p className="text-sm text-gray-600 dark:text-gray-400">
									Don&apos;t have an account?{" "}
									<Link
										href="/signup"
										className="font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline"
									>
										Sign up here
									</Link>
								</p>
							</div>
						</CardContent>
					</Card>

					{/* Mobile trust indicators */}
					<div className="mt-6 space-y-2 lg:hidden">
						<div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
							<Shield className="h-3 w-3 text-green-500" />
							<span>Safe & secure learning environment</span>
						</div>
					</div>
				</div>
			</div>
		</AuthLayout>
	);
}
