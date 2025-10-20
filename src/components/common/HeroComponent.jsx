export default function HeroComponent() {



    return (


        <div className="p-10">
            <div id="hero" className="relative ">
                <div id="hero-background" className="absolute top-0 left-0 w-full h-full bg-cover "></div>
                <div id="hero-content" className="flex flex-wrap justify-center py-20 px-10  gap-3 relative">

                    <a href="https://www.miodottore.it/roberto-chessa-2/anestesista/sassari#profile-info" className="relative">
                        <img className="rounded-full shadow-xl h-40 my-auto " src="https://placehold.co/600x600" alt="" />
                        <p className="text-center absolute bottom-3 left-11 ">Dtt. Roberto <br />
                            Chessa</p>
                    </a>

                    <h1 className="my-auto text-(--dark-theme) text-center md:text-left" ><strong>Ambulatorio chirurgico di<br />terapia del dolore e medicina rigenerativa<br />del Dott. Roberto Chessa</strong></h1>

                </div>
            </div>
        </div>


    )
}