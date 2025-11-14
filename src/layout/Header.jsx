import { useEffect } from "react";

export default function HeaderComponent() {
    useEffect(() => {
        const header = document.querySelector(".main-header");
        const title = document.querySelector(".hero-title");

        const handleScroll = () => {
            // ✅ prima di tutto controlliamo che esistano
            if (!header || !title) return;

            const scrollY = window.scrollY;

            if (scrollY > 100) {
                header.classList.add("visible");
                title.classList.add("move-up");
            } else {
                header.classList.remove("visible");
                title.classList.remove("move-up");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="main-header">
            <h1 className="header-title">C.R.</h1>
        </header>
    );
}