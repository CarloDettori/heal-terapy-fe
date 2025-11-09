import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext"
export default function DefaultLayout() {



    return (
        <>
            <Header />
            <main className=" min-h-screen bg-(--lightest-theme) text-(--dark-theme)">
                <Outlet />
            </main>
            <Footer />

        </>
    )
}