"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, Send, CheckCircle2, Sparkles } from "lucide-react";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<InquiryFormData>({
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

  const selectedAgeGroup = watch("ageGroup");
  const selectedExperience = watch("experience");

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
      reset();

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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Parent Name */}
      <div className="space-y-2">
        <Label htmlFor="parentName" className="text-sm font-medium">
          Your Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="parentName"
          type="text"
          placeholder="Your full name"
          {...register("parentName")}
          className={errors.parentName ? "border-red-500" : ""}
          disabled={isSubmitting}
          aria-invalid={errors.parentName ? "true" : "false"}
        />
        {errors.parentName && (
          <p className="text-sm text-red-500">{errors.parentName.message}</p>
        )}
      </div>

      {/* Parent Email */}
      <div className="space-y-2">
        <Label htmlFor="parentEmail" className="text-sm font-medium">
          Your Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="parentEmail"
          type="email"
          placeholder="your@email.com"
          {...register("parentEmail")}
          className={errors.parentEmail ? "border-red-500" : ""}
          disabled={isSubmitting}
          aria-invalid={errors.parentEmail ? "true" : "false"}
        />
        {errors.parentEmail && (
          <p className="text-sm text-red-500">{errors.parentEmail.message}</p>
        )}
      </div>

      {/* Child Name */}
      <div className="space-y-2">
        <Label htmlFor="childName" className="text-sm font-medium">
          Child's Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="childName"
          type="text"
          placeholder="Your child's first name"
          {...register("childName")}
          className={errors.childName ? "border-red-500" : ""}
          disabled={isSubmitting}
          aria-invalid={errors.childName ? "true" : "false"}
        />
        {errors.childName && (
          <p className="text-sm text-red-500">{errors.childName.message}</p>
        )}
      </div>

      {/* Age Group */}
      <div className="space-y-2">
        <Label htmlFor="ageGroup" className="text-sm font-medium">
          Age Group <span className="text-red-500">*</span>
        </Label>
        <Select
          onValueChange={(value) =>
            setValue("ageGroup", value as "9-10" | "11-13")
          }
          disabled={isSubmitting}
        >
          <SelectTrigger
            className={errors.ageGroup ? "border-red-500" : ""}
            aria-invalid={errors.ageGroup ? "true" : "false"}
          >
            <SelectValue placeholder="Select age group" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="9-10">
              <div className="flex items-center gap-2">
                <span>Ages 9-10</span>
                <span className="text-muted-foreground text-xs">
                  (Tuesdays)
                </span>
              </div>
            </SelectItem>
            <SelectItem value="11-13">
              <div className="flex items-center gap-2">
                <span>Ages 11-13</span>
                <span className="text-muted-foreground text-xs">
                  (Thursdays)
                </span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        {selectedAgeGroup && (
          <p className="text-sm text-muted-foreground">
            {selectedAgeGroup === "9-10"
              ? "📅 Classes are on Tuesdays"
              : "📅 Classes are on Thursdays"}
          </p>
        )}
        {errors.ageGroup && (
          <p className="text-sm text-red-500">{errors.ageGroup.message}</p>
        )}
      </div>

      {/* Coding Experience */}
      <div className="space-y-2">
        <Label htmlFor="experience" className="text-sm font-medium">
          Child's Coding Experience <span className="text-red-500">*</span>
        </Label>
        <Select
          onValueChange={(value) =>
            setValue("experience", value as "none" | "some" | "comfortable")
          }
          disabled={isSubmitting}
        >
          <SelectTrigger
            className={errors.experience ? "border-red-500" : ""}
            aria-invalid={errors.experience ? "true" : "false"}
          >
            <SelectValue placeholder="Select experience level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">No coding experience</SelectItem>
            <SelectItem value="some">Some experience (Scratch, etc.)</SelectItem>
            <SelectItem value="comfortable">
              Comfortable with basics
            </SelectItem>
          </SelectContent>
        </Select>
        {errors.experience && (
          <p className="text-sm text-red-500">{errors.experience.message}</p>
        )}
      </div>

      {/* How Did You Hear About Us */}
      <div className="space-y-2">
        <Label htmlFor="howHeard" className="text-sm font-medium">
          How did you hear about us?{" "}
          <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Input
          id="howHeard"
          type="text"
          placeholder="e.g., Google, friend, social media"
          {...register("howHeard")}
          disabled={isSubmitting}
        />
      </div>

      {/* Questions */}
      <div className="space-y-2">
        <Label htmlFor="questions" className="text-sm font-medium">
          Questions or concerns?{" "}
          <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Textarea
          id="questions"
          placeholder="Any questions about the program, schedule, or anything else..."
          rows={4}
          maxLength={1000}
          {...register("questions")}
          disabled={isSubmitting}
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting || isSuccess}
        className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
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
            We've received your inquiry and will contact you within 24 hours to
            schedule your child's free trial class.
          </p>
        </div>
      )}
    </form>
  );
};

