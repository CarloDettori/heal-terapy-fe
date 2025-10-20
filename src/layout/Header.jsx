import { NavLink, Route, Routes } from "react-router-dom"
import { useState } from "react"



export default function Header() {

    const pages = [
        {
            id: 1,
            name: "Home",
            route: "",
            icon: "fa-solid fa-house"
        },
        {
            id: 2,
            name: "Chi sono",
            route: "us",
            icon: "fa-solid fa-user-doctor"
        },
        {
            id: 3,
            name: "Info",
            route: "info",
            icon: "fa-solid fa-circle-info"
        },
        {
            id: 4,
            name: "Contattami",
            route: "contact",
            icon: "fa-solid fa-envelope"
        }

    ]


    return (
        <header className="pt-1 flex flex-col  bg-(--light-theme) text-(--lightest-theme) text-center justify-between">

            <h1 className="my-8" >AMBULATORIO RIGENERATIVO</h1>

            <nav className="flex justify-evenly gap-0.5">

                {pages.map((page, index) => {
                    return (
                        <NavLink key={page.id} id={`link-${page.id}`} className="navlink flex flex-col w-full p-1 text-center text-(--dark-theme) rounded-t-md border-b cursor-pointer" style={({ isActive }) => ({
                            borderColor: isActive ? "var(--lightest-theme)" : "#bdbdbdff",
                            backgroundColor: isActive ? "var(--lightest-theme)" : "var(--off-page-theme)",
                        })} to={page.route} onClick={() => setSelected(page.id)}>
                            <i className={`${page.icon} max-h-(--title-size) mx-auto mt-2`}></i>
                            <h2 className="mx-auto">{page.name}</h2>
                        </NavLink>
                    )
                })}

            </nav>

        </header>
    )
}