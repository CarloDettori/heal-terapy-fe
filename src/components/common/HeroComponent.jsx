
import { useEffect } from "react";
import SphereDisintegration from "./SphereDisintegration.jsx";
import Header from "../../layout/Header.jsx"

export default function HeroComponent() {

    useEffect(() => {
        const onHide = () => {
            const el = document.querySelector(".hero-title");
            if (el) el.classList.add("fade-out-anim"); // usa la classe definita in index.css
        };
        window.addEventListener("hero:hide", onHide);
        return () => window.removeEventListener("hero:hide", onHide);
    }, []);

    return (
        <>
            <section className="hero-section">
                <h1 className="hero-title text-center  absolute top-85">RC<br />Ambulatorio Medico<br />Terapia del dolore<br />Medicina rigenerativa</h1>

                <SphereDisintegration />

            </section>

            <Header />
        </>
    );

}