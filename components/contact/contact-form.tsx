"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, Send, CheckCircle2 } from "lucide-react";

// Validation schema matching the API
const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  subject: z
    .string()
    .trim()
    .min(1, "Subject is required")
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must not exceed 200 characters"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
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
              toast.error(`${detail.field}: ${detail.message}`);
            }
          );
        } else {
          toast.error(
            result.error || "Failed to send message. Please try again."
          );
        }
        return;
      }

      // Success
      setIsSuccess(true);
      toast.success("Message sent successfully! We'll get back to you soon.");
      reset();

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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium">
          Your Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="John Doe"
          {...register("name", {
            setValueAs: (v) => (typeof v === "string" ? v.trim() : v),
          })}
          className={errors.name ? "border-red-500" : ""}
          disabled={isSubmitting}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby="name-error"
        />
        <p
          id="name-error"
          aria-live="polite"
          className={`text-sm ${
            errors.name ? "text-red-500" : "text-transparent"
          } min-h-[1.25rem]`}
        >
          {errors.name?.message ?? ""}
        </p>
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Email Address <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register("email", {
            setValueAs: (v) => (typeof v === "string" ? v.trim() : v),
          })}
          className={errors.email ? "border-red-500" : ""}
          disabled={isSubmitting}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby="email-error"
        />
        <p
          id="email-error"
          aria-live="polite"
          className={`text-sm ${
            errors.email ? "text-red-500" : "text-transparent"
          } min-h-[1.25rem]`}
        >
          {errors.email?.message ?? ""}
        </p>
      </div>

      {/* Subject Field */}
      <div className="space-y-2">
        <Label htmlFor="subject" className="text-sm font-medium">
          Subject <span className="text-red-500">*</span>
        </Label>
        <Input
          id="subject"
          type="text"
          placeholder="How can we help you?"
          {...register("subject", {
            setValueAs: (v) => (typeof v === "string" ? v.trim() : v),
          })}
          className={errors.subject ? "border-red-500" : ""}
          disabled={isSubmitting}
          aria-invalid={errors.subject ? "true" : "false"}
          aria-describedby="subject-error"
        />
        <p
          id="subject-error"
          aria-live="polite"
          className={`text-sm ${
            errors.subject ? "text-red-500" : "text-transparent"
          } min-h-[1.25rem]`}
        >
          {errors.subject?.message ?? ""}
        </p>
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">
          Message <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="Tell us more about your inquiry..."
          rows={6}
          maxLength={1000}
          {...register("message", {
            setValueAs: (v) => (typeof v === "string" ? v.trim() : v),
          })}
          className={errors.message ? "border-red-500" : ""}
          disabled={isSubmitting}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby="message-error"
        />
        <p
          id="message-error"
          aria-live="polite"
          className={`text-sm min-h-[1.25rem] ${
            errors.message ? "text-red-500" : "text-gray-500"
          }`}
        >
          {errors.message?.message ?? "Maximum 1000 characters"}
        </p>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting || isSuccess}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
        size="lg"
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
  );
};
