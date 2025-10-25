import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SiteHeader } from "@/components/site-header";
import { SettingsForm } from "@/components/user/settings-form";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { requireAuth } from "@/lib/auth-helpers";
import { Settings } from "lucide-react";

export default async function SettingsPage() {
  // Protect the route - redirects to /login if not authenticated
  const authUser = await requireAuth();

  const supabase = await getSupabaseServerClient();

  // Fetch user profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", authUser.id)
    .single();

  if (!profile) {
    // If profile doesn't exist, show error message
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-fuchsia-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <SiteHeader />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Profile Not Found</CardTitle>
                <CardDescription>
                  Your profile could not be loaded. Please try again or contact
                  support.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const user = {
    id: authUser.id,
    email: authUser.email || "",
    full_name: profile.full_name,
    avatar_url: profile.avatar_url,
    role: profile.role,
    subscription_status: profile.subscription_status,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-fuchsia-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <SiteHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg dark:bg-blue-900/30">
                <Settings className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Account Settings
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Manage your account settings and preferences.
                </p>
              </div>
            </div>
          </div>

          {/* Settings Tabs */}
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <SettingsForm user={user} section="profile" />
            </TabsContent>

            <TabsContent value="password">
              <SettingsForm user={user} section="password" />
            </TabsContent>
          </Tabs>

          {/* Account Info Card */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>
                Your account details and membership information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Account Type
                  </p>
                  <p className="text-sm text-gray-900 dark:text-white capitalize">
                    {profile.role}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subscription
                  </p>
                  <p className="text-sm text-gray-900 dark:text-white capitalize">
                    {profile.subscription_status}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Member Since
                  </p>
                  <p className="text-sm text-gray-900 dark:text-white">
                    {new Date(profile.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Last Updated
                  </p>
                  <p className="text-sm text-gray-900 dark:text-white">
                    {new Date(profile.updated_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
