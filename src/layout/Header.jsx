import { NavLink, Route, Routes } from "react-router-dom"
import { useState } from "react"



export default function Header() {

    const pages = [

        {
            id: 1,
            name: "Noi",
            route: "us",
            icon: <i className="fa-solid fa-user-doctor nav-icon"></i>
        },
        {
            id: 2,
            name: "Info",
            route: "info",
            icon: <i className="fa-solid fa-circle-info nav-icon"></i>
        },
        {
            id: 3,
            name: "Contattaci",
            route: "contact",
            icon: <i className="fa-solid fa-envelope nav-icon"></i>
        }

    ]


    return (
        <header className="pt-2.5 flex flex-col h-(--header-height) bg-(--light-theme) text-(--lightest-theme) text-center justify-between">

            <NavLink to="/" onClick={() => setSelected(0)}><h1 >AMBULATORIO RIGENERATIVO</h1></NavLink>

            <nav className="flex justify-evenly gap-0.5">

                {pages.map((page, index) => {
                    return (
                        <NavLink key={page.id} id={`link-${page.id}`} className="navlink flex w-full p-1 text-center text-(--dark-theme) rounded-t-md border-b cursor-pointer" style={({ isActive }) => ({
                            borderColor: isActive ? "var(--lightest-theme)" : "#bdbdbdff",
                            backgroundColor: isActive ? "var(--lightest-theme)" : "var(--off-page-theme)",
                        })} to={page.route} onClick={() => setSelected(page.id)}>
                            {page.icon}
                            <h2 className="mr-auto">{page.name}</h2>
                        </NavLink>
                    )
                })}

            </nav>

        </header>
    )
}