import {Theme} from "@/app/providers/ThemeProvider";
import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, ThemeContext} from "@/app/providers/ThemeProvider/lib/ThemeContext";

interface useThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export const useTheme = (): useThemeResult => {
    const context = useContext(ThemeContext);

    // Проверка на наличие контекста и обязательных функций
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    const {theme, setTheme} = context;

    // Обработка случая, когда theme или setTheme могут быть undefined
    if (theme === undefined || setTheme === undefined) {
        throw new Error("Theme or setTheme is undefined in ThemeContext");
    }

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
};
