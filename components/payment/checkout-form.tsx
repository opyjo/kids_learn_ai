"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Lock, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

interface CheckoutFormProps {
  planPrice: number
}

export function CheckoutForm({ planPrice }: CheckoutFormProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    name: "",
    country: "US",
  })
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      console.log("[v0] Processing payment:", { planPrice, email: formData.email })

      // TODO: Replace with actual Stripe payment processing
      // This is a mock implementation
      const response = await fetch("/api/payment/create-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          paymentMethod: {
            card: {
              number: formData.cardNumber,
              exp_month: formData.expiryDate.split("/")[0],
              exp_year: formData.expiryDate.split("/")[1],
              cvc: formData.cvc,
            },
            billing_details: {
              name: formData.name,
              email: formData.email,
            },
          },
          priceId: "price_premium_monthly", // Stripe price ID
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Payment failed")
      }

      console.log("[v0] Payment successful:", data)

      // Redirect to success page
      router.push("/checkout/success")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Payment failed")
      console.error("[v0] Payment error:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(" ")
    } else {
      return v
    }
  }

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4)
    }
    return v
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          required
        />
      </div>

      <Separator />

      {/* Payment Information */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <CreditCard className="h-5 w-5 text-gray-600" />
          <h3 className="font-semibold">Payment Details</h3>
        </div>

        <div className="space-y-2">
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input
            id="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={formData.cardNumber}
            onChange={(e) => handleInputChange("cardNumber", formatCardNumber(e.target.value))}
            maxLength={19}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiryDate">Expiry Date</Label>
            <Input
              id="expiryDate"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={(e) => handleInputChange("expiryDate", formatExpiryDate(e.target.value))}
              maxLength={5}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvc">CVC</Label>
            <Input
              id="cvc"
              placeholder="123"
              value={formData.cvc}
              onChange={(e) => handleInputChange("cvc", e.target.value.replace(/\D/g, ""))}
              maxLength={4}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Cardholder Name</Label>
          <Input
            id="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            required
          />
        </div>
      </div>

      <Separator />

      {/* Submit Button */}
      <Button type="submit" className="w-full" size="lg" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing Payment...
          </>
        ) : (
          <>
            <Lock className="mr-2 h-4 w-4" />
            Subscribe for ${planPrice}/month
          </>
        )}
      </Button>

      <div className="text-center text-xs text-gray-500">
        <p>
          By subscribing, you agree to our Terms of Service and Privacy Policy.
          <br />
          Your subscription will automatically renew monthly.
        </p>
      </div>
    </form>
  )
}
