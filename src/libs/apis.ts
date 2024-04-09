import { NovelFormData } from '@/models/NovelFormData';
import sanityClient from './sanity';

import axios from 'axios';
import * as queries from './sanityQueries';

export async function getUserData(userId: string) {
  const result = await sanityClient.fetch(
    queries.getUserDataQuery,
    { userId },
    { cache: 'no-cache' },
  );

  return result;
}

export async function checkNovelExists(
  slug: string,
): Promise<null | { _id: string }> {
  const query = `*[type == 'novel' && slug.current == $slug]`;
  const params = {
    slug,
  }
  const result = await sanityClient.fetch(query, params);

  if(result && result.length > 0) {
    return result;
  } else {
    return null;
  }
}

export const createNovel = async ({
  title,
  slug,
  description,
  author,
  images,
  coverImage,
  categories,
  type,
  language,
  chapters,
  publishedDate,
  updatedDate,
}: NovelFormData) => {
  
  const mutation = {
    mutations: [
      {
        create: {
          _type: 'novel',
          title,
          slug,
          description,
          author,
          images,
          coverImage,
          categories,
          type,
          language,
          chapters,
          publishedDate,
          updatedDate,
          reviews: [],
        },
      },
    ],
  };

  const { data } = await axios.post(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    mutation,
    { headers: { Authorization: `Bearer ${process.env.SANITY_STUDIO_TOKEN}` } },
  );

  return data;
};
