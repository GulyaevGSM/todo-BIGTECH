import cls from "./Navbar.module.scss";
import { classNamesFn } from "@/shared/lib/classNamesFn/classNamesFn";
import { AppLink, MarginNavbar } from "@/shared/ui/AppLink/AppLink";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher/ui/ThemeSwitcher";
import { LangSwitcher } from "@/widgets/LangSwitcher/ui/LangSwitcher";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNamesFn(cls.Navbar, {}, [
            className || '',
        ])}>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
            <div className={cls.links}>
                <AppLink
                    navbarFlag={MarginNavbar.marginRight}
                    to={RoutePath.main}
                >
                    {t('Главная')}
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                >
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};