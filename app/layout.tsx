import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
	title: "Kids Learn AI — Python Foundations for Future Innovators",
	description:
		"Kids Learn AI helps kids ages 8-16 master Python fundamentals and explore beginner-friendly AI concepts through hands-on projects and supportive instructors.",
	generator: "Kids Learn AI",
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
		<html lang="en" suppressHydrationWarning>
			<body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange={false}
				>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
