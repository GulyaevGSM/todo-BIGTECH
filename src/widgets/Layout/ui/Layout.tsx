import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/widgets/Sidebar";
import { Navbar } from "@/widgets/Navbar";
import { PageLoader } from "@/widgets/PageLoader/ui/PageLoader";

export function Layout() {
    return (
        <div>
            {/* Общие компоненты, например, Header */}
            <Navbar className={"links"}/>
            <div className="content-page">
                <Sidebar/>
                <Suspense fallback={<PageLoader />}>
                    <div className="page-wrapper">
                        <Outlet/>
                    </div>
                </Suspense>
            </div>
        </div>
    );
}