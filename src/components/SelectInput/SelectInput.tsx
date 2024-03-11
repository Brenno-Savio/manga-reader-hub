import { Option } from '@/models/Option';
import { FC } from 'react';
import { IoClose } from 'react-icons/io5';

type Props = {
  isOpen: boolean;
  options: Option[];
  selectedOptions: string[];
  toggleDropdown: () => void;
  handleSelectOption: (value: string) => void;
  handleRemoveOption: (value: string) => void;
};

const SelectInput: FC<Props> = ({
  isOpen,
  options,
  selectedOptions,
  toggleDropdown,
  handleSelectOption,
  handleRemoveOption,
}) => {
  return (
    <div className="w-full">
      <ul className="flex w-full flex-col items-center justify-center">
        <div className="m-5 inline-block w-[66%] flex-wrap justify-between rounded-lg border border-gray-300 bg-white py-2 focus:shadow-md focus:outline-none dark:bg-tertiary-dark dark:text-tertiary-light  sm:text-sm">
          <div className='w-full flex flex-wrap'>
            {selectedOptions.length > 0 &&
              selectedOptions.map((value) => (
                <div className="m-1 flex w-fit justify-between border border-gray-300 bg-gray-300 p-1 text-xs dark:text-black">
                  {options.find((option) => option.value === value)?.title}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemoveOption(value);
                    }}
                    className="mx-1 font-bold"
                  >
                    <IoClose />
                  </button>
                </div>
              ))}

            <input
              type="text"
              className="m-2 border-none bg-transparent px-2 focus:outline-none"
              placeholder="...select category"
              onClick={toggleDropdown}
            />
          </div>

          {isOpen && (
            <div className="absolute z-10 mt-2.5 max-h-40 w-[44%] overflow-y-auto rounded border border-gray-400 bg-white dark:bg-tertiary-dark">
              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleSelectOption(option.value)}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {option.title}
                </div>
              ))}
            </div>
          )}
        </div>
      </ul>
    </div>
  );
};

export default SelectInput;
