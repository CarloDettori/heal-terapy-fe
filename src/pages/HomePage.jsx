
import HeroComponent from "../components/common/HeroComponent.jsx"
import { useEffect, useContext, useRef } from "react";
import { GlobalContext } from "../context/GlobalContext"
import WhiteCard from "../components/ui/WhiteCard.jsx";
import TextInfo from "../components/ui/TextInfo.jsx";
import WaveBox from "../components/ui/WaveBox.jsx";

export default function HomePage() {

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

    const guides = [
        {
            id: 1,
            img: "/physiotherapy.png",
            text: "Visita specialistica personalizzata per individuare la causa reale del dolore",
        },
        {
            id: 2,
            img: "/blood-test.png",
            text: "Esami mirati (biochimici, neurologici, funzionali) per pianificare il trattamento più adatto",
        },
        {
            id: 3,
            img: "/physical-examination.png",
            text: "Terapie mini-invasive eseguite in ambulatorio, con ritorno immediato alla vita quotidiana",
        },
        {
            id: 4,
            img: "/schedule.png",
            text: "Follow-up dedicato per monitorare la risposta e mantenere i risultati nel tempo",
        },
    ]

    const obbiettiviClinica = [

        "competenza specialistica",

        "tecnologie e metodiche aggiornate",

        "attenzione alla persona",

        "miglioramento concreto della qualità di vita",

    ]



    return (
        <div>

            <HeroComponent regenerativeRef={regenerativeRef} painRef={painRef} />

            <TextInfo size={1} customColor="--theme" customClass="page-text-size font-bold mt-30"  >
                Approccio innovativo, mini-invasivo e personalizzato alla cura del dolore acuto e cronico.
            </TextInfo>


            <WhiteCard place="center" customClass="max-w-150 shadow-xl">



                <h1 className="font-bold">L’obiettivo è offrire al paziente un percorso di cura <br /> basato su:
                </h1>

                <div className="text-center px-5 ">
                    {obbiettiviClinica.map((trat, index) => {
                        return (

                            <div key={index + 1} className="flex flex-col py-3 mx-auto justify-center">
                                <h2 className="">{trat}</h2>
                            </div>
                        )
                    })}
                </div>

                <h2 className="font-bold">La sicurezza e l’efficacia del percorso terapeutico rappresentano elementi fondamentali dell’attività clinica.</h2>

            </WhiteCard>


            <WaveBox>
                <TextInfo size={1} customClass="font-bold text-page-size">COSA ASPETTARSI</TextInfo>
                <div className="flex flex-col gap-40 pb-30">
                    {
                        guides.map((guide) => {

                            return (

                                <div key={guide.id} className="max-w-500 flex flex-wrap justify-center">
                                    <img src={guide.img} className="h-100 py-15" alt="" />
                                    <h1 className="text-center ms-10 my-auto max-w-150" >{guide.text}</h1>
                                </div>

                            )
                        })
                    }
                </div>
            </WaveBox>


        </div>
    )
}