
import { Link } from "react-router-dom"
export default function HeroComponent() {



    return (


        <div className="p-10">
            <div className="relative ">
                <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-[url(/hero-bg.jpg)] rounded-full  blur-xsm"></div>
                <div className="flex flex-wrap justify-center py-20 px-12  gap-3 relative">

                    <Link to="us" className="relative">
                        <img className="rounded-full shadow-2xl h-40 my-auto bg-(--lightest-theme) hover:scale-110" src="/doctor.png" alt="" />
                        <p className="text-center absolute bottom-3 px-3 py-1 bg-white leading-none rounded-full left-8.5 ">Dtt. Roberto <br />
                            Chessa</p>
                    </Link>

                    <div className="relative">
                        <div className="absolute rounded-full top-0 left-0 w-full h-full bg-(--lightest-theme)/90 z-0 blur-2xl"></div>
                        <h1 id="hero-text" className="relative p-5 text-(--dark-theme) z-10 text-center" ><strong>Ambulatorio chirurgico di<br />terapia del dolore e medicina rigenerativa<br />del Dott. Roberto Chessa</strong></h1>
                    </div>
                </div>
            </div>
        </div>


    )
}