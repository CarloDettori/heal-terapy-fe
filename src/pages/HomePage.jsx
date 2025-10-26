
import buttonText from "@material-tailwind/react/theme/components/button/buttonText.js"
import HeroComponent from "../components/common/HeroComponent.jsx"
export default function HomePage() {

    {/*dati cards*/ }
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

    const guides = [
        {
            id: 1,
            img: "/physiotherapy.png",
            text: "Visita specialistica personalizzata per individuare la causa reale del dolore",
        },
        {
            id: 2,
            img: "/blood-test.png",
            text: "Esami mirati (lisosomiali, neurologici, funzionali) per pianificare il trattamento più adatto",
        },
        {
            id: 3,
            img: "/physical-examination.png",
            text: "Terapie mini-invasive eseguite in ambulatorio, con ritorno immediato alla vita quotidiana",
        },
        {
            id: 4,
            img: "/schedule.png",
            text: "Follow-up dedicato per monitorare la risposta e mantenere i risultati nel tempo",
        },
    ]



    return (
        <>

            <HeroComponent />

            <section className="text-center">

                <h1 className="my-20 pb-30 font-bold text-(--theme) text-page-size">
                    Approccio innovativo, mini-invasivo e personalizzato <br />alla cura del dolore cronico e alla rigenerazione dei tessuti.
                </h1>
                <div className="flex flex-wrap justify-around my-20 gap-30">

                    {
                        knowledges.map((knowledges) => {
                            return (


                                <div key={knowledges.id} className="max-w-100">
                                    <h1 className="font-bold">{knowledges.title}</h1>
                                    <div>
                                        <img className=" w-1/2 mx-auto items-center my-10" src={knowledges.icon} alt="" />
                                        <h2 className="home-corpo">{knowledges.description}</h2>
                                    </div>
                                </div>

                            )
                        })
                    }




                </div>


                <h1 className="my-20 mt-30 font-bold">COSA OFFRO?</h1>
                <div className="flex mb-10 flex-wrap gap-10 justify-center">
                    {
                        products.map((product) => {
                            return (


                                <div key={product.id} className=" max-w-50 bg-white p-5 rounded-2xl">
                                    <img src={product.icon} alt="" />
                                    <h2 className="home-corpo mt-3" >{product.description}</h2>
                                </div>

                            )
                        })
                    }
                </div>



                <h1 className="my-20 mt-50 font-bold">COSA ASPETTARSI</h1>
                <div className="flex flex-col gap-40 pb-30">
                    {
                        guides.map((guide) => {

                            return (

                                <div key={guide.id} className="max-w-500 flex flex-wrap justify-center">
                                    <img src={guide.img} className="h-100 py-15" alt="" />
                                    <h1 className=" my-auto max-w-150" >{guide.text}</h1>
                                </div>

                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}