
import ScramblerGameComponent from "../../components/common/ScramblerGameComponent.jsx"
import { useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import TextInfo from "../../components/ui/TextInfo.jsx";
import WhiteCard from "../../components/ui/WhiteCard.jsx";
import TextContainer from "../../components/ui/TextContainer.jsx";
import WaveBox from "../../components/ui/WaveBox.jsx";
export default function ContentPage() {


    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1440);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 900);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);



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

    const scramblerMyth = [
        {
            id: 1,
            myth: "La Scrambler Therapy® è una terapia sperimentale",
            truth: "Ovviamente no. La Scrambler Therapy® ha tutte le autorizzazioni sanitarie necessarie per essere utilizzata nella normale pratica clinica in qualsiasi Nazione."
        },
        {
            id: 2,
            myth: "La Scrambler Therapy® è una TENS più potente",
            truth: <span><strong>La base del funzionamento della Scrambler Therapy® è diametralmente opposta a quella della TENS o di qualsiasi altra forma di elettroanalgesia storicamente nota e conosciuta.</strong> Questa è una delle ragioni per cui i campi di utilizzo sono radicalmente diversi, come i risultati.</span>
        },
        {
            id: 3,
            myth: "La Scrambler Therapy® deve essere associata ai farmaci",
            truth: "La Scrambler Therapy® è nata per coprire il vuoto lasciato dalle terapie farmacologiche, ed è stata a lungo sperimentata nei pazienti non responsivi alle più potenti associazioni di molecole analgesiche. Evidentemente proprio per questo motivo non ha nessuna necessità implicita di altre associazioni, che in alcuni casi sono anche sfavorevoli."
        },
        {
            id: 4,
            myth: "Pazienti che assumono anticonvulsivanti non possono utilizzare la Scrambler Therapy®",
            truth: "La maggior parte dei pazienti con dolore neuropatico utilizzano farmaci anticonvulsivanti, e possono essere comunque trattati con la Scrambler Therapy® avendo cura di seguire gli appositi protocolli."
        },
        {
            id: 5,
            myth: "La Scrambler Therapy® non cura il dolore centrale",
            truth: <span>Anche questa informazione non è esatta. La Scrambler Therapy® tratta agevolmente il dolore centrale sfruttando le proiezioni dermatometriche. E’ evidente che il tentativo di trattare il dolore centrale posizionando gli elettrodi nella testa del paziente oltre ad essere del tutto <strong> errato ed inutile</strong>, mostra la totale mancanza di comprensione del meccanismo di funzionamento di questa terapia. Ci sono inoltre limiti precauzionali che riguardano dolori di origine centrale che non si manifestano in periferia.</span>
        },
        {
            id: 6,
            myth: "La Scrambler Therapy® “legge” le informazioni del dolore e le reinserisce dopo averle modificate",
            truth: "Assolutamente no. La Scrambler Therapy® ha dentro il suo database tutte le informazioni necessarie per sapere come è costruita l’informazione dolore, e tutte quelle necessarie per costruire le informazioni di non dolore necessarie per sopprimerlo."
        },
        {
            id: 7,
            myth: "La Scrambler Therapy® rigenera le fibre nervose",
            truth: "Anche questo è un mito infondato. Il recupero della sensibilità o la regressione di alcuni sintomi neurologici correlati al dolore neuropatico, dipendono solamente dalla normalizzazione dell’attività delle fibre C e dalla scomparsa del dolore, che permette il riemergere di altre sensazioni provenienti dalle fibre A-Beta, prima nascoste dal dolore cronico sempre presente."
        },

    ]

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

            note: "",
        },
        {
            id: 6,
            question: "Cosa cambia la Scrambler Therapy® nella terapia del dolore?",
            answer: "La Scrambler Therapy® è stata studiata con successo in tipi di dolore cronico che in precedenza erano considerate intrattabili, o poco sensibili anche ai più potenti mix di farmaci. La Scrambler Therapy® ha modificato anche il modello teorico di riferimento standard del dolore cronico, la teoria del Gate Control, sviluppata negli anni ’60.",
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



        <div className="box">

            <TextInfo customClass="font-bold text-page-size">SCRAMBLER THERAPY®</TextInfo>
            <img src="/scrambler-machine.png" alt="" className="flex mx-auto" />
            <WhiteCard customClass=""><span> La Scrambler Therapy rappresenta un’interessante tecnologia di stimolazione nervosa non-invasiva destinata al trattamento del dolore neuropatico cronico e oncologico, molto valorizzata negli Stati Uniti per la sua proposta “senza farmaci”. È importante perché offre un’alternativa potenziale in un contesto – quello del dolore cronico – che ha molte lacune e grandi costi. È innovativa nel suo approccio (messaggi “no-pain” in luogo dei segnali di dolore), ma va usata, essendo una apparecchiatura biomedicale, <strong>solo esclusivamente da personale medico abilitato per tale pratica.</strong> </span></WhiteCard>


            <TextInfo size={1} customClass="font-bold"></TextInfo>

            <TextContainer customClass="gap-10">

                <h1 className="text-center font-bold">Cosa si intende per Scrambler Therapy</h1>
                <h2>Elettrodi applicati sulla cute inviano segnali a bassa intensità che “rimodulano” e “sovrascrivono” i segnali di dolore trasmessi dalle fibre C sensitive verso l'encefalo, facendo sì che il messaggio “dolore” venga sostituito da un messaggio “nessun dolore” o “non dolore”.

                    <br /><br />

                    Non è una stimolazione tradizionale tipo TENS (Transcutaneous Electrical Nerve Stimulation) ma, secondo l'ingegnere Giuseppe Marineo  (inventore della scrambler therapy), questa terapia biomedica rappresenta un sistema che interviene sul “linguaggio” dell’informazione afferente del dolore (“no-pain message”).</h2>
            </TextContainer>
            <WhiteCard>

                <img src="/Dermatomeri.jpg" alt="" />
            </WhiteCard>
            {isDesktop && <ScramblerGameComponent />}



            <TextContainer>
                <h1 className="font-bold">PATOLOGIE INDICATE</h1>

                <div className=" mx-5 mb-20 flex flex-col gap-3">

                    {scramblerTarget.map((target, index) => {
                        return (



                            <h2 key={index + 1}>{target}</h2>



                        )
                    })}

                </div>



            </TextContainer>

            <WaveBox>
                <TextInfo customClass="text-page-size font-bold">MITI INFONDATI SULLA SCRAMBLER THERAPY®</TextInfo>
                <TextContainer>



                    <h1 className="text-center mb-20 font-bold">Come accade in tutte le innovazioni scientifiche, “esperti” autoreferenti, di solito non appartenenti al mondo della ricerca, generano una serie quasi infinita di parziali od errate informazioni che si tramandano in maniera incontrollata da persona a persona, e finiscono per creare dei miti infondati. In questa pagina ne sono raccolti alcuni dei più frequentemente incontrati.</h1>

                    <div className="flex flex-col gap-8 px-5">
                        {scramblerMyth.map((quote) => {
                            return (
                                <div className="flex flex-col gap-2">
                                    <h1 className="font-bold">{quote.myth}</h1>
                                    <h2 className="mx-5" >{quote.truth}</h2>
                                </div>
                            )
                        })}
                    </div>
                </TextContainer>
            </WaveBox>
            <TextInfo customClass="text-page-size font-bold">DOMANDE FREQUENTI SULLA SCRAMBLER THERAPY®</TextInfo>


            <TextContainer>
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
            </TextContainer>
        </div >

    )
}