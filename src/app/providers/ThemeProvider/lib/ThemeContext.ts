import { createContext } from "react";

/* eslint-disable no-unused-vars */
export enum Theme {
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme',
}
/* eslint-enable no-unused-vars */

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (_theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'