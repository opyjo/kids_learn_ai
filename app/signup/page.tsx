import { SignupForm } from "@/components/auth/signup-form";
import { AuthLayout } from "@/components/layouts/auth-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <div className="mb-8 flex items-center justify-center gap-2">
          <Code className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            KidsCode Academy
          </h1>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle>Start Your Coding Journey!</CardTitle>
            <CardDescription>
              Create your account and begin learning Python today
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignupForm />
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AuthLayout>
  );
}
