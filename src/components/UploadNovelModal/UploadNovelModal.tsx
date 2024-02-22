'use client';

import { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import novelCategories from '../../../fields/novelCategories';
import novelLanguages from '../../../fields/novelLanguages';
import novelTypes from '../../../fields/novelTypes';
import BackDrop from '../BackDrop/BackDrop';
import ImgUploadModal from '../ImgUploadModal/ImgUploadModal';

const defaultFormData = {
  title: '',
  slug: '',
  description: '',
  author: '',
  image: '',
  categories: '',
  novelType: '',
  language: '',
  chapters: '',
  date: Date.now(),
};

const UploadNovelModal = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [isOpen, setToggleModal] = useState(false);

  const inputStyles =
    'border border-gray-400 sm:text-sm text-tertiary-dark dark:bg-tertiary-dark dark:text-tertiary-light rounded-lg block w-96 p-2.5 focus:outline-none focus:border-primary dark:focus:border-secondary';

  const handleImgUpModal = () => setToggleModal((prevState) => !prevState);

  const handleSubmit = () => {};

  const handleInputChange = () => {};

  return (
    <section className="mx-auto my-8 pb-10 flex w-full max-w-[70%] flex-col content-center items-center justify-center rounded-lg bg-tertiary-light pt-5 shadow-lg shadow-gray-400 dark:bg-quaternary dark:shadow-slate-800">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <p>Title</p>
        <input
          type="text"
          name="title"
          required
          className={inputStyles}
          value={formData.title}
          onChange={handleInputChange}
        />
        <p>Descrition</p>
        <input
          type="text"
          name="description"
          required
          className={inputStyles}
          value={formData.description}
          onChange={handleInputChange}
        />
        <p>Author</p>
        <input
          type="text"
          name="author"
          required
          className={inputStyles}
          value={formData.author}
          onChange={handleInputChange}
        />
        <p>Image</p>
        <button
          onClick={handleImgUpModal}
          className={`${inputStyles} flex items-center justify-center bg-secondary align-middle text-white`}
        >
          <GoPlus className="text-xl" /> Add Item
        </button>
        <p>Categories</p>
        <div>
          <select required name="categories" className={inputStyles} id="">
            {novelCategories.map(({ title, value }) => (
              <option value={value}>{title}</option>
            ))}
          </select>
        </div>
        <p>Novel Type</p>
        <select required name="novelType" className={inputStyles} id="">
          {novelTypes.map(({ title, value }) => (
            <option value={value}>{title}</option>
          ))}
        </select>
        <p>Language</p>
        <select required name="language" className={inputStyles} id="">
          {novelLanguages.map(({ title, value }) => (
            <option value={value}>{title}</option>
          ))}
        </select>
      </form>

      <ImgUploadModal isOpen={isOpen} setToggleModal={handleImgUpModal} />
      <BackDrop isOpen={isOpen} />
    </section>
  );
};

export default UploadNovelModal;

/*
Title

Slug

Description

Author

Images

Cover Image

Categories

Novel Type

Language

Chapters

Published Date

Reviews
*/
