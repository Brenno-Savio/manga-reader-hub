'use client';

import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';

import toast from 'react-hot-toast';

type Props = {
  showModal: boolean;
  handleImgUpModal: () => void;
  handleImageSubmit: (imageData: File[] ) => void;
};

const ImgUploadModal: FC<Props> = ({
  showModal,
  handleImgUpModal,
  handleImageSubmit,
}) => {
  const [file, setFile] = useState<File[]>([]);

  const handleFileDropped = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile([...file, event.target.files[0]]);      
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if(typeof file === 'object' && file) {
        handleImageSubmit(file);
      }
    } catch (error) {
      toast.error('file not selected');
    } finally {
      setFile([]);
      handleImgUpModal();
    }
  };

  return (
    <form
      className={`fixed inset-0 z-[32] flex items-center justify-center ${showModal ? 'pointer-events-auto right-0 opacity-100' : 'pointer-events-none -right-36 opacity-0'}`}
      onSubmit={handleSubmit}
    >
      <div className=" h-[60%] w-[38%] rounded-lg bg-tertiary-light p-4 pb-2 text-tertiary-dark shadow-lg dark:bg-quaternary dark:text-tertiary-light">
        <span className="flex content-end items-end justify-end ">
          <button
            onClick={() => handleImgUpModal}
            className="text-gray-400 hover:text-gray-800"
          >
            <RiCloseFill />
          </button>
        </span>
        <div className="flex flex-col items-center justify-center py-3">
          <h2 className="flex items-center justify-center pb-10 pt-5 text-center text-2xl font-bold">
            <p className="px-1">Upload an image</p>
          </h2>
        </div>
        <div
          className={`m-4 mb-16 flex items-center justify-center rounded-xl border border-dashed border-gray-500 text-xs`}
        >
          <input
            type="file"
            className={`relative z-[33] w-[100%] cursor-pointer bg-white px-24 py-4 opacity-0 ${!showModal ? 'pointer-events-none' : 'pointer-events-auto'}`}
            onChange={handleFileDropped}
          />
          <div
            className={`absolute z-[32] flex w-[30%] justify-between py-3`}
          >
            <span className="flex items-center pr-9">
              <FiUpload className="mx-1 text-sm" />
              upload
            </span>
            <span
              className={`flex items-center text-[10px] ${file.length > 0 ? 'text-succesful' : ''}`}
            >
              <FaFileAlt className={`mx-1 text-sm`} />
              {file
                ? `${file.length} images are uploaded`
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
