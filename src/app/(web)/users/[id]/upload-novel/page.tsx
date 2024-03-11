'use client';

import { ChangeEvent, useState } from 'react';

import StringInput from '@/components/StringInput/StringInput';
import { DefaultNovelForm } from '@/models/NovelFormData';

import SelectInput from '@/components/SelectInput/SelectInput';
import novelCategories from '../../../../../../fields/novelCategories';

const defaultNovelForm: DefaultNovelForm = {
  title: '',
  description: '',
  author: '',
  images: [],
  categories: [],
  type: '',
  language: '',
  publishedDate: 0,
};

const UploadNovelPage = (props: { params: { id: string } }) => {
  const [formData, setFormData] = useState(defaultNovelForm);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const {
    params: { id: userId },
  } = props;

  const handleInputStringChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (value: string) => {
    if (!selectedOptions.includes(value)) {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleRemoveOption = (value: string) => {
    setSelectedOptions(selectedOptions.filter((option) => option !== value));
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-[70%] rounded-t-xl bg-secondary py-5 text-center text-xl font-bold text-tertiary-dark shadow-xl">
        <h2 className="">Upload your novel</h2>
      </div>
      <form className="hadow-slate-300 w-[70%] bg-tertiary-light p-5 shadow-xl dark:bg-quaternary dark:shadow-slate-800">
        <StringInput
          name="title"
          value={formData.title}
          handleChange={handleInputStringChange}
          input={true}
        />
        <StringInput
          name="author"
          value={formData.author}
          handleChange={handleInputStringChange}
          input={true}
        />
        <StringInput
          name="description"
          value={formData.description}
          handleChange={handleInputStringChange}
          input={false}
        />
        <div className="flex flex-col items-center justify-center text-start">
          <button
            className={`button mt-2 ${formData.images.length === 0 ? 'bg-secondary-alt text-tertiary-light' : 'bg-secondary text-tertiary-dark'}`}
          >
            {formData.images.length === 0 ? 'Send an image' : 'Image sent!'}
          </button>
          <p className="mt-2 w-[66%] text-start">Categories</p>
          <SelectInput
            selectedOptions={selectedOptions}
            isOpen={isOpen}
            options={novelCategories}
            toggleDropdown={toggleDropdown}
            handleSelectOption={handleSelectOption}
            handleRemoveOption={handleRemoveOption}
          />
          <p className="mt-2 w-[66%] text-start">Novel Type</p>
          <select className="input" name=""></select>
          <p className="mt-2 w-[66%] text-start">Language</p>
          <select className="input" name=""></select>
        </div>
        <button></button>
      </form>
    </section>
  );
};

export default UploadNovelPage;
