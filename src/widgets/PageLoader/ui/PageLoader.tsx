import cls from "./PageLoader.module.scss";
import {classNamesFn} from "@/shared/lib/classNamesFn/classNamesFn";
import {Loader} from "@/shared/ui/Loader/Loader";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({className}: PageLoaderProps) => {
    return (
        <div className={classNamesFn(cls.PageLoader, {}, [
            className || '',
        ])}>
            <Loader />
        </div>
    );
};
