import { useEffect, useState } from "react";
import anime from "animejs";
import { Link } from "react-router-dom";

export default function BreathingSphereComponent({ regenerativeRef, painRef }) {
    const [disintegrated, setDisintegrated] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const paths = Array.from(document.querySelectorAll(".sphere path"));
        const root = getComputedStyle(document.documentElement);

        const baseStroke = "#415774"; // colore iniziale
        const activeStroke = root.getPropertyValue("--light-theme")?.trim() || "#a5c5e9";

        // imposta lo stile iniziale
        paths.forEach((p) => {
            p.style.stroke = baseStroke;
            p.style.strokeWidth = "1.2";
            p.style.vectorEffect = "non-scaling-stroke";
            p.style.strokeLinecap = "round";
            p.style.strokeLinejoin = "round";
            p.style.transformOrigin = "center center";
        });

        anime({
            targets: paths,
            translateX: [
                { value: 4, duration: 600, easing: "easeInOutSine" },
                { value: 0, duration: 600, easing: "easeInOutSine" },
            ],
            translateY: [
                { value: 4, duration: 600, easing: "easeInOutSine" },
                { value: 0, duration: 600, easing: "easeInOutSine" },
            ],
            stroke: [
                { value: baseStroke, duration: 0 },
                { value: activeStroke, duration: 500, easing: "easeInOutSine" },
                { value: baseStroke, duration: 500, easing: "easeInOutSine" },
            ],
            strokeWidth: [
                { value: 2, duration: 500, easing: "easeInOutSine" },
                { value: 1.5, duration: 500, easing: "easeInOutSine" },
            ],
            delay: anime.stagger(100, { start: 0, direction: "reverse" }), // alto → basso, sinistra → destra
            easing: "easeInOutSine",
            loop: true,
        });

        const onHide = () => setHidden(true);
        window.addEventListener("hero:hide", onHide);
        return () => window.removeEventListener("hero:hide", onHide);
    }, []);

    // sync disintegration state with hero-section class used by CSS
    useEffect(() => {
        const hero = document.querySelector('.hero-section');
        if (!hero) return;
        if (disintegrated) hero.classList.add('disintegrated');
        else hero.classList.remove('disintegrated');
        return () => hero.classList.remove('disintegrated');
    }, [disintegrated]);

    const regenerativeLinks = [
        { id: 4, title: "Ozonoterapia", link: "/info/1" },

        { id: 6, title: "Rigenerazione Articolare", link: "/info/6" },
        { id: 7, title: "Medicina Estetica", link: "/info/3" },
        { id: 8, title: "Trattamenti Mini-invasivi", link: "/info/7" },
    ];

    const painLinks = [
        { id: 3, title: "Scrambler Therapy", link: "/info/4" },
        { id: 5, title: "Fibromialgia", link: "/info/5" },
    ];

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

        tl.finished.then(() => {
            const container = document.querySelector(".grid-container");
            const nodes = Array.from(document.querySelectorAll(".grid-circle"));
            if (!container || nodes.length === 0) return;

            container.style.position = "relative";
            container.style.zIndex = "50";
            container.classList.add("visible", "flex-grid");

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

        <div className="sphere-container  flex flex-col">

            <div className="sticky">

                <img src="/hero-text.png" alt="" className={`hero-title px-10 w-full  max-w-[700px] h-auto ${hidden ? "hero-hidden-by-button" : ""}`} />
                <button className="flex mx-auto discover-btn" onClick={handleDisintegration}>
                    AVANTI
                </button>

            </div>

            <div className="sphere-animation">

                <svg className="sphere" viewBox="0 0 440 440">

                    <defs>
                        <linearGradient id="sphereGradient" x1="5%" x2="5%" y1="0%" y2="80%">
                            <stop stopColor="#415774" offset="0%" />
                            <stop stopColor="#2d3c50" offset="50%" />
                            <stop stopColor="#1F2937" offset="100%" />
                        </linearGradient>
                    </defs>

                    <path d="M361.604 361.238c-24.407 24.408-51.119 37.27-59.662 28.727-8.542-8.543 4.319-35.255 28.726-59.663 24.408-24.407 51.12-37.269 59.663-28.726 8.542 8.543-4.319 35.255-28.727 59.662z" fill="url(#sphereGradient)" />
                    <path d="M360.72 360.354c-35.879 35.88-75.254 54.677-87.946 41.985-12.692-12.692 6.105-52.067 41.985-87.947 35.879-35.879 75.254-54.676 87.946-41.984 12.692 12.692-6.105 52.067-41.984 87.946z" fill="url(#sphereGradient)" />
                    <path d="M357.185 356.819c-44.91 44.91-94.376 68.258-110.485 52.149-16.11-16.11 7.238-65.575 52.149-110.485 44.91-44.91 94.376-68.259 110.485-52.15 16.11 16.11-7.239 65.576-52.149 110.486z" fill="url(#sphereGradient)" />
                    <path d="M350.998 350.632c-53.21 53.209-111.579 81.107-130.373 62.313-18.794-18.793 9.105-77.163 62.314-130.372 53.209-53.21 111.579-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z" fill="url(#sphereGradient)" />
                    <path d="M343.043 342.677c-59.8 59.799-125.292 91.26-146.283 70.268-20.99-20.99 10.47-86.483 70.269-146.282 59.799-59.8 125.292-91.26 146.283-70.269 20.99 20.99-10.47 86.484-70.27 146.283z" fill="url(#sphereGradient)" />
                    <path d="M334.646 334.28c-65.169 65.169-136.697 99.3-159.762 76.235-23.065-23.066 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z" fill="url(#sphereGradient)" />
                    <path d="M324.923 324.557c-69.806 69.806-146.38 106.411-171.031 81.76-24.652-24.652 11.953-101.226 81.759-171.032 69.806-69.806 146.38-106.411 171.031-81.76 24.652 24.653-11.953 101.226-81.759 171.032z" fill="url(#sphereGradient)" />
                    <path d="M312.99 312.625c-73.222 73.223-153.555 111.609-179.428 85.736-25.872-25.872 12.514-106.205 85.737-179.428s153.556-111.609 179.429-85.737c25.872 25.873-12.514 106.205-85.737 179.429z" fill="url(#sphereGradient)" />
                    <path d="M300.175 299.808c-75.909 75.909-159.11 115.778-185.837 89.052-26.726-26.727 13.143-109.929 89.051-185.837 75.908-75.908 159.11-115.778 185.837-89.051 26.726 26.726-13.143 109.928-89.051 185.836z" fill="url(#sphereGradient)" />
                    <path d="M284.707 284.34c-77.617 77.617-162.303 118.773-189.152 91.924-26.848-26.848 14.308-111.534 91.924-189.15C265.096 109.496 349.782 68.34 376.63 95.188c26.849 26.849-14.307 111.535-91.923 189.151z" fill="url(#sphereGradient)" />
                    <path d="M269.239 267.989c-78.105 78.104-163.187 119.656-190.035 92.807-26.849-26.848 14.703-111.93 92.807-190.035 78.105-78.104 163.187-119.656 190.035-92.807 26.849 26.848-14.703 111.93-92.807 190.035z" fill="url(#sphereGradient)" />
                    <path d="M252.887 252.52C175.27 330.138 90.584 371.294 63.736 344.446 36.887 317.596 78.043 232.91 155.66 155.293 233.276 77.677 317.962 36.521 344.81 63.37c26.85 26.848-14.307 111.534-91.923 189.15z" fill="url(#sphereGradient)" />
                    <path d="M236.977 236.61C161.069 312.52 77.867 352.389 51.14 325.663c-26.726-26.727 13.143-109.928 89.052-185.837 75.908-75.908 159.11-115.777 185.836-89.05 26.727 26.726-13.143 109.928-89.051 185.836z" fill="url(#sphereGradient)" />
                    <path d="M221.067 220.7C147.844 293.925 67.51 332.31 41.639 306.439c-25.873-25.873 12.513-106.206 85.736-179.429C200.6 53.786 280.931 15.4 306.804 41.272c25.872 25.873-12.514 106.206-85.737 179.429z" fill="url(#sphereGradient)" />
                    <path d="M205.157 204.79c-69.806 69.807-146.38 106.412-171.031 81.76-24.652-24.652 11.953-101.225 81.759-171.031 69.806-69.807 146.38-106.411 171.031-81.76 24.652 24.652-11.953 101.226-81.759 171.032z" fill="url(#sphereGradient)" />
                    <path d="M189.247 188.881c-65.169 65.169-136.696 99.3-159.762 76.235-23.065-23.065 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z" fill="url(#sphereGradient)" />
                    <path d="M173.337 172.971c-59.799 59.8-125.292 91.26-146.282 70.269-20.991-20.99 10.47-86.484 70.268-146.283 59.8-59.799 125.292-91.26 146.283-70.269 20.99 20.991-10.47 86.484-70.269 146.283z" fill="url(#sphereGradient)" />
                    <path d="M157.427 157.061c-53.209 53.21-111.578 81.108-130.372 62.314-18.794-18.794 9.104-77.164 62.313-130.373 53.21-53.209 111.58-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z" fill="url(#sphereGradient)" />
                    <path d="M141.517 141.151c-44.91 44.91-94.376 68.259-110.485 52.15-16.11-16.11 7.239-65.576 52.15-110.486 44.91-44.91 94.375-68.258 110.485-52.15 16.109 16.11-7.24 65.576-52.15 110.486z" />
                    <path d="M125.608 125.241c-35.88 35.88-75.255 54.677-87.947 41.985-12.692-12.692 6.105-52.067 41.985-87.947C115.525 43.4 154.9 24.603 167.592 37.295c12.692 12.692-6.105 52.067-41.984 87.946z" fill="url(#sphereGradient)" />
                    <path d="M109.698 109.332c-24.408 24.407-51.12 37.268-59.663 28.726-8.542-8.543 4.319-35.255 28.727-59.662 24.407-24.408 51.12-37.27 59.662-28.727 8.543 8.543-4.319 35.255-28.726 59.663z" fill="url(#sphereGradient)" />
                </svg>

            </div>


            <div className={`mt-55 grid-container gap-15 flex flex-wrap justify-center  ${disintegrated ? "visible" : ""}`}>

                <div className={` ${disintegrated ? "visible border rounded-4xl p-5" : ""}`}>

                    <button className=" hover:scale-120 hover:border-border-light-theme cursor-pointer text-center w-full" onClick={() => { scrollTo(painRef) }}>
                        <h1 className="my-2">TERAPIA DEL DOLORE</h1>
                    </button>

                    {painLinks.map((link) => (
                        <Link to={link.link} key={link.id} className="grid-circle hover:scale-110 hover:border-light-theme ">
                            <h1>{link.title}</h1>
                        </Link>
                    ))}

                </div>

                <div className={` ${disintegrated ? "visible border rounded-4xl p-5" : ""}`}>

                    <button className="hover:scale-120 cursor-pointer text-center w-full" onClick={() => { scrollTo(regenerativeRef) }}>
                        <h1 className="my-2">MEDICINA RIGENERATIVA</h1>
                    </button>

                    {regenerativeLinks.map((link) => (
                        <Link to={link.link} key={link.id} className="grid-circle hover:scale-110">
                            <h1>{link.title}</h1>
                        </Link>
                    ))}

                </div>






            </div>


        </div>



    );
}


