import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useContext, useRef, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext"
import SidebarComponent from "../components/common/SidebarCompnent.jsx";
export default function DefaultLayout() {

    const { sidebarLinks } = useContext(GlobalContext);
    const scrollRef = useRef(null)
    const { pathname } = useLocation()

    useEffect(() => {
        function scrollToTarget(target) {
            if (!target) return
            target.scrollIntoView({ behavior: "auto", block: "start" })
        }

        scrollToTarget(scrollRef.current)
    }, [pathname])

    return (
        <>
            <Header />
            <div className="flex">
                <SidebarComponent infos={sidebarLinks} />
                <main className="h-full bg-(--lightest-theme) text-(--dark-theme) overflow-y-scroll hide-scrollbar w-full">
                    <div ref={scrollRef}></div>
                    <Outlet />
                </main>
            </div>


            <Footer />
        </ >
    )
}