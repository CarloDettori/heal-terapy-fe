import { useState, useEffect, useRef } from "react";
import anime from "animejs";
// ...existing code...
export default function ScramblerDemo() {
    const [active, setActive] = useState(false);
    const carRef = useRef(null);
    const cable = useRef();
    const fig4Ref = useRef(null);
    const animeDotDuration = 5000;

    // keep refs to anime instances so we can stop them
    const carAnimRef = useRef(null);
    const pathAnimRef = useRef(null);
    const dotsAnimRef = useRef(null);

    useEffect(() => {
        // pulisco eventuali anim precedenti
        carAnimRef.current?.pause?.();
        carAnimRef.current = null;

        const carEl = carRef.current;
        const pathEl = document.querySelector('#suzuka');

        if (carEl && pathEl) {
            const motionPath = anime.path(pathEl);

            carAnimRef.current = anime({
                targets: carEl,
                translateX: motionPath('x'),
                translateY: motionPath('y'),
                // opzionale: ruota se vuoi
                // rotate: motionPath('angle'),
                duration: animeDotDuration,
                easing: 'linear',
                loop: true,
            });
        }

        return () => {
            carAnimRef.current?.pause?.();
            carAnimRef.current = null;
        };
    }, []);


    // Animazione "puntini/linea" (usa strokeDashoffset; una sola animazione riutilizzabile)
    const animateDots = (color = 'red') => {
        const pathEl = document.querySelector('#suzuka');
        if (!pathEl) return;

        // cancello anim precedente
        dotsAnimRef.current?.pause?.();
        dotsAnimRef.current = null;

        // preparo stroke dash per effetto movimento
        const len = pathEl.getTotalLength?.() || 304;
        // pattern: piccolo gap per dare effetto "puntini"
        pathEl.style.strokeDasharray = "2 14";
        pathEl.style.stroke = color;
        pathEl.style.strokeLinecap = "round";

        dotsAnimRef.current = anime({
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
            translateY: down ? 110 : 0,
            duration: 800,
            easing: "easeInOutQuad"
        });
    };

    const extendCable = (extend) => {
        anime({
            targets: cable.current,
            height: extend ? 200 : 100,
            duration: 800,
            easing: 'easeInOutQuad'
        });
    };

    // Effetto attiva/disattiva
    useEffect(() => {
        if (active) {
            moveFig4(true);
            extendCable(true);
            setTimeout(() => animateDots('blue'), 300);
        } else {
            moveFig4(false);
            extendCable(false);
            setTimeout(() => animateDots('red'), 300);
        }
    }, [active]);

    // Prima animazione (rossi)
    useEffect(() => {
        animateDots('red');
        return () => {
            dotsAnimRef.current?.pause?.();
            dotsAnimRef.current = null;
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
                        background: "#ccc",
                        border: "2px solid black",
                        position: "absolute",
                        left: "calc(45% - 30px)",
                        zIndex: 700
                    }}
                >
                    Fig3
                </div>

                {/* CAVO ELETTRICO */}
                <div
                    ref={cable}
                    style={{
                        position: "absolute",
                        top: 9,
                        left: "calc(45% + 20px)",
                        width: 2,
                        height: 100,
                        background: "var(--dark-theme)",
                        zIndex: 600
                    }}
                ></div>

                {/* FIG4 (elettrodo) che scende */}
                <div
                    ref={fig4Ref}
                    style={{
                        width: 40,
                        height: 40,
                        background: "#ccc",
                        border: "2px solid black",
                        position: "absolute",
                        top: 100,
                        left: "45%",
                        zIndex: 700

                    }}
                >
                    Fig4
                </div>
            </div>
            {/*FIG 1 - 2 */}
            <div id="hand-brain" style={{ display: "flex", alignItems: "center" }}>
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

                {/* LINEA E PALLINI */}
                <div className="docs-demo-html">
                    <svg className="" viewBox="0 0 304 112" preserveAspectRatio="none" style={{ width: "100%", height: 112, display: "block" }}>
                        <title>segnali di dolore</title>
                        <g stroke="none" fill="none" fillRule="evenodd">
                            <path d="M0,56 L304,56" id="suzuka" stroke="currentColor" strokeWidth="2"></path>
                        </g>
                    </svg>
                    {/* RIMOSSO transform inline e usato ref per l'anim */}
                    <div ref={carRef} className="square car motion-path-car"></div>
                </div>

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
        </div>
    );
}