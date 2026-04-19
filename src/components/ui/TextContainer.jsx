export default function TextContainer({ children, customClass = "", customColor = "--dark-theme" }) {


    return (
        <div className={`flex flex-col gap-3 mx-auto text-(${customColor}) ${customClass}`}>
            {children}
        </div>
    )
}
