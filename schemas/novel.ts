import { defineField } from 'sanity';
import novelCategories from '../fields/novelCategories';
import novelLanguages from '../fields/novelLanguages';
import novelTypes from '../fields/novelTypes';

const novel = {
  name: 'novel',
  title: 'Novel',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(50).error('Maximum 50 Characters'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) =>
        Rule.required().min(100).error('Minimum 100 Characters'),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(50).error('Maximum 50 Characters'),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'url', type: 'url', title: 'URL' },
            { name: 'file', type: 'file', title: 'File' },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.required().min(3).error('Minimum of 3 images required'),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'object',
      fields: [
        { name: 'url', type: 'url', title: 'URL' },
        { name: 'file', type: 'file', title: 'File' },
      ],
      validation: (Rule) => Rule.required().error('Cover Image is required'),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: novelCategories,
          },
        },
      ],
      validation: (Rule) =>
        Rule.required().min(1).error('Category is required'),
    }),
    defineField({
      name: 'type',
      title: 'Novel Type',
      type: 'string',
      options: {
        list: novelTypes,
      },
      validation: (Rule) => Rule.required().error('Novel Type is required'),
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: novelLanguages,
      },
      validation: (Rule) => Rule.required().error('Novel language is required'),
    }),
    defineField({
      name: 'chapters',
      title: 'Chapters',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'index', type: 'number', title: 'Index' },
            {
              name: 'text',
              type: 'text',
              title: 'Text',
              validation: (Rule) =>
                Rule.required()
                  .min(100)
                  .error('Chapter must have at last 100 characters'),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'publishedDate',
      title: 'Published Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [
        {
          type: 'review',
        },
      ],
    }),
  ],
};

export default novel;
