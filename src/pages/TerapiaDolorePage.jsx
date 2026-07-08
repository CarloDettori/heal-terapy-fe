import HeroComponent from "../components/common/HeroComponent.jsx"
import { useEffect, useContext, useRef } from "react";
import { GlobalContext } from "../context/GlobalContext"
import WhiteCard from "../components/ui/WhiteCard.jsx";
import TextInfo from "../components/ui/TextInfo.jsx";
import WaveBox from "../components/ui/WaveBox.jsx";

export default function TerapiaDolorePage() {

    const { setShowbar, setSidebarLinks } = useContext(GlobalContext);
    const regenerativeRef = useRef()
    const painRef = useRef()


    useEffect(() => {
        // Imposta i link specifici per questa pagina
        setSidebarLinks(
            [

                {
                    id: 1,
                    route: "/info/1",
                    title: "Ozonoterapia",

                },

                {
                    id: 3,
                    route: "/info/3",
                    title: "Medicina estetica",

                },
                {
                    id: 4,
                    route: "/info/4",
                    title: "Scrambler Therapy (Calmare®)",


                },
                {
                    id: 5,
                    route: "/info/5",
                    title: "Fibromialgia",


                },
                {
                    id: 6,
                    route: "/info/6",
                    title: "Rigenerazione articolare",


                },

                {
                    id: 7,
                    route: "/info/7",
                    title: "Trattamenti mini-invasivi",


                },

            ]);

        // Cleanup: reset ai link di default quando esci dalla pagina

    }, []);





    // function scrollTo(target) {
    //     if (target && target.current && typeof target.current.scrollIntoView === "function") {
    //         target.current.scrollIntoView({ behavior: "smooth", block: "start" });
    //     }
    // }


    const trattamentiMultimodali = [

        "terapie farmacologiche mirate",

        "procedure infiltrative e mini-invasive",

        "tecniche di neuromodulazione",

        "supporto riabilitativo e funzionale",

    ]




    return (




        <div className="box">








            <div className="max-w-150 mx-auto">
                <TextInfo customClass="font-bold text-page-size">TERAPIA DEL DOLORE</TextInfo>
                <div>
                    <img className=" w-1/2 mx-auto items-center my-10" src="/headache.png" alt="" />
                    <h1 className="home-corpo">Le terapie del dolore mirano a ridurre o eliminare la sofferenza fisica, migliorando la qualità di vita del paziente. Agiscono sulle cause o sui meccanismi del dolore, utilizzando approcci farmacologici, fisici e psicologici per favorire il benessere e il recupero funzionale.</h1>

                </div>
            </div>










            {/* TERAPIA DEL DOLORE */}
            <WaveBox>
                <div ref={painRef}></div>
                <TextInfo customClass="text-page-size font-bold">PRINCIPI DELLA TERAPIA DEL DOLORE</TextInfo>
                <TextInfo size={1}>La terapia del dolore è una disciplina medica dedicata alla diagnosi e al trattamento del dolore acuto e cronico, con l’obiettivo di migliorare la qualità di vita del paziente.</TextInfo>


                <TextInfo size={1} customClass="font-bold">Approccio centrato sul paziente</TextInfo>

                <TextInfo size={1}>Il trattamento del dolore si basa su una valutazione approfondita e personalizzata, che considera non solo la causa fisica del dolore, ma anche i fattori funzionali, psicologici e sociali che possono influenzarlo. Ogni percorso terapeutico è costruito sulle esigenze specifiche del paziente.</TextInfo>
            </WaveBox>

            <WhiteCard place="center" customClass="max-w-150">

                <h1 className="font-bold">Trattamento multimodale</h1>

                <h2 className="font-bold">La terapia del dolore utilizza un approccio integrato include:</h2>

                <div className="w-full px-5">
                    {trattamentiMultimodali.map((trat, index) => {
                        return (

                            <div key={index + 1} className="flex flex-col py-3 mx-auto justify-center">
                                <h2 className="">{trat}</h2>
                            </div>
                        )
                    })}
                </div>

                <h2 className="font-bold">L’obiettivo non è solo ridurre il sintomo doloroso, ma agire sulle sue cause e prevenire la cronicizzazione.</h2>

            </WhiteCard>

            <TextInfo size={1} customColor="--theme" customClass="font-bold">Riduzione dell’impatto del dolore sulla vita quotidiana</TextInfo>

            <TextInfo size={1} >Il controllo del dolore permette al paziente di recuperare autonomia, migliorare il sonno, l’umore e la capacità di svolgere le attività quotidiane, riducendo il ricorso prolungato ai farmaci quando possibile.</TextInfo>






        </div >


    )
}