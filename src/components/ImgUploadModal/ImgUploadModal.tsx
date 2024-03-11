'use client';

import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';

import toast from 'react-hot-toast';

type Props = {
  isOpen: boolean;
  handleImgUpModal: () => void;
  handleImageSubmit: (imageData: File | string) => void;
};

const ImgUploadModal: FC<Props> = ({
  isOpen,
  handleImgUpModal,
  handleImageSubmit,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleFileDropped = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setImageUrl(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (file) {
        handleImageSubmit(file);
      } else if (imageUrl) {
        handleImageSubmit(imageUrl);
      }
    } catch (error) {
      toast.error('file not selected');
    } finally {
      setFile(null);
      setImageUrl(null);
      handleImgUpModal()
    }
  };

  const getSlicedName = (name: string) => {
    const result = name.slice(0, 5);
    return result;
  };

  return (
    <form
      className={`fixed inset-0 z-[32] flex items-center justify-center ${isOpen ? 'pointer-events-auto right-0 opacity-100' : 'pointer-events-none -right-36 opacity-0'}`}
      onSubmit={handleSubmit}
    >
      <div className=" h-[60%] w-[38%] rounded-lg bg-tertiary-light p-4 text-tertiary-dark shadow-lg dark:bg-quaternary dark:text-tertiary-light">
        <span className="flex content-end items-end justify-end ">
          <button
            onClick={() => handleImgUpModal}
            className="text-gray-400 hover:text-gray-800"
          >
            <RiCloseFill />
          </button>
        </span>
        <div className="flex flex-col items-center justify-center py-3">
          <h2 className="flex items-center justify-center pb-16 pt-5 text-center text-lg font-bold">
            <p className="px-1"> Insert an Url </p>
            <p className="px-1">|</p>
            <p className="px-1">Upload an image</p>
          </h2>
          <input
            type="url"
            className={`w-[94%] rounded-lg border border-gray-400 p-2.5 text-tertiary-dark focus:border-primary focus:outline-none dark:bg-tertiary-dark dark:text-tertiary-light dark:focus:border-secondary sm:text-sm`}
            disabled={(file ? true : false)}
            onChange={handleInputChange}
          />
        </div>
        <div
          className={`m-4 mb-6 flex items-center justify-center rounded-xl border border-dashed border-gray-500 text-xs ${imageUrl ? 'border-gray-200 text-gray-300' : ''}`}
        >
          <input
            type="file"
            className={`relative z-[33] w-[100%] cursor-pointer bg-white px-24 py-2 opacity-0 ${imageUrl || !isOpen ? 'pointer-events-none' : 'pointer-events-auto'}`}
            onChange={handleFileDropped}
            disabled={imageUrl || !isOpen ? true : false}
          />
          <div
            className={`absolute z-[32] flex w-[30%] justify-between py-3 ${imageUrl ? 'text-' : ''}`}
          >
            <span className="flex items-center pr-9">
              <FiUpload className="mx-1 text-sm" />
              upload
            </span>
            <span
              className={`flex items-center text-[10px] ${file ? 'text-succesful' : ''}`}
            >
              <FaFileAlt className={`mx-1 text-sm`} />
              {file
                ? `File ${getSlicedName(file.name)}... successful uploaded`
                : 'Drag or paste file here'}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="rounded-xl bg-secondary px-9 py-2 text-white">
            send
          </button>
        </div>
      </div>
    </form>
  );
};

export default ImgUploadModal;
