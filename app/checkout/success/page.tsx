import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Code, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl">Welcome to Premium!</CardTitle>
          <CardDescription>Your subscription has been activated successfully</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-left space-y-3">
            <h3 className="font-semibold">What's next?</h3>
            <ul className="text-sm space-y-2 text-gray-600">
              <li>✅ Access to all 15+ premium lessons</li>
              <li>✅ Advanced Python concepts unlocked</li>
              <li>✅ Progress tracking and certificates</li>
              <li>✅ Priority support activated</li>
            </ul>
          </div>

          <div className="space-y-3">
            <Button className="w-full" asChild>
              <Link href="/dashboard">
                <Code className="mr-2 h-4 w-4" />
                Start Learning Now
              </Link>
            </Button>
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <Link href="/lessons">
                View All Lessons
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="text-xs text-gray-500 pt-4 border-t">
            <p>
              A confirmation email has been sent to your inbox.
              <br />
              Need help? Contact our support team.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
