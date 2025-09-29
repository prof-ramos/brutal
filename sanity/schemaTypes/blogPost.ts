import {defineField, defineType} from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero image',
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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'zodiacSign',
      title: 'Zodiac Sign',
      type: 'reference',
      to: {type: 'zodiacSign'},
      description: 'Primary zodiac sign this post relates to',
    }),
    defineField({
      name: 'relatedSigns',
      title: 'Related Signs',
      type: 'array',
      of: [{type: 'reference', to: {type: 'zodiacSign'}}],
      description: 'Other zodiac signs mentioned in this post',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated at',
      type: 'datetime',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().min(50).max(300),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            }
          ]
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Featured posts appear prominently on the homepage',
    }),
    defineField({
      name: 'draft',
      title: 'Draft',
      type: 'boolean',
      description: 'Draft posts are not published',
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
      description: 'Estimated reading time in minutes',
    }),
    defineField({
      name: 'difficulty',
      title: 'Difficulty Level',
      type: 'string',
      options: {
        list: [
          {title: 'Beginner', value: 'beginner'},
          {title: 'Intermediate', value: 'intermediate'},
          {title: 'Advanced', value: 'advanced'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'targetAudience',
      title: 'Target Audience',
      type: 'string',
      options: {
        list: [
          {title: 'Astrology Beginners', value: 'astrology-beginners'},
          {title: 'Zodiac Enthusiasts', value: 'zodiac-enthusiasts'},
          {title: 'Spiritual Seekers', value: 'spiritual-seekers'},
          {title: 'Cosmic Skeptics', value: 'cosmic-skeptics'},
          {title: 'Meme Lovers', value: 'meme-lovers'},
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'humorLevel',
      title: 'Humor Level',
      type: 'string',
      options: {
        list: [
          {title: 'Subtle', value: 'subtle'},
          {title: 'Moderate', value: 'moderate'},
          {title: 'Savage', value: 'savage'},
          {title: 'Brutal', value: 'brutal'},
        ],
        layout: 'radio',
      },
      description: 'How brutal is the astrological humor?',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'heroImage',
      subtitle: 'zodiacSign.name',
    },
    prepare(selection) {
      const {author, subtitle} = selection
      return {...selection, subtitle: subtitle ? `${subtitle} | ${author}` : author}
    },
  },
})