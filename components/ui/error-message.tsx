"use client";

import { AlertCircle, RefreshCw, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

interface ErrorMessageProps {
	title?: string;
	message: string;
	onRetry?: () => void;
	onDismiss?: () => void;
	className?: string;
	variant?: "default" | "destructive" | "warning";
}

export function ErrorMessage({
	title = "Error",
	message,
	onRetry,
	onDismiss,
	className,
	variant = "destructive",
}: ErrorMessageProps) {
	return (
		<Alert
			variant={variant}
			className={cn("relative", className)}
			role="alert"
			aria-live="assertive"
		>
			<AlertCircle className="h-4 w-4" />
			<AlertTitle>{title}</AlertTitle>
			<AlertDescription className="pr-8">{message}</AlertDescription>
			<div className="flex gap-2 mt-4">
				{onRetry && (
					<Button
						variant="outline"
						size="sm"
						onClick={onRetry}
						className="min-h-[36px]"
						aria-label="Retry operation"
					>
						<RefreshCw className="mr-2 h-3 w-3" />
						Retry
					</Button>
				)}
			</div>
			{onDismiss && (
				<Button
					variant="ghost"
					size="sm"
					onClick={onDismiss}
					className="absolute top-4 right-4 h-6 w-6 p-0"
					aria-label="Dismiss error"
				>
					<X className="h-4 w-4" />
				</Button>
			)}
		</Alert>
	);
}
