import { Link } from "react-router-dom"

export default function InfoPage() {

    const infos = [

        {
            id: 1,
            title: "Ozonoterapia",
            subtitle: "La storia e l’innovazione",
            img: "/ozone.png",
            lists: "",
            description: "L’ozonoterapia utilizza una miscela di ossigeno e ozono con finalità terapeutiche, in particolare per dolori articolari, lombalgie e patologie infiammatorie. Uno dei massimi studiosi italiani del settore, Velio Bocci, ha contribuito a definirne le basi scientifiche, evidenziando il ruolo antinfiammatorio e modulatore dell’ozono. Oggi l’ozonoterapia rappresenta un supporto sicuro e versatile, applicabile in ambito ambulatoriale e privo di incisioni chirurgiche."

        },
        {
            id: 2,
            title: "Medicina rigenerativa",
            subtitle: "la comunicazione delle cellule",
            img: "/regenerative.png",
            lists: "",
            description: "La medicina rigenerativa mira a riattivare la capacità naturale dei tessuti di ripararsi. Tra i principali studiosi, Carlo Ventura ha introdotto l’idea innovativa della “comunicazione sonora delle cellule”: ogni cellula emette vibrazioni, e comprenderle può aprire nuove vie alla rigenerazione tissutale. In clinica, queste ricerche ispirano approcci di stimolazione biologica selettiva — riservati ai pazienti idonei — per rigenerare articolazioni e tessuti danneggiati.",

        },
        // {
        //     id: 3,
        //     title: "Esami diagnostici per la terapia dei lisosomi",
        //     subtitle: "",
        //     img: "/blood-analysis.png",
        //     lists: "",
        //     description: "I lisosomi sono gli “apparati di pulizia” delle cellule. Alterazioni della loro funzione possono contribuire a processi infiammatori cronici o degenerativi. Gli esami per la funzionalità lisosomiale permettono di valutare se un paziente è candidato a specifiche terapie rigenerative o di supporto metabolico, fornendo una base diagnostica preziosa per un piano di trattamento personalizzato.",

        // },
        {
            id: 3,
            title: "Medicina estetica",
            subtitle: "armonia naturale e tecniche non invasive",
            img: "/botox.png",
            lists: [
                {
                    title: "Ringiovanimento del volto",
                    description: "Trattamenti personalizzati per migliorare luminosità, tono e idratazione della pelle."
                },
                {
                    title: "Biorivitalizzazione",
                    description: "Microiniezioni di sostanze biostimolanti per favorire la rigenerazione cutanea."
                },
                {
                    title: "Correzione di inestetismi",
                    description: "Procedure mini-invasive per ridurre rughe, cicatrici e lassità dei tessuti."
                }
            ],
            description:
                "La medicina estetica moderna punta a valorizzare l’armonia del viso e del corpo attraverso tecniche non invasive o mini-invasive. I trattamenti sono mirati a stimolare i processi biologici naturali della pelle, migliorando qualità tissutale e definizione dei volumi senza alterare la naturale espressività. Gli interventi vengono personalizzati in base alle caratteristiche del paziente, con l’obiettivo di ottenere risultati equilibrati, progressivi e rispettosi della fisiologia cutanea."
        },
        {
            id: 4,
            title: "Scrambler Therapy (Calmare®)",
            subtitle: "calmare il dolore neuropatico",
            img: "/scrumbler.png",
            lists: "",
            description: "La Scrambler Therapy, conosciuta anche come Calmare®, è una tecnologia non invasiva che invia segnali elettrici “non dolorosi” al sistema nervoso, rimodulando la percezione del dolore. È particolarmente indicata per il trattamento del fuoco di Sant’Antonio e di altre neuropatie croniche. Negli Stati Uniti è riconosciuta come metodo efficace e sicuro da numerosi centri universitari(es.Johns Hopkins, Cleveland Clinic)."

        },
        {
            id: 5,
            title: "Fibromialgia",
            subtitle: "modulare il sistema nervoso centrale",
            img: "/muscle-pain.png",
            lists: "",
            description: "La fibromialgia è una condizione complessa, spesso multifattoriale. Le nostre tecniche mini- invasive mirano a ridurre l’iperattività del sistema nervoso centrale, mediante terapie di neuromodulazione che “ri - educano” il segnale del dolore, offrendo sollievo anche nei casi più resistenti."

        },
        {
            id: 6,
            title: "Rigenerazione articolare",
            subtitle: "solo per soggetti idonei",
            img: "/knee.png",
            lists: "",
            description: "Le terapie rigenerative articolari (come PRP o cellule mesenchimali) non sono indicate per tutti.Sono rivolte a pazienti con lesioni articolari iniziali o moderate, nei quali è ancora possibile stimolare una risposta biologica di riparazione. L’idoneità viene valutata con esami mirati e consulenza specialistica."

        },

        {
            id: 7,
            title: "Trattamenti mini-invasivi per dolore e mobilità",
            subtitle: "Tecniche moderne permettono oggi di trattare molte patologie senza incisioni chirurgiche, riducendo tempi di recupero e rischi.",
            img: "/no-scars.png",
            lists: [
                {
                    title: "Tunnel carpale",
                    description: "Terapie ecoguidate e infiltrative che riducono la compressione nervosa."
                },
                {
                    title: "Fascite plantare",
                    description: "Trattamenti con onde d’urto o plasma ricco di piastrine(PRP) per stimolare la"
                },
                {
                    title: "Patologie neuromotorie",
                    description: "Approcci neuro-funzionali e biologici per migliorare il controllo motorio e ridurre il dolore"
                },
            ]


            ,
            description: "",

        },
    ]

    const faqs = [
        {
            id: 1,
            question: "Le terapie sono dolorose o chirurgiche?",
            answer: "No. Tutti i trattamenti proposti sono mini-invasivi o non invasivi. Nella maggior parte dei casi si effettuano in ambulatorio, senza ricovero e con recupero immediato."
        },
        {
            id: 2,
            question: "L’ozonoterapia è sicura?",
            answer: "Sì, se eseguita da personale medico qualificato e con protocolli standardizzati. È una metodica ben documentata in letteratura e con oltre cinquant’anni di esperienza clinica."
        },
        {
            id: 3,
            question: "Tutti possono fare medicina rigenerativa?",
            answer: "No. La terapia rigenerativa è riservata a pazienti idonei, valutati con esami specifici e visita specialistica."
        },
        {
            id: 4,
            question: "Che differenza c’è tra terapia del dolore e medicina rigenerativa?",
            answer: "La terapia del dolore riduce i sintomi (dolore, infiammazione), mentre la medicina rigenerativa favorisce la riparazione dei tessuti. In molti casi le due strategie vengono integrate."
        },
        {
            id: 5,
            question: "Cos’è la Scrambler Therapy?",
            answer: "È una tecnica di neuromodulazione che “inganna” i recettori del dolore con segnali non dolorosi, riducendo in modo duraturo il dolore neuropatico."
        },


    ]

    return (
        <section>

            <h1 className="text-center text-page-size font-bold mb-20 mt-30">INFORMAZIONI</h1>

            <div className="flex text-(--dark-theme) flex-col gap-10 mt-20 mb-10 p-10 bg-white rounded-4xl text-center max-w-230 mx-auto">

                <div className="flex flex-col gap-3">

                    <h1 className="font-bold">
                        Clinica di Terapia del Dolore e Medicina Rigenerativa
                    </h1>

                    <h2>
                        Approccio innovativo, mini-invasivo e personalizzato alla cura del dolore cronico e alla rigenerazione dei tessuti.
                    </h2>

                </div>



                <div className="flex flex-col gap-3">

                    <h1 className="font-bold" >
                        Visione e Filosofia
                    </h1>

                    <h2>
                        Approccio innovativo, mini-invasivo e personalizzato alla cura del dolore cronico e alla rigenerazione dei tessuti.
                    </h2>

                    <ul>
                        <li><p>Riduzione del dolore senza chirurgia</p></li>
                        <li><p>Stimolazione dei processi naturali di guarigione</p></li>
                        <li><p>Selezione accurata del paziente, per garantire trattamenti mirati ed efficaci.</p></li>
                    </ul>

                </div>

            </div>

            <h1 className="font-bold my-20 mb-0 p-10 text-center ">AREE DI COMPETENZA</h1>

            <div className="flex flex-wrap justify-center my-20 mt-0 p-10 gap-10">

                {infos.map((info) => {

                    return (

                        <Link to={`/info/${info.id}`} key={info.id} className="border-dark-theme p-10 flex flex-col gap-5 p-10 rounded-4xl bg-white max-w-100">
                            <img className="max-w-50 mx-auto" src={info.img} alt="info-img" />
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <h1>{info.title}</h1>
                                    <h2>{info.subtitle}</h2>
                                </div>
                                {info.description ? <p>{info.description}</p> : ""}
                                {info.lists ?
                                    <ul className="flex flex-col gap-3">

                                        {info.lists.map((li) => {

                                            return (
                                                <li key={li.title}>
                                                    <h2>{li.title}</h2>
                                                    <p>{li.description}</p>
                                                </li>
                                            )

                                        })}

                                    </ul>
                                    :
                                    ""
                                }
                            </div>
                        </Link>

                    )

                })}

            </div>

            <h1 className="font-bold text-center">DOMANDE FREQUENTI</h1>

            <div className="flex flex-col gap-5 m-20  p-20 bg-white border-dark-theme rounded-4xl">
                {
                    faqs.map((faq) => {
                        return (
                            <div key={faq.id} className="flex flex-col ">
                                <h1 className="font-bold">{faq.question}</h1>
                                <h2>{faq.answer}</h2>
                            </div>
                        )


                    })
                }
            </div>

            <h1 className="text-center text-(--dark-theme) font-bold p-30">“Curare il dolore non significa solo eliminarlo,<br />ma ristabilire l’equilibrio del corpo e permettere alla persona di tornare a vivere in piena autonomia.<br />La scienza moderna ci offre strumenti innovativil’obiettivo è usarli con rigore, esperienza e umanità.”</h1>



        </section>
    )
}