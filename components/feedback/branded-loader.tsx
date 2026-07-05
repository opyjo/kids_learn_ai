import { Loader2 } from "lucide-react";
import Image from "next/image";

interface BrandedLoaderProps {
	message?: string;
}

export function BrandedLoader({
	message = "Loading your adventure…",
}: BrandedLoaderProps) {
	return (
		<div
			className="flex min-h-[60vh] flex-col items-center justify-center gap-4"
			role="status"
			aria-live="polite"
		>
			<Image
				src="/Logo.png"
				alt=""
				width={64}
				height={64}
				className="h-16 w-16 animate-pulse"
				priority
			/>
			<div className="flex items-center gap-2 text-muted-foreground">
				<Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
				<span className="text-sm font-medium">{message}</span>
			</div>
		</div>
	);
}
