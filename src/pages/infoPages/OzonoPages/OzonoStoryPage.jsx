
import { useEffect, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";


export default function OzonoStoryPage() {

    const { setShowbar, setSidebarLinks } = useContext(GlobalContext);

    useEffect(() => {
        setShowbar(true)
        // Imposta i link specifici per questa pagina
        setSidebarLinks(
            [

                {
                    id: 1,
                    route: "/info/1",
                    title: "OZONOTERAPIA",

                },

                {
                    id: 3,
                    route: "/info/1/2",
                    title: "Storia Ozonoterapia",

                },
                {
                    id: 4,
                    route: "/info/1/3",
                    title: "Esponenti Ozonoterapia",


                },
                {
                    id: 5,
                    route: "/info/1/4",
                    title: "Domande frequenti",


                },


            ]);



    }, []);

    const timeline = [

        {
            id: 1,
            title: "XIX secolo – La scoperta dell’ozono",
            list: [
                "1840: il chimico tedesco Christian Friedrich Schönbein identifica l’ozono come gas distinto dall’ossigeno",
                "Viene presto notata la sua forte capacità ossidante e il potere disinfettante.",
            ]

        },
        {
            id: 2,
            title: "Fine XIX – inizi XX secolo – I primi usi medici",
            list: [
                "L’ozono viene impiegato per disinfettare acqua e ambienti ospedalieri.",
                "Nascono i primi generatori di ozono per uso medico.",
                "In Germania e Francia si sperimenta l’uso su ferite infette e ulcere.",
            ]

        },
        {
            id: 3,
            title: "Prima Guerra Mondiale (1914–1918)",
            list: [
                "L’ozono viene usato per trattare ferite dei soldati, gangrene e infezioni, in assenza di antibiotici.",
                "Risultati considerati incoraggianti per la riduzione delle infezioni e degli odori necrotici.",
            ]

        },
        {
            id: 4,
            title: "Anni ’30–’50 – Sviluppo delle tecniche",
            list: [
                "Si diffonde la autoemotrasfusione ozonizzata.",
                "L’ozonoterapia entra nella pratica di alcuni medici europei, soprattutto in Germania, Svizzera e Italia.",
                "Con l’avvento degli antibiotici, l’interesse scientifico diminuisce.",
            ]

        },
        {
            id: 5,
            title: "Anni ’60–’70 – Periodo di marginalità",
            list: [
                "La medicina ufficiale privilegia farmaci e chirurgia.",
                "L’ozonoterapia resta confinata a pratiche complementari, spesso senza standard condivisi.",
            ]

        },
        {
            id: 6,
            title: "Anni ’80–’90 – Ripresa e standardizzazione",
            list: [
                "Migliorano i generatori medicali (dosaggi più precisi).",
                "In Italia nascono le prime società scientifiche di ozonoterapia",
                "Si studiano i meccanismi biochimici: stress ossidativo controllato e risposta antiossidante",
            ]

        },
        {
            id: 7,
            title: "XXI secolo – Uso selettivo e ricerca",
            list: [
                "L’ozonoterapia viene studiata soprattutto per:",
                {
                    sublist: [
                        "dolore lombare ed ernia del disco",
                        "medicina del dolore",
                        "patologie vascolari croniche",
                    ],
                },
                "Rimane terapia complementare, con accettazione variabile a livello internazionale.",
                "In Italia è atto medico se praticata da personale formato.",
            ]

        },

    ]




    return (

        <section>

            <h1 className="text-center mt-30 mb-20  text-page-size"><strong>STORIA DELL' OZONOTERAPIA</strong></h1>
            <h2 className="mx-1 rounded-xl bg-white p-10 text-center font-bold">
                La storia dell’ozonoterapia si intreccia con la scoperta dell’ozono, l’evoluzione della chimica moderna e l’uso medico dei gas.
            </h2>



            <h1 className="mt-10 px-5 mb-3 font-bold">LINEA DEL TEMPO</h1>
            <div className="w-full px-10 mb-20 flex flex-col gap-5">
                {timeline.map((event) => {
                    return (

                        <div key={event.id} className="flex flex-col gap-1  ">
                            <h2 className="font-bold">{event.title}</h2>

                            {event.list.map((li, index) => {
                                return (
                                    <div key={index} className=" flex flex-col px-5">
                                        {typeof li === 'string' ? (
                                            <h2>{li}</h2>
                                        ) : (
                                            <ul className="px-5">
                                                {li.sublist.map((subli, subindex) => (
                                                    <li key={subindex + 1}>-{subli}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>





        </section>
    )
}