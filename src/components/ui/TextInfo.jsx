export default function TextInfo({ children, customClass = "", customColor = "--dark-theme", size = 2 }) {
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
        <div className={`my-20 text-center max-w-180 mx-auto text-(${customColor}) ${customClass}`}>
            <Tag>{children}</Tag>
        </div>
    )
}
