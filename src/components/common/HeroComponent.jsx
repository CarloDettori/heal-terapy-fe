
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
            <section className="hero-section max-h-230">
                <div className="flex justify-center max-w-100">
                    <img
                        src="/hero-text.png"
                        alt=""
                        className={`hero-title px-10 absolute left-1/2 -translate-x-1/2 w-full max-w-[700px] h-auto ${hidden ? "hero-hidden-by-button" : ""}`}
                    />
                </div>
                <SphereDisintegration regenerativeRef={regenerativeRef} painRef={painRef} />

            </section>

            <Header />
        </>
    );

}