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
        <footer className="p-2.5  text-white bg-(--dark-theme) text-(--lightest-theme)">
            <div className="mx-auto my-15 flex flex-wrap justify-center ">

                <a href="https://maps.app.goo.gl/wTK8A56x4ZNBpoNv5">
                    <img className="m-3" width="150" height="150" src="/addres.png" alt="" />
                </a>
                <div className="flex flex-col justify-evenly">

                    {infos.map((info) => {
                        return (
                            <div key={info.id} className="my-2 flex ">
                                <i className={info.icon + " mx-1 mt-1"}></i>
                                {info.info}
                            </div>
                        )
                    })}

                </div>


            </div>
        </footer>

    )
}