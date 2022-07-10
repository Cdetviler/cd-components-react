import React from 'react';
import {
  createGlobalStyle,
  ThemeProvider as StyledComponentsThemeProvider,
} from 'styled-components';
import generateGlobalFonts from './defaultGlobalFonts';
import { themeDefault } from './themeDefault';
import { ThemeProviderProps } from './ThemeProvider.types';

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme, globalFonts }) => {
  const fonts = globalFonts || generateGlobalFonts();
  const GlobalFonts = createGlobalStyle`${fonts}`;

  const customTheme = theme === null ? themeDefault : theme;
  return (
    <StyledComponentsThemeProvider theme={customTheme}>
      <GlobalFonts />
      {children}
    </StyledComponentsThemeProvider>
  );
};

export { ThemeProvider };
