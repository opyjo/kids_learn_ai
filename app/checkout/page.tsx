import { CheckoutForm } from "@/components/payment/checkout-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CheckoutPage() {
  const planDetails = {
    name: "Premium",
    price: 9.99,
    features: [
      "All 15+ lessons (beginner to advanced)",
      "Interactive code editor with advanced features",
      "Detailed progress analytics",
      "Completion certificates",
      "Priority support",
      "New lessons added monthly",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <Image
                  src="/Logo.png"
                  alt="Kids Learn AI Logo"
                  width={40}
                  height={40}
                />
                <h1 className="text-xl font-semibold">Kids Learn AI</h1>
              </div>
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700">
              <Shield className="h-4 w-4 mr-1" />
              Secure Checkout
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Complete Your Purchase
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Join thousands of kids mastering Python fundamentals and building
              confidence for future AI adventures
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                <CardDescription>
                  Review your premium subscription
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <div>
                    <h3 className="font-semibold">{planDetails.name} Plan</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Monthly subscription
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">
                      ${planDetails.price}
                    </div>
                    <div className="text-sm text-gray-500">/month</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">What you'll get:</h4>
                  <ul className="space-y-2">
                    {planDetails.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total (monthly)</span>
                    <span className="text-2xl font-bold">
                      ${planDetails.price}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Cancel anytime. No long-term commitment.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Form */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
                <CardDescription>
                  Secure payment powered by Stripe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CheckoutForm planPrice={planDetails.price} />
              </CardContent>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <span>💳</span>
                <span>Stripe Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🔒</span>
                <span>PCI Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
