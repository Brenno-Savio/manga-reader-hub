import { NextResponse } from 'next/server';
import slug from 'slug';

import { checkNovelExists, createNovel } from '@/libs/apis';
import { authOptions } from '@/libs/auth';
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
    image,
    categories,
    novelType,
    language,
    chapters,
    date,
  } = await req.json();

  const slugged = slug(title.tolowerCase());  

  if (
    !title ||
    !description ||
    !author ||
    !categories ||
    !novelType ||
    !language ||
    !date
  ) {
    return new NextResponse('All fields are required', { status: 500 });
  }  

  const alreadyExist = await checkNovelExists(slugged);
  if (alreadyExist) {
    return new NextResponse('Novel already exists', { status: 409 });
  }

  try {
    const data = await createNovel({
      title,
      slug: slugged,
      description,
      author,
      image,
      categories,
      novelType,
      language,
      chapters,
      date,
    });

    return NextResponse.json(data, {
      status: 200,
      statusText: 'Successfully Uploaded',
    });
  } catch (error) {
    console.log('Create Novel Failed', error);
    return new NextResponse('Unable to create novel', { status: 400 });
  }
}
