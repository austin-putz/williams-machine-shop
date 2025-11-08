# Williams Machine Shop Website - Development Guide

This document provides comprehensive instructions for working with the Williams Machine Shop website.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Development](#development)
4. [Deployment](#deployment)
5. [Project Structure](#project-structure)
6. [Customization Guide](#customization-guide)
7. [Troubleshooting](#troubleshooting)

## Project Overview

### About the Company

**Williams Machine Shop, Inc.** is a full-service steel fabrication and machining shop located in Lacona, Iowa. Established in 1991 by Troy Williams, the company has grown from a one-person operation to a thriving family-run business operating from a six-acre facility.

### Website Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4
- **Static Site Generation**: Optimized for performance and SEO
- **Responsive Design**: Mobile-first design that works on all devices
- **7 Main Pages**: Home, What We Do, Products, Our Work, Contact, Apply, About
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Social Media Integration**: Links to Facebook and YouTube

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)
- Git (for version control)
- A code editor (VS Code recommended)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd williams-machine-shop
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

### Available Scripts

```bash
# Development server (with hot reload)
npm run dev

# Build for production (creates static export)
npm run build

# Start production server (use after build)
npm start
```

## Development

### Project Structure

```
williams-machine-shop/
├── app/                          # Next.js App Router pages
│   ├── about/                   # About Us page
│   │   └── page.tsx
│   ├── apply/                   # Apply With Us page
│   │   └── page.tsx
│   ├── contact/                 # Contact Us page
│   │   └── page.tsx
│   ├── our-work/                # Our Work portfolio page
│   │   └── page.tsx
│   ├── products/                # Products page
│   │   └── page.tsx
│   ├── what-we-do/             # Services page
│   │   └── page.tsx
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout (Header/Footer wrapper)
│   └── page.tsx                # Home page
├── components/
│   └── layout/
│       ├── Header.tsx          # Navigation header with dropdown
│       └── Footer.tsx          # Footer with social links
├── public/                      # Static assets (images, etc.)
│   └── images/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.js           # PostCSS configuration
├── vercel.json                 # Vercel deployment config
├── package.json                # Dependencies and scripts
├── .gitignore                  # Git ignore rules
├── README.md                   # Project documentation
└── CLAUDE.md                   # This file
```

### Key Files Explained

#### `app/layout.tsx`
The root layout wraps all pages with the Header and Footer components. Contains metadata for SEO.

#### `components/layout/Header.tsx`
Navigation header with:
- Responsive mobile menu
- Dropdown menu for "What We Do" services
- Links to all main pages
- Sticky positioning

#### `components/layout/Footer.tsx`
Footer with:
- Company contact information
- Quick links to all pages
- Social media links (Facebook, YouTube, Email)
- Copyright notice

#### `next.config.js`
Configures Next.js for:
- Static export (`output: 'export'`)
- Unoptimized images (required for static hosting)
- Base path for GitHub Pages

#### `tailwind.config.ts`
Custom theme colors:
- Primary: `#1a365d` (dark blue)
- Accent: `#d69e2e` (gold)

## Deployment

### GitHub Pages

The site is configured for automatic deployment to GitHub Pages.

#### Setup Steps

1. **Push to GitHub**:
```bash
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Configure GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Build and deployment", select Source: "GitHub Actions"
   - The workflow will automatically deploy on push to main

3. **Update basePath** (if needed):
   - If your repository name is NOT "williams-machine-shop", update `next.config.js`:
   ```javascript
   basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
   ```

4. **Access your site**:
   ```
   https://[username].github.io/williams-machine-shop/
   ```

### Vercel (Recommended for Production)

Vercel provides the easiest deployment experience for Next.js sites.

#### Deploy to Vercel

1. **Via Vercel Website**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"

2. **Via Vercel CLI**:
```bash
npm install -g vercel
vercel
```

3. **Custom Domain**:
   - After deployment, go to Project Settings > Domains
   - Add your custom domain (e.g., williamsmachineshop.com)
   - Update DNS records as instructed

#### Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to main (production)
- Create preview deployments for pull requests

### Other Hosting Options

The built site is in the `out/` directory after running `npm run build`.

#### Static Hosting Services

Upload the `out/` folder contents to:
- **Netlify**: Drag and drop or connect GitHub
- **Cloudflare Pages**: Connect GitHub repository
- **AWS S3 + CloudFront**: Upload to S3 bucket
- **Any web server**: Upload via FTP/SSH

#### Traditional Web Hosting

1. Build the site:
```bash
npm run build
```

2. Upload contents of `out/` folder to your web server's public directory

3. Configure web server:
   - Ensure all requests serve `index.html` for their respective routes
   - Enable HTTPS
   - Configure caching headers for optimal performance

## Customization Guide

### Updating Content

#### Company Information

Update contact details in:
- `components/layout/Footer.tsx` (lines 11-19)
- `app/contact/page.tsx` (full contact page)

#### Services

Add or modify services in:
- `app/what-we-do/page.tsx` - Update the `services` array (lines 2-95)
- `components/layout/Header.tsx` - Update dropdown menu items (lines 6-17)
- `app/page.tsx` - Update home page services grid (lines 4-13)

#### Social Media Links

Update in:
- `components/layout/Footer.tsx` (lines 42-69)
- `app/our-work/page.tsx` (lines 92-120)

### Styling

#### Colors

Modify in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: '#1a365d',    // Main brand color
    light: '#2c5282',      // Lighter variant
    dark: '#1a202c',       // Darker variant
  },
  accent: {
    DEFAULT: '#d69e2e',    // Accent color
    light: '#ecc94b',      // Lighter accent
  },
}
```

#### Global Styles

Edit `app/globals.css` for:
- Custom CSS classes
- Typography
- Animations
- Hero section gradient

### Adding New Pages

1. Create new directory in `app/`:
```bash
mkdir -p app/new-page
```

2. Create `page.tsx`:
```typescript
export default function NewPage() {
  return (
    <>
      <section className="bg-primary text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Page Title
          </h1>
        </div>
      </section>
      {/* Add more sections */}
    </>
  );
}
```

3. Add link in `components/layout/Header.tsx` and `Footer.tsx`

### Adding Images

1. Place images in `public/images/`
2. Reference in components:
```typescript
// For regular images
<img src="/images/photo.jpg" alt="Description" />

// Using Next.js Image (note: requires unoptimized for static export)
import Image from 'next/image';
<Image src="/images/photo.jpg" alt="Description" width={800} height={600} />
```

### SEO Optimization

Update metadata in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  keywords: 'keyword1, keyword2',
};
```

For page-specific metadata, add to individual page files:
```typescript
export const metadata = {
  title: 'Page Title | Williams Machine Shop',
  description: 'Page description',
};
```

## Troubleshooting

### Common Issues

#### Build Fails

**Issue**: `Error: Turbopack build failed`

**Solution**:
- Ensure all dependencies are installed: `npm install`
- Clear cache: `rm -rf .next && npm run build`
- Check for TypeScript errors: Look at error output

#### Images Not Loading

**Issue**: Images show broken links

**Solution**:
- Verify images are in `public/images/`
- Check file paths (no leading `/public/`)
- Ensure `images.unoptimized: true` in `next.config.js`

#### GitHub Pages 404

**Issue**: Site loads but pages return 404

**Solution**:
- Verify `basePath` in `next.config.js` matches repo name
- Check that GitHub Actions workflow completed successfully
- Ensure Pages source is set to "GitHub Actions"

#### Styling Not Applied

**Issue**: Tailwind classes not working

**Solution**:
- Check `tailwind.config.ts` content paths
- Verify `@tailwindcss/postcss` is installed
- Clear build cache and rebuild

### Getting Help

If you encounter issues:

1. **Check the error message** - Most errors are descriptive
2. **Search GitHub Issues** - Someone may have solved it
3. **Next.js Documentation** - https://nextjs.org/docs
4. **Tailwind Documentation** - https://tailwindcss.com/docs

## Production Checklist

Before deploying to production:

- [ ] Update all company contact information
- [ ] Test all navigation links
- [ ] Verify all pages are responsive (mobile, tablet, desktop)
- [ ] Check social media links
- [ ] Test contact forms (if added)
- [ ] Optimize images (compress for web)
- [ ] Update meta descriptions for SEO
- [ ] Test build locally: `npm run build`
- [ ] Set up custom domain (if using)
- [ ] Configure SSL/HTTPS
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Submit sitemap to search engines

## Future Enhancements

Consider adding:

- **Contact Form**: Backend integration for inquiries
- **Photo Gallery**: More Our Work examples with lightbox
- **Blog**: Company news and updates
- **Customer Testimonials**: Reviews and feedback
- **Online Quote System**: Request estimates online
- **Job Application Form**: Online application submission
- **Equipment Showcase**: Detailed equipment capabilities
- **Project Case Studies**: In-depth project descriptions

## Support

For questions or assistance with this project:

- Create an issue in the GitHub repository
- Review the Next.js documentation: https://nextjs.org/docs
- Check Tailwind CSS docs: https://tailwindcss.com/docs

---

**Built with [Claude Code](https://claude.com/claude-code)**

Last Updated: November 2025
