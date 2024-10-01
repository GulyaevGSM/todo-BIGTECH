import { classNamesFn } from "@/shared/lib/classNamesFn/classNamesFn";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
            className={classNamesFn('', {}, [
                className || '',
            ])}>
            {t('Язык')}
        </Button>
    );
};
