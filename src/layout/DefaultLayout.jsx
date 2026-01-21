import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext"
import SidebarComponent from "../components/common/SidebarCompnent.jsx";
export default function DefaultLayout() {

    const { sidebarLinks } = useContext(GlobalContext);

    return (
        <>
            <Header />
            <div className="flex">
                <SidebarComponent infos={sidebarLinks} />
                <main className=" h-screen bg-(--lightest-theme) text-(--dark-theme) overflow-y-scroll hide-scrollbar w-full">
                    <Outlet />
                </main>
            </div>

            <Footer />

        </>
    )
}