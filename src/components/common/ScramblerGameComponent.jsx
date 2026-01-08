import { useState, useEffect, useRef, useLayoutEffect } from "react";
import anime from "animejs";

export default function ScramblerDemo() {
    const [active, setActive] = useState(false)
    const accident = 3

    let svgPain = null
    let svgNoPain = null
    let painPositionX = 0
    let painPositionY = 0
    const electrode1 = useRef()
    const electrode2 = useRef()
    const svgRef = useRef()
    const path1Ref = useRef()
    const path2Ref = useRef()
    const electrodePosition1 = useRef()
    const electrodePosition2 = useRef()
    let electrode1TargetY = 0
    let electrode1TargetX = 0
    let electrode2TargetY = 0
    let electrode2TargetX = 0
    const cambleOutput = useRef()

    /*calcolo cordinate*/
    function getCenter(el) {
        const r = el.getBoundingClientRect();
        return {
            x: r.left + r.width / 2,
            y: r.top + r.height / 2
        };
    }
    /*traduco le cordinate in linguaggio svg*/
    function toSvgCoords(svg, point) {
        const rect = svg.getBoundingClientRect();
        return {
            x: point.x - rect.left,
            y: point.y - rect.top
        };
    }
    /*traccio i cavi */
    function makePath(start, end) {
        const dy = Math.abs(end.y - start.y) * 0.5;

        return `
    M ${start.x} ${start.y}
    C ${start.x} ${start.y + dy},
      ${end.x} ${end.y + dy},
      ${end.x} ${end.y}
  `;

    }

    useLayoutEffect(() => {
        let raf;

        function update() {
            if (!svgRef.current) return;

            const svg = svgRef.current;

            const cable = toSvgCoords(svg, getCenter(cambleOutput.current));
            const e1 = toSvgCoords(svg, getCenter(electrode1.current));
            const e2 = toSvgCoords(svg, getCenter(electrode2.current));

            path1Ref.current.setAttribute("d", makePath(cable, e1));
            path2Ref.current.setAttribute("d", makePath(cable, e2));
        }

        raf = requestAnimationFrame(update);

        window.addEventListener("resize", update);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", update);
        };
    }, [active]);

    if (accident === 1) {

        painPositionX = 50
        painPositionY = 46

        electrode1TargetY = 43
        electrode1TargetX = 30
        electrode2TargetY = 65
        electrode2TargetX = 50

        // wrapper uses ternary on `active` for visible height and hides overflow
        svgPain = (
            <div style={{ position: 'relative', marginTop: active ? "185px" : "90px", marginLeft: "72px", width: 'auto', height: active ? 346 : 441, overflow: 'hidden', objectFit: "cover", objectPosition: "top", pointerEvents: 'none' }}>
                <svg className="nerve-signal" xmlns="http://www.w3.org/2000/svg" viewBox="-1526.7 -206.54 571.53 961.9536" style={{ position: 'absolute', bottom: 0, left: 0, width: 'auto', height: 441 }}>
                    <path style={{ fill: 'none', strokeLinecap: 'round', stroke: 'rgb(255, 0, 0)', strokeWidth: 10, strokeDasharray: '1, 20', transformOrigin: '-1247.89px 267.039px' }} d="M -1526.7 -206.54 C -1526.5 -184.31 -1525.9 -100.3 -1525.8 -61.68 C -1525.7 -10.285 -1457.6 -7.745 -1425.8 -3.815 C -1412.6 -2.175 -1362 3.995 -1323.1 11.015 C -1311.6 13.075 -1292.9 17.985 -1278.2 28.415 C -1272.7 32.285 -1258.7 42.395 -1251.1 54.555" id=" path-2">
                        <animate id="anim1" attributeName="stroke-dashoffset" values="0px;42px" begin="0s;anim1.end+0s" dur="1s" fill="freeze" />
                    </path>
                </svg>
            </div >
        )

        active ? svgNoPain = (
            <div style={{ position: 'absolute', top: 90, left: 72, width: 'auto', height: active ? 95 : 440, overflow: 'hidden', objectFit: "cover", objectPosition: "bottom", pointerEvents: 'none' }}>
                <svg className="nerve-signal" xmlns="http://www.w3.org/2000/svg" viewBox="-1526.7 -206.54 571.53 961.9536" preserveAspectRatio="meet" style={{ display: 'block', width: 'auto', height: 440 }}>
                    <path style={{ fill: 'none', strokeLinecap: 'round', stroke: 'rgb(0, 0, 255)', strokeWidth: 10, strokeDasharray: '1, 20', transformOrigin: '-1247.89px 267.039px' }} d="M -1526.7 -206.54 C -1526.5 -184.31 -1525.9 -100.3 -1525.8 -61.68 C -1525.7 -10.285 -1457.6 -7.745 -1425.8 -3.815 C -1412.6 -2.175 -1362 3.995 -1323.1 11.015 C -1311.6 13.075 -1292.9 17.985 -1278.2 28.415 C -1272.7 32.285 -1258.7 42.395 -1251.1 54.555 C -1243.2 67.385 -1241.2 82.175 -1239.5 88.805 C -1237.7 95.585 -1236.3 104.795 -1234.4 132.245 C -1232.7 157.225 -1233.2 187.585 -1230.3 218.885 C -1226.9 255.455 -1219.8 323.865 -1208.4 366.967 C -1206.8 373.092 -1203.6 384.015 -1198.8 392.562 C -1189.9 408.752 -1176.9 424.982 -1168.2 444.092 C -1163.2 455.171 -1154.1 477.423 -1144.6 503.284 C -1138.2 520.704 -1133.6 541.18 -1125.1 559.564 C -1108.2 596.233 -1081.3 646.281 -1067.6 663.157 C -1063.8 667.814 -1049.4 676.998 -1038.4 685.821 C -1035.6 688.119 -1024.1 698.619 -1011.4 713.058 C -1002.7 722.97 -993.57 736.487 -985.23 743.473 C -966.98 758.765 -955.69 755.009 -955.17 754.999" id="path-2">
                        <animate id="anim1" attributeName="stroke-dashoffset" values="0px;42px" begin="0s;anim1.end+0s" dur="1s" fill="freeze" />
                    </path>
                </svg>
            </div>
        ) : null


    } else if (accident === 2) {

        painPositionX = 95
        painPositionY = 51

        electrode1TargetY = 72
        electrode1TargetX = 46
        electrode2TargetY = 115
        electrode2TargetX = 63

        svgPain =
            <div style={{ position: 'relative', marginTop: active ? "300px" : "-3px", marginLeft: "-13px", width: 'auto', height: active ? 300 : 600, overflow: 'hidden', objectFit: "cover", objectPosition: "fit", pointerEvents: 'none' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1665.607 -474.392 775.444 1320.483" preserveAspectRatio="meet" style={{ position: 'absolute', bottom: 0, left: 0, width: 'auto', height: `600`, pointerEvents: 'none' }}>
                    <path
                        style={{
                            fill: 'none',
                            strokeLinecap: 'round',
                            strokeWidth: '10px',
                            stroke: 'rgb(255, 0, 0)',
                            strokeDasharray: '1, 20',
                            transformOrigin: '-1390.88px -74.409px'
                        }}
                        d="M -1475.9 -269.82 C -1475.8 -247.62 -1474.6 -109.19 -1474.5 -70.557 C -1474.4 -19.167 -1409.9 -18.667 -1378.1 -11.167 C -1365.1 -8.117 -1338.8 -6.927 -1299.8 0.103 C -1288.3 2.163 -1264.2 8.013 -1248.3 16.483 C -1227.5 27.463 -1227 48.433 -1224.3 64.483 C -1223.2 70.613 -1221.9 116.403 -1220.2 123.033 C -1218.4 129.813 -1204.9 284.874 -1194.1 314.609 C -1181.6 349.148 -1173.9 351.857 -1165.7 370.603 C -1156.6 391.726 -1158.6 393.127 -1150.7 410.281 "
                        id="path-2"
                    >
                        <animate id="anim2" attributeName="stroke-dashoffset" values="0px;42px" begin="0s;anim2.end+0s" dur="1s" fill="freeze" keyTimes="0; 1" />
                    </path>

                </svg>
            </div>

        active ? svgNoPain =
            <div style={{ position: 'absolute', top: -2, left: -13, width: 'auto', height: active ? 300 : 440, overflow: 'hidden', objectFit: "cover", objectPosition: "top", pointerEvents: 'none' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1665.607 -474.392 775.444 1320.483" preserveAspectRatio="meet" style={{ display: 'block', width: 'auto', height: 600, pointerEvents: 'none' }}>
                    <path
                        style={{
                            fill: 'none',
                            strokeLinecap: 'round',
                            strokeWidth: '10px',
                            stroke: 'rgb(0, 0, 255)',
                            strokeDasharray: '1, 20',
                            transformOrigin: '-1390.88px -74.409px'
                        }}
                        d="M -1475.9 -269.82 C -1475.8 -247.62 -1474.6 -109.19 -1474.5 -70.557 C -1474.4 -19.167 -1409.9 -18.667 -1378.1 -11.167 C -1365.1 -8.117 -1338.8 -6.927 -1299.8 0.103 C -1288.3 2.163 -1264.2 8.013 -1248.3 16.483 C -1227.5 27.463 -1227 48.433 -1224.3 64.483 C -1223.2 70.613 -1221.9 116.403 -1220.2 123.033 C -1218.4 129.813 -1204.9 284.874 -1194.1 314.609 C -1181.6 349.148 -1173.9 351.857 -1165.7 370.603 C -1156.6 391.726 -1158.6 393.127 -1150.7 410.281 C -1143 427.096 -1138.2 433.312 -1129.5 452.422 C -1124.4 463.501 -1110.6 485.753 -1099.6 503.79 C -1089.9 519.614 -1084.7 531.515 -1073.9 550.681 C -1054 585.84 -1047.9 594.83 -1036.1 613.088 C -1024.5 631.046 -1013.6 641.058 -1008.1 649.666 C -1000.3 661.744 -1001.6 659.476 -996.37 674.662 C -992.05 687.149 -993.12 687.257 -991.87 693.869 C -990.97 698.696 -986.72 701.126 -980.4 705.35 C -972.66 710.523 -971.49 743.652 -970.12 756.365 C -967.18 783.605 -966.97 798.271 -966.68 798.266"
                        id="path-2"
                    >
                        <animate id="anim2" attributeName="stroke-dashoffset" values="0px;42px" begin="0s;anim2.end+0s" dur="1s" fill="freeze" keyTimes="0; 1" />
                    </path>
                    <path
                        style={{ fill: 'none', strokeLinecap: 'round', stroke: 'rgb(0, 0, 255)', strokeWidth: '10px', strokeDasharray: '1, 20' }}
                        d="M -991.84 692.031 C -990.41 700.948 -999.5 706.797 -998.77 714.35 C -997 733.2 -994.78 742.377 -993.3 754.743 C -990.96 774.246 -988.15 806.206 -986.17 816.831"
                        id="path-3"
                    >
                        <animate id="anim3" attributeName="stroke-dashoffset" values="0px;42px" begin="0.07s;anim3.end+0.07s" dur="1s" fill="freeze" repeatCount="indefinite" keyTimes="0; 1" />
                    </path>
                </svg>
            </div> : null


    } else if (accident === 3) {

        painPositionX = 120
        painPositionY = 61

        electrode1TargetY = 107
        electrode1TargetX = 54
        electrode2TargetY = 130
        electrode2TargetX = 66

        svgPain =
            <div style={{ position: 'relative', marginTop: active ? "440px" : "8px", marginLeft: "-30px", width: 'auto', height: active ? 170 : 600, overflow: 'hidden', objectFit: "cover", objectPosition: "fit", pointerEvents: 'none' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1665.607 -474.392 775.444 1320.483" preserveAspectRatio="meet" style={{ position: 'absolute', bottom: 0, left: 0, width: 'auto', height: 599, pointerEvents: 'none' }}>

                    <path
                        style={{
                            fill: 'none',
                            strokeLinecap: 'round',
                            stroke: 'rgb(255, 0, 0)',
                            strokeWidth: 10,
                            strokeDasharray: '1, 20',
                            transformOrigin: '-1351.01px -42.832px'
                        }}
                        d="M -1437.3 -293.92 C -1437.1 -271.71 -1436.3 -77.362 -1436.2 -38.742 C -1436 12.648 -1370 12.903 -1338.2 20.403 C -1325.3 23.463 -1320.8 22.123 -1281.8 29.153 C -1270.4 31.213 -1249.1 34.253 -1233.1 42.713 C -1212.4 53.703 -1219.1 83.713 -1218.7 99.999 C -1218.5 107.808 -1222.1 120.049 -1217.7 168.1 C -1213 219.949 -1199.1 262.622 -1188.7 295.007 C -1182 315.839 -1174.5 336.191 -1168.6 347.029 C -1163.9 355.429 -1159.6 366.536 -1153.7 383.63 C -1146.3 405.283 -1152.1 395.192 -1144.3 412.346 C -1136.6 429.161 -1105 466.294 -1093.5 483.437 C -1086.7 493.539 -1070.8 517.33 -1059.7 535.367 C -1050.1 551.191 -1036.4 572.821 -1023.9 590.971"
                        id="path-4"
                    >
                        <animate id="anim4" attributeName="stroke-dashoffset" values="0;42" begin="0s;anim4.end+0s" dur="1s" fill="freeze" keyTimes="0; 1" />
                    </path>


                </svg >
            </div>

        active ? svgNoPain = <div style={{ position: 'relative', marginTop: active ? "-600px" : "0px", marginLeft: "-30px", width: 'auto', height: active ? 430 : 441, overflow: 'hidden', objectFit: "cover", objectPosition: "top", pointerEvents: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1665.607 -474.392 775.444 1320.483" preserveAspectRatio="meet" style={{ position: 'absolute', top: 0, left: 0, width: 'auto', height: 599, pointerEvents: 'none' }}>

                <path
                    style={{
                        fill: 'none',
                        strokeLinecap: 'round',
                        stroke: 'rgb(0, 0, 255)',
                        strokeWidth: 10,
                        strokeDasharray: '1, 20',
                        transformOrigin: '-1351.01px -42.832px'
                    }}
                    d="M -1437.3 -293.92 C -1437.1 -271.71 -1436.3 -77.362 -1436.2 -38.742 C -1436 12.648 -1370 12.903 -1338.2 20.403 C -1325.3 23.463 -1320.8 22.123 -1281.8 29.153 C -1270.4 31.213 -1249.1 34.253 -1233.1 42.713 C -1212.4 53.703 -1219.1 83.713 -1218.7 99.999 C -1218.5 107.808 -1222.1 120.049 -1217.7 168.1 C -1213 219.949 -1199.1 262.622 -1188.7 295.007 C -1182 315.839 -1174.5 336.191 -1168.6 347.029 C -1163.9 355.429 -1159.6 366.536 -1153.7 383.63 C -1146.3 405.283 -1152.1 395.192 -1144.3 412.346 C -1136.6 429.161 -1105 466.294 -1093.5 483.437 C -1086.7 493.539 -1070.8 517.33 -1059.7 535.367 C -1050.1 551.191 -1036.4 572.821 -1023.9 590.971 C -1013.8 605.611 -1014.4 621.661 -1007.8 642.981 C -1001.3 664.091 -1000.5 667.861 -996.89 676.741 C -991.53 690.081 -983.93 682.911 -981.23 702.581 C -980.78 705.831 -978.53 729.231 -977.29 735.841 C -976.39 740.671 -973.82 773.171 -971.73 786.671"
                    id="path-4"
                >
                    <animate id="anim4" attributeName="stroke-dashoffset" values="0;42" begin="0s;anim4.end+0s" dur="1s" fill="freeze" keyTimes="0; 1" />
                </path>
            </svg >
        </div>
            : null

    }

    return (

        <div className="flex flex-col  max-w-215 mx-auto relative">

            <div className="flex justify-between relative">

                <div className="relative h-150 w-100">

                    <img style={{ position: "absolute", top: "12px", left: "30px", height: "85px" }} src="/human-brain.png" alt="brain" />
                    <img style={{ position: "absolute", top: "0", left: "0", height: "600px" }} src="/dermatomes-box.svg" alt="dermatomes" />
                    <img className={`h-8 absolute top-${painPositionX} left-${painPositionY} z-60`} src="/pain.svg" alt="" />
                    {svgPain}
                    <div className={`absolute top-${electrode1TargetY} left-${electrode1TargetX}`} ref={electrodePosition1}>X</div>
                    <div className={`absolute top-${electrode2TargetY} left-${electrode2TargetX}`} ref={electrodePosition2}>X</div>
                    {svgNoPain}
                </div>

                <div className="flex">

                    <div className=" flex flex-col justify-center gap-5 px-10 ">
                        <img ref={electrode1} className="h-3 w-3" src="/minimal-electrode.png" alt="elctrode1" />
                        <img ref={electrode2} className="h-3 w-3" src="/minimal-electrode.png" alt="elctrode2" />
                    </div>


                    <img ref={cambleOutput} className=" my-auto z-100" src="/scrambler-machine.png" alt="scrambler-machine" />


                </div>
                <svg
                    ref={svgRef}
                    className="absolute inset-0 w-full h-full pointer-events-none z-50"
                >
                    <path ref={path1Ref} stroke="black" strokeWidth="2" fill="none" />
                    <path ref={path2Ref} stroke="black" strokeWidth="2" fill="none" />
                </svg>
            </div>

            <button className={`mt-10 mx-auto max-w-65 py-5 px-8 border-theme ${active ? "text-white bg-(--theme)" : "text-(--theme)"} font-bold hover:bg-(--theme) hover:text-white rounded-4xl cursor-pointer hover:bg-color()`} onClick={() => { setActive(active ? false : true) }}>{active ? "DISATTIVA SCRAMBLER" : "ATTIVA SCRAMBLER"}</button>

        </div>

    )

}

