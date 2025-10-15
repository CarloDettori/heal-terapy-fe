import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext"
export default function DefaultLayout() {



    return (
        <>
            <Header />
            <main className="h-(--main-height) bg-(--lightest-theme) text-(--dark-theme)">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}