import cls from "./Sidebar.module.scss";
import { classNamesFn } from "@/shared/lib/classNamesFn/classNamesFn";
import { useRef, useState } from "react";
import LeftArrowIcon from '@/shared/assets/icons/left_arrow.svg'
import RightArrowIcon from '@/shared/assets/icons/right_arrow.svg'
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { Input, InputSize } from "@/shared/ui/Input/Input";
import { useTranslation } from "react-i18next";
import Dashboard from '@/shared/assets/icons/dashboard.svg'
import Calendar from '@/shared/assets/icons/calendar.svg'
import Settings from '@/shared/assets/icons/settings.svg'
import Search from '@/shared/assets/icons/search.svg'

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const { t } = useTranslation()

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    const delegationEvents = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;

        const elementWithDataset = target.closest('[data-input]') as HTMLElement | null;

        if (elementWithDataset) {
            setTimeout(() => {
                if (inputRef.current) {
                    inputRef.current.focus();
                }
            }, 300);
        }
    };

    return (
        <div
            data-testid="sidebar"
            className={classNamesFn(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className || '',
            ])}>
            <Button
                data-testid="sidebar-toggle"
                className={cls.collapsedBtn}
                theme={ButtonTheme.CLEAR}
                onClick={onToggle}
            >
                {collapsed ? (
                    <div onClick={onToggle}>
                        <RightArrowIcon />
                    </div>
                ) : (
                    <div onClick={onToggle}>
                        <LeftArrowIcon />
                    </div>
                )}
            </Button>
            <div onClick={delegationEvents} className={cls.items}>
                {
                    collapsed
                        ? (
                            <div onClick={onToggle} data-input="true">
                                <Search />
                            </div>
                        )
                        : <Input ref={inputRef} className={cls.input} size={InputSize.L} />
                }
                <AppLink className={cls.item} to="/dashboard">
                    <Dashboard className={cls.icon} />
                    {!collapsed && <span>{t('Дашбоард')}</span>}
                </AppLink>
                <AppLink className={cls.item} to="/calendar">
                    <Calendar className={cls.icon} />
                    {!collapsed && <span>{t('Календарь')}</span>}
                </AppLink>
                <AppLink className={cls.item} to="/settings">
                    <Settings className={cls.icon} />
                    {!collapsed && <span>{t('Настройки')}</span>}
                </AppLink>
            </div>
        </div>
    );
};
