import { Link } from "react-router-dom"

export default function Footer() {

    const infos = [
        {
            id: 1,
            icon: "fa-solid fa-location-dot",
            info: <a href="https://maps.app.goo.gl/WQXe95bwy4mC1Mct8"><h2 className="underline">"Viale Umberto I, 123, 07100 SS"</h2></a>

        },
        {
            id: 2,
            icon: "fa-solid fa-phone",
            info: "339 7248519"
        },
        {
            id: 3,
            icon: "fa-solid fa-envelope",
            info: "dott.robertochessa@gmail.com"
        },
        {
            id: 4,
            icon: "fa-solid fa-asterisk",
            info: <a href="https://www.miodottore.it/roberto-chessa-2/anestesista/sassari#profile-info"><h2 className="underline">MioDottore.it</h2></a>
        },

    ]

    return (
        <footer className="p-10 flex flex-col z-500 text-white bg-(--dark-theme) text-(--lightest-theme) border-top-theme">

            <div className="my-20 mx-auto p-10 flex flex-col gap-5 max-w-130 border rounded-4xl">

                <h1>
                    BIBLIOGRAFIA
                </h1>

                <ul className="flex flex-col gap-2 italic">
                    <li><p>"Riduzione del dolore senza chirurgia"</p></li>
                    <li><p>"Stimolazione dei processi naturali di guarigione"</p></li>
                    <li><p>"Selezione accurata del paziente, per garantire trattamenti mirati ed efficaci."</p></li>
                    <li><p>"Cochrane Reviews / studi clinici su PRP, onde d’urto, rTMS, fibromialgia."</p></li>
                </ul>

            </div>


            <div id="footer-content-wrapper" className="flex  justify-between place item-center text-white text-start">

                <div id="footer-copyright-wrapper" className="footer-block flex place-content-center  text-white text-start">



                    <a id="footer-block-1" href="https://www.miodottore.it/roberto-chessa-2/anestesista/sassari#profile-info" className="relative pe-7">
                        <img id="footer-img" className="rounded-full shadow-2xl h-40 my-auto bg-(--lightest-theme) hover:scale-110" src="/doctor.png" alt="" />
                    </a>

                    <div id="footer-block-2" className=" px-5 footer-block border-s border-e-(--lightest-theme) flex flex-col justify-between">


                        {infos.map((info) => {
                            return (
                                <div key={info.id} className="address-info flex max-w-66">
                                    <i className={info.icon + " me-3 mt-1"}></i>
                                    {info.info}
                                </div>
                            )
                        })}


                    </div>

                </div>

                <div id="footer-info-wrapper" className="flex place-content-center item-center  text-white text-start">

                    <div id="footer-block-3" className="footer-block flex flex-col justify-between  px-8">
                        <h1 className="text-white text-center pb-3">PAGINE DEL SITO</h1>
                        <div id="footer-pages-links" className="flex flex-col  text-end">
                            <Link to="/" onClick={() => { window.scrollTo(0, 0) }}>Home</Link>
                            <Link to="/us" onClick={() => { window.scrollTo(0, 0) }}>Chi Sono</Link>
                            <Link to="/info" onClick={() => { window.scrollTo(0, 0) }}>Info</Link>
                            <Link to="/contact" onClick={() => { window.scrollTo(0, 0) }}>Contattami</Link>
                        </div>
                    </div>

                    <div id="footer-block-4" className=" footer-block flex flex-col justify-between px-7 border-s border-e-white">
                        <h1 className="inline-block text-white pb-3">CONTATTI</h1>
                        <div className="flex flex-col">
                            <p>Sassari - ITALIA</p>
                            <p>Viale Umberto I, 123,  07100</p>
                            <p>info@clinicachessa.it</p>
                            <div id="social-links-wrapper-f" className="flex gap-8 pt-4">
                                <a href=""><i className="member-social-footer fa-brands fa-facebook-f"></i></a>
                                <a href=""><i className="member-social-footer fa-brands fa-instagram"></i></a>
                                <a href=""><i className="member-social-footer fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </footer>

    )
}