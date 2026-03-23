export default function WhiteCard({ children }) {
    return (
        <div className="h-full flex flex-col gap-10 mx-auto p-10 sm:p-20 max-w-150 rounded-xl bg-white text-center mt-20">
            {children}
        </div>
    )
}