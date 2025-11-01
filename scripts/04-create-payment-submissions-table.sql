-- Create payment_submissions table for tracking e-Transfer payments
-- This table stores payment confirmation submissions from users

CREATE TABLE IF NOT EXISTS payment_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  payment_date TIMESTAMP WITH TIME ZONE NOT NULL,
  transaction_reference TEXT NOT NULL,
  proof_url TEXT, -- URL to uploaded proof screenshot
  notes TEXT, -- Optional user notes
  status TEXT CHECK (status IN ('pending', 'verified', 'rejected')) DEFAULT 'pending' NOT NULL,
  verified_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
  verified_at TIMESTAMP WITH TIME ZONE,
  rejection_reason TEXT, -- Reason if rejected
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_payment_submissions_user_id ON payment_submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_payment_submissions_status ON payment_submissions(status);
CREATE INDEX IF NOT EXISTS idx_payment_submissions_created_at ON payment_submissions(created_at DESC);

-- Create storage bucket for payment proof files
-- Note: This needs to be run in Supabase dashboard or via API
-- INSERT INTO storage.buckets (id, name, public) VALUES ('payment-proofs', 'payment-proofs', true);

-- Add RLS policies for payment_submissions
ALTER TABLE payment_submissions ENABLE ROW LEVEL SECURITY;

-- Users can view their own submissions
CREATE POLICY "Users can view own payment submissions"
  ON payment_submissions
  FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own submissions
CREATE POLICY "Users can create own payment submissions"
  ON payment_submissions
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Admins can view all submissions
CREATE POLICY "Admins can view all payment submissions"
  ON payment_submissions
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Admins can update all submissions (for verification)
CREATE POLICY "Admins can update payment submissions"
  ON payment_submissions
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Add trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_payment_submissions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_payment_submissions_updated_at
  BEFORE UPDATE ON payment_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_payment_submissions_updated_at();

-- Add comment to table
COMMENT ON TABLE payment_submissions IS 'Stores payment confirmation submissions from users for manual verification';
COMMENT ON COLUMN payment_submissions.status IS 'Payment verification status: pending (awaiting admin review), verified (payment confirmed), rejected (payment issue)';
COMMENT ON COLUMN payment_submissions.verified_by IS 'Admin user ID who verified the payment';

