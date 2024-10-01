import { classNamesFn } from "@/shared/lib/classNamesFn/classNamesFn";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Theme, useTheme } from "@/app/providers/ThemeProvider";
import LightIcon from '@/shared/assets/icons/light.svg'
import DarkIcon from '@/shared/assets/icons/dark.svg'

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            optionStyle="center"
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={
                classNamesFn('', {}, [
                    className || '',
                ])
            }>
            {theme === Theme.LIGHT ? <DarkIcon/> : <LightIcon/>}
        </Button>
    );
};
