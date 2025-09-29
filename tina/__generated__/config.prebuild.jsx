// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "src/assets",
      publicFolder: "public"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "blog",
        label: "Astrology Blog Posts",
        path: "src/content/blog",
        format: "md",
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/blog/${document._sys.filename}`,
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: false,
            // Example of using a custom slugify function
            slugify: (values) => {
              const date = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
              return `${date}-${values?.title?.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, "-").substring(0, 50).replace(/-+$/, "")}`;
            }
          }
        },
        fields: [
          // Basic metadata
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              component: "textarea"
            }
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Publication Date",
            required: true
          },
          {
            type: "datetime",
            name: "updatedDate",
            label: "Updated Date"
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
            options: [
              {
                value: "Psic\xF3loga em Outra Dimens\xE3o",
                label: "Psic\xF3loga em Outra Dimens\xE3o"
              }
            ]
          },
          // Content metadata
          {
            type: "string",
            name: "category",
            label: "Category",
            options: [
              { value: "zodiac-signs", label: "Zodiac Signs" },
              { value: "horoscopes", label: "Horoscopes" },
              { value: "compatibility", label: "Compatibility" },
              { value: "birth-charts", label: "Birth Charts" },
              { value: "moon-phases", label: "Moon Phases" },
              { value: "planetary-transits", label: "Planetary Transits" },
              { value: "tarot-readings", label: "Tarot Readings" },
              { value: "crystal-healing", label: "Crystal Healing" },
              { value: "spiritual-guidance", label: "Spiritual Guidance" },
              { value: "cosmic-humor", label: "Cosmic Humor" },
              { value: "astro-memes", label: "Astro Memes" },
              { value: "sign-roasting", label: "Sign Roasting" }
            ]
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            ui: {
              component: "tags"
            }
          },
          {
            type: "number",
            name: "readingTime",
            label: "Reading Time (minutes)"
          },
          {
            type: "string",
            name: "difficulty",
            label: "Difficulty Level",
            options: [
              { value: "beginner", label: "Beginner" },
              { value: "intermediate", label: "Intermediate" },
              { value: "advanced", label: "Advanced" }
            ]
          },
          // Images and media
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image"
          },
          {
            type: "string",
            name: "heroImageAlt",
            label: "Hero Image Alt Text"
          },
          // SEO and social
          {
            type: "boolean",
            name: "draft",
            label: "Draft"
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Post"
          },
          // Astrology-specific metadata
          {
            type: "string",
            name: "zodiacSign",
            label: "Primary Zodiac Sign",
            options: [
              { value: "aries", label: "Aries \u2648" },
              { value: "taurus", label: "Taurus \u2649" },
              { value: "gemini", label: "Gemini \u264A" },
              { value: "cancer", label: "Cancer \u264B" },
              { value: "leo", label: "Leo \u264C" },
              { value: "virgo", label: "Virgo \u264D" },
              { value: "libra", label: "Libra \u264E" },
              { value: "scorpio", label: "Scorpio \u264F" },
              { value: "sagittarius", label: "Sagittarius \u2650" },
              { value: "capricorn", label: "Capricorn \u2651" },
              { value: "aquarius", label: "Aquarius \u2652" },
              { value: "pisces", label: "Pisces \u2653" }
            ]
          },
          {
            type: "string",
            name: "targetAudience",
            label: "Target Audience",
            options: [
              { value: "astrology-beginners", label: "Astrology Beginners" },
              { value: "zodiac-enthusiasts", label: "Zodiac Enthusiasts" },
              { value: "spiritual-seekers", label: "Spiritual Seekers" },
              { value: "cosmic-skeptics", label: "Cosmic Skeptics" },
              { value: "meme-lovers", label: "Meme Lovers" }
            ]
          },
          {
            type: "string",
            name: "humorLevel",
            label: "Humor Level",
            options: [
              { value: "subtle", label: "Subtle \u{1F60F}" },
              { value: "moderate", label: "Moderate \u{1F604}" },
              { value: "savage", label: "Savage \u{1F525}" },
              { value: "brutal", label: "Brutal \u{1F480}" }
            ]
          },
          {
            type: "string",
            name: "relatedSigns",
            label: "Related Zodiac Signs",
            list: true,
            options: [
              { value: "aries", label: "Aries" },
              { value: "taurus", label: "Taurus" },
              { value: "gemini", label: "Gemini" },
              { value: "cancer", label: "Cancer" },
              { value: "leo", label: "Leo" },
              { value: "virgo", label: "Virgo" },
              { value: "libra", label: "Libra" },
              { value: "scorpio", label: "Scorpio" },
              { value: "sagittarius", label: "Sagittarius" },
              { value: "capricorn", label: "Capricorn" },
              { value: "aquarius", label: "Aquarius" },
              { value: "pisces", label: "Pisces" }
            ]
          },
          {
            type: "string",
            name: "relatedPosts",
            label: "Related Posts",
            list: true,
            description: "References to other blog posts (use slug format)"
          },
          // Main content
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
            templates: [
              {
                name: "AstrologyCard",
                label: "Astrology Card",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title"
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" }
                  },
                  {
                    type: "string",
                    name: "zodiacSign",
                    label: "Zodiac Sign",
                    options: [
                      { value: "aries", label: "Aries" },
                      { value: "taurus", label: "Taurus" },
                      { value: "gemini", label: "Gemini" },
                      { value: "cancer", label: "Cancer" },
                      { value: "leo", label: "Leo" },
                      { value: "virgo", label: "Virgo" },
                      { value: "libra", label: "Libra" },
                      { value: "scorpio", label: "Scorpio" },
                      { value: "sagittarius", label: "Sagittarius" },
                      { value: "capricorn", label: "Capricorn" },
                      { value: "aquarius", label: "Aquarius" },
                      { value: "pisces", label: "Pisces" }
                    ]
                  }
                ]
              },
              {
                name: "HumorBreak",
                label: "Humor Break",
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Funny Text",
                    ui: { component: "textarea" }
                  },
                  {
                    type: "string",
                    name: "style",
                    label: "Style",
                    options: [
                      { value: "quote", label: "Quote" },
                      { value: "callout", label: "Callout" },
                      { value: "warning", label: "Warning" }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
