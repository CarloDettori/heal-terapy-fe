export default function WhiteCard({ children, customClass }) {
    return (
        <div className={`h-full shadow-xl flex flex-col gap-10 mx-auto p-10 sm:p-20 max-w-150 rounded-4xl bg-white text-center my-20 ${customClass}`}>
            {children}
        </div>
    )
}