import { ChangeEvent, FC } from 'react';

type Props = {
  value: string | undefined;
  name: string;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  input: boolean;
};

const StringInput: FC<Props> = ({ value, name, handleChange, input }) => {
  const firstLetterToUpperCase = (name: string): string => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mt-2 w-[66%] text-start">
        {typeof name === 'string' ? firstLetterToUpperCase(name) : name}
      </p>
      {input ? (
        <input
          type="text"
          value={value}
          name={name}
          onChange={handleChange}
          className="input"
        />
      ) : (
        <textarea
          rows={4}
          name={name}
          value={value}
          onChange={handleChange}
          className="input"
        />
      )}
    </div>
  );
};

export default StringInput;
