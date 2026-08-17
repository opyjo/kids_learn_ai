# Kids Learn AI SEO Implementation Guide

This document explains the SEO work currently implemented in the Kids Learn AI app. It is written in simple language so the same approach can be reused in other apps.

The guide is based on the code in this repository and its Git history as of August 8, 2026. It separates:

- what is definitely implemented;
- what is most likely helping search visibility;
- what measures results but does not directly improve rankings; and
- what is not implemented yet.

## 1. Short answer: what appears to be working?

There is no single SEO trick in this app. The improvement most likely comes from several changes working together:

1. Every important public page now has a clear, unique title and description.
2. Every public page tells Google its preferred, or canonical, URL.
3. The site consistently uses one domain: `https://www.kidslearnai.ca`.
4. A sitemap explicitly lists the important public pages, 16 course pages, 21 blog articles, and published Story Club pages.
5. The site contains much more useful, focused content about Python, AI, children, parents, educators, safety, and Canada.
6. The careers page clearly describes a specific role using terms that job seekers may search for, such as “coding instructor,” “part-time,” “remote,” “Python,” “AI,” and “university STEM students.”
7. Navigation and footer links make the careers, blog, lessons, and program pages easy for people and search engines to find.
8. Structured data explains the organization, website, founder, courses, articles, and breadcrumbs to search engines.
9. Private areas are marked `noindex`, which helps keep search results focused on useful public pages.
10. Google Analytics, Vercel Analytics, Speed Insights, and campaign attribution provide better measurement of visits and conversions.

The biggest lesson to copy is this:

> Clear positioning + useful content + technically correct indexing + strong internal links + measurement is more effective than adding random keywords.

## 2. Important limitation: SEO cannot be proven from code alone

The code shows what was implemented, but it cannot by itself prove which individual change caused the increase in visits or instructor applications.

To prove that, compare dates in Google Search Console and Google Analytics with the implementation timeline in this guide. Look for:

- impressions before and after the SEO releases;
- clicks before and after the releases;
- landing pages that first received the visitors;
- search queries used to find those pages;
- visits that started on `/careers` or `/careers/apply`;
- application form completions; and
- whether traffic is organic search, referral, social, paid, or direct.

The code supports a strong SEO explanation, but proper reporting is still needed before claiming exact cause and effect.

## 3. SEO implementation timeline

The Git history shows that the SEO work was added in stages.

| Date | Main change | Why it matters |
| --- | --- | --- |
| July 5, 2026 | Initial page metadata, `robots.ts`, and `sitemap.ts` | Gave search engines page titles, descriptions, crawl rules, and a list of URLs. |
| July 26, 2026 | Blog redesign and four useful articles | Added useful search-focused content and improved the blog experience. |
| July 29, 2026 | Site-wide SEO system | Added reusable metadata, canonical URLs, social previews, structured data, private-page controls, a web manifest, and `llms.txt`. |
| July 29, 2026 | Twelve additional expanded articles | Greatly increased topical coverage around Python, AI literacy, safety, families, schools, and Canadian coding education. |
| July 30, 2026 | Course metadata and sitemap improvements | Added real database-backed course descriptions, all 16 course routes, and more accurate sitemap dates. |
| August 2, 2026 | Google Analytics and conversion events | Made it possible to measure calls to action, leads, sign-ups, and logins. |
| August 2, 2026 | Clearer market positioning and attribution | Repeated a focused Canadian, age-based offer across metadata and visible copy, while recording landing-page and campaign details for inquiries. |
| August 6, 2026 | Story Club discoverability | Added a recurring content area and stronger links from the home page, header, and footer. |

This staged rollout closely matches the type of improvement being observed: first better discoverability, then more content, clearer positioning, stronger internal linking, and better measurement.

## 4. The central SEO configuration

The main reusable SEO logic is in [`lib/seo.ts`](../lib/seo.ts).

It defines:

- the site name;
- the one official production URL;
- the default site description;
- the organization author;
- the shared social image;
- public-page metadata;
- private-page `noindex` rules; and
- a helper for writing useful course descriptions.

### 4.1 One official site URL

The official URL is hard-coded as:

```text
https://www.kidslearnai.ca
```

This is a good implementation. Preview deployments and local development addresses should never become canonical search URLs.

The `absoluteUrl()` helper turns a relative path such as `/careers` into the complete URL:

```text
https://www.kidslearnai.ca/careers
```

Copy this idea into other apps. Keep the public search URL separate from login callback URLs, preview domains, and local development URLs.

### 4.2 Reusable public metadata

The `publicMetadata()` helper accepts:

- `title` — the page title shown in search results and browser tabs;
- `description` — a short summary that search engines may show;
- `path` — the correct public URL path;
- `type` — either `website` or `article`; and
- `noIndex` — used when a route should not appear in search.

For each public page it creates all of the following:

- page title;
- meta description;
- author;
- creator;
- publisher;
- canonical URL;
- `index, follow` robots instructions;
- Open Graph title, description, URL, site name, type, and image; and
- X/Twitter large-image card data.

This is important because developers only need to provide the page-specific facts. The helper adds the technical fields consistently and reduces mistakes.

### 4.3 Reusable private metadata

The `privateMetadata` object produces:

```text
noindex, nofollow, noarchive, nosnippet
```

It is used on administrative, student, family, quiz, tutor, settings, review, teacher-notes, lab, and individual lesson areas.

In simple terms, it tells search engines:

- do not put this page in search results;
- do not follow its links for indexing purposes;
- do not save a cached search copy; and
- do not show a text snippet.

This protects search quality. A site should not allow account pages, dashboards, incomplete utility pages, or private learning content to compete with its public marketing pages.

### 4.4 Course description helper

Course metadata is built from real course data:

- course title;
- description;
- age range; and
- project name.

The helper creates a description of no more than 160 characters and truncates at a readable word boundary. It also supplies safe defaults when database fields are missing.

This is much better than generating a title only from the URL slug. The result is specific to the actual course and more useful to searchers.

## 5. Root-level metadata

The root layout is [`app/layout.tsx`](../app/layout.tsx). It applies shared information to the entire app.

It includes:

- `metadataBase` set to the production domain;
- a default title and description;
- the site generator name;
- Open Graph defaults;
- an X/Twitter large-image card default;
- favicon files in ICO, PNG, and SVG formats;
- an Apple touch icon;
- the web app manifest;
- Google Search Console verification; and
- Bing Webmaster Tools verification.

The HTML element also declares:

```html
<html lang="en">
```

This tells browsers and search engines that the main language is English. Structured data further specifies `en-CA`, which is appropriate for the Canadian audience.

### Required production environment variables

The following settings only work when their environment variables are configured in production:

```text
GOOGLE_SITE_VERIFICATION
BING_SITE_VERIFICATION
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
```

Do not copy secret values from one app to another. Each site should have its own Search Console property, Bing property, and Analytics property.

## 6. Page-specific titles and descriptions

The important public routes use the reusable metadata system. Examples include:

| Page | SEO focus |
| --- | --- |
| `/` | Live Python and responsible AI classes for kids |
| `/about` | Mission, organization, and founder trust |
| `/blog` | Practical AI and Python guides for young learners |
| `/careers` | Part-time remote coding instructor role |
| `/careers/apply` | Instructor application intent |
| `/contact` | Contact and organization information |
| `/faq` | Family questions and program answers |
| `/games` | Python games for kids |
| `/get-thonny` | Installing a beginner Python editor |
| `/get-trinket` | Setting up browser-based Python coding |
| `/inquiry` | Free first class and program details |
| `/inquiry/book` | Booking the free first class |
| `/lessons` | Python and AI curriculum |
| `/lessons/[course]` | A specific course, age range, and project |
| `/playground` | Browser-based Python playground |
| `/pricing` | Program pricing and offer |
| `/privacy` | Privacy practices |
| `/stories` | Weekly AI stories for children |
| `/stories/[slug]` | A specific story and AI topic |
| `/terms` | Service terms |

The blog has metadata for the blog library and each of its 21 articles. Dynamic article pages use `generateMetadata()` so the title, description, canonical URL, and article type come from the selected article.

### Why the wording is effective

The important titles and descriptions use clear language that matches real search intent:

- service: live online classes;
- subject: Python and responsible AI;
- audience: kids ages 9–13;
- country: Canada or Canadian;
- format: small groups and real projects;
- offer: a free first class; and
- job intent: coding instructor, part-time, remote, STEM students, Python, and AI.

The language is useful because it is specific. “Education platform” would be vague. “Live online Python and responsible AI classes for Canadian kids ages 9–13” clearly explains the product.

### Meta keywords are intentionally absent

The app does not add a `<meta name="keywords">` tag. That is not a missing SEO feature. Modern Google search does not use the old meta-keywords tag for ranking.

Keywords are instead used naturally in:

- titles;
- descriptions;
- headings;
- paragraphs;
- links;
- URLs; and
- structured data.

That is the approach to copy.

## 7. Canonical URLs and domain consistency

A canonical URL tells search engines which URL is the preferred version of a page.

Every page using `publicMetadata()` receives a canonical URL. For example:

```text
https://www.kidslearnai.ca/careers
```

This helps prevent duplicate versions from splitting search signals.

The app also has a permanent redirect in [`next.config.mjs`](../next.config.mjs):

```text
kidslearnai.ca/*  ->  https://www.kidslearnai.ca/*
```

Together, the redirect and canonical tags create a consistent rule:

1. visitors are sent to the `www` domain; and
2. search engines are told that the `www` URL is the official version.

When replicating this, choose either `www` or non-`www`. The choice is less important than using it consistently everywhere.

## 8. Robots and indexing controls

The crawler instructions are generated by [`app/robots.ts`](../app/robots.ts).

The public result allows crawlers to access the site and blocks only non-document endpoints:

```text
Allow: /
Disallow: /api/
Disallow: /auth/
Sitemap: https://www.kidslearnai.ca/sitemap.xml
```

### Why private pages are not blocked in `robots.txt`

Private document pages are allowed to be crawled so a crawler can read their `noindex` instruction.

This distinction is important:

- `robots.txt` controls crawling;
- `noindex` controls whether a page appears in search.

If a private URL is blocked before Google can open it, Google may not see the page's `noindex` instruction. This app correctly uses page metadata and response headers for private pages.

### X-Robots-Tag response headers

[`next.config.mjs`](../next.config.mjs) adds this HTTP response header to private routes:

```text
X-Robots-Tag: noindex, nofollow, noarchive, nosnippet
```

It covers:

- admin;
- dashboard;
- family;
- labs;
- quiz;
- review;
- settings;
- teacher notes;
- tutor;
- individual lesson pages;
- login;
- signup;
- forgot password; and
- reset password.

Many of these routes also use `privateMetadata`. Using both HTML metadata and an HTTP header is intentional extra protection.

## 9. XML sitemap

The sitemap is generated by [`app/sitemap.ts`](../app/sitemap.ts) and is available at:

```text
https://www.kidslearnai.ca/sitemap.xml
```

It contains four groups of URLs.

### 9.1 Main public pages

The sitemap includes the home, about, blog, careers, careers application, contact, FAQ, games, setup guides, inquiry, booking, lessons, playground, pricing, privacy, Story Club, and terms pages.

### 9.2 Sixteen course pages

All Year 1 and Year 2 term pages are listed explicitly. This is important because database-driven or deeply nested pages can otherwise be slower for search engines to discover.

### 9.3 Twenty-one blog articles

The blog combines:

- 9 earlier article pages; and
- 12 expanded, search-focused articles.

Each article sitemap entry uses its genuine `updatedAt` date.

### 9.4 Published Story Club pages

Only stories with `status === "published"` enter the sitemap. Upcoming or private stories are excluded.

### Sitemap quality details

- The home page has weekly change frequency.
- Other main pages use monthly change frequency.
- Story pages use weekly change frequency.
- The home page has the highest sitemap priority.
- The inquiry page has a higher priority than ordinary static pages.
- Blog and story entries include real modification dates.
- Static pages intentionally omit fake `lastModified` dates.
- Tests verify all 16 course routes, prevent duplicate URLs, and confirm honest article dates.

Sitemap `priority` and `changeFrequency` are hints, not ranking boosts. The real benefit is reliable URL discovery and accurate update information.

## 10. Structured data, also called JSON-LD

Structured data gives search engines a machine-readable description of a page.

The reusable JSON-LD renderer is [`components/seo/json-ld.tsx`](../components/seo/json-ld.tsx). It safely serializes data and escapes `<` characters to prevent a script-tag breakout.

The app currently implements these schema types.

### 10.1 `EducationalOrganization`

Added to every page through the root layout. It includes:

- organization name;
- official URL;
- logo;
- email;
- telephone number;
- postal address;
- description; and
- Canada as the area served.

This helps search engines connect the website to a real education organization.

### 10.2 `WebSite`

Also added through the root layout. It contains:

- website name;
- official URL;
- publisher relationship; and
- Canadian English as the language.

### 10.3 `Person`

The About page describes Opeyemi Ojo as the Founder and Lead Instructor. It connects the person to the organization and includes a photo and About-page URL.

This supports trust and clear authorship, especially for an education site.

### 10.4 `Course`

Each public course page describes:

- course name;
- description;
- URL;
- education provider;
- language;
- educational level;
- typical age range; and
- student audience.

The values come from real course data whenever available.

### 10.5 `BlogPosting`

Blog articles include:

- headline;
- description;
- article URL;
- main page URL;
- published date;
- modified date;
- organization author;
- educational organization publisher;
- publisher logo; and
- article image.

### 10.6 `BreadcrumbList`

Each blog article supplies this machine-readable path:

```text
Home -> Blog -> Current article
```

This helps search engines understand the article's place in the website.

### Structured data that is not currently implemented

The app does **not** currently include:

- `JobPosting` for the coding instructor role;
- `FAQPage` for the FAQ page;
- article structured data for Story Club stories; or
- breadcrumb structured data for course and Story Club pages.

This distinction matters. The current instructor visibility is not coming from a `JobPosting` rich result because that schema is absent.

## 11. Open Graph and social sharing

Open Graph data controls how a page looks when it is shared on services such as LinkedIn, Facebook, Slack, and messaging apps. X/Twitter uses similar card data.

The app supplies, for every public page:

- title;
- description;
- full canonical URL;
- site name;
- page type;
- a 1200 × 630 image; and
- descriptive image alternative text.

The shared image is dynamically generated by [`app/opengraph-image.tsx`](../app/opengraph-image.tsx).

It clearly communicates:

- the Kids Learn AI brand;
- live Python and responsible AI classes;
- Canadian children ages 9–13;
- small groups;
- real projects; and
- the free first class.

Social previews do not directly guarantee higher search rankings. They can improve click-through and sharing, which helps more people discover the site.

## 12. Content strategy and topical authority

The blog is one of the most important likely sources of the visibility improvement.

The site now has 21 articles across closely related topics such as:

- first Python projects for children;
- teaching children to debug;
- safe first machine-learning projects;
- explaining AI to a child;
- AI chatbot privacy for Canadian families;
- checking AI answers;
- AI literacy for classrooms;
- bias and fairness activities;
- responsible AI classroom rules;
- coding education in Canada;
- choosing online coding classes for children in Canada;
- supporting young coders at home;
- safe AI use at home;
- AI ethics;
- inclusive AI classrooms;
- Python as a first language; and
- Black youth in Canadian STEM.

### Why this content can improve SEO

The articles create a focused topic cluster. Search engines can see that the site repeatedly and deeply covers:

```text
children + Python + AI literacy + responsible use + parents + educators + Canada
```

This is stronger than publishing unrelated articles for traffic.

### Quality and trust signals in the articles

The article system includes:

- one clear page heading;
- meaningful section headings;
- readable paragraphs and lists;
- published and updated dates;
- an organization byline linked to the About page;
- article and breadcrumb structured data;
- takeaways near the top;
- source links for factual claims where used;
- internal links back to lessons or the program; and
- a consistent call to action.

Several articles were revised to replace questionable statistics with links to primary or authoritative sources. That is especially important for education, safety, and Canadian social data.

### Fresh recurring content

AI Story Club adds a new-content format with:

- a focused landing page;
- one published story at a time;
- upcoming stories excluded from the sitemap;
- published story pages added to the sitemap;
- a visible release schedule; and
- links from the home page, header, and footer.

Freshness is valuable when it represents genuinely new, useful content. Simply changing a date without changing content should not be copied.

## 13. Internal linking and site structure

Internal links help visitors navigate and help search engines discover and understand pages.

The app uses descriptive links in several places.

### Header

The main navigation links to:

- About;
- Blog;
- Pricing;
- Story Club;
- course pages;
- learning tools;
- FAQ;
- Contact;
- Careers; and
- the free-first-class flow.

The navigation includes direct links to individual course pages rather than hiding every course behind a client-side filter.

### Footer

The footer repeats important links under clear groups. In particular, it links to:

- lessons;
- Story Club;
- blog;
- About;
- FAQ;
- Contact;
- Careers;
- Privacy; and
- Terms.

The careers anchor text is “Become an Instructor,” which is more descriptive than “Click here.”

### Content links

Blog articles link back to program and lesson pages. Course pages link to the inquiry flow. The careers page links directly to the application page, and the application page links back to the role details.

This creates understandable paths such as:

```text
Google -> Blog article -> Program inquiry -> Booking form
Google -> Careers page -> Instructor application
Google -> Course page -> Program inquiry
```

## 14. The careers SEO implementation

The careers route is especially relevant because instructor applications have increased.

### 14.1 Careers page metadata

The careers page uses:

```text
Title: Careers: Coding Instructor — Kids Learn AI
```

Its description explains that the position is:

- part-time;
- remote;
- for teaching live Python and AI classes;
- focused on children ages 9–13;
- suitable for university STEM students; and
- available with flexible evening hours.

It also receives a canonical URL, index/follow instruction, social metadata, and an official author/publisher through the shared helper.

### 14.2 Visible job content

The page contains crawlable text for:

- role title;
- part-time and remote status;
- schedule;
- class size;
- responsibilities;
- requirements;
- preferred experience;
- benefits;
- training and support; and
- application action.

This is substantially better than displaying only a short card or putting the job details inside an image or downloadable PDF.

### 14.3 Discovery paths

The careers page is discoverable through:

- the XML sitemap;
- the site header;
- the site footer;
- the canonical URL;
- the application page's back link; and
- ordinary crawlable HTML.

The application page is also in the sitemap and has its own application-focused title and description.

### 14.4 Why applications may have increased

The most likely reasons are:

1. Search engines can now discover the careers URLs through the sitemap and internal links.
2. The title closely matches “coding instructor” searches.
3. The description includes remote, part-time, Python, AI, and student-related terms.
4. The page has enough detailed text to match several job-search variations.
5. The application button is prominent and leads to an on-site form.
6. Increased visibility from blog and course content may also create more branded searches and direct exploration of the site.

### 14.5 Careers SEO gaps to be aware of

These items are not currently implemented:

- no `JobPosting` JSON-LD;
- no Google Analytics event after a successful instructor application;
- no first-touch campaign attribution stored with instructor applications; and
- no dedicated job-application thank-you URL.

There is also a content inconsistency to correct before copying this page:

- the SEO description mentions Tuesday and/or Thursday evenings;
- the visible schedule currently lists Monday and Wednesday.

Search metadata and visible job details should always agree.

## 15. Clear, consistent market positioning

The reusable positioning lives in [`lib/marketing/positioning.ts`](../lib/marketing/positioning.ts).

It centralizes:

- the main parent-facing promise;
- the main headline;
- supporting copy; and
- the free-first-class call to action.

The same core wording appears across:

- homepage metadata;
- homepage heading;
- About metadata;
- inquiry pages;
- pricing;
- footer;
- manifest; and
- social image.

This consistency helps users understand the offer immediately and prevents different pages from describing the same service in conflicting ways.

It also targets a specific niche:

```text
live online + Python + responsible AI + Canadian kids + ages 9–13
```

When adapting this system, create a new promise for each app. Do not reuse the Kids Learn AI wording unless the other app serves the same audience and provides the same service.

## 16. Semantic HTML and readable page structure

The public pages generally use meaningful HTML elements:

- `<main>` for primary page content;
- `<article>` for articles;
- `<header>` for article introductions;
- `<section>` for topic groups;
- one descriptive `<h1>` for the main topic;
- `<h2>` and `<h3>` for subsections;
- `<time>` with machine-readable dates; and
- descriptive link text.

This helps accessibility and helps search engines understand the content hierarchy.

Search engines should not have to infer the main topic from decorative cards. The main topic should appear in real text and in the page's main heading.

## 17. Images, icons, fonts, and performance

The app widely uses Next.js `Image` for public images. This provides responsive image delivery, appropriate sizing, and lazy loading where applicable. Important images have descriptive alternative text.

The app also includes:

- multiple favicon formats;
- Apple touch icon;
- 192 × 192 and 512 × 512 web app icons;
- a generated 1200 × 630 social image;
- Geist Sans and Geist Mono fonts; and
- a web app manifest with name, description, colors, icons, and `en-CA` language.

Performance matters because slow, unstable pages create a poor user experience. The root layout includes:

- Vercel Analytics; and
- Vercel Speed Insights.

Speed Insights helps detect Core Web Vitals problems. It does not fix performance automatically; it provides measurement that should guide fixes.

## 18. Analytics and conversion measurement

Measurement code does not directly improve search ranking. It helps determine whether SEO work produces useful business results.

### 18.1 Google Analytics

Google Analytics is loaded through the official Next.js third-party component only when `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` is available.

Tracked events currently include:

- `trial_cta_click` for important free-class links;
- `generate_lead` after a successful program inquiry;
- `sign_up`; and
- `login`.

The tracking intentionally avoids sending names, emails, or form content to Google Analytics.

### 18.2 Vercel Analytics

Vercel Analytics is loaded site-wide and provides another view of page visits.

### 18.3 Campaign attribution

The app records first-touch attribution for program inquiries for up to 90 days.

It captures:

- `utm_source`;
- `utm_medium`;
- `utm_campaign`;
- `utm_content`;
- `utm_term`;
- first landing page;
- referrer; and
- partner code.

The data is validated, length-limited, and saved with the inquiry. This helps answer questions such as:

- Did the lead arrive from Google, a partner, social media, or an ad?
- Which page first brought the visitor to the site?
- Which campaign produced the inquiry?

This attribution currently applies to course inquiries, not instructor applications.

## 19. Search Console and Bing verification

The root metadata can output verification tags for:

- Google Search Console; and
- Bing Webmaster Tools.

Verification does not improve ranking by itself. It gives the site owner access to important reports and tools.

For each app, use these tools to:

1. submit the sitemap;
2. inspect important URLs;
3. confirm that canonical URLs are accepted;
4. find indexing errors;
5. review search queries and landing pages;
6. request indexing after meaningful changes; and
7. monitor Core Web Vitals and rich-result errors.

## 20. `llms.txt` and AI visibility

The file [`public/llms.txt`](../public/llms.txt) gives AI systems a concise description of the site and links to important pages.

It includes:

- a short organization summary;
- primary public pages;
- editorial authorship information;
- privacy and terms links;
- the sitemap; and
- a statement that authenticated areas should not be indexed or summarized.

This may help AI crawlers understand the site, but it is not a standard Google ranking factor and there is no guarantee that an AI service will use it. Treat it as a helpful discovery file, not a replacement for normal SEO, structured data, or a sitemap.

## 21. Trust, safety, and organization signals

The app provides several signals that can make the site more understandable and trustworthy:

- an About page with a visible founder;
- founder `Person` structured data;
- organization name, email, phone number, and address;
- a clear educational mission;
- authorship on articles;
- publication and update dates;
- source links for factual claims;
- Privacy Policy;
- Terms of Service;
- child and family safety information; and
- consistent contact links.

These are particularly important for an education service involving children. Trust content should be accurate and verifiable; it should never be invented merely for SEO.

## 22. What should be copied into another app?

Copy the system and process, not the Kids Learn AI words.

### Essential pieces to replicate

1. One production site URL constant.
2. A reusable absolute-URL helper.
3. A reusable public metadata helper.
4. A reusable private `noindex` configuration.
5. A root metadata configuration.
6. Unique metadata for every important public page.
7. Canonical URLs on public pages.
8. One consistent domain redirect.
9. A generated `robots.txt`.
10. A generated sitemap containing every valuable public page.
11. Structured data that matches the real page content.
12. An Open Graph image sized 1200 × 630.
13. Search Console and Bing verification.
14. Descriptive headings and crawlable page text.
15. Internal links from header, footer, and related content.
16. Useful articles around one coherent topic cluster.
17. Honest author, source, publication, and update information.
18. Analytics and conversion events that exclude personal data.
19. Campaign attribution for important lead forms.
20. Tests for sitemap completeness and metadata helpers.

### Information that must be changed for each app

- site name;
- canonical domain;
- descriptions;
- audience;
- location;
- service or product;
- author and publisher;
- organization logo;
- contact details;
- social image;
- course or product schema;
- sitemap routes;
- private routes;
- Analytics ID;
- Search Console verification;
- Bing verification; and
- calls to action.

## 23. Step-by-step implementation pattern for another Next.js app

### Step 1: Write one clear positioning sentence

Use this simple formula:

```text
[What you provide] for [specific audience] in [location or market], with [important differentiator].
```

Example structure:

```text
Online bookkeeping tools for independent Canadian contractors, with simple tax-category guidance and monthly reports.
```

The sentence must be true, specific, and useful. Use it as the basis for the home description and visible homepage copy.

### Step 2: Create the central SEO helper

Create a file similar to `lib/seo.ts` containing:

- `SITE_NAME`;
- `SITE_URL`;
- `SITE_DESCRIPTION`;
- `ORGANIZATION_AUTHOR`;
- `SOCIAL_IMAGE_PATH`;
- `absoluteUrl()`;
- `publicMetadata()`; and
- `privateMetadata`.

Keep route-specific wording outside the helper. The helper should enforce technical consistency, not make every page use the same title.

### Step 3: Configure the root layout

Set:

- `metadataBase`;
- default title and description;
- icons;
- manifest;
- search-engine verification;
- website language;
- organization structured data; and
- website structured data.

### Step 4: Add metadata to each public page

For each important route, write:

- one unique title;
- one accurate description;
- the exact canonical path; and
- the correct page type.

For database-driven pages, use `generateMetadata()` and real database content.

### Step 5: Mark private pages `noindex`

Apply private metadata and, for important private route groups, an `X-Robots-Tag` header.

Do not put private URLs in the sitemap.

### Step 6: Add the canonical-domain redirect

Redirect the unused domain variation to the chosen official domain with a permanent redirect.

Also redirect or canonicalize old URLs if a page path changes.

### Step 7: Generate `robots.txt`

Allow public documents, block API/auth endpoints, and include the full sitemap URL.

Use `noindex` for private document pages instead of relying only on `robots.txt`.

### Step 8: Generate the sitemap

Include:

- high-value static pages;
- valid dynamic product, course, job, or article pages; and
- real modification dates when available.

Exclude:

- admin routes;
- account pages;
- API routes;
- incomplete drafts;
- internal search-result pages;
- duplicate URLs; and
- URLs that redirect elsewhere.

### Step 9: Add matching structured data

Choose schema based on the real content:

- `Organization` or a more specific organization type;
- `WebSite`;
- `Person`;
- `Article` or `BlogPosting`;
- `Course`;
- `Product`;
- `SoftwareApplication`;
- `JobPosting`;
- `FAQPage`; or
- `BreadcrumbList`.

Do not add schema for information users cannot see on the page. Structured data must match the visible content.

### Step 10: Build a useful content cluster

Start from customer questions, not search-volume numbers alone.

Create articles that:

- answer one clear question;
- support the app's main topic;
- use original examples;
- cite reliable sources when making factual claims;
- link to related content;
- link to the relevant product or conversion page; and
- show accurate author and date information.

### Step 11: Improve internal links

Make every important page reachable through normal links.

Use descriptive anchor text such as:

```text
Apply for the remote coding instructor role
```

instead of:

```text
Click here
```

### Step 12: Add measurement

Track:

- organic landing pages;
- important CTA clicks;
- successful lead submissions;
- successful applications or purchases;
- sign-ups; and
- the original campaign, landing page, and referrer.

Never send names, email addresses, children's details, resume contents, or other personal data to ordinary analytics events.

### Step 13: Verify the production output

After deployment, check:

- the page source contains the title and description;
- the canonical URL is correct;
- Open Graph URLs are absolute;
- the social image loads;
- `robots.txt` loads;
- `sitemap.xml` loads;
- private pages return `noindex`;
- the non-canonical domain redirects;
- structured data passes validation;
- there are no duplicate sitemap URLs; and
- Analytics events fire once, without personal data.

## 24. A reusable page checklist

Use this checklist whenever adding a public page.

- [ ] The page answers a real user need.
- [ ] The URL is short and descriptive.
- [ ] The page has one clear `<h1>`.
- [ ] The title is unique and accurately describes the page.
- [ ] The description is unique and encourages the right visitor to click.
- [ ] The canonical URL points to the official production domain.
- [ ] The page is set to `index, follow` only if it should appear in search.
- [ ] The page is included in the sitemap if it has lasting public value.
- [ ] The page has useful, crawlable text.
- [ ] Headings are ordered logically.
- [ ] Images have meaningful alternative text.
- [ ] Important images have correct dimensions and responsive sizing.
- [ ] The page has links from at least one relevant existing page.
- [ ] It links to related content where helpful.
- [ ] Structured data matches the visible content.
- [ ] Social sharing metadata is correct.
- [ ] Any dates are real.
- [ ] Any factual claims are supportable.
- [ ] The primary conversion action is clear.
- [ ] The conversion can be measured without collecting personal data in analytics.

## 25. A reusable release checklist

- [ ] Run the build successfully.
- [ ] Run SEO and sitemap tests.
- [ ] Open the production page on mobile and desktop.
- [ ] Inspect the canonical URL.
- [ ] Inspect the `X-Robots-Tag` on private routes.
- [ ] Confirm the sitemap contains the new page exactly once.
- [ ] Confirm draft or private pages are absent from the sitemap.
- [ ] Test the social preview image.
- [ ] Validate JSON-LD.
- [ ] Submit or re-submit the sitemap in Search Console if needed.
- [ ] Inspect the new URL in Search Console.
- [ ] Request indexing after a meaningful launch or update.
- [ ] Add an annotation to the reporting timeline with the release date.
- [ ] Review impressions, clicks, rankings, landing pages, and conversions after release.

## 26. Current gaps and sensible next improvements

These are not part of the current implementation, but they are the clearest opportunities.

### High priority for the instructor posting

1. Add valid `JobPosting` structured data that exactly matches the visible role.
2. Include real employment type, remote-location rules, organization, posting date, expiry date, qualifications, responsibilities, and application URL.
3. Add compensation only if it can be stated accurately and is visible on the page.
4. Remove or expire the posting when the position closes.
5. Track a privacy-safe `instructor_application_submit` event after successful submission.
6. Store first-touch landing page, referrer, and UTM data with the application.
7. Correct the Tuesday/Thursday versus Monday/Wednesday schedule inconsistency.

### Other useful improvements

1. Add `FAQPage` structured data if the visible FAQ content meets current search-engine rules.
2. Add article and breadcrumb structured data to published Story Club pages.
3. Add breadcrumbs to course pages.
4. Add automated tests that inspect the main public pages for unique titles, canonical URLs, and accidental `noindex`.
5. Add an SEO regression test that compares sitemap routes with public route definitions.
6. Create dedicated social images for especially important pages or articles where the shared image is too generic.

These improvements should be treated as separate work. They should not obscure the fact that the existing implementation is already broad and technically sound.

## 27. What not to copy

Avoid these common mistakes:

- Do not copy Kids Learn AI titles into an unrelated app.
- Do not place every possible keyword into one title.
- Do not create many thin pages that say almost the same thing.
- Do not publish fake author names, dates, reviews, statistics, or addresses.
- Do not update `lastModified` on every deployment when content did not change.
- Do not add structured data that is not visible on the page.
- Do not put private pages in the sitemap.
- Do not block a private page in `robots.txt` and assume that alone removes it from search.
- Do not use preview or localhost URLs as canonical URLs.
- Do not send personal form data to Google Analytics.
- Do not assume `llms.txt`, a web manifest, or Analytics automatically improves ranking.
- Do not measure success only by visits; measure qualified leads, applications, purchases, or other real outcomes.

## 28. How to identify exactly which SEO work is producing results

Use this simple reporting process every week.

### In Google Search Console

1. Open Performance -> Search results.
2. Compare the most recent period with the previous period.
3. Review pages with the largest increase in impressions.
4. Review queries that led to `/careers` and `/careers/apply`.
5. Separate branded queries containing “Kids Learn AI” from non-branded queries.
6. Check whether clicks increased because of higher rankings, more impressions, or a better click-through rate.
7. Review indexing and canonical status for the most important pages.

### In Google Analytics

1. Filter landing pages to organic search traffic.
2. Review visits starting on blog, course, careers, and inquiry pages.
3. Measure movement from landing page to conversion page.
4. Compare `trial_cta_click` and `generate_lead` over time.
5. Add an instructor-application success event before judging the job funnel precisely.

### In the application data

Until application attribution is implemented, add a simple, optional “How did you hear about this role?” field or implement the same privacy-safe attribution system used by program inquiries.

The final report should answer:

```text
Which search query -> which landing page -> which action -> which completed conversion?
```

That is how to turn an encouraging SEO result into a repeatable growth process.

## 29. File reference

| File | Purpose |
| --- | --- |
| [`lib/seo.ts`](../lib/seo.ts) | Central URL, metadata, robots, social, and course-description helpers |
| [`lib/marketing/positioning.ts`](../lib/marketing/positioning.ts) | Consistent audience, offer, headline, and CTA wording |
| [`app/layout.tsx`](../app/layout.tsx) | Root metadata, verification, organization schema, website schema, and analytics |
| [`app/robots.ts`](../app/robots.ts) | Crawl rules and sitemap location |
| [`app/sitemap.ts`](../app/sitemap.ts) | Public pages, courses, articles, and published stories |
| [`app/opengraph-image.tsx`](../app/opengraph-image.tsx) | Generated 1200 × 630 social sharing image |
| [`app/manifest.ts`](../app/manifest.ts) | Web app name, description, language, colors, and icons |
| [`components/seo/json-ld.tsx`](../components/seo/json-ld.tsx) | Safe JSON-LD renderer |
| [`components/seo/article-seo.tsx`](../components/seo/article-seo.tsx) | BlogPosting, breadcrumbs, byline, and dates |
| [`app/lessons/[course]/page.tsx`](../app/lessons/[course]/page.tsx) | Database-backed metadata and Course schema |
| [`app/careers/page.tsx`](../app/careers/page.tsx) | Crawlable instructor job content and job-focused metadata |
| [`app/careers/apply/page.tsx`](../app/careers/apply/page.tsx) | Application-focused metadata and form route |
| [`app/blog/blog-posts.ts`](../app/blog/blog-posts.ts) | Article index, dates, categories, and search descriptions |
| [`lib/blog/expanded-articles.ts`](../lib/blog/expanded-articles.ts) | Twelve expanded search-focused articles |
| [`components/layouts/footer.tsx`](../components/layouts/footer.tsx) | Site-wide internal links and consistent positioning |
| [`components/site-header.tsx`](../components/site-header.tsx) | Main navigation and direct links to courses and careers |
| [`components/analytics/google-analytics-events.tsx`](../components/analytics/google-analytics-events.tsx) | CTA, login, and sign-up measurement |
| [`lib/marketing/campaign-attribution.ts`](../lib/marketing/campaign-attribution.ts) | Validated UTM, landing-page, referrer, and partner attribution |
| [`public/llms.txt`](../public/llms.txt) | Concise AI-crawler site description and important links |
| [`next.config.mjs`](../next.config.mjs) | Canonical-domain redirect and private-page `X-Robots-Tag` headers |
| [`tests/unit/lib/seo.test.ts`](../tests/unit/lib/seo.test.ts) | Course-description SEO tests |
| [`tests/unit/lib/sitemap.test.ts`](../tests/unit/lib/sitemap.test.ts) | Sitemap coverage, uniqueness, and date tests |

## 30. Final takeaway

The SEO improvement is most likely the result of a complete system, not a single metadata field.

Kids Learn AI now does four things particularly well:

1. It tells search engines exactly what each important page is about.
2. It publishes a growing library of genuinely related, useful content.
3. It makes public pages easy to discover while keeping private pages out of search.
4. It clearly moves the right visitor from information to inquiry or application.

Replicate those four principles in the other apps, change all audience- and product-specific information, and measure the full path from search query to completed conversion.
