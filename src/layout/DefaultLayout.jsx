import { Outlet } from "react-router-dom";
import HeaderOld from "./HeaderOld.jsx";
import Footer from "./Footer.jsx";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext"
export default function DefaultLayout() {



    return (
        <>

            <main className=" min-h-screen bg-(--lightest-theme) text-(--dark-theme)">
                <Outlet />
            </main>
            <Footer />

        </>
    )
}