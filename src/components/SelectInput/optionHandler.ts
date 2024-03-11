import { Option } from '@/models/Option';

const optionsHandler = (options: Option[]): string[] => {
  const newOptions = [];
  for (const option of options) {
    newOptions.push(option.title);
  }
  return newOptions;
};

export default optionsHandler;
