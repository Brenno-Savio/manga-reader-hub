'use client';

import ThemeContext from '@/context/theme.Context';
import { useContext } from 'react';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

const ThemeButton = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  return (
    <button
      className="items-center justify-center rounded-full bg-quaternary p-3 align-middle text-4xl text-white dark:bg-white dark:text-quaternary"
      onClick={() => (darkTheme ? setDarkTheme(false) : setDarkTheme(true))}
    >
      {darkTheme ? <MdOutlineLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default ThemeButton;
