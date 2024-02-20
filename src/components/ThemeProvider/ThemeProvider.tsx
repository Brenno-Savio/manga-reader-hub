'use client';

import { useEffect, useState } from 'react';

import ThemeContext from '@/context/theme.Context';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeFromStorage: boolean =
    typeof localStorage !== 'undefined' && localStorage.getItem('site-theme')
      ? JSON.parse(localStorage.getItem('site-theme')!)
      : false;

  const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage);
  const [renderComponent, setRenderComponent] = useState(false);

  useEffect(() => {
    setRenderComponent(true);
  }, []);

  if (!renderComponent) return <></>;

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`${darkTheme ? 'dark' : ''} min-h-screen`}>
        <div className="dark:text-tertiary-light dark:bg-tertiary-dark text-[#1E1E1E]">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
