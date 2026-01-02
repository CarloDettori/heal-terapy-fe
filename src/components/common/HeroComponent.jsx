
import { useEffect, useState } from "react";
import SphereDisintegration from "./SphereDisintegration.jsx";
import Header from "../../layout/Header.jsx"

export default function HeroComponent({ regenerativeRef, painRef }) {

    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const onHide = () => {
            setHidden(true);
        };
        window.addEventListener("hero:hide", onHide);
        return () => window.removeEventListener("hero:hide", onHide);
    }, []);

    return (
        <>
            <section className="hero-section">
                <h1 className={`hero-title px-10 text-center absolute ${hidden ? "hero-hidden-by-button" : ""}`}>RC<br />Ambulatorio Medico<br />Terapia del dolore<br />Medicina rigenerativa</h1>

                <SphereDisintegration regenerativeRef={regenerativeRef} painRef={painRef} />

            </section>

            <Header />
        </>
    );

}