-- Migration: Add missing subscription columns to profiles table
-- Date: 2026-01-04
-- Issue: The handle_new_user trigger function was trying to insert into 
-- subscription_status and subscription_end_date columns that didn't exist,
-- causing "Database error saving new user" for non-OAuth signups.

-- Add missing subscription columns to profiles table
-- These columns are required by the handle_new_user trigger function

ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS subscription_status TEXT 
CHECK (subscription_status IN ('free', 'premium')) 
DEFAULT 'free';

ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS subscription_end_date TIMESTAMP WITH TIME ZONE;

