import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {schemaTypes} from './sanity/schemaTypes'

export default defineConfig({
  name: 'brutal-astrology-blog',
  title: 'Brutal Astrology Blog',

  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,

  plugins: [
    structureTool(),
    visionTool(),
    colorInput(),
  ],

  schema: {
    types: schemaTypes,
  },

  // Custom studio configuration
  studio: {
    components: {
      // You can customize the studio here
    }
  }
})