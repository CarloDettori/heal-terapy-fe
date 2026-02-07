
export default function PatologyPage() {

    const pathology = [
        "Fibromialgia",
        "Ischemie degli arti",
        "Malattie infettive cutanee acute o croniche causate da batteri, virus e funghi",
        "Neuropatia causata dalla chemioterapia",
        "Patologie ortopediche: osteoartrite localizzata, tendinopatie, sindromi canalicolari degli arti",
        "Piede diabetico",
        "Sindrome di Baastrup",
        "Spondilolisi",
        "Spondilolistesi",
        "Stenosi canalare",
        "Ulcere cutanee e ustioni",
        "Mielopatia spondilogena",
        "Articolazione Temporo Mandibolare (ATM)",
        "Impieghi con Evidenza di tipo C",
        "Basata su opinioni di esperti senza valutazioni critiche esplicite, case report, fisiologia, ricerche di laboratorio, epidemiologia descrittiva. 13,103-132-137-139-140-141-143-146-148, 256-265",
        "Asma bronchiale",
        "Astenia correlata al cancro. L’ozonoterapia, associata alla terapia convenzionale, può diminuire gli effetti collaterali della terapia oncologica, accelerare e migliorare i risultati. Pertanto, l’ossigeno-ozono è da considerarsi terapia di supporto. Inoltre ai dosaggi impiegati nella terapia infiltrativa l’ozono non può indurre mutazioni oncogene",
        "Demenza senile, M. Alzheimer",
        "Endometriosi e patologie croniche ginecologiche",
        "Malattia infiammatoria cronica dell’intestino",
        "Malattie autoimmuni: sclerosi multipla, artrite reumatoide, malattie infiammatorie croniche intestinali, sindrome di Raynaud",
        "Malattie del fegato: epatite A, B, C",
        "Malattie polmonari quali enfisema, fibrosi polmonare, sindrome da distress respiratorio acuto, BPCO",
        "Morbo di Parkinson",
        "Oftalmologia: retinopatia diabetica, degenerazione maculare senile, retinite pigmentosa, glaucoma cronico, maculopatia secca",
        "Panniculopatia edemato-fibrosa (cellulite)",
        "Patologie interessanti le Tube di Eustachio",
        "Sclerosi Laterale Amiotrofica (SLA)",
        "Sclerosi Multipla",
        "Sepsi grave e disfunzione multi organo",
        "Sindrome da fatica cronica",
    ]



    return (
        <section>

            <h1 className="text-center text-page-size font-bold mb-20 mt-30">PATOLOGIE TRATTATE IN TERAPIA DEL DOLORE</h1>

            <div className="flex flex-col gap-5 m-20  p-20">
                {
                    pathology.map((pat, index) => {
                        return (

                            <h1 key={index + 1}>{pat}</h1>

                        )


                    })
                }
            </div>

            <h1 className="text-center text-(--dark-theme) font-bold p-30">“Curare il dolore non significa solo eliminarlo,<br />ma ristabilire l’equilibrio del corpo e permettere alla persona di tornare a vivere in piena autonomia.<br />La scienza moderna ci offre strumenti innovativil’obiettivo è usarli con rigore, esperienza e umanità.”</h1>



        </section>
    )
}