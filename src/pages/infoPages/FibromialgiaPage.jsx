export default function ContentPage() {



    const percutanei = [
        {
            id: 1,
            titolo: "Trigger Point Injections (TPI)",
            img: "",
            dex: "Infiltrazioni locali nei punti miofasciali dolorosi con anestetico locale (talvolta corticosteroide).",
            info: "Possono ridurre il dolore localizzato, non quello diffuso.",
        },
        {
            id: 2,
            titolo: "Dry needling",
            img: "",
            dex: "Inserimento di aghi sottili nei trigger point senza farmaci.",
            info: "Mira alla deattivazione neuromuscolare; risultati variabili",
        },
        {
            id: 3,
            titolo: "Mesoterapia antalgica",
            img: "",
            dex: "Microiniezioni intradermiche di farmaci (es. anestetici, antinfiammatori).",
            info: "Effetto prevalentemente sintomatico e temporaneo",
        },

    ]

    const neuromodulazione = [

        {
            id: 1,
            titolo: "Agopuntura",
            img: "",
            dex: "Inserimento di aghi secondo la medicina tradizionale cinese o protocolli occidentali",
            info: "Alcuni pazienti riferiscono miglioramento del dolore e del sonno",
        },
        {
            id: 2,
            titolo: "Elettroagopuntura",
            img: "",
            dex: "Agopuntura associata a stimolazione elettrica a bassa intensità.",
            info: "",
        },
        {
            id: 3,
            titolo: "Stimolazione magnetica transcranica (rTMS)",
            img: "",
            dex: "Applicata su aree corticali coinvolte nella percezione del dolore",
            info: "Tecnica specialistica, evidenze in evoluzione",
        }

    ]

    const radiofrequenza = [
        {
            id: 1,
            titolo: "Radiofrequenza pulsata",
            img: "",
            dex: "Applicata su nervi periferici o strutture articolari selezionate.",
            info: "Usata solo in casi specifici con dolore focalizzato",
        },
        {
            id: 2,
            titolo: "Blocchi nervosi periferici",
            img: "",
            dex: "Iniezioni anestetiche su nervi coinvolti nel dolore cronico regionale",
            info: "Non indicati per la fibromialgia “pura”, ma talvolta utili in quadri misti",
        },

    ]

    const rigenerative = [
        {
            id: 1,
            titolo: "Ozonoterapia (infiltrativa o sistemica)",
            img: "",
            dex: "Utilizzata in alcuni centri come modulatore del dolore e dell’infiammazione",
            info: "Evidenze scientifiche limitate e non univoche",
        },
        {
            id: 2,
            titolo: "PRP (plasma ricco di piastrine)",
            img: "",
            dex: "Generalmente non indicato per la fibromialgia, ma talvolta proposto in modo improprio per dolori muscolari diffusi.",
            info: "",
        },

    ]

    return (
        <section>

            <h1 className="text-center mt-30 mb-20 font-bold text-page-size">FIBROMIALGIA</h1>

            <p className="mx-1 sm:mx-5 rounded-xl bg-white p-10 ">
                La fibromialgia è una sindrome cronica caratterizzata da dolore muscoloscheletrico diffuso, associato a una maggiore sensibilità al dolore stesso.
                Non si tratta di una malattia infiammatoria né degenerativa, ma di una condizione complessa che coinvolge il sistema nervoso centrale e i meccanismi di percezione del dolore.
                <br /><br />
                Colpisce prevalentemente le donne, ma può interessare persone di qualsiasi età.

            </p>

            <h1 className="font-bold text-center mt-20">TRATTAMENTI PERCUTANEI</h1>
            <div className="flex flex-wrap justify-center my-20 mt-0 p-10 gap-10">

                {percutanei.map((trat) => {

                    return (

                        <div key={trat.id} className="border-dark-theme p-10 flex flex-col gap-5 p-10 rounded-4xl bg-white max-w-80">
                            <h1 className="font-bold text-center">{trat.titolo}</h1>
                            <img src={trat.img} alt="" />

                            <h2>{trat.dex}</h2>
                            <p>{trat.info}</p>


                        </div>

                    )

                })}

            </div>

            <h1 className="font-bold text-center mt-20">TRATTAMENTI CON NEUROSTIMOLAZIONE</h1>
            <div className="flex flex-wrap justify-center my-20 mt-0 p-10 gap-10">

                {neuromodulazione.map((trat) => {

                    return (

                        <div key={trat.id} className="border-dark-theme p-10 flex flex-col gap-5 p-10 rounded-4xl bg-white max-w-80">
                            <h1 className="font-bold text-center">{trat.titolo}</h1>
                            <img src={trat.img} alt="" />

                            <h2>{trat.dex}</h2>
                            <p>{trat.info}</p>


                        </div>

                    )

                })}

            </div>

            <h1 className="font-bold text-center mt-20">TRATTAMENTI CON NEUROSTIMOLAZIONE</h1>
            <div className="flex flex-wrap justify-center my-20 mt-0 p-10 gap-10">

                {radiofrequenza.map((trat) => {

                    return (

                        <div key={trat.id} className="border-dark-theme p-10 flex flex-col gap-5 p-10 rounded-4xl bg-white max-w-80">
                            <h1 className="font-bold text-center">{trat.titolo}</h1>
                            <img src={trat.img} alt="" />

                            <h2>{trat.dex}</h2>
                            <p>{trat.info}</p>


                        </div>

                    )

                })}

            </div>

            <h1 className="font-bold text-center mt-20">TRATTAMENTI CON NEUROSTIMOLAZIONE</h1>
            <div className="flex flex-wrap justify-center my-20 mt-0 p-10 gap-10">

                {rigenerative.map((trat) => {

                    return (

                        <div key={trat.id} className="border-dark-theme p-10 flex flex-col gap-5 p-10 rounded-4xl bg-white max-w-80">
                            <h1 className="font-bold text-center">{trat.titolo}</h1>
                            <img src={trat.img} alt="" />

                            <h2>{trat.dex}</h2>
                            <p>{trat.info}</p>

                        </div>

                    )

                })}

            </div>


        </section>
    )
}