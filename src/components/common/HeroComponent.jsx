
import { Link } from "react-router-dom";
import TextInfo from "../ui/TextInfo.jsx";
import BreathingSphereComponent from "./BreathingSphereComponent.jsx";
import Header from "../../layout/Header.jsx"

export default function HeroComponent({ regenerativeRef, painRef }) {

    const regenerativeLinks = [
        { id: 4, title: "Ozonoterapia", link: "/info/1" },

        { id: 6, title: "Rigenerazione Articolare", link: "/info/6" },
        { id: 7, title: "Medicina Estetica", link: "/info/3" },
        { id: 8, title: "Trattamenti Mini-invasivi", link: "/info/7" },
    ];

    const painLinks = [
        { id: 4, title: "Patologie Trattate", link: "/info/8" },
        { id: 3, title: "Le Tecniche", link: "/info/9" },
    ];

    return (
        <>
            <section className="hero-section">
                {/* <BreathingSphereComponent regenerativeRef={regenerativeRef} painRef={painRef} /> */}
                <div className={"my-5  gap-15 flex flex-wrap justify-center"}>

                    <div className="border rounded-4xl p-5">

                        <Link to="/ter-dol" className=" cursor-pointer text-center w-full">
                            <h1 className="hover:scale-120 my-2">TERAPIA DEL DOLORE</h1>
                        </Link>

                        {painLinks.map((link) => (
                            <Link to={link.link} key={link.id} className="grid-circle hover:scale-110 hover:border-light-theme opacity-100">
                                <h1>{link.title}</h1>
                            </Link>
                        ))}

                    </div>

                    <div className="visible border rounded-4xl p-5">

                        <Link to="/med-rig" className="hover:scale-120 cursor-pointer text-center w-full" >
                            <h1 className="hover:scale-120 my-2">MEDICINA RIGENERATIVA</h1>
                        </Link>

                        {regenerativeLinks.map((link) => (
                            <Link to={link.link} key={link.id} className="grid-circle hover:scale-110">
                                <h1>{link.title}</h1>
                            </Link>
                        ))}

                    </div>






                </div>
            </section >


        </>
    );

}