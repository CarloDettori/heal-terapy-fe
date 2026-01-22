
import { useEffect, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";


export default function OzonoAskPage() {

    const { setShowbar, setSidebarLinks } = useContext(GlobalContext);

    useEffect(() => {
        setShowbar(true)
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
                {
                    id: 5,
                    route: "/info/1/4",
                    title: "Domande frequenti",


                },
            ]);
    }, []);


    const faqs = [
        {
            id: 1,
            question: "Che cosa fa l'ozonoterapia?",
            answer: "L'ossigeno-ozono terapia è una terapia medica che utilizza una miscela di ossigeno e ozono per il trattamento di varie condizioni patologiche con lo scopo di aumentare la capacità antiossidante e diminuire l'infiammazione.",

        },
        {
            id: 2,

            question: "A cosa serve l'ozonoterapia?",

            answer: 'Viene utilizzata per trattare numerose condizioni, tra cui dolori articolari e della colonna vertebrale, malattie infiammatorie anche autoimmunitarie e per migliorare la cessione di ossigeno ai tessuti periferici.',


        },
        {
            id: 3,
            question: "In che modo l'ozonoterapia può aiutare la mia salute?",
            answer: "L'ossigeno-ozono terapia può aiutare a ridurre il dolore, migliorare l’ossigenazione periferica, stimolare il sistema immunitario e promuovere la guarigione dei tessuti danneggiati.",

        },
        {
            id: 4,
            question: "E'una terapia sicura?",
            answer: "Sì, l'ossigeno- ozono terapia è considerata sicura quando somministrata da professionisti qualificati.Gli effetti collaterali sono rari e di solito lievi.",

        },
        {
            id: 5,
            question: "In quali casi viene utilizzata l'ozonoterapia?",
            answer: "È usata per trattare condizioni come ernie del disco, degenerazioni articolari (ginocchio, spalla, ecc), infiammazioni sistemiche, ferite difficili da guarire e malattie degenerative",

        },
        {
            id: 6,
            question: "chi può sottoporsi all'ozonoterapia?",
            truth: "La maggior parte delle persone può sottoporsi a questo trattamento, ma è importante consultare un medico specialista per determinare se è adatta al proprio caso specifico.",

        },
        {
            id: 7,
            question: "come viene somministrata l'ozonoterapia?",
            answer: "Può essere somministrata tramite iniezioni locali, insufflazioni o altre modalità, a seconda della condizione da trattare.",

        },
        {
            id: 8,
            question: "Quali benefici posso aspettarmi dall'ozonotarapia?",
            answer: "I benefici includono riduzione del dolore, miglioramento della mobilità e una migliore qualità della vita.",

        },
        {
            id: 9,
            question: "Quanto dura una seduta di ozonoterapia?",
            answer: "Una seduta tipica dura dai 10 ai 20-25 minuti, a seconda della condizione trattata e della modalità di somministrazione.",

        },
        {
            id: 10,
            question: "L'ozonoterapia è dolorosa?",
            answer: "Di solito, la terapia non è particolarmente dolorosa. Tuttavia, se viene eseguita tramite iniezioni, si può avvertire un fastidio locale da compressione e bruciore.",

        },
        {
            id: 11,
            question: "Quanto costa l'ozonoterapia?",
            answer: "I costi possono variare a seconda del tipo di trattamento da eseguire e del centro sanitario interpellato.",

        },
        {
            id: 12,
            question: "Ci sono effetti collaterali o rischi asociati all'ozonoterapia?",
            answer: "Gli effetti collaterali sono rari e generalmente lievi, come un leggero gonfiore o rossore nell'area trattata. Tuttavia è importante discuterne con il medico prima di iniziare.",

        },
        {
            id: 13,
            question: "Come posso sapere se l'ozonoterapia è adatta al mio caso?",
            answer: "È necessario consultare un medico specializzato che valuterà la tua patologia, gli esami del caso e determinerà se questo trattamento è indicato per te.",

        },
        {
            id: 14,
            question: "L'ozonoterapia puo sostituire altre cure mediche?",
            answer: "In molti casi l'ossigeno-ozono terapia può essere utilizzata come alternativa a farmaci o interventi chirurgici e in alcune situazioni è un trattamento complementare alle altre cure.",

        },
        {
            id: 15,
            question: "perchè dovrei scegliere l'ozonoterapia rispetto ad altri trattamenti?",
            answer: "L'ossigeno-ozono terapia è una soluzione non invasiva, che sfrutta il potere curativo della breve ossidazione locale indotta dall’ozono per promuovere la guarigione e ridurre l'infiammazione.",

        },


    ]





    return (



        <section className="sidebar-space">




            <div className="my-20">

                <h1 className="text-center mt-30 mb-20 text-page-size font-bold">DOMANDE FREQUENTI SULL'OZONOTERAPIA'</h1>


                <div className="flex flex-col gap-8 px-5">
                    {faqs.map((faq) => {
                        return (
                            <div className="flex flex-col gap-2">
                                <h1 className="font-bold">{faq.question}</h1>
                                <h2 className="mx-5" >{faq.answer}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>

        </section>


    )
}