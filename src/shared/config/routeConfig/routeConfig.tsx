import { MainPage } from "@/pages/MainPage";
import { AboutPage } from "@/pages/AboutPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from "@/widgets/Layout";
import { ErrorBoundary } from "@/app/providers/ErrorBoundary";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOTFOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: 'about',
    [AppRoutes.NOTFOUND]: '*',
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
                path: '*',
                element: <NotFoundPage/>,
            },
        ],
    },
];

export const router = createBrowserRouter(routeConfig)