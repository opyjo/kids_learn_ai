"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";
import { Component, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface ErrorBoundaryProps {
	children: ReactNode;
	fallback?: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
	error: Error | null;
}

export class ErrorBoundary extends Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error("ErrorBoundary caught an error:", error, errorInfo);
		// You can log to an error reporting service here
	}

	handleReset = () => {
		this.setState({ hasError: false, error: null });
	};

	render() {
		if (this.state.hasError) {
			if (this.props.fallback) {
				return this.props.fallback;
			}

			return (
				<Card className="max-w-md mx-auto mt-8 border-destructive/50">
					<CardHeader>
						<div className="flex items-center gap-2">
							<AlertTriangle className="h-5 w-5 text-destructive" />
							<CardTitle>Something went wrong</CardTitle>
						</div>
						<CardDescription>
							We encountered an unexpected error. Please try again.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						{process.env.NODE_ENV === "development" && this.state.error && (
							<details className="text-sm">
								<summary className="cursor-pointer text-muted-foreground mb-2">
									Error details (development only)
								</summary>
								<pre className="bg-muted p-3 rounded text-xs overflow-auto">
									{this.state.error.toString()}
								</pre>
							</details>
						)}
						<div className="flex gap-3">
							<Button onClick={this.handleReset} className="flex-1 min-h-[44px]">
								<RefreshCw className="mr-2 h-4 w-4" />
								Try Again
							</Button>
							<Button
								variant="outline"
								onClick={() => window.location.reload()}
								className="flex-1 min-h-[44px]"
							>
								Reload Page
							</Button>
						</div>
					</CardContent>
				</Card>
			);
		}

		return this.props.children;
	}
}
