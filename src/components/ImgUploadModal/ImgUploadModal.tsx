'use client';

import { FC } from 'react';
import { FiUpload } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';

type Props = {
  isOpen: boolean;
  setToggleModal: () => void;
};

const ImgUploadModal: FC<Props> = ({ isOpen, setToggleModal }) => {
  return (
    <div
      className={`fixed inset-0 z-[32] flex items-center justify-center ${isOpen ? 'pointer-events-auto right-0 opacity-100' : 'pointer-events-none -right-36 opacity-0'}`}
    >
      <div className=" h-80 w-96 rounded-lg bg-tertiary-light p-4 text-tertiary-dark shadow-lg dark:bg-quaternary dark:text-tertiary-light">
        <span className="flex content-end items-end justify-end ">
          <button
            onClick={setToggleModal}
            className="text-gray-400 hover:text-gray-800"
          >
            <RiCloseFill />
          </button>
        </span>
        <div className="flex flex-col items-center justify-center py-5">
          <p className="py-5 text-center">Insert an Url | Upload an image</p>
          <input
            type="url"
            className="mb-5 w-80 rounded-lg border border-gray-400 p-2.5 text-tertiary-dark focus:border-primary focus:outline-none dark:bg-tertiary-dark dark:text-tertiary-light dark:focus:border-secondary sm:text-sm"
          />
          <input
            type="file"
            className="inline-block z-[33] opacity-0 border-dotted py-2 px-1 bg-white border-gray-500 border rounded-lg relative"
          />
                    
        <p className='z-[32] border-dashed absolute mt-32 flex items-center'><FiUpload className='text-sm mx-1'/>upload</p>
        </div>
        <div className="flex items-center justify-center">
          <button className="rounded-xl bg-secondary px-9 py-2 text-white">
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImgUploadModal;
