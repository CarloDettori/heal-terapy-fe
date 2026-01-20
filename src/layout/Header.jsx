import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "/logo.png"

export default function Header() {
    const pages = [
        {
            id: 1,
            name: "HOME",
            route: "",
            icon: "fa-solid fa-house"
        },
        {
            id: 2,
            name: "INFO",
            route: "info",
            icon: "fa-solid fa-circle-info"
        },
    ]


    return (
        <header className="fixed bg-(--dark-theme) border-bottom-theme shadow-lg  w-full flex items-center z-1000 p-3 justify-between">
            <div className="flex gap-5 relative">
                <Link to="/">
                    <img src={logo} alt="" className="h-17" />

                    <h1 className=" text-(--lightest-theme)  font-bold my-auto absolute top-4 left-5.5">RC</h1>
                </Link>
            </div>

            <nav className="flex justify-evenly gap-3 me-3">

                {pages.map((page, index) => {

                    return (
                        <NavLink key={page.id} id={`link-${page.id}`} className="navlink flex flex-col w-full px-2 text-center text-(--light-theme) cursor-pointer" to={page.route}>
                            <i className={`${page.icon} max-h-(--title-size) mx-auto mt-2`}></i>
                            <h2 className="mx-auto">{page.name}</h2>
                        </NavLink>
                    )

                })}

            </nav>
        </header>
    );
}