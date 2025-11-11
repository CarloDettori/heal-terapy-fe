import { useState } from "react";
import anime from "animejs";
import BreathingSphereComponent from "./BreathingSphereComponent.jsx";

export default function SphereDisintegration() {
    const [disintegrated, setDisintegrated] = useState(false);

    const handleDisintegration = () => {
        if (disintegrated) return;

        const spherePaths = Array.from(document.querySelectorAll(".sphere path"));
        const gridCircles = document.querySelectorAll(".grid-circle");
        const svg = document.querySelector(".sphere");
        if (!svg || spherePaths.length === 0) {
            // fallback semplice se non trova elementi
            anime({
                targets: spherePaths,
                opacity: [1, 0],
                duration: 600,
                easing: "easeInOutCubic",
                complete: () => setDisintegrated(true),
            });
            return;
        }

        // configurazioni (modifica TARGET_DIAMETER quando vuoi)
        const VIEWBOX = svg.viewBox && svg.viewBox.baseVal ? svg.viewBox.baseVal : { x: 0, y: 0, width: svg.clientWidth, height: svg.clientHeight };
        const CENTER = { cx: VIEWBOX.x + VIEWBOX.width / 2, cy: VIEWBOX.y + VIEWBOX.height / 2 };
        const TARGET_DIAMETER = 48; // diametro finale dei cerchi prima del passaggio alla griglia
        const finalRadius = TARGET_DIAMETER / 2;

        // crea cerchi derivati dalle bbox delle ellissi
        // ora creiamo cerchi il cui centro (cx,cy) è inizialmente nella posizione dell'ellisse,
        // e poi animeremo cx/cy verso il CENTER per ottenere la disposizione concentrica perfetta
        const circles = spherePaths.map((p) => {
            const bb = p.getBBox();
            const major = Math.max(bb.width, bb.height);
            const r = major / 2; // raggio derivato dall'asse maggiore
            const pathCenter = { x: bb.x + bb.width / 2, y: bb.y + bb.height / 2 };

            const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            // inizialmente centriamo il cerchio sulla posizione dell'ellisse
            c.setAttribute("cx", String(pathCenter.x));
            c.setAttribute("cy", String(pathCenter.y));
            c.setAttribute("r", String(r));
            c.setAttribute("fill", "none");
            c.setAttribute("stroke", getComputedStyle(document.documentElement).getPropertyValue("--light-theme")?.trim() || "#60A5FA");
            c.setAttribute("stroke-width", "1.2");
            c.style.opacity = "0";
            // appendiamo i cerchi (sotto o sopra i path a seconda di come vuoi il layering)
            svg.appendChild(c);
            return { el: c, initialCenter: pathCenter, initialR: r };
        });

        // timeline: 1) dissolvenza ellissi + simultanea animazione dei cerchi verso centro 2) collasso radius -> finalRadius 3) rimuovi cerchi e mostra griglia
        const tl = anime.timeline({ autoplay: true });

        // dissolvenza / spostamento casuale delle ellissi (vecchio comportamento)
        tl.add({
            targets: spherePaths,
            opacity: [1, 0],
            translateY: (el, i) => anime.random(-30, 30),
            translateX: (el, i) => anime.random(-30, 30),
            scale: [1, 0.4],
            easing: "easeInOutCubic",
            duration: 800,
            delay: anime.stagger(12),
        }, 0);

        // i cerchi appaiono (partendo traslati sulle ellissi) e si muovono al centro (concurrent)
        tl.add({
            targets: circles.map(c => c.el),
            opacity: [0, 1],
            // anima gli attributi cx/cy verso il centro della SVG per ottenere concentricità perfetta
            cx: CENTER.cx,
            cy: CENTER.cy,
            easing: "easeOutCubic",
            duration: 600,
            delay: anime.stagger(20, { direction: "reverse" })
        }, 150);

        // collasso: riduci tutti i raggi fino al finalRadius (stagger se vuoi effetto onda)
        tl.add({
            targets: circles.map(c => c.el),
            r: finalRadius,
            easing: "easeInOutQuad",
            duration: 700,
            delay: anime.stagger(18, { direction: "normal" }),
            complete: () => {
                // rimuovi i cerchi temporanei (vogliamo che la griglia compaia dopo)
                circles.forEach(c => c.el.remove());
                setDisintegrated(true);
            }
        }, "+=120");

        // mostra la griglia al termine (piccolo overlap possibile)
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