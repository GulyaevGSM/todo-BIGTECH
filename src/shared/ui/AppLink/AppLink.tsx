import cls from "./AppLink.module.scss";
import { classNamesFn } from "@/shared/lib/classNamesFn/classNamesFn";
import { FC, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

export enum MarginNavbar {
    // eslint-disable-next-line no-unused-vars
    marginLeft = 'margin_left_navbar',
    // eslint-disable-next-line no-unused-vars
    marginRight = 'margin_right_navbar',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    navbarFlag?: MarginNavbar;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        navbarFlag,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={classNamesFn(cls.AppLink, {}, [className || '', cls[navbarFlag!]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
