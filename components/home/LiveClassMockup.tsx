"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

type Token = { char: string; className: string };

const SEGMENTS: { text: string; className: string }[] = [
	{ text: "name", className: "text-foreground" },
	{ text: " = ", className: "text-muted-foreground" },
	{ text: '"Ava"', className: "text-accent" },
	{ text: "\n", className: "" },
	{ text: "print", className: "text-primary" },
	{ text: "(", className: "text-muted-foreground" },
	{ text: "f", className: "text-primary" },
	{ text: '"Hi {name}! 👋"', className: "text-accent" },
	{ text: ")", className: "text-muted-foreground" },
];

const TOKENS: Token[] = SEGMENTS.flatMap((segment) =>
	[...segment.text].map((char) => ({ char, className: segment.className })),
);

const TYPE_SPEED_MS = 55;
const PAUSE_BEFORE_OUTPUT_MS = 500;
const HOLD_OUTPUT_MS = 3500;

type Run = { className: string; text: string };

// Group the revealed tokens back into per-line styled runs so syntax
// colors survive char-by-char typing.
const buildLines = (shown: number): Run[][] => {
	const lines: Run[][] = [[]];
	for (const token of TOKENS.slice(0, shown)) {
		if (token.char === "\n") {
			lines.push([]);
			continue;
		}
		const line = lines[lines.length - 1];
		const last = line[line.length - 1];
		if (last && last.className === token.className) {
			last.text += token.char;
		} else {
			line.push({ className: token.className, text: token.char });
		}
	}
	return lines;
};

const LiveClassMockup = () => {
	const shouldReduceMotion = useReducedMotion();
	const [count, setCount] = useState(0);
	const [phase, setPhase] = useState<"typing" | "output">("typing");

	useEffect(() => {
		if (shouldReduceMotion) return;

		let timeout: ReturnType<typeof setTimeout>;
		if (phase === "typing") {
			if (count < TOKENS.length) {
				timeout = setTimeout(() => setCount((c) => c + 1), TYPE_SPEED_MS);
			} else {
				timeout = setTimeout(() => setPhase("output"), PAUSE_BEFORE_OUTPUT_MS);
			}
		} else {
			timeout = setTimeout(() => {
				setCount(0);
				setPhase("typing");
			}, HOLD_OUTPUT_MS);
		}
		return () => clearTimeout(timeout);
	}, [phase, count, shouldReduceMotion]);

	const shown = shouldReduceMotion ? TOKENS.length : count;
	const showOutput = shouldReduceMotion || phase === "output";
	const lines = buildLines(shown);

	const float = (duration: number) =>
		shouldReduceMotion
			? undefined
			: {
					animate: { y: [0, -8, 0] },
					transition: {
						duration,
						repeat: Infinity,
						ease: "easeInOut" as const,
					},
				};

	return (
		<div
			role="img"
			aria-label="A live coding class in session: a student writes Python with a real teacher while other kids code along"
			className="relative w-full max-w-md"
		>
			<div aria-hidden="true">
				<div className="rounded-3xl border border-border bg-card shadow-2xl overflow-hidden">
					{/* Editor header */}
					<div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary/5 to-accent/5 border-b border-border">
						<div className="flex items-center gap-3">
							<div className="flex gap-2">
								<div className="w-3 h-3 rounded-full bg-red-400"></div>
								<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
								<div className="w-3 h-3 rounded-full bg-green-400"></div>
							</div>
							<span className="font-mono text-xs text-muted-foreground">
								lesson.py
							</span>
						</div>
						<span className="flex items-center gap-1.5 rounded-full bg-red-500/10 text-red-500 px-2.5 py-1 text-xs font-semibold">
							<span className="relative flex h-2 w-2">
								<span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 motion-safe:animate-ping" />
								<span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
							</span>
							LIVE
						</span>
					</div>

					{/* Code area */}
					<div className="p-5 sm:p-6">
						<div className="font-mono text-sm leading-7 min-h-[3.5rem]">
							{lines.map((line, lineIndex) => (
								<div key={`line-${lineIndex}`} className="flex">
									<span className="w-6 shrink-0 select-none text-muted-foreground/50">
										{lineIndex + 1}
									</span>
									<span className="whitespace-pre-wrap">
										{line.map((run, runIndex) => (
											<span
												key={`run-${lineIndex}-${runIndex}`}
												className={run.className}
											>
												{run.text}
											</span>
										))}
										{!shouldReduceMotion &&
											phase === "typing" &&
											lineIndex === lines.length - 1 && (
												<span className="inline-block w-[2px] h-4 bg-primary align-middle animate-pulse" />
											)}
									</span>
								</div>
							))}
						</div>

						{/* Output row */}
						<div className="mt-3 pt-3 border-t border-border/60 font-mono text-sm min-h-[2.5rem]">
							<AnimatePresence>
								{showOutput && (
									<motion.div
										initial={shouldReduceMotion ? false : { opacity: 0, y: 4 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0 }}
										className="flex items-center gap-2"
									>
										<span className="text-muted-foreground select-none">
											&gt;&gt;&gt;
										</span>
										<span className="text-foreground">Hi Ava! 👋</span>
										<CheckCircle className="h-4 w-4 text-green-600" />
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				</div>

				{/* Floating chip: instructor */}
				<motion.div
					{...float(4.5)}
					className="absolute -top-4 -left-2 sm:-left-6 flex items-center gap-2 rounded-full bg-card border border-border shadow-lg px-3 py-2 text-xs font-medium"
				>
					<span className="h-6 w-6 rounded-full bg-primary text-primary-foreground grid place-items-center text-[10px] font-bold">
						MS
					</span>
					Live with a real teacher
				</motion.div>

				{/* Floating chip: classmates */}
				<motion.div
					{...float(5.5)}
					className="absolute -bottom-4 -right-2 sm:-right-6 flex items-center gap-2 rounded-full bg-card border border-border shadow-lg px-3 py-2 text-xs font-medium"
				>
					<span className="flex -space-x-2">
						<span className="h-6 w-6 rounded-full ring-2 ring-card bg-primary text-primary-foreground grid place-items-center text-[10px] font-bold">
							A
						</span>
						<span className="h-6 w-6 rounded-full ring-2 ring-card bg-secondary text-secondary-foreground grid place-items-center text-[10px] font-bold">
							J
						</span>
						<span className="h-6 w-6 rounded-full ring-2 ring-card bg-accent text-accent-foreground grid place-items-center text-[10px] font-bold">
							M
						</span>
					</span>
					12 kids coding now
				</motion.div>
			</div>
		</div>
	);
};

export default LiveClassMockup;
