
import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import SphereDisintegration from "./SphereDisintegration.jsx";
import logo from "/logo.png"

export default function HeroComponent() {

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

    useEffect(() => {
        const header = document.querySelector(".main-header");
        const title = document.querySelector(".hero-title");
        let headerVisible = false;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 160 && !headerVisible) {
                header.classList.add("visible");
                title.classList.add("fade-out", "fade-out-anim");
                title.classList.remove("fade-in", "fade-in-anim");
                headerVisible = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <section className="hero-section">
                <h1 className="hero-title text-center  absolute top-85">C.R. <br />Clinica Rigenerativa</h1>

                <SphereDisintegration />

            </section>

            <header className="main-header flex justify-between">
                <div className="flex gap-5 relative">
                    <Link to="/">
                        <img src={logo} alt="" className="h-20" />

                        <h2 className="header-title my-auto absolute top-4 left-5.5">CR</h2>
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
        </>
    );
}