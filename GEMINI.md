# Project Overview

This is a website for a psychologist, built with the [Astro](https://astro.build/) framework and managed with [Sanity.io](https://www.sanity.io/) as a headless CMS. It features a "neo-brutalist" design, which is characterized by bold typography, thick borders, and dramatic shadows. The website is designed to be modern, impactful, and accessible.

## Main Technologies

*   **Framework:** Astro
*   **CMS:** Sanity.io
*   **Styling:** UnoCSS (a utility-first CSS framework) and custom CSS for the brutalist style.
*   **Deployment:** Vercel

## Key Features

*   **Blog:** The website includes a blog with articles on psychology and well-being, with all content managed in Sanity.
*   **"Mapa Astral":** A page with a neo-brutalist form that connects to a psychology API.
*   **Responsive Design:** The website is optimized for mobile, tablet, and desktop devices.
*   **SEO:** The project includes automatic sitemap and RSS feed generation, as well as dynamic Open Graph image generation.

# Building and Running

## Prerequisites

*   Node.js (version 18+)
*   pnpm

## Installation

```bash
git clone https://github.com/prof-ramos/brutal.git
cd brutal
pnpm install
```

## Environment Setup (Sanity)

To connect the project to the Sanity CMS, you need to set up environment variables.

1.  Create a `.env.local` file in the project root.
2.  Add the following variables, replacing the placeholder with your actual Sanity project ID:

    ```
    # Used by the Astro frontend to fetch content
    PUBLIC_SANITY_PROJECT_ID="your-project-id"
    PUBLIC_SANITY_DATASET="production"

    # Used by the Sanity Studio admin panel
    SANITY_STUDIO_PROJECT_ID="your-project-id"
    SANITY_STUDIO_DATASET="production"
    ```

## Commands

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Starts the Astro development server at `localhost:4321`. |
| `pnpm sanity:dev` | Starts the Sanity Studio at `localhost:3333`. |
| `pnpm build` | Builds the site for production in the `./dist/` directory. |
| `pnpm preview` | Previews the built site locally. |

# Development Conventions

*   **Package Manager:** The project uses `pnpm` for package management.
*   **Linting and Formatting:** The project uses ESLint and Prettier for code linting and formatting.
*   **Component-Based Architecture:** The project follows a component-based architecture, with reusable components located in the `src/components` directory.
*   **Content Management:** The blog content and other data are managed in Sanity.io. The schemas that define the content structure are located in the `sanity/schemaTypes` directory.