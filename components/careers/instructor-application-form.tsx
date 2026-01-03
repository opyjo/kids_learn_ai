"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, FileText, Loader2, Send, Upload, X } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
	"application/pdf",
	"application/msword",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const applicationFormSchema = z.object({
	fullName: z
		.string()
		.trim()
		.min(1, "Full name is required")
		.min(2, "Name must be at least 2 characters")
		.max(100, "Name must not exceed 100 characters"),
	email: z
		.string()
		.trim()
		.min(1, "Email is required")
		.email("Please enter a valid email address"),
	university: z
		.string()
		.trim()
		.min(1, "University is required")
		.max(200, "University name must not exceed 200 characters"),
	program: z
		.string()
		.trim()
		.min(1, "Program/Major is required")
		.max(200, "Program name must not exceed 200 characters"),
	yearOfStudy: z.enum(["1", "2", "3", "4", "5+", "graduate"], {
		required_error: "Please select your year of study",
	}),
	pythonExperience: z.enum(["beginner", "intermediate", "advanced", "expert"], {
		required_error: "Please select your Python experience level",
	}),
	teachingExperience: z.string().trim().max(500).optional(),
	whyInterested: z
		.string()
		.trim()
		.min(1, "Please tell us why you're interested")
		.min(20, "Please provide a bit more detail (at least 20 characters)")
		.max(1000, "Response must not exceed 1000 characters"),
	availableMonday: z.boolean().default(false),
	availableWednesday: z.boolean().default(false),
	linkedinUrl: z
		.string()
		.trim()
		.url("Please enter a valid URL")
		.optional()
		.or(z.literal("")),
	resume: z.object({
		name: z.string(),
		type: z.string(),
		content: z.string(),
	}),
});

type ApplicationFormData = z.infer<typeof applicationFormSchema>;

export const InstructorApplicationForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [resumeFile, setResumeFile] = useState<File | null>(null);
	const [resumeError, setResumeError] = useState<string | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const form = useForm<ApplicationFormData>({
		resolver: zodResolver(applicationFormSchema),
		mode: "onSubmit",
		reValidateMode: "onChange",
		defaultValues: {
			fullName: "",
			email: "",
			university: "",
			program: "",
			teachingExperience: "",
			whyInterested: "",
			availableMonday: false,
			availableWednesday: false,
			linkedinUrl: "",
			resume: undefined,
		},
	});

	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		setResumeError(null);

		if (!file) {
			setResumeFile(null);
			form.setValue("resume", undefined);
			return;
		}

		// Validate file type
		if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
			setResumeError(
				"Please upload a PDF or Word document (.pdf, .doc, .docx)",
			);
			setResumeFile(null);
			form.setValue("resume", undefined);
			if (fileInputRef.current) {
				fileInputRef.current.value = "";
			}
			return;
		}

		// Validate file size
		if (file.size > MAX_FILE_SIZE) {
			setResumeError("File size must be less than 5MB");
			setResumeFile(null);
			form.setValue("resume", undefined);
			if (fileInputRef.current) {
				fileInputRef.current.value = "";
			}
			return;
		}

		setResumeFile(file);

		// Convert file to base64
		const reader = new FileReader();
		reader.onload = () => {
			const base64Content = (reader.result as string).split(",")[1];
			form.setValue("resume", {
				name: file.name,
				type: file.type,
				content: base64Content,
			});
		};
		reader.onerror = () => {
			setResumeError("Failed to read file. Please try again.");
			setResumeFile(null);
			form.setValue("resume", undefined);
		};
		reader.readAsDataURL(file);
	};

	const handleRemoveResume = () => {
		setResumeFile(null);
		setResumeError(null);
		form.setValue("resume", undefined);
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	};

	const onSubmit = async (data: ApplicationFormData) => {
		if (!data.availableMonday && !data.availableWednesday) {
			toast.error("Please select at least one day you're available to teach");
			return;
		}

		if (!data.resume) {
			setResumeError("Please upload your resume");
			toast.error("Please upload your resume");
			return;
		}

		setIsSubmitting(true);
		setIsSuccess(false);

		try {
			const response = await fetch("/api/careers/apply", {
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
					result.details.forEach(
						(detail: { field: string; message: string }) => {
							form.setError(detail.field as keyof ApplicationFormData, {
								message: detail.message,
							});
							toast.error(`${detail.field}: ${detail.message}`);
						},
					);
				} else {
					toast.error(
						result.error || "Failed to submit application. Please try again.",
					);
				}
				return;
			}

			setIsSuccess(true);
			toast.success("Application submitted! We'll be in touch soon.");
			form.reset();
			setResumeFile(null);
			if (fileInputRef.current) {
				fileInputRef.current.value = "";
			}

			setTimeout(() => {
				setIsSuccess(false);
			}, 5000);
		} catch (error) {
			console.error("Application form error:", error);
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
				{/* Full Name */}
				<FormField
					control={form.control}
					name="fullName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Full Name <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Input
									placeholder="Your full name"
									disabled={isSubmitting}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Email */}
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Email <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Input
									type="email"
									placeholder="your@email.com"
									disabled={isSubmitting}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* University */}
				<FormField
					control={form.control}
					name="university"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								University/College <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Input
									placeholder="e.g., University of Toronto"
									disabled={isSubmitting}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Program/Major */}
				<FormField
					control={form.control}
					name="program"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Program / Major <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Input
									placeholder="e.g., Computer Science"
									disabled={isSubmitting}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Year of Study */}
				<FormField
					control={form.control}
					name="yearOfStudy"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Year of Study <span className="text-red-500">*</span>
							</FormLabel>
							<Select
								onValueChange={field.onChange}
								defaultValue={field.value}
								disabled={isSubmitting}
							>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select year" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="1">1st Year</SelectItem>
									<SelectItem value="2">2nd Year</SelectItem>
									<SelectItem value="3">3rd Year</SelectItem>
									<SelectItem value="4">4th Year</SelectItem>
									<SelectItem value="5+">5+ Year</SelectItem>
									<SelectItem value="graduate">Graduate Student</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Python Experience */}
				<FormField
					control={form.control}
					name="pythonExperience"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Python Experience <span className="text-red-500">*</span>
							</FormLabel>
							<Select
								onValueChange={field.onChange}
								defaultValue={field.value}
								disabled={isSubmitting}
							>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select experience level" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="beginner">Beginner (learning)</SelectItem>
									<SelectItem value="intermediate">
										Intermediate (coursework)
									</SelectItem>
									<SelectItem value="advanced">
										Advanced (projects/work)
									</SelectItem>
									<SelectItem value="expert">Expert (professional)</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Availability */}
				<div className="space-y-3">
					<div className="text-sm font-medium">
						Availability <span className="text-red-500">*</span>
					</div>
					<div className="space-y-2">
						<FormField
							control={form.control}
							name="availableMonday"
							render={({ field }) => (
								<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
									<FormControl>
										<Checkbox
											checked={field.value}
											onCheckedChange={field.onChange}
											disabled={isSubmitting}
										/>
									</FormControl>
									<div className="space-y-1 leading-none">
										<FormLabel>Mondays (Ages 9-10 class)</FormLabel>
									</div>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="availableWednesday"
							render={({ field }) => (
								<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
									<FormControl>
										<Checkbox
											checked={field.value}
											onCheckedChange={field.onChange}
											disabled={isSubmitting}
										/>
									</FormControl>
									<div className="space-y-1 leading-none">
										<FormLabel>Wednesdays (Ages 11-13 class)</FormLabel>
									</div>
								</FormItem>
							)}
						/>
					</div>
					<p className="text-xs text-muted-foreground">
						Select at least one day you're available
					</p>
				</div>

				{/* Teaching Experience */}
				<FormField
					control={form.control}
					name="teachingExperience"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Teaching/Tutoring Experience{" "}
								<span className="text-muted-foreground">(optional)</span>
							</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Any previous experience teaching, tutoring, or working with kids..."
									rows={2}
									maxLength={500}
									disabled={isSubmitting}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Why Interested */}
				<FormField
					control={form.control}
					name="whyInterested"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Why do you want to teach kids to code?{" "}
								<span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Tell us what motivates you to help kids learn programming..."
									rows={3}
									maxLength={1000}
									disabled={isSubmitting}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* LinkedIn URL */}
				<FormField
					control={form.control}
					name="linkedinUrl"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								LinkedIn Profile{" "}
								<span className="text-muted-foreground">(optional)</span>
							</FormLabel>
							<FormControl>
								<Input
									type="url"
									placeholder="https://linkedin.com/in/yourprofile"
									disabled={isSubmitting}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Resume Upload */}
				<div className="space-y-2">
					<FormLabel>
						Resume / CV <span className="text-red-500">*</span>
					</FormLabel>
					<div className="relative">
						{!resumeFile ? (
							<div
								className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors"
								tabIndex={0}
								role="button"
								aria-label="Upload resume"
								onClick={() => fileInputRef.current?.click()}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										e.preventDefault();
										fileInputRef.current?.click();
									}
								}}
							>
								<label
									htmlFor="resume-upload"
									className="flex flex-col items-center justify-center pt-5 pb-6 cursor-pointer"
								>
									<Upload className="w-8 h-8 mb-2 text-muted-foreground" />
									<p className="mb-1 text-sm text-muted-foreground">
										<span className="font-semibold text-foreground">
											Click to upload
										</span>{" "}
										or drag and drop
									</p>
									<p className="text-xs text-muted-foreground">
										PDF, DOC, DOCX (max 5MB)
									</p>
								</label>
								<input
									ref={fileInputRef}
									id="resume-upload"
									type="file"
									className="hidden"
									accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
									onChange={handleFileChange}
									disabled={isSubmitting}
									aria-describedby="resume-description"
								/>
							</div>
						) : (
							<div className="flex items-center justify-between p-4 border border-border rounded-lg bg-muted/30">
								<div className="flex items-center gap-3">
									<div className="p-2 bg-primary/10 rounded-lg">
										<FileText className="w-5 h-5 text-primary" />
									</div>
									<div>
										<p className="text-sm font-medium text-foreground truncate max-w-[200px] sm:max-w-[300px]">
											{resumeFile.name}
										</p>
										<p className="text-xs text-muted-foreground">
											{(resumeFile.size / 1024 / 1024).toFixed(2)} MB
										</p>
									</div>
								</div>
								<Button
									type="button"
									variant="ghost"
									size="icon"
									onClick={handleRemoveResume}
									disabled={isSubmitting}
									aria-label="Remove resume"
									className="text-muted-foreground hover:text-destructive"
								>
									<X className="w-4 h-4" />
								</Button>
							</div>
						)}
					</div>
					{resumeError && (
						<p className="text-sm font-medium text-destructive">
							{resumeError}
						</p>
					)}
					<FormDescription id="resume-description">
						PDF, DOC, or DOCX format required (max 5MB)
					</FormDescription>
				</div>

				{/* Submit Button */}
				<Button
					type="submit"
					disabled={isSubmitting || isSuccess}
					className="w-full bg-linear-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
					size="lg"
				>
					{isSubmitting ? (
						<>
							<Loader2 className="mr-2 h-5 w-5 animate-spin" />
							Submitting...
						</>
					) : isSuccess ? (
						<>
							<CheckCircle2 className="mr-2 h-5 w-5" />
							Application Sent!
						</>
					) : (
						<>
							<Send className="mr-2 h-5 w-5" />
							Submit Application
						</>
					)}
				</Button>

				{/* Success Message */}
				{isSuccess && (
					<div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-lg p-4 text-sm">
						<p className="font-medium">Application received!</p>
						<p className="mt-1">
							Thank you for your interest in joining our team. We'll review your
							application and get back to you within a few days.
						</p>
					</div>
				)}
			</form>
		</Form>
	);
};
