import { MainPage } from "@/pages/MainPage";
import { AboutPage } from "@/pages/AboutPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from "@/widgets/Layout";
import { ErrorBoundary } from "@/app/providers/ErrorBoundary";
import { DashboardPage } from "@/pages/Dashboard";
import { CalendarPage } from "@/pages/CalendarPage";
import { SettingsPage } from "@/pages/SettingsPage";

/* eslint-disable no-unused-vars */
export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOTFOUND = 'not_found',
    DASHBOARD = 'dashboard',
    CALENDAR = 'calendar',
    SETTINGS = 'settings'
}
/* eslint-enable no-unused-vars */

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: 'about',
    [AppRoutes.NOTFOUND]: '*',
    [AppRoutes.DASHBOARD]: 'dashboard',
    [AppRoutes.CALENDAR]: 'calendar',
    [AppRoutes.SETTINGS]: 'settings'
}

export const routeConfig = [
    {
        path: RoutePath[AppRoutes.MAIN],
        element: (
            <ErrorBoundary>
                <Layout/>
            </ErrorBoundary>
        ),
        children: [
            {
                index: true, // Маршрут по умолчанию для '/'
                element: <MainPage/>,
            },
            {
                path: '/about',
                element: <AboutPage/>,
            },
            {
                path: '/dashboard',
                element: <DashboardPage />,
            },
            {
                path: '/calendar',
                element: <CalendarPage />,
            },
            {
                path: '/settings',
                element: <SettingsPage />,
            },
            {
                path: '*',
                element: <NotFoundPage/>,
            },
        ],
    },
];

export const router = createBrowserRouter(routeConfig)