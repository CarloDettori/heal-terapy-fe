
import HeroComponent from "../components/common/HeroComponent.jsx"
import { useEffect, useContext, useRef } from "react";
import { GlobalContext } from "../context/GlobalContext"
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

    {/*dati cards*/ }
    const knowledges = [

        {
            id: 1,
            title: "TERAPIA DEL DOLORE",
            icon: "/headache.png",
            description: "Le terapie del dolore mirano a ridurre o eliminare la sofferenza fisica, migliorando la qualità di vita del paziente. Agiscono sulle cause o sui meccanismi del dolore, utilizzando approcci farmacologici, fisici e psicologici per favorire il benessere e il recupero funzionale.",
            scrollTarget: painRef,
        },
        {
            id: 2,
            title: "MEDICINA RIGENERATIVA",
            icon: "/regenerative.png",
            description: "La medicina rigenerativa mira a riparare o sostituire cellule, tessuti e organi danneggiati, stimolando i naturali processi di guarigione o utilizzando cellule staminali e biomateriali. Il suo scopo è ristabilire la funzione originale dei tessuti, superando i limiti dei trattamenti tradizionali basati solo sulla cura dei sintomi.",
            scrollTarget: regenerativeRef,
        }

    ]



    function scrollTo(target) {
        if (target && target.current && typeof target.current.scrollIntoView === "function") {
            target.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }


    const trattamentiMultimodali = [

        "terapie farmacologiche mirate",

        "procedure infiltrative e mini-invasive",

        "tecniche di neuromodulazione",

        "supporto riabilitativo e funzionale",

    ]

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

    const obbiettiviClinica = [

        "competenza specialistica",

        "tecnologie e metodiche aggiornate",

        "attenzione alla persona",

        "miglioramento concreto della qualità di vita",

    ]

    const products = [

        {
            id: 1,
            icon: "/acupunture.png",
            description: "Agopuntura per anestesia",
        },
        {
            id: 2,
            icon: "/injection.png",
            description: "Iniezione di anestetico in nervo periferico per analgesia",
        },
        {
            id: 3,
            icon: "/laser.png",
            description: "Laser terapia antalgica",
        },
        {
            id: 4,
            icon: "/ozone.png",
            description: "Ozonoterapia",
        },
        {
            id: 5,
            icon: "/scrumbler.png",
            description: "Innibizione dolore cronico tramite elettro-analgesia",
        }

    ]


    const guides = [
        {
            id: 1,
            img: "/physiotherapy.png",
            text: "Visita specialistica personalizzata per individuare la causa reale del dolore",
        },
        {
            id: 2,
            img: "/blood-test.png",
            text: "Esami mirati (lisosomiali, neurologici, funzionali) per pianificare il trattamento più adatto",
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



    return (
        <>

            <HeroComponent regenerativeRef={regenerativeRef} painRef={painRef} />

            <section className="text-center">

                <h1 className="my-20 pb-30 font-bold text-(--theme) text-page-size">
                    Approccio innovativo, mini-invasivo e personalizzato <br />alla cura del dolore cronico e alla rigenerazione dei tessuti.
                </h1>
                <div className="flex flex-wrap justify-around my-20 gap-30">

                    {
                        knowledges.map((knowledges) => {
                            return (

                                <div key={knowledges.id} className="max-w-100">
                                    <h1 className="font-bold">{knowledges.title}</h1>
                                    <div>
                                        <img className=" w-1/2 mx-auto items-center my-10" src={knowledges.icon} alt="" />
                                        <h2 className="home-corpo">{knowledges.description}</h2>
                                        <button className="mt-10 py-5 px-8 border-theme text-(--theme) font-bold hover:bg-(--theme) hover:text-white rounded-4xl cursor-pointer hover:bg-color()" onClick={() => { scrollTo(knowledges.scrollTarget) }}>SCOPRI DI PIU'</button>
                                    </div>
                                </div>

                            )
                        })
                    }




                </div>


                {/* TERAPIA DEL DOLORE */}
                <div className="mb-50" ref={painRef}></div>
                <h1 className="text-center mb-10 font-bold text-page-size">PRINCIPI DELLA TERAPIA DELA DOLORE</h1>

                <h2 className="mt-10 mx-auto max-w-150">La terapia del dolore è una disciplina medica dedicata alla diagnosi e al trattamento del dolore acuto e cronico, con l’obiettivo di migliorare la qualità di vita del paziente e ripristinare il miglior livello possibile di funzionalità.</h2>

                <h1 className="text-center mt-30 mb-10 font-bold text-page-size">Approccio centrato sul paziente</h1>

                <h2 className="mt-10 mx-auto max-w-200">Il trattamento del dolore si basa su una valutazione approfondita e personalizzata, che considera non solo la causa fisica del dolore, ma anche i fattori funzionali, psicologici e sociali che possono influenzarlo. Ogni percorso terapeutico è costruito sulle esigenze specifiche del paziente.</h2>

                <div className="rounded-xl bg-white p-20 mt-30 mx-auto max-w-150">

                    <h1 className="mb-10 font-bold">Trattamento multimodale</h1>

                    <h2 className="mb-10 font-bold">La terapia del dolore utilizza un approccio integrato che può includere:</h2>

                    <div className="my-10 w-full">
                        {trattamentiMultimodali.map((trat, index) => {
                            return (

                                <div key={index + 1} className="flex flex-col py-3 max-w-100 mx-auto justify-center">
                                    <h2 className="">{trat}</h2>
                                </div>
                            )
                        })}
                    </div>

                    <h2 className=" font-bold">L’obiettivo non è solo ridurre il sintomo doloroso, ma agire sulle sue cause e prevenire la cronicizzazione.</h2>

                </div>

                <h1 className="mt-10 font-bold">Riduzione dell’impatto del dolore sulla vita quotidiana</h1>

                <h2 className="mt-10 max-w-100 mx-auto">Il controllo del dolore permette al paziente di recuperare autonomia, migliorare il sonno, l’umore e la capacità di svolgere le attività quotidiane, riducendo il ricorso prolungato ai farmaci quando possibile.</h2>


                {/* MEDICINA RIGENERATIVA */}
                <div className="mb-50" ref={regenerativeRef}></div>
                <h1 className="text-center mb-10 font-bold text-page-size">PRINCIPI DELLA MEDICINA RIGENERATIVA</h1>

                <h2 className="mt-10 mx-auto max-w-150">La medicina rigenerativa è un ambito innovativo della medicina che mira a stimolare i naturali processi di riparazione e rigenerazione dei tessuti danneggiati, favorendo il recupero funzionale.</h2>
                <div className="flex flex-wrap gap-10 justify-center mt-20">
                    <div className="rounded-xl bg-white p-20 max-w-150">
                        <h1 className="text-center mb-10 font-bold text-page-size">Stimolare i meccanismi biologici naturali</h1>

                        <h2 className="mt-10 mx-auto">Alla base della medicina rigenerativa vi è l’utilizzo di metodiche che sfruttano le capacità intrinseche dell’organismo di riparare tessuti come cartilagine, tendini, legamenti, muscoli e ossa. L’obiettivo è favorire una guarigione biologica, non solo sintomatica.</h2>
                    </div>

                    <div className="rounded-xl bg-white p-20 max-w-150">
                        <h1 className="text-center mb-10 font-bold text-page-size">Approccio minimamente invasivo</h1>

                        <h2 className="mt-10 mx-auto max-w-200">I trattamenti rigenerativi sono generalmente mini-invasivi e mirano a ridurre il trauma chirurgico, i tempi di recupero e il rischio di complicanze, quando indicati e appropriati per il quadro clinico del paziente.</h2>
                    </div>

                    <div className="rounded-xl bg-white p-20  max-w-150">
                        <h1 className="text-center mb-10 font-bold text-page-size">Integrazione con altre terapie</h1>

                        <h2 className="mt-10 mx-auto max-w-200">La medicina rigenerativa non sostituisce la medicina tradizionale, ma si integra con essa. Può essere associata a programmi di riabilitazione, terapia del dolore e prevenzione, in un percorso terapeutico completo e coordinato.</h2>
                    </div>
                </div>
                {/*<h1 className="my-20 mt-30 font-bold">COSA OFFRO?</h1>
                <div className="flex mb-10 flex-wrap gap-10 justify-center">
                    {
                        products.map((product) => {
                            return (


                                <div key={product.id} className=" max-w-50 bg-white p-5 rounded-2xl">
                                    <img src={product.icon} alt="" />
                                    <h2 className="home-corpo mt-3" >{product.description}</h2>
                                </div>

                            )
                        })
                    }
                </div>*/}

                <div className="flex flex-wrap gap-5 justify-center mt-30">

                    <div>
                        <h1 className="font-bold max-w-150  min-h-20 mx-auto">Integrazione tra Terapia del Dolore e Medicina Rigenerativa</h1>
                        <div className="rounded-xl bg-white p-20 mt-10 mx-auto max-w-150">



                            <h2 className="mb-10 font-bold">L’unione tra terapia del dolore e medicina rigenerativa consente di affrontare il problema in modo globale:</h2>

                            <div className="my-10 w-full">
                                {noDoloreSiRigenerazione.map((trat, index) => {
                                    return (

                                        <div key={index + 1} className="flex flex-col py-3 max-w-100 mx-auto justify-center">
                                            <h2 className="">{trat}</h2>
                                        </div>
                                    )
                                })}
                            </div>

                            <h2 className="flex mt-auto font-bold">Questo approccio integrato è particolarmente indicato nelle patologie muscolo-scheletriche, degenerative e post-traumatiche.</h2>

                        </div>
                    </div>

                    <div>
                        <h1 className="font-bold  max-w-150 min-h-20 mx-auto">Sicurezza, Appropriatezza e Personalizzazione</h1>
                        <div className="rounded-xl bg-white p-20 mt-10 mx-auto max-w-150">



                            <h2 className="mb-10 font-bold">Ogni trattamento viene proposto solo dopo una valutazione clinica accurata e nel rispetto delle linee guida scientifiche.
                                <br />
                                La scelta terapeutica si basa su:
                            </h2>

                            <div className="my-10 w-full">
                                {sceltaTerapeutica.map((trat, index) => {
                                    return (

                                        <div key={index + 1} className="flex flex-col py-3 max-w-100 mx-auto justify-center">
                                            <h2 className="">{trat}</h2>
                                        </div>
                                    )
                                })}
                            </div>

                            <h2 className=" font-bold">La sicurezza e l’efficacia del percorso terapeutico rappresentano elementi fondamentali dell’attività clinica.</h2>

                        </div>
                    </div>

                </div>

                <div className="rounded-xl bg-white p-20 mt-30 mx-auto max-w-150">

                    <h1 className="mb-10 font-bold">Obiettivo della Clinica</h1>

                    <h2 className="mb-10 font-bold">L’obiettivo è offrire al paziente un percorso di cura <br /> basato su:
                    </h2>

                    <div className="my-10 w-full">
                        {obbiettiviClinica.map((trat, index) => {
                            return (

                                <div key={index + 1} className="flex flex-col py-3 max-w-100 mx-auto justify-center">
                                    <h2 className="">{trat}</h2>
                                </div>
                            )
                        })}
                    </div>

                    <h2 className=" font-bold">La sicurezza e l’efficacia del percorso terapeutico rappresentano elementi fondamentali dell’attività clinica.</h2>

                </div>



                <h1 className="mt-20 mb-10 mt-50 font-bold">COSA ASPETTARSI</h1>
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

            </section>

        </>
    )
}