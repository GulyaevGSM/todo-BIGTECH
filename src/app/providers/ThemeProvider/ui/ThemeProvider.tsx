import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "@/app/providers/ThemeProvider/lib/ThemeContext";
import { FC, ReactNode, useMemo, useState } from "react";

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { children, initialTheme } = props

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}