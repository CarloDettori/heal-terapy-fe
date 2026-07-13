export default function TextContainer({ children, customClass = "", customColor = "--dark-theme", place = "left" }) {


    return (
        <div className="flex justify-center">
            <div className={`flex flex-col gap-3 mx-5 lg:p-20 text-(${customColor}) ${customClass} text-${place}`}>
                {children}
            </div>
        </div>
    )
}
