# TinaCMS Setup Guide for Astrology Blog

This guide will help you complete the TinaCMS setup for your astrology blog built with Astro 5.13.2.

## Current Setup Status ✅

The following has been completed:
- ✅ TinaCMS packages installed
- ✅ TinaCMS configuration created (`tina/config.ts`)
- ✅ Admin interface created (`src/pages/admin/index.astro`)
- ✅ TypeScript types defined (`src/types/tina.ts`)
- ✅ Utility functions created (`src/utils/tina.ts`)
- ✅ Astro configuration updated for TinaCMS
- ✅ Package.json scripts added
- ✅ Legacy admin preserved (`src/pages/admin-legacy.astro`)

## Next Steps (Required to Complete Setup)

### 1. Set up TinaCMS Account

1. Go to [tina.io](https://tina.io)
2. Create an account or sign in
3. Create a new project
4. Get your Client ID and Token

### 2. Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
# Copy from .env.example and fill in your values
cp .env.example .env.local
```

Add your TinaCMS credentials:

```env
# TinaCMS Configuration
NEXT_PUBLIC_TINA_CLIENT_ID=your-actual-client-id-here
TINA_TOKEN=your-actual-token-here

# Optional: For production deployments
TINA_PUBLIC_IS_LOCAL=true
```

### 3. Test the Setup

Run the development server:

```bash
# Standard Astro development
pnpm dev

# OR with TinaCMS development mode (recommended)
pnpm tina:dev
```

Visit:
- Main site: `http://localhost:4321`
- TinaCMS Admin: `http://localhost:4321/admin`
- Legacy Admin: `http://localhost:4321/admin-legacy`

## Features Included

### 🎨 Custom Schema for Astrology Content

Your TinaCMS setup includes:

- **Zodiac Signs**: All 12 signs with symbols and emojis
- **Content Categories**: Zodiac signs, horoscopes, compatibility, etc.
- **Humor Levels**: Subtle 😏, Moderate 😄, Savage 🔥, Brutal 💀
- **Target Audiences**: Beginners, enthusiasts, seekers, skeptics, meme lovers
- **Rich Text Editor**: With custom astrology card and humor break templates

### 🔧 Development Commands

```bash
# Development with TinaCMS
pnpm tina:dev

# Build for production
pnpm build

# TinaCMS-specific commands
pnpm tina:build        # Build TinaCMS admin
pnpm tina:audit        # Audit your content
pnpm tina:init         # Initialize TinaCMS (if needed)
```

### 📁 File Structure

```
src/
├── content/
│   └── blog/              # Your markdown files (TinaCMS will manage these)
├── pages/
│   ├── admin/
│   │   └── index.astro    # TinaCMS admin interface
│   └── admin-legacy.astro # Your original admin (preserved)
├── types/
│   └── tina.ts            # TinaCMS TypeScript types
└── utils/
    └── tina.ts            # TinaCMS utility functions

tina/
└── config.ts              # TinaCMS configuration
```

## Content Management Workflow

### Creating New Posts

1. Go to `/admin` in your browser
2. Click "Create New Blog Post"
3. Fill in the astrology-specific fields:
   - Primary zodiac sign
   - Humor level
   - Target audience
   - Related signs
4. Use the rich text editor with astrology templates
5. Save (this creates a markdown file in `src/content/blog/`)

### Editing Existing Posts

1. Go to `/admin`
2. Select a post from the list
3. Edit using the visual interface
4. Changes are saved to the markdown files

## Integration with Astro Content Collections

Your existing Astro content collections will continue to work. TinaCMS:
- Reads from `src/content/blog/` directory
- Writes markdown files compatible with your existing schema
- Preserves all your current content metadata

## Styling and Customization

The admin interface uses your project's color scheme:
- Primary: `#4CA6DF` (Trust/Calm blue)
- Secondary: `#BFFF00` (Hope/Growth lime)
- Accent: `#FF6B00` (Energy/Motivation orange)
- Deep: `#5E18EB` (Depth/Mystical purple)

## Security Configuration

The Astro config has been updated with TinaCMS-compatible security headers:
- CSP allows TinaCMS domains
- X-Frame-Options allows TinaCMS iframes
- Environment variables are properly configured

## Troubleshooting

### Common Issues

1. **"Connection Error" in admin interface**
   - Check your environment variables
   - Ensure TinaCMS credentials are correct
   - Verify internet connection to TinaCMS servers

2. **Admin interface not loading**
   - Clear browser cache
   - Check browser console for errors
   - Verify Astro dev server is running

3. **Content not appearing**
   - Ensure markdown files are in `src/content/blog/`
   - Check file frontmatter matches schema
   - Restart dev server

### Fallback Options

If TinaCMS isn't working:
- Use the legacy admin at `/admin-legacy`
- Edit markdown files directly
- Use your existing content management workflow

## Production Deployment

For production deployment:

1. Set environment variables in your hosting platform
2. Ensure `TINA_PUBLIC_IS_LOCAL=false` in production
3. Build with `pnpm build`
4. Deploy as usual

## Support

- TinaCMS Documentation: [tina.io/docs](https://tina.io/docs)
- Astro Content Collections: [docs.astro.build/en/guides/content-collections](https://docs.astro.build/en/guides/content-collections/)
- Project-specific issues: Check your legacy admin or edit files directly

---

**Ready to start?** Copy `.env.example` to `.env.local`, add your TinaCMS credentials, and run `pnpm tina:dev`!