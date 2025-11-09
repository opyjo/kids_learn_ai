"use client";

import { MainLayout } from "@/components/layouts/main-layout";
import { TutorSelector } from "@/components/chat/tutor-selector";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { TutorId } from "@/lib/constants/tutor-characters";

const TutorSelectionPage = () => {
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Check if user is authenticated (no premium required)
  useEffect(() => {
    const checkAuth = async () => {
      const supabase = getSupabaseBrowserClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setIsAuthenticated(!!user);
      setIsCheckingAccess(false);
    };

    checkAuth();
  }, []);

  const handleSelectTutor = (tutorId: TutorId) => {
    // Save selected tutor to localStorage
    localStorage.setItem("selected-tutor", tutorId);
    // Navigate to the specific tutor page
    router.push(`/tutor/${tutorId}`);
  };

  // Show loading state while checking access
  if (isCheckingAccess) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  // Show login prompt for non-authenticated users
  if (!isAuthenticated) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] px-4">
          <Card className="max-w-md w-full">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Meet Your AI Tutors!</h2>
              <p className="text-muted-foreground mb-6">
                Get help from 4 specialized AI tutors in Python, Math, Science,
                and Creative Arts. Sign in to start learning with your personal
                AI assistants - completely free!
              </p>
              <div className="space-y-3">
                <Button asChild className="w-full" size="lg">
                  <Link href="/login">Sign In to Start</Link>
                </Button>
                <Button asChild variant="outline" className="w-full" size="lg">
                  <Link href="/signup">Create Free Account</Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                No credit card required • Free forever
              </p>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mx-auto w-full min-h-[calc(100vh-5rem)] px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold text-foreground">
                Choose Your AI Tutor
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each tutor has their own unique personality and teaching style!
              Select the one that matches what you want to learn today.
            </p>
          </div>

          {/* Tutor Selection Cards */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Available Tutors
              </CardTitle>
              <CardDescription>
                Click on any tutor to start your learning session
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TutorSelector
                selectedTutorId={
                  (typeof window !== "undefined" &&
                    (localStorage.getItem("selected-tutor") as TutorId)) ||
                  "brightbyte"
                }
                onSelectTutor={handleSelectTutor}
              />
            </CardContent>
          </Card>

          {/* Features Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-3xl mb-2">💬</div>
                <h3 className="font-semibold mb-1">24/7 Availability</h3>
                <p className="text-sm text-muted-foreground">
                  Get help anytime, day or night
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-semibold mb-1">Personalized Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Each tutor adapts to your pace
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-3xl mb-2">✨</div>
                <h3 className="font-semibold mb-1">Free Forever</h3>
                <p className="text-sm text-muted-foreground">
                  No hidden fees or subscriptions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TutorSelectionPage;
