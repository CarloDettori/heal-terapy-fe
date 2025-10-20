
import HeroComponent from "../components/common/HeroComponent.jsx"
export default function HomePage() {


    const knowledges = [

        {
            id: 1,
            title: "TERAPIA DEL DOLORE",
            icon: "/headache.png",
            description: "Le terapie del dolore mirano a ridurre o eliminare la sofferenza fisica, migliorando la qualità di vita del paziente. Agiscono sulle cause o sui meccanismi del dolore, utilizzando approcci farmacologici, fisici e psicologici per favorire il benessere e il recupero funzionale."
        },
        {
            id: 2,
            title: "MEDICINA RIGENERATIVA",
            icon: "/regenerative.png",
            description: "La medicina rigenerativa mira a riparare o sostituire cellule, tessuti e organi danneggiati, stimolando i naturali processi di guarigione o utilizzando cellule staminali e biomateriali. Il suo scopo è ristabilire la funzione originale dei tessuti, superando i limiti dei trattamenti tradizionali basati solo sulla cura dei sintomi."
        }

    ]


    const products = [

        {
            id: 1,
            icon: "/acupunture.png",
            description: "Agopuntura per anestesia",
        },
        {
            id: 2,
            icon: "/injection.png",
            description: "Iniezione di anestetico in nervo periferico per analgesia",
        },
        {
            id: 3,
            icon: "/laser.png",
            description: "Laser terapia antalgica",
        },
        {
            id: 4,
            icon: "/ozone.png",
            description: "Ozonoterapia",
        },
        {
            id: 5,
            icon: "/scrumbler.png",
            description: "Innibizione dolore cronico tramite elettro-analgesia",
        }

    ]



    return (
        <>

            <HeroComponent />

            <section className="text-center">


                <div className="flex flex-wrap justify-around">

                    {
                        knowledges.map((knowledges) => {
                            return (


                                <div key={knowledges.id} className="home-paragraph">
                                    <h1>{knowledges.title}</h1>
                                    <div>
                                        <img className="home-icon" src={knowledges.icon} alt="" />
                                        <h2 className="home-corpo">{knowledges.description}</h2>
                                    </div>
                                </div>

                            )
                        })
                    }




                </div>

                <h1 className="my-20">COSA OFFRIAMO?</h1>
                <div className="flex mb-10 flex-wrap gap-10 justify-center">
                    {
                        products.map((product) => {
                            return (


                                <div key={product.id} className="max-w-50 bg-white p-5 rounded-2xl">
                                    <img src={product.icon} alt="" />
                                    <h2 className="home-corpo mt-3" >{product.description}</h2>
                                </div>

                            )
                        })
                    }
                </div>







            </section>
        </>
    )
}