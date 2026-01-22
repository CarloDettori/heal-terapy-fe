import { useEffect, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";



export default function OzonoPeoplePage() {

    const { setShowbar, setSidebarLinks } = useContext(GlobalContext);

    useEffect(() => {
        setShowbar(true)
        // Imposta i link specifici per questa pagina
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


            ]);



    }, []);

    const veliosLife = [

        "Prof. Velio Bocci nacque in Italia, si laureò in Medicina e Chirurgia presso l’Università di Siena nel 1954.",

        "Dopo la laurea iniziò come assistente prima in Clinica chirurgica generale, poi in Fisiologia generale, sempre presso la stessa università.",

        "Nel 1981 divenne Direttore dell’Istituto di Fisiologia generale (poi Fisiologia generale e Scienza dell’alimentazione) della Facoltà di Farmacia presso l’Università di Siena. ",

        "Iniziò ricerche fin dagli anni ’60‐’70 su molecole quali le citochine e l’interferone, ponendosi come “pioniere” in tali ambiti della fisiologia e fisiopatologia. ",

        "Fu visiting scholar nel programma Fulbright Program (Anno accademico 1967-1968) presso la University at Buffalo (USA) come studioso non-statunitense. ",

        "Venne nominato Professore Emerito all’Università di Siena nel maggio 2003.",


    ]

    const veliosWork = [

        "Bocci fu autore di numerose pubblicazioni scientifiche, in particolare nel campo della fisiologia, delle citochine, e poi soprattutto della terapia mediante ozono (ozonoterapia). ",

        "Un’opera di rilievo è il libro titolato Ozone: A New Medical Drug che esplora le basi biologiche dell’ozono e la sua applicazione medica.",

        "Ha contribuito a standardizzare l’uso della ozonoterapia proponendo che l’ozono, molecola fortemente ossidante, “attivasse” risposte biologiche generando messaggeri chimici che potessero stimolare funzioni fisiologiche essenziali.",

        "È spesso citato come “padre della ozonoterapia moderna” da associazioni specializzate. ",

        "Ha promosso l’idea che terapie alternative a basso costo e con efficacia potenziale potessero essere integrate nei sistemi sanitari pubblici. ",

    ]

    return (



        <section>

            <h1 className="text-center mt-30 mb-20  text-page-size"><strong>PRINCIPALE ESPONENTE DELL'OZONOTERAPIA IN ITALIA</strong></h1>

            <div className="bg-white rounded-2xl p-10 lg:flex lg:gap-5">


                <img className="rounded-4xl my-auto lg:my-auto max-w-50 mx-auto" src="/doctor.png" alt="" />


                <div className="text-(--dark-theme) gap-5 my-auto">

                    <h1 className="pb-5">
                        <strong className="text-(--dark-theme) ">Dtt. Velio Bocci</strong>
                    </h1>

                    <p>
                        Velio Bocci è stato un medico-ricercatore italiano che ha operato all’Università di Siena, è stato pioniere nello studio delle citochine e dell’interferone, e ha concentrato buona parte della sua produzione scientifica sull’ozonoterapia, scrivendo testi e articoli che hanno contribuito a formalizzare questo campo. La sua importanza risiede tanto nei risultati e nella produzione scientifica quanto nel ruolo di “innovatore” che ha attraversato i confini tra fisiologia tradizionale e medicina integrativa.
                    </p>



                </div>

            </div>

            <div className="m-10 font-bold">
                {
                    veliosLife.map((info, index) => {
                        return (
                            <h2 className="my-5" key={index + 1}>
                                {info}
                            </h2>
                        )
                    })
                }
            </div>

            <h1 className=" mt-20 mb-3 px-5 font-bold ">COSA HA FATTO / PRINCIPALI CONTRIBUTI</h1>

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






        </section>
    )
}