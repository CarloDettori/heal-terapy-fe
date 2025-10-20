
import { Link } from "react-router-dom"
export default function HeroComponent() {



    return (


        <div className="p-10">
            <div id="hero" className="relative ">
                <div id="hero-background" className="absolute top-0 left-0 w-full h-full bg-cover "></div>
                <div id="hero-content" className="flex flex-wrap justify-center py-20 px-12  gap-3 relative">

                    <Link to="us" className="relative">
                        <img className="rounded-full shadow-xl h-40 my-auto bg-(--lightest-theme) hover:scale-110" src="/doctor.png" alt="" />
                        <p className="text-center absolute bottom-3 px-3 py-1 bg-white leading-none rounded-full left-8.5 ">Dtt. Roberto <br />
                            Chessa</p>
                    </Link>

                    <h1 id="hero-text" className="my-auto text-(--dark-theme)  text-center" ><strong>Ambulatorio chirurgico di<br />terapia del dolore e medicina rigenerativa<br />del Dott. Roberto Chessa</strong></h1>

                </div>
            </div>
        </div>


    )
}