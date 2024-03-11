export type Chapter = {
  name: string;
  index: number;
  text: string;
};

export type DefaultNovelForm = {
  title: string,
  description: string,
  author: string,
  images: (string | File)[];
  categories: string[],
  type: string,
  language: string,
  publishedDate: number,
}

export type NovelFormData = {
  title: string;
  slug: string;
  description: string;
  author: string;
  images: (string | File)[];
  coverImage: string | File;
  categories: string[];
  type: string;
  language: string;
  chapters: (Chapter | null)[];
  publishedDate: number;
};
