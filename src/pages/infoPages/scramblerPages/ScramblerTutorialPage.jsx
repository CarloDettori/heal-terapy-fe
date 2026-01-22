
import { useEffect, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";


export default function ScramblerTutorialPage() {

    const { setShowbar, setSidebarLinks } = useContext(GlobalContext);

    useEffect(() => {
        setShowbar(true)
        setSidebarLinks(
            [
                {
                    id: 1,
                    route: "/info/4",
                    title: "SCRAMBLER THERAPY®",
                },
                {
                    id: 2,
                    route: "/info/4/2",
                    title: "Storia Scrambler Therapy®",
                },
                {
                    id: 3,
                    route: "/info/4/3",
                    title: "Esponenti Scrambler Therapy®",
                },
                {
                    id: 4,
                    route: "/info/4/4",
                    title: "Miti infondati sulla Scrambler Therapy®",
                },
                {
                    id: 5,
                    route: "/info/4/5",
                    title: "Domande frequenti",
                },
                {
                    id: 6,
                    route: "/info/4/6",
                    title: "Video Conferenza Giuseppe Marineo",
                },
            ]);
    }, []);








    return (



        <section className="sidebar-space">




            <div className="my-20">

                <h1 className="text-center mt-30 mb-20 text-page-size font-bold">CONFERENZA PROF. MARINEO - ROMA EXEDRA</h1>


                <div className=" w-full px-5">
                    <video controls className="flex mx-auto" src="/scrambler-tutorial.mp4"></video>
                </div>
            </div>

        </section>


    )
}