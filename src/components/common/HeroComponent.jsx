
import { useEffect } from "react";
import SphereDisintegration from "./SphereDisintegration.jsx";

export default function HeroComponent() {
    useEffect(() => {
        const header = document.querySelector(".main-header");
        const title = document.querySelector(".hero-title");
        let headerVisible = false;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 120 && !headerVisible) {
                header.classList.add("visible");
                title.classList.add("fade-out", "fade-out-anim");
                title.classList.remove("fade-in", "fade-in-anim");
                headerVisible = true;
            } else if (scrollY <= 120 && headerVisible) {
                header.classList.remove("visible");
                title.classList.add("fade-in", "fade-in-anim");
                title.classList.remove("fade-out", "fade-out-anim");
                headerVisible = false;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <section className="hero-section">
                <h1 className="hero-title">Benvenuto nel mondo digitale</h1>
                <SphereDisintegration />
            </section>

            <header className="main-header">
                <h2 className="header-title">Il mio sito</h2>
            </header>
        </>
    );
}