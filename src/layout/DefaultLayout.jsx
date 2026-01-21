import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext"
import SidebarComponent from "../components/common/SidebarCompnent.jsx";
export default function DefaultLayout() {

    const sideInfo = [
        {
            id: 1,
            route: "/info/4",
            title: "THERAPY®"
        },
        {
            id: 2,
            route: "/info/4/2",
            title: "Storia"
        },
        {
            id: 3,
            route: "/info/4/3",
            title: "Esponenti"
        },
        {
            id: 4,
            route: "",
            title: ""
        },

    ]

    return (
        <>
            <Header />
            <div className="flex">
                <SidebarComponent infos={sideInfo} />
                <main className=" h-screen bg-(--lightest-theme) text-(--dark-theme) overflow-y-scroll hide-scrollbar">
                    <Outlet />
                </main>
            </div>

            <Footer />

        </>
    )
}