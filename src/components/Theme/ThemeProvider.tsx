import React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { themeDefault } from './themeDefault';
import { ThemeProviderProps } from './ThemeProvider.types';

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const customTheme = theme === null ? themeDefault : theme;
  return (
    <StyledComponentsThemeProvider theme={customTheme}>{children}</StyledComponentsThemeProvider>
  );
};

export { ThemeProvider };
