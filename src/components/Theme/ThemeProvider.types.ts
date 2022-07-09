import { ReactNode } from 'react';

export interface ThemeProviderProps {
  children?: ReactNode;
  globalFonts?: string;
  // TODO: figure out typing for the theme
  theme?: unknown;
}
