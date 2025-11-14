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
            anime({ targets: spherePaths, opacity: [1, 0], duration: 600, easing: "easeInOutCubic", complete: () => setDisintegrated(true) });
            return;
        }

        const VIEWBOX = svg.viewBox && svg.viewBox.baseVal ? svg.viewBox.baseVal : { x: 0, y: 0, width: svg.clientWidth, height: svg.clientHeight };
        const CENTER = { cx: VIEWBOX.x + VIEWBOX.width / 2, cy: VIEWBOX.y + VIEWBOX.height / 2 };
        const TARGET_DIAMETER = 48;
        const finalRadius = TARGET_DIAMETER / 2;

        const circles = spherePaths.map((p) => {
            const bb = p.getBBox();
            const major = Math.max(bb.width, bb.height);
            const r = major / 2;
            const pathCenter = { x: bb.x + bb.width / 2, y: bb.y + bb.height / 2 };

            const origFillAttr = p.getAttribute('fill');
            const computed = getComputedStyle(p);
            const origFill = (origFillAttr && origFillAttr !== 'none') ? origFillAttr : (computed.fill || 'none');
            const origFillOpacityAttr = p.getAttribute('fill-opacity');
            const origFillOpacity = origFillOpacityAttr ?? computed.getPropertyValue('fill-opacity') ?? null;

            const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            c.setAttribute("cx", String(pathCenter.x));
            c.setAttribute("cy", String(pathCenter.y));
            c.setAttribute("r", String(r));
            if (origFill && origFill !== 'none') c.setAttribute("fill", origFill);
            else c.setAttribute("fill", "none");
            if (origFillOpacity) c.setAttribute("fill-opacity", String(origFillOpacity));
            c.setAttribute("stroke", getComputedStyle(document.documentElement).getPropertyValue("--light-theme")?.trim() || "#60A5FA");
            c.setAttribute("stroke-width", "1.2");
            c.style.opacity = "0";
            svg.appendChild(c);
            return { el: c, initialCenter: pathCenter, initialR: r };
        });

        const tl = anime.timeline({ autoplay: true });

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

        tl.add({
            targets: circles.map(c => c.el),
            opacity: [0, 1],
            cx: CENTER.cx,
            cy: CENTER.cy,
            easing: "easeOutCubic",
            duration: 600,
            delay: anime.stagger(20, { direction: "reverse" })
        }, 150);

        tl.add({
            targets: circles.map(c => c.el),
            r: finalRadius,
            easing: "easeInOutQuad",
            duration: 700,
            delay: anime.stagger(18, { direction: "normal" }),
            complete: () => {
                circles.forEach(c => c.el.remove());
                setDisintegrated(true);
            }
        }, "+=120");

        // dopo che la timeline termina, gestiamo la comparsa centrale e la distribuzione in griglia
        tl.finished.then(() => {
            const container = document.querySelector(".grid-container");
            const nodes = Array.from(document.querySelectorAll(".grid-circle"));
            const wrapper = document.querySelector(".sphere-disintegration-wrapper");
            if (!container || nodes.length === 0 || !wrapper) return;

            // calcola centro della SVG relativo al wrapper
            const svgRect = svg.getBoundingClientRect();
            const wrapperRect = wrapper.getBoundingClientRect();
            const centerX = svgRect.left + svgRect.width / 2 - wrapperRect.left;
            const centerY = svgRect.top + svgRect.height / 2 - wrapperRect.top;

            // assicura posizione assoluta e inserimento nel DOM prima di leggere dimensioni
            container.style.position = "absolute";
            container.style.zIndex = "50";
            container.classList.add("visible");

            // forza repaint e poi leggi dimensioni reali
            const cw = container.offsetWidth || 320;
            const ch = container.offsetHeight || 320;

            // posiziona il container in modo che il suo centro corrisponda al centro della svg
            container.style.left = `${Math.round(centerX - cw / 1.74)}px`;
            container.style.top = `${Math.round(centerY - ch / 1.74)}px`;
            container.style.transform = "none";

            const cols = 4;
            const rows = 4;
            const gap = 200;

            // comparsa centrale (tutti sovrapposti): opacity + scale
            anime({
                targets: nodes,
                opacity: [0, 1],
                scale: [0.3, 1],
                duration: 320,
                easing: "easeOutBack",
                delay: anime.stagger(10)
            }).finished.then(() => {
                // calcola offset per ogni cella in modo che la griglia si apra dal centro
                const totalW = (cols - 1) * gap;
                const totalH = (rows - 1) * gap;
                const startX = - totalW / 2;
                const startY = - totalH / 2;

                anime({
                    targets: nodes,
                    left: (el, i) => {
                        const col = i % cols;
                        return `${50 + (startX + col * gap) / (cw / 2) * 50}%`;
                    },
                    top: (el, i) => {
                        const row = Math.floor(i / cols);
                        return `${50 + (startY + row * gap) / (ch / 2) * 50}%`;
                    },
                    duration: 700,
                    easing: "easeInOutCubic",
                    delay: anime.stagger(20)
                });
            });
        });
    };

    return (
        <div className="sphere-disintegration-wrapper relative">
            <div className="sphere-container">
                <BreathingSphereComponent />
            </div>
            <div className={`grid-container ${disintegrated ? "visible" : ""} absolute`}>
                {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="grid-circle" />
                ))}
            </div>
            <button
                className="discover-btn"
                onClick={handleDisintegration}
            >
                Scopri di più ↓
            </button>
        </div>
    );
}