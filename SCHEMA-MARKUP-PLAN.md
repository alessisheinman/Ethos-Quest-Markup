# Schema markup plan (ETHOS-13)

A mock-up of how EthosQuest could become more readable to search engines and AI assistants. Nothing here is implemented yet.

## What schema markup is

A small block of labeled facts placed in each page's HTML, written in a shared vocabulary from [schema.org](https://schema.org). Visitors never see it. Google, Bing, and AI assistants (ChatGPT, Perplexity, Gemini) read it to understand *who* the company is, *who* the coaches are, *what* they are certified in, and *what* questions a page answers. It can earn richer search results (FAQ dropdowns, company info panels) and makes it more likely an AI assistant describes EthosQuest accurately.

It is added as a `<script type="application/ld+json">` tag, the same way the Who We Serve pages already include their FAQs.

## Current state

| Item | Status |
|---|---|
| FAQ markup on the 5 Who We Serve pages | Done (ETHOS-9) |
| Company, coaches, credentials, services | Missing |
| `sitemap.xml` and `robots.txt` | Missing |
| Unique description per page | Coach, Our Coaches and Who We Serve pages have their own; 6 pages (Methodology, For Leaders, FAQ, About, Private Inquiry, Privacy) have none |

## Proposed markup, page by page

| Page | Schema types | What it tells search engines |
|---|---|---|
| Every page (site-wide) | `Organization` (as `ProfessionalService`), `WebSite` | Company name, logo, contact, where it operates, social profiles |
| Coach pages (×3) | `Person` with `hasCredential` | Each coach's role, credentials (ICF levels, degrees, license), affiliations |
| Our Coaches | `ItemList` of `Person` | The roster of coaches |
| FAQ | `FAQPage` | All 16 questions and answers |
| For Leaders, The Methodology | `Service` | Executive coaching for senior leaders, provided by EthosQuest |
| Who We Serve (×5) | `Service` + existing `FAQPage` | The service as it applies to each audience |
| About | `AboutPage` | Ties the page to the organization and its leadership |
| Private Inquiry | `ContactPage` | How to reach EthosQuest |
| Every page except home | `BreadcrumbList` | Where the page sits in the site (Home › Our Coaches › Séverine Jourdain) |

## Mock-ups

Values come from the current site. Items marked `TODO` need confirmation first (see Open questions).

### 1. The company (every page)

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.ethosquest.com/#organization",
  "name": "EthosQuest",
  "url": "https://www.ethosquest.com",
  "logo": "https://www.ethosquest.com/brand/logos/ethos_quest-primary-2026-06-23.png",
  "description": "Human-led executive coaching for senior leaders navigating complexity, transitions, and high-stakes decisions.",
  "email": "hello@ethosquest.com",
  "telephone": "TODO: 212 number (ETHOS-8)",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "TODO: Wall Street address (ETHOS-8)",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "addressCountry": "US"
  },
  "areaServed": "Worldwide",
  "knowsAbout": ["Executive coaching", "Leadership development", "CEO coaching", "Family business leadership", "Succession"],
  "sameAs": ["TODO: https://www.linkedin.com/company/ethosquest"],
  "member": [
    { "@id": "https://www.ethosquest.com/coaches/bassel-hamwi#person" },
    { "@id": "https://www.ethosquest.com/coaches/severine-jourdain#person" },
    { "@id": "https://www.ethosquest.com/coaches/andrea-milwidsky#person" }
  ]
}
```

### 2. A coach and their credentials (Séverine Jourdain)

The core of ETHOS-13: each credential becomes a labeled, machine-readable fact.

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.ethosquest.com/coaches/severine-jourdain#person",
  "name": "Séverine Jourdain",
  "jobTitle": "Executive & Leadership Coach",
  "url": "https://www.ethosquest.com/coaches/severine-jourdain",
  "image": "TODO: a self-hosted headshot URL (the site currently links IMD's copy)",
  "worksFor": { "@id": "https://www.ethosquest.com/#organization" },
  "knowsAbout": ["Executive leadership", "Leadership teams", "Organizational development"],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Master Certified Coach (MCC)",
      "credentialCategory": "Professional certification",
      "recognizedBy": { "@type": "Organization", "name": "International Coaching Federation", "url": "https://coachingfederation.org" }
    }
  ],
  "affiliation": { "@type": "EducationalOrganization", "name": "IMD Business School", "description": "Co-director, IMD Executive Coaching Certificate" }
}
```

The same pattern for the other coaches:

| Coach | Credentials to mark up |
|---|---|
| Bassel Hamwi | Associate Certified Coach (ACC), ICF · Advanced Certified Personal and Executive Coach, College of Executive Coaching · Certified Professional Coach, College of Executive Coaching · Harvard Business School Executive Education (`alumniOf`) · TODO: degrees (see Open questions) |
| Andrea Milwidsky | MA in Marital and Family Therapy, Phillips Graduate Institute · Licensed Marriage and Family Therapist, California · ICF member (`memberOf`, not a credential) |

### 3. The service (For Leaders, Methodology, Who We Serve)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Executive coaching",
  "name": "Executive coaching for senior leaders",
  "provider": { "@id": "https://www.ethosquest.com/#organization" },
  "audience": { "@type": "BusinessAudience", "audienceType": "Senior leaders: CEOs, founders, fund managers, family business leaders" },
  "areaServed": "Worldwide",
  "description": "One-to-one coaching focused on alignment, not performance: helping leaders make choices coherent with who they are."
}
```

On each Who We Serve page, `audienceType` narrows to that profile (for example "Private equity-backed CEOs"), alongside the FAQ markup already there.

### 4. FAQ page

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is this for?",
      "acceptedAnswer": { "@type": "Answer", "text": "EthosQuest works exclusively with senior leaders: CEOs, founders, fund managers, and those who lead family enterprises. …" }
    }
  ]
}
```

All 16 questions would be generated automatically from the FAQ content, so the markup can never drift from what the page shows. ETHOS-12 (rewriting the FAQs as conversational questions) makes this markup more valuable, since AI assistants match questions phrased the way people actually ask them.

### 5. Breadcrumbs (example: a coach page)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ethosquest.com/" },
    { "@type": "ListItem", "position": 2, "name": "Our Coaches", "item": "https://www.ethosquest.com/coaches" },
    { "@type": "ListItem", "position": 3, "name": "Séverine Jourdain" }
  ]
}
```

## Also worth doing (not schema, same goal)

| Item | Why |
|---|---|
| `sitemap.xml` | Lists every page so search engines find all 16, including the Who We Serve landing pages, which are only linked from the home page |
| `robots.txt` | Points crawlers at the sitemap |
| A description for each page | 6 pages have no description of their own, so search engines guess one from the page text |
| Canonical URLs | Tells search engines the one official address for each page (avoids duplicates like `/about` vs `/about/`) |
| `llms.txt` | An emerging plain-text summary that AI assistants can read; a short "who we are and who we serve" file |

## How it would be built

- **One helper file** (`app/ethos/EthosSchema.ts`) that builds each block from data the site already has (`EthosCoaches.ts`, `EthosContent.ts`, `EthosAudiences.ts`), so the markup always matches the visible content.
- **No visible change** to any page.
- **Checked** with Google's [Rich Results Test](https://search.google.com/test/rich-results) and the [Schema Markup Validator](https://validator.schema.org), and covered by the existing page tests.

Rough effort: half a day to a day.

## Open questions before building

1. **Address and 212 number** (ETHOS-8): needed for the company block; can launch without them.
2. **Bassel's title** (Chairperson vs founder) and **his BBA institution** (Texas Wesleyan or University of North Texas): credentials should be exactly right before they are published as structured facts.
3. **Official profile links:** the company's LinkedIn page, and whether each coach's LinkedIn should be listed.
4. **Final domain:** confirm `https://www.ethosquest.com` (with `www`) is the official address.
