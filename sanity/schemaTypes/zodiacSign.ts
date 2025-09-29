import {defineField, defineType} from 'sanity'

export const zodiacSign = defineType({
  name: 'zodiacSign',
  title: 'Zodiac Sign',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Aries', value: 'aries'},
          {title: 'Taurus', value: 'taurus'},
          {title: 'Gemini', value: 'gemini'},
          {title: 'Cancer', value: 'cancer'},
          {title: 'Leo', value: 'leo'},
          {title: 'Virgo', value: 'virgo'},
          {title: 'Libra', value: 'libra'},
          {title: 'Scorpio', value: 'scorpio'},
          {title: 'Sagittarius', value: 'sagittarius'},
          {title: 'Capricorn', value: 'capricorn'},
          {title: 'Aquarius', value: 'aquarius'},
          {title: 'Pisces', value: 'pisces'},
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'symbol',
      title: 'Symbol',
      type: 'string',
      description: 'Zodiac symbol/emoji (♈, ♉, etc.)',
      validation: (Rule) => Rule.required().max(2),
    }),
    defineField({
      name: 'element',
      title: 'Element',
      type: 'string',
      options: {
        list: [
          {title: 'Fire', value: 'fire'},
          {title: 'Earth', value: 'earth'},
          {title: 'Air', value: 'air'},
          {title: 'Water', value: 'water'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'modality',
      title: 'Modality',
      type: 'string',
      options: {
        list: [
          {title: 'Cardinal', value: 'cardinal'},
          {title: 'Fixed', value: 'fixed'},
          {title: 'Mutable', value: 'mutable'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rulingPlanet',
      title: 'Ruling Planet',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dateRange',
      title: 'Date Range',
      type: 'string',
      description: 'e.g., "March 21 - April 19"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'traits',
      title: 'Key Traits',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Key personality traits (for humor and content)',
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'strengths',
      title: 'Strengths',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'weaknesses',
      title: 'Weaknesses',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Perfect for brutal astrological humor',
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'compatibility',
      title: 'Compatible Signs',
      type: 'array',
      of: [{type: 'reference', to: {type: 'zodiacSign'}}],
      description: 'Most compatible zodiac signs',
    }),
    defineField({
      name: 'incompatibility',
      title: 'Incompatible Signs',
      type: 'array',
      of: [{type: 'reference', to: {type: 'zodiacSign'}}],
      description: 'Least compatible signs (great for roasting content)',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'color',
      description: 'Primary color associated with this sign',
    }),
    defineField({
      name: 'luckyNumbers',
      title: 'Lucky Numbers',
      type: 'array',
      of: [{type: 'number'}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
      description: 'Detailed description with brutal honesty about this sign',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'element',
      media: 'symbol',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: `${title} ${media}`,
        subtitle: `${subtitle} sign`,
      }
    },
  },
})