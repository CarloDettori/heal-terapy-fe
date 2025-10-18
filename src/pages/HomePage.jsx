
import CarouselWithContent from "../components/common/CarouselWithContent.jsx"
export default function HomePage() {

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
        },

    ]



    return (
        <>
            <div id="hero">
                <strong><h1 className="py-20 text-center text-(--lightest-theme)" >Ambulatorio chirurgico di <br /> terapia del dolore e medicina rigenerativa </h1></strong>
            </div>



            <section className="text-center">


                <div className="flex flex-wrap justify-around">
                    <div className="home-paragraph">
                        <h1>TERAPIA DEL DOLORE</h1>
                        <div>
                            <img className="home-icon" src="/headache.png" alt="" />
                            <h2 className="home-corpo">Le terapie del dolore mirano a ridurre o eliminare la sofferenza fisica, migliorando la qualità di vita del paziente. Agiscono sulle cause o sui meccanismi del dolore, utilizzando approcci farmacologici, fisici e psicologici per favorire il benessere e il recupero funzionale.</h2>
                        </div>
                    </div>

                    <div className="home-paragraph">
                        <h1>MEDICINA RIGENERATIVA</h1>
                        <div>
                            <img className="home-icon" src="/regenerative.png" alt="" />
                            <h2 className="home-corpo" >La medicina rigenerativa mira a riparare o sostituire cellule, tessuti e organi danneggiati, stimolando i naturali processi di guarigione o utilizzando cellule staminali e biomateriali. Il suo scopo è ristabilire la funzione originale dei tessuti, superando i limiti dei trattamenti tradizionali basati solo sulla cura dei sintomi.</h2>
                        </div>
                    </div>
                </div>

                <h1 className="my-20">COSA OFFRIAMO?</h1>
                <div className="flex mb-10 flex-wrap gap-10 justify-center">
                    {
                        products.map((product) => {
                            return (


                                <div className="max-w-50 bg-white p-5 rounded-2xl">
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