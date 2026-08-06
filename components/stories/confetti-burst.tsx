"use client";

import { useMemo } from "react";

const COLORS = [
	"#6366f1",
	"#f59e0b",
	"#10b981",
	"#f43f5e",
	"#facc15",
	"#8b5cf6",
];

const PIECE_COUNT = 60;

/** A one-shot, dependency-free confetti rain covering the viewport. */
export function ConfettiBurst() {
	const pieces = useMemo(
		() =>
			Array.from({ length: PIECE_COUNT }, (_, index) => ({
				id: index,
				left: Math.random() * 100,
				delay: Math.random() * 0.6,
				duration: 2.2 + Math.random() * 1.8,
				size: 7 + Math.random() * 7,
				color: COLORS[index % COLORS.length],
				round: index % 3 === 0,
			})),
		[],
	);

	return (
		<div
			aria-hidden="true"
			className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
		>
			{pieces.map((piece) => (
				<span
					key={piece.id}
					className={`story-confetti-piece absolute top-0 ${piece.round ? "rounded-full" : "rounded-sm"}`}
					style={{
						left: `${piece.left}%`,
						width: piece.size,
						height: piece.size * (piece.round ? 1 : 0.55),
						backgroundColor: piece.color,
						animationDelay: `${piece.delay}s`,
						animationDuration: `${piece.duration}s`,
					}}
				/>
			))}
		</div>
	);
}
