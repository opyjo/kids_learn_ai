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
  FormDescription,
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
import { toast } from "sonner";
import { Loader2, CheckCircle2, Sparkles } from "lucide-react";

const inquiryFormSchema = z.object({
  parentName: z
    .string()
    .trim()
    .min(1, "Parent name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters"),
  parentEmail: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  childName: z
    .string()
    .trim()
    .min(1, "Child's name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters"),
  ageGroup: z.enum(["9-10", "11-13"], {
    required_error: "Please select an age group",
  }),
  experience: z.enum(["none", "some", "comfortable"], {
    required_error: "Please select experience level",
  }),
  howHeard: z.string().trim().max(200).optional(),
  questions: z.string().trim().max(1000).optional(),
});

type InquiryFormData = z.infer<typeof inquiryFormSchema>;

export const CourseInquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<InquiryFormData>({
    resolver: zodResolver(inquiryFormSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      parentName: "",
      parentEmail: "",
      childName: "",
      howHeard: "",
      questions: "",
    },
  });

  const selectedAgeGroup = form.watch("ageGroup");

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const response = await fetch("/api/inquiry", {
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
              form.setError(detail.field as keyof InquiryFormData, {
                message: detail.message,
              });
              toast.error(`${detail.field}: ${detail.message}`);
            }
          );
        } else {
          toast.error(
            result.error || "Failed to submit inquiry. Please try again."
          );
        }
        return;
      }

      setIsSuccess(true);
      toast.success("Inquiry submitted! We'll contact you soon.");
      form.reset();

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Inquiry form error:", error);
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
        {/* Parent Name */}
        <FormField
          control={form.control}
          name="parentName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Your Name <span className="text-red-500">*</span>
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

        {/* Parent Email */}
        <FormField
          control={form.control}
          name="parentEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Your Email <span className="text-red-500">*</span>
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

        {/* Child Name */}
        <FormField
          control={form.control}
          name="childName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Child's Name <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your child's first name"
                  disabled={isSubmitting}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Age Group */}
        <FormField
          control={form.control}
          name="ageGroup"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Age Group <span className="text-red-500">*</span>
              </FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                disabled={isSubmitting}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select age group" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="9-10">
                    <span className="flex items-center gap-2">
                      <span>Ages 9-10</span>
                      <span className="text-muted-foreground text-xs">
                        (Tuesdays)
                      </span>
                    </span>
                  </SelectItem>
                  <SelectItem value="11-13">
                    <span className="flex items-center gap-2">
                      <span>Ages 11-13</span>
                      <span className="text-muted-foreground text-xs">
                        (Thursdays)
                      </span>
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
              {selectedAgeGroup && (
                <FormDescription>
                  {selectedAgeGroup === "9-10"
                    ? "📅 Classes are on Tuesdays"
                    : "📅 Classes are on Thursdays"}
                </FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Coding Experience */}
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Child's Coding Experience{" "}
                <span className="text-red-500">*</span>
              </FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                disabled={isSubmitting}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="none">No coding experience</SelectItem>
                  <SelectItem value="some">
                    Some experience (Scratch, etc.)
                  </SelectItem>
                  <SelectItem value="comfortable">
                    Comfortable with basics
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* How Did You Hear About Us */}
        <FormField
          control={form.control}
          name="howHeard"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                How did you hear about us?{" "}
                <span className="text-muted-foreground">(optional)</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g., Google, friend, social media"
                  disabled={isSubmitting}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Questions */}
        <FormField
          control={form.control}
          name="questions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Questions or concerns?{" "}
                <span className="text-muted-foreground">(optional)</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any questions about the program, schedule, or anything else..."
                  rows={4}
                  maxLength={1000}
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
              Inquiry Sent!
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-5 w-5" />
              Book My Free Trial Class
            </>
          )}
        </Button>

        {/* Success Message */}
        {isSuccess && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-lg p-4 text-sm">
            <p className="font-medium">Thank you for your interest!</p>
            <p className="mt-1">
              We've received your inquiry and will contact you within 24 hours
              to schedule your child's free trial class.
            </p>
          </div>
        )}
      </form>
    </Form>
  );
};
