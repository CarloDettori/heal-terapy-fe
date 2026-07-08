import { useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import TextInfo from "../../components/ui/TextInfo";
import WhiteCard from "../../components/ui/WhiteCard";
import TextContainer from "../../components/ui/TextContainer";
import WaveBox from "../../components/ui/WaveBox";
export default function ContentPage() {






    const events = [
        "Dolore muscolo-scheletrico (lombalgia, cervicalgia, artrosi)",
        "Ernie e protrusioni discali",
        "Disturbi vascolari (insufficienza venosa, ulcere)",
        "Processi infiammatori cronici",
        "Infezioni (grazie all’azione ossidante, come coadiuvante)",
        "Medicina sportiva (recupero funzionale)",
    ]

    const somministrazioni = [
        {
            id: 1,
            title: "Autoemotrasfusione",
            dex: "Si preleva sangue, lo si miscela con O₂-O₃ e lo si reinfonde",
        },
        {
            id: 2,
            title: "Infiltrazioni locali",
            dex: "Intramuscolari, periarticolari o paravertebrali",
        },
        {
            id: 3,
            title: "Insufflazioni",
            dex: "Rettali o vaginali (in contesti specifici)",
        },
        {
            id: 4,
            title: "Applicazioni topiche",
            dex: "Acqua o oli ozonizzati",
        },


    ]

    const effetti = [
        "Effetto antinfiammatorio",
        "Miglioramento dell’ossigenazione tissutale",
        "Stimolazione del microcircolo",
        "Modulazione dello stress ossidativo (attivazione dei sistemi antiossidanti endogeni)",
    ]

    const efficacia = [
        "Le evidenze sono eterogenee: alcuni studi mostrano benefici (soprattutto nel dolore lombare), altri risultati limitati",
        "Non è una terapia di prima linea nelle linee guida internazionali",
        "In Italia è praticata da medici formati; il riconoscimento varia per indicazione",
    ]

    const sicurezza = [
        "È generalmente ben tollerata",
        "Mai inalare ozono (tossico per i polmoni)",
        "Controindicata in: favismo, gravidanza, ipertiroidismo non controllato, gravi anemie",
    ]


    const timeline = [

        {
            id: 1,
            title: "XIX secolo – La scoperta dell’ozono",
            list: [
                "1840: il chimico tedesco Christian Friedrich Schönbein identifica l’ozono come gas distinto dall’ossigeno",
                "Viene presto notata la sua forte capacità ossidante e il potere disinfettante.",
            ]

        },
        {
            id: 2,
            title: "Fine XIX – inizi XX secolo – I primi usi medici",
            list: [
                "L’ozono viene impiegato per disinfettare acqua e ambienti ospedalieri.",
                "Nascono i primi generatori di ozono per uso medico.",
                "In Germania e Francia si sperimenta l’uso su ferite infette e ulcere.",
            ]

        },
        {
            id: 3,
            title: "Prima Guerra Mondiale (1914–1918)",
            list: [
                "In campo clinico per la prima volta l’ozono viene usato per trattare le ferite dei soldati, gangrene e infezioni.",
            ]

        },
        {
            id: 4,
            title: "Anni ’30–’50 – Sviluppo delle tecniche",
            list: [
                "Si diffonde la autoemotrasfusione ozonizzata.",
                "L’ozonoterapia entra nella pratica di alcuni medici europei, soprattutto in Germania, Svizzera e Italia.",
                "Con l’avvento degli antibiotici, l’interesse scientifico diminuisce.",
            ]

        },
        {
            id: 5,
            title: "Anni ’60–’70 – Periodo di marginalità",
            list: [
                "La medicina ufficiale privilegia farmaci e chirurgia.",
                "L’ozonoterapia resta confinata a pratiche complementari, spesso senza standard condivisi.",
            ]

        },
        {
            id: 6,
            title: "Anni ’80–’90 – Ripresa e standardizzazione",
            list: [
                "Migliorano i generatori medicali (dosaggi più precisi).",
                "In Italia nascono le prime società scientifiche di ozonoterapia",
                "Si studiano i meccanismi biochimici: stress ossidativo controllato e risposta antiossidante",
            ]

        },
        {
            id: 7,
            title: "XXI secolo – Uso selettivo e ricerca",
            list: [
                "L’ozonoterapia viene studiata soprattutto per:",
                {
                    sublist: [
                        "dolore lombare ed ernia del disco",
                        "medicina del dolore",
                        "patologie vascolari croniche",
                    ],
                },
                "Rimane terapia complementare, con accettazione variabile a livello internazionale.",
                <strong key="italy-medical-act">In Italia è un atto medico</strong>,
            ]

        },

    ]

    const veliosLife = [

        "Prof. Velio Bocci nacque in Italia, si laureò in Medicina e Chirurgia presso l’Università di Siena nel 1954.",

        "Dopo la laurea iniziò come assistente prima in Clinica chirurgica generale, poi in Fisiologia generale, sempre presso la stessa università.",

        "Nel 1981 divenne Direttore dell’Istituto di Fisiologia generale (poi Fisiologia generale e Scienza dell’alimentazione) della Facoltà di Farmacia presso l’Università di Siena. ",

        "Iniziò ricerche fin dagli anni ’60‐’70 su molecole quali le citochine e l’interferone, ponendosi come “pioniere” in tali ambiti della fisiologia e fisiopatologia. ",

        "Fu visiting scholar nel programma Fulbright Program (Anno accademico 1967-1968) presso la University at Buffalo (USA) come studioso non-statunitense. ",

        "Venne nominato Professore Emerito all’Università di Siena nel maggio 2003.",


    ]

    const veliosWork = [

        "Il Prof. Bocci fu autore di numerose pubblicazioni scientifiche, in particolare nel campo della fisiologia, delle citochine, e poi soprattutto della terapia mediante ozono (ozonoterapia). ",

        "Un’opera di rilievo è il libro il cui titolo è: Ozone: A New Medical Drug che esplora le basi biologiche dell’ozono e la sua applicazione medica.",

        "Ha contribuito a standardizzare l’uso della ozonoterapia proponendo che l’ozono, molecola fortemente ossidante, “attivasse” risposte biologiche generando messaggeri chimici che potessero stimolare funzioni fisiologiche essenziali.",

    ]

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
            question: "Chi può sottoporsi all'ozonoterapia?",
            answer: "La maggior parte delle persone può sottoporsi a questo trattamento, ma è importante consultare un medico specialista per determinare se è adatta al proprio caso specifico.",

        },
        {
            id: 7,
            question: "Come viene somministrata l'ozonoterapia?",
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

        <div className="box">

            <TextInfo customClass="text-page-size font-bold">OZONOTERAPIA</TextInfo>
            <WhiteCard place="center" customClass="max-w-250">
                <h2 className="font-bold ">
                    L’Ozonoterapia è una pratica che utilizza una miscela di ossigeno e ozono (O₃) a scopo terapeutico. L’ozono impiegato è ozono medicale, prodotto da apparecchi certificati e usato in concentrazioni controllate.

                </h2>
            </WhiteCard>





            <TextContainer>
                <h1 className="font-bold">PER COSA E' INDICATA</h1>
                <h2 className="font-bold px-5">In ambito clinico viene utilizzata soprattutto come terapia di supporto per:</h2>
                <div className="flex flex-col py-3 px-10 gap-1">
                    {events.map((event, index) => {
                        return (

                            <h2 key={index + 1}>{event}</h2>
                        )
                    })}
                </div>
                <h2 className="font-bold  px-5">Non sostituisce le terapie standard: quando usata, lo è come complemento.</h2>
            </TextContainer>



            <TextContainer>
                <h1 className="font-bold">MECCANISMI D'AZIONE</h1>
                <div className="flex flex-col px-5 gap-1">
                    {effetti.map((effetto, index) => {
                        return (

                            <h2 key={index + 1}>{effetto}.</h2>
                        )
                    })}
                </div>
            </TextContainer>
            <WaveBox>
                <TextInfo customClass="text-page-size"><strong>STORIA DELL' OZONOTERAPIA</strong></TextInfo>
                <TextInfo place="center" customClass="font-bold mx-auto py-20">
                    La storia dell’ozonoterapia si intreccia con la scoperta dell’ozono, l’evoluzione della chimica moderna e l’uso medico dei gas.
                </TextInfo>



                <TextInfo customClass="font-bold">LINEA DEL TEMPO</TextInfo>
                <TextContainer>
                    {timeline.map((event) => {
                        return (

                            <div key={event.id} className="flex flex-col gap-1  ">
                                <h2 className="font-bold">{event.title}</h2>

                                {event.list.map((li, index) => {
                                    return (
                                        <div key={index} className=" flex flex-col px-5">
                                            {typeof li === 'string' ? (
                                                <h2>{li}</h2>
                                            ) : li && typeof li === 'object' && 'sublist' in li ? (
                                                <ul className="px-5">
                                                    {li.sublist.map((subli, subindex) => (
                                                        <li key={subindex + 1}>-{subli}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <div>{li}</div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </TextContainer>
            </WaveBox>
            <TextInfo customClass="text-page-size"><strong>IL PADRE DELL'OZONOTERAPIA IN ITALIA</strong></TextInfo>

            <WhiteCard customClass="flex-row lg:flex lg:gap-5">


                <img className="rounded-4xl my-auto lg:my-auto max-w-50 mx-auto" src="/velio-bocci.jpg" alt="" />


                <div className="text-(--dark-theme) gap-5 my-auto">

                    <h1 className="pb-5">
                        <strong className="text-(--dark-theme) ">Prof. Velio Bocci</strong>
                    </h1>

                    <p>
                        Velio Bocci è stato un medico-fisiologo  italiano, Prof. ordinario presso l’Università di Siena. È stato pioniere nello studio delle citochine e dell’interferone, e ha concentrato buona parte della sua produzione scientifica sull’ozonoterapia, scrivendo testi e articoli che hanno contribuito a formalizzare questo campo. La sua importanza risiede tanto nei risultati e nella produzione scientifica quanto nel ruolo di “innovatore” che ha attraversato i confini tra fisiologia tradizionale e medicina integrativa.
                    </p>



                </div>

            </WhiteCard>

            <TextContainer customClass="mx-10">
                {
                    veliosLife.map((info, index) => {
                        return (
                            <h2 className="my-1" key={index + 1}>
                                {info}
                            </h2>
                        )
                    })
                }
            </TextContainer>


            <div className=" flex flex-col gap-3 mb-10 px-10">



                {
                    veliosWork.map((info, index) => {
                        return (
                            <h2 key={index + 1}>
                                {info}
                            </h2>
                        )
                    })
                }

            </div>

            <WaveBox>
                <h1 className="text-page-size text-center font-bold pt-">DOMANDE FREQUENTI SULL'OZONOTERAPIA'</h1>


                <TextContainer>
                    {faqs.map((faq) => {
                        return (
                            <div className="flex flex-col gap-2">
                                <h1 className="font-bold">{faq.question}</h1>
                                <h2 className="mx-5" >{faq.answer}</h2>
                            </div>
                        )
                    })}
                </TextContainer>
            </WaveBox>
        </div>


    )
}