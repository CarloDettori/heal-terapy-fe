import { useState, useEffect, useRef } from "react";
import anime from "animejs";

export default function ScramblerDemo() {
    const [active, setActive] = useState(false);


    const cable = useRef();
    const fig4Ref = useRef(null);


    // Animazione pallini rossi (linea naturale Fig1 → Fig2)
    const animateRedDots = () => {
        anime({
            targets: ".red-dot",
            translateX: 260,
            easing: "linear",
            duration: 2000,
            loop: true
        });
    };

    // Animazione pallini blu (linea Fig3 → Fig2)
    const animateBlueDots = () => {
        anime({
            targets: ".blue-dot",
            translateX: 260,
            easing: "linear",
            duration: 2000,
            loop: true
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
                <div style={{ position: "relative", width: "90vw", height: 20, margin: "0 auto" }}>
                    {/* linea sempre visibile */}
                    <div
                        style={{
                            position: "absolute",
                            top: 9,
                            left: 0,
                            width: "100%",
                            height: 2,
                            background: "var(--dark-theme)"
                        }}
                    ></div>

                    {/* pallini rossi (attivi quando active = false) */}
                    {!active && (
                        <>
                            {Array.from({ length: 1 }).map((_, i) => (
                                <div

                                    className="red-dot"
                                    style={{
                                        position: "absolute",
                                        top: 5,
                                        left: i * 50,
                                        width: 10,
                                        height: 10,
                                        background: "red",
                                        borderRadius: "50%"
                                    }}
                                ></div>
                            ))}
                        </>
                    )}

                    {/* pallini blu (attivi quando active = true) */}
                    {active && (
                        <>
                            {Array.from({ length: 1 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="red-dot"
                                    style={{
                                        position: "absolute",
                                        top: 5,
                                        left: i * 50,
                                        width: 10,
                                        height: 10,
                                        background: "red",
                                        borderRadius: "50%"
                                    }}
                                ></div>
                            ))}
                            {Array.from({ length: 1 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="blue-dot"
                                    style={{
                                        position: "absolute",
                                        top: 5,
                                        right: i * 50,
                                        width: 10,
                                        height: 10,
                                        background: "blue",
                                        borderRadius: "50%"
                                    }}
                                ></div>
                            ))}
                        </>
                    )}
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