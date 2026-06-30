
import { NavLink, Link } from "react-router-dom";
import logo from "/logo.png"

export default function Header() {
    const pages = [
        {
            id: 1,
            name: "PAGINA INIZIALE",
            route: "",
            icon: "fa-solid fa-house"
        },
        {
            id: 2,
            name: "INFO",
            route: "info",
            icon: "fa-solid fa-circle-info"
        },
        {
            id: 3,
            name: "PRENOTA VISITA",
            route: "checkout",
            icon: "fa-solid fa-calendar-check"
        },
    ]


    return (
        <header className="fixed bg-(--dark-theme) border-bottom-theme shadow-lg w-full flex items-center z-1000 p-3 justify-between">
            <div className="flex relative">
                <Link className="flex-shrink-0" to="/">
                    <img src={logo} alt="" className="h-17 w-auto flex-shrink-0" />

                    <h1 className=" text-(--lightest-theme)  font-bold my-auto absolute top-4 left-5.5">CR</h1>
                </Link>
                <Link className="hide-below-580 text-(--lightest-theme) my-auto px-3 font-bold" to="/">
                    <h1 className="">Clinica Rigenerativa</h1>
                </Link>
            </div>

            <nav className="flex justify-evenly sm:gap-3 sm:me-3">

                {pages.map((page) => {

                    return (
                        <NavLink key={page.id} id={`link-${page.id}`} className="navlink flex flex-col sm:w-full w-20 px-1 sm:px-2 text-center text-(--light-theme) cursor-pointer" to={page.route}>
                            <i className={`${page.icon} max-h-(--title-size) mx-auto mt-2`}></i>
                            <h2 className="mx-auto my-auto">{page.name}</h2>
                        </NavLink>
                    )

                })}

            </nav>
        </header>
    );
}