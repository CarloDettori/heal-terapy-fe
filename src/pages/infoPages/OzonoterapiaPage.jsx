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


            ]);



    }, []);

    const events = [
        "Dolore muscolo-scheletrico (lombalgia, cervicalgia, artrosi)",
        "Ernie e protrusioni discali",
        "Disturbi vascolari (insufficienza venosa, ulcere)",
        "Processi infiammatori cronici",
        "Infezioni (grazie all’azione ossidante, come coadiuvante)",
        "Medicina sportiva (recupero funzionale)",
    ]

    const somministrazioni = [
        {
            id: 1,
            title: "Autoemotrasfusione",
            dex: "Si preleva sangue, lo si miscela con O₂-O₃ e lo si reinfonde",
        },
        {
            id: 2,
            title: "Infiltrazioni locali",
            dex: "Intramuscolari, periarticolari o paravertebrali",
        },
        {
            id: 3,
            title: "Insufflazioni",
            dex: "Rettali o vaginali (in contesti specifici)",
        },
        {
            id: 4,
            title: "Applicazioni topiche",
            dex: "Acqua o oli ozonizzati",
        },


    ]

    const effetti = [
        "Effetto antinfiammatorio",
        "Miglioramento dell’ossigenazione tissutale",
        "Stimolazione del microcircolo",
        "Modulazione dello stress ossidativo (attivazione dei sistemi antiossidanti endogeni)",
    ]

    const efficacia = [
        "Le evidenze sono eterogenee: alcuni studi mostrano benefici (soprattutto nel dolore lombare), altri risultati limitati",
        "Non è una terapia di prima linea nelle linee guida internazionali",
        "In Italia è praticata da medici formati; il riconoscimento varia per indicazione",
    ]

    const sicurezza = [
        "È generalmente ben tollerata",
        "Mai inalare ozono (tossico per i polmoni)",
        "Controindicata in: favismo, gravidanza, ipertiroidismo non controllato, gravi anemie",
    ]





    return (

        <section>

            <h1 className="text-center mt-30 mb-20  text-page-size"><strong>OZONOTERAPIA</strong></h1>
            <h2 className="mx-1 rounded-xl bg-white p-10 text-center font-bold">
                L’ozonoterapia è una pratica che utilizza una miscela di ossigeno e ozono (O₃) a scopo terapeutico. L’ozono impiegato è ozono medicale, prodotto da apparecchi certificati e usato in concentrazioni controllate.

            </h2>

            <div className="mx-5">

                <h1 className="mt-20 mb-3 font-bold">PER COSA E' INDICATA</h1>
                <h2 className="font-bold px-5">In ambito clinico o para-clinico viene utilizzata soprattutto come terapia di supporto per:</h2>
                <div className="flex flex-col py-3 px-5 gap-1">
                    {events.map((event, index) => {
                        return (

                            <h2 key={index + 1}>{event}</h2>
                        )
                    })}
                </div>
                <h2 className="font-bold  px-5">Non sostituisce le terapie standard: quando usata, lo è come complemento.</h2>

                <h1 className="mt-10 mb-3 font-bold">PRINCIPALI MODALITA' DI SOMMINISTRAZIONE</h1>
                <div className="w-full px-5">
                    {somministrazioni.map((metodo) => {
                        return (

                            <div key={metodo.id} className="flex flex-col pb-2  ">
                                <h2 className="font-bold">{metodo.title}</h2>
                                <h2>{metodo.dex}.</h2>
                            </div>
                        )
                    })}
                </div>

                <h1 className="mt-8 mb-3 font-bold">MECCANISMI D'AZIONE (proposti)</h1>
                <div className="flex flex-col px-5 gap-1">
                    {effetti.map((effetto, index) => {
                        return (

                            <h2 key={index + 1}>{effetto}.</h2>
                        )
                    })}
                </div>

                <h1 className="mt-10 mb-3 font-bold">EFFICACIA: cosa dice la scienza</h1>
                <div className="flex flex-col px-5 gap-1">
                    {efficacia.map((effic, index) => {
                        return (

                            <h2 key={index + 1}>{effic}.</h2>
                        )
                    })}
                </div>

                <h1 className="mt-10 mb-3 font-bold">SICUREZZA E CONTROINDICAZIONI</h1>
                <h2 className="font-bold px-5 mb-3">Se eseguita correttamente da personale medico:</h2>
                <div className="flex flex-col px-5 gap-1">
                    {sicurezza.map((sicur, index) => {

                        return (
                            <h2 key={index + 1}>{sicur}.</h2>
                        )
                    })}
                </div>

            </div>

            <h1 className="py-20 text-center text-(--theme) font-bold">
                In sintesi l’ozonoterapia può avere un ruolo integrativo in alcune condizioni, soprattutto nel trattamento del dolore, ma non è una cura universale e va valutata caso per caso con un medico.

            </h1>


        </section>


    )
}