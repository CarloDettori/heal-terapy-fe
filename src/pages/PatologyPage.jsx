import TextContainer from "../components/ui/TextContainer.jsx"
import TextInfo from "../components/ui/TextInfo"
export default function PatologyPage() {

    const pathology = [
        "Patologie autoimmuni (fibromialgia",
        "Patologie vascolari (piede diabetico - ulcere diabetiche",
        "Patologie osteoarticolari (ernia discale - tendinite - borsiti - artosi: spalla, gomito, polso, ginocchio, caviglia - neuroma di Morton - spine calcaneari",
        "Patologie Neurologiche (neuropatie diabetiche: arto superiore ed inferione - neuropatia post erpetica",

    ]



    return (
        <div className="box">

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





        </div>
    )
}