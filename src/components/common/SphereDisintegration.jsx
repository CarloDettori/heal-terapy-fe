import { useState } from "react";
import anime from "animejs";
import BreathingSphereComponent from "./BreathingSphereComponent.jsx";
import { Link } from "react-router-dom";

export default function SphereDisintegration({ regenerativeRef, painRef }) {
    const [disintegrated, setDisintegrated] = useState(false)
    const links = [
        {
            id: 3,
            title: "Scrambler Therapy",
            link: "/info/4"
        },
        {
            id: 4,
            title: "Ozonoterapia",
            link: "/info/1"
        },
        {
            id: 5,
            title: "Fibromialgia",
            link: "/info/5"
        },
        {
            id: 6,
            title: "Rigenerazione Articolare",
            link: "/info/6"
        },
        {
            id: 7,
            title: "Medicina Estetica",
            link: "/info/3"
        },
        {
            id: 8,
            title: "Trattamenti Mini-invasivi",
            link: "/info/7"
        },
    ]

    function scrollTo(target) {
        if (target && target.current && typeof target.current.scrollIntoView === "function") {
            target.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    const handleDisintegration = () => {
        if (disintegrated) return;

        window.dispatchEvent(new CustomEvent("hero:hide"));

        const btn = document.querySelector(".discover-btn");
        if (btn) {
            btn.disabled = true;
            anime({
                targets: btn,
                opacity: [1, 0],
                scale: [1, 0.9],
                translateY: -10,
                duration: 380,
                easing: "easeInCubic",
                complete: () => {
                    btn.style.pointerEvents = "none";
                    btn.style.display = "none";
                },
            });
        }

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
            if (!container || nodes.length === 0) return;

            // usa layout in-flow: rimuovi posizionamenti assoluti e abilita classe flex responsive
            container.style.position = "relative";
            container.style.zIndex = "50";
            container.classList.add("visible", "flex-grid");

            // comparsa con piccolo pop e caduta: gli elementi rimangono nel flusso flex (wrap)
            anime({
                targets: nodes,
                translateY: [-20, 0],
                opacity: [0, 1],
                scale: [0.85, 1],
                duration: 600,
                easing: "easeOutBack",
                delay: anime.stagger(80)
            });
        });
    };

    return (
        <>
            <div className="sphere-container mt-30">
                <BreathingSphereComponent />
            </div>
            <div className="sphere-disintegration-wrapper relative my-20">

                <div className={`grid-container flex flex-wrap ${disintegrated ? "visible" : ""} absolute`}>

                    <button className="grid-circle hover:scale-120 cursor-pointer" onClick={() => {
                        scrollTo(regenerativeRef)
                    }}>
                        <h1>Medicina Rigenerativa</h1>
                    </button>

                    <button className="grid-circle hover:scale-120 cursor-pointer" onClick={() => {
                        scrollTo(painRef)
                    }}>
                        <h1>Terapia del Dolore</h1>
                    </button>

                    {links.map((link) => (
                        <Link to={link.link} key={link.id} className="grid-circle hover:scale-120">
                            <h1>{link.title}</h1>
                        </Link>
                    ))}

                </div>
                <button
                    className="discover-btn"
                    onClick={handleDisintegration}
                >
                    Scopri di più ↓
                </button>
            </div>
        </>
    );
}