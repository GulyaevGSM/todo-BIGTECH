import cls from "./AppLink.module.scss";
import {classNamesFn} from "@/shared/lib/classNamesFn/classNamesFn";
import {FC, ReactNode} from "react";
import {Link, LinkProps} from "react-router-dom";

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={classNamesFn(cls.AppLink, {}, [className || '',])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
