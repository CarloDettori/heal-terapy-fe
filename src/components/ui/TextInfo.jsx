export default function TextInfo({ children, customClass = "", customColor = "--dark-theme", size = 2, place = "center" }) {
    let Tag = "h2"

    switch (size) {
        case 1:
            Tag = "h1"
            break
        case 2:
            Tag = "h2"
            break
        case 3:
            Tag = "p"
            break
        case 4:
            Tag = "h3"
            break
        default:
            Tag = "h2"
    }

    return (
        <div className={`text-center text-(${customColor}) ${customClass} text-${place}`}>
            <Tag className=" px-5">{children}</Tag>
        </div>
    )
}
