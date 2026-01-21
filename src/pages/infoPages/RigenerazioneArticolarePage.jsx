
import { useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
export default function ContentPage() {

    const { setShowbar, setSidebarLinks } = useContext(GlobalContext);


    useEffect(() => {
        setShowbar(true)
        // Imposta i link specifici per questa pagina
        setSidebarLinks(
            [

                {
                    id: 1,
                    route: "/info/6",
                    title: "RIGENERAZIONE ARTICOLARE",
                },



            ]);

        // Cleanup: reset ai link di default quando esci dalla pagina
        return () => {
            setSidebarLinks([]);
        };
    }, []);

    const obbiettiviArticolari = [

        "Ridurre il dolore articolare cronico",

        "Migliorare la mobilità e la funzionalità articolare",

        "Favorire il recupero dei tessuti danneggiati",

        "Limitare l’infiammazione locale",

        "Ritardare o evitare interventi chirurgici invasivi",

        "Migliorare la qualità della vita e il ritorno alle attività quotidiane",

    ]

    const approccio = [

        "Controllo ottimale del dolore durante e dopo le procedure",

        "Maggiore comfort per il paziente",

        "Precisione nell’esecuzione dei trattamenti infiltrativi",

        "Sicurezza e monitoraggio clinico costante",

    ]

    const pazientiIdonei = [

        "Artrosi lieve o moderata",

        "Dolore articolare persistente (ginocchio, anca, spalla, caviglia)",

        "Sovraccarico articolare funzionale o sportivo",

        "Ridotta risposta alle terapie farmacologiche tradizionali",

        "Necessità di soluzioni conservative prima di un eventuale intervento chirurgico"

    ]

    const percorso = [

        "Valutazione clinica approfondita",

        "Analisi della storia dolorosa e funzionale",

        "Definizione di obiettivi realistici",

        "Monitoraggio dei risultati nel tempo",

    ]

    return (
        <section>

            <h1 className="text-center mt-30 mb-20 font-bold text-page-size">RIGENERAZIONE ARTICOLARE</h1>

            <p className="mx-1 sm:mx-5 rounded-xl bg-white p-10 ">
                La rigenerazione articolare è un insieme di trattamenti medici finalizzati a stimolare i naturali processi di riparazione dei tessuti articolari, riducendo dolore e limitazioni funzionali senza ricorrere, quando possibile, alla chirurgia.
                <br /><br />
                Questi approcci si basano su tecniche mirate e minimamente invasive, volte a migliorare la qualità di vita del paziente e a rallentare la progressione di patologie degenerative.

            </p>
            <div className="flex flex-wrap justify-center gap-20 mx-5">
                <div className="rounded-xl bg-white p-20 mt-30 max-w-150">

                    <h1 className="text-center  mb-10 font-bold">OBBIETTIVI DELLA RIGENERAZIONE ARTICOLARE</h1>



                    <div className="my-10 w-full ">
                        {obbiettiviArticolari.map((obj, index) => {
                            return (

                                <div key={index + 1} className="flex flex-col p-10 gap-3 max-w-100 text-center mx-auto justify-center">
                                    <h2 className="font-bold">{obj}</h2>
                                </div>
                            )
                        })}
                    </div>

                </div>

                <div className="rounded-xl bg-white p-20 mt-30 max-w-150">

                    <h1 className="text-center mb-10 font-bold">UN APPROCCIO MEDICO E SICURO</h1>

                    <div className="my-10 w-full ">
                        {approccio.map((target, index) => {
                            return (

                                <div key={index + 1} className="flex flex-col p-10 gap-3 max-w-100 text-center mx-auto justify-center">
                                    <h2 className="font-bold">{target}</h2>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-20 mx-5">
                <div className="rounded-xl bg-white p-20 mt-30 max-w-150">

                    <h1 className="text-center  mb-10 font-bold">PER QUALI PATOLOGIE È INDICATA QUESTA TERAPIA?</h1>



                    <div className="my-10 w-full">
                        {pazientiIdonei.map((obj, index) => {
                            return (

                                <div key={index + 1} className="flex flex-col p-10 gap-3 max-w-100 text-center mx-auto justify-center">
                                    <h2 className="font-bold">{obj}</h2>
                                </div>
                            )
                        })}
                    </div>

                </div>

                <div className="rounded-xl bg-white  p-20 mt-30  max-w-150">

                    <h1 className="text-center mb-10 font-bold">PERCORSO PERSONALIZZATO</h1>

                    <div className="my-10 w-full ">
                        {percorso.map((target, index) => {
                            return (

                                <div key={index + 1} className="flex flex-col p-10 gap-3 max-w-100 text-center mx-auto justify-center">
                                    <h2 className="font-bold">{target}</h2>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>

        </section>
    )
}