import './Loader.scss';
import { classNamesFn } from "@/shared/lib/classNamesFn/classNamesFn";

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNamesFn("lds-roller", {}, [className || ''])}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
);
