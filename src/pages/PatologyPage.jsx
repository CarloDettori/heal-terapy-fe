import TextContainer from "../components/ui/TextContainer.jsx"
import TextInfo from "../components/ui/TextInfo"
export default function PatologyPage() {

    const pathology = [
        "Patologie autoimmuni",
        "Patologie vascolari",
        "Patologie osteoartritiche",
        "Patologie Neurologiche",

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