import { router } from "@/shared/config/routeConfig/routeConfig";
import { RouterProvider } from "react-router-dom";
import { classNamesFn } from "@/shared/lib/classNamesFn/classNamesFn";
import { useTheme } from "@/app/providers/ThemeProvider";
import { Suspense } from "react";

const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNamesFn('app', {}, [theme])}>
            <Suspense fallback="">
                <RouterProvider router={router}/>
            </Suspense>
        </div>
    );
};

export default App;