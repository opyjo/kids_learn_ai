"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Loader2, Send, CheckCircle2 } from "lucide-react";

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
  availableTuesday: z.boolean().default(false),
  availableThursday: z.boolean().default(false),
  linkedinUrl: z
    .string()
    .trim()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
});

type ApplicationFormData = z.infer<typeof applicationFormSchema>;

export const InstructorApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
      availableTuesday: false,
      availableThursday: false,
      linkedinUrl: "",
    },
  });

  const onSubmit = async (data: ApplicationFormData) => {
    if (!data.availableTuesday && !data.availableThursday) {
      toast.error("Please select at least one day you're available to teach");
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
            }
          );
        } else {
          toast.error(
            result.error || "Failed to submit application. Please try again."
          );
        }
        return;
      }

      setIsSuccess(true);
      toast.success("Application submitted! We'll be in touch soon.");
      form.reset();

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
              name="availableTuesday"
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
                    <FormLabel>Tuesdays (Ages 9-10 class)</FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="availableThursday"
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
                    <FormLabel>Thursdays (Ages 11-13 class)</FormLabel>
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
