
import { useEffect, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";


export default function ScramblerStoryPage() {

    const { setShowbar, setSidebarLinks } = useContext(GlobalContext);

    useEffect(() => {
        setShowbar(true)
        setSidebarLinks(
            [
                {
                    id: 1,
                    route: "/info/4",
                    title: "SCRAMBLER THERAPY®",
                },
                {
                    id: 2,
                    route: "/info/4/2",
                    title: "Storia Scrambler Therapy®",
                },
                {
                    id: 3,
                    route: "/info/4/3",
                    title: "Esponenti Scrambler Therapy®",
                },
                {
                    id: 4,
                    route: "/info/4/4",
                    title: "Miti infondati sulla Scrambler Therapy®",
                },
                {
                    id: 5,
                    route: "/info/4/5",
                    title: "Domande frequenti",
                },
                {
                    id: 6,
                    route: "/info/4/6",
                    title: "Video Conferenza Giuseppe Marineo",
                },
            ]);
    }, []);


    const timeline = [

        "Nel 2003 la ricerca ottenne l’approvazione europea per l’uso nella cirrosi epatica, con risultati di fase II pubblicati su riviste scientifiche indicizzate. Tuttavia, l’assenza di sponsor industriali impedì la prosecuzione verso studi clinici di fase III.",

        "Successivamente questa linea di ricerca fu superata, nella diffusione scientifica, dagli studi sul dolore cronico che portarono alla Scrambler Therapy. Quest’ultima nacque indirettamente dagli studi sulla rigenerazione, inizialmente considerata solo un supporto secondario.",

        "Già alla fine degli anni ’80 avevo avviato due principali linee sperimentali per verificare l’applicabilità clinica delle mie ipotesi teoriche. La prima riguardava la cirrosi epatica, favorita dall’elevata capacità rigenerativa del fegato.",

        "Nel 2003 tale ricerca fu approvata a livello europeo e i risultati di fase II pubblicati, ma la mancanza di risorse economiche ne bloccò lo sviluppo clinico avanzato. Nel frattempo, gli studi sul dolore cronico e la nascita della Scrambler Therapy presero il sopravvento, pur derivando dagli stessi presupposti rigenerativi.",

        "La seconda linea di ricerca si concentrava sulla rigenerazione delle fibre nervose, allora considerata quasi irrealizzabile, nonostante le recenti scoperte sull’NGF. Questo ambito mi portò a confrontarmi con il dolore neuropatico, che rendeva estremamente difficile qualsiasi studio rigenerativo, e scoraggiava anche gli specialisti del dolore.",

        "Per molto tempo cercai soluzioni attraverso numerose discipline, incluse agopuntura e ipnosi, senza risultati significativi. Stavo quindi valutando di abbandonare lo studio delle lesioni nervose per concentrarmi esclusivamente sulla cirrosi epatica, dove avevo già dati preliminari promettenti.",

        "Proprio in quel periodo un’associazione di pazienti mi invitò a un incontro. Il confronto diretto con la loro sofferenza mi convinse che l’assenza di una cura non equivaleva necessariamente alla sua impossibilità.",

        "Grazie alla mia formazione in neurofisiologia, integrai rapidamente le conoscenze sulla fisiopatologia del dolore cronico. Studiando la teoria del Gate Control, mi resi conto che essa spiegava efficacemente solo il dolore acuto, risultando invece illogica nel dolore cronico.",

        "Consapevole del carattere eretico di questa conclusione, continuai ad approfondire la letteratura scientifica. Più studiavo, più si rafforzava in me la convinzione che la teoria dominante non fosse applicabile al dolore cronico, in particolare a quello neuropatico.",

        "È in questo momento che nasce la Scrambler Therapy: individuato quello che ritenevo un errore concettuale, emerse anche una possibile soluzione, oggi divenuta una realtà clinica consolidata.",

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
        <div className="flex">


            <section className="sidebar-space">




                <div className="my-20">

                    <h1 className="text-center mt-30 mb-20 text-page-size font-bold">STORIA DELLA SCRAMBLER THERAPY®</h1>

                    <h1 className="text-center mt-30 mb-20  text-page-size font-bold">TUTTO NASCE DALLA NECESSITA' DI UNA TERAPIA PER IL DOLORE CRONICO NEUROPATICO ED ONCOLOGICO</h1>

                    <div className="flex w-full rounded-4xl bg-white p-10 mb-10">
                        <img className="rounded-2xl" src="/scrambler-story-image.jpg" alt="" />

                        <h2 className="ms-10">
                            Verso la metà degli anni ’80 ho completato lo sviluppo di un modello teorico che interpretava su base biofisica le dinamiche dei processi patologici cronico-degenerativi, ed in maniera più generale dell’invecchiamento organico. Sulla base di questo modello teorico ho successivamente sviluppato una tecnologia (Sistemi a Variazione di Entropia Delta-S) che coerentemente con questi principi era potenzialmente in grado di riattivare processi rigenerativi di tessuti ed organi senza l’utilizzo di cellule staminali.

                        </h2>
                    </div>
                    <div className="mx-10">
                        {timeline.map((line) => {
                            return (
                                <h2 className="mb-10">
                                    {line}
                                </h2>
                            )
                        })}
                    </div>
                </div>

            </section>

        </div>
    )
}