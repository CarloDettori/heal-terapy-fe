import { useState } from "react";
import anime from "animejs";
import BreathingSphereComponent from "./BreathingSphereComponent.jsx";

export default function SphereDisintegration() {
    const [disintegrated, setDisintegrated] = useState(false);

    const handleDisintegration = () => {
        if (disintegrated) return;

        const spherePaths = document.querySelectorAll(".sphere path");
        const gridCircles = document.querySelectorAll(".grid-circle");

        // 1️⃣ Fase: dissolvenza e "collasso" della sfera
        anime({
            targets: spherePaths,
            opacity: [1, 0],
            scale: [1, 0.4],
            translateY: (el, i) => anime.random(-30, 30),
            translateX: (el, i) => anime.random(-30, 30),
            easing: "easeInOutCubic",
            duration: 1200,
            complete: () => setDisintegrated(true),
        });

        // 2️⃣ Fase: comparsa dei cerchi a griglia
        anime({
            targets: gridCircles,
            opacity: [0, 1],
            scale: [0.5, 1],
            delay: anime.stagger(100, { start: 1000 }),
            duration: 800,
            easing: "easeOutBack",
        });
    };

    return (
        <div className="sphere-disintegration-wrapper">
            <div className="sphere-container">
                <BreathingSphereComponent />
            </div>

            <button
                className="discover-btn"
                onClick={handleDisintegration}
            >
                Scopri di più ↓
            </button>

            <div className={`grid-container ${disintegrated ? "visible" : ""}`}>
                {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="grid-circle" />
                ))}
            </div>
        </div>
    );
}