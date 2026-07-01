
import { useEffect, useState } from "react";
import TextInfo from "../ui/TextInfo.jsx";
import BreathingSphereComponent from "./BreathingSphereComponent.jsx";
import Header from "../../layout/Header.jsx"

export default function HeroComponent({ regenerativeRef, painRef }) {



    return (
        <>
            <section className="hero-section">
                <BreathingSphereComponent regenerativeRef={regenerativeRef} painRef={painRef} />
                {/* <TextInfo customColor="--light-theme" customClass="text-page-size font-bold mb-30" >
                    Approccio innovativo, mini-invasivo e personalizzato alla cura del dolore acuto e cronico.
                </TextInfo> */}
            </section>


        </>
    );

}