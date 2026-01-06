import { LockKeyhole, Shield } from "lucide-react";
import Image from "next/image";
import { ResetPasswordHandler } from "@/components/auth/reset-password-handler";
import { AuthLayout } from "@/components/layouts/auth-layout";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function ResetPasswordPage() {
	return (
		<AuthLayout>
			<div className="flex w-full max-w-5xl items-center gap-12 px-4">
				{/* Left side - Illustration (hidden on mobile) */}
				<div className="hidden flex-1 lg:block">
					<div className="relative">
						{/* Decorative background elements */}
						<div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-green-200/50 blur-3xl dark:bg-green-900/30" />
						<div className="absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-blue-200/50 blur-3xl dark:bg-blue-900/30" />

						{/* Mascot illustration */}
						<div className="relative mb-8 flex justify-center">
							<Image
								src="/brightbyte/pointing.png"
								alt="BrightByte mascot guiding you"
								width={280}
								height={280}
								className="drop-shadow-2xl"
								priority
							/>
						</div>

						{/* Message */}
						<div className="relative space-y-4 text-center">
							<h2 className="text-3xl font-bold text-gray-900 dark:text-white">
								Almost there!
							</h2>
							<p className="text-lg text-gray-600 dark:text-gray-300">
								Create a new password to secure your account
							</p>

							{/* Tips */}
							<div className="mt-8 space-y-3 text-left">
								<div className="flex items-start gap-3 rounded-xl bg-white/60 p-4 dark:bg-gray-800/60">
									<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
										<LockKeyhole className="h-5 w-5 text-green-600" />
									</div>
									<div>
										<p className="font-medium text-gray-700 dark:text-gray-300">
											Password tips:
										</p>
										<ul className="mt-1 space-y-1 text-sm text-gray-600 dark:text-gray-400">
											<li>• At least 6 characters long</li>
											<li>• Mix letters and numbers</li>
											<li>• Something you can remember!</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Right side - Form */}
				<div className="w-full max-w-md flex-shrink-0">
					<Card className="border-0 shadow-xl dark:bg-gray-800/50 dark:backdrop-blur-sm">
						<CardHeader className="space-y-1 pb-4 text-center">
							<CardTitle className="text-2xl font-bold">
								Reset Password
							</CardTitle>
							<CardDescription className="text-base">
								Enter your new password below
							</CardDescription>
						</CardHeader>
						<CardContent className="pb-6">
							<ResetPasswordHandler />
						</CardContent>
					</Card>

					{/* Mobile trust indicator */}
					<div className="mt-6 lg:hidden">
						<div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
							<Shield className="h-3 w-3 text-green-500" />
							<span>Your password is encrypted and secure</span>
						</div>
					</div>
				</div>
			</div>
		</AuthLayout>
	);
}
