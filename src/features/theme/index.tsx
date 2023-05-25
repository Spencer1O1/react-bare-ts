import { useState, useContext, createContext } from 'react';
import { Theme } from './config/themes';
import { PrivateTheme } from './data/private-themes';
import './config/themes.css';

interface IThemeContext {
  theme: Theme | PrivateTheme;
  setTheme: React.Dispatch<React.SetStateAction<Theme | PrivateTheme>>;
}

const initialState: IThemeContext = {
  theme: PrivateTheme.DEFAULT,
  setTheme: () => {}
};

const ThemeContext = createContext<IThemeContext>(initialState);

export { Theme };

export const useTheme = (): IThemeContext => useContext(ThemeContext);

export const ThemeProvider = ({ children, defaultTheme }: { children: React.ReactNode; defaultTheme?: Theme }): JSX.Element => {
  const [theme, setTheme] = useState<Theme | PrivateTheme>(defaultTheme || PrivateTheme.DEFAULT);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
