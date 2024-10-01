import cls from "./Sidebar.module.scss";
import { classNamesFn } from "@/shared/lib/classNamesFn/classNamesFn";
import { useState } from "react";
import LeftArrowIcon from '@/shared/assets/icons/left_arrow.svg'
import RightArrowIcon from '@/shared/assets/icons/right_arrow.svg'
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true)
    const { t } = useTranslation()

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid="sidebar"
            className={classNamesFn(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className || '',
            ])}>
            {t('Это сайдбар')}
            <Button
                data-testid="sidebar-toggle"
                className={cls.collapsedBtn}
                theme={ButtonTheme.CLEAR}
                onClick={onToggle}
            >
                {collapsed ? (<div>
                    <RightArrowIcon onClick={onToggle}/>
                </div>) : (<div>
                    <LeftArrowIcon onClick={onToggle}/>
                </div>)}
            </Button>
        </div>
    );
};
