import cls from "./Button.module.scss";
import { classNamesFn } from "@/shared/lib/classNamesFn/classNamesFn";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

export enum ButtonTheme {
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme?: ButtonTheme;
    disabled?: boolean;
    optionStyle?: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        disabled = false,
        optionStyle,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [cls.disabled]: disabled,
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
