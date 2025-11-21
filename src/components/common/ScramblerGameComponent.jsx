import { useState, useEffect, useRef } from "react";
import anime from "animejs";
import { animate, svg } from 'https://esm.sh/animejs';

export default function ScramblerDemo() {
    const [active, setActive] = useState(false);
    const carRef = useRef(null);
    const cable = useRef();
    const fig4Ref = useRef(null);

    useEffect(() => {
        // crea l'animazione della car SOLO dopo che il DOM è montato
        const carEl = document.querySelector('.car');
        const pathEl = document.querySelector('#suzuka'); // seleziona l'elemento path reale
        if (carEl && pathEl) {
            const motion = svg.createMotionPath(pathEl);
            const carAnimation = animate(carEl, {
                ease: 'linear',
                duration: 5000,
                loop: true,
                ...motion
            });
            return () => {
                carAnimation.pause?.();
            };
        }
    }, []);

    // Animazione pallini rossi (linea naturale Fig1 → Fig2)
    const animateRedDots = () => {
        const pathEl = document.querySelector('#suzuka');
        if (!pathEl) return;
        animate(svg.createDrawable(pathEl), {
            draw: '0 1',
            ease: 'linear',
            duration: 5000,
            loop: true,
        });
    };

    // Animazione pallini blu (linea Fig3 → Fig2)
    const animateBlueDots = () => {
        const pathEl = document.querySelector('#suzuka');
        if (!pathEl) return;
        animate(svg.createDrawable(pathEl), {
            draw: '0 1',
            ease: 'linear',
            duration: 5000,
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
    }

    // Effetto attiva/disattiva
    useEffect(() => {
        if (active) {
            moveFig4(true);
            extendCable(true);
            setTimeout(() => animateBlueDots(), 800);
        } else {
            moveFig4(false);
            extendCable(false);
            setTimeout(() => animateRedDots(), 800);
        }
    }, [active]);

    // Prima animazione (rossi)
    useEffect(() => {
        animateRedDots();
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
            <div style={{ display: "flex", alignItems: "center" }}>

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
                <div className="docs-demo-html ">
                    <svg className="" viewBox="0 0 304 112" style={{ width: "100%", height: 112, display: "block" }}>
                        <title>Suzuka</title>
                        <g stroke="none" fill="none" fillRule="evenodd">
                            <path d="M189.142857,4 C227.456875,4 248.420457,4.00974888 256.864191,4.00974888 C263.817211,4.00974888 271.61219,3.69583517 274.986231,6.63061513 C276.382736,7.84531176 279.193529,11.3814152 280.479499,13.4815847 C281.719344,15.5064248 284.841964,20.3571626 275.608629,20.3571626 C265.817756,20.3571626 247.262478,19.9013915 243.955117,19.9013915 C239.27946,19.9013915 235.350655,24.7304885 228.6344,24.7304885 C224.377263,24.7304885 219.472178,21.0304113 214.535324,21.0304113 C207.18393,21.0304113 200.882842,30.4798911 194.124187,30.4798911 C186.992968,30.4798911 182.652552,23.6245972 173.457298,23.6245972 C164.83277,23.6245972 157.191045,31.5424105 157.191045,39.1815359 C157.191045,48.466779 167.088672,63.6623005 166.666679,66.9065088 C166.378668,69.1206889 155.842137,79.2568633 151.508744,77.8570506 C145.044576,75.7689355 109.126667,61.6405346 98.7556561,52.9785141 C96.4766876,51.0750861 89.3680347,39.5769094 83.4195005,38.5221785 C80.6048001,38.0231057 73.0179337,38.7426555 74.4158694,42.6956376 C76.7088819,49.1796531 86.3280337,64.1214904 87.1781062,66.9065088 C88.191957,70.2280995 86.4690152,77.0567847 82.2060607,79.2503488 C79.2489435,80.7719756 73.1324132,82.8858479 64.7015706,83.0708761 C55.1604808,83.2802705 44.4254811,80.401884 39.1722168,80.401884 C25.7762119,80.401884 24.3280517,89.1260466 22.476679,94.4501705 C21.637667,96.8629767 20.4337535,108 33.2301959,108 C37.8976087,108 45.0757044,107.252595 53.4789069,103.876424 C61.8821095,100.500252 122.090049,78.119656 128.36127,75.3523302 C141.413669,69.5926477 151.190142,68.4987755 147.018529,52.0784879 C143.007818,36.291544 143.396957,23.4057975 145.221196,19.6589263 C146.450194,17.1346449 148.420955,14.8552817 153.206723,15.7880203 C155.175319,16.1716965 155.097637,15.0525421 156.757598,11.3860986 C158.417558,7.71965506 161.842736,4.00974888 167.736963,4.00974888 C177.205308,4.00974888 184.938832,4 189.142857,4 Z" id="suzuka" stroke="currentColor" strokeWidth="2"></path>
                        </g>
                    </svg>
                    <div className="square car motion-path-car" style={{ transform: "translateX(189px) translateY(4px)" }}></div>
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