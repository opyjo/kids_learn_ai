"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";
import { FriendlyError } from "@/components/feedback/friendly-error";

export default function ErrorPage({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		Sentry.captureException(error);
	}, [error]);

	return <FriendlyError onRetry={reset} />;
}
