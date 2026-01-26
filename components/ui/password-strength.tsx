"use client";

import { Check, X } from "lucide-react";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface PasswordStrengthProps {
	password: string;
	className?: string;
}

export function PasswordStrength({ password, className }: PasswordStrengthProps) {
	const strength = useMemo(() => {
		if (!password) return { score: 0, label: "", checks: [] };

		const checks = [
			{ label: "At least 8 characters", test: password.length >= 8 },
			{ label: "Contains lowercase letter", test: /[a-z]/.test(password) },
			{ label: "Contains uppercase letter", test: /[A-Z]/.test(password) },
			{ label: "Contains number", test: /[0-9]/.test(password) },
			{ label: "Contains special character", test: /[^a-zA-Z0-9]/.test(password) },
		];

		const passed = checks.filter((check) => check.test).length;
		let label = "";
		if (passed <= 2) label = "Weak";
		else if (passed <= 3) label = "Fair";
		else if (passed <= 4) label = "Good";
		else label = "Strong";

		return { score: passed, label, checks };
	}, [password]);

	if (!password) return null;

	return (
		<div className={cn("space-y-2", className)}>
			<div className="flex items-center justify-between text-xs">
				<span className="text-muted-foreground">Password strength:</span>
				<span
					className={cn(
						"font-medium",
						strength.score <= 2 && "text-red-600 dark:text-red-400",
						strength.score === 3 && "text-yellow-600 dark:text-yellow-400",
						strength.score === 4 && "text-blue-600 dark:text-blue-400",
						strength.score >= 5 && "text-green-600 dark:text-green-400",
					)}
				>
					{strength.label}
				</span>
			</div>
			<div className="h-1.5 bg-muted rounded-full overflow-hidden">
				<div
					className={cn(
						"h-full transition-all duration-300",
						strength.score <= 2 && "bg-red-600",
						strength.score === 3 && "bg-yellow-600",
						strength.score === 4 && "bg-blue-600",
						strength.score >= 5 && "bg-green-600",
					)}
					style={{ width: `${(strength.score / 5) * 100}%` }}
					role="progressbar"
					aria-valuenow={strength.score}
					aria-valuemin={0}
					aria-valuemax={5}
					aria-label={`Password strength: ${strength.label}`}
				/>
			</div>
			<ul className="space-y-1 text-xs text-muted-foreground">
				{strength.checks.map((check, index) => (
					<li key={index} className="flex items-center gap-2">
						{check.test ? (
							<Check className="h-3 w-3 text-green-600 dark:text-green-400 shrink-0" aria-hidden="true" />
						) : (
							<X className="h-3 w-3 text-muted-foreground shrink-0" aria-hidden="true" />
						)}
						<span className={check.test ? "text-foreground" : ""}>{check.label}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
