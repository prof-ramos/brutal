import {defineField, defineType} from 'sanity'

export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'string',
          description: 'Instagram username (without @)',
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter/X',
          type: 'string',
          description: 'Twitter handle (without @)',
        }),
        defineField({
          name: 'tiktok',
          title: 'TikTok',
          type: 'string',
          description: 'TikTok username (without @)',
        }),
        defineField({
          name: 'youtube',
          title: 'YouTube',
          type: 'url',
          description: 'YouTube channel URL',
        }),
      ]
    }),
    defineField({
      name: 'zodiacSign',
      title: 'Zodiac Sign',
      type: 'reference',
      to: {type: 'zodiacSign'},
      description: "Author's zodiac sign for authentic astrology content",
    }),
    defineField({
      name: 'specialties',
      title: 'Astrological Specialties',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      },
      description: 'Areas of astrological expertise (e.g., birth charts, tarot, crystals)',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'zodiacSign.name',
    },
    prepare(selection) {
      const {subtitle} = selection
      return {...selection, subtitle: subtitle ? `${subtitle} ♌` : 'No zodiac sign set'}
    },
  },
})