'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

import StringInput from '@/components/StringInput/StringInput';
import { DefaultNovelForm } from '@/models/NovelFormData';

import BackDrop from '@/components/BackDrop/BackDrop';
import ImgUploadModal from '@/components/ImgUploadModal/ImgUploadModal';
import SelectInput from '@/components/SelectInput/SelectInput';
import formDataValidator from '@/libs/formDataValidator';
import axios from 'axios';
import toast from 'react-hot-toast';
import novelCategories from '../../../../../../fields/novelCategories';
import novelLanguages from '../../../../../../fields/novelLanguages';
import novelTypes from '../../../../../../fields/novelTypes';

const defaultNovelForm: DefaultNovelForm = {
  title: '',
  description: '',
  author: '',
  images: [],
  categories: [],
  type: 'light-novel',
  language: 'chinese',
  publishedDate: 0,
  updatedDate: 0,
};

const UploadNovelPage = (props: { params: { id: string } }) => {
  const [formData, setFormData] = useState(defaultNovelForm);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleSelectOption = (value: string) => {
    if (!selectedOptions.includes(value)) {
      setSelectedOptions([...selectedOptions, value]);
      setFormData({
        ...formData,
        categories: [...formData.categories, ...selectedOptions],
      });
    }
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageSubmit = (value: File[]) => {
    setFormData({ ...formData, images: [...formData.images, ...value] });    
  };

  const handleRemoveOption = (value: string) => {
    setSelectedOptions(selectedOptions.filter((option) => option !== value));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = formDataValidator(formData);

    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      return;
    }

    setFormData({ ...formData, publishedDate: Date.now() });
    setFormData({ ...formData, updatedDate: Date.now() });

    try {
      const { data } = await axios.post('api/novel', formData);
      toast.success('Novel Submitted!');
      console.log(data);
    } catch (e) {
      console.log(e);
      toast.error(
        'An error occurred, please try again later or contact the suport',
      );
    } finally {
      setFormData(defaultNovelForm);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-[70%] rounded-t-xl bg-secondary py-5 text-center text-xl font-bold text-tertiary-dark shadow-xl">
        <h2 className="">Upload your novel</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="hadow-slate-300 w-[70%] bg-tertiary-light p-5 shadow-xl dark:bg-quaternary dark:shadow-slate-800"
      >
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
            type="button"
            onClick={toggleModal}
          >
            {formData.images.length === 0 ? 'Send an image' : `${formData.images.length} images sent!`}
          </button>
          <p className="mt-2 w-[66%] text-start">Categories</p>
          <SelectInput
            selectedOptions={selectedOptions}
            isOpen={isOpen}
            options={novelCategories}
            toggleDropdown={toggleDropdown}
            handleSelectOption={handleSelectOption}
            handleRemoveOption={handleRemoveOption}
            setIsOpen={setIsOpen}
          />
          <p className="mt-2 w-[66%] text-start">Novel Type</p>
          <select className="input" name="type" onChange={handleSelectChange}>
            {novelTypes.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="cursor-pointer px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {option.title}
              </option>
            ))}
          </select>
          <p className="mt-2 w-[66%] text-start">Language</p>
          <select
            className="input"
            name="language"
            onChange={handleSelectChange}
          >
            {novelLanguages.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="cursor-pointer px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {option.title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-center justify-center text-start">
          <button
            type="submit"
            className="mt-4 rounded-lg bg-secondary-alt px-16 py-4 text-white"
          >
            Send
          </button>
        </div>
      </form>

      <ImgUploadModal
        showModal={showModal}
        handleImgUpModal={toggleModal}
        handleImageSubmit={handleImageSubmit}
      />
      <BackDrop isOpen={showModal} />
    </section>
  );
};

export default UploadNovelPage;
