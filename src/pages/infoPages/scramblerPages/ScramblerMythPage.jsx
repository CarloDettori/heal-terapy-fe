
import { useEffect, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";


export default function ScramblerMythsPage() {

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








    const scramblerMyth = [
        {
            id: 1,
            myth: "La Scrambler Therapy® è una terapia sperimentale",
            truth: "Ovviamente no. La Scrambler Therapy® ha tutte le autorizzazioni sanitarie necessarie per essere utilizzata nella normale pratica clinica in qualsiasi Nazione."
        },
        {
            id: 2,
            myth: "La Scrambler Therapy® è una TENS più potente",
            truth: "La base del funzionamento della Scrambler Therapy® è diametralmente opposta a quella della TENS o di qualsiasi altra forma di elettroanalgesia storicamente nota e conosciuta. Questa è una delle ragioni per cui i campi di utilizzo sono radicalmente diversi, come i risultati."
        },
        {
            id: 3,
            myth: "La Scrambler Therapy® deve essere associata ai farmaci",
            truth: "La Scrambler Therapy® è nata per coprire il vuoto lasciato dalle terapie farmacologiche, ed è stata a lungo sperimentata nei pazienti non responsivi alle più potenti associazioni di molecole analgesiche. Evidentemente proprio per questo motivo non ha nessuna necessità implicita di altre associazioni, che in alcuni casi sono anche sfavorevoli."
        },
        {
            id: 4,
            myth: "Pazienti che assumono anticonvulsivanti non possono utilizzare la Scrambler Therapy®",
            truth: "La maggior parte dei pazienti con dolore neuropatico utilizzano farmaci anticonvulsivanti, e possono essere comunque trattati con la Scrambler Therapy® avendo cura di seguire gli appositi protocolli meglio illustrati in altre pagine di questo sito."
        },
        {
            id: 5,
            myth: "La Scrambler Therapy® non cura il dolore centrale",
            truth: "Anche questa informazione non è esatta. La Scrambler Therapy® tratta agevolmente il dolore centrale sfruttando le proiezioni dermatometriche. E’ evidente che il tentativo di trattare il dolore centrale posizionando gli elettrodi nella testa del paziente oltre ad essere del tutto errato ed inutile, mostra la totale mancanza di comprensione del meccanismo di funzionamento di questa terapia. Ci sono inoltre limiti precauzionali che riguardano dolori di origine centrale che non si manifestano in periferia."
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





    return (
        <div className="flex">


            <section className="sidebar-space">




                <div className="my-20">

                    <h1 className="text-center mt-30 mb-20 text-page-size font-bold">MITI INFONDATI SULLA SCRAMBLER THERAPY®</h1>

                    <h2 className="text-center mb-20 font-bold">Come accade in tutte le innovazioni scientifiche, “esperti” autoreferenti, di solito non appartenenti al mondo della ricerca, generano una serie quasi infinita di parziali od errate informazioni che si tramandano in maniera incontrollata da persona a persona, e finiscono per creare dei miti infondati. In questa pagina ne sono raccolti alcuni dei più frequentemente incontrati.</h2>

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
                </div>

            </section>

        </div>
    )
}