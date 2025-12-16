export default function ContentPage() {

    const trattamenti = [
        {
            id: 1,
            titolo: "VOLTO",
            img: "/face.png",
            list: [
                "Tossina botulinica per rughe dinamiche",
                "Filler a base di acido ialuronico (volumi, contorni, rughe)",
                "Biorivitalizzazione e biostimolazione cutanea",
                "Skin booster",
                "Trattamenti per occhiaie e sguardo stanco",
                "Trattamenti per pori dilatati e texture irregolare",
                "Trattamenti per macchie e discromie cutanee",
            ]
        },
        {
            id: 2,
            titolo: "COLLO",
            img: "/neck.png",
            list: [
                "Biorivitalizzazione del collo",
                "Filler soft per rughe orizzontali",
                "Trattamenti rassodanti e stimolanti del collagene",
                "Miglioramento della qualità e dell’elasticità cutanea",
            ]
        },
        {
            id: 3,
            titolo: "DECOLLETE'",
            img: "/decollete.png",
            list: [
                "Biorivitalizzazione profonda",
                "Trattamenti anti-macchia",
                "Miglioramento della luminosità e dell’idratazione",
                "Prevenzione e trattamento della lassità cutanea",
            ]
        },

    ]

    const obbiettiviEstetici = [

        "Migliorare la qualità e la salute della pelle ",

        "Contrastare i segni dell’invecchiamento cutaneo ",

        "Ripristinare volumi persi e armonizzare i lineamenti ",

        "Ridurre rughe, lassità e discromie",

        "Prevenire l’invecchiamento precoce",

        "Ottenere risultati naturali, graduali e proporzionati",

    ]



    return (
        <section>

            <h1 className="text-center mt-30 mb-20 font-bold text-page-size">MEDICINA ESTETICA</h1>

            <p className="mx-1 sm:mx-5 rounded-xl bg-white p-10 ">
                La medicina estetica è una disciplina medica finalizzata a migliorare e mantenere l’equilibrio estetico del volto e del corpo, nel pieno rispetto della fisiologia e della salute del paziente.
                Non si limita a correggere un inestetismo, ma mira a preservare la naturalezza, rallentare l’invecchiamento cutaneo e valorizzare i tratti individuali.
                <br /><br />
                Ogni trattamento è preceduto da una valutazione medica personalizzata, basata sull’anatomia, sulla qualità dei tessuti e sulle esigenze specifiche del paziente.

            </p>
            <div className="flex flex-wrap justify-center gap-20 mx-5">
                <div className="rounded-xl bg-white p-20 mt-30">

                    <h1 className="text-center  mb-10 font-bold">OBBIETTIVI DELLA MEDICINA ESTETICA</h1>

                    <div className="my-10 w-full ">
                        {obbiettiviEstetici.map((obj, index) => {
                            return (

                                <div key={index + 1} className="flex flex-col p-10 gap-3 max-w-100 text-center mx-auto justify-center">
                                    <h2 className="font-bold">{obj}</h2>
                                </div>
                            )
                        })}
                    </div>

                </div>

                <div className="rounded-xl bg-white  p-20 mt-30">

                    <h1 className="text-center mb-10 font-bold">UN APPROCCIO MEDICO E SICURO</h1>

                    <div className="my-10 w-full ">
                        {obbiettiviEstetici.map((obj, index) => {
                            return (

                                <div key={index + 1} className="flex flex-col p-10 gap-3 max-w-100 text-center mx-auto justify-center">
                                    <h2 className="font-bold">{obj}</h2>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
            <h1 className="text-center mt-30 mb-10 font-bold">Ogni trattamento è preceduto da una valutazione medica personalizzata, basata sull’anatomia, sulla qualità dei tessuti e sulle esigenze specifiche del paziente.</h1>

            <h1 className="font-bold my-20 mb-0 p-10 text-center ">AREE DI COMPETENZA</h1>

            <div className="flex flex-wrap justify-center my-20 mt-0 p-10 gap-10">

                {trattamenti.map((trat) => {

                    return (

                        <div key={trat.id} className="border-dark-theme p-10 flex flex-col gap-5 p-10 rounded-4xl bg-white max-w-100">
                            <h1 className="font-bold text-center">{trat.titolo}</h1>
                            <img src={trat.img} alt="" />


                            <ul className="flex flex-col gap-3">

                                {trat.list.map((li, index) => {

                                    return (


                                        <li>
                                            <h2 className="font-bold">-{li}</h2>
                                        </li>

                                    )

                                })}

                            </ul>


                        </div>

                    )

                })}

            </div>

            <h1 className="text-center mt-30 mb-10 font-bold">L’obiettivo non è trasformare, ma valorizzare. Ogni trattamento viene calibrato per ottenere risultati naturali, armonici, progressivi, adatti all'età e alla struttura del paziente</h1>

            <h1 className="text-center mt-30 mb-10 font-bold">La medicina estetica moderna punta a far apparire il paziente riposato, fresco e in equilibrio, senza eccessi.</h1>
        </section>
    )
}