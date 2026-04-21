export default function TextContainer({ children, customClass = "", customColor = "--dark-theme", place = "left" }) {


    return (
        <div className={`flex flex-col gap-3 m-0 lg:m-20 text-(${customColor}) ${customClass} text-${place}`}>
            {children}
        </div>
    )
}
