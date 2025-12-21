export default function ContentPage() {

    const vantaggi = [

        "Assenza o minima incisione",
        "Riduzione del dolore post-trattamento",
        "Tempi di recupero rapidi",
        "Trattamenti ambulatoriali",
        "Approccio personalizzato",

    ]

    const tecniche = [

        {
            id: 1,
            img: null,
            descrizione: {
                title: "TUNNEL CARPALE",
                dex: "La sindrome del tunnel carpale è causata dalla compressione del nervo mediano a livello del polso, con sintomi come dolore, formicolio e riduzione della forza della mano"
            },
            approccio: "Il trattamento prevede infiltrazioni ecoguidate che consentono di agire direttamente sull’area di compressione nervosa.",

            terapie: [
                "Infiltrazioni antinfiammatorie ecoguidate",
                "Trattamenti biologici per ridurre l’edema e l’infiammazione",
                "Rilascio perineurale sotto guida ecografica"
            ],
            benefici: [
                "Riduzione della compressione del nervo",
                "Miglioramento della sensibilità e della forza",
                "Possibile alternativa o ritardo dell’intervento chirurgico"
            ],
        },

        {
            id: 2,
            img: null,
            descrizione: {
                title: "FASCITE PLANTERE",
                dex: "È un’infiammazione della fascia plantare che provoca dolore al tallone, soprattutto nei primi passi del mattino o dopo periodi di riposo."
            },
            approccio: "L’obiettivo è stimolare la rigenerazione dei tessuti e ridurre il dolore senza ricorrere alla chirurgia.",
            terapie: [
                "Onde d’urto focali",
                "Infiltrazioni con Plasma Ricco di Piastrine (PRP)",
                "Trattamenti ecoguidati mirati alla zona lesionata"
            ],
            benefici: [
                "Stimolazione dei processi di guarigione naturale",
                "Riduzione del dolore cronico",
                "Miglioramento della funzionalità del piede",
                "Recupero progressivo e duraturo"
            ],
        },

        {
            id: 3,
            img: null,
            descrizione: {
                title: "PATOLOGIE NEUROMOTORIE",
                dex: "Comprendono condizioni in cui il controllo del movimento è alterato da disfunzioni neurologiche o muscolari, spesso associate a dolore cronico."
            },
            approccio: "Il trattamento è basato su un approccio integrato, che mira a migliorare la funzione neuromuscolare e a ridurre la sintomatologia dolorosa.",
            terapie: [
                "Infiltrazioni ecoguidate mirate",
                "Terapie biologiche rigenerative",
                "Modulazione del dolore a livello neuromuscolare"
            ],
            benefici: [
                "Miglioramento del controllo motorio",
                "Riduzione della rigidità e del dolore",
                "Approccio personalizzato in base alla patologia e al paziente"
            ],
        }

    ]





    return (
        <section>
            <div className="mx-1 sm:mx-5 rounded-xl bg-white mt-30 p-12 text-center ">
                <h1 className="text-center mb-10 font-bold text-page-size ">APPROCCIO MINI-NVASIVO <br /> Cosa significa?</h1>


                <h2>I trattamenti mini-invasivi permettono di ridurre il dolore e migliorare la funzione intervenendo in modo mirato, senza chirurgia tradizionale. <br />
                    L’utilizzo di tecniche ecoguidate consente di raggiungere con precisione la sede del problema, limitando i rischi e favorendo un recupero più rapido.</h2>

            </div>

            <div className="flex flex-col rounded-xl mx-auto p-15 my-30 max-w-150">

                <h1 className="text-center mb-5 font-bold text-page-size">VANTAGGI PRINCIPALI</h1>

                <div className=" mt-8 w-full ">
                    {vantaggi.map((van, index) => {
                        return (

                            <div key={index + 1} className="flex flex-col p-5 gap-3  text-center mx-auto justify-center">
                                <h1 className="font-bold">{van}</h1>
                            </div>
                        )
                    })}
                </div>

            </div>

            <h1 className="text-center mt-30 mb-10 font-bold text-page-size ">PATOLOGIE TARGET</h1>

            <div className="flex flex-wrap my-20 gap-10">
                {tecniche.map((tech) => {

                    return (

                        <div key={tech.id} className="mx-auto p-10 flex flex-col gap-5 p-10 rounded-4xl bg-white max-w-100">
                            <div className="flex flex-col gap-15 p-5">

                                <div className="flex flex-col gap-3 min-h-70">
                                    <h1 className="font-bold text-center min-h-20">{tech.descrizione.title}</h1>
                                    <img className="max-w-50 mx-auto font-bold my-5" src={tech.img} alt="tech-img" />
                                    <h2>{tech.descrizione.dex}</h2>
                                </div>

                                <div className="min-h-40">
                                    <h1 className="font-bold mb-5">APPROCCIO</h1>
                                    <h2>{tech.approccio}</h2>
                                </div>

                                <div className="min-h-60">
                                    <h1 className="font-bold mb-5">TERAPIE</h1>
                                    <ul className="flex flex-col gap-5">
                                        {tech.terapie.map((ter, index) => {

                                            return (



                                                <li key={index + 1}>
                                                    {ter}
                                                </li>
                                            )





                                        })}
                                    </ul>
                                </div>

                                <div>
                                    <h1 className="font-bold mb-5">BENEFICI</h1>
                                    <ul className="flex flex-col gap-5">
                                        {tech.benefici.map((ben, index) => {

                                            return (



                                                <li key={index + 1}>
                                                    {ben}
                                                </li>
                                            )





                                        })}
                                    </ul>
                                </div>

                            </div>
                        </div>

                    )

                })}
            </div>

            <h1 className="text-center mt-30 mb-10 font-bold">VALUTAZIONE PERSONALIZZATA</h1>

            <p className="flex mx-auto rounded-xl bg-white p-10 text-center max-w-150 font-bold">
                Ogni trattamento mini-invasivo è preceduto da una valutazione clinica approfondita, spesso supportata da ecografia, per definire il percorso terapeutico più adatto.

            </p>

            <h1 className="text-center my-30 font-bold">L’obiettivo è offrire una soluzione efficace, <br /> mirata e meno invasiva possibile, <br />rispettando i tempi biologici di recupero del paziente.</h1>

        </section>
    )
}