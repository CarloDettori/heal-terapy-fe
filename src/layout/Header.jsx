
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "/logo.png"

export default function Header() {
    const [smallWindow, setSmallWindow] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setSmallWindow(window.innerWidth < 460);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
        <header className=" bg-(--dark-theme) border-bottom-theme shadow-lg w-full flex items-center z-1000 p-3 justify-between h-(--header-height)">

            <div className="flex relative">

                <Link className="flex-shrink-0" to="/">
                    <img src={logo} alt="" className="h-10 w-auto flex-shrink-0" />

                    <h2 className=" text-(--lightest-theme)  font-bold my-auto absolute top-2 left-3">RC</h2>
                </Link>

            </div>

            <nav className="flex justify-evenly gap-3 sm:me-3">

                {pages.map((page) => {

                    return (
                        <NavLink key={page.id} id={`link-${page.id}`} className="flex gap-1 px-1  text-center text-(--light-theme) cursor-pointer" to={page.route}>
                            <i className={`${page.icon} max-h-(--title-size) mx-auto my-auto`}></i>

                            {!smallWindow && <p className="mx-auto my-auto">{page.name}</p>}
                        </NavLink>
                    )

                })}

            </nav>

        </header>
    );
}