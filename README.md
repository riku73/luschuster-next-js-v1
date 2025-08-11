# Luschuster Communications SA - Website

Modern, responsive website for Luschuster Communications SA built with Next.js 15, TypeScript, and Tailwind CSS.

## Overview

This website showcases Luschuster Communications SA, a Luxembourg-based telecommunications company established in 1988. The site features a modern design with full responsiveness, SEO optimization, and professional presentation of their telecommunications services.

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Performance**: Optimized for Core Web Vitals
- **SEO**: Built-in sitemap, robots.txt, and structured metadata

## Features

### 🏠 Homepage
- Hero section with compelling value proposition
- Services overview with modern card design
- Company credibility indicators
- Multi-step process explanation
- Call-to-action sections

### 🔧 Services Pages
- Comprehensive service descriptions
- Interactive service cards
- Detailed process workflow
- Certification highlights

### 📖 About Page
- Company history timeline
- Team presentation
- Certifications and partnerships
- Company values and mission

### 📞 Contact Page
- Interactive contact form
- Multiple contact methods
- FAQ section
- Map integration placeholder

### 💼 Quote Request
- Multi-step form with progress indicator
- Form validation
- File upload capability
- GDPR compliance

### ⚡ Performance Features
- Next.js Image optimization
- Automatic code splitting
- SEO-optimized metadata
- PWA-ready manifest
- Security headers
- Compressed assets

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page  
│   ├── quote/             # Quote request form
│   ├── services/          # Services pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # SEO sitemap
│   ├── robots.ts          # SEO robots.txt
│   └── manifest.ts        # PWA manifest
└── components/
    ├── ui/                # shadcn/ui components
    └── layout/            # Layout components
        ├── Header.tsx     # Navigation header
        └── Footer.tsx     # Site footer
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd luschuster-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or  
pnpm install
```

3. Run development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Brand Colors
The site uses a professional color scheme:
- **Primary Blue**: `#1e3a8a` (blue-900)
- **Accent Orange**: `#f97316` (orange-500) 
- **Gray Scale**: Various gray shades for text and backgrounds

### Content Updates
- Edit page content in respective `page.tsx` files
- Update company information in `src/components/layout/Footer.tsx`
- Modify navigation in `src/components/layout/Header.tsx`

### Styling
- Global styles: `src/app/globals.css`
- Component styles: Tailwind CSS classes
- Custom components: shadcn/ui based

## SEO Optimization

The site includes comprehensive SEO features:

- **Metadata**: Optimized titles, descriptions, and Open Graph tags
- **Sitemap**: Automatically generated XML sitemap
- **Robots.txt**: Search engine crawler instructions
- **Structured Data**: Schema.org markup ready
- **Performance**: Optimized Core Web Vitals
- **Accessibility**: WCAG compliant components

## Performance Features

- **Image Optimization**: Next.js Image with WebP/AVIF support
- **Code Splitting**: Automatic route-based splitting
- **Compression**: Gzip/Brotli compression enabled
- **Caching**: Optimized cache headers
- **Bundle Analysis**: Built-in bundle analyzer

## Form Handling

The contact and quote forms include:
- Client-side validation
- TypeScript type safety
- File upload support
- GDPR compliance features
- Success/error states

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Deployment

### Vercel (Recommended)
1. Push to GitHub/GitLab/Bitbucket
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify  
- Traditional hosting with Node.js

### Environment Variables
Create `.env.local` for environment-specific variables:
```bash
NEXT_PUBLIC_SITE_URL=https://luschuster.lu
# Add other variables as needed
```

## Development Guidelines

### Code Style
- TypeScript strict mode enabled
- ESLint configuration included
- Consistent component patterns
- Mobile-first responsive design

### Component Structure
- Functional components with hooks
- TypeScript interfaces for props
- Reusable UI components via shadcn/ui
- Accessibility best practices

### Performance Best Practices
- Image optimization with next/image
- Lazy loading for components
- Minimal client-side JavaScript
- Efficient CSS with Tailwind

## Support & Maintenance

For issues, updates, or customizations:
1. Check the documentation
2. Review existing components
3. Follow established patterns
4. Test responsive design
5. Validate performance metrics

## License

This project is built for Luschuster Communications SA. All rights reserved.

## Credits

- **Framework**: [Next.js](https://nextjs.org/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)