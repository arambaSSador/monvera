# MONVERA LLC — Premium Industrial Lubrication Platform

Official distributor website for **COGELSA Industrial Lubricants** in Armenia.

## Features

- **Multilingual**: Armenian (default), Russian, English
- **300+ SEO pages**: Products, industries, equipment, blog, case studies, technical guides
- **Smart Lubricant Finder**: AI-powered product recommendation wizard
- **Advanced Quote System**: Product selection with document uploads
- **Product Comparison**: Side-by-side specification tables
- **AI Chat Assistant**: Intelligent lubrication expert
- **WhatsApp Integration**: Floating button with quick actions
- **Customer Portal**: Future-ready architecture
- **Premium Design**: Dark blue, white, orange accent, glass effects, micro-animations

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- next-intl (i18n)
- Framer Motion
- Lucide Icons

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) (v18+) and Xcode Command Line Tools (macOS):

```bash
xcode-select --install
```

### Installation

```bash
cd ~/Projects/monvera-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — default locale is Russian (`/ru`).

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/[locale]/          # Localized routes
│   ├── page.tsx           # Homepage
│   ├── products/          # Product catalog & detail pages
│   ├── industries/        # Industry landing pages
│   ├── equipment/         # Equipment pages
│   ├── lubricant-finder/  # Smart selector wizard
│   ├── quote/             # Commercial offer request
│   ├── blog/              # Technical blog
│   ├── case-studies/      # Success stories
│   ├── contact/           # Contact & forms
│   └── portal/            # Customer portal
├── components/            # UI components
├── data/                  # Products, industries, content data
├── i18n/                  # Internationalization config
└── lib/                   # SEO, utilities
messages/                  # Translation files (hy, ru, en)
```

## SEO

- Auto-generated sitemap (`/sitemap.xml`)
- robots.txt
- Schema.org structured data (Organization, Product, Article, Breadcrumb)
- OpenGraph & Twitter Cards
- Canonical URLs per locale
- Unique meta titles/descriptions per page

## Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://monvera.am
```

## Deployment

Deploy to Vercel, Netlify, or any Node.js hosting:

```bash
npm run build
```

## License

Proprietary — MONVERA LLC © 2026
