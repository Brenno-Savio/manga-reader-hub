import { Dispatch, SetStateAction, createContext } from 'react';

type ThemeContectType = {
  darkTheme: boolean;
  setDarkTheme: Dispatch<SetStateAction<boolean>>;
};

const ThemeContext = createContext<ThemeContectType>({
  darkTheme: false,
  setDarkTheme: () => null,
});

export default ThemeContext;
