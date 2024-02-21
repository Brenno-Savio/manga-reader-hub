import { defineField } from 'sanity';

const account = {
  name: 'account',
  title: 'Account',
  type: 'document',
  fields: [
    defineField({
      name: 'ProviderType',
      type: 'string',
    }),
    defineField({
      name: 'ProviderId',
      type: 'string',
    }),
    defineField({
      name: 'ProviderAccountId',
      type: 'string',
    }),
    defineField({
      name: 'refreshToken',
      type: 'string',
    }),
    defineField({
      name: 'AccessToken',
      type: 'string',
    }),
    defineField({
      name: 'AccessTokenExpires',
      type: 'number',
    }),
    defineField({
      name: 'user',
      title: 'user',
      type: 'reference',
      to: { type: 'user' },
    }),
  ],
};

export default account;