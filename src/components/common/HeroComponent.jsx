
import { useEffect, useState } from "react";
import BreathingSphereComponent from "./BreathingSphereComponent.jsx";
import Header from "../../layout/Header.jsx"

export default function HeroComponent({ regenerativeRef, painRef }) {



    return (
        <>
            <section className="hero-section">
                <BreathingSphereComponent regenerativeRef={regenerativeRef} painRef={painRef} />
            </section>


        </>
    );

}