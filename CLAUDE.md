# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an astrology blog website with a neo-brutalist design, built with Astro. The site presents astrological content with humor under the pseudonym "Psicóloga em Outra Dimensão" (Psychologist in Another Dimension) - but it's actually about astrology and zodiac signs, not psychology.

## Architecture

**Framework:** Astro 5.13.2 (Static Site Generator)
**Styling:** UnoCSS + Custom Brutal CSS
**Content:** Markdown files in `src/content/blog/`
**Package Manager:** pnpm

## Commands

| Command | Action |
|---------|---------|
| `pnpm dev` | Start development server at localhost:4321 |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |

## Directory Structure

```
src/
├── components/          # Reusable UI components
├── content/
│   └── blog/           # Astrology blog posts (Markdown)
├── layouts/            # Page layouts (Default.astro, BlogPost.astro)
├── pages/              # Route pages
│   ├── admin.astro     # Custom blog admin panel
│   ├── admin/          # Admin functionality
│   ├── blog/           # Blog routing
│   └── mapa-astral.astro # Astro chart form
├── styles/             # Global CSS and brutal styles
└── data/               # Site data
```

## Content Management

**Schema Location:** `src/content/config.ts`
**Content Type:** Astrology blog posts with metadata for zodiac signs, astrological aspects, etc.

**Custom Admin Panel:**
- Access via `/admin` for blog management
- Creates downloadable Markdown files
- Manual file placement in `src/content/blog/`

## Design System

**Neo-Brutalist Theme with Astrology Colors:**
- Primary: `#4CA6DF` (Trust/Calm blue)
- Secondary: `#BFFF00` (Hope/Growth lime)
- Accent: `#FF6B00` (Energy/Motivation orange)
- Tertiary: `#EE99B8` (Empathy/Connection pink)
- Deep: `#5E18EB` (Depth/Mystical purple)

**Key Components:**
- `.brutal-card` - Drop shadow cards
- `.brutal-button` - Bold interactive buttons
- Space Grotesk + Inter fonts

## Content Theme

**Important:** The site is about astrology and zodiac signs, presented humorously under a "psychologist" pseudonym. Content should focus on:
- Zodiac sign characteristics and stereotypes
- Astrological humor and jokes
- Horoscopes and star sign compatibility
- Astrological "advice" with comedic tone

## TypeScript Configuration

- Strict mode enabled
- Path aliases: `@components/*`, `@layouts/*`, `@pages/*`
- Import paths should use these aliases

## Development Notes

- Use UnoCSS utility classes for styling
- Follow existing brutal design patterns
- Content Collections with Zod validation
- Static site generation for performance
- All astrology content should maintain the humorous, non-serious tone