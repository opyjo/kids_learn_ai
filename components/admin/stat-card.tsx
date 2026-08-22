"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function StatCard({
	label,
	value,
	valueClassName,
	active,
	onClick,
}: {
	label: string;
	value: number;
	valueClassName?: string;
	active: boolean;
	onClick: () => void;
}) {
	return (
		<button type="button" onClick={onClick} className="text-left">
			<Card
				className={cn(
					"border shadow-sm bg-white transition-colors dark:bg-gray-900",
					active
						? "border-blue-500 ring-1 ring-blue-500"
						: "border-transparent hover:border-gray-200 dark:hover:border-gray-700",
				)}
			>
				<CardContent className="px-3 py-1">
					<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
						{label}
					</p>
					<p
						className={cn(
							"mt-1 text-2xl font-semibold text-gray-900 dark:text-white",
							valueClassName,
						)}
					>
						{value}
					</p>
				</CardContent>
			</Card>
		</button>
	);
}
