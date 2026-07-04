"use client";

import { Home, RotateCcw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface FriendlyErrorProps {
	title?: string;
	description?: string;
	onRetry?: () => void;
}

export function FriendlyError({
	title = "Oops! Something went sideways",
	description = "Don't worry — even the best programs hit a bug sometimes. Let's try that again.",
	onRetry,
}: FriendlyErrorProps) {
	return (
		<div className="flex min-h-[60vh] items-center justify-center p-4">
			<Card className="w-full max-w-md text-center">
				<CardHeader className="items-center">
					<Image
						src="/Logo.png"
						alt=""
						width={56}
						height={56}
						className="mx-auto mb-2 h-14 w-14"
					/>
					<CardTitle className="text-2xl">{title}</CardTitle>
					<CardDescription className="text-base">{description}</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
					{onRetry && (
						<Button onClick={onRetry} className="w-full sm:w-auto">
							<RotateCcw className="mr-2 h-4 w-4" aria-hidden="true" />
							Try again
						</Button>
					)}
					<Button asChild variant="outline" className="w-full sm:w-auto">
						<Link href="/">
							<Home className="mr-2 h-4 w-4" aria-hidden="true" />
							Go home
						</Link>
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}
