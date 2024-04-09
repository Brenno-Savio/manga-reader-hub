export type novelFormData = {
  title: string;
  description: string;
  author: string;
  images: (string | File)[];
  categories: string[];
  type: string;
  language: string;
  publishedDate: number;
};

const formDataValidator = (formData: novelFormData) => {
  const errors: string[] = [];

  for (const key in formData) {
    if (Object.hasOwnProperty.call(formData, key)) {
      const value = formData[key as keyof novelFormData];
      if (value === '' || typeof value === 'undefined') {
        errors.push(`Field ${key} is not filled in`);
      }
    }
  }

  if (formData.images.length <= 0) {
    errors.push('at last one image is required');
  }

  if (formData.categories.length <= 0) {
    errors.push('at last one categorie is required');
  }

  return errors;
};

export default formDataValidator;
