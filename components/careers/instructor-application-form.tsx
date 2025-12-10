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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ApplicationFormData>({
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

  const availableTuesday = watch("availableTuesday");
  const availableThursday = watch("availableThursday");

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
      reset();

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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {/* Full Name */}
      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-sm font-medium">
          Full Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="fullName"
          type="text"
          placeholder="Your full name"
          {...register("fullName")}
          className={errors.fullName ? "border-red-500" : ""}
          disabled={isSubmitting}
        />
        {errors.fullName && (
          <p className="text-sm text-red-500">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          {...register("email")}
          className={errors.email ? "border-red-500" : ""}
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* University */}
      <div className="space-y-2">
        <Label htmlFor="university" className="text-sm font-medium">
          University <span className="text-red-500">*</span>
        </Label>
        <Input
          id="university"
          type="text"
          placeholder="e.g., University of Toronto"
          {...register("university")}
          className={errors.university ? "border-red-500" : ""}
          disabled={isSubmitting}
        />
        {errors.university && (
          <p className="text-sm text-red-500">{errors.university.message}</p>
        )}
      </div>

      {/* Program/Major */}
      <div className="space-y-2">
        <Label htmlFor="program" className="text-sm font-medium">
          Program / Major <span className="text-red-500">*</span>
        </Label>
        <Input
          id="program"
          type="text"
          placeholder="e.g., Computer Science"
          {...register("program")}
          className={errors.program ? "border-red-500" : ""}
          disabled={isSubmitting}
        />
        {errors.program && (
          <p className="text-sm text-red-500">{errors.program.message}</p>
        )}
      </div>

      {/* Year of Study */}
      <div className="space-y-2">
        <Label htmlFor="yearOfStudy" className="text-sm font-medium">
          Year of Study <span className="text-red-500">*</span>
        </Label>
        <Select
          onValueChange={(value) =>
            setValue(
              "yearOfStudy",
              value as "1" | "2" | "3" | "4" | "5+" | "graduate"
            )
          }
          disabled={isSubmitting}
        >
          <SelectTrigger className={errors.yearOfStudy ? "border-red-500" : ""}>
            <SelectValue placeholder="Select year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1st Year</SelectItem>
            <SelectItem value="2">2nd Year</SelectItem>
            <SelectItem value="3">3rd Year</SelectItem>
            <SelectItem value="4">4th Year</SelectItem>
            <SelectItem value="5+">5+ Year</SelectItem>
            <SelectItem value="graduate">Graduate Student</SelectItem>
          </SelectContent>
        </Select>
        {errors.yearOfStudy && (
          <p className="text-sm text-red-500">{errors.yearOfStudy.message}</p>
        )}
      </div>

      {/* Python Experience */}
      <div className="space-y-2">
        <Label htmlFor="pythonExperience" className="text-sm font-medium">
          Python Experience <span className="text-red-500">*</span>
        </Label>
        <Select
          onValueChange={(value) =>
            setValue(
              "pythonExperience",
              value as "beginner" | "intermediate" | "advanced" | "expert"
            )
          }
          disabled={isSubmitting}
        >
          <SelectTrigger
            className={errors.pythonExperience ? "border-red-500" : ""}
          >
            <SelectValue placeholder="Select experience level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="beginner">Beginner (learning)</SelectItem>
            <SelectItem value="intermediate">
              Intermediate (coursework)
            </SelectItem>
            <SelectItem value="advanced">Advanced (projects/work)</SelectItem>
            <SelectItem value="expert">Expert (professional)</SelectItem>
          </SelectContent>
        </Select>
        {errors.pythonExperience && (
          <p className="text-sm text-red-500">
            {errors.pythonExperience.message}
          </p>
        )}
      </div>

      {/* Availability */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">
          Availability <span className="text-red-500">*</span>
        </Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="availableTuesday"
              checked={availableTuesday}
              onCheckedChange={(checked) =>
                setValue("availableTuesday", checked === true)
              }
              disabled={isSubmitting}
            />
            <label
              htmlFor="availableTuesday"
              className="text-sm cursor-pointer"
            >
              Tuesdays (Ages 9-10 class)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="availableThursday"
              checked={availableThursday}
              onCheckedChange={(checked) =>
                setValue("availableThursday", checked === true)
              }
              disabled={isSubmitting}
            />
            <label
              htmlFor="availableThursday"
              className="text-sm cursor-pointer"
            >
              Thursdays (Ages 11-13 class)
            </label>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Select at least one day you're available
        </p>
      </div>

      {/* Teaching Experience */}
      <div className="space-y-2">
        <Label htmlFor="teachingExperience" className="text-sm font-medium">
          Teaching/Tutoring Experience{" "}
          <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Textarea
          id="teachingExperience"
          placeholder="Any previous experience teaching, tutoring, or working with kids..."
          rows={2}
          maxLength={500}
          {...register("teachingExperience")}
          disabled={isSubmitting}
        />
      </div>

      {/* Why Interested */}
      <div className="space-y-2">
        <Label htmlFor="whyInterested" className="text-sm font-medium">
          Why do you want to teach kids to code?{" "}
          <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="whyInterested"
          placeholder="Tell us what motivates you to help kids learn programming..."
          rows={3}
          maxLength={1000}
          {...register("whyInterested")}
          className={errors.whyInterested ? "border-red-500" : ""}
          disabled={isSubmitting}
        />
        {errors.whyInterested && (
          <p className="text-sm text-red-500">{errors.whyInterested.message}</p>
        )}
      </div>

      {/* LinkedIn URL */}
      <div className="space-y-2">
        <Label htmlFor="linkedinUrl" className="text-sm font-medium">
          LinkedIn Profile{" "}
          <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Input
          id="linkedinUrl"
          type="url"
          placeholder="https://linkedin.com/in/yourprofile"
          {...register("linkedinUrl")}
          className={errors.linkedinUrl ? "border-red-500" : ""}
          disabled={isSubmitting}
        />
        {errors.linkedinUrl && (
          <p className="text-sm text-red-500">{errors.linkedinUrl.message}</p>
        )}
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
  );
};

