import cls from "./PageError.module.scss";
import { classNamesFn } from "@/shared/lib/classNamesFn/classNamesFn";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button/Button";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation()

    const reload = () => {
        location.reload()
    }

    return (
        <div className={classNamesFn(cls.PageError, {}, [
            className || '',
        ])}>
            {t('Произошла ошибка')}
            <Button onClick={reload}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
