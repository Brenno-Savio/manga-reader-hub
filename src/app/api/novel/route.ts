import { NextResponse } from 'next/server';
import slug from 'slug';

import { checkNovelExists, createNovel } from '@/libs/apis';
import { authOptions } from '@/libs/auth';
import { NovelFormData } from '@/models/NovelFormData';
import { getServerSession } from 'next-auth';

export async function POST(req: Request, res: Response) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse('Authentication Required', { status: 500 });
  }

  const {
    title,
    description,
    author,
    images,
    categories,
    type,
    language,
    chapters,
    publishedDate,
    updatedDate,
  } = await req.json();

  const slugged = slug(title.tolowerCase());  

  if (
    !title ||
    !description ||
    !author ||
    !categories ||
    !type ||
    !language ||
    !publishedDate ||
    !updatedDate
  ) {
    return new NextResponse('All fields are required', { status: 500 });
  }  

  const alreadyExist = await checkNovelExists(slugged);
  if (alreadyExist) {
    return new NextResponse('Novel already exists', { status: 409 });
  }

  const newNovel: NovelFormData = {
    title,
    slug: slugged,
    description,
    author,
    images,
    coverImage: images[0],
    categories,
    type,
    language,
    chapters,
    publishedDate,
    updatedDate,
  }

  try {
    const data = await createNovel(newNovel);

    return NextResponse.json(data, {
      status: 200,
      statusText: 'Successfully Uploaded',
    });
  } catch (error) {
    console.log('Create Novel Failed', error);
    return new NextResponse('Unable to create novel', { status: 400 });
  }
}
