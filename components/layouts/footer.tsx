import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerGroups = [
	{
		title: "Learn",
		links: [
			["Programs", "/lessons"],
			["AI labs", "/labs"],
			["Code playground", "/playground"],
			["Games", "/games"],
		],
	},
	{
		title: "Families",
		links: [
			["Pricing", "/pricing"],
			["Book a free trial", "/inquiry"],
			["Common questions", "/faq"],
			["Contact", "/contact"],
		],
	},
	{
		title: "Company",
		links: [
			["About", "/about"],
			["Articles", "/blog"],
			["Become an instructor", "/careers"],
			["Privacy", "/privacy"],
		],
	},
];

export const Footer = () => (
	<footer className="border-t border-border bg-slate-950 text-slate-200">
		<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
			<div className="grid gap-10 lg:grid-cols-[1.25fr_2fr]">
				<div className="max-w-sm">
					<Link href="/" className="flex items-center gap-2.5">
						<Image
							src="/Logo.png"
							alt=""
							width={38}
							height={38}
							className="size-9 rounded-lg"
						/>
						<span className="font-semibold text-white">Kids Learn AI</span>
					</Link>
					<p className="mt-4 text-sm leading-6 text-slate-400">
						Live Python and AI classes that help young people become capable,
						thoughtful creators.
					</p>
					<Link
						href="/inquiry"
						className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200"
					>
						Book a free trial <ArrowRight className="size-4" />
					</Link>
				</div>
				<div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
					{footerGroups.map((group) => (
						<div key={group.title}>
							<h2 className="text-sm font-semibold text-white">
								{group.title}
							</h2>
							<ul className="mt-4 space-y-3">
								{group.links.map(([label, href]) => (
									<li key={href}>
										<Link
											href={href}
											className="text-sm text-slate-400 transition-colors hover:text-white"
										>
											{label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
				<p>© {new Date().getFullYear()} Kids Learn AI. All rights reserved.</p>
				<div className="flex gap-5">
					<Link href="/terms" className="hover:text-slate-300">
						Terms
					</Link>
					<Link href="/privacy" className="hover:text-slate-300">
						Privacy
					</Link>
				</div>
			</div>
		</div>
	</footer>
);
