# Sanity CMS Setup for Brutal Astrology Blog

This document explains how to set up and use Sanity CMS with your Astro astrology blog.

## Installation Complete ✅

Sanity has been installed and configured with the following features:

### Packages Installed
- `@sanity/client` - Sanity client for data fetching
- `@sanity/image-url` - Image URL builder for optimized images
- `@sanity/cli` - Sanity command-line interface
- `@sanity/color-input` - Color picker for categories and zodiac signs
- `next-sanity` - Additional utilities for Sanity integration

### Schema Created
The following content types have been configured:

1. **Blog Post** (`blogPost`) - Main content type with:
   - Rich text content with images
   - Zodiac sign associations
   - Categories and tags
   - Humor level settings
   - Target audience
   - Reading time estimates

2. **Author** (`author`) - Author profiles with:
   - Bio and social media links
   - Zodiac sign for authentic content
   - Astrological specialties

3. **Category** (`category`) - Content categories with:
   - Custom colors and icons
   - Descriptions

4. **Zodiac Sign** (`zodiacSign`) - Complete zodiac data with:
   - Astrological properties (element, modality, ruling planet)
   - Personality traits and weaknesses (for humor)
   - Compatibility information
   - Colors and lucky numbers

## Next Steps

### 1. Create Sanity Project
```bash
# Login to Sanity
pnpm sanity login

# Create a new project (or use existing)
pnpm sanity init --create-project "brutal-astrology-blog"
```

### 2. Update Configuration
After creating your project, update these files:

**sanity.config.ts**:
```typescript
export default defineConfig({
  // Replace with your actual project ID
  projectId: 'your-actual-project-id',
  dataset: 'production',
  // ... rest of config
})
```

**Environment Variables**:
Create `.env` file:
```
PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
PUBLIC_SANITY_DATASET=production
```

### 3. Run Sanity Studio
```bash
# Start the Sanity Studio (CMS interface)
pnpm sanity:dev
```

This will start the Sanity Studio at `http://localhost:3333`

### 4. Populate Initial Data

#### Create Zodiac Signs
Add all 12 zodiac signs with their properties. Example for Leo:
- Name: "leo"
- Symbol: "♌"
- Element: "fire"
- Modality: "fixed"
- Ruling Planet: "Sun"
- Date Range: "July 23 - August 22"
- Traits: ["dramatic", "confident", "generous", "attention-seeking"]

#### Create Categories
Set up categories like:
- 🔥 Zodiac Signs
- ✨ Horoscopes
- 💕 Compatibility
- 😂 Astro Memes
- 🔥 Sign Roasting

#### Create an Author
Set up the "Psicóloga em Outra Dimensão" author profile.

### 5. Update Astro Pages
The Sanity client is ready to use in your Astro pages:

```typescript
// In any .astro file
import { getAllPosts, getFeaturedPosts } from '../lib/sanity'

const posts = await getAllPosts()
const featured = await getFeaturedPosts()
```

## Available Scripts

- `pnpm sanity:dev` - Start Sanity Studio development server
- `pnpm sanity:build` - Build Sanity Studio for production
- `pnpm sanity:deploy` - Deploy Sanity Studio to Sanity hosting

## Content Migration

To migrate existing markdown content to Sanity:

1. Create zodiac signs and categories in Sanity Studio
2. Create author profile
3. For each markdown post, create a new blog post in Sanity
4. Update Astro pages to fetch from Sanity instead of markdown

## GROQ Queries Available

Pre-built queries in `src/lib/sanity.ts`:
- `getAllPosts()` - All published posts
- `getPostBySlug(slug)` - Single post by slug
- `getPostsByZodiacSign(slug)` - Posts for a zodiac sign
- `getPostsByCategory(slug)` - Posts in a category
- `getFeaturedPosts()` - Featured posts
- `getAllZodiacSigns()` - All zodiac sign data
- `getAllCategories()` - All categories

## Production Deployment

1. Deploy Sanity Studio: `pnpm sanity:deploy`
2. Update environment variables in your hosting platform
3. Your Astro site will automatically fetch content from Sanity

Sanity CMS is now ready for your brutal astrology content! 🌟