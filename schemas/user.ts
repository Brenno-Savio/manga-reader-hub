import { defineField } from 'sanity';

const user = {
  name: 'user',
  title: 'user',
  type: 'document',
  fields: [
    defineField({
      name: 'isAdmin',
      title: 'Is Admin',
      type: 'boolean',
      description: 'Check if the user is admin',
      initialValue: false,
      validation: (Rule) => Rule.required(),
      //  readOnly: true,
      //  hidden: true,
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the user',
      readOnly: true,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'url',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'emailemailVerified',
      type: 'datetime',
      hidden: true,
    }),
    defineField({
      name: 'password',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'readingList',
      title: 'Reading List',
      type: 'array',
      of: [
        {
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'publishedNovels',
      title: 'Published Novels',
      type: 'array',
      of: [
        {
          type: 'novel',
        },
      ],
    }),
  ],
};

export default user;
