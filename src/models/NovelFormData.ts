export type Chapter = {
  name: string;
  index: number;
  text: string;
};

export type DefaultNovelForm = {
  title: string,
  description: string,
  author: string,
  images: File[];
  categories: string[],
  type: string,
  language: string,
  publishedDate: number,
  updatedDate: number,
}

export type NovelFormData = {
  title: string;
  slug: string;
  description: string;
  author: string;
  images: File[];
  coverImage: string | File;
  categories: string[];
  type: string;
  language: string;
  chapters: (Chapter | null)[];
  publishedDate: number;
  updatedDate: number;
};
