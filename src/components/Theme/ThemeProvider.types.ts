import { ReactNode } from 'react';

export interface ThemeProviderProps {
  children: ReactNode;
  // TODO: figure out typing for the theme
  theme: unknown;
}
