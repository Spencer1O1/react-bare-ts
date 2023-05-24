import { useState, useContext, createContext } from 'react';
import { darkTheme, emptyTheme, lightTheme } from './data/themes';
import { type Theme } from './types';

export { lightTheme, darkTheme };

interface IThemeContext {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const initialState: IThemeContext = {
  theme: emptyTheme,
  setTheme: () => {}
};

const ThemeContext = createContext<IThemeContext>(initialState);

export const useTheme = (): IThemeContext => useContext(ThemeContext);

export const ThemeProvider = ({ children, defaultTheme }: { children: React.ReactNode; defaultTheme: Theme }): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
