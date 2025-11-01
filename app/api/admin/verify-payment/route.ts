import { type NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const supabase = await getSupabaseServerClient();

    // Check if user is authenticated and is admin
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (profile?.role !== "admin") {
      return NextResponse.json({ error: "Forbidden - Admin access required" }, { status: 403 });
    }

    const body = await request.json();
    const { submission_id, action, rejection_reason } = body;

    if (!submission_id || !action) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (action !== "verify" && action !== "reject") {
      return NextResponse.json(
        { error: "Invalid action. Must be 'verify' or 'reject'" },
        { status: 400 }
      );
    }

    if (action === "reject" && !rejection_reason) {
      return NextResponse.json(
        { error: "Rejection reason is required" },
        { status: 400 }
      );
    }

    // Fetch the payment submission
    const { data: submission, error: fetchError } = await supabase
      .from("payment_submissions")
      .select("*")
      .eq("id", submission_id)
      .single();

    if (fetchError || !submission) {
      return NextResponse.json(
        { error: "Payment submission not found" },
        { status: 404 }
      );
    }

    if (submission.status !== "pending") {
      return NextResponse.json(
        { error: "Payment submission has already been processed" },
        { status: 400 }
      );
    }

    if (action === "verify") {
      // Update payment submission status to verified
      const { error: updateError } = await supabase
        .from("payment_submissions")
        .update({
          status: "verified",
          verified_by: user.id,
          verified_at: new Date().toISOString(),
        })
        .eq("id", submission_id);

      if (updateError) {
        console.error("Error updating payment submission:", updateError);
        return NextResponse.json(
          { error: "Failed to update payment submission" },
          { status: 500 }
        );
      }

      // Upgrade user to premium
      const subscriptionEndDate = new Date();
      subscriptionEndDate.setDate(subscriptionEndDate.getDate() + 30); // 30 days from now

      const { error: profileError } = await supabase
        .from("profiles")
        .update({
          subscription_status: "premium",
          subscription_end_date: subscriptionEndDate.toISOString(),
        })
        .eq("id", submission.user_id);

      if (profileError) {
        console.error("Error updating user profile:", profileError);
        // Rollback payment submission status
        await supabase
          .from("payment_submissions")
          .update({
            status: "pending",
            verified_by: null,
            verified_at: null,
          })
          .eq("id", submission_id);

        return NextResponse.json(
          { error: "Failed to upgrade user subscription" },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Payment verified and user upgraded to premium",
        subscription_end_date: subscriptionEndDate.toISOString(),
      });
    } else {
      // Reject the payment
      const { error: rejectError } = await supabase
        .from("payment_submissions")
        .update({
          status: "rejected",
          verified_by: user.id,
          verified_at: new Date().toISOString(),
          rejection_reason,
        })
        .eq("id", submission_id);

      if (rejectError) {
        console.error("Error rejecting payment submission:", rejectError);
        return NextResponse.json(
          { error: "Failed to reject payment submission" },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Payment submission rejected",
      });
    }
  } catch (error) {
    console.error("Payment verification error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

