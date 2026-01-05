
import { useEffect, useState } from "react";
import BreathingSphereComponent from "./BreathingSphereComponent.jsx";
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
                <BreathingSphereComponent regenerativeRef={regenerativeRef} painRef={painRef} />
            </section>

            <Header />
        </>
    );

}