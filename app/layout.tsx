import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL ?? "https://kidslearnai.ca",
	),
	title: "Kids Learn AI — Python Foundations for Future Innovators",
	description:
		"Kids Learn AI helps kids ages 8-16 master Python fundamentals and explore beginner-friendly AI concepts through hands-on projects and supportive instructors.",
	generator: "Kids Learn AI",
	openGraph: {
		siteName: "Kids Learn AI",
		type: "website",
		images: [{ url: "/og.png", width: 1731, height: 909 }],
	},
	icons: {
		icon: "/Logo.png",
		shortcut: "/Logo.png",
		apple: "/Logo.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${GeistSans.variable} ${GeistMono.variable}`}
			suppressHydrationWarning
		>
			<body className="font-sans">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<Toaster />
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
}
