import { BookOpen, Home, LayoutDashboard } from "lucide-react";
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

export default function NotFound() {
	return (
		<div className="flex min-h-[70vh] items-center justify-center p-4">
			<Card className="w-full max-w-md text-center">
				<CardHeader className="items-center">
					<Image
						src="/Logo.png"
						alt=""
						width={56}
						height={56}
						className="mx-auto mb-2 h-14 w-14"
					/>
					<p className="text-5xl font-extrabold tracking-tight text-primary">
						404
					</p>
					<CardTitle className="text-2xl">
						This page wandered off to explore
					</CardTitle>
					<CardDescription className="text-base">
						We couldn't find the page you were looking for, but there's plenty
						more to discover.
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
					<Button asChild className="w-full sm:w-auto">
						<Link href="/">
							<Home className="mr-2 h-4 w-4" aria-hidden="true" />
							Home
						</Link>
					</Button>
					<Button asChild variant="outline" className="w-full sm:w-auto">
						<Link href="/lessons">
							<BookOpen className="mr-2 h-4 w-4" aria-hidden="true" />
							Lessons
						</Link>
					</Button>
					<Button asChild variant="outline" className="w-full sm:w-auto">
						<Link href="/dashboard">
							<LayoutDashboard className="mr-2 h-4 w-4" aria-hidden="true" />
							Dashboard
						</Link>
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}
