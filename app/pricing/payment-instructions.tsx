"use client";

import {
	CheckCircle2,
	Copy,
	DollarSign,
	FileText,
	Mail,
	Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const PAYMENT_EMAIL = "payment@kidslearnai.ca";

interface PaymentInstructionsProps {
	userEmail?: string;
}

interface PaymentStep {
	icon: typeof Mail;
	title: string;
	content: React.ReactNode;
}

async function copyToClipboard(text: string, successMessage: string) {
	try {
		await navigator.clipboard.writeText(text);
		toast.success(successMessage);
	} catch {
		toast.error("Couldn't copy — please copy it manually");
	}
}

export function PaymentInstructions({ userEmail }: PaymentInstructionsProps) {
	const suggestedMessage = `Child: ____ / Email: ${userEmail || "your email"}`;

	const steps: PaymentStep[] = [
		{
			icon: Mail,
			title: "Send an Interac e-Transfer to",
			content: (
				<div className="flex flex-wrap items-center gap-2">
					<p className="text-lg font-mono text-primary break-all">
						{PAYMENT_EMAIL}
					</p>
					<Button
						variant="outline"
						size="sm"
						className="h-7 px-2"
						onClick={() => copyToClipboard(PAYMENT_EMAIL, "Email copied!")}
						aria-label="Copy payment email address"
					>
						<Copy className="h-3.5 w-3.5 mr-1" aria-hidden="true" />
						Copy
					</Button>
				</div>
			),
		},
		{
			icon: DollarSign,
			title: "Amount (Founding Student Rate)",
			content: (
				<p className="text-lg font-semibold">
					<span className="line-through text-muted-foreground mr-2">
						$199.99
					</span>
					$159.99 CAD
				</p>
			),
		},
		{
			icon: FileText,
			title: "Add a message so we can match your payment",
			content: (
				<div className="space-y-2">
					<p className="text-sm text-muted-foreground">
						Include your child's name and your email address.
					</p>
					<div className="flex flex-wrap items-center gap-2">
						<code className="rounded bg-muted px-2 py-1 text-sm">
							{suggestedMessage}
						</code>
						<Button
							variant="outline"
							size="sm"
							className="h-7 px-2"
							onClick={() =>
								copyToClipboard(suggestedMessage, "Message copied!")
							}
							aria-label="Copy suggested e-Transfer message"
						>
							<Copy className="h-3.5 w-3.5 mr-1" aria-hidden="true" />
							Copy
						</Button>
					</div>
				</div>
			),
		},
		{
			icon: Sparkles,
			title: "We confirm and unlock your dashboard within 24-48 hours",
			content: (
				<ul className="space-y-1.5 text-sm text-muted-foreground">
					<li className="flex items-start gap-2">
						<CheckCircle2
							className="h-4 w-4 text-green-600 mt-0.5 shrink-0"
							aria-hidden="true"
						/>
						Payment verified (usually much faster) — we'll confirm by email
					</li>
					<li className="flex items-start gap-2">
						<CheckCircle2
							className="h-4 w-4 text-green-600 mt-0.5 shrink-0"
							aria-hidden="true"
						/>
						Full program access unlocked; your child joins their age group's
						weekly class
					</li>
					<li className="flex items-start gap-2">
						<CheckCircle2
							className="h-4 w-4 text-green-600 mt-0.5 shrink-0"
							aria-hidden="true"
						/>
						8-10 weeks of expert-led live instruction
					</li>
				</ul>
			),
		},
	];

	return (
		<div
			id="payment-instructions"
			className="max-w-3xl mx-auto scroll-mt-20 mb-16"
		>
			<div className="text-center mb-8">
				<Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
					Already Tried Your Free Class?
				</Badge>
				<h2 className="text-3xl font-bold mb-2">How to Pay</h2>
				<p className="text-muted-foreground">
					Continue your child's learning journey with the full program
				</p>
			</div>

			<Card className="border-2 border-primary/20">
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<DollarSign className="h-5 w-5 text-primary" aria-hidden="true" />
						Pay via e-Transfer
					</CardTitle>
					<CardDescription>
						Four simple steps — no account or credit card needed
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<ol className="space-y-5">
						{steps.map((step, index) => (
							<li key={step.title} className="flex items-start gap-4">
								<span
									className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold"
									aria-hidden="true"
								>
									{index + 1}
								</span>
								<div className="min-w-0 space-y-1 pt-1">
									<p className="text-sm font-semibold text-foreground flex items-center gap-2">
										<step.icon
											className="h-4 w-4 text-primary"
											aria-hidden="true"
										/>
										{step.title}
									</p>
									{step.content}
								</div>
							</li>
						))}
					</ol>

					<Alert>
						<CheckCircle2 className="h-4 w-4" aria-hidden="true" />
						<AlertDescription>
							<strong>Important:</strong> Without your child's name and your
							email in the e-Transfer message, we can't match your payment.
						</AlertDescription>
					</Alert>
				</CardContent>
			</Card>
		</div>
	);
}
