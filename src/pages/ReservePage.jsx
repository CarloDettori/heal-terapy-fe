

export default function ReservePage() {




    return (
        <section>

            <h1 className="text-center text-page-size font-bold mb-20 mt-30">PRENOTA UNA VISITA</h1>

            <h2 className="font-bold text-center text-(--theme)">puoi prenotare una visita in clinica oppure un precolloquio online</h2>

            <div className="flex flex-wrap justify-center gap-20 mx-5 ">

                <div className="p-20 w-180 ">

                    <h1 className="text-center  mb-10 font-bold">VISITA IN CLINICA</h1>

                    <div className="srounded-xl bg-white p-10 mt-10">
                        <h2>Chiama il numero <strong>339 7248519</strong><br /> oppure scrivi una mail all'indirizzo <strong>dott.robertochessa@gmail.com</strong></h2>
                    </div>

                </div>

                <div className=" p-20 w-180 h-full">

                    <h1 className="text-center mb-10 font-bold">PRECOLLOQUIO ONLINE</h1>

                    <div className=" rounded-xl bg-white p-10 mt-10">
                        <h2>Clicca su <strong>paga e prenota</strong> per fissare una visita di precolloqio online. <br /> Il prezzo di ogni visita è <strong>30€</strong></h2>
                        <button className="flex px-5 p-3 rounded-3xl border-theme mt-5 text-(--theme) font-bold hover:text-white hover:bg-(--theme) cursor-pointer" onClick={""}>
                            PAGA E PRENOTA
                        </button>
                    </div>



                </div>

            </div>

        </section>
    );

};

