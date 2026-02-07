import { Link } from "react-router-dom"

export default function TherapiesPage() {


    const infos = [

        {
            id: 1,
            title: "Ozonoterapia",
            subtitle: "La storia e l’innovazione",
            img: "/ozone.png",
            lists: "",
            description: "L’ozonoterapia utilizza una miscela di ossigeno e ozono con finalità terapeutiche, in particolare per dolori articolari, lombalgie e patologie infiammatorie. Uno dei massimi studiosi italiani del settore, Velio Bocci, ha contribuito a definirne le basi scientifiche, evidenziando il ruolo antinfiammatorio e modulatore dell’ozono. Oggi l’ozonoterapia rappresenta un supporto sicuro e versatile, applicabile in ambito ambulatoriale e privo di incisioni chirurgiche."

        },
        {
            id: 2,
            title: "Scrambler Therapy (Calmare®)",
            subtitle: "calmare il dolore neuropatico",
            img: "/scrumbler.png",
            lists: "",
            description: "La Scrambler Therapy, conosciuta anche come Calmare®, è una tecnologia non invasiva che invia segnali elettrici “non dolorosi” al sistema nervoso, rimodulando la percezione del dolore. È particolarmente indicata per il trattamento del fuoco di Sant’Antonio e di altre neuropatie croniche. Negli Stati Uniti è riconosciuta come metodo efficace e sicuro da numerosi centri universitari(es.Johns Hopkins, Cleveland Clinic)."

        },
    ]


    return (
        <section>

            <h1 className="text-center text-page-size font-bold mb-20 mt-30">TECNICHE UTILIZZATE IN THERAPIA DEL DOLORE</h1>

            <div className="flex flex-wrap justify-center my-20 mt-0 p-10 gap-10">

                {infos.map((info) => {

                    return (

                        <Link to={`/info/${info.id}`} key={info.id} className="border-dark-theme p-10 flex flex-col gap-5 p-10 rounded-4xl bg-white max-w-100 hover:scale-102">
                            <img className="max-w-50 mx-auto" src={info.img} alt="info-img" />
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <h1>{info.title}</h1>
                                    <h2>{info.subtitle}</h2>
                                </div>
                                {info.description ? <p>{info.description}</p> : ""}
                                {info.lists ?
                                    <ul className="flex flex-col gap-3">


                                        {info.lists.map((li) => {

                                            return (
                                                <li key={li.title}>
                                                    <h2>{li.title}</h2>
                                                    <p>{li.description}</p>
                                                </li>
                                            )

                                        })}

                                    </ul>
                                    :
                                    ""
                                }
                            </div>
                        </Link>

                    )

                })}

            </div>

            <h1 className="text-center text-(--dark-theme) font-bold p-30">“Curare il dolore non significa solo eliminarlo,<br />ma ristabilire l’equilibrio del corpo e permettere alla persona di tornare a vivere in piena autonomia.<br />La scienza moderna ci offre strumenti innovativil’obiettivo è usarli con rigore, esperienza e umanità.”</h1>



        </section>
    )
}