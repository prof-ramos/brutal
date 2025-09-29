# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/` defines Astro routes; keep route-level logic thin and delegate heavy UI to components.
- `src/components/` and `src/layouts/` host reusable view layers; prefer `@components/...` and `@layouts/...` aliases over relative paths.
- `src/content/` uses Astro Content Collections with schemas in `content.config.ts`; update generated types with `npx astro sync` when schema changes.
- `sanity/` stores the Sanity Studio and shared helpers; mirror content model changes between Sanity and `src/content/`.
- Static assets live in `public/`, while production builds output to `dist/` via `npm run build`.

## Build, Test, and Development Commands
- `npm run dev`: Launches the Astro dev server with UnoCSS in watch mode and hot-module replacement.
- `npm run build`: Produces the optimized static site in `dist/` and validates content collections.
- `npm run preview`: Serves the production build locally; use it to verify deployment-ready bundles.

## Coding Style & Naming Conventions
- Write TypeScript-first Astro components, destructuring typed props in frontmatter and exporting minimal helpers.
- Favor single quotes, omit semicolons, and keep indentation at 2 spaces to align with existing files.
- Import via path aliases (`@components/Hero.astro`, `@lib/typography.ts`) and compose styles with UnoCSS utility classes.
- When adding content fields, extend the relevant Zod schema and update sample entries in `src/content/`.

## Testing Guidelines
- No automated framework is configured yet; document manual QA steps in pull requests until tests are added.
- Use `npm run preview` to sanity-check generated HTML, UnoCSS output, and integration with fetched content.
- For new helpers in `src/lib/`, add usage examples in pages or components so reviewers can exercise the logic quickly.

## Commit & Pull Request Guidelines
- Follow Conventional Commit syntax (`docs(manual): ...`, `feat(content): ...`) as seen in recent history.
- Reference related issues in the PR body and attach before/after screenshots for any visual or CMS-facing change.
- Note required Sanity or environment updates, and request a reviewer to run `npx astro sync` when content schemas shift.

## Security & Configuration Tips
- Keep `.env` and Sanity tokens out of version control; replicate updates in `SANITY_SETUP.md` for onboarding.
- Regenerate tokens sparingly and update Vercel or hosting secrets immediately after local changes.
