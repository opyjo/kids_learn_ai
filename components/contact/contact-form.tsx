"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { type ContactFormData, contactFormSchema } from "@/lib/schemas/contact";
import { cn } from "@/lib/utils";

export const ContactForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const form = useForm<ContactFormData>({
		resolver: zodResolver(contactFormSchema),
		mode: "onSubmit",
		reValidateMode: "onChange",
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true);
		setIsSuccess(false);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (!response.ok) {
				if (response.status === 429) {
					toast.error("Too many requests. Please try again later.");
				} else if (result.details) {
					// Handle validation errors
					result.details.forEach(
						(detail: { field: string; message: string }) => {
							form.setError(detail.field as keyof ContactFormData, {
								message: detail.message,
							});
							toast.error(`${detail.field}: ${detail.message}`);
						},
					);
				} else {
					toast.error(
						result.error || "Failed to send message. Please try again.",
					);
				}
				return;
			}

			// Success
			setIsSuccess(true);
			toast.success("Message sent successfully! We'll get back to you soon.");
			form.reset();

			// Reset success state after 5 seconds
			setTimeout(() => {
				setIsSuccess(false);
			}, 5000);
		} catch (error) {
			console.error("Contact form error:", error);
			toast.error("An unexpected error occurred. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				noValidate
				className="space-y-6"
			>
				{/* Name Field */}
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Your Name <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Input
									placeholder="John Doe"
									disabled={isSubmitting}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Email Field */}
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Email Address <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Input
									type="email"
									placeholder="john@example.com"
									disabled={isSubmitting}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Subject Field */}
				<FormField
					control={form.control}
					name="subject"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Subject <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Input
									placeholder="How can we help you?"
									disabled={isSubmitting}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Message Field */}
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => {
						const charCount = field.value?.length || 0;
						const maxLength = 1000;
						return (
							<FormItem>
								<FormLabel>
									Message <span className="text-red-500">*</span>
								</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Tell us more about your inquiry..."
										rows={6}
										maxLength={maxLength}
										disabled={isSubmitting}
										className="min-h-[120px] resize-y"
										aria-describedby="message-counter"
										{...field}
									/>
								</FormControl>
								<div className="flex items-center justify-between">
									<FormMessage />
									<span
										id="message-counter"
										className={cn(
											"text-xs text-muted-foreground",
											charCount > maxLength * 0.9 && "text-amber-600 dark:text-amber-400",
											charCount >= maxLength && "text-red-600 dark:text-red-400",
										)}
									>
										{charCount} / {maxLength}
									</span>
								</div>
							</FormItem>
						);
					}}
				/>

				{/* Submit Button */}
				<Button
					type="submit"
					disabled={isSubmitting || isSuccess}
					className="w-full min-h-[44px] bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
					size="lg"
					aria-label="Send contact message"
				>
					{isSubmitting ? (
						<>
							<Loader2 className="mr-2 h-5 w-5 animate-spin" />
							Sending...
						</>
					) : isSuccess ? (
						<>
							<CheckCircle2 className="mr-2 h-5 w-5" />
							Message Sent!
						</>
					) : (
						<>
							<Send className="mr-2 h-5 w-5" />
							Send Message
						</>
					)}
				</Button>

				{/* Success Message */}
				{isSuccess && (
					<div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 text-sm">
						<p className="font-medium">Thank you for reaching out!</p>
						<p className="mt-1">
							We've received your message and will get back to you as soon as
							possible.
						</p>
					</div>
				)}
			</form>
		</Form>
	);
};
