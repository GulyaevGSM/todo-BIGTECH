import cls from "./Button.module.scss";
import { classNamesFn } from "@/shared/lib/classNamesFn/classNamesFn";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

export enum ButtonTheme {
    // eslint-disable-next-line no-unused-vars
    CLEAR = "clear",
    // eslint-disable-next-line no-unused-vars
    OUTLINE = "outline",
}

export enum ButtonSize {
    // eslint-disable-next-line no-unused-vars
    M = 'size_m',
    // eslint-disable-next-line no-unused-vars
    L = 'size_l',
    // eslint-disable-next-line no-unused-vars
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme?: ButtonTheme;
    activeSize?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    optionStyle?: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        disabled = false,
        activeSize = false,
        size = ButtonSize.M,
        optionStyle,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [cls.disabled]: disabled,
        [cls.activeSize]: activeSize,
        [cls[size]]: true
    };

    return (
        <button
            type="button"
            className={classNamesFn(cls.Button, mods, [
                className!, cls[theme!], cls[optionStyle!]
            ])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
