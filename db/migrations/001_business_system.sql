-- PostgreSQL foundation for the future lead-to-booking system.
-- Apply only after DATABASE_URL and an approved production database are configured.
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS customers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  preferred_contact_method text,
  service_location text,
  marketing_consent boolean NOT NULL DEFAULT false,
  internal_notes text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_reference text NOT NULL UNIQUE,
  customer_id uuid NOT NULL REFERENCES customers(id),
  service_requested text NOT NULL,
  property_type text,
  property_size text,
  frequency text,
  preferred_date date,
  description text,
  source text,
  campaign jsonb NOT NULL DEFAULT '{}'::jsonb,
  status text NOT NULL DEFAULT 'New' CHECK (status IN ('New','Contacted','Site Visit Scheduled','Site Visit Completed','Quote Sent','Approved','Scheduled','Completed','Lost')),
  assigned_owner text,
  next_follow_up_date date,
  lost_reason text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS quotations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  quotation_number text NOT NULL UNIQUE,
  customer_id uuid NOT NULL REFERENCES customers(id),
  lead_id uuid NOT NULL REFERENCES leads(id),
  discount numeric(12,2) NOT NULL DEFAULT 0 CHECK (discount >= 0),
  tax_enabled boolean NOT NULL DEFAULT false,
  tax_rate numeric(5,2) NOT NULL DEFAULT 0 CHECK (tax_rate >= 0),
  tax_amount numeric(12,2) NOT NULL DEFAULT 0 CHECK (tax_amount >= 0),
  total numeric(12,2) NOT NULL DEFAULT 0 CHECK (total >= 0),
  deposit_required numeric(12,2) NOT NULL DEFAULT 0 CHECK (deposit_required >= 0),
  notes text,
  terms text,
  issue_date date NOT NULL DEFAULT current_date,
  expiry_date date,
  status text NOT NULL DEFAULT 'Draft' CHECK (status IN ('Draft','Sent','Approved','Declined','Expired','Revoked')),
  approval_token_digest text UNIQUE,
  approval_date timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS quotation_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  quotation_id uuid NOT NULL REFERENCES quotations(id) ON DELETE CASCADE,
  description text NOT NULL,
  quantity numeric(12,2) NOT NULL CHECK (quantity > 0),
  unit text NOT NULL,
  unit_price numeric(12,2) NOT NULL CHECK (unit_price >= 0),
  subtotal numeric(12,2) NOT NULL CHECK (subtotal >= 0)
);

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_reference text NOT NULL UNIQUE,
  customer_id uuid NOT NULL REFERENCES customers(id),
  quotation_id uuid REFERENCES quotations(id),
  service text NOT NULL,
  starts_at timestamptz NOT NULL,
  ends_at timestamptz NOT NULL,
  location text,
  assigned_staff jsonb NOT NULL DEFAULT '[]'::jsonb,
  required_equipment jsonb NOT NULL DEFAULT '[]'::jsonb,
  checklist jsonb NOT NULL DEFAULT '[]'::jsonb,
  internal_instructions text,
  status text NOT NULL DEFAULT 'Pending Confirmation' CHECK (status IN ('Pending Confirmation','Confirmed','Team Assigned','In Progress','Completed','Cancelled','Rescheduled')),
  completion_notes text,
  evidence jsonb NOT NULL DEFAULT '[]'::jsonb,
  customer_confirmed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CHECK (ends_at > starts_at)
);

CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  payment_reference text NOT NULL UNIQUE,
  quotation_id uuid REFERENCES quotations(id),
  booking_id uuid REFERENCES bookings(id),
  amount numeric(12,2) NOT NULL CHECK (amount > 0),
  method text NOT NULL,
  status text NOT NULL DEFAULT 'Pending' CHECK (status IN ('Pending','Submitted','Verified','Failed','Refunded')),
  external_transaction_reference text,
  payment_date timestamptz,
  verification_status text NOT NULL DEFAULT 'Unverified' CHECK (verification_status IN ('Unverified','Verified','Rejected')),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS activity_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid REFERENCES customers(id),
  lead_id uuid REFERENCES leads(id),
  quotation_id uuid REFERENCES quotations(id),
  booking_id uuid REFERENCES bookings(id),
  payment_id uuid REFERENCES payments(id),
  event_type text NOT NULL,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS leads_status_idx ON leads(status);
CREATE INDEX IF NOT EXISTS leads_follow_up_idx ON leads(next_follow_up_date);
CREATE INDEX IF NOT EXISTS bookings_schedule_idx ON bookings(starts_at, ends_at);
