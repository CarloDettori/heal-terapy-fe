
import { useEffect, useState } from "react";


export default function HeroComponenet() {
    const [showHeader, setShowHeader] = useState(false);
    const [moveTitle, setMoveTitle] = useState(false);

    useEffect(() => {
        const header = document.querySelector(".main-header");
        const title = document.querySelector(".hero-title");
        let headerVisible = false;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 120 && !headerVisible) {
                header.classList.add("visible");
                title.classList.remove("fade-in", "fade-in-anim");
                title.classList.add("fade-out", "fade-out-anim");
                headerVisible = true;
            } else if (scrollY <= 120 && headerVisible) {
                header.classList.remove("visible");
                title.classList.remove("fade-out", "fade-out-anim");
                title.classList.add("fade-in", "fade-in-anim");
                headerVisible = false;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Header che compare quando serve */}
            <section class="hero-section">
                <h1 class="hero-title">Benvenuto nel mondo digitale</h1>
                <div class="sphere-placeholder"></div>
            </section>

            <header class="main-header">
                <h2 class="header-title">Il mio sito</h2>
            </header>
        </>
    );
}
