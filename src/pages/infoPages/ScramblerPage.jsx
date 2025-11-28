
import React from "react";
import ReactDOM from "react-dom/client";
import ScramblerGameComponent from "../../components/common/ScramblerGameComponent"

export default function ContentPage() {



    const scramblerTarget = [

        "dolore neuropatico cronico",

        "dolore oncologico",

        "dolore post-chirurgico resistente ad altre terapie",

    ]



    const scramblerUsa = [

        "In USA, la distribuzione/commercializzazione della versione “Calmare” è stata curata da organizzazioni come Delta International Services & Logistics (DIS&L) che ha l’accordo internazionale per la tecnologia. ",

        "Clinici e centri che la presentano e applicano: ad esempio il centro citato a Los Angeles: Calmare® Scrambler Therapy Los Angeles con il Dr. Damon Orlando, che rende nota l’applicazione negli USA",

        "Nelle Forze Armate USA e sistemi sanitari militari: citato l’uso alla Joint Base Andrews, come detto sopra",

    ]

    const scramblerTimeline = [
        {
            id: 1,
            year: "2001–2003",
            event: "deposito di brevetti e prime sperimentazioni cliniche/pilot (es. studi su dolore viscerale da tumore)"
        },
        {
            id: 2,
            year: "2000–2005",
            event: "articoli descrittivi/introduzione della tecnica su riviste tecniche e cliniche."
        },
        {
            id: 3,
            year: "2009",
            event: "clearance FDA 510(k) per il dispositivo MC-5A (documento FDA 2009)"
        },
        {
            id: 4,
            year: "2012",
            event: "pilot RCT guidato da Marineo che mostra riduzione del dolore rispetto al trattamento farmacologico standard in un piccolo studio randomizzato"
        },
        {
            id: 5,
            year: "2013",
            event: "emissione di brevetto USA (es. US 8,380,317 collegato alla tecnologia)."
        },
        {
            id: 6,
            year: "2019",
            event: "review/descrizione estesa di Marineo che espone il modello teorico su Integrative Cancer Therapies"
        },
        {
            id: 7,
            year: "2020 e oltre:",
            event: "versioni aggiornate del dispositivo e articoli successivi; nel settore permangono studi, revisioni e discussioni sull’efficacia e sui protocolli"
        },
    ]

    const ScramblerWorth = [

        "Alternativa non farmacologica: in un’epoca in cui il dolore cronico – e la dipendenza da oppioidi – è un grande problema negli Stati Uniti, una tecnologia che promette sollievo senza farmaci assunzione è molto rilevante. Ad esempio, la nota della Forza Aerea evidenzia che “NST (Nerve Scrambler Therapy) ha dimostrato di essere una valida alternativa agli oppioidi per ridurre o eliminare questo tipo di dolore”",

        "Trattamento del dolore resistente: la tecnologia si rivolge a casi in cui altre terapie hanno fallito (dolore neuropatico refrattario, dolore oncologico, neuropatia da chemioterapia). Questo la rende un’opzione “ultima risorsa” per molti pazienti. ",

        "Non invasiva e con tollerabilità elevata: essendo elettro-stimolazione cutanea, non chirurgica, senza gli effetti collaterali degli oppioidi (secondo i produttori e alcuni studi) e quindi attraente per pazienti e clinici",

        "Innovazione nel concetto: l’idea di “messaggio no-dolore” che sostituisce il segnale di dolore è una modalità meno tradizionale rispetto ai trattamenti tradizionali del dolore (farmaci, blocchi nervosi, stimolatori spinali). Quindi in questo senso può considerarsi innovativa",

        "Potenziale impatto organizativo: se efficace, può ridurre costi di gestione del dolore cronico, ospedalizzazioni, uso di farmaci, dipendenze e migliorare qualità di vita.",


    ]

    const scramblerLimits = [

        "L’evidenza scientifica non è ancora consolidata: una politica assicurativa (Optum) dichiara che “Calmare (‘scrambler’) pain therapy treatment … è considerato sperimentale e non medico-necessario per il trattamento del dolore neuropatico non oncologico” per mancanza di studi a lungo termine e dati funzionali/disabilità correlati. ",

        "Metanalisi recenti suggeriscono che ci sia “evidenza iniziale” ma non forte per certe indicazioni. Ad esempio su Wikipedia si riporta che la ricerca è “limitata”",

        "Non tutti i pazienti rispondono: uno studio multicentrico su 147 pazienti ha trovato un tasso di successo (~>50% di sollievo >1 mese) solo nel 38,1% dei casi",

        "Costo e copertura assicurativa: in alcuni casi la terapia non è coperta da assicurazione, richiede pagamento diretto. Esempio: uno studio di centro a New York afferma che la terapia “non è coperta dall’assicurazione” per Scrambler/Calmare ",

        "Innovativa sì, ma rimane una tecnologia con prove limitate: l’innovazione sta nel concetto informazionale e nella modalità di stimolazione, ma finché non ci sono grandi RCT (randomised controlled trials) indipendenti con follow up lungo, rimane “promettente” più che “definitivamente comprovata” ",

        "Non adatta a tutti i tipi di dolore: ad esempio, un sito specifica che non tutti i tipi di dolore (non neuropatici) sono candidabili.",

    ]

    return (
        <section>

            <h1 className="text-center mt-30 mb-10  text-page-size"><strong>CALMARE</strong></h1>
            <img src="/scrambler-machine.png" alt="" className="flex mx-auto" />
            <h1 className="mt-10">La “Calmare® Scrambler Therapy” rappresenta un’interessante tecnologia di stimolazione nervosa non-invasiva destinata al trattamento del dolore neuropatico cronico e oncologico, molto valorizzata negli Stati Uniti per la sua proposta “senza farmaci” e “da ultimo tentativo”. È importante perché offre un’alternativa potenziale in un contesto – quello del dolore cronico – che ha molte lacune e grandi costi. È innovativa nel suo approccio (messaggi “no-pain” in luogo dei segnali di dolore), ma va usata con cautela: l’evidenza è ancora in fase di consolidamento, le risposte variano e la copertura assicurativa può essere problematica.</h1>


            <h2 className="text-center mt-30 mb-20  "><strong>Cosa si intende per “Calmare” / Scrambler Therapy</strong></h2>

            <p className="mx-1 sm:mx-5 rounded-xl bg-white p-10 ">
                Elettrodi applicati sulla pelle inviano segnali a bassa intensità che “rimodulano” o “sovrascrivono” i segnali di dolore trasmessi dai nervi verso il cervello, facendo sì che il messaggio “dolore” venga sostituito da un messaggio “nessun dolore” o “non dolore”.

                <br /><br />

                Non è una stimolazione tradizionale tipo TENS (Transcutaneous Electrical Nerve Stimulation) ma, secondo i produttori e alcuni studi, un sistema che interviene sul “linguaggio” dell’informazione afferente del dolore (“no-pain message”).

            </p>

            <ScramblerGameComponent />

            <h1 className="text-center my-20 font-bold">CHI NE PUO USUFRUIRE?</h1>

            <div className="my-10 max-w-300 mx-auto flex flex-wrap gap-10 justify-center">
                {scramblerTarget.map((target, index) => {
                    return (

                        <div key={index + 1} className="flex flex-col p-10 gap-3 max-w-80 text-center justify-center rounded-xl bg-white">
                            <h2 className="font-bold">{target}</h2>
                            <p>{target}</p>
                        </div>

                    )
                })}
            </div>

            <h1 className="text-center font-bold mt-30">PRINCIPALE ESPONENTE DELLA SCRAMBLER THERAPY</h1>

            <div className="mt-20 flex flex-col justify-center gap-5 rounded-xl bg-white p-20 gap-5" >

                <div className="lg:flex lg:gap-5">


                    <img className="rounded-4xl my-auto lg:my-auto max-w-50 mx-auto" src="/doctor.png" alt="" />


                    <div className="text-(--dark-theme) gap-5 my-auto">

                        <h1 className="mb-5 mt-3 font-bold text-center lg:text-left">Dtt. Giuseppe Marineo</h1>

                        <p>
                            Ricercatore/ingegnere/biofisico italiano legato all’Università di Roma Tor Vergata e al centro Delta Research & Development; Marineo è riconosciuto come l’inventore e il principale autore della teoria e della tecnologia Scrambler
                        </p>

                    </div>

                </div>

                <div className="my-10 w-full ">
                    {scramblerTimeline.map((event) => {
                        return (

                            <div key={event.id} className="flex flex-col p-10 gap-3 max-w-100 text-center mx-auto justify-center">
                                <h1 className="font-bold">{event.year}</h1>
                                <h2>{event.event}</h2>
                            </div>
                        )
                    })}
                </div>

            </div>


            <div className="my-10 p-10">

                <h1 className="mb-3 font-bold">SCRUMBLER THERAPY NEGLI STATI UNITI</h1>

                {
                    scramblerUsa.map((info, index) => {
                        return (
                            <h2 key={index + 1} className="my-5">
                                {info}
                            </h2>
                        )
                    })
                }

            </div>



        </section>
    )
}