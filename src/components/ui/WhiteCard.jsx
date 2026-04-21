export default function WhiteCard({ children, customClass, place = "left" }) {
    return (
        <div className={`h-full shadow-xl flex flex-col gap-10 mx-auto p-10 sm:p-20 rounded-4xl bg-white text-center my-20 text-${place} ${customClass}`}>
            {children}
        </div>
    )
}