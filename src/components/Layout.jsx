import { Suspense } from "react";
import Header from "./Header/Header"
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Header />
            <Suspense fallback={null}>
                <main>
                    <Outlet />
                </main>
            </Suspense>
        </div>
    )
};

export default Layout;