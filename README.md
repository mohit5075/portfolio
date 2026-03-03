# Mohit Kumar Goyal — Portfolio

A modern, premium, recruiter-focused portfolio website built with **Next.js 16**, **Tailwind CSS v4**, **Framer Motion**, and **TypeScript**.

## Features

- ✅ Dark / Light mode toggle with system preference detection
- ✅ Smooth scroll navigation with active section highlighting
- ✅ Fully responsive (mobile-first design)
- ✅ Subtle animations (fade-in on scroll, smooth transitions)
- ✅ SEO optimized with Open Graph & Twitter meta tags
- ✅ Clean component architecture
- ✅ Vercel deployment ready

## Tech Stack

| Layer       | Technology                        |
|------------|-----------------------------------|
| Framework  | Next.js 16 (App Router)           |
| Styling    | Tailwind CSS v4                   |
| Animations | Framer Motion                     |
| Icons      | Lucide React                      |
| Language   | TypeScript                        |
| Deployment | Vercel                            |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind theme & global styles
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Main page composing all sections
├── components/
│   ├── ThemeProvider.tsx     # Dark/light mode context
│   ├── AnimateOnScroll.tsx   # Reusable scroll animation wrapper
│   ├── Navbar.tsx            # Sticky navigation bar
│   ├── Hero.tsx              # Hero section with CTA
│   ├── About.tsx             # About me section
│   ├── Experience.tsx        # Work experience timeline
│   ├── Projects.tsx          # Project cards grid
│   ├── Skills.tsx            # Categorized skills
│   ├── Achievements.tsx      # Competitive exam rankings
│   ├── Education.tsx         # Education details
│   ├── Contact.tsx           # Contact links & email CTA
│   └── Footer.tsx            # Footer with social links
public/
├── favicon.svg              # Site favicon
└── resume.pdf               # Resume download (replace with actual PDF)
```

## Customization

- **Resume**: Replace `public/resume.pdf` with your actual resume PDF
- **Social Links**: Update URLs in `Navbar.tsx`, `Contact.tsx`, and `Footer.tsx`
- **Email**: Update email address in `Contact.tsx`
- **Content**: Edit any component in `src/components/` to update text

## Deploy to Vercel

```bash
npx vercel
```

Or connect your GitHub repository to [Vercel](https://vercel.com) for automatic deployments.
