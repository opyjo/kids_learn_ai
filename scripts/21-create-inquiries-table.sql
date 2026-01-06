-- Create inquiries table for tracking course inquiries
-- This table stores parent inquiries submitted through the /inquiry/book form

CREATE TABLE IF NOT EXISTS inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  parent_name TEXT NOT NULL,
  parent_email TEXT NOT NULL,
  parent_phone TEXT,
  child_name TEXT NOT NULL,
  age_group TEXT NOT NULL CHECK (age_group IN ('9-10', '11-13')),
  experience TEXT NOT NULL CHECK (experience IN ('none', 'some', 'comfortable')),
  how_heard TEXT,
  questions TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'trial_scheduled', 'enrolled', 'declined')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert new inquiries (for the public form)
CREATE POLICY "Anyone can create inquiries" ON inquiries
  FOR INSERT
  WITH CHECK (true);

-- Only admins can view/update/delete inquiries
CREATE POLICY "Admins can view inquiries" ON inquiries
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can update inquiries" ON inquiries
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can delete inquiries" ON inquiries
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_inquiries_parent_email ON inquiries(parent_email);

