
import { useEffect } from "react";
import SphereDisintegration from "./SphereDisintegration.jsx";
import Header from "../../layout/Header.jsx"

export default function HeroComponent() {


    return (
        <>
            <section className="hero-section">
                <h1 className="hero-title text-center  absolute top-85">Ambulatorio Medico <br />Direttore Sanitario Roberto Chessa</h1>

                <SphereDisintegration />

            </section>

            <Header />
        </>
    );

}