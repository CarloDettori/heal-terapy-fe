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
        <footer className="p-10  text-white bg-(--dark-theme) text-(--lightest-theme)">

            <div className="my-20 mx-auto p-10 flex flex-col gap-5 max-w-130 border rounded-4xl">

                <h1>
                    FONTI
                </h1>

                <ul className="flex flex-col gap-2 italic">
                    <li><p>"Riduzione del dolore senza chirurgia"</p></li>
                    <li><p>"Stimolazione dei processi naturali di guarigione"</p></li>
                    <li><p>"Selezione accurata del paziente, per garantire trattamenti mirati ed efficaci."</p></li>
                    <li><p>"Cochrane Reviews / studi clinici su PRP, onde d’urto, rTMS, fibromialgia."</p></li>
                </ul>

            </div>
            <div className="mx-auto flex flex-wrap gap-10 justify-evenly place item-center text-white text-start">


                <div className="flex ms-20 flex-wrap justify-center gap-6 ">

                    <a href="https://maps.app.goo.gl/wTK8A56x4ZNBpoNv5">
                        <img width="150" height="150" src="/addres.png" alt="" />
                    </a>
                    <div className="flex flex-col justify-between border-s border-e-(--lightest-theme) ps-3">

                        {infos.map((info) => {
                            return (
                                <div key={info.id} className="flex ">
                                    <i className={info.icon + " mx-1 mt-1"}></i>
                                    {info.info}
                                </div>
                            )
                        })}

                    </div>


                </div>
                <div className="flex content-center text-white text-start">

                    <div id="footer-block-3" className="footer-block flex flex-col justify-center mx-5">
                        <h1 className="text-white text-center pb-3">LINK UTILI</h1>
                        <div id="footer-pages-links" className="flex flex-col text-end">
                            <Link to="/" onClick={() => { window.scrollTo(0, 0) }}>Home</Link>
                            <Link to="/us" onClick={() => { window.scrollTo(0, 0) }} >Chi sono</Link>
                            <Link to="/info" onClick={() => { window.scrollTo(0, 0) }}>Info</Link>
                            <Link to="/contact" onClick={() => { window.scrollTo(0, 0) }}>contact</Link>
                        </div>
                    </div>

                    <div id="footer-block-4" className=" footer-block flex flex-col justify-between px-5 border-s border-e-(--lightest-theme)">
                        <h1 className="inline-block text-(--lightest-theme) pb-3">CONTATTI</h1>
                        <div className="flex flex-col gap-1">
                            <p>Sassari - ITALIA</p>
                            <p>Viale Umberto I, 07100</p>
                            <p>info@clinicaserra.it</p>
                            <div id="social-links-wrapper-f" className="flex gap-5">
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