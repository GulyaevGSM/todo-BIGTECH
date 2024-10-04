import cls from "./Input.module.scss";
import { classNamesFn } from "@/shared/lib/classNamesFn/classNamesFn";
import { forwardRef, Ref } from "react";
import { useTranslation } from "react-i18next";

export enum InputSize {
    // eslint-disable-next-line no-unused-vars
    M = 'size_m',
    // eslint-disable-next-line no-unused-vars
    L = 'size_l',
    // eslint-disable-next-line no-unused-vars
    S = 'size_s',
    // eslint-disable-next-line no-unused-vars
    XL = 'size_xl',
}

interface InputProps {
    className?: string;
    placeholder?: string
    size?: InputSize;
    ref?: Ref<HTMLInputElement>;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, placeholder = 'Поиск', size = InputSize.M }, ref) => {
    const { t } = useTranslation()

    const mods: Record<string, boolean> = {
        [cls[size]]: true
    }

    return (
        <input
            ref={ref}
            placeholder={t(placeholder)}
            className={classNamesFn(cls.Input, mods, [
                className || '',
            ])}
        />
    );
});
