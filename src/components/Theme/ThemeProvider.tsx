import React from "react";
import { themeDefault } from "./themeDefault";
import { ThemeProvider as StyledComponentsThemeProvider} from "styled-components";
import { ThemeProviderProps } from "./ThemeProvider.types";

const ThemeProvider: React.FC<ThemeProviderProps> = ({children, theme}) => {
    const customTheme = theme === null ? themeDefault : theme;
    return <StyledComponentsThemeProvider theme={customTheme}>{children}</StyledComponentsThemeProvider>
}

export { ThemeProvider }