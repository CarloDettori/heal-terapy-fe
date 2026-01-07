import { useState, useEffect, useRef } from "react";
import anime from "animejs";

export default function ScramblerDemo() {
    const [active, setActive] = useState(false)
    const accident = 1
    let svgPain = null
    let svgNoPain = null

    if (accident === 1) {

        // wrapper uses ternary on `active` for visible height and hides overflow
        svgPain = (
            <div style={{ position: 'absolute', top: 89, left: 71, width: 'auto', height: active ? 200 : 440, overflow: 'hidden', pointerEvents: 'none' }}>
                <svg className="nerve-signal" xmlns="http://www.w3.org/2000/svg" viewBox="-1526.7 -206.54 571.53 961.9536" preserveAspectRatio="meet" style={{ display: 'block', width: 'auto', height: 440 }}>
                    <path style={{ fill: 'none', strokeLinecap: 'round', stroke: 'rgb(255, 0, 0)', strokeWidth: 10, strokeDasharray: '1, 20', transformOrigin: '-1247.89px 267.039px' }} d="M -1526.7 -206.54 C -1526.5 -184.31 -1525.9 -100.3 -1525.8 -61.68 C -1525.7 -10.285 -1457.6 -7.745 -1425.8 -3.815 C -1412.6 -2.175 -1362 3.995 -1323.1 11.015 C -1311.6 13.075 -1292.9 17.985 -1278.2 28.415 C -1272.7 32.285 -1258.7 42.395 -1251.1 54.555 C -1243.2 67.385 -1241.2 82.175 -1239.5 88.805 C -1237.7 95.585 -1236.3 104.795 -1234.4 132.245 C -1232.7 157.225 -1233.2 187.585 -1230.3 218.885 C -1226.9 255.455 -1219.8 323.865 -1208.4 366.967 C -1206.8 373.092 -1203.6 384.015 -1198.8 392.562 C -1189.9 408.752 -1176.9 424.982 -1168.2 444.092 C -1163.2 455.171 -1154.1 477.423 -1144.6 503.284 C -1138.2 520.704 -1133.6 541.18 -1125.1 559.564 C -1108.2 596.233 -1081.3 646.281 -1067.6 663.157 C -1063.8 667.814 -1049.4 676.998 -1038.4 685.821 C -1035.6 688.119 -1024.1 698.619 -1011.4 713.058 C -1002.7 722.97 -993.57 736.487 -985.23 743.473 C -966.98 758.765 -955.69 755.009 -955.17 754.999" id="path-2">
                        <animate id="anim1" attributeName="stroke-dashoffset" values="0px;42px" begin="0s;anim1.end+0s" dur="1s" fill="freeze" />
                    </path>
                </svg>
            </div>
        )

        active ? svgNoPain = (
            <div style={{ position: 'absolute', bottom: 200, left: 71, width: 'auto', height: active ? 200 : 440, overflow: 'hidden', pointerEvents: 'none' }}>
                <svg className="nerve-signal" xmlns="http://www.w3.org/2000/svg" viewBox="-1526.7 -206.54 571.53 961.9536" preserveAspectRatio="meet" style={{ display: 'block', width: 'auto', height: 440 }}>
                    <path style={{ fill: 'none', strokeLinecap: 'round', stroke: 'rgb(0, 0, 255)', strokeWidth: 10, strokeDasharray: '1, 20', transformOrigin: '-1247.89px 267.039px' }} d="M -1526.7 -206.54 C -1526.5 -184.31 -1525.9 -100.3 -1525.8 -61.68 C -1525.7 -10.285 -1457.6 -7.745 -1425.8 -3.815 C -1412.6 -2.175 -1362 3.995 -1323.1 11.015 C -1311.6 13.075 -1292.9 17.985 -1278.2 28.415 C -1272.7 32.285 -1258.7 42.395 -1251.1 54.555 C -1243.2 67.385 -1241.2 82.175 -1239.5 88.805 C -1237.7 95.585 -1236.3 104.795 -1234.4 132.245 C -1232.7 157.225 -1233.2 187.585 -1230.3 218.885 C -1226.9 255.455 -1219.8 323.865 -1208.4 366.967 C -1206.8 373.092 -1203.6 384.015 -1198.8 392.562 C -1189.9 408.752 -1176.9 424.982 -1168.2 444.092 C -1163.2 455.171 -1154.1 477.423 -1144.6 503.284 C -1138.2 520.704 -1133.6 541.18 -1125.1 559.564 C -1108.2 596.233 -1081.3 646.281 -1067.6 663.157 C -1063.8 667.814 -1049.4 676.998 -1038.4 685.821 C -1035.6 688.119 -1024.1 698.619 -1011.4 713.058 C -1002.7 722.97 -993.57 736.487 -985.23 743.473 C -966.98 758.765 -955.69 755.009 -955.17 754.999" id="path-2">
                        <animate id="anim1" attributeName="stroke-dashoffset" values="0px;42px" begin="0s;anim1.end+0s" dur="1s" fill="freeze" />
                    </path>
                </svg>
            </div>
        ) : null


    } else if (accident === 2) {

        svgPain =

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1665.607 -474.392 775.444 1320.483" preserveAspectRatio="meet" style={{ position: 'absolute', top: -3, left: -14, width: 'auto', height: `600`, pointerEvents: 'none' }}>
                <path
                    style={{
                        fill: 'none',
                        strokeLinecap: 'round',
                        strokeWidth: '10px',
                        stroke: 'rgb(255, 0, 0)',
                        strokeDasharray: '1, 20',
                        transformOrigin: '-1390.88px -74.409px'
                    }}
                    d="M -1475.9 -269.82 C -1475.8 -247.62 -1474.6 -109.19 -1474.5 -70.557 C -1474.4 -19.167 -1409.9 -18.667 -1378.1 -11.167 C -1365.1 -8.117 -1338.8 -6.927 -1299.8 0.103 C -1288.3 2.163 -1264.2 8.013 -1248.3 16.483 C -1227.5 27.463 -1227 48.433 -1224.3 64.483 C -1223.2 70.613 -1221.9 116.403 -1220.2 123.033 C -1218.4 129.813 -1204.9 284.874 -1194.1 314.609 C -1181.6 349.148 -1173.9 351.857 -1165.7 370.603 C -1156.6 391.726 -1158.6 393.127 -1150.7 410.281 C -1143 427.096 -1138.2 433.312 -1129.5 452.422 C -1124.4 463.501 -1110.6 485.753 -1099.6 503.79 C -1089.9 519.614 -1084.7 531.515 -1073.9 550.681 C -1054 585.84 -1047.9 594.83 -1036.1 613.088 C -1024.5 631.046 -1013.6 641.058 -1008.1 649.666 C -1000.3 661.744 -1001.6 659.476 -996.37 674.662 C -992.05 687.149 -993.12 687.257 -991.87 693.869 C -990.97 698.696 -986.72 701.126 -980.4 705.35 C -972.66 710.523 -971.49 743.652 -970.12 756.365 C -967.18 783.605 -966.97 798.271 -966.68 798.266"
                    id="path-2"
                >
                    <animate id="anim2" attributeName="stroke-dashoffset" values="0px;42px" begin="0s;anim2.end+0s" dur="1s" fill="freeze" keyTimes="0; 1" />
                </path>
                <path
                    style={{ fill: 'none', strokeLinecap: 'round', stroke: 'rgb(255, 0, 0)', strokeWidth: '10px', strokeDasharray: '1, 20' }}
                    d="M -991.84 692.031 C -990.41 700.948 -999.5 706.797 -998.77 714.35 C -997 733.2 -994.78 742.377 -993.3 754.743 C -990.96 774.246 -988.15 806.206 -986.17 816.831"
                    id="path-3"
                >
                    <animate id="anim3" attributeName="stroke-dashoffset" values="0px;42px" begin="0.07s;anim3.end+0.07s" dur="1s" fill="freeze" repeatCount="indefinite" keyTimes="0; 1" />
                </path>
            </svg>

        active ? svgNoPain = <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1665.607 -474.392 775.444 1320.483" preserveAspectRatio="meet" style={{ position: 'absolute', top: -3, left: -14, width: 'auto', height: `600`, pointerEvents: 'none' }}>
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
        </svg> : null


    } else if (accident === 3) {

        svgPain = <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1665.607 -474.392 775.444 1320.483" preserveAspectRatio="meet" style={{ position: 'absolute', top: 9, left: -31, width: 'auto', height: `599`, pointerEvents: 'none' }}>

            <path
                style={{
                    fill: 'none',
                    strokeLinecap: 'round',
                    stroke: 'rgb(255, 0, 0)',
                    strokeWidth: 10,
                    strokeDasharray: '1, 20',
                    transformOrigin: '-1351.01px -42.832px'
                }}
                d="M -1437.3 -293.92 C -1437.1 -271.71 -1436.3 -77.362 -1436.2 -38.742 C -1436 12.648 -1370 12.903 -1338.2 20.403 C -1325.3 23.463 -1320.8 22.123 -1281.8 29.153 C -1270.4 31.213 -1249.1 34.253 -1233.1 42.713 C -1212.4 53.703 -1219.1 83.713 -1218.7 99.999 C -1218.5 107.808 -1222.1 120.049 -1217.7 168.1 C -1213 219.949 -1199.1 262.622 -1188.7 295.007 C -1182 315.839 -1174.5 336.191 -1168.6 347.029 C -1163.9 355.429 -1159.6 366.536 -1153.7 383.63 C -1146.3 405.283 -1152.1 395.192 -1144.3 412.346 C -1136.6 429.161 -1105 466.294 -1093.5 483.437 C -1086.7 493.539 -1070.8 517.33 -1059.7 535.367 C -1050.1 551.191 -1036.4 572.821 -1023.9 590.971 C -1013.8 605.611 -1014.4 621.661 -1007.8 642.981 C -1001.3 664.091 -1000.5 667.861 -996.89 676.741 C -991.53 690.081 -983.93 682.911 -981.23 702.581 C -980.78 705.831 -978.53 729.231 -977.29 735.841 C -976.39 740.671 -973.82 773.171 -971.73 786.671"
                id="path-4"
            >
                <animate id="anim4" attributeName="stroke-dashoffset" values="0;42" begin="0s;anim4.end+0s" dur="1s" fill="freeze" keyTimes="0; 1" />
            </path>
            <path
                style={{
                    fill: 'none',
                    strokeLinecap: 'round',
                    stroke: 'rgb(255, 0, 0)',
                    strokeWidth: 10,
                    strokeDasharray: '1, 20',
                    strokeDashoffset: '10px'
                }}
                d="M -1002 661.861 C -1001.3 666.101 -997.45 670.741 -997.93 677.901 C -998.47 685.811 -1005.6 687.241 -1004.7 696.261 C -1002.7 715.101 -997.95 744.811 -994.73 770.111"
                id="path-5"
            >
                <animate id="anim5" attributeName="stroke-dashoffset" values="0;42" begin="0.25s;anim4.end+0.25s" dur="1s" fill="freeze" keyTimes="0; 1" />
            </path>

        </svg>

        active ? svgNoPain = <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1665.607 -474.392 775.444 1320.483" preserveAspectRatio="meet" style={{ position: 'absolute', top: 9, left: -31, width: 'auto', height: `599`, pointerEvents: 'none' }}>

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
            <path
                style={{
                    fill: 'none',
                    strokeLinecap: 'round',
                    stroke: 'rgb(0, 0, 255)',
                    strokeWidth: 10,
                    strokeDasharray: '1, 20',
                    strokeDashoffset: '10px'
                }}
                d="M -1002 661.861 C -1001.3 666.101 -997.45 670.741 -997.93 677.901 C -998.47 685.811 -1005.6 687.241 -1004.7 696.261 C -1002.7 715.101 -997.95 744.811 -994.73 770.111"
                id="path-5"
            >
                <animate id="anim5" attributeName="stroke-dashoffset" values="0;42" begin="0.25s;anim4.end+0.25s" dur="1s" fill="freeze" keyTimes="0; 1" />
            </path>

        </svg> : null
    }

    return (

        <div className="flex p-10 max-w-215 mx-auto">

            <div className="relative h-150 w-screen">
                <img style={{ position: "absolute", top: "12px", left: "30px", height: "85px" }} src="/human-brain.png" alt="brain" />
                <img style={{ position: "absolute", top: "0", left: "0", height: "600px" }} src="/dermatomes-box.svg" alt="dermatomes" />
                {svgPain}
                {svgNoPain}
            </div>

            <div className="flex my-auto">
                <div>
                    <img src="/scrambler-machine.png" alt="" />
                    <button className="mt-10 py-5 px-8 border-theme text-(--theme) font-bold hover:bg-(--theme) hover:text-white rounded-4xl cursor-pointer hover:bg-color()" onClick={() => { setActive(true) }}>ATTIVA SCRAMBLER</button>
                </div>
            </div>

        </div>

    )

}

