

export default function ReservePage() {




    return (
        <section>

            <h1 className="text-center text-page-size font-bold mb-20 mt-30">PRENOTA UNA VISITA</h1>

            <h2 className="font-bold text-center text-(--theme)">puoi prenotare online una visita in clinica</h2>



            <div className="flex flex-col mx-auto p-20 w-180 h-full">

                <h1 className="text-center font-bold">PRENOTAZIONE ONLINE</h1>

                <div className=" rounded-xl bg-white p-10 mt-10">
                    <h2>Clicca su <strong>paga e prenota</strong> per fissare una visita di precolloqio online. <br /> Per poter prenotare una visita è previsto un'acconto di <strong>30€</strong></h2>
                    <button className="flex px-5 p-3 rounded-3xl border-theme mt-5 text-(--theme) font-bold hover:text-white hover:bg-(--theme) cursor-pointer" onClick={""}>
                        PAGA E PRENOTA
                    </button>
                </div>



            </div>



        </section>
    );

};

