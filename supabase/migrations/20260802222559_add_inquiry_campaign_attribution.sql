alter table public.inquiries
  add column if not exists utm_source text,
  add column if not exists utm_medium text,
  add column if not exists utm_campaign text,
  add column if not exists utm_content text,
  add column if not exists utm_term text,
  add column if not exists landing_page text,
  add column if not exists referrer text,
  add column if not exists partner_code text;

alter table public.inquiries
  add constraint inquiries_utm_source_length_check
    check (utm_source is null or char_length(utm_source) <= 200),
  add constraint inquiries_utm_medium_length_check
    check (utm_medium is null or char_length(utm_medium) <= 200),
  add constraint inquiries_utm_campaign_length_check
    check (utm_campaign is null or char_length(utm_campaign) <= 200),
  add constraint inquiries_utm_content_length_check
    check (utm_content is null or char_length(utm_content) <= 200),
  add constraint inquiries_utm_term_length_check
    check (utm_term is null or char_length(utm_term) <= 200),
  add constraint inquiries_landing_page_check
    check (
      landing_page is null
      or (
        char_length(landing_page) between 1 and 500
        and landing_page ~ '^/[^/]'
      )
      or landing_page = '/'
    ),
  add constraint inquiries_referrer_length_check
    check (referrer is null or char_length(referrer) <= 500),
  add constraint inquiries_partner_code_check
    check (
      partner_code is null
      or partner_code ~ '^[A-Za-z0-9_-]{1,100}$'
    );

comment on column public.inquiries.landing_page is
  'Original first-touch path only; query parameters and fragments are intentionally excluded.';

comment on column public.inquiries.referrer is
  'Original first-touch HTTP(S) referrer with query parameters and fragments removed.';
