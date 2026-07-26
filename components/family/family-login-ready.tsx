import { CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function FamilyLoginReady({ username }: { username: string }) {
	return (
		<Alert className="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/30">
			<CheckCircle2
				className="h-4 w-4 text-green-600 dark:text-green-400"
				aria-hidden="true"
			/>
			<AlertTitle className="text-green-900 dark:text-green-100">
				You&apos;re ready
			</AlertTitle>
			<AlertDescription className="space-y-2 text-green-900/80 dark:text-green-100/80">
				<p>
					<strong>Parent sign-in:</strong> use your email and parent password.
				</p>
				<p>
					<strong>Child sign-in:</strong> use username{" "}
					<code className="rounded bg-white/70 px-1.5 py-0.5 font-mono font-semibold text-green-950 dark:bg-black/20 dark:text-green-50">
						{username}
					</code>{" "}
					and the child password you chose.
				</p>
				<p>
					For privacy, passwords are never shown here. Save both sets of login
					details now in a secure password manager or another safe place.
				</p>
			</AlertDescription>
		</Alert>
	);
}
