export default function WhiteCard({ children, customClass, place = "left" }) {
    return (
        <div className="sm:m-8 m-3">
            <div className={`h-full shadow-xl flex flex-col gap-10 p-8 sm:p-20 rounded-4xl bg-white text-center my-20 mx-auto place-center text-${place} ${customClass}`}>
                {children}
            </div>
        </div>
    )
}