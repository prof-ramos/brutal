# Agent Guidelines for Brutal Theme

## Commands

- **Build**: `npm run build` (Astro build)
- **Dev server**: `npm run dev` (Astro dev)
- **Preview**: `npm run preview` (Astro preview)
- **Lint**: No dedicated lint script (ESLint available via devDependencies)
- **Format**: No dedicated format script (Prettier available via devDependencies)
- **Test**: No test framework configured

## Code Style

- **Language**: TypeScript with strict Astro config
- **Framework**: Astro with UnoCSS
- **Imports**: Use path aliases (@components/_, @layouts/_, @pages/\*)
- **Quotes**: Single quotes for strings
- **Semicolons**: Omit semicolons
- **Props**: Define TypeScript interfaces, destructure in frontmatter
- **Styling**: UnoCSS classes (presetWind, presetIcons, presetTypography)
- **Content**: Use Astro Content Collections with Zod schemas
- **Naming**: PascalCase for components, camelCase for variables
- **Error handling**: Standard try/catch, no custom error types observed
