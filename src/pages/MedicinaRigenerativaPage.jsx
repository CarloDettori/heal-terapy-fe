import HeroComponent from "../components/common/HeroComponent.jsx"
import { useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext"
import WhiteCard from "../components/ui/WhiteCard.jsx";
import TextInfo from "../components/ui/TextInfo.jsx";
import WaveBox from "../components/ui/WaveBox.jsx";

export default function MedicinaRigenerativaPag() {

    const { setShowbar, setSidebarLinks } = useContext(GlobalContext);


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











    const noDoloreSiRigenerazione = [

        "controllo del dolore nelle fasi acute e croniche",

        "supporto alla riparazione dei tessuti",

        "miglioramento della funzione articolare e muscolare",

        "riduzione della progressione degenerativa, quando possibile",

    ]

    const sceltaTerapeutica = [

        "diagnosi precisa",

        "condizioni generali del paziente",

        "aspettative realistiche",

        "rapporto rischio-beneficio",

    ]



    const healInfo = [

        {
            id: 1,
            title: "Stimolare i meccanismi biologici naturali",
            description: "Alla base della medicina rigenerativa vi è l’utilizzo di metodiche che sfruttano le capacità intrinseche dell’organismo di riparare tessuti come cartilagine, tendini, legamenti, muscoli e ossa. L’obiettivo è favorire una guarigione biologica, non solo sintomatica.",
        },
        {
            id: 2,
            title: "Approccio minimamente invasivo",
            description: "I trattamenti rigenerativi sono generalmente mini-invasivi e mirano a ridurre il trauma chirurgico, i tempi di recupero e il rischio di complicanze, quando indicati e appropriati per il quadro clinico del paziente.",
        },
        {
            id: 3,
            title: "Integrazione con altre terapie",
            description: "La medicina rigenerativa non sostituisce la medicina tradizionale, ma si integra con essa. Può essere associata a programmi di riabilitazione, terapia del dolore e prevenzione, in un percorso terapeutico completo e coordinato.",
        }

    ]




    return (




        <div className="box text-center">




            <div className="max-w-150 mx-auto">
                <TextInfo customClass="font-bold text-page-size">MEDICINA RIGENERATIVA</TextInfo>
                <div>
                    <img className=" w-1/2 mx-auto items-center my-10" src="/regenerative.png" alt="" />
                    <TextInfo size={1} className="home-corpo">La medicina rigenerativa mira a riparare o sostituire cellule, tessuti e organi danneggiati, stimolando i naturali processi di guarigione o utilizzando cellule staminali e biomateriali. Il suo scopo è ristabilire la funzione originale dei tessuti, superando i limiti dei trattamenti tradizionali basati solo sulla cura dei sintomi.</TextInfo>

                </div>
            </div>





            {/* MEDICINA RIGENERATIVA */}
            <WaveBox>
                <div>
                    <TextInfo customClass="text-page-size font-bold">PRINCIPI DELLA MEDICINA RIGENERATIVA</TextInfo>

                    <TextInfo size={1} customColor="--theme" customClass="font-bold">La medicina rigenerativa è un ambito innovativo della medicina che mira a stimolare i naturali processi di riparazione e rigenerazione dei tessuti danneggiati, favorendo il recupero funzionale.</TextInfo>
                    <div className="mx-auto flex flex-wrap justify-center max-w-00">

                        {
                            healInfo.map((card) => {
                                return (
                                    <TextInfo className="flex flex-col" key={card.id}>
                                        <h1 className="font-bold mb-3">{card.title}</h1>
                                        <h2>{card.description}</h2>
                                    </TextInfo>
                                )
                            })
                        }

                    </div>
                </div>
            </WaveBox>
            <div className="flex flex-wrap gap-5 justify-center mt-30">

                <div className="h-full">
                    <TextInfo customClass=" text-page-size font-bold max-w-200">Integrazione tra Terapia del Dolore <br /> e Medicina Rigenerativa</TextInfo>
                    <TextInfo>



                        <h2 className="font-bold">L’unione tra terapia del dolore e medicina rigenerativa consente di affrontare il problema in modo globale:</h2>

                        <div className=" w-full p-5">
                            {noDoloreSiRigenerazione.map((trat, index) => {
                                return (

                                    <div key={index + 1} className="flex flex-col py-3  justify-center">
                                        <h2 className="">{trat}</h2>
                                    </div>
                                )
                            })}
                        </div>

                        <h2 className="flex mt-auto font-bold">Questo approccio integrato è particolarmente indicato nelle patologie muscolo-scheletriche, degenerative e post-traumatiche.</h2>

                    </TextInfo>
                </div>

                <div className="h-full">
                    <TextInfo size={1} customColor="--theme" customClass="font-bold">Sicurezza, Appropriatezza <br /> e Personalizzazione</TextInfo>
                    <WhiteCard >



                        <h2 className="font-bold">Ogni trattamento viene proposto solo dopo una valutazione clinica accurata e nel rispetto delle linee guida scientifiche.
                            <br />
                            La scelta terapeutica si basa su:
                        </h2>

                        <div className="w-full px-5">
                            {sceltaTerapeutica.map((trat, index) => {
                                return (

                                    <div key={index + 1} className="flex flex-col py-3  justify-center">
                                        <h2 className="">{trat}</h2>
                                    </div>
                                )
                            })}
                        </div>

                        <h2 className=" font-bold">La sicurezza e l’efficacia del percorso terapeutico rappresentano elementi fondamentali dell’attività clinica.</h2>

                    </WhiteCard>
                </div>

            </div>


        </div >


    )
}