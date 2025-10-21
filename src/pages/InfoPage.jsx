export default function InfoPage() {

    const infos = [

        {
            title: "Ozonoterapia",
            subtitle: "La storia e l’innovazione",
            img: "/ozone.png",
            lists: [
                "",
            ],
            description: "L’ozonoterapia utilizza una miscela di ossigeno e ozono con finalità terapeutiche, in particolare per dolori articolari, lombalgie e patologie infiammatorie. Uno dei massimi studiosi italiani del settore, Velio Bocci, ha contribuito a definirne le basi scientifiche, evidenziando il ruolo antinfiammatorio e modulatore dell’ozono. Oggi l’ozonoterapia rappresenta un supporto sicuro e versatile, applicabile in ambito ambulatoriale e privo di incisioni chirurgiche."

        },
        {
            title: "Medicina rigenerativa",
            subtitle: "la comunicazione delle cellule",
            img: "/ozone.png",
            lists: [],
            description: "La medicina rigenerativa mira a riattivare la capacità naturale dei tessuti di ripararsi. Tra i principali studiosi, Carlo Ventura ha introdotto l’idea innovativa della “comunicazione sonora delle cellule”: ogni cellula emette vibrazioni, e comprenderle può aprire nuove vie alla rigenerazione tissutale. In clinica, queste ricerche ispirano approcci di stimolazione biologica selettiva — riservati ai pazienti idonei — per rigenerare articolazioni e tessuti danneggiati.",

        },
        {
            title: "Esami diagnostici per la terapia dei lisosomi",
            subtitle: "",
            img: "/ozone.png",
            lists: [],
            description: "I lisosomi sono gli “apparati di pulizia” delle cellule. Alterazioni della loro funzione possono contribuire a processi infiammatori cronici o degenerativi. Gli esami per la funzionalità lisosomiale permettono di valutare se un paziente è candidato a specifiche terapie rigenerative o di supporto metabolico, fornendo una base diagnostica preziosa per un piano di trattamento personalizzato.",

        },
        {
            title: "Trattamenti mini-invasivi per dolore e mobilità",
            subtitle: "Tecniche moderne permettono oggi di trattare molte patologie senza incisioni chirurgiche, riducendo tempi di recupero e rischi.",
            img: "/ozone.png",
            lists: [
                {
                    title: "Tunnel carpale",
                    description: "terapie ecoguidate e infiltrative che riducono la compressione nervosa."
                },
                {
                    title: "Fascite plantare",
                    description: "trattamenti con onde d’urto o plasma ricco di piastrine(PRP) per stimolare la"
                },
                {
                    title: "Patologie neuromotorie",
                    description: "approcci neuro-funzionali e biologici per migliorare il controllo motorio e ridurre il dolore"
                },
            ],
            description: "",

        },
        {
            title: "Fibromialgia",
            subtitle: "modulare il sistema nervoso centrale",
            img: "/ozone.png",
            lists: [],
            description: "La fibromialgia è una condizione complessa, spesso multifattoriale. Le nostre tecniche mini- invasive mirano a ridurre l’iperattività del sistema nervoso centrale, mediante terapie di neuromodulazione che “ri - educano” il segnale del dolore, offrendo sollievo anche nei casi più resistenti."

        },
        {
            title: "Rigenerazione articolare",
            subtitle: "solo per soggetti idonei",
            img: "/ozone.png",
            lists: [],
            description: "Le terapie rigenerative articolari (come PRP o cellule mesenchimali) non sono indicate per tutti.Sono rivolte a pazienti con lesioni articolari iniziali o moderate, nei quali è ancora possibile stimolare una risposta biologica di riparazione. L’idoneità viene valutata con esami mirati e consulenza specialistica."

        },
        {
            title: "Scrambler Therapy (Calmare®)",
            subtitle: "calmare il dolore neuropatico",
            img: "/ozone.png",
            lists: [],
            description: "La Scrambler Therapy, conosciuta anche come Calmare®, è una tecnologia non invasiva che invia segnali elettrici “non dolorosi” al sistema nervoso, rimodulando la percezione del dolore. È particolarmente indicata per il trattamento del fuoco di Sant’Antonio e di altre neuropatie croniche. Negli Stati Uniti è riconosciuta come metodo efficace e sicuro da numerosi centri universitari(es.Johns Hopkins, Cleveland Clinic)."

        },
    ]

    const faqs = [
        {
            question: "Le terapie sono dolorose o chirurgiche?",
            answer: "No. Tutti i trattamenti proposti sono mini-invasivi o non invasivi. Nella maggior parte dei casi si effettuano in ambulatorio, senza ricovero e con recupero immediato."
        },
        {
            question: "L’ozonoterapia è sicura?",
            answer: "Sì, se eseguita da personale medico qualificato e con protocolli standardizzati. È una metodica ben documentata in letteratura e con oltre cinquant’anni di esperienza clinica."
        },
        {
            question: "Tutti possono fare medicina rigenerativa?",
            answer: "No. La terapia rigenerativa è riservata a pazienti idonei, valutati con esami specifici e visita specialistica."
        },
        {
            question: "Che differenza c’è tra terapia del dolore e medicina rigenerativa?",
            answer: "La terapia del dolore riduce i sintomi (dolore, infiammazione), mentre la medicina rigenerativa favorisce la riparazione dei tessuti. In molti casi le due strategie vengono integrate."
        },
        {
            question: "Cos’è la Scrambler Therapy?",
            answer: "È una tecnica di neuromodulazione che “inganna” i recettori del dolore con segnali non dolorosi, riducendo in modo duraturo il dolore neuropatico."
        },


    ]

    return (
        <section>
            <h1 className="text-center my-20">INFORMAZIONI</h1>
            <div className="flex text-(--dark-theme) flex-col gap-10 my-20 p-10 bg-white rounded-4xl text-center max-w-230 mx-auto">
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

            <div className="my-20 p-10">

                {infos.map((info) => {

                    return (

                        <div className=" p-10 flex flex-col gap-5 p-10 rounded-4xl bg-(--lightest-white)">
                            <img src={info.img} alt="" />
                            <div className="flex-col gap-5">
                                <h1></h1>
                                <p></p>
                            </div>
                        </div>

                    )

                })}

            </div>

            <div className="my-20 p-10">
                { }
            </div>

            <h1 className="text-center text-(--dark-theme) font-bold py-20">“Curare il dolore non significa solo eliminarlo, ma ristabilire l’equilibrio del corpo e permettere alla persona di tornare a vivere in piena autonomia. La scienza moderna ci offre strumenti innovativi<br />l’obiettivo è usarli con rigore, esperienza e umanità.”</h1>



        </section>
    )
}