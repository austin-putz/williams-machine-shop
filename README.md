# Williams Machine Shop, Inc.

Modern website for Williams Machine Shop, Inc. - a full-service steel fabrication and machining shop in Lacona, Iowa.

## About

This is a static Next.js website featuring:
- Responsive design with Tailwind CSS
- 7 main pages (Home, What We Do, Products, Our Work, Contact, Apply, About)
- SEO-optimized
- Mobile-friendly navigation

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Static Export

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

### GitHub Pages

The site is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. Push your code to GitHub
2. Go to Settings > Pages
3. Set Source to "GitHub Actions"
4. The workflow will automatically deploy on push to main branch

The site will be available at: `https://[username].github.io/williams-machine-shop/`

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/williams-machine-shop)

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and deploy

Or manually:
```bash
npm install -g vercel
vercel
```

### Custom Hosting

The built site is located in the `out` directory after running `npm run build`. You can:
1. Upload the contents of the `out` folder to any static hosting service
2. Use services like Netlify, Cloudflare Pages, or AWS S3

## Project Structure

```
williams-machine-shop/
├── app/                  # Next.js App Router pages
│   ├── about/           # About Us page
│   ├── apply/           # Apply With Us page
│   ├── contact/         # Contact Us page
│   ├── our-work/        # Our Work page
│   ├── products/        # Products page
│   ├── what-we-do/      # What We Do page
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   └── layout/         # Layout components
│       ├── Header.tsx   # Navigation header
│       └── Footer.tsx   # Footer
├── public/             # Static assets
└── CLAUDE.md          # Development guide
```

## Features

- **Responsive Design**: Mobile-first design that works on all devices
- **SEO Optimized**: Meta tags and semantic HTML for better search rankings
- **Fast Performance**: Static generation for optimal loading times
- **Accessible**: WCAG compliant navigation and content structure
- **Modern Stack**: Built with the latest web technologies

## Contact

Williams Machine Shop, Inc.
- Address: 21563 G76 Highway, Lacona, Iowa 50139
- Phone: 641-534-3030
- Email: orders@williamsmachineshop.com
- Facebook: [williamsmachineshop](https://www.facebook.com/williamsmachineshop)
- YouTube: [Williams Machine Shop Channel](https://www.youtube.com/channel/UCkD7P_BjyisZ99bQD00TyXw)

## License

Copyright © 2025 Williams Machine Shop, Inc. All rights reserved.
