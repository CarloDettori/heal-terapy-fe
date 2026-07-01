import TextContainer from "../components/ui/TextContainer.jsx"
import TextInfo from "../components/ui/TextInfo"
export default function PatologyPage() {

    const pathology = [
        "Fibromialgia",
        "Neuropatie",
        "Patologie ortopediche: osteoartrite localizzata, tendinopatie, sindromi canalicolari degli arti",
        "Piede diabetico",
        "Ulcere cutanee e ustioni",
        "Demenza senile, M. Alzheimer",
        "Malattia infiammatoria cronica dell’intestino",
        "Malattie autoimmuni: sclerosi multipla, artrite reumatoide, malattie infiammatorie croniche intestinali, sindrome di Raynaud",
        "Morbo di Parkinson",
        "Oftalmologia: retinopatia diabetica, degenerazione maculare senile, retinite pigmentosa, glaucoma cronico, maculopatia secca",
        "Panniculopatia edemato-fibrosa (cellulite)",
        "Patologie interessanti le Tube di Eustachio",
        "Sclerosi Multipla",
        "Sindrome da fatica cronica",
    ]



    return (
        <section>

            <TextInfo customClass=" text-page-size font-bold mt-30">PATOLOGIE TRATTATE IN TERAPIA DEL DOLORE</TextInfo>

            <TextContainer customClass="gap-5 p-20">
                {
                    pathology.map((pat, index) => {
                        return (

                            <h1 key={index + 1}>{pat}</h1>

                        )


                    })
                }
            </TextContainer>





        </section>
    )
}