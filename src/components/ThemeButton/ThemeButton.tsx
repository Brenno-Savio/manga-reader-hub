'use client';

import ThemeContext from '@/context/theme.Context';
import { useContext } from 'react';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

const ThemeButton = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  return (
    <div className="fixed z-10 m-10 flex items-end justify-end right-1">
      <button
        className="bg-quaternary dark:text-quaternary items-center justify-center rounded-full p-3 align-middle text-4xl text-white dark:bg-white"
        onClick={() => (darkTheme ? setDarkTheme(false) : setDarkTheme(true))}
      >
        {darkTheme ? <MdOutlineLightMode /> : <MdDarkMode />}
      </button>
    </div>
  );
};

export default ThemeButton;
