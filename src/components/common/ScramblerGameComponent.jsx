import { useState, useEffect, useRef } from "react";
import anime from "animejs";
// ...existing code...
export default function ScramblerDemo() {
    const [active, setActive] = useState(false);
    const [showSvg, setShowSvg] = useState(false);
    const carRefs = useRef([]); // array di refs per le car
    const cable = useRef();
    const fig4Ref = useRef(null);
    const animeDotDuration = 5000;

    // keep refs to anime instances so we can stop them
    const carAnimRef = useRef([]); // array di anime instances per car
    const dotsAnimRef = useRef([]); // array di anime instances per path

    useEffect(() => {
        let timer;
        if (active) {
            timer = setTimeout(() => setShowSvg(true), 800);
        } else {
            // nascondi subito quando disattivo
            setShowSvg(false);
        }
        return () => clearTimeout(timer);
    }, [active]);

    useEffect(() => {
        // pulisco eventuali anim precedenti
        carAnimRef.current?.forEach?.(a => a?.pause?.());
        carAnimRef.current = [];

        const pathEls = Array.from(document.querySelectorAll('[id^="suzuka-"]'));

        carRefs.current.forEach((carEl, i) => {
            const pathEl = pathEls[i];
            if (carEl && pathEl) {
                const motionPath = anime.path(pathEl);
                carAnimRef.current[i] = anime({
                    targets: carEl,
                    translateX: motionPath('x'),
                    translateY: motionPath('y'),
                    // rotate: motionPath('angle'),
                    duration: animeDotDuration,
                    easing: 'linear',
                    loop: true,
                });
            }
        });

        return () => {
            carAnimRef.current?.forEach?.(a => a?.pause?.());
            carAnimRef.current = [];
        };
    }, []);

    // Animazione "puntini/linea" mirata per indice (0 = prima, 1 = seconda)
    const animateDots = (index = 0, color = 'red') => {
        const pathEl = document.querySelector(`#suzuka-${index}`);
        if (!pathEl) return;

        // aggiorna il <title> dell'SVG associato (solo per index 1 quando diventa blu)
        const svgEl = pathEl.ownerSVGElement || pathEl.closest?.('svg');
        if (svgEl) {
            const titleEl = svgEl.querySelector('title');
            if (titleEl) {
                titleEl.textContent = (index === 1 && color === 'blue') ? 'segnali di non dolore' : 'segnali di dolore';
            }
        }

        // cancello anim precedente per questo index
        dotsAnimRef.current[index]?.pause?.();
        dotsAnimRef.current[index] = null;

        const len = pathEl.getTotalLength?.() || 304;
        pathEl.style.strokeDasharray = "2 14";
        pathEl.style.stroke = color;
        pathEl.style.strokeLinecap = "round";

        dotsAnimRef.current[index] = anime({
            targets: pathEl,
            strokeDashoffset: [0, -len],
            duration: 5000,
            easing: 'linear',
            loop: true,
        });
    };

    const animateVerticalDots = () => {
        const pathEl = document.querySelector('svg g path');
        if (!pathEl) return; // esce se lo SVG non è ancora montato
        const len = pathEl.getTotalLength?.();
        if (!len) return;
        pathEl.style.strokeDasharray = "4 14";

        anime({
            targets: pathEl,
            strokeDashoffset: [0, -len],
            duration: 5000,
            easing: 'linear',
            loop: true,
        });
    };

    // Movimento dell’elettrodo (Fig4)
    const moveFig4 = (down) => {
        anime({
            targets: fig4Ref.current,
            translateY: down ? 135 : 0,
            duration: 800,
            easing: "easeInOutQuad"
        });
    };

    const extendCable = (extend) => {
        anime({
            targets: cable.current,
            height: extend ? 230 : 100,
            duration: 800,
            easing: 'easeInOutQuad'
        });
    };

    // Effetto attiva/disattiva: cambia solo l'anim della seconda linea (index 1)
    // Chiamata all'animazione quando fig4 è attivato
    useEffect(() => {
        if (active) {
            moveFig4(true);
            extendCable(true);
            // avvia i puntini della seconda linea dopo lo stesso delay usato per mostrare lo SVG
            setTimeout(() => {
                animateDots(1, 'blue');
                // l'animazione verticale sarà avviata dal seguente effect quando showSvg diventa true
            }, 800);
        } else {
            moveFig4(false);
            extendCable(false);
            setTimeout(() => animateDots(1, 'red'), 200);
        }
    }, [active]);

    useEffect(() => {
        if (showSvg && active) {
            // piccolo delay per assicurare il paint del DOM prima della query
            const t = setTimeout(() => animateVerticalDots(), 20);
            return () => clearTimeout(t);
        }
    }, [showSvg, active]);

    // Prima animazione (rosso) per entrambe le linee
    useEffect(() => {
        animateDots(0, 'red');
        animateDots(1, 'red');
        return () => {
            dotsAnimRef.current?.forEach?.(a => a?.pause?.());
            dotsAnimRef.current = [];
        };
    }, []);

    return (
        <div style={{ padding: 30 }}>
            {/* FIGURE 3 - 4*/}
            <div style={{ marginTop: 40, position: "relative", height: 200 }}>
                {/* FIG3 (scrambler machine) */}
                <div
                    style={{
                        width: 100,
                        height: 40,


                        position: "absolute",
                        left: "calc(47.5% - 30px)",
                        zIndex: 700
                    }}
                >
                    <img src="/scrambler-machine.png" alt="" />
                </div>

                {/* CAVO ELETTRICO */}
                <div
                    ref={cable}
                    style={{
                        position: "absolute",
                        top: 9,
                        left: "calc(47.5% + 20px)",
                        width: 2,
                        height: 100,
                        background: "lightgrey",
                        zIndex: 600
                    }}
                ></div>



                {showSvg && (
                    <svg viewBox="0 0 1 304" style={{ position: "absolute", top: 9, left: "calc(47.5% + 20px)", height: "115%", width: "2px", zIndex: 601 }}>
                        <title>segnali di dolore</title>
                        <g stroke="blue" fill="none" strokeWidth="4">
                            <path d="M0,0 L0,304" strokeDasharray="4 14" />
                        </g>
                    </svg>
                )}

                {/* FIG4 (elettrodo) che scende */}
                <div
                    ref={fig4Ref}
                    style={{
                        width: 40,
                        height: 40,
                        position: "absolute",
                        top: 100,
                        left: "47.5%",
                        zIndex: 700

                    }}
                >
                    <img src="/electrode.png" alt="" />
                </div>
            </div>
            {/*FIG 1 - 2 */}
            <div id="hand-brain" style={{ display: "flex", alignItems: "center", }}>
                {/* FIG 1 */}
                <div
                    style={{
                        width: 60,
                        height: 60,
                        background: "#ccc",
                        border: "2px solid black"
                    }}
                >
                    Fig1
                </div>

                {/* RENDER 2 LINEE + CAR con id unici e ref separate */}
                {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i} className="docs-demo-html">
                        <svg viewBox="0 0 304 112" preserveAspectRatio="none" style={{ width: "100%", height: 112, display: "block" }}>
                            <title>segnali di dolore</title>
                            <g stroke="none" fill="none" fillRule="evenodd">
                                <path d="M0,56 L304,56" id={`suzuka-${i}`} stroke="currentColor" strokeWidth="2"></path>
                            </g>
                        </svg>
                        <div ref={(el) => (carRefs.current[i] = el)} className="square car motion-path-car"></div>
                    </div>
                ))}

                {/* FIG 2 */}
                <div
                    style={{
                        width: 60,
                        height: 60,
                        background: "#ccc",
                        border: "2px solid black"
                    }}
                >
                    Fig2
                </div>
            </div>

            {/* BUTTON */}
            <button
                onClick={() => setActive((v) => !v)}
                style={{
                    padding: "12px 20px",
                    marginTop: 20,
                    fontSize: 16,
                    cursor: "pointer"
                }}
            >
                {active ? "Disattiva Scrambler" : "Attiva Scrambler"}
            </button>
        </div >
    );
}