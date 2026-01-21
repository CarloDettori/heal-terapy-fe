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

    const veliosLife = [

        "Prof. Velio Bocci nacque in Italia, si laureò in Medicina e Chirurgia presso l’Università di Siena nel 1954.",

        "Dopo la laurea iniziò come assistente prima in Clinica chirurgica generale, poi in Fisiologia generale, sempre presso la stessa università.",

        "Nel 1981 divenne Direttore dell’Istituto di Fisiologia generale (poi Fisiologia generale e Scienza dell’alimentazione) della Facoltà di Farmacia presso l’Università di Siena. ",

        "Iniziò ricerche fin dagli anni ’60‐’70 su molecole quali le citochine e l’interferone, ponendosi come “pioniere” in tali ambiti della fisiologia e fisiopatologia. ",

        "Fu visiting scholar nel programma Fulbright Program (Anno accademico 1967-1968) presso la University at Buffalo (USA) come studioso non-statunitense. ",

        "Venne nominato Professore Emerito all’Università di Siena nel maggio 2003.",


    ]

    const veliosWork = [

        "Bocci fu autore di numerose pubblicazioni scientifiche, in particolare nel campo della fisiologia, delle citochine, e poi soprattutto della terapia mediante ozono (ozonoterapia). ",

        "Un’opera di rilievo è il libro titolato Ozone: A New Medical Drug che esplora le basi biologiche dell’ozono e la sua applicazione medica.",

        "Ha contribuito a standardizzare l’uso della ozonoterapia proponendo che l’ozono, molecola fortemente ossidante, “attivasse” risposte biologiche generando messaggeri chimici che potessero stimolare funzioni fisiologiche essenziali.",

        "È spesso citato come “padre della ozonoterapia moderna” da associazioni specializzate. ",

        "Ha promosso l’idea che terapie alternative a basso costo e con efficacia potenziale potessero essere integrate nei sistemi sanitari pubblici. ",

    ]

    const veliosWorth = [

        "Per l’Università di Siena e in ambito accademico italiano, Bocci rappresenta un esempio di ricercatore che partendo da fisiologia generale ha aperto vie d’indagine in settori meno “tradizionali” come l’ozonoterapia.",

        "Il suo lavoro sull’ozono ha avuto impatto in alcuni ambiti della medicina complementare, stimolando dibattiti sull’uso clinico dell’ozono, sulla sua meccanica di azione, e sulla regolamentazione delle terapie basate su esso.",

        "In un contesto più ampio, la sua figura evidenzia il valore della ricerca interdisciplinare (medicina, fisiologia, farmacologia) e dell’innovazione clinica che cerca soluzioni meno costose o più accessibili.",

        "Anche se non privo di controversie (le terapie con ozono sono oggetto di dibattito scientifico riguardo efficacia e sicurezza), l’importanza di Bocci sta nel fatto che abbia formalizzato, in modo tanto sistematico quanto possibile, tali approcci e li abbia portati all’attenzione della comunità scientifica.",

        "Inoltre, per la comunità dell’ozonoterapia e delle cure complementari, la sua opera costituisce una base bibliografica e un riferimento storico. ",

    ]

    const veliosContext = [

        "Va ricordato che l’uso dell’ozonoterapia non è universalmente accettato nella medicina tradizionale come trattamento standard per molte condizioni, e l’adozione clinica varia molto da paese a paese.",

        "Il fatto che Bocci abbia concentrato parte della sua carriera su un campo che rimane “marginale” rispetto alla ricerca mainstream significa anche che i risultati e le applicazioni vanno valutati con cautela, in base alle evidenze più recenti e alla normativa vigente.",

        "Il contesto storico della sua carriera (anni ’60-’90) era caratterizzato da un’apertura maggiore verso terapie alternative o “integrative” rispetto ad oggi, il che rende la sua figura ancor più interessante come “ponte” tra fisiologia classica e nuove frontiere.",

    ]



    return (
        <>

            <div className="flex sidebar-space">


                <section>

                    <h1 className="text-center mt-30 mb-20  text-page-size"><strong>OZONOTERAPIA</strong></h1>

                    <p className="mx-1 sm:mx-5 rounded-xl bg-white p-10 ">
                        L’ozonoterapia è una pratica che utilizza una miscela di ossigeno e ozono (O₃) a scopo terapeutico. L’ozono impiegato è ozono medicale, prodotto da apparecchi certificati e usato in concentrazioni controllate.

                    </p>
                    <div className="my-10 w-full ">
                        {events.map((event) => {
                            return (

                                <div key={event.id} className="flex flex-col p-10 gap-3 max-w-100 text-center mx-auto justify-center">
                                    <h1 className="font-bold">{event.date}</h1>
                                    <h2>{event.fact}</h2>
                                </div>
                            )
                        })}
                    </div>

                    <h1 className="text-center mt-30 mb-20">Non sostituisce le terapie standard: quando usata, lo è come complemento.</h1>

                    <div className="mt-20 flex flex-col justify-center gap-5 rounded-xl bg-white p-20 gap-5" >

                        <div className="lg:flex lg:gap-5">


                            <img className="rounded-4xl my-auto lg:my-auto max-w-50 mx-auto" src="/doctor.png" alt="" />


                            <div className="text-(--dark-theme) gap-5 my-auto">

                                <h1 className="pb-5">
                                    <strong className="text-(--dark-theme) ">Dtt. Velio Bocci</strong>
                                </h1>

                                <p>
                                    Velio Bocci è stato un medico-ricercatore italiano che ha operato all’Università di Siena, è stato pioniere nello studio delle citochine e dell’interferone, e ha concentrato buona parte della sua produzione scientifica sull’ozonoterapia, scrivendo testi e articoli che hanno contribuito a formalizzare questo campo. La sua importanza risiede tanto nei risultati e nella produzione scientifica quanto nel ruolo di “innovatore” che ha attraversato i confini tra fisiologia tradizionale e medicina integrativa.
                                </p>



                            </div>

                        </div>

                        <div className="mt-5">
                            {
                                veliosLife.map((info, index) => {
                                    return (
                                        <p className="my-5" key={index + 1}>
                                            {info}
                                        </p>
                                    )
                                })
                            }
                        </div>



                        <div className="my-10 p-10">

                            <h1 className="mb-3">Cosa ha fatto / principali contributi</h1>

                            {
                                veliosWork.map((info, index) => {
                                    return (
                                        <h2 key={index + 1}>
                                            {info}
                                        </h2>
                                    )
                                })
                            }

                        </div>




                    </div>
                </section>
            </div>
        </>
    )
}