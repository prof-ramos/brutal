# Project Overview

This is a website for a psychologist, built with the [Astro](https://astro.build/) framework. It features a "neo-brutalist" design, which is characterized by bold typography, thick borders, and dramatic shadows. The website is designed to be modern, impactful, and accessible.

## Main Technologies

*   **Framework:** Astro
*   **Styling:** UnoCSS (a utility-first CSS framework) and custom CSS for the brutalist style.
*   **Deployment:** Vercel

## Key Features

*   **Blog:** The website includes a blog with articles on psychology and well-being.
*   **"Mapa Astral":** A page with a neo-brutalist form that connects to a psychology API.
*   **Responsive Design:** The website is optimized for mobile, tablet, and desktop devices.
*   **SEO:** The project includes automatic sitemap and RSS feed generation, as well as dynamic Open Graph image generation.

# Building and Running

## Prerequisites

*   Node.js (version 18+)
*   pnpm, npm, or yarn

## Installation

```bash
git clone https://github.com/prof-ramos/brutal.git
cd brutal
pnpm install
```

## Commands

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Starts the development server at `localhost:4321`. |
| `pnpm build` | Builds the site for production in the `./dist/` directory. |
| `pnpm preview` | Previews the built site locally. |

# Development Conventions

*   **Package Manager:** The project uses `pnpm` for package management.
*   **Linting and Formatting:** The project uses ESLint and Prettier for code linting and formatting.
*   **Git Hooks:** (Inferential) It's likely that this project uses git hooks (e.g., husky) to enforce linting and formatting before committing code.
*   **Component-Based Architecture:** The project follows a component-based architecture, with reusable components located in the `src/components` directory.
*   **Content as Code:** The blog content is managed as Markdown files in the `src/content` directory.
