import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { colorInput } from '@sanity/color-input'
import { schemaTypes } from './sanity/schemaTypes'

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ?? import.meta.env.PUBLIC_SANITY_PROJECT_ID
const dataset =
  process.env.SANITY_STUDIO_DATASET ?? import.meta.env.PUBLIC_SANITY_DATASET

export default defineConfig({
  name: 'brutal-astrology-blog',
  title: 'Brutal Astrology Blog',

  projectId,
  dataset,

  plugins: [structureTool(), visionTool(), colorInput()],

  schema: {
    types: schemaTypes,
  },

  // Custom studio configuration
  studio: {
    components: {
      // You can customize the studio here
    },
  },
})
