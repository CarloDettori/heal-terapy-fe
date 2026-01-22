
import { useEffect, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";


export default function ScramblerAskPage() {

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


    const faqs = [
        {
            id: 1,
            question: "E' possibile utilizzare la Scrambler Therapy® se ho un dispositivo di stimolazione impiantato ?",
            answer: "No, in nessun caso, ed in particolare nel caso di pacemaker cardiaci. Stesso divieto per gli SCS, anche se lo stimolatore viene spento. Queste norme sono parte delle disposizioni di sicurezza di tutte le autorità sanitarie internazionali, ed in particolare di quella europee e della FDA.",
            note: "",
        },
        {
            id: 2,

            question: "La Scrambler Therapy® è una forma diversa di TENS?",

            answer: 'No, i presupposti scientifici, il principio attivo, il target neurofisiologico, il campo di applicazione ed i risultati ottenuti sono completamenti diversi. La Scrambler Therapy è una sostanziale rivoluzione nella teoria e nella pratica della medicina del dolore cronico neuropatico ed oncologico, e non ha precedenti similari di nessun tipo. Può creare qualche confusione solo la classificazione della FDA, che diversamente dall’ Europa raggruppa tutti i tipi di dispositivi in due categorie principali, scelte a seconda di come viene effettuata la stimolazione. Queste categorie sono TENS per tutti i dispositivi non invasivi (Nota 1), e stimolatori impiantati per quelli invasivi. Subito dopo la prima separazione, la FDA in un percorso ad albero aggiunge la tipologia specifica di dispositivo, che lo identifica per le sue caratteristiche cliniche. Per questa ragione nell’autorizzazione all’immissione in commercio negli US la FDA dopo "TENS" aggiunge "Scrambler Therapy", permettendo così la corretta e specifica identificazione funzionale del dispositivo. È inoltre facile dimostrare che ad eccezione della Scrambler Therapy, tutti i dispositivi di elettroanalgesia autorizzati dalla FDA prima della Scrambler Therapy, sia TENS standard o sue varianti, che stimolatori impiantati, si basano sulla teoria del Gate Control e per questo motivo sono specificamente progettati per stimolare le fibre mielinizzate A-beta, ed evitare la stimolazione delle fibre C, in linea con i canoni tradizionali dell’elettroanalgesia. Viceversa la Scrambler Therapy® si basa su un proprio modello teorico in contrasto con la teoria del Gate Control, ed utilizza come veicolo di trasmissione delle informazioni sintetiche di “non dolore” proprio le fibre C.',

            note: 'Note 1. "CHAPTER I--FOOD AND DRUG ADMINISTRATION DEPARTMENT OF HEALTH AND HUMAN SERVICES SUBCHAPTER H--MEDICAL DEVICES Sec. 882.5890 Transcutaneous electrical nerve stimulator for pain relief. (a) Identification. A transcutaneous electrical nerve stimulator for pain relief is a device used to apply an electrical current to electrodes on a patient’s skin to treat pain (b) Classification. Class II (performance standards)".',
        },
        {
            id: 3,
            question: "Come si supera la variabilità di risultati dipendenti dall'operatore?",
            answer: "Training Course / ST-Net Project",
            note: "",
        },
        {
            id: 4,
            question: "Perché la vecchia autorizzazione FDA clearance (#K081255) includeva due TENS come predicate device?",
            answer: 'La FDA ha diverse modalità di autorizzazione all’immissione in commercio di dispositivi medici. Normalmente il distributore tende a scegliere la procedura più veloce, che in questo caso è quella definita come 510(k) "Substantial Equivalence”.Questa procedura richiede di indicare uno o più dispositivi medici della stessa categoria(in questo caso elettroanalgesia) come riferimento.La FDA quindi determina il grado di similitudine tra i riferimenti indicati nella richiesta ed il nuovo dispositivo.Se il dispositivo di cui è richiesta l’autorizzazione ha sostanzialmente le stesse caratteristiche tecnologiche e cliniche(efficacia e sicurezza) dei dispositivi indicati come riferimento(normalmente TENS standard) il processo di autorizzazione si conclude rapidamente e non richiede studi clinici specifici.Viceversa nel caso le caratteristiche tecnologiche e cliniche del dispositivo da autorizzare sono diverse da quelle indicate nei predicate device di riferimento, la FDA richiede studi clinici specifici che devono dimostrare la capacità del nuovo dispositivo di possedere caratteristiche di efficacia e sicurezza pari o superiori ai dispositivi già autorizzati.Questa è la procedura che è stata utilizzata per la richiesta di autorizzazione all’immissione in commercio della ST negli US.Per questo motivo la FDA indica nell’autorizzazione i predicate device utilizzati in riferimento.Tuttavia in questo caso la FDA non intende dire che i predicate device sono uguali per caratteristiche tecnologiche o cliniche alla ST(infatti per ottenere l’autorizzazione sono stati richiesti studi clinici specifici), ma semplicemente che la ST in base alle evidenze delle prove cliniche inoltrate ha requisiti minimi di efficacia e sicurezza pari o superiori ai dispositivi autorizzati di riferimento.',
            note: "Con il nuovo 510 (k) rilasciato nel Dicembre 2020 per il nuovo dispositivo Scrambler Therapy® Technology ST-5A questo problema è stato risolto.",
        },
        {
            id: 5,
            question: "ST-NET è conforme alle regole del General Data Protection Regulation (GDPR) ?",
            answer: "Si, ST-NET è compeltamente conforme alle regole del GDPR privacy standards.",
            note: "",
        },
        {
            id: 6,
            question: "Cosa cambia la Scrambler Therapy® nella terapia del dolore?",
            truth: "La Scrambler Therapy® è stata studiata con successo in tipi di dolore cronico che in precedenza erano considerate intrattabili, o poco sensibili anche ai più potenti mix di farmaci. La Scrambler Therapy® ha modificato anche il modello teorico di riferimento standard del dolore cronico, la teoria del Gate Control, sviluppata negli anni ’60.",
            note: "",
        },
        {
            id: 7,
            question: "E' una terapia invasiva, ci sono effetti collaterali?",
            answer: "E’ una metodica non invasiva, che si allo stato attuale delle conoscenze nelle correzioni di corretto utilizzo non presenta effetti collaterali ed indesiderati.",
            note: "",
        },
        {
            id: 8,
            question: "Quali sono le aspettative?",
            answer: "Ci sono diversi tipi di protocolli a seconda del tipo di dolore da trattare. Nel dolore cronico benigno e nel dolore oncologico derivato dagli esiti delle cure, come ad esempio nella CIPN, un ciclo di trattamento è sufficiente per lunghi periodi di benessere. Nel dolore oncologico dovuto alla presenza di metastasi, il trattamento dopo il ciclo iniziale deve proseguire con singole applicazioni da effettuare ogni volta che il dolore si ripresenta.",
            note: "",
        },
        {
            id: 9,
            question: "Come faccio a capire se questa terapia funzione anche nel mio caso?",
            answer: "E’ molto semplice. Sin dal primo trattamento, una volta che gli elettrodi sono stati posizionati correttamente, e regolati i livelli di stimolazione, immediatamente non devi più sentire dolore e nessun altro tipo di fastidio. Nei successivi trattamenti ti accorgerai che il dolore si ripresenterà sempre meno intenso, e la durata delle pause di sollievo saranno sempre più lunghe.",
            note: "",
        },
        {
            id: 10,
            question: "Quanto dura una terapia?",
            answer: "Normalmente dura 30 minuti più il tempo necessario per il posizionamento degli elettrodi e le procedure di regolazione. Un trattamento al giorno deve essere eseguito dal lunedì al venerdì per due settimane consecutive. Casi particolari possono richiedere la variazione del numero di trattamenti.",
            note: "",
        },
        {
            id: 11,
            question: "Può funzionare nel dolore acuto?",
            answer: "Si, ma in questo caso si tratta semplicemente di una terapia sintomatica. Questo significa che deve essere utilizzata ogni volta che compare il dolore, sino a quando la causa che lo ha generato non è stata risolta dal normale processo di guarigione.",
            note: "",
        },
        {
            id: 12,
            question: "Cosa si prova durante la stimolazione?",
            answer: "Durante la fase di regolazione dei livelli di stimolazione puoi sentire una sensazione simile a quella di una “singola puntura”. Quando la regolazione del livello di stimolazione è conclusa (un tempo molto breve), al posto della sensazione di singolo pungiglione sentirai altre sensazioni che variano periodicamente, che spesso sono definite piacevoli. Come la regolazione è completa, nella zona che stai trattando non sentirai più dolore.",
            note: "",
        },
        {
            id: 13,
            question: "Che tipo di dispositivo viene utilizzato?",
            answer: "La Scrambler Therapy® utilizza un dispositivo medico di elettroanalgesia autonomo, quindi non richiede obbligatoriamente l’associazione con altre terapie analgesiche. Può utilizzare contemporaneamente un massimo di 5 canali per trattare altrettante zone del corpo, ma non sempre è necessario usarli tutti.",
            note: "",
        },
        {
            id: 14,
            question: "Perché si chiama Scrambler Therapy ® ?",
            answer: "Le tecniche Scrambler sono state inizialmente utilizzate per scopi militari. Uno scrambler è genericamente inteso come un dispositivo capace di trasformare un’informazione originale in un altro tipo di informazione, non più riconoscibile. Poiché la ricerca scientifica che ha prodotto questa tecnologia si basa sul principio attivo della sostituzione dell’informazione di dolore con altre di “non dolore”, il nome di “Scrambler Therapy” per l’ideatore della ricerca è risultato appropriato.",
            note: "",
        },


    ]





    return (



        <section className="sidebar-space">




            <div className="my-20">

                <h1 className="text-center mt-30 mb-20 text-page-size font-bold">DOMANDE FREQUENTI SULLA SCRAMBLER THERAPY®</h1>


                <div className="flex flex-col gap-8 px-5">
                    {faqs.map((faq) => {
                        return (
                            <div className="flex flex-col gap-2">
                                <h1 className="font-bold">{faq.question}</h1>
                                <h2 className="mx-5" >{faq.answer}</h2>
                                <p className="mx-5 font-cursive" >{faq.note}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </section>


    )
}