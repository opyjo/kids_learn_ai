"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		Sentry.captureException(error);
	}, [error]);

	return (
		<html lang="en">
			<body
				style={{
					display: "flex",
					minHeight: "100vh",
					alignItems: "center",
					justifyContent: "center",
					fontFamily: "system-ui, sans-serif",
					textAlign: "center",
					padding: "1rem",
				}}
			>
				<div>
					<h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
						Oops! Something went sideways
					</h1>
					<p style={{ color: "#666", marginBottom: "1.5rem" }}>
						Even the best programs hit a bug sometimes.
					</p>
					<button
						type="button"
						onClick={reset}
						style={{
							padding: "0.5rem 1.25rem",
							borderRadius: "0.5rem",
							border: "1px solid #ccc",
							background: "#7c3aed",
							color: "#fff",
							cursor: "pointer",
							fontSize: "1rem",
						}}
					>
						Try again
					</button>
				</div>
			</body>
		</html>
	);
}
