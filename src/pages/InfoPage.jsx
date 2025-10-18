export default function InfoPage() {

    const infos = [
        {
            id: 1,
            icon: "fa-solid fa-location-dot",
            info: <a href="https://www.miodottore.it/roberto-chessa-2/anestesista/sassari#profile-info"><h2 className="underline">"Viale Umberto I, 123, 07100 SS"</h2></a>

        },
        {
            id: 2,
            icon: "fa-solid fa-phone",
            info: "339 7248519"
        },
        {
            id: 3,
            icon: "fa-solid fa-envelope",
            info: "roberto.chessa@gmail.com"
        },
        {
            id: 4,
            icon: "fa-solid fa-asterisk",
            info: <a href="https://www.miodottore.it/roberto-chessa-2/anestesista/sassari#profile-info"><h2 className="underline">MioDottore.it</h2></a>
        },

    ]

    return (
        <section>

            <h2></h2>
            <div className="mx-auto mt-15 flex justify-center ">

                <a href="https://maps.app.goo.gl/wTK8A56x4ZNBpoNv5">
                    <img className="m-3" width="150" height="150" src="/addres.png" alt="" />
                </a>
                <div className="flex flex-col justify-evenly">

                    {infos.map((info) => {
                        return (
                            <div className="my-2 flex ">
                                <i class={info.icon + " mx-1 mt-1"}></i>
                                {info.info}
                            </div>
                        )
                    })}

                </div>


            </div>


        </section>
    )
}