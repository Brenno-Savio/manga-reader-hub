export type novelFormData = {
  title: string;
  description: string;
  author: string;
  image: (string | File)[];
  categories: string;
  novelType: string;
  language: string;
  date: number;
};

const formDataValidator = (formData: novelFormData) => {
  const errors: string[] = [];

  for (const key in formData) {
    if (Object.hasOwnProperty.call(formData, key)) {
      const value = formData[key as keyof novelFormData];
      if (value === '' || typeof value === 'undefined') {
        errors.push('all fields must be filled in');
      }
    }
  }

  if (formData.image.length <= 0) {
    errors.push('at last one image is required');
  }

  return errors;
};

export default formDataValidator;
