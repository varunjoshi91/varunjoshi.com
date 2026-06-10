# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website (varunjoshi.com) built with **Next.js 16** as a static site. It showcases Varun Joshi's professional experience, projects, and skills. The site is deployed to GitHub Pages using a static export configuration.

## Key Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Building
npm run build        # Build static site to ./out directory
npm start            # Start production server (not used for deployment)

# Linting
npm run lint         # Run ESLint on the codebase
```

## Deployment

- **Target**: GitHub Pages
- **Trigger**: Automatic deployment on push to `master` branch
- **Workflow**: `.github/workflows/deploy.yml`
- **Build Output**: `./out` directory (static export)
- The site is configured with `output: "export"` in `next.config.mjs` for static generation

## Architecture

### Static Export Configuration

The project uses Next.js static export mode, meaning:
- No server-side rendering at runtime
- All pages are pre-rendered at build time to static HTML
- Images are unoptimized (`unoptimized: true`) for GitHub Pages compatibility
- Client-side routing works via Next.js `<Link>` components

### Directory Structure

```
src/
├── app/
│   ├── layout.js           # Root layout with metadata and ThemeProvider
│   ├── page.js             # Main page composing all sections
│   ├── globals.css         # Global styles, CSS variables for theming
│   ├── ThemeContext.js     # Client component for dark/light theme management
│   └── page.module.css     # Page-specific styles
└── components/
    ├── Navbar.jsx          # Navigation with theme toggle
    ├── Hero.jsx            # Landing section
    ├── About.jsx           # About section
    ├── Experience.jsx      # Work experience timeline
    ├── Skills.jsx          # Skills categorized by type
    ├── Projects.jsx        # Project cards
    ├── Mentorship.jsx      # Mentorship and teaching info
    ├── Contact.jsx         # Contact form/info
    └── [Component].module.css  # Component-specific CSS modules
```

### Component Patterns

All components follow these conventions:

1. **Client Components**: Components using interactivity (Framer Motion, hooks) are marked with `"use client"`
2. **CSS Modules**: Each component has a paired `.module.css` file for scoped styles
3. **Framer Motion**: Animation library used throughout for scroll-triggered animations
   - `initial`, `whileInView`, `viewport={{ once: true }}` pattern is standard
   - Staggered animations use delay multipliers (e.g., `delay: i * 0.1`)
4. **Icons**: All icons use `lucide-react` package
5. **Global Utility Classes**:
   - `.container` - max-width container
   - `.section` - section spacing
   - `.gradient-text` - gradient text effect
   - `.glass-card` - glassmorphism card style
   - `.btn-primary`, `.btn-secondary` - button styles

### Theme System

- Managed via `ThemeContext.js` (React Context)
- Uses `data-theme` attribute on `<html>` element
- CSS variables defined in `globals.css` respond to `[data-theme="dark"]` and `[data-theme="light"]`
- Theme persisted in localStorage
- Defaults to dark theme with system preference check

### Styling Architecture

- **CSS Variables**: All colors, spacing, and design tokens are CSS custom properties in `globals.css`
- **CSS Modules**: Component-specific styles to prevent naming conflicts
- **Design System**: Premium aesthetic with glassmorphism, gradients, and blur effects
- **Responsive**: Mobile-first approach with breakpoints at 768px and 1024px

## Important Technical Details

### Static Export Limitations

Since this is a static export:
- No API routes or server-side data fetching
- All content is hardcoded in components or imported from local files
- Form submissions must use external services (e.g., Formspree, EmailJS)
- Image optimization is disabled - use appropriately sized images

### Animation Performance

- Framer Motion is used extensively - be mindful of performance
- Animations trigger on scroll using `whileInView` with `viewport={{ once: true }}`
- Avoid adding too many simultaneous animations

### Content Updates

To update portfolio content:
- **Projects**: Edit the `projects` array in `src/components/Projects.jsx`
- **Experience**: Edit the `experiences` array in `src/components/Experience.jsx`
- **Skills**: Edit the `skillCategories` array in `src/components/Skills.jsx`
- **About**: Edit component directly in `src/components/About.jsx`
- **Resume**: Replace `public/resume.pdf`

## ESLint Configuration

- Uses Next.js recommended ESLint config (`eslint-config-next/core-web-vitals`)
- Flat config format (`eslint.config.mjs`)
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`
