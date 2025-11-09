
import { useEffect, useState } from "react";


export default function HeroComponenet() {
    const [showHeader, setShowHeader] = useState(false);
    const [moveTitle, setMoveTitle] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 60) {
                setShowHeader(true);
                setMoveTitle(true);
            } else {
                setShowHeader(false);
                setMoveTitle(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Header che compare quando serve */}
            <header className={`main-header ${showHeader ? "visible" : ""}`}>
                <h1 className="header-title">C.R. Clinica Rigenerativa</h1>
            </header>

            {/* Sezione hero */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className={`hero-title ${moveTitle ? "move-up" : ""}`}>
                        C.R. <br /> Clinica Rigenerativa
                    </h1>
                    <div className="sphere-placeholder"></div>
                </div>
            </section>
        </>
    );
}
